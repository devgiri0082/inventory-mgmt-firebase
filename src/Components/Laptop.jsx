import React, { useState, useEffect } from 'react'
import { Container, CardHolder } from './styles/containersStyle';
import { db } from "./firebaseConfig";
import Form from "./Form";
import firebase from "firebase";

import { useHistory } from "react-router-dom";
import Card from './Card';
export default function Laptop() {
    let history = useHistory();
    let user = firebase.auth().currentUser;
    user || history.push("");
    let userId;
    if (user) userId = user.email.split(".").join("_");
    let [showForm, setShowForm] = useState(false);
    let [laptops, setLaptops] = useState([]);
    let getTodo = async () => {
        let response = await db.collection(`Laptops`).get();
        let allLaptops = [];
        response.docs.forEach((elem) => {
            let data = elem.data();
            data.id = elem.id;
            // console.log(elem.data());
            allLaptops.push(data);
        });
        console.log(allLaptops);
        setLaptops(allLaptops);

    }
    useEffect(() => {
        getTodo()
    }, [])
    return (
        <Container>
            <h1>Laptop Lists</h1>
            <button onClick={(e) => setShowForm(true)}>add laptop</button>
            <button onClick={(e) => history.push("/Categories")}>goto Category</button>
            <CardHolder>
                {
                    laptops.map((elem, index) => {
                        return <Card getTodo={getTodo} category={"Laptops"} elemId={elem.id} name={elem.name} price={elem.price} description={elem.description} quantity={elem.quantity} image={elem.photoUrl} id={index} />
                    }
                    )}
            </CardHolder>
            {showForm && <Form category={"Laptops"} setShowForm={setShowForm} setValue={setLaptops} value={laptops} userId={userId} />}
        </Container>
    )
}
