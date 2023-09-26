import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(firebaseAuth, googleProvider);
    const { displayName, email, uid, providerId, photoURL } = result.user;

    return {
      ok: true,
      user: {
        name: displayName,
        email,
        uid,
        providerId,
        photoURL,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      error: "Google Login Fail",
    };
  }
};
