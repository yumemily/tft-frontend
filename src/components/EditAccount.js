import React, {useState} from 'react'

export default function EditAccount() {
    const [formInput, setFormInput] = useState({})
    const [text, setText] = useState("")
    
    const handleChange = e => {
        setFormInput({ ...formInput, [e.target.name]: e.target.value });
    };

    const editProfile = async (e) => {
        e.preventDefault()

        const {summonerName} = formInput
        if(summonerName == null ) return setText("Null fields are not allowed. Please fill in at least one field to make changes.")
        
        const token = localStorage.getItem('token')
        const url = `${process.env.REACT_APP_SERVER}/users/me`
        const response = await fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          },
          body: JSON.stringify({ summonerName})
        });
        const data = await response.json();
        console.log(data)
        if(data.status == "ok"){
            setText("Your account details have successfully been updated.")
        }else{
            setText("Something went wrong. Your account details were not updated. Please try again.")
        }
        
        // setLoading(false)
        
      };
      
    
    return (
        <form onSubmit={editProfile} onChange={handleChange}>
        <div class="form-group row">
          <label for="name" class="col-4 col-form-label text-white">Summoner Name</label>
          <div class="col-8">
            <input id="name" name="summonerName" placeholder="SummonerName" class="form-control here" type="text" />
          </div>
        </div>
  
        <div class="form-group row">
          <div class="offset-4 col-8">
            <button name="submit" type="submit" class="btn btn-primary">Update My Profile</button>
          </div>
          <p className="text-white">{text}</p>
        </div>
      </form>
    )
}
