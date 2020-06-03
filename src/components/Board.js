import React, { useState } from 'react'
import Hex from "./Hex"

// let me = []
// let itemArr = []
// for (let i = 0 ; i <28; i++){
//     me.push(null)
// }

export default function Board(props) {
    // const [deck, setDeck] = useState(me)

    const setSingleEl = (idx, val) => {
        props.deck[idx] = val
        const arr = [...props.deck]
        props.setDeck(arr)
    }

    const handleChange = (e) => {
        e.preventDefault()
        props.setTitle(e.target.value)
    }

    console.log("DECK", props.deck)

    return (
        <div style={{ maxWidth: 800 }}>
            <form onChange={handleChange}>
                <input style={{ width: 300 }} className="form-control form-control-sm mb-3" type="text" placeholder="Title">
                </input>
            </form>

            <div id="hexGrid">
                {props.deck.map((e, idx) => <Hex hex={e} idx={idx} magic={setSingleEl} />)}
            </div>
        </div>
    )
}