import React, { useEffect, useState } from 'react'
import { Link, useHistory } from "react-router-dom"
import MySpinner from "../components/MySpinner"

export default function TopTen(props) {
    const history = useHistory()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getTopTen()
    }, [])

    const getTopTen = async () => {
        const url = `${process.env.REACT_APP_SERVER}/topten`
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log("DATA", [data.data]);
        setData(data.data)
        setLoading(false)
    };
    console.log(data)

    // function handleClick(name) {
    //     props.setPlayer(name)
    // }

    const tableHtml = data.map((el, idx) => {
        return <tr>
            <th scope="row">{idx + 1}</th>
            <td><Link className="challenger-link" key={el.puuid} to={`/leaderboard/players/${el.puuid}`} >{el.summonerName} </Link></td>
            <td><img style={{ width: 20 }} src="../../images/challenger_1.png" />CHALLENGER {el.rank}</td>
            <td>{el.leaguePoints}</td>
            <td>{Math.round((el.wins / el.losses) * 100)}%</td>
            <td>{el.wins}</td>
        </tr>
    })

    if (loading) return (
       <MySpinner/>
    )

    return (

        <div className="container mt-3">
            <nav className="nav nav-pills nav-fill">
                <a className="nav-item nav-link active" href="#">Challenger</a>
                <a className="nav-item nav-link disabled" href="#">Grandmaster</a>
                <a className="nav-item nav-link disabled" href="#">Master</a>
                <a className="nav-item nav-link disabled" href="#">Diamond</a>
                <a className="nav-item nav-link disabled" href="#">Platinum</a>
                <a className="nav-item nav-link disabled" href="#">Gold</a>
                <a className="nav-item nav-link disabled" href="#">Silver</a>
                <a className="nav-item nav-link disabled" href="#">Bronze</a>
            </nav>
            <div className="leaderboard-header d-flex justify-content-center align-items-center">
                {/* <img src="https://cdn.lolchess.gg/images/leaderboards/ico-tier-placeholder.png"/> */}
                <div className="leaderboard-header-title">TFT Leaderboard</div>
            </div>
            <div className="table-responsive">
                <table class="table">
                    <thead className="thead-dark leaderboard-table-header">
                        <tr>
                            <th scope="col">Rank</th>
                            <th scope="col">Name</th>
                            <th scope="col">Tier</th>
                            <th scope="col"><i class="fa fa-sort-amount-asc" aria-hidden="true"></i> LP</th>
                            <th scope="col">WinRate</th>
                            <th scope="col">Wins</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableHtml}
                    </tbody>
                </table>
            </div>
        </div>

    )
}
