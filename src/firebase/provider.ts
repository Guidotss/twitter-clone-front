import { GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { firebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

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


export const signInWithGithub = async () => {
  const result = await signInWithPopup(firebaseAuth, githubProvider);
  const { displayName, email, uid, providerId, photoURL } = result.user;

  try{ 
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
  }catch(error){ 
    console.log(error);
    return {
      ok: false,
      error: "Github Login Fail",
    };
  }
}