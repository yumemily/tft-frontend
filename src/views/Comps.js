import React, { useState, useEffect } from 'react'
import { Link, useHistory } from "react-router-dom"
import MySpinner from "../components/MySpinner"
import Tooltip from '@material-ui/core/Tooltip';

export default function Comps(props) {
    const [comps, setComps] = useState([])
    const [loading, setLoading] = useState(true)
    const [cat, setCat] = useState("")
    const [sort, setSort] = useState("")

    const history = useHistory()

    console.log(props.user)
    useEffect(() => {
        getComps();
    }, []);

    useEffect(() => {
        getComps(cat)
    }, [cat])


    function queryBuilder(sort) {
        // caters
        let queryString = ""
        if (queryString.length === 0) {
            queryString = queryString + "?" + sort
        } else {
            queryString = queryString + "&" + sort
        }
        setCat(queryString)
        setSort(sort)
        console.log(queryString)
    }


    const getComps = async (q = "") => {
        const url = `${process.env.REACT_APP_SERVER}/comp-builder/comps/${q}`
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log("DATA", data);
        setComps(data.data)
        setLoading(false)

    };

    console.log(comps)

    const handleFavorite = async (id) => {
        console.log(id)
        const token = localStorage.getItem('token')
        const url = `${process.env.REACT_APP_SERVER}/comp-builder/comps/${id}`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + token
            },
            // body: JSON.stringify({ comp: deck, title: title })
        });
        const data = await response.json();
        console.log(data)
        console.log(response)
        if (response.status === 401) history.push("/login")
        console.log("DATA", data, "hgf");
        if (data.status === "success") getComps()
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

    const compRow = comps.map(el => {
        return (<div className="comp-row row mx-0 my-2 align-items-center">
            <div style={{ fontSize: 16 }} className="col-md-2">
                {el.title}<br></br>
                <span className="text-muted">Created by: {el.user && el.user.name}</span>
            </div>
            <div className="col-md-2 justify-content-evenly">
                {traits(filtered(el.comp)).map(el => { return <img style={{ maxHeight: 25 }} className="mx-1" src={`../../images/trait_icon_3_${el.toLowerCase().replace(/\s/g, '')}.png`} /> })}
            </div>
            <div className="col-md-6 col-xs-1">
                <div className="row ">
                    {filtered(el.comp).map(el => {
                        return <div className="col-md-1 col-sm mx-2 ">

                            <div className="row mt-1">
                                <Tooltip title={el.apiName} arrow>
                                    <img style={{ width: 45 }} className={`champ-icon-${el && el.cost}`} src={`../images/${el && el.apiName}.png`} />
                                </Tooltip>
                            </div>
                            <div className="row mt-1">
                                {el.items && el.items.map(el => { return <img className="item-icon" src={`../../images/${el.id}.png`} /> })}
                            </div>
                        </div>

                    })}
                </div>
            </div>
            <div className="col-md-2 col-sm ">

                <Link className="text-white" to={`/comp-builder/${el._id}`}>Open in Builder</Link>
                {" "}
                <Link

                    className="text-white"
                    onClick={() => handleFavorite(el._id)}>
                    {props.user && el.favorited.includes(props.user._id) ? "Unfavorite" : "Favorite"}
                </Link>

            </div>
        </div>)
    })


    if (loading) {
        return (
            <MySpinner />
        )
    }
    return (
        <div className="py-3" style={{ backgroundColor: "#0D202C" }}>
            <div className="container">
                <div className="divider-section">
                    <span className="my-2">v1.0</span>
                    <div className="divider "></div>
                </div>

                <div className="my-3" style={{ textAlign: "right" }}>
                    <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sort By
                    </button>
                    <div class="dropdown-menu dropdown-menu-right">
                        <button onClick={(e) => queryBuilder(e.target.value)} class="dropdown-item" type="button" value="sort=-createdAt">Newest</button>
                        <button onClick={(e) => queryBuilder(e.target.value)} class="dropdown-item" type="button" value="sort=-count">Most Favorited</button>
                    </div>
                    <div className="mt-4">
                        {compRow}
                    </div>
                </div>
            </div>
        </div>

    )
}

