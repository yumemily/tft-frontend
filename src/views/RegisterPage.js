import React, { useState } from 'react'
import {useHistory} from "react-router-dom"

export default function RegisterPage(props) {
    const [formInput, setFormInput] = useState({ name: "", email: "", password: "" });
    const history = useHistory();

    const handleLogin = async (email, password) => {
        const res = await fetch(process.env.REACT_APP_SERVER+"/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });
        const data = await res.json();
        console.log("DATA", data)
        if (data.status === "ok") {
            const token = data.data.token
            console.log("TOKENNNN", token) //user object with a token
            localStorage.setItem("token", token);
            props.setUser(data.data.user);
        } else {
            // token is not valid, clear the token so that we don't have to check again
            props.setUser(null)
            localStorage.removeItem("token");
        }
        // // finally set our app state to LOADED
        // props.setLoaded(true);
    }

    console.log("USER", props.user)

    const handleChange = e => {
        setFormInput({ ...formInput, [e.target.name]: e.target.value });
        const email = formInput.email
        const password = formInput.password
        console.log("EMAILANDPW", email, password)
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        console.log("fired");
        const email = formInput.email
        const password = formInput.password
        const name = formInput.name
        const summonerName = formInput.summonerName
        console.log("EMAILANDPW", email, password)
        const res = await fetch(process.env.REACT_APP_SERVER+"/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password, summonerName})
        });
        //login after signing up
        if (res.status === 201) {
            handleLogin(email, password)
            history.push("/profile")
        }
        // to do by you
    };

    console.log(formInput)
    return (
        <div>

            <form className="form-signin" onSubmit={handleRegister} onChange={handleChange} >
                <img className="mb-4" src="/docs/4.5/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                <h1 className="h3 mb-3 font-weight-normal">Please Register an Account</h1>

                <label className="sr-only" for="FormInputName">Name</label>
                <input className="form-control" type="text" name="name" placeholder="Full name" required autofocus />
                <label for="inputEmail" className="sr-only" >Email address</label>
                <input type="email" name="email" className="form-control" placeholder="Email address" required autofocus />
                <label for="inputPassword" className="sr-only">Password</label>
                <input type="password" name="password" className="form-control" placeholder="Password" required autofocus />
                <input type="text" name="summonerName" className="form-control" placeholder="Summoner Name" required autofocus />
                {/* <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
    </label>
                </div> */}
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
                <p className="mt-5 mb-3 text-muted">&copy; 2017-2020</p>
            </form>
            <div>
                <p>Sign Up </p>
                <form onSubmit={handleLogin} onChange={handleChange}>
                    <label>email: </label>
                    <input type="email" name="email" placeholder="email address" />
                    <label>Password: </label>
                    <input type="password" name="password" placeholder="password" />

                    <button type="submit">Login</button>
                </form>

                <p>Register an Account</p>
                <form onSubmit={handleRegister} onChange={handleChange}>
                    <label>name: </label>
                    <input type="text" name="name" placeholder="full name" />
                    <label>email: </label>
                    <input type="email" name="email" placeholder="email address" />
                    <label>Password: </label>
                    <input type="password" name="password" placeholder="password" />

                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    )
}
