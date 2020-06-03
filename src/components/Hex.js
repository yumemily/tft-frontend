import React, { useState } from 'react'
import { useDrop } from "react-dnd"
import { ItemTypes } from '../utils/items'
import '../App.css';
import ChampItems from './ChampItems';

export default function Hex(props) {

    const handleDrop = (champ) => {
        props.magic(props.idx, champ)
    }

    const handleDropItem = item => {
        const obj = {...props.hex}
        if(obj.items && obj.items.length === 3){
            return
        } else{
        obj.items = obj.items ? obj.items.concat(item) : [].concat(item)
        props.magic(props.idx, obj)
        }
    }

    const [{ isOver }, drop] = useDrop({
        accept: !props.allow ? [ItemTypes.CHAMPICON, ItemTypes.ITEMICON]: [ItemTypes.NONE],
        drop: (item, monitor) => {
            console.log(item)
            if(item.type==="champicon"){
                handleDrop(item.obj)
            }
            else {
                handleDropItem(item.obj)
            }
        },
        collect: monitor => ({
            isOver: !!monitor.isOver({ shallow: true })
        })
    })

    return (
        <div class="hex">

            <div class="hexIn">
                <div class="hexLink" href="#">
                    <img ref={drop} src={props.hex ? `../images/${props.hex.apiName}.png` : "../images/lightplaceholder.png"} alt="" />
                </div>

              <ChampItems  items={props.hex && props.hex.items ? props.hex.items : []}/>
            </div>
        </div>
    )
}
