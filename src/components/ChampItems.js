import React from 'react'
import { useDrop } from "react-dnd"
import { ItemTypes } from '../utils/items'

export default function ChampItems(props) {
    if(props.items.length > 0){
        console.log(props)
    }

    
    return (
        <div className="red">

            {props.items.map(el=> {
                return (<div className="red-img" >
                <img className="champ-item-icon" src={`../images/${el.id}.png`}/>
            </div>)
            })}

        </div>
    )
}

