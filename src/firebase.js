
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth"
import {addDoc, collection, getFirestore} from "firebase/firestore"
import { toast } from "react-toastify";



const firebaseConfig = {
  apiKey: "AIzaSyB0hWRFInjuOUMh_Ny-_br6Jd7k48gQR-0",
  authDomain: "netflix-clone-2835b.firebaseapp.com",
  projectId: "netflix-clone-2835b",
  storageBucket: "netflix-clone-2835b.appspot.com",
  messagingSenderId: "667014832993",
  appId: "1:667014832993:web:a3c6616db032c498fedb20"
};


const app = initializeApp(firebaseConfig);

const auth=getAuth(app);
const db = getFirestore(app)

const singup = async(name,email,password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth,email,password);
        const user = res.user
        await addDoc(collection(db,"user"),{
            uid:user.uid,
            name,
            authProvider:"local",
            email
        })
        
    } 
    catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}


const login = async(email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password)
    } 
    catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}


const logout = async()=>{
    signOut(auth)

}

export{auth,db,login,singup,logout}