import React, { useRef } from 'react'
import styled from 'styled-components'
import { db } from "./firebaseConfig";

let Box = styled.div`
    z-index: 5;
    position: absolute;
    min-height: 50%;
    width: 50%;
    background: white;
    padding: 20px;
    border-radius: 5px;
    input {
        width: 80%;
        height: 25px;
        padding: 5px;
        font-size: 17px;
        outline: none;
        border: 1px solid black;
        border-radius: 5px;
        margin-bottom: 10px;
    }
    textArea {
        width: 80%;
        display: block;
        height: 80px;
        padding: 10px;
        font-family: sans-serif;
        resize: none;
        outline: none;
        margin-bottom: 10px;   
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
        cursor: pointer;
    }
    
    .close {
        position: absolute;
        background: tomato;
        border-radius: 50%;
        height: 22px;
        width: 22px;
        display: grid;
        place-content: center;
        top: 1%;
        right: 1%;
        color: white;
    }
     .close:hover, button:hover {
        background: white;
        color: tomato;
        border: 1px solid tomato;
        cursor: pointer;
    }
`
export default function Form({ category, setShowForm, setValue, value, userId }) {
    let nameRef = useRef("");
    let priceRef = useRef("");
    let quantityRef = useRef("");
    let urlRef = useRef("");
    let descriptionRef = useRef("");
    let submitValue = async () => {
        let ourObj = {
            name: nameRef.current.value,
            price: priceRef.current.value,
            quantity: quantityRef.current.value,
            photoUrl: urlRef.current.value,
            description: descriptionRef.current.value
        }
        try {
            let data = await db.collection(`${userId}`);
            await db.collection(`${category}`).add(ourObj);
            setValue([...value, ourObj])
            nameRef.current.value = "";
            priceRef.current.value = "";
            quantityRef.current.value = "";
            urlRef.current.value = "";
            descriptionRef.current.value = "";
            setShowForm(false);

        } catch (err) {
            console.log(err);
        }
    }
    return (
        <Box>
            <div className="close" onClick={(e) => setShowForm(false)}>X</div>
            <div>Name: </div>
            <input type="text" ref={nameRef} />
            <div>Price: </div>
            <input type="number" ref={priceRef} />
            <div>Quantity: </div>
            <input type="number" ref={quantityRef} />
            <div>Photo URL: </div>
            <input type="text" ref={urlRef} />
            <div>Description: </div>
            <textArea type="text" ref={descriptionRef} />
            <button onClick={submitValue}>Submit</button>
        </Box>
    )
}
