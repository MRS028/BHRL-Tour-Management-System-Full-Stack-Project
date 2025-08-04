import React, { createContext, useEffect } from "react";
import app from "../firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import useAxiosPublic from "../Hooks/axiosPublic";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const axiosPublic = useAxiosPublic();

  const createUser = () => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = () => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSingIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  const updateUserData = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      //use for jwt

    //  if (currentUser) {
    //     //get token and store in client
    //     const userInfo = { email: currentUser.email };
    //     axiosPublic.post("/jwt", userInfo).then((res) => {
    //       if (res.data?.token) {
    //         localStorage.setItem("access-token", res.data?.token);
    //         setLoading(false);
    //       }
    //     });
    //   } else {
    //     //remove token
    //     localStorage.removeItem("access-token");
    //     setLoading(false);
    //   }

     
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return () => {
      return unsubscribe
  };
};

const authInfo = {
  user,
  loading,
  createUser,
  loginUser,
  googleSingIn,
  logoutUser,
  updateUserData,
};
return (
  <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
)

export default AuthProvider;
