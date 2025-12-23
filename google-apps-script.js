/**
 * Google Apps Script for Membership Form Submission
 * 
 * SETUP INSTRUCTIONS:
 * 1. Open Google Sheets: https://sheets.google.com
 * 2. Open or create a spreadsheet with ID: 1R2xcZthgctfdWj6jwnOzZ9q87n6GbluNLeMCDgMexfQ
 * 3. Go to Extensions > Apps Script
 * 4. Delete the default code and paste this entire file
 * 5. Update the SPREADSHEET_ID and EMAIL variables below
 * 6. Save the project (Ctrl+S or Cmd+S)
 * 7. Click "Deploy" > "New deployment"
 * 8. Select type: "Web app"
 * 9. Execute as: "Me"
 * 10. Who has access: "Anyone"
 * 11. Click "Deploy"
 * 12. Copy the Web App URL and use it in your form submission
 * 
 * IMPORTANT: The first time you run it, you'll need to authorize the script
 * to access your Google Sheets and Gmail.
 */

// Configuration
const SPREADSHEET_ID = '1R2xcZthgctfdWj6jwnOzZ9q87n6GbluNLeMCDgMexfQ';
const SHEET_NAME = 'members';
const NOTIFICATION_EMAIL = 'brihottoro@gmail.com';
const DRIVE_FOLDER_NAME = 'Membership Photos'; // Google Drive folder name for storing photos

/**
 * Handle POST request from the membership form
 */
