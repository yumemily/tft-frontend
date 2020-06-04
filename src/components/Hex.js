import React, { useState, useEffect } from 'react'
import { useDrop } from "react-dnd"
import { ItemTypes } from '../utils/items'
import '../App.css';
import ChampItems from './ChampItems';
import { useDrag } from 'react-dnd'

export default function Hex(props) {
    const [champ, setChamp] = useState(null)



    const handleDrop = (c) => {

        setChamp(c.obj)
        if(c.idx !==props.idx){
            props.magic(props.idx, c.obj)
            props.setDeckElementToNull(c.idx) ///////
        }
        console.log("source", c)
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

    const [{isOver}, drop] = useDrop({
        accept: [ItemTypes.CHAMP_LIST_HEX, ItemTypes.CHAMP_HEX_LIST, ItemTypes.ITEMICON],
        drop: (item, monitor) => {
            if(item.type==="CHAMP_LIST_HEX" || item.type ==="CHAMP_HEX_LIST"){
                handleDrop(item)
            }
            else if (item.type === "ITEMICON" && champ) {
                handleDropItem(item.obj)
            }
        },
        collect: monitor => ({
            isOver: !!monitor.isOver({ shallow: true })
        })
    })

    

    // console.log("isOver",isOver)

    const [{isDragging}, drag] = useDrag({
        item: {
            type: ItemTypes.CHAMP_HEX_LIST,
            obj: champ,
            idx: props.idx,
            // magic: v => handleFinishDrop(v)
        },
        collect: monitor => {
            if (monitor.isDragging()) {
                console.log("start dragging")
                props.setIdxBeingDragged(props.idx)
            }
            return ({
            isDragging: !!monitor.isDragging()
        })}
    })
   
    return (
        <div class="hex">

            <div class="hexIn">
                <div 
                ref={props.dragable ? drag : drop}
                class="hexLink" href="#">
                    <img 
                    onMouseOver={()=>{ props.turnEverythingToNullButIdx(props.idx)}}
                     src={props.hex ? `../images/${props.hex.apiName}.png` : "../images/lightplaceholder.png"} alt="" />
                </div>


              <ChampItems  items={props.hex && props.hex.items ? props.hex.items : []}/>

            </div>
        </div>
    )
}
