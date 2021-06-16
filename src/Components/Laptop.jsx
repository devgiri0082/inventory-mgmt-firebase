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
export default function Laptop() {
    let history = useHistory();
    let [showForm, setShowForm] = useState(false);
    let [laptops, setLaptops] = useState([]);
    let getTodo = async () => {
        let response = await db.collection("Laptops").get();
        // console.log(response.docs);
        let allLaptops = [];
        response.docs.forEach((elem) => {
            console.log(elem.data());
            allLaptops.push(elem.data());
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
            <SubContainer1>
                <Table>
                    <TableHeader />
                    {
                        laptops.map((elem, index) => (
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
            {showForm && <Form category={"Laptops"} setShowForm={setShowForm} setValue={setLaptops} value={laptops} />}
        </Container>
    )
}
