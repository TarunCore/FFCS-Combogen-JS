import {useRecoilState} from "recoil"
import TimeTable from "./TimeTable";
import InputCard from "./InputCard";
import {CircularProgress} from "@mui/material"
import { savedCourseState } from "../store/atoms/savedCourses";
import { useEffect } from "react";
import axios from "axios";
import { userState } from "../store/atoms/user";
function Home() {
    const [savedCourses, setSavedCourses] = useRecoilState(savedCourseState);
    const [user, setUser] = useRecoilState(userState);
    useEffect(()=>{
        async function init(){
          try{
            const response = await axios.get("http://localhost:3000/me",{
              headers:{
                  "Authorization":"Bearer "+localStorage.getItem("token"),
                  "Content-type":"application/json"
                }
            });
            if(response.data.userEmail){
                setUser({
                    isLoading: false,
                    userEmail: response.data.userEmail
                })            
                setSavedCourses(response.data.savedCourseData)
            }else{
                setUser({
                    isLoading: false,
                    userEmail: null
                })
            }
          }catch(e){
            setUser({
                isLoading: false,
                userEmail: null
            })
          }
      }
      init();
    },[])
    if(user.isLoading){
        return <>
            <CircularProgress color="primary" />
        </>
    }
    return <div>
        {JSON.stringify(savedCourses)}
        <div style={{width:"100%"}}>
            {/* <div  style={{display:"flex", justifyContent:"center", boxSizing:"border-box"}}>
                
            </div> */}
            <InputCard></InputCard>
        <TimeTable></TimeTable>
        </div>
            
    </div>  
}
export default Home;