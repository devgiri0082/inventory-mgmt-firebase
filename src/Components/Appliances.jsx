import React, { useState, useEffect } from 'react'
import { Container, SubContainer } from './styles/containersStyle';
import { Table } from './styles/tableStyles';
import styled from "styled-components";
import { db } from "./firebaseConfig";
import TableHeader from "./TableHeader";
import Form from "./Form";
import { useHistory } from "react-router-dom";
let SubContainer1 = styled(SubContainer)`
    width: 95%;
    height: auto;
`

export default function Appliances() {
    let history = useHistory();
    let [showForm, setShowForm] = useState(false);
    let [appliances, setAppliances] = useState([]);
    let getTodo = async () => {
        let response = await db.collection("appliances").get();
        // console.log(response.docs);
        let allAppliances = [];
        response.docs.forEach((elem) => {
            let currentData = elem.data();
            currentData["id"] = elem.id;
            allAppliances.push(currentData);
        });
        console.log(allAppliances);
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
            <SubContainer1>
                <Table>
                    <TableHeader />
                    {
                        appliances.map((elem, index) => (
                            <tr>
                                <td>{elem.name}</td>
                                <td>{elem.price}</td>
                                <td>{elem.quantity}</td>
                                <td><span>⚙️</span>|<span>🗑️</span></td>
                            </tr>
                        ))
                    }
                </Table>
            </SubContainer1>
            {showForm && <Form category={"appliances"} setShowForm={setShowForm} setValue={setAppliances} value={appliances} />}
        </Container>
    )
}
