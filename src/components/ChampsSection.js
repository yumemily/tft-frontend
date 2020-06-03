import React from 'react'
import ChampIcons from "./ChampIcon"
import champions from "../champions"

export default function ChampsSection() {
    const arr = Object.keys(champions)
    return (
        <div className="row mx-0" >
            {arr.map(e=> <ChampIcons champ={champions[e]} />)}
        </div>
    )
}
