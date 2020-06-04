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
    const [dragable, setDragable] = useState(me)
    const [deck, setDeck] = useState(me)
    const [text, setText] = useState("")
    const [title, setTitle] = useState("")
    const [loading, setLoading] = useState(true)
    const [compTitle,setCompTitle] = useState("")

    //set every DRAGGED ITEM to false besides the one that
    //is clicked on
    //but do i really want everything to be false or just the hexes

    const turnEverythingToNullButIdx = idx => {
        const clone = [...me]
        clone[idx] = true
        setDragable(clone)
    }
    const turnEverythingToNull = () => {
        setDragable([...me])
    }

    const setDeckElementToNull = idx => {
        const clone = [...deck]
        clone[idx] = null
        setDeck(clone)
    }

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
            setCompTitle(data.data.title)
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


    console.log(compTitle)

    return (
        <div style={{ backgroundColor: "#0D202C" }}>
            <div className="container" style={{ backgroundColor: "#0D202C" }}>
                <div className="divider-section py-4">
                    <span className="my-4">v1.0 Team Comp Builder</span>
                    <div className="divider "></div>
                </div>
                <Board
                turnEverythingToNull={turnEverythingToNull}
                turnEverythingToNullButIdx={turnEverythingToNullButIdx}
                dragable = {dragable}
                setDragable = {setDragable}
                me={me} 
                deck={deck} 
                setDeck={setDeck} 
                title={title} 
                setDeckElementToNull={setDeckElementToNull}
                compTitle={compTitle}
                setTitle={setTitle} />

                <button className="save-btn" onClick={saveComp}>Save Comp</button>
                <p className="text-danger">{text}</p>
                <div className="d-flex" >

                    <div className="champ-section"><ChampsSection 
                    turnEverythingToNull={turnEverythingToNull}
                                    dragable = {dragable}
                                    setDragable = {setDragable}
                    setDeckElementToNull={setDeckElementToNull}
                    /></div>


                    <div className="item-section" ><ItemSection 
                    turnEverythingToNull={turnEverythingToNull}
                dragable = {dragable}
                setDragable = {setDragable}
                    /></div>
                </div>
            </div>
        </div>

    )
}
