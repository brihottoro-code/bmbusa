# Google Sheets Integration Setup Guide

This guide will help you set up the Google Sheets integration for the Membership Application Form.

## Prerequisites

- A Google account
- Access to Google Sheets
- Access to Google Apps Script

## Step-by-Step Setup

### 1. Open Your Google Spreadsheet

1. Open Google Sheets: https://sheets.google.com
2. Open the spreadsheet with ID: `1R2xcZthgctfdWj6jwnOzZ9q87n6GbluNLeMCDgMexfQ`
3. Or create a new spreadsheet and note its ID from the URL

### 2. Create the Google Apps Script

1. In your Google Spreadsheet, go to **Extensions** > **Apps Script**
2. Delete any default code in the editor
3. Copy the entire contents of `google-apps-script.js` from this repository
4. Paste it into the Apps Script editor
5. Update the configuration at the top of the script if needed:
   - `SPREADSHEET_ID`: Your spreadsheet ID (already set)
   - `SHEET_NAME`: Name of the worksheet (default: 'members')
   - `NOTIFICATION_EMAIL`: Email for notifications (already set to brihottoro@gmail.com)

### 3. Save the Script

1. Click **File** > **Save** (or press Ctrl+S / Cmd+S)
2. Give your project a name (e.g., "Membership Form Handler")

### 4. Deploy as Web App

1. Click **Deploy** > **New deployment**
2. Click the gear icon (⚙️) next to "Select type"
3. Choose **Web app**
4. Configure the deployment:
   - **Description**: "Membership Form Submission Handler"
   - **Execute as**: "Me" (your email)
   - **Who has access**: "Anyone" (important for public form submissions)
5. Click **Deploy**
6. **Copy the Web App URL** - you'll need this in the next step
7. Click **Done**

### 5. Authorize the Script

1. The first time you run the script, you'll need to authorize it
2. Click **Run** > **doPost** (or just try submitting a form)
3. Click **Review Permissions**
4. Choose your Google account
5. Click **Advanced** > **Go to [Project Name] (unsafe)**
6. Click **Allow** to grant permissions:
   - Access to Google Sheets (to write data)
   - Access to Gmail (to send email notifications)

### 6. Configure the Website

#### Option A: Using Environment Variable (Recommended for Production)

1. Create a `.env.local` file in the root of your project:
   ```
   NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```

2. Replace `YOUR_SCRIPT_ID` with the actual ID from your deployed script URL

3. Restart your development server if running

#### Option B: Hardcode the URL (For Testing)

1. Open `app/membership/page.tsx`
2. Find the line: `const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || ''`
3. Replace with: `const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'`
4. Replace `YOUR_SCRIPT_ID` with your actual script ID

### 7. Test the Integration

1. Fill out the membership form on your website
2. Submit the form
3. Check your Google Sheet - a new row should appear in the "members" worksheet
4. Check your email (brihottoro@gmail.com) - you should receive a notification

## Troubleshooting

### Form submission fails

- **Check the script URL**: Make sure the URL is correct and the script is deployed
- **Check permissions**: Ensure the script has "Anyone" access
- **Check browser console**: Look for any error messages
- **Check Apps Script logs**: Go to Apps Script > Executions to see error logs

### Data not appearing in Google Sheets

- **Check sheet name**: Ensure the worksheet name matches "members" (case-sensitive)
- **Check script execution**: Go to Apps Script > Executions to see if the script ran
- **Check permissions**: Ensure the script has permission to access Google Sheets

### Email not received

- **Check spam folder**: The email might be in spam
- **Check email address**: Ensure NOTIFICATION_EMAIL is set correctly
- **Check script logs**: Go to Apps Script > Executions to see if there were errors
- **Check Gmail permissions**: Ensure the script has permission to send emails

### CORS Errors

- Google Apps Script handles CORS automatically when deployed as a web app
- Make sure you're using the `/exec` endpoint (not `/dev`)
- Ensure "Who has access" is set to "Anyone"

## Security Notes

- The Google Apps Script URL will be visible in your website's code
- This is normal and expected for public form submissions
- The script validates and sanitizes input data
- Only authorized users can modify the script itself

## Updating the Script

If you need to update the script:

1. Make changes in Apps Script editor
2. Click **Deploy** > **Manage deployments**
3. Click the edit icon (✏️) next to your deployment
4. Click **New version**
5. Add a version description
6. Click **Deploy**
7. The URL remains the same - no need to update your website

## Support

If you encounter issues:

1. Check the Apps Script execution logs
2. Check the browser console for errors
3. Verify all configuration values are correct
4. Ensure all permissions are granted

