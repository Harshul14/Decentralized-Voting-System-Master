import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/analytics';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA5yPmaVgw3spqJwTV9vR1Cp3o9e2samBY",
  authDomain: "react-authentication-be710.firebaseapp.com",
  projectId: "react-authentication-be710",
  databaseURL: "https://react-authentication-be710-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "react-authentication-be710.appspot.com",
  messagingSenderId: "230481302273",
  appId: "1:230481302273:web:f133ce36c9239669cf8100",
  measurementId: "G-2MV57J0X4N"

};

/*
const firebaseConfig = {
  apiKey: "AIzaSyA5yPmaVgw3spqJwTV9vR1Cp3o9e2samBY",
  authDomain: "react-authentication-be710.firebaseapp.com",
  
  projectId: "react-authentication-be710",
  storageBucket: "react-authentication-be710.appspot.com",
  messagingSenderId: "230481302273",
  appId: "1:230481302273:web:f133ce36c9239669cf8100",
  measurementId: "G-2MV57J0X4N"
};
*/

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth=getAuth(app);
// export default app;
// export { auth, firebase };

firebase.initializeApp(firebaseConfig);
firebase.analytics();
const fireDb=firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
const provider=new GoogleAuthProvider();
// export {auth,provider};
export { auth, firebase };
// export default firebase;
export default fireDb.database().ref();
