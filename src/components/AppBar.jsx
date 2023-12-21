import {Typography } from "@mui/material"
// import "../assets/style.css"
function AppBar(){

    return <div style={{display:"flex", justifyContent:"space-between"}}>
        <div>
            <Typography variant="h5">FFCS Combogen</Typography>
        </div>
        <div>
            <button className="favBtn">Favourites</button>
        </div>
    </div>
}
export default AppBar;