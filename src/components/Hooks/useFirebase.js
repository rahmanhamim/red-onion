import { useEffect, useState } from "react";
import {
 getAuth,
 signInWithPopup,
 GoogleAuthProvider,
 signOut,
 onAuthStateChanged,
} from "firebase/auth";
import initializeAuthentication from "../Login/Firebase/firebase.init";

initializeAuthentication();
const auth = getAuth();
const goolgeProvider = new GoogleAuthProvider();

const useFirebase = () => {
 const [user, setUser] = useState([]);

 const googleSignIn = () => {
  signInWithPopup(auth, goolgeProvider)
   .then((result) => {
    console.log(result.user);
    return setUser(result.user);
   })
   .catch((error) => {
    console.log(error.message);
   });
 };

 //  observer
 useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
   if (user) {
    setUser(user);
   }
  });
  return unsubscribe;
 }, []);

 //  logout
 const logOut = () => {
  signOut(auth)
   .then(() => {
    setUser({});
   })
   .catch((error) => {
    console.log(error.message);
   });
 };

 return {
  user,
  googleSignIn,
  logOut,
 };
};

export default useFirebase;
