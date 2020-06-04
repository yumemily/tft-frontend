import React from 'react'
import items from "../items"
import ItemIcon from "./ItemIcon"

export default function ItemSection(props) {
    const arr = Object.keys(items)
    return (
        <div className="row justify-content-center" >
            {arr.map(e=> <ItemIcon 
            turnEverythingToNull={props.turnEverythingToNull}

            item={items[e]} />)}
        </div>
    )
}
