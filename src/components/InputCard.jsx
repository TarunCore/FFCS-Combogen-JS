import {Card, Grid, Typography, Autocomplete, TextField, Chip} from "@mui/material"
import { useEffect, useState, createContext,useContext } from "react";
import "../assets/style.css"
import { savedCourseState } from "../store/atoms/savedCourses";
import {useRecoilState} from "recoil"
const courseContext = createContext();
function InputCard(){
    const [courses, setCourses] = useState([]);
    const [savedCourses, setSavedCourses] = useRecoilState(savedCourseState);
    const handleGenerate = async() =>{
        const response = await axios.post("http://localhost:3000/generate",{
                "slotTime":"MT",
                "generateData": [
                    [
                        {"faculty":"C1T1","facultySlot":["A1","TA1"]}
                    ],[
                        {"faculty":"C2T1","facultySlot":["A1","TA1"]},
                        {"faculty":"C2T2","facultySlot":["B1","TB1"]},
                        {"faculty":"C2T3","facultySlot":["C1","TC1"]}
                    ]
                    ]
            },{
                headers:{
                    "Content-type":"application/json"
                }
            });
            if(response.data.result){
                
            }
    }
    useEffect(()=>{
        for (let i = 0; i < 5; i++) {
            setCourses(course=>[...course, []])
            
        }
    },[])
    return <div style={{width: "800px", borderRadius:"10px" }}>
                {/* {JSON.stringify(courses)} */}
        <Card variant="outlined" sx={{minWidth:"600px",padding:2, backgroundColor:"rgb(233, 233, 233)", borderRadius:"10px", border:"1px solid grey"}}>
            <courseContext.Provider value={{courses: courses, setCourses: setCourses}}>
            <div>
                <Typography variant="h6">SELECT COURSES</Typography>
                
                {[...Array(10).keys()].map((index)=>{
                    return <InputBox id={index} key={index}></InputBox>
                })}
            </div>
            </courseContext.Provider>
            <button type="button" className="btnGenerate" onClick={handleGenerate}>Generate</button>
        </Card>
    </div>
}

function InputBox({id}){
    const {courses, setCourses} = useContext(courseContext);
    const [teacherName, setTeacherName] = useState("")
    const [slotData, setSlotData] = useState("")
    
    const handleClick = ()=>{
        let oldCourses=[...courses];
        oldCourses[id].push([teacherName, slotData]);
        setCourses(oldCourses)
    }

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
                {courses.length>0 && courses[id].length>0 && courses[id].map((data)=>{
                    return <tr key={data[0]+data[1]}>
                        <td>{data[0]}</td> 
                        <td>{JSON.stringify(data[1])}</td>
                        <td>
                            <button type="button">Delete</button>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
    <div className="inp" style={{display:"flex"}}>
        <TextField id="outlined-basic" label="Faculty Name" variant="outlined" sx={{margin:1, backgroundColor:"white"}} onChange={(e)=>{setTeacherName(e.target.value)}} size="normal" />
        {/* <input className="slotTXT" type="text" placeholder="Slots including lab" id="slots"  style={{ width: '45%' }} onChange={(e)=>setSlotData(e.target.value)}/> */}
        <Autocomplete
        multiple
        id="tags-outlined"
        options={slotArray}
        getOptionLabel={(option) => option}
        fullWidth
        sx={{margin:1, backgroundColor:"white"}}
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
        <button type="button" className="btn1" id="btnSlot6" style={{ width: '20%' }} onClick={handleClick}>Add</button>
    </div>
</div>

    </div>
}

const slotArray=["A1","B1","B1+TB1","C1","C1+TC1","D1","TD1","Vikram","Interstellar","Breaking Bad",""];

export default InputCard;