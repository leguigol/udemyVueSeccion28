import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBZZ8mtWuPeHwqi6YyPhmeZEfMuwEm5ORw",
  authDomain: "auth-2020-2-1b5a2.firebaseapp.com",
  projectId: "auth-2020-2-1b5a2",
  storageBucket: "auth-2020-2-1b5a2.appspot.com",
  messagingSenderId: "28487765856",
  appId: "1:28487765856:web:a888c1c612cef91580d805"
};

firebase.initializeApp(firebaseConfig);

const db=firebase.firestore()
const auth=firebase.auth()

export { db, auth }
