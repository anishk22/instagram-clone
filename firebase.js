import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBUGMpg014fvSuK1tQMUDXEE5Bynh8Jfko",
  authDomain: "instagram-clone-b3c6b.firebaseapp.com",
  projectId: "instagram-clone-b3c6b",
  storageBucket: "instagram-clone-b3c6b.appspot.com",
  messagingSenderId: "2895341609",
  appId: "1:2895341609:web:e14815aefb43c10e5e1438"
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

export default firebase