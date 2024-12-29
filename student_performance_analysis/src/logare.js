import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import {auth} from "./components/db.js"

const loginForm = document.getElementById('login-form');

const buton = document.getElementById("btn")

document.addEventListener("DOMContentLoaded", async(e)=>{


    buton.addEventListener('click', async(e) => {
        e.preventDefault();
        console.log("Break point")

    
        // Capturăm datele din formular
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
    
        console.log(email)
        console.log(password)

        try{
            const userCred = await signInWithEmailAndPassword(auth, email, password)
            // Dezactivează afișarea erorilor în consola
             // Blochează erorile în consola.

            console.log("In try")
    
            console.log("Începem...");

            alert("Succes")

            window.location.replace('index.html');

            
           

        }catch(error){
             alert("No user found");  

        }
        
       
           
    });

})

