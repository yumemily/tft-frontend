import React from 'react'
import {Tooltip} from "react-bootstrap"

export default function RenderToolTip(props) {
    console.log(props)
    return (
        <Tooltip id="button-tooltip" {...props}>
            {props.char}hi
      </Tooltip>
    )
}
