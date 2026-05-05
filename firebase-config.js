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
  apiKey:            "AIzaSyCldE1xDKNHVAtRsxT0_ia1pSOp1M8WBqE",
  authDomain:        "uroborus-ee61e.firebaseapp.com",
  projectId:         "uroborus-ee61e",
  storageBucket:     "uroborus-ee61e.firebasestorage.app",
  messagingSenderId: "455186299383",
  appId:             "1:455186299383:web:64dd439e657040b19816f2",
  measurementId:     "G-MD8SVPXKY9"
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
