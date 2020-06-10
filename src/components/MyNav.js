import React from 'react'

import { useHistory } from "react-router-dom"
import {
    Link
} from "react-router-dom";

import { Nav, Navbar, NavDropdown } from "react-bootstrap"

export default function MyNav(props) {
    const history = useHistory();

    const handleLogout = async () => {
        const res = await fetch(process.env.REACT_APP_SERVER + "/auth/logout", {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        });
        if (res.status === 204) {
            props.setUser(null);
            localStorage.removeItem("token");
        }
    };

    return (
        <Navbar className="navbar-dark nav-bg"  expand="lg">
            <Navbar.Brand><img style={{width:150}}src="../../images/nav_logo.png"></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link className="nav-link" to="/">
                        Home
                         </Link>
                    <Link className="nav-link" to="/comps">
                        Team Comps
                    </Link>
                    <Link className="nav-link" to="/comp-builder">
                        Comp Builder
                         </Link>
                    <Link className="nav-link" to="/leaderboard">
                        Leaderboard
                         </Link>
                </Nav>
                {!props.user ? (
                    <>
                        <Link className="nav-link text-white" to="/login">
                            Login
                        </Link>


                        <Link className="nav-link text-white" to="/sign-up">
                            Register
                         </Link>

                    </>
                ) : (
                        <>
                            {/* <span className="nav-link">Welcome back {props.user.name}!</span> */}
                            <NavDropdown title={props.user.name} id="basic-nav-dropdown">
                            <NavDropdown.Item ><Link to="/profile">View Profile</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link to="/edit-profile">Edit Profile</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link to="/profile/favorites">View Favorites</Link></NavDropdown.Item>
                            </NavDropdown>
                            <Link className="nav-link" style={{color:"white"}}onClick={handleLogout}>
                                Logout
                            </Link>

                        </>
                    )}
            </Navbar.Collapse>
        </Navbar>
    );
}

