import React, { useState } from "react";
import "./styles.css";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";

const AuthContainer = (props) => {
    const [log, setLog] = useState("false")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailNew, setEmailNew] = useState("");
    const [confirmPasswordNew, setConfirmPasswordNew] = useState("");
    const [passwordNew, setPasswordNew] = useState("");

    const sumbit = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            props.setUser(userCredential)
        })
    }

    const register = () => {
        createUserWithEmailAndPassword(auth, emailNew, passwordNew, confirmPasswordNew)
        .then((userCredential) => {
            props.setUser(userCredential)
        })
    }       

    return (
        <>
        {log ? (<div className="container-fluid d-flex flex-column justify-content-center">
        <p className="h5 text-center my-0">Inicia sesión</p>
        <label className="mt-2" htmlFor="email">Correo electrónico</label>
        <input className="my-2 p-1" type="email" id="email" onChange={(ev)=>setEmail(ev.target.value)}/>
        <label htmlFor="password">Contraseña</label>        
        <input className="my-2 p-1" type="password" id="password" onChange={(ev)=>setPassword(ev.target.value)}/>
        <span className="btn btn-primary my-2" onClick={sumbit}>Iniciar sesión</span>
        <span className="btn btn-success my-2" onClick={() => setLog(!log)}>¿No tienes cuenta? ¡Registrate!</span>
    </div>) : (<div className="container-fluid d-flex flex-column justify-content-center">
            <p className="h5 text-center my-0">Crear cuenta</p>
            <label className="mt-2" htmlFor="email">Correo electrónico</label>
            <input className="my-2 p-1" type="email" id="email" onChange={(ev)=>setEmailNew(ev.target.value)}/>
            <label htmlFor="password">Contraseña</label>        
            <input className="my-2 p-1" type="password" id="password" onChange={(ev)=>setPasswordNew(ev.target.value)}/>
            <label htmlFor="password">Confirmar contraseña</label>        
            <input className="my-2 p-1" type="password" id="password" onChange={(ev)=>setConfirmPasswordNew(ev.target.value)}/>
            <span className="btn btn-success my-2" onClick={register}>Registrate</span>
            <span className="btn btn-primary my-2" onClick={() => setLog(!log)}>¿Ya tienes cuenta? ¡Inicia sesión!</span>
        </div>)}
        </>
    );
};
        
export default AuthContainer;
