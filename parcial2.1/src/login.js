//importar paquetes
//congigutacion Firebase
import {getFirebaseConfig} from "./firebase-config.js";

//modulos de firebase a utilizar
import {initializeApp} from "firebase/app";
import {getDatabase,ref,set} from "firebase/database";
import {getAuth,signInWithEmailAndPassword,onAuthStateChanged} from "firebase/auth";

//inicializar y configurar firebase
const firebaseConf = getFirebaseConfig();
const app = initializeApp(firebaseConf);
const db = getDatabase();
const auth = getAuth();

//elementos de la página
const email = document.getElementById("email");
const password = document.getElementById("password");
const login_btn = document.getElementById("login_btn");

function login(e,ev){
signInWithEmailAndPassword(auth,email.value,password.value)
.then((userCredentials)=>{
    console.log(userCredentials);
    window.location.href= "main.html"
})
.catch((error)=>{
console.log(error.message);
});
}

login_btn.addEventListener("click",login);

//-------Si ya hay alguien logueado mandelo al main--------//
onAuthStateChanged(auth,(user_account)=>{
    if (user_account){
        //si hay un usuario logueado
        console.log("account",user_account);
        window.location.ref= "main.html"
    }
    });