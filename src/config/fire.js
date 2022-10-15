import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// const firebaseConfig = {
//     apiKey: process.env.React_App_ApiKey,
//     authDomain: process.env.React_App_AuthDomain,
//     projectId: process.env.React_App_ProjectId,
//     storageBucket: process.env.React_App_StorageBucket,
//     messagingSenderId: process.env.React_App_MessagingSenderId,
//     appId: process.env.React_App_AppId,
// };

const firebaseConfig = {
    apiKey: "AIzaSyAThQWG4i94ykuciUmCrstZL5CdC3gqbAw",
    authDomain: "kshmir-app.firebaseapp.com",
    projectId: "kshmir-app",
    storageBucket: "kshmir-app.appspot.com",
    messagingSenderId: "307614676688",
    appId: "1:307614676688:web:a25fbb018cc114c00290d5",
    measurementId: "G-W5H52ED8LE"
};
const fire = firebase.initializeApp(firebaseConfig);

export default fire;