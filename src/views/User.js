
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom"
import { Card, ListGroup } from "react-bootstrap"
import EditAccount from '../components/EditAccount';
import PWUpdate from './PWUpdate';


export default function User(props) {
  const history = useHistory();
  const [view, setView] = useState("main")
  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(true)

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
    setUser(data.data);
    setLoading(false);
    // setLoading(false)
  };

  console.log("USER", user)

  if(loading) return (<div>loading...</div>)

  return (
    <div class="container" className="m-4">
      <div class="row">
        <div class="col-sm-4">
          <Card style={{ width: '18rem' }}>
            <Card.Header>My Account</Card.Header>
            <ListGroup variant="flush">
              {/* <ListGroup.Item>Settings</ListGroup.Item> */}
              <ListGroup.Item onClick={() => setView("editProfile")}>Edit Profile</ListGroup.Item>
              <ListGroup.Item onClick={() => setView("resetPw")}>Reset Password</ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
        <div class="col-sm-8">
          {view == "editProfile" &&
            <EditAccount />
          }
          {view == "main" &&
            <div>
              <h1>Welcome back {user && user.name}!</h1>
              <h3>Account Information</h3>
              <h4>Name: {user && user.name}</h4>
              <h4>Email: {user && user.email}</h4>
            </div>
          }
          {view == "resetPw" &&
            <PWUpdate />
          }
        </div>
      </div>
    </div>
  )

}