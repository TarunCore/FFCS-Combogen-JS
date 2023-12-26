import {Link, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userEmailState } from "../store/selectors/userEmail";
// import "../assets/style.css"
function AppBar(){
    const navigate = useNavigate();
    const userEmail = useRecoilValue(userEmailState);
    // if(!){
    //     return <div style={{display:"flex", justifyContent:"space-between"}}>
    //     <div>
    //         <Link href="/" underline="none">
    //         <Typography variant="h5">FFCS Combogen</Typography>
    //         </Link>
    //     </div>
    //     <div>
    //         <button type="button" onClick={()=>{
    //             navigate("/signin")
    //         }}>Login</button>
            
    //         <button type="button" className="favBtn">Favourites</button>
    //     </div>
    // </div>
    // }
    return <div style={{display:"flex", justifyContent:"space-between"}}>
    <div>
        <Link href="/" underline="none">
        <Typography variant="h5">FFCS Combogen</Typography>
        </Link>
    </div>
    <div>
        <button type="button" onClick={()=>{
            navigate("/signin")
        }}>Login</button>
        <button type="button" onClick={()=>{
            navigate("/signup")
        }}>Sign Up</button>
        {userEmail && <button type="button" onClick={()=>{
            localStorage.setItem("token", "");
            window.location="/"
        }}>Log Out</button>}
        {userEmail && < button type="button" className="favBtn">Favourites</button>}
    </div>
</div>
}
export default AppBar;