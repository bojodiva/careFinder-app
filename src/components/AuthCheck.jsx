import {useState, useEffect} from "react";
import {auth} from "./firebase";
import {onAuthStateChanged} from "firebase/auth";


export default function AuthCheck(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      });
  
      return () => unsubscribe();
    }, []);
  
    return isLoggedIn;
  }