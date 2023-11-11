import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDUIGLiMaeAi-FT7YlPT_BmX8z_HFsXbUY",
    authDomain: "web-streaming-catalogue.firebaseapp.com",
    projectId: "web-streaming-catalogue",
    storageBucket: "web-streaming-catalogue.appspot.com",
    messagingSenderId: "774130042313",
    appId: "1:774130042313:web:fd616b8fc6e175524b1418",
    measurementId: "G-ED1R3NSRED"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth}
  export default db;