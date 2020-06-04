import React from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../utils/items'



export default function (props) {
    
    const [{isDragging}, drag] = useDrag({
        item: {
            type: ItemTypes.ITEMICON,
            obj: props.item
      
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    })

    return (
        <img
            ref={drag}
            onClick={()=>props.turnEverythingToNull()}
            width = "35px"
            className="m-2"
            id="myImg" 
            src={`../images/${props.item.id}.png`}>
            </img>
    )
}
