import {Link, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userEmailState } from "../store/selectors/userEmail";
import Logo from "../assets/logo.png"
import "../assets/style.css"
// import "../assets/style.css"
function AppBar(){
    const navigate = useNavigate();
    const userEmail = useRecoilValue(userEmailState);
    return <header>
    <div style={{display:"flex", alignItems:"center"}}>
        {/* <Link href="/" underline="none">
        <Typography variant="h5">FFCS Combogen</Typography>
        </Link> */}
        <img src={Logo} width="50px" alt="FFCS ComboGen Logo"/>
        <h1 style={{fontFamily:"Poppins",color:"black",paddingLeft:"1rem", fontSize:"30px"}} onClick={()=>navigate("/")}>FFCS ComboGen</h1>
    </div>
    <div className="nav_links">
        {/* <button type="button" onClick={()=>{
            navigate("/signin")
        }}>Login</button> */}
        <a  onClick={()=>{
            navigate("/signin")
        }}>Login</a>
        <button type="button" onClick={()=>{
            navigate("/signup")
        }}>Sign Up</button>
        {userEmail && <button type="button" onClick={()=>{
            localStorage.setItem("token", "");
            window.location="/"
        }}>Log Out</button>}
        {userEmail && < button type="button" className="favBtn">Favourites</button>}
    </div>
</header>
}
export default AppBar;