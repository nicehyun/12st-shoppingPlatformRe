import admin from "firebase-admin";

const firebaseConfig = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  privateKey: process.env.FIREBASE_PRIVATE_KEY,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
};

!admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(firebaseConfig),
    })
  : admin.app();

export default admin;
