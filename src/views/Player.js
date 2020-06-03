import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import '../App.css';
import MySpinner from '../components/MySpinner';
import Tooltip from '@material-ui/core/Tooltip';


export default function Player(props) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    const { id } = useParams()
    console.log(id)


    useEffect(() => {
        getPlayer()
    }, [])

    const getPlayer = async () => {
        const url = `${process.env.REACT_APP_SERVER}/topten/players/${id}`
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log("DATA", data)
        setData(data)
        setLoading(false)


    };
    console.log(data)

    const renderStars = (el) => {
        let a = []
        for (let i = 0; i < el.tier; i++) {
            a.push(<i className={`fa fa-star star unit-star-${el.rarity}`} aria-hidden="true"></i>)
        }
        return a
    }

    const matchHtml = data && data.matches.map(el => {
        return (
            <div className="item-row">
                <div className="left-border">
                </div>
                <div className="match-row">
                    <div className="col-md-1">
                        <span style={{ color: "#207AC8", fontWeight: "bold" }}>#{el.placement}</span> <br></br>
                        <span className="text-muted">Ranked</span>
                    </div>
                    <div className="col-md-1 row-items">
                        <img className="companion-icon" src="https://cdn.lolchess.gg/images/tft/companions/tooltip_sgpig_lastwish_tier1.little_legends_star_guardian.png" />
                    </div>
                    <div id="traits" className="col-md-3 row-items row-xs-12">
                        <div>{el.traits.map(el => {
                            let one
                            try {
                                one = require(`../images/trait_icon_3_${el.name.toLowerCase()}.png`)
                            } catch (e) {
                                one = require("../images/trait_icon_3_set3_blademaster.png")
                            }
                            return <span><img style={{ width: 25 }} src={one} /> </span>
                        })}</div>
                    </div>

                    <div id="units" className="col-md-7">
                        <div className="row ">
                            {el.units.map(el => {
                                return <div className="col-md-1">
                                    <div className="row justify-content-center">
                                        {renderStars(el)}
                                    </div>
                                    <div className="row justify-content-center">
                                        <Tooltip title={el.character_id} arrow>
                                            <img className={`unit-img-${el.rarity}`} style={{ width: 40, margin: 4 }} src={`../../images/${el.character_id}.png`} />
                                        </Tooltip>
                                    </div>

                                    <div className="row justify-content-center">
                                        {el.items.map(el => {
                                            return <img className="item-icon" src={`../../images/${el}.png`} />
                                        })}
                                    </div>

                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    if (loading) return (<MySpinner />)
    return (
        <div className="bg">

            <div className="container mt-3">
                <div className="profile__header">
                    <div className="profile__icon">
                        <img src={`//ddragon.leagueoflegends.com/cdn/10.10.3208608/img/profileicon/${data && data.player.profileIconId}.png`} alt="Profile Icon" />
                    </div>
                    <div className="profile__summoner">
                        <span className="profile__summoner__name">{data && data.player.name}</span><br></br>
                        <button className="favorite-btn"><i class="fa fa-bookmark-o" aria-hidden="true"></i> Favorite</button>
                    </div>
                </div>
                {matchHtml}
            </div>
        </div>
    )
}
