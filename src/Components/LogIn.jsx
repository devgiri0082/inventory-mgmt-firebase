import firebase from "firebase";
import React, { useRef, useState } from 'react'
import { useHistory } from "react-router-dom";
import { Container, SubContainer } from "./styles/containersStyle";

export default function LogIn() {
    let history = useHistory();
    let emailRef = useRef();
    let passwordRef = useRef();
    let [error, setError] = useState("");
    let sendData = async (e) => {
        e.preventDefault();
        try {
            setError("");
            let userCredentials = await firebase.auth().signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value);
            console.log(userCredentials.user.email);
            history.push("/Categories");
        } catch (err) {
            console.log(err.code);
            setError(`error: ${err.code}`);
        }
    }
    return (
        <Container>
            <h1>Sign In Page</h1>
            <button onClick={() => history.push("/")}>goto main Page</button>
            <SubContainer>
                <div className="option">
                    <p>Email: </p>
                    <input type="email" ref={emailRef} required />
                </div>
                <div className="option">
                    <p>Password: </p>
                    <input type="password" ref={passwordRef} required />
                </div>
                <button onClick={(e) => sendData(e)}>submit</button>
                <div>{error}</div>
            </SubContainer>
        </Container>
    )
}
