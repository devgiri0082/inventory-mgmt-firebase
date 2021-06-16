import React, { useRef } from 'react'
import styled from 'styled-components'
import { db } from "./firebaseConfig";

let Box = styled.div`
    position: absolute;
    height: 50%;
    width: 50%;
    background: white;
    padding: 20px;
    .close {
        position: absolute;
        background: red;
        border-radius: 50%;
        height: 20px;
        width: 20px;
        display: grid;
        place-content: center;
        top: 1%;
        right: 1%;
    }
`
export default function Form({ category, setShowForm, setValue, value }) {
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
            await db.collection(category).add(ourObj);
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
