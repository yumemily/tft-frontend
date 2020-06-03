import React, { useEffect, useState } from 'react'
import MySpinner from "../components/MySpinner"

export default function Profile(props) {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)


    useEffect(() => {
        getUser()

    }, []);



    const getUser = async () => {
        const token = localStorage.getItem('token')
        const url = `${process.env.REACT_APP_SERVER}/users`
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });
        const data = await response.json();
        console.log("DATA", [data.data]);
        props.setUser(data.data);
        setLoading(false);
        // setLoading(false)
    };

    console.log("FAVORITES", data)

    const renderStars = (el) => {
        let a = []
        for (let i = 0; i < el.tier; i++) {
            a.push(<i className={`fa fa-star star unit-star-${el.rarity}`} aria-hidden="true"></i>)
        }
        return a
    }

    const matchHtml = props.user && props.user.info && props.user.info.matches.map(el => {
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
                                        <img className={`unit-img-${el.rarity}`} style={{ width: 40, margin: 4 }} src={`../../images/${el.character_id}.png`} />
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

    if(loading) return (<MySpinner/>)

    return (

        <div className="bg">

            <div className="container mt-3">
                <div className="profile__header">
                    <div className="profile__icon">
                        <img src={`//ddragon.leagueoflegends.com/cdn/10.10.3208608/img/profileicon/${props.user && props.user.info.data.profileIconId}.png`} alt="Profile Icon" />
                    </div>
                    <div className="profile__summoner">
                        <span className="profile__summoner__name"> {props.user && props.user.info.data.name}</span><br></br>
                        {/* {props.user.info.data.profileIconId} */}
                        <div style={{ fontSize: 12 }}>
                            <span><img style={{ width: 20 }} src={`../../images/tier_${props.user.info.info.tier}.png`} /> {props.user.info.info.tier}
                                {" "}{props.user.info.info.rank}</span><br></br>
                            <span>LP: {props.user.info.info.leaguePoints}</span><br></br>
                            <span>Wins: {props.user.info.info.wins}</span><br></br>
                            <span>Win-Rate: {Math.round((props.user.info.info.wins / props.user.info.info.losses) * 100)}%</span>
                        </div>
                    </div>
                </div>
                {matchHtml}
            </div>
        </div>
    )
}

