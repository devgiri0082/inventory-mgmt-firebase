import React, { useState, useEffect } from 'react'
import { CardHolder, Container } from './styles/containersStyle';
import { db } from "./firebaseConfig";
import Form from "./Form";
import firebase from "firebase";
import { useHistory } from "react-router-dom";
import Card from './Card';


export default function Appliances() {
    let history = useHistory();
    let user = firebase.auth().currentUser;
    user || history.push("");
    let userId = user.email.split(".").join("_");
    let [showForm, setShowForm] = useState(false);
    let [appliances, setAppliances] = useState([]);
    let getTodo = async () => {
        let response = await db.collection(`Appliances`).get();
        // console.log(response.docs);
        let allAppliances = [];
        response.docs.forEach((elem) => {
            let data = elem.data();
            data.id = elem.id;
            allAppliances.push(data);
        });
        setAppliances(allAppliances);

    }
    useEffect(() => {
        getTodo()
    }, [])
    // const deleting = async (id) => {
    //     try {
    //         await databaseRef.collection("TODOS").doc(props.id).delete();
    //     }
    // }
    return (
        <Container>
            <h1>Appliances Lists</h1>
            <button onClick={(e) => setShowForm(true)}>add Appliances</button>
            <button onClick={(e) => history.push("/Categories")}>goto Category</button>
            <CardHolder>
                {
                    appliances.map((elem, index) => <Card getTodo={getTodo} category={"Appliances"} elemId={elem.id} name={elem.name} price={elem.price} description={elem.description} quantity={elem.quantity} image={elem.photoUrl} id={index} />)
                }
            </CardHolder>
            {showForm && <Form category={"Appliances"} setShowForm={setShowForm} setValue={setAppliances} value={appliances} userId={userId} />}
        </Container>
    )
}
