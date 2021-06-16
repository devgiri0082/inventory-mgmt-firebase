import React, { useRef, useState } from 'react'
import firebase from "firebase";
import { auth } from "./firebaseConfig";
import styled from 'styled-components';
import { Container, SubContainer } from "./styles/style";
import { useHistory } from 'react-router-dom';
export default function Signup() {
    let history = useHistory();
    let [error, setError] = useState("");
    let emailRef = useRef();
    let passwordRef = useRef();
    let signUp = async () => {
        try {
            setError("");
            let userCredential = await firebase.auth().createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value);
        } catch (err) {
            console.log("error:", err.code);
            setError(`erro: ${err.code}`);
        }

    }
    return (
        <Container>
            <h1>Sign Up Page</h1>
            <button onClick={() => history.push("/")}>Goto Main Page</button>
            <SubContainer>
                <div className="option">
                    <div>Email: </div>
                    <input type="email" ref={emailRef} />
                </div>
                <div className="option">
                    <div>Password: </div>
                    <input type="password" ref={passwordRef} />
                </div>
                <button onClick={signUp}>Sign Up</button>
                <div>{error}</div>
            </SubContainer>
        </Container>
    )
}
