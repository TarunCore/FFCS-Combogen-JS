import {Card, Grid, Typography, Autocomplete, TextField, Chip} from "@mui/material"
import { useEffect, useState, createContext,useContext, useRef } from "react";
import "../assets/style.css"
import { savedCourseState } from "../store/atoms/savedCourses";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil"
import { userState } from "../store/atoms/user";
import axios from "axios"
import { generateState } from "../store/atoms/generate";
import { generateFullState } from "../store/atoms/generateFull";
import { favouriteState } from "../store/atoms/favourites";
const courseContext = createContext();
function InputCard(){
    const [courses, setCourses] = useState([]);
    const ref=useRef(true);
    const [savedCourses, setSavedCourses] = useRecoilState(savedCourseState);
    const user = useRecoilValue(userState);
    const setGenerateData = useSetRecoilState(generateState);
    const setGenerateFull = useSetRecoilState(generateFullState)
    const setFavourites = useSetRecoilState(favouriteState);
    const handleSave = async()=>{
        try{
            const responce = await axios.post("http://localhost:3000/me/save",{
                newSavedData: [...courses]
            },{
                headers:{
                    "Authorization":"token "+localStorage.getItem("token"),
                    "Content-Type":"application/json"
                }
            })
            if(responce.data.message){
                console.log(responce.data.message)
            }
        }catch(e){
            console.log(e);
        }
    }
    const handleGenerate = async() =>{
        const response = await axios.post("http://localhost:3000/generate",{
                "slotTime":"MT",
                "generateData": [...courses]
            },{
                headers:{
                    "Content-type":"application/json"
                }
            });
            if(response.data.result){
                const all=response.data.result;
                let l=[];
                for(var i=0;i<all.length;i++){
                    let current_table=[]
                    for(var j=0;j<all[i].length;j++){
                        current_table=current_table.concat(all[i][j].facultySlot);
                    }
                    l.push(current_table)
                }
                setGenerateFull({all:all,courseNames:response.data.courseNames, slotsToPaint: l});
                setGenerateData(l);
                // setFavourites(Array(l.length).fill({liked: false, data: null}))
                let tmp=[],tmp2=[];
                for(var i=0;i<l.length;i++){
                    tmp.push(false)
                    tmp2.push("")
                }
                setFavourites({
                    indOfFav: tmp, 
                    liked: [],
                    ids: tmp2
                })
            }
    }
    useEffect(()=>{
        // ref was there
        setCourses([]);
        for (let i = 0; i < 10; i++) {
            if(savedCourses.length==10){
                setCourses(course=>[...course, [...savedCourses[i]]])
            }else{
                setCourses(course=>[...course, []])
            }
        }
        
    },[user])
    return <div className="container" style={{margin:"0 auto"}}>
        {/* style={{maxWidth: "900px", borderRadius:"10px",width:"100%" }} */}
                {/* {JSON.stringify(courses)} */}
                
        {/* <Card variant="outlined" sx={{padding:"25px 27px", backgroundColor:"rgb(233, 233, 233)", borderRadius:"10px", border:"1px solid grey", fontFamily:"Poppins"}}> */}
            <courseContext.Provider value={{courses: courses, setCourses: setCourses, savedCourses: savedCourses, handleSave:handleSave}}>
            {/* <div> */}
                {/* <Typography  style={{fontFamily:"Poppins",fontWeight:"800", fontSize:"25px"}}>SELECT COURSES</Typography> */}
                <div style={{fontFamily:"Poppins",fontWeight:"600", fontSize:"25px"}}s>SELECT COURSES</div>
                <button type="button" className="saveBtn" onClick={handleSave}>Save</button>
                {[...Array(10).keys()].map((index)=>{
                    return <InputBox id={index} key={index}></InputBox>
                })}
            {/* </div> */}
            </courseContext.Provider>
            <button type="button" className="btnGenerate" onClick={handleGenerate}>Generate</button>
        {/* </Card> */}
    </div>
}

function InputBox({id}){
    const {courses, setCourses, savedCourses} = useContext(courseContext);
    const [teacherName, setTeacherName] = useState("")
    const [slotData, setSlotData] = useState("")
    
    const handleClick = ()=>{
        let oldCourses=[...courses];
        const refractorArr = slotData.flatMap((e) => e.split("+"));
        oldCourses[id].push({faculty:teacherName, facultySlot:refractorArr});
        setCourses(oldCourses)
    }
    const handleDelete = (faculty, facultySlot) => {
        // Filter out the item to be deleted from the courses array
        const updatedCourses = courses[id].filter(item => !(item.faculty === faculty && item.facultySlot === facultySlot));
        // Update the state with the new array
        setCourses(prevCourses => {
            const newCourses = [...prevCourses];
            newCourses[id] = updatedCourses;
            return newCourses;
        });
        
    };
    return <div style={{marginTop:"10px"}}>
        {/* {JSON.stringify(slotData)} */}
        <div className="s1" style={{ marginTop: "8px" }}>
    <div id="cname6Div" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span className="nameofcourses" style={{ fontSize: '20px' }} id="cname6">Course {id+1}</span>
        <button type="button" id="editname6" className="addBtn1">
            <span className="btnTxt">Edit</span>
        </button>
    </div>
    <div style={{ marginTop: '5px' }}>
        <table className="courseTable" style={{width: "100%"}}>
            <thead>
                <tr>
                    <th style={{ width: '35%' }}>Faculty</th>
                    <th style={{ width: '45%' }}>Slot</th>
                    <th style={{ width: '20%' }}>Action</th>
                </tr>
            </thead>
            <tbody>
                {/* {savedCourses.length>=id+1 && savedCourses[id].length>0 && savedCourses[id].map(
                    (data)=>{
                        return <tr key={data.faculty+data.facultySlot}>
                            <td>{data.faculty}</td> 
                            <td>{JSON.stringify(data.facultySlot)}</td>
                            <td>
                                <button type="button">Delete</button>
                            </td>
                        </tr>
                })} */}
                {courses.length>0 && courses[id].length>0 && courses[id].map((data)=>{
                    return <tr key={data.faculty+data.facultySlot}>
                        <td>{data.faculty}</td> 
                        <td>{JSON.stringify(data.facultySlot)}</td>
                        <td>
                            <button type="button" onClick={() => handleDelete(data.faculty, data.facultySlot)}>Delete</button>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
    <div className="inp" style={{display:"flex"}}>
        <input type="text" placeholder="Faculty name" onChange={(e)=>{setTeacherName(e.target.value)}} style={{ width: '35%' }}/>
        {/* <TextField  label="Faculty Name" variant="outlined" sx={{margin:1, backgroundColor:"white"}} onChange={(e)=>{setTeacherName(e.target.value)}} size="normal" /> */}
        {/* <input className="slotTXT" type="text" placeholder="Slots including lab" id="slots"  style={{ width: '45%' }} onChange={(e)=>setSlotData(e.target.value)}/> */}
        <Autocomplete
        multiple
        // id="tags-outlined"
        options={slotArray}
        getOptionLabel={(option) => option}
        limitTags={2}
        sx={{margin:1, backgroundColor:"white", width:"45%"}}
        size="normal"
        onChange={(event, newValue)=>{
            setSlotData(newValue)
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Slots"
            placeholder="Select Slots"
          />
        )}
      />
        <button type="button" className="btn1"  style={{ width: '20%' }} onClick={handleClick}>Add</button>
    </div>
</div>

    </div>
}

const slotArray=["A1","B1","B1+TB1","C1","C1+TC1","D1","TD1","Vikram","Interstellar","Breaking Bad",""];

export default InputCard;