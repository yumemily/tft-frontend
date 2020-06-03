import React, { useEffect, useState } from 'react'
import { Card, Button, CardDeck } from "react-bootstrap"
import { Link } from "react-router-dom"
import MySpinner from '../components/MySpinner'

export default function Index() {
    const [comps, setComps] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getComps();
    }, []);

    console.log("====Comps", comps)

    const getComps = async () => {
        const url = `${process.env.REACT_APP_SERVER}/comp-builder/comps`
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

    if (loading) return (<MySpinner />)

    return (
        <div style={{ display: "flex", flexDirection:"column", backgroundColor:"white", height:"100vh" }}>
        
        <div style={{ flex: "1 0 auto" }}>
            <header>
                <div class="overlay"></div>
                <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                    <source src="../../images/trailer.mp4" type="video/mp4" />
                </video>
                <div class="container h-100">
                    <div class="d-flex h-100 text-center align-items-center">
                        <div class="w-100 text-white">
                            <h1 className="display-3 tracking-in-expand">TFT Helper</h1>

                            <p class="lead mb-4">Match history, ranked statistics, and much more at your fingertips</p>
                            <button className="button-index p-2"><span><Link style={{ color: "white", textDecoration: "none" }} to="login">Sign up!</Link></span></button>
                        </div>
                    </div>
                </div>
            </header>

            <section class="features-icons text-center">
                <div class="container">
                    <h3>SET 3.1 Champs</h3>
                    <div class="row">
                    </div>
                    <CardDeck>
                        <Card style={{ fontWeight: "bold" }}>
                            <Card.Img className='champ-img' style={{ maxHeight: 150 }} variant="top" src="https://cdn.communitydragon.org/latest/champion/Annie/splash-art/centered" />
                            <Card.Body className="card-img-overlay champ-traits text-white ">
                                <Card.Text className="champ-traits text-white">
                                    <h6 style={{ fontWeight: "bold" }}>
                                        <img style={{ width: 20 }} src="../../images/trait_icon_3_sorcerer.png" />
                                        {' '}Sorcerer
                                                </h6>
                                    <h6 style={{ fontWeight: "bold" }}>
                                        <img style={{ width: 20 }} src="../../images/trait_icon_3_mechpilot.png" />
                                        {' '}Mech-Pilot
                                                </h6>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className='cardfooter text-white'><div className="champ-name">Annie</div> <div className="champ-cost"><img style={{ width: '2rem', paddingRight: '.5rem' }} src='../../images/gold_icon.png' />
                                2</div></Card.Footer>
                        </Card>
                        <Card style={{ fontWeight: "bold" }}>
                            <Card.Img className='champ-img' style={{ maxHeight: 150 }} variant="top" src="https://cdn.communitydragon.org/latest/champion/Jinx/splash-art/centered" />
                            <Card.Body className="card-img-overlay champ-traits text-white ">
                                <Card.Text className="champ-traits text-white">
                                    <h6 style={{ fontWeight: "bold" }}>
                                        <img style={{ width: 20 }} src="../../images/trait_icon_3_rebel.png" />
                                        {' '}Rebel
                                                </h6>
                                    <h6 style={{ fontWeight: "bold" }}>
                                        <img style={{ width: 20 }} src="../../images/trait_icon_3_blaster.png" />
                                        {' '}Blaster
                                                </h6>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className='cardfooter text-white'><div className="champ-name">Jinx</div> <div className="champ-cost"><img style={{ width: '2rem', paddingRight: '.5rem' }} src='../../images/gold_icon.png' />
                                4</div></Card.Footer>
                        </Card>
                        <Card style={{ fontWeight: "bold" }}>
                            <Card.Img className='champ-img' style={{ maxHeight: 150 }} variant="top" src="https://cdn.communitydragon.org/latest/champion/Ashe/splash-art/centered" />
                            <Card.Body className="card-img-overlay champ-traits text-white ">
                                <Card.Text className="champ-traits text-white">
                                    <h6 style={{ fontWeight: "bold" }}>
                                        <img style={{ width: 20 }} src="../../images/trait_icon_3_sniper.png" />
                                        {' '}Sniper
                                                </h6>
                                    <h6 style={{ fontWeight: "bold" }}>
                                        <img style={{ width: 20 }} src="../../images/trait_icon_3_celestial.png" />
                                        {' '}Celestial
                                                </h6>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className='cardfooter text-white'><div className="champ-name">Ashe</div> <div className="champ-cost"><img style={{ width: '2rem', paddingRight: '.5rem' }} src='../../images/gold_icon.png' />
                                3</div></Card.Footer>
                        </Card>
                    </CardDeck>

                </div>
            </section>
            <section >
                <div className="container">
                    <h3 className="text-center text-white">v1.0 Comps</h3>
                    {compRow}
                </div>
            </section>
        </div >
        </div>
    )
}
