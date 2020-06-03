import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom"

import Board from "../components/Board"

import ChampsSection from '../components/ChampsSection'
import ItemSection from "../components/ItemSection"
import MySpinner from '../components/MySpinner'

export default function CompBuilder() {
    const { id } = useParams()
    const history = useHistory()
    let me = []
    let itemArr = []
    for (let i = 0; i < 28; i++) {
        me.push(null)
    }

    const [deck, setDeck] = useState(me)
    const [text, setText] = useState("")
    const [title, setTitle] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        loadComp();
    }, []);

    const saveComp = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token')

        const res = await fetch(`${process.env.
            REACT_APP_SERVER}/comp-builder/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({ comp: deck, title: title })
        });
        const data = await res.json();

        if (data.status == "success") {
            setText("comp successfully saved")
            history.push("/comps")
        } else if (res.status === 401) history.push("/login")
        else {
            setText(data.message)
        }
    }

    console.log(title)
    console.log(text)

    const loadComp = async (e) => {

        const res = await fetch(`${process.env.REACT_APP_SERVER}/comp-builder/comps/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",

            },
            // body: JSON.stringify()
        });
        const data = await res.json();
        console.log(data)
        if (data.status === "success") {
            setDeck(data.data.comp)
            setLoading(false)
        } else if (data.status === "error") {
            // setText(data.message)
            setLoading(false)
        }
    }

    if (loading)
        return (
            <MySpinner />
        )

    return (
        <div style={{ backgroundColor: "#0D202C" }}>
            <div className="container" style={{ backgroundColor: "#0D202C" }}>
                <div className="divider-section py-4">
                    <span className="my-4">v1.0 Team Comp Builder</span>
                    <div className="divider "></div>
                </div>
                <Board me={me} deck={deck} setDeck={setDeck} title={title} setTitle={setTitle} />

                <button className="save-btn" onClick={saveComp}>Save Comp</button>
                <p className="text-danger">{text}</p>
                <div className="d-flex" >

                    <div className="champ-section"><ChampsSection /></div>


                    <div className="item-section" ><ItemSection /></div>
                </div>
            </div>
        </div>

    )
}
