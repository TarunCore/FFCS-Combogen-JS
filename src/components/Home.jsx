import {useRecoilState} from "recoil"
import TimeTable from "./TimeTable";
import InputCard from "./InputCard";
import { savedCourseState } from "../store/atoms/savedCourses";
import { useEffect } from "react";
import axios from "axios";
function Home() {
    const [savedCourses, setSavedCourses] = useRecoilState(savedCourseState);
    useEffect(()=>{
        async function init(){
            const response = await axios.get("http://localhost:3000/me/saved",{
                headers:{
                    "Authorization":"Bearer "+"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODFiZWRmODY2OGFlNWIwOWYzOWE3OCIsImlhdCI6MTcwMzE1MzEyNCwiZXhwIjoxNzAzMTU2NzI0fQ.E2qmNKMMn_KmNaWy79qC9dhUUucLrtHssRQeZNE_7aw",
                    "Content-type":"application/json"
                }
            });
            if(response.data.savedCourseData){
                setSavedCourses(response.data.savedCourseData)
            }
        }
        init();
    },[])
    return <div>
        {JSON.stringify(savedCourses)}
        <div style={{width:"100%"}}>
            <div  style={{display:"flex", justifyContent:"center"}}>
                <InputCard></InputCard>
            </div>
        <TimeTable></TimeTable>
        </div>
            
    </div>  
}
export default Home;