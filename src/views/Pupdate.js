
// form to collet pw

// send post api, token on url, pw in body

import React, {useState} from 'react'
import {useParams} from 'react-router-dom'

export default function Pupdate() {
    const [formInput, setFormInput] = useState({ });
    const [text, setText]= useState("")
    // const token = localStorage.getItem('token')
    const {token} = useParams()
    console.log("TOKEN FROM APRAMS",token)

    const handleChange = e => {
        setFormInput({ ...formInput, [e.target.name]: e.target.value });

      };

    const handleSubmit = async(e) => {
        e.preventDefault()
        const pw1 = formInput.password1
        const pw2 = formInput.password2
        console.log(formInput)
        if(pw1 !== pw2){
            alert("passwords don't match")
        } else{
           const password = pw1
            const res = await fetch(`${process.env.
                REACT_APP_SERVER}/users/change-password/${token}`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({ password, token })
              });
              const data = await res.json();
              if(data.status==="success") setText("Password successfully changed.")
              else setText("Password update failed.")
        }
    }
    
    return (
        <div className="container mt-3">
            <form  onSubmit={handleSubmit} onChange={handleChange}>
                <div class="form-group">
                    <label for="exampleInputPassword1">New Password</label>
                    <input type="password" class="form-control" name="password1" placeholder="New Password" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword2">Repeat New Password</label>
                    <input type="password" class="form-control" name="password2" placeholder="Repeat New Password" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            {text}
        </div>
    )
}
