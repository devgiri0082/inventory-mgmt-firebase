import React from 'react'
import { Container, SubContainer } from "./styles/containersStyle";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { auth } from "./firebaseConfig";
let SubContainer1 = styled(SubContainer)`
    width: 30%;
    align-items: center;
    gap: 15px;
    button {
        width: 150px;
    }
`
export default function Categories() {
    let history = useHistory();
    const navigateTo = (path) => {
        history.push(`/${path}`)
    }
    let logOut = () => {
        let value = auth.signOut();
        navigateTo("")
    }
    return (
        <Container>
            <h1>Categories</h1>
            <button onClick={logOut}>Logout</button>
            <SubContainer1>
                <h2>GoTo Category</h2>
                <button onClick={(e) => navigateTo("Laptop")}>Laptop</button>
                <button onClick={(e) => navigateTo("Mobile")}>Mobile</button>
                <button onClick={(e) => navigateTo("Appliances")}>Appliances</button>
            </SubContainer1>
        </Container>
    )
}
