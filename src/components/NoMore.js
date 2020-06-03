import React from 'react'
import {Route, Redirect} from "react-router-dom"

export default function NoMore({component: Component, ...props}) {
    return !props.user 
    ? <Route {...props}  render={()=> <Component {...props}/>} />
    : <Redirect to ="/" />
}
