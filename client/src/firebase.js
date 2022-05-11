import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// trying to configure it with the .env.local file, doesn't work tho :(
// const firebaseConfig = {
//   apiKey: process.env.GRUMBL_FIREBASE_API_KEY,
//   authDomain: process.env.GRUMBL_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.GRUMBL_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.GRUMBL_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.GRUMBL_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.GRUMBL_FIREBASE_APP_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyC4u5Priez-ZuX_ZgtKVM_g-4rwdJvT3PQ",
  authDomain: "ucla-grumble.firebaseapp.com",
  projectId: "ucla-grumble",
  storageBucket: "ucla-grumble.appspot.com",
  messagingSenderId: "989912013197",
  appId: "1:989912013197:web:bacf2fb16bb984cb0885c4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
// how to use database

//always remember to export the component we need to use in other files!
export const auth = firebaseApp.auth();
export default database;
