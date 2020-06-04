import React, {useState} from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../utils/items'
import champions from "../champions"

export default function (props) {

    const [{isDragging}, drag] = useDrag({
        item: {
            type: ItemTypes.CHAMP_LIST_HEX,
            obj: props.champ
      
        },
        collect: monitor => {
            if(monitor.isDragging()===true) {
                console.log(true)
            }

            return {
            
            // call setfill to other hexes
            isDragging: !!monitor.isDragging()
        }}
    })

  
    return (
        <div ref={drag}>
            <img  
            // onClick={()=>console.log("khoa")}
            onClick={()=>props.turnEverythingToNull()}
            className={`champ-icon-${props.champ.cost} m-2`}
            width = "50px"
            opacity={isDragging ? ".5": "1"}
            id="myImg" 
            src={`../images/${props.champ.apiName}.png`}>
            </img>
        </div>
    )
}
