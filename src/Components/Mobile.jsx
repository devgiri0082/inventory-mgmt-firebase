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
export default function Mobile() {
    let history = useHistory();
    let [showForm, setShowForm] = useState(false);
    let [mobiles, setMobiles] = useState([]);
    let getTodo = async () => {
        let response = await db.collection("Mobiles").get();
        // console.log(response.docs);
        let allMobiles = [];
        response.docs.forEach((elem) => {
            console.log(elem.data());
            allMobiles.push(elem.data());
        });
        console.log(allMobiles);
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
            <SubContainer1>
                <Table>
                    <TableHeader />
                    {
                        mobiles.map((elem, index) => (
                            <tr>
                                <td>{elem.name}</td>
                                <td>{elem.price}</td>
                                <td>{elem.quantity}</td>
                                <td>⚙️</td>
                            </tr>
                        ))
                    }
                </Table>
            </SubContainer1>
            {showForm && <Form category={"Mobiles"} setShowForm={setShowForm} setValue={setMobiles} value={mobiles} />}
        </Container>
    )
}
