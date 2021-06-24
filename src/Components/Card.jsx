import React from 'react'
import styled from 'styled-components'
import { db } from './firebaseConfig';

let Box = styled.div`
    /* height: 350px; */
    border-radius: 10px;
    background: white;
    padding: 15px;
    margin: 30px;
    position: relative;
    .top {
        display: flex;
        gap: 10px;
    }
    img {
        height: 200px;
        width:auto;
        border-radius: 10px
    }
    .right{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        
    }
    .name {
        text-align: center;
        margin-bottom: 10px;
        font-size: 20px;
    }
    .description{
        text-align: justify;
        margin-top: 5px;
        width: 350px;
    }
    .delete {
        position: absolute;
        background: tomato;
        width: 22px;
        height: 22px;
        display: grid;
        place-content: center;
        border-radius: 50%;
        color: white;
        top: 1%;
        left: 1%;
        cursor: pointer;
    }
    .delete:hover {
        background: none;
        color: tomato;
        border: 1px solid tomato;
        cursor: pointer;
    }
`
export default function Card({ getTodo, elemId, category, image, name, description, price, quantity }) {
    console.log(image);
    let deleteElem = async () => {
        try {
            await db.collection(category).doc(elemId).delete();
            getTodo();
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <Box>
            <div className="delete" onClick={deleteElem}>X</div>
            <div className="name">{name}</div>
            <div className="top">
                <div className="left">
                    <img src={image} alt="abc"></img>
                </div>
                <div className="right">
                    <div className="price">
                        Price: {`$${price}`}
                    </div>
                    <div className="quantity">
                        Quantity: {quantity}
                    </div>
                </div>
            </div>
            <div style={{ marginTop: "10px" }}>Description: </div>
            <div className="description">
                {description}
            </div>
        </Box>
    )
}
