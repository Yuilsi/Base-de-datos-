//importar paquetes
//congigutacion Firebase
import {getFirebaseConfig} from "./firebase-config";

//modulos de firebase a utilizar
import {initializeApp} from "firebase/app";
import {getDatabase,ref,set,get,onValue} from "firebase/database";
import {getAuth,onAuthStateChanged} from "firebase/auth";

//inicializar y configurar firebase
const firebaseAppConfig = getFirebaseConfig();
const app = initializeApp(firebaseAppConfig);
const db = getDatabase();
const auth = getAuth();

//elementos de la página
const email = document.getElementById("email");
const username = document.getElementById("username");
const userid = document.getElementById("userid");
const logout_btn= document.getElementById("logout_btn")
//----------------------------------------------------------------------------







//--------------------------------------------------------------
onAuthStateChanged(auth,(user_account)=>{
if (user_account){
    //si hay un usuario logueado
    console.log(user_account);
    const dbRef =ref(db,"users/"+user_account.uid); 
    get(dbRef)
    .then((snapshot)=>{
        console.log(snapshot)
        const user= snapshot.val();
        console.log(user);
        username.innerHTML="Bienvenidos"+user.username;
        userid.innerHTML=user.id;
        email.innerHTML= user.email;  
    })
    .catch((error)=>{
console.log(error);
    });
} else{
    window.location.ref= "login.html"
}
});
//--------------------BOTON DE SALIR---------------------------------
function logout(e,ev){
    auth.signOut()
    .then(()=>{
        window.location.href= "login.html"
    })
    .catch((error)=>{
        console.log(error.message);
    });
}
logout_btn.addEventListener("click",logout)


//--------------------------------------------
