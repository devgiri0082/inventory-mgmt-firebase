import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components';
import { Container, SubContainer } from './styles/style';
let Container1 = styled(Container)`
    gap: 50px;
`
let SubContainer1 = styled(SubContainer)`
    height: 45%;
    align-items: center; 
    .option {
        font-size: 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5px;
    }
`
export default function Main() {
    let history = useHistory();
    let navigateTo = (path) => {
        history.push(`/${path}`);
    }
    return (
        <Container1>
            <h1>Welcome to the Firebase Inventory Management System</h1>
            <SubContainer1>
                <h2>Please Choose the action</h2>
                <div className="option">
                    <div >If you already have an account </div>
                    <button onClick={() => navigateTo("LogIn")}>Log In</button>
                </div>
                <div className="option">
                    <div>If you don't have an account </div>
                    <button onClick={() => navigateTo("SignUp")}>Sign Up</button>
                </div>

            </SubContainer1>
        </Container1>
    )
}
