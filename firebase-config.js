// ─────────────────────────────────────────────────────────────────────────────
// Firebase Configuration
// ─────────────────────────────────────────────────────────────────────────────
// Setup steps (one-time):
//   1. Go to https://console.firebase.google.com → create a project
//   2. Enable Firestore Database (start in test mode)
//   3. Enable Authentication → Sign-in method → Email/Password
//   4. Authentication → Users → Add user  (your admin account)
//   5. Project Settings → General → Your apps → Add web app
//   6. Copy the firebaseConfig object below and replace the placeholders

const firebaseConfig = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
};

try {
  firebase.initializeApp(firebaseConfig);
  window.db     = firebase.firestore();
  window.fbAuth = firebase.auth();
} catch (e) {
  console.warn('[Uroboru] Firebase not configured — add your config to firebase-config.js');
  window.db     = null;
  window.fbAuth = null;
}
