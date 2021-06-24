import React, { useState, useEffect } from 'react'
import { Container, CardHolder } from './styles/containersStyle';
import { db } from "./firebaseConfig";
import firebase from "firebase";
import Form from "./Form";
import { useHistory } from "react-router-dom";
import Card from './Card';

export default function Mobile() {
    let history = useHistory();
    let user = firebase.auth().currentUser;
    user || history.push("");
    let userId;
    if (user) userId = user.email.split(".").join("_");
    let [showForm, setShowForm] = useState(false);
    let [mobiles, setMobiles] = useState([]);
    let getTodo = async () => {
        let response = await db.collection(`Mobiles`).get();
        let allMobiles = [];
        response.docs.forEach((elem) => {
            let data = elem.data();
            data.id = elem.id;
            console.log(data.id);
            allMobiles.push(data);
        });
        setMobiles(allMobiles);

    }
    useEffect(() => {
        getTodo()
    }, [])
    return (
        <Container>
            <h1>Mobile Lists</h1>
            <button onClick={(e) => setShowForm(true)}>add Mobile</button>
            <button onClick={(e) => history.push("/Categories")}>goto Category</button>
            <CardHolder>
                {
                    mobiles.map((elem, index) => <Card getTodo={getTodo} name={elem.name} category={"Mobiles"} elemId={elem.id} price={elem.price} description={elem.description} quantity={elem.quantity} image={elem.photoUrl} id={index} />)
                }
            </CardHolder>
            {showForm && <Form category={"Mobiles"} setShowForm={setShowForm} setValue={setMobiles} value={mobiles} userId={userId} />}
        </Container>
    )
}
