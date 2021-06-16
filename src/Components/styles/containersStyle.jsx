import styled from "styled-components";
let Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: #cdc9f0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
`
let SubContainer = styled.div`
    margin-top: 50px;
    height: 40%;
    width: 40%;
    background: white;
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 20px;
    .option {
        display: flex;
        gap: 10px;
    }
    input {
        width: 200px;
        height: 30px;
        padding: 5px;
    }
    button {
        margin-top: 10px;
        background: tomato;
        padding: 5px;
        width: 100px;
        border: none;
        border-radius: 5px;
        font-size: 20px;
        color: white;
        border: 1px solid white;
        
    }
    button:hover {
        background: white;
        color: tomato;
        border: 1px solid tomato;
        cursor: pointer;
    }
`
export { Container, SubContainer };