import {Card, TextField, Typography} from "@mui/material"
import "../assets/form.css"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Login(){
    const navigate=useNavigate();
    const [userEmail, setUserEmail]=useState("");
    const [password, setPassword]=useState("");

    return <div style={{display:"flex", justifyContent:"center"}}>
        <Card variant="outlined" style={{width: 400, padding: 10}}>
            <Typography variant="h6">Login</Typography>
            <TextField variant="outlined" fullWidth label="Login" margin="normal" autoComplete="off" onChange={(e)=>{
                setUserEmail(e.target.value);
            }}></TextField>
            <TextField variant="outlined" fullWidth label="Password" margin="normal" autoComplete="off" onChange={(e)=>{
                setPassword(e.target.value);
            }}></TextField>
            <button className="btnSubmit" style={{width: "100%"}} onClick={()=>{
                async function login(){
                    const response = await axios.post("http://localhost:3000/login",{
                        userEmail:userEmail,
                        password: password 
                    })
                    if(response.data.token){
                        localStorage.setItem("token", response.data.token)
                        navigate("/")
                    }
                }
                login();
            }}>Login</button>
        </Card>
    </div>
}

export default Login;