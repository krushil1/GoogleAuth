import { initializeApp } from "firebase/app";
import  { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCxAB-Sk3qX2Pc2GDBDQmnGVEDF08zGbL4",
  authDomain: "authenticationtestreact.firebaseapp.com",
  projectId: "authenticationtestreact",
  storageBucket: "authenticationtestreact.appspot.com",
  messagingSenderId: "107109292578",
  appId: "1:107109292578:web:24721b53b0b0389b9c487b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();


export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        console.log(result);
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;

        const firstName = name.slice(0,-2)

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);

        window.location.href = "/";
    })
    .catch((error) => {
        console.log(error);
        alert('Try again :)');
    })
};