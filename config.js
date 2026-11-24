// BiteIT Gaming — settings you fill in once.
// Firebase web config: Firebase console → Project settings → General → "Your apps" → Web app → SDK setup and configuration → Config.
// These values are safe to publish; your data is protected by firestore.rules.
window.BITEIT_CONFIG = {
  firebase: {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
  },

  // Google account(s) that can open the Admin panel. Use the same email in firestore.rules.
  adminEmails: ["your.email@gmail.com"],

  // WhatsApp group players join for updates.
  whatsapp: "https://chat.whatsapp.com/HGB9WkCPWYm3LFHVUpoIwV"
};
