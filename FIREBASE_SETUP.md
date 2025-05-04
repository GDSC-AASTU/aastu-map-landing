# Firebase Deployment Setup for GitHub Actions

This guide explains how to set up the required Firebase service account for automated deployments using GitHub Actions.

## Generate a Firebase Service Account

1. Go to the [Firebase Console](https://console.firebase.google.com/project/aastu-map-project/settings/serviceaccounts/adminsdk)
2. Select your project (`aastu-map-project`)
3. Click on the "Service accounts" tab
4. Click on "Generate new private key" button
5. Save the JSON file securely - you will need it for the next step

## Add the Service Account to GitHub Secrets

1. Go to your GitHub repository settings
2. Click on "Secrets and variables" → "Actions"
3. Click "New repository secret"
4. Set the name as `FIREBASE_SERVICE_ACCOUNT`
5. For the value, paste the entire contents of the JSON file you downloaded
6. Click "Add secret"

## Verify Workflow Configuration

The GitHub Actions workflow is configured in `.github/workflows/firebase-deploy.yml` and will use the service account for authentication when deploying to Firebase.

Make sure the following details are correctly configured:

- `projectId` in the workflow file matches your Firebase project ID
- Branch name in the workflow trigger matches your main branch (e.g., `main`)

## Testing the Deployment

To test the automated deployment:

1. Make a change to your project
2. Commit and push to your main branch
3. Go to the "Actions" tab in your GitHub repository to monitor the workflow
4. Once completed, your site should be live at https://aastu-map-project.web.app

## Troubleshooting

If you encounter any issues:

- Check the GitHub Actions logs for detailed error messages
- Verify that the service account has the necessary permissions in Firebase
- Ensure the `FIREBASE_SERVICE_ACCOUNT` secret is correctly formatted (it should be the entire JSON content)
- Make sure your Firebase project is properly configured for hosting

## Manual Deployment

For manual deployments, you can use the Firebase CLI:

```bash
npm install -g firebase-tools
firebase login
npm run build
firebase deploy --only hosting
``` 