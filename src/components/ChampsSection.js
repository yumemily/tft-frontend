import React from 'react'
import ChampIcons from "./ChampIcon"
import champions from "../champions"
import { ItemTypes } from '../utils/items'
import {useDrop} from "react-dnd"

export default function ChampsSection(props) {

    const handleDrop = (obj) => {
        props.setDeckElementToNull(obj.idx)
        // obj.magic(false)
    }

    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.CHAMP_HEX_LIST,
        drop: (item, monitor) => {
                handleDrop(item)
        },
        collect: monitor => ({
            isOver: !!monitor.isOver({ shallow: true })
        })
    })

    const arr = Object.keys(champions)
    return (
        <div ref={drop} className="row mx-0" >
            {arr.map(e=> <ChampIcons 
            turnEverythingToNull={props.turnEverythingToNull}
            setAllHexesToFalse={props.setAllHexesToFalse}
            champ={champions[e]} 
            />)}
        </div>
    )
}
