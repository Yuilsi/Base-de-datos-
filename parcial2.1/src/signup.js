//importar paquetes
//congigutacion Firebase
import {getFirebaseConfig} from "./firebase-config.js";

//modulos de firebase a utilizar
import {initializeApp} from "firebase/app";
import {getDatabase,ref,set} from "firebase/database";
import {getAuth,createUserWithEmailAndPassword,onAuthStateChanged} from "firebase/auth";

//inicializar y configurar firebase
const firebaseConf = getFirebaseConfig();
const app = initializeApp(firebaseConf);
const db = getDatabase();
const auth = getAuth();

//elementos de la página
const email = document.getElementById("email");
const username = document.getElementById("username");
const password = document.getElementById("password");
const signup_btn = document.getElementById("signup_btn");

//agregar eventos
function signup(e,ev){
    //crear cuenta del usuario
    createUserWithEmailAndPassword(auth,email.value,password.value)
    .then((user_credential)=>{
        console.log(user_credential);
        const user = {
            "id": user_credential.user.uid,
            "email": email.value,
            "username": username.value,
            "password": password.value,
        }
        const dbRef =ref(db,"users/"+user.id);
        set(dbRef,user).then(()=>{
            console.log("guardo");
            window.location.href = "main.html";
        });
    }).catch((error)=>{
        console.log(error.message);
    });
}
signup_btn.addEventListener("click", signup);

//-------Si ya hay alguien logueado mandelo al main--------//
onAuthStateChanged(auth,(user_account)=>{
    if (user_account){
        //si hay un usuario logueado
        console.log("account",user_account);
        window.location.ref= "main.html"
    }
    });
