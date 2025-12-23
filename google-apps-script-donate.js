/**
 * Google Apps Script for Donation Form Submission
 * 
 * SETUP INSTRUCTIONS:
 * 1. Open Google Sheets: https://sheets.google.com
 * 2. Open or create a spreadsheet with ID: 1228bBof9Ygb4fesUBzFNhR3ZXaagKVX6SHQh-hIdag4
 * 3. Go to Extensions > Apps Script
 * 4. Delete the default code and paste this entire file
 * 5. Update the SPREADSHEET_ID and EMAIL variables below if needed
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
const SPREADSHEET_ID = '1228bBof9Ygb4fesUBzFNhR3ZXaagKVX6SHQh-hIdag4';
const SHEET_NAME = 'donates';
const NOTIFICATION_EMAIL = 'brihottoro@gmail.com';

/**
 * Handle POST request from the donation form
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
        'Amount',
        'Payment Method',
        'Zelle Reference Number',
        'First Name',
        'Last Name',
        'Email',
        'Phone',
        'Address',
        'City',
        'State',
        'ZIP Code',
        'Country',
        'Purpose',
        'Custom Purpose',
        'Anonymous',
        'Recurring',
        'Comments'
      ];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
      sheet.getRange(1, 1, 1, headers.length).setBackground('#4285f4');
      sheet.getRange(1, 1, 1, headers.length).setFontColor('white');
    }
    
    // Prepare the row data
    const timestamp = new Date();
    const donationAmount = data.customAmount || data.amount || '0';
    const rowData = [
      timestamp,
      donationAmount,
      data.paymentMethod || '',
      data.zelleReference || '',
      data.firstName || '',
      data.lastName || '',
      data.email || '',
      data.phone || '',
      data.address || '',
      data.city || '',
      data.state || '',
      data.zipCode || '',
      data.country || 'USA',
      data.purpose || '',
      data.customPurpose || '',
      data.anonymous ? 'Yes' : 'No',
      data.recurring ? 'Yes' : 'No',
      data.comments || ''
    ];
    
    // Append the row to the sheet
    sheet.appendRow(rowData);
    
    // Format the new row
    const lastRow = sheet.getLastRow();
    sheet.getRange(lastRow, 1).setNumberFormat('yyyy-mm-dd hh:mm:ss');
    sheet.getRange(lastRow, 2).setNumberFormat('$#,##0.00'); // Format amount as currency
    
    // Send email notification
    sendEmailNotification(data, timestamp, donationAmount);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Donation submitted successfully'
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
      message: 'Donation Form Webhook is active',
      status: 'OK'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Send email notification
 */
function sendEmailNotification(data, timestamp, amount) {
  try {
    const donorName = data.anonymous ? 'Anonymous Donor' : `${data.firstName} ${data.lastName}`;
    const subject = `New Donation Received: $${amount} from ${donorName}`;
    
    // Get purpose label
    const purposeLabels = {
      'general': 'General Support',
      'cultural': 'Cultural Activities & Events',
      'welfare': 'Social Welfare & Assistance',
      'funeral': 'Funeral & Memorial Services',
      'education': 'Education Programs',
      'immigrant': 'Immigrant Support Services',
      'disaster': 'Disaster Relief',
      'other': data.customPurpose || 'Other'
    };
    const purposeLabel = purposeLabels[data.purpose] || data.purpose || 'N/A';
    
    let htmlBody = `
      <h2>New Donation Received</h2>
      <p><strong>Submitted:</strong> ${timestamp.toLocaleString()}</p>
      
      <h3>Donation Details</h3>
      <ul>
        <li><strong>Amount:</strong> $${amount}</li>
        <li><strong>Payment Method:</strong> ${data.paymentMethod || 'N/A'}</li>
        ${data.zelleReference ? `<li><strong>Zelle Reference:</strong> ${data.zelleReference}</li>` : ''}
        <li><strong>Purpose:</strong> ${purposeLabel}</li>
        <li><strong>Anonymous:</strong> ${data.anonymous ? 'Yes' : 'No'}</li>
        <li><strong>Recurring:</strong> ${data.recurring ? 'Yes' : 'No'}</li>
      </ul>
      
      <h3>Donor Information</h3>
      <ul>
        <li><strong>Name:</strong> ${donorName}</li>
        ${!data.anonymous ? `
          <li><strong>Email:</strong> ${data.email || 'N/A'}</li>
          <li><strong>Phone:</strong> ${data.phone || 'N/A'}</li>
          <li><strong>Address:</strong> ${data.address || 'N/A'}</li>
          <li><strong>City:</strong> ${data.city || 'N/A'}</li>
          <li><strong>State:</strong> ${data.state || 'N/A'}</li>
          <li><strong>ZIP Code:</strong> ${data.zipCode || 'N/A'}</li>
          <li><strong>Country:</strong> ${data.country || 'USA'}</li>
        ` : '<li><em>Donor requested anonymity</em></li>'}
      </ul>
      
      ${data.comments ? `
        <h3>Comments</h3>
        <p>${data.comments}</p>
      ` : ''}
      
      <hr>
      <p><em>This is an automated notification from the Donation Form.</em></p>
    `;
    
    let plainBody = `
New Donation Received

Submitted: ${timestamp.toLocaleString()}

Donation Details:
- Amount: $${amount}
- Payment Method: ${data.paymentMethod || 'N/A'}
${data.zelleReference ? `- Zelle Reference: ${data.zelleReference}` : ''}
- Purpose: ${purposeLabel}
- Anonymous: ${data.anonymous ? 'Yes' : 'No'}
- Recurring: ${data.recurring ? 'Yes' : 'No'}

Donor Information:
- Name: ${donorName}
${!data.anonymous ? `
- Email: ${data.email || 'N/A'}
- Phone: ${data.phone || 'N/A'}
- Address: ${data.address || 'N/A'}
- City: ${data.city || 'N/A'}
- State: ${data.state || 'N/A'}
- ZIP Code: ${data.zipCode || 'N/A'}
- Country: ${data.country || 'USA'}
` : '- Donor requested anonymity'}

${data.comments ? `Comments:\n${data.comments}` : ''}

---
This is an automated notification from the Donation Form.
    `;
    
    MailApp.sendEmail({
      to: NOTIFICATION_EMAIL,
      subject: subject,
      htmlBody: htmlBody,
      body: plainBody
    });
    
  } catch (error) {
    // Log error but don't fail the submission
    console.error('Error sending email:', error);
  }
}

