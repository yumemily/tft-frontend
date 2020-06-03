import React, { useState, useEffect } from 'react'
import MySpinner from '../components/MySpinner'

export default function Favorites() {
    const [comps, setComps] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getFavorites()
    }, [])


    const getFavorites = async () => {
        const token = localStorage.getItem('token')
        const url = `${process.env.REACT_APP_SERVER}/comp-builder/comps/favorites`
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });
        const data = await response.json();
        console.log("DATA", [data.data]);
        setComps(data.data);
        setLoading(false);
    }

    const filtered = (array) => array.filter(function (el) {
        return el != null;
    });

    //go thru every champ and push traits to traitarr
    const traits = (champs) => champs.reduce((acc, el, idx) => {
        el.traits.forEach(e => {
            if (!acc.includes(e)) acc.push(e)
        })
        return acc
    }, [])

    const compRow = comps && comps.map(el => {
        return (<div className="comp-row row mx-0 my-2 align-items-center">
            <div style={{ fontSize: 16 }} className="col-md-2">
                {el.title}<br></br>
                <span style={{ fontSize: 12 }} className="text-muted">Created by: {el.user && el.user.name}</span>
            </div>
            <div className="col-md-2 justify-content-evenly">
                {traits(filtered(el.comp)).map(el => { return <img style={{ maxHeight: 25 }} className="mx-1" src={`../../images/trait_icon_3_${el.toLowerCase().replace(/\s/g, '')}.png`} /> })}
            </div>
            <div className="col-md-6 col-xs-1">
                <div className="row ">
                    {filtered(el.comp).map(el => {
                        return <div className="col-md-1 col-sm mx-2 ">

                            <div className="row mt-1">
                                <img style={{ width: 45 }} className={`champ-icon-${el && el.cost}`} src={`../images/${el && el.apiName}.png`} />
                            </div>
                            <div className="row mt-1">
                                {el.items && el.items.map(el => { return <img className="item-icon" src={`../../images/${el.id}.png`} /> })}
                            </div>
                        </div>

                    })}
                </div>
            </div>
        </div>)
    })

    if(loading) return (<MySpinner/>)

    return (
        <div style={{backgroundColor: "#0D202C", height:"100%"}}>
            <div className="container">
                {compRow}
            </div>
        </div>
    )
}
