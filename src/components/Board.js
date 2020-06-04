import React, { useState, useEffect } from 'react'
import Hex from "./Hex"

export default function Board(props) {
    // const [deck, setDeck] = useState(me)
    const [idxBeingDragged, setIdxBeingDragged] = useState(null)

    const setSingleEl = (idx, val) => {
        props.deck[idx] = val
        const arr = [...props.deck]
        props.setDeck(arr)
    }
     
   
    const handleChange = (e) => {
        e.preventDefault()
        props.setTitle(e.target.value)
    }

    useEffect(()=>{
    },[idxBeingDragged])

    
    // console.log("DECK", props.deck)

    return (
        <div style={{ maxWidth: 800 }}>
            <form onChange={handleChange}>
                <input style={{ width: 300 }} className="form-control form-control-sm mb-3" type="text" placeholder="Title">
                </input>
            </form>

            <div id="hexGrid">
                {props.deck.map((e, idx) => <Hex 
                setIdxBeingDragged={setIdxBeingDragged} 
                setDeckElementToNull={props.setDeckElementToNull}
                hex={e} 
                dragable={props.dragable[idx]} 
                idx={idx} 
                magic={setSingleEl}
                turnEverythingToNullButIdx={props.turnEverythingToNullButIdx}
                   />)}
            </div>
        </div>
    )
}