function doPost(e) {
  try {
    // Parse the JSON data from the request
    const data = JSON.parse(e.postData.contents);
    
    // Get the spreadsheet and sheet
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    // Create the sheet if it doesn't exist
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      // Add headers
      const headers = [
        'Timestamp',
        'First Name',
        'Last Name',
        'Date of Birth',
        'Age',
        'Email',
        'Phone',
        'Address',
        'City',
        'State',
        'Zip Code',
        'Country',
        'Origin District',
        'Origin Upazila',
        'Marital Status',
        'Spouse Name',
        'Payment Method',
        'Payment Type',
        'Zelle Reference Number',
        'Photo Uploaded',
        'Photo Drive URL',
        'Agreed to Terms'
      ];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
      sheet.getRange(1, 1, 1, headers.length).setBackground('#4285f4');
      sheet.getRange(1, 1, 1, headers.length).setFontColor('white');
    }
    
    // Handle photo upload to Google Drive
    let photoDriveUrl = '';
    if (data.photoBase64 && data.photoFileName) {
      try {
        photoDriveUrl = savePhotoToDrive(data.photoBase64, data.photoFileName, data.photoMimeType, data.firstName, data.lastName);
      } catch (error) {
        console.error('Error saving photo to Drive:', error);
        // Continue with submission even if photo save fails
      }
    }
    
    // Prepare the row data
    const timestamp = new Date();
    const rowData = [
      timestamp,
      data.firstName || '',
      data.lastName || '',
      data.dateOfBirth || '',
      data.age || '',
      data.email || '',
      data.phone || '',
      data.address || '',
      data.city || '',
      data.state || '',
      data.zipCode || '',
      data.country || 'USA',
      data.originDistrict || '',
      data.originUpazila || '',
      data.maritalStatus || '',
      data.spouseName || '',
      data.paymentMethod || '',
      data.paymentType || '',
      data.zelleReference || '',
      data.photoBase64 ? 'Yes' : 'No',
      photoDriveUrl || '',
      data.agreeToTerms ? 'Yes' : 'No'
    ];
    
    // Append the row to the sheet
    sheet.appendRow(rowData);
    
    // Format the new row
    const lastRow = sheet.getLastRow();
    sheet.getRange(lastRow, 1).setNumberFormat('yyyy-mm-dd hh:mm:ss');
    
    // Make photo URL clickable if it exists
    if (photoDriveUrl) {
      const photoUrlCell = sheet.getRange(lastRow, 21); // Column 21 is Photo Drive URL
      // Escape quotes in URL for formula
      const escapedUrl = photoDriveUrl.replace(/"/g, '""');
      photoUrlCell.setFormula(`=HYPERLINK("${escapedUrl}", "View Photo")`);
      photoUrlCell.setFontColor('#1155cc');
      photoUrlCell.setUnderline(true);
    }
    
    // Send email notification
    let emailSent = false
    let emailError = null
    try {
      sendEmailNotification(data, timestamp, photoDriveUrl)
      emailSent = true
    } catch (emailErr) {
      emailError = emailErr.toString()
      console.error('Email notification failed:', emailErr)
      // Continue even if email fails
    }
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Membership application submitted successfully',
        emailSent: emailSent,
        emailError: emailError || null
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handle GET request (for testing)
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      message: 'Membership Form Webhook is active',
      status: 'OK'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Get or create Google Drive folder for membership photos
 */
function getOrCreateDriveFolder() {
  try {
    // Try to find existing folder
    const folders = DriveApp.getFoldersByName(DRIVE_FOLDER_NAME);
    if (folders.hasNext()) {
      return folders.next();
    }
    
    // Create new folder if it doesn't exist
    const folder = DriveApp.createFolder(DRIVE_FOLDER_NAME);
    return folder;
  } catch (error) {
    console.error('Error getting/creating Drive folder:', error);
    throw error;
  }
}

/**
 * Save photo to Google Drive
 */
function savePhotoToDrive(base64Data, fileName, mimeType, firstName, lastName) {
  try {
    // Get or create the Drive folder
    const folder = getOrCreateDriveFolder();
    
    // Convert base64 to blob - simplified approach
    const decodedBytes = Utilities.base64Decode(base64Data);
    const blob = Utilities.newBlob(decodedBytes, mimeType || 'image/jpeg', fileName);
    
    // Create a descriptive file name
    const timestamp = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd_HHmmss');
    const sanitizedName = `${firstName || 'Unknown'}_${lastName || 'Unknown'}`.replace(/[^a-zA-Z0-9_-]/g, '_');
    const sanitizedFileName = (fileName || 'photo.jpg').replace(/[^a-zA-Z0-9._-]/g, '_');
    const finalFileName = `${sanitizedName}_${timestamp}_${sanitizedFileName}`;
    
    // Create file in Drive folder
    const file = folder.createFile(blob);
    file.setName(finalFileName);
    
    // Set file sharing to "Anyone with the link can view" for easier access
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    
    // Return the file URL
    return file.getUrl();
    
  } catch (error) {
    console.error('Error saving photo to Drive:', error);
    console.error('Error details:', error.toString());
    throw error;
  }
}

/**
 * Send email notification
 */
function sendEmailNotification(data, timestamp, photoDriveUrl) {
  try {
    // Validate email address
    if (!NOTIFICATION_EMAIL || NOTIFICATION_EMAIL.trim() === '') {
      throw new Error('Notification email address is not configured')
    }
    
    const subject = `New Membership Application: ${data.firstName} ${data.lastName}`;
    
    let htmlBody = `
      <h2>New Membership Application Received</h2>
      <p><strong>Submitted:</strong> ${timestamp.toLocaleString()}</p>
      
      <h3>Personal Information</h3>
      <ul>
        <li><strong>Name:</strong> ${data.firstName} ${data.lastName}</li>
        <li><strong>Date of Birth:</strong> ${data.dateOfBirth || 'N/A'}</li>
        <li><strong>Age:</strong> ${data.age || 'N/A'}</li>
        <li><strong>Email:</strong> ${data.email || 'N/A'}</li>
        <li><strong>Phone:</strong> ${data.phone || 'N/A'}</li>
      </ul>
      
      <h3>Address</h3>
      <ul>
        <li><strong>Address:</strong> ${data.address || 'N/A'}</li>
        <li><strong>City:</strong> ${data.city || 'N/A'}</li>
        <li><strong>State:</strong> ${data.state || 'N/A'}</li>
        <li><strong>Zip Code:</strong> ${data.zipCode || 'N/A'}</li>
        <li><strong>Country:</strong> ${data.country || 'USA'}</li>
      </ul>
      
      <h3>Origin Information</h3>
      <ul>
        <li><strong>District:</strong> ${data.originDistrict || 'N/A'}</li>
        <li><strong>Upazila:</strong> ${data.originUpazila || 'N/A'}</li>
      </ul>
      
      <h3>Additional Information</h3>
      <ul>
        <li><strong>Marital Status:</strong> ${data.maritalStatus || 'N/A'}</li>
        ${data.spouseName ? `<li><strong>Spouse Name:</strong> ${data.spouseName}</li>` : ''}
      </ul>
      
      <h3>Payment Information</h3>
      <ul>
        <li><strong>Payment Method:</strong> ${data.paymentMethod || 'N/A'}</li>
        <li><strong>Payment Type:</strong> ${data.paymentType || 'N/A'}</li>
        ${data.zelleReference ? `<li><strong>Zelle Reference:</strong> ${data.zelleReference}</li>` : ''}
      </ul>
      
      <p><strong>Photo Uploaded:</strong> ${data.photoBase64 ? 'Yes' : 'No'}</p>
      ${photoDriveUrl ? `<p><strong>Photo Drive URL:</strong> <a href="${photoDriveUrl}">View Photo</a></p>` : ''}
      <p><strong>Agreed to Terms:</strong> ${data.agreeToTerms ? 'Yes' : 'No'}</p>
      
      <hr>
      <p><em>This is an automated notification from the Membership Application Form.</em></p>
    `;
    
    let plainBody = `
New Membership Application Received

Submitted: ${timestamp.toLocaleString()}

Personal Information:
- Name: ${data.firstName} ${data.lastName}
- Date of Birth: ${data.dateOfBirth || 'N/A'}
- Age: ${data.age || 'N/A'}
- Email: ${data.email || 'N/A'}
- Phone: ${data.phone || 'N/A'}

Address:
- Address: ${data.address || 'N/A'}
- City: ${data.city || 'N/A'}
- State: ${data.state || 'N/A'}
- Zip Code: ${data.zipCode || 'N/A'}
- Country: ${data.country || 'USA'}

Origin Information:
- District: ${data.originDistrict || 'N/A'}
- Upazila: ${data.originUpazila || 'N/A'}

Additional Information:
- Marital Status: ${data.maritalStatus || 'N/A'}
${data.spouseName ? `- Spouse Name: ${data.spouseName}` : ''}

Payment Information:
- Payment Method: ${data.paymentMethod || 'N/A'}
- Payment Type: ${data.paymentType || 'N/A'}
${data.zelleReference ? `- Zelle Reference: ${data.zelleReference}` : ''}

Photo Uploaded: ${data.photoBase64 ? 'Yes' : 'No'}
${photoDriveUrl ? `Photo Drive URL: ${photoDriveUrl}` : ''}
Agreed to Terms: ${data.agreeToTerms ? 'Yes' : 'No'}

---
This is an automated notification from the Membership Application Form.
    `;
    
    // Send email with error handling
    try {
      MailApp.sendEmail({
        to: NOTIFICATION_EMAIL,
        subject: subject,
        htmlBody: htmlBody,
        body: plainBody
      });
      console.log('Email notification sent successfully to:', NOTIFICATION_EMAIL);
    } catch (emailError) {
      console.error('Failed to send email:', emailError);
      console.error('Error details:', emailError.toString());
      // Try sending a simpler email as fallback
      try {
        MailApp.sendEmail({
          to: NOTIFICATION_EMAIL,
          subject: `New Membership Application: ${data.firstName} ${data.lastName}`,
          body: `A new membership application has been received from ${data.firstName} ${data.lastName} (${data.email || 'N/A'}). Please check the Google Sheet for details.`
        });
        console.log('Fallback email sent successfully');
      } catch (fallbackError) {
        console.error('Fallback email also failed:', fallbackError);
        throw emailError; // Re-throw original error
      }
    }
    
  } catch (error) {
    // Log error details
    console.error('Error in sendEmailNotification function:', error);
    console.error('Error type:', typeof error);
    console.error('Error message:', error.message || error.toString());
    console.error('Error stack:', error.stack || 'No stack trace');
    // Re-throw to be caught by caller
    throw error;
  }
}

