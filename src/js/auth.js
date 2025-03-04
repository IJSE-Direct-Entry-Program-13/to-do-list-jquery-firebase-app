import {auth} from './firebase.config.js';
import $ from 'jquery';
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";

const provider = new GoogleAuthProvider();

$("#btn-sign-in-google").on('click', async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        console.log(result);
        $("#login").addClass("d-none");
        $("#app").removeClass("d-none");
    }catch (e){
        $("#login").removeClass("d-none");
        $("#app").addClass("d-none");
        console.log(e);
    }
});