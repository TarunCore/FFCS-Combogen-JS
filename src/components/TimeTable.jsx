import "../assets/table.css"
function TimeTable(){
    return(
        <div id="belowTable" style={{paddingBottom: "30px", width:"100%"}}>
        
                        <table id="timeTableStyle" className="velloreTable" style={{border: "2px solid #3c8dbc", textAlign: "center", fontSize: "12px", marginBottom: "20px",width:"100%", borderCollapse: "collapse", marginTop: "20px"}}>
                                            
                            <tbody><tr>	
                                <td rowSpan="2" bgcolor="#e2e2e2" className="typeOfClassBoxes">THEORY</td>
                                
                                <td bgcolor="#e2e2e2" className="typeOfClassBoxes">Start</td>
                
                                    <td className="labB">08:00</td>                   
                                    <td className="labB">09:00</td>                   
                                    <td className="labB">10:00</td>                   
                                    <td className="labB">11:00</td>                   
                                    <td className="labB">12:00</td>                        
                                    <td className="labB">-</td>
                                    <td className="labB">Lunch</td>  
                                    <td className="labB">14:00</td>                    
                                    <td className="labB">15:00</td>                    
                                    <td className="labB">16:00</td>                    
                                    <td className="labB">17:00</td>                    
                                    <td className="labB">18:00</td>                    
                                    <td className="labB">18:51</td>            
                                    <td className="labB">19:01</td>
                         
                            </tr>
                            
                            <tr>
                                <td bgcolor="#e2e2e2" className="typeOfClassBoxes">End</td>
                                                                                    
                                    <td className="labB">08:50</td>
                                    <td className="labB">09:50</td>
                                    <td className="labB">10:50</td>
                                    <td className="labB">11:50</td>
                                    <td className="labB">12:50</td>                        
                                    <td className="labB">-</td>                    
                                    <td className="labB">Lunch</td>       
                                    <td className="labB">14:50</td>
                                    <td className="labB">15:50</td>
                                    <td className="labB">16:50</td>
                                    <td className="labB">17:50</td>
                                    <td className="labB">18:50</td>
                                    <td className="labB">19:00</td>
                                    <td className="labB">19:50</td>
                                        
                    
                            </tr>
                            
                                
                            <tr>	
                                <td rowSpan="2" bgcolor="#e2e2e2" className="typeOfClassBoxes">LAB</td>
                                
                                <td bgcolor="#e2e2e2" className="typeOfClassBoxes">Start</td>
                    
                                    <td className="theoV">08:00</td>  
                                    <td className="theoV">08:51</td>                   
                                    <td className="theoV">09:51</td>                    
                                    <td className="theoV">10:41</td>                    
                                    <td className="theoV">11:40</td>                    
                                    <td className="theoV">12:31</td>                   
                                    <td className="theoV">Lunch</td>                  
                                    <td className="theoV">14:00</td>                 
                                    <td className="theoV">14:51</td>                  
                                    <td className="theoV">15:51</td>                 
                                    <td className="theoV">16:41</td>                
                                    <td className="theoV">17:40</td>         
                                    <td className="theoV">18:31</td>
                                        
                           <td className="theoV">-</td>
                 
                            </tr>
                            
                            <tr>
                                <td bgcolor="#e2e2e2" className="typeOfClassBoxes">End</td>
                                    <td className="theoV">08:50</td>
                                    <td className="theoV">09:40</td>
                                    <td className="theoV">10:40</td>
                                    <td className="theoV">11:30</td>
                                    <td className="theoV">12:30</td>
                                    <td className="theoV">13:20</td>
                                    <td className="theoV">Lunch</td>
                                    <td className="theoV">14:50</td>
                                    <td className="theoV">15:40</td>
                                    <td className="theoV">16:40</td>
                                    <td className="theoV">17:30</td>
                                    <td className="theoV">18:30</td>
                                    <td className="theoV">19:20</td>       
                                    <td className="theoV">-</td>
                            </tr>
                
                                    
                                <tr style={{backgroundColor: "#FFFFCC"}}>
                                
                                    <td rowSpan="2" bgcolor="#e2e2e2" className="dayBoxes">MON</td>
                                    <td bgcolor="#e2e2e2" className="dayBoxes">THEORY</td>
                                                        
                                            <td className="slotBoxes" id="A1">A1</td>
                                            <td className="slotBoxes" id="F1">F1</td> 
                                            <td className="slotBoxes" id="D1">D1</td>    
                                            <td className="slotBoxes" id="TB1">TB1</td>
                                            <td className="slotBoxes" id="TG1">TG1</td>
                    
                                        <td className="slotBoxes">-</td>
                             
                                        <td bgcolor="#e2e2e2" className="slotBoxes">Lunch</td>
                                            <td className="slotBoxes" id="A2">A2</td>                      
                                            <td id="F2" className="slotBoxes">F2</td>                                        
                                            <td className="slotBoxes" id="D2">D2</td>                                                                                    
                                            <td  id="TB2" className="slotBoxes">TB2</td>                                
                                            <td  id="TG2"className="slotBoxes">TG2</td>          
                                            <td className="slotBoxes">-</td>
                                            <td className="slotBoxes" id="V3">V3</td>
                   
                                </tr>
                            
                                <tr style={{backgroundColor: "#FFFFCC"}}>
                                
                                    
                                    <td bgcolor="#e2e2e2" className="dayBoxes">LAB</td>                                                                      
                                            <td id="L1" className="slotBoxes">L1</td>                                                     
                                            <td id="L2" className="slotBoxes">L2</td>
                                            <td id="L3" className="slotBoxes">L3</td>                                                             
                                            <td id="L4" className="slotBoxes">L4</td>                                    
                                            <td id="L5" className="slotBoxes">L5</td>
                                            <td id="L6" className="slotBoxes">L6</td>
                                                
                                        <td bgcolor="#e2e2e2" className="slotBoxes">Lunch</td>                                
                                            <td id="L31" className="slotBoxes">L31</td>                                
                                            <td id="L32" className="slotBoxes">L32</td>                                                   
                                            <td id="L33" className="slotBoxes">L33</td>                                                        
                                            <td id="L34" className="slotBoxes">L34</td>             
                                            <td id="L35" className="slotBoxes">L35</td> 
                                            <td id="L36" className="slotBoxes">L36</td>  
                                        <td className="slotBoxes">-</td>
                                        
                                    
                                    
                                </tr>
                                
                                <tr style={{backgroundColor: "#FFFFCC"}}>
                                
                                    <td rowSpan="2" bgcolor="#e2e2e2" className="dayBoxes">TUE</td>
                                    <td bgcolor="#e2e2e2" className="dayBoxes">THEORY</td>               
                                            <td id="B1" className="slotBoxes">B1</td>                              
                                            <td id="G1" className="slotBoxes">G1</td>                            
                                            <td id="E1" className="slotBoxes">E1</td>                           
                                            <td id="TC1" className="slotBoxes">TC1</td>        
                                            <td id="TAA1" className="slotBoxes">TAA1</td>
                                        
                                        <td className="slotBoxes">-</td>
                                        
                
                                        <td bgcolor="#e2e2e2" className="slotBoxes">Lunch</td>
                                        
                                            <td id="B2" className="slotBoxes">B2</td>                
                                            <td id="G2" className="slotBoxes">G2</td>                                     
                                            <td id="E2" className="slotBoxes">E2</td>
                                            <td id="TC2" className="slotBoxes">TC2</td>     
                                            <td id="TAA2" className="slotBoxes">TAA2</td>
                                            <td className="slotBoxes">-</td>
                                            <td  id="V4 K4" className="slotBoxes">V4</td>
                
                                </tr>
                                
                
                                <tr style={{backgroundColor: "#FFFFCC"}}>                                    
                                    <td bgcolor="#e2e2e2" className="dayBoxes">LAB</td>                                                                 
                                            <td  id="L7"  className="slotBoxes">L7</td>                                                 
                                            <td id="L8"  className="slotBoxes">L8</td>                                                                
                                            <td id="L9"  className="slotBoxes">L9</td>                                                                             
                                            <td id="L10"  className="slotBoxes">L10</td>                                                                                    
                                            <td id="L11"  className="slotBoxes">L11</td>                                            
                                            <td id="L12"  className="slotBoxes">L12</td>                                                        
                                        <td bgcolor="#e2e2e2" className="slotBoxes">Lunch</td>                    
                                            <td id="L37"  className="slotBoxes">L37</td>                                        
                                            <td id="L38"  className="slotBoxes">L38</td>           
                                            <td id="L39"  className="slotBoxes">L39</td>
                                            <td id="L40"  className="slotBoxes">L40</td>
                                            <td id="L41"  className="slotBoxes">L41</td> 
                                            <td id="L42"  className="slotBoxes">L42</td>
                                        <td className="slotBoxes">-</td>                
                                </tr>
                
                                <tr style={{backgroundColor: "#FFFFCC"}}>
                                
                                    <td rowSpan="2" bgcolor="#e2e2e2" className="dayBoxes">WED</td>
                                    <td bgcolor="#e2e2e2" className="dayBoxes">THEORY</td>
                                       
                                            <td  id="C1" className="slotBoxes">C1</td>         
                                            <td  id="A1"  className="slotBoxes">A1</td>            
                                            <td  id="F1"  className="slotBoxes">F1</td>              
                                            <td  id="V1"  className="slotBoxes">V1</td>
                                            <td  id="V2"  className="slotBoxes">V2</td>
                        
                                        <td className="slotBoxes">-</td>
                                        
                
                                        <td bgcolor="#e2e2e2" className="slotBoxes">Lunch</td>         
                                            <td  id="C2"  className="slotBoxes">C2</td>                            
                                            <td  id="A2"  className="slotBoxes">A2</td>                                                     
                                            <td  id="F2"className="slotBoxes">F2</td>                                                    
                                            <td  id="TD2"className="slotBoxes">TD2</td>         
                                            <td  id="TBB2"  className="slotBoxes">TBB2</td>                                 
                                            <td className="slotBoxes">-</td>             
                                            <td  id="V5"  className="slotBoxes">V5</td>                                   
                                </tr>
                       
                                <tr style={{backgroundColor: "#FFFFCC"}}>
                
                                    <td bgcolor="#e2e2e2" className="dayBoxes">LAB</td>
                
                                            <td id="L13" className="slotBoxes">L13</td>       
                                            <td id="L14"  className="slotBoxes">L14</td>        
                                            <td id="L15"  className="slotBoxes">L15</td>     
                                            <td id="L16"  className="slotBoxes">L16</td>          
                                            <td id="L17"  className="slotBoxes">L17</td>
                                            <td id="L18"  className="slotBoxes">L18</td>
                
                                        <td bgcolor="#e2e2e2" className="slotBoxes">Lunch</td>
                                            <td id="L43" className="slotBoxes">L43</td>         
                                            <td id="L44" className="slotBoxes">L44</td>   
                                            <td id="L45"  className="slotBoxes">L45</td>                                     
                                            <td id="L46"  className="slotBoxes">L46</td>
                                            <td id="L47"  className="slotBoxes">L47</td>
                                            <td id="L48"  className="slotBoxes">L48</td>
                                        <td className="slotBoxes">-</td>
                                </tr>
                
                                <tr style={{backgroundColor: "#FFFFCC"}}>
                                
                                    <td rowSpan="2" bgcolor="#e2e2e2" className="dayBoxes">THU</td>
                                    <td bgcolor="#e2e2e2" className="dayBoxes">THEORY</td>
                                            <td  id="D1" className="slotBoxes">D1</td>
                                            <td  id="B1" className="slotBoxes">B1</td>
                                            <td  id="G1" className="slotBoxes">G1</td>
                                            <td  id="TE1" className="slotBoxes">TE1</td>
                                            <td  id="TCC1" className="slotBoxes">TCC1</td>
                                        <td className="slotBoxes">-</td>
                
                                        <td bgcolor="#e2e2e2" className="slotBoxes">Lunch</td>     
                                            <td id="D2" className="slotBoxes">D2</td>           
                                            <td  id="B2" className="slotBoxes">B2</td>                                                    
                                            <td  id="G2"  className="slotBoxes">G2</td>                                                      
                                            <td  id="TE2"  className="slotBoxes">TE2</td>                                                           
                                            <td  id="TCC2" className="slotBoxes">TCC2</td>                                           
                                            <td className="slotBoxes">-</td>   
                                            <td id="V6"  className="slotBoxes">V6</td>
                
                                </tr>
                         
                                <tr style={{backgroundColor: "#FFFFCC"}}>
                                    <td bgcolor="#e2e2e2" className="dayBoxes">LAB</td>
                                            <td  id="L19"  className="slotBoxes">L19</td>
                                            <td  id="L20" className="slotBoxes">L20</td>
                                            <td id="L21"  className="slotBoxes">L21</td>
                                            <td id="L22"  className="slotBoxes">L22</td>
                                            <td id="L23"  className="slotBoxes">L23</td>
                                            <td  id="L24" className="slotBoxes">L24</td>
                
                                        <td bgcolor="#e2e2e2" className="slotBoxes">Lunch</td>     
                                            <td id="L49"  className="slotBoxes">L49</td>    
                                            <td id="L50"  className="slotBoxes">L50</td>                         
                                            <td id="L51"  className="slotBoxes">L51</td>                    
                                            <td  id="L52" className="slotBoxes">L52</td>                     
                                            <td  id="L53" className="slotBoxes">L53</td>                                
                                            <td id="L54" className="slotBoxes">L54</td>
                                        <td className="slotBoxes">-</td>
                              
                                </tr>
                     
                                <tr style={{backgroundColor: "#FFFFCC"}}>
                                
                                    <td rowSpan="2" bgcolor="#e2e2e2" className="dayBoxes">FRI</td>
                                    <td bgcolor="#e2e2e2" className="dayBoxes">THEORY</td>                                 
                                            <td id="E1" className="slotBoxes">E1</td>                 
                                            <td id="C1" className="slotBoxes">C1</td>                                              
                                            <td id="TA1" className="slotBoxes">TA1</td>            
                                            <td id="TF1" className="slotBoxes">TF1</td>                                    
                                            <td id="TD1" className="slotBoxes">TD1</td>                                                                                
                                        <td className="slotBoxes">-</td>
                
                                        <td bgcolor="#e2e2e2" className="slotBoxes">Lunch</td>                                                                         
                                            <td  id="E2" className="slotBoxes">E2</td>     
                                            <td id="C2" className="slotBoxes">C2</td>
                                            <td id="TA2" className="slotBoxes">TA2</td>
                                            <td id="TF2"  className="slotBoxes">TF2</td>                     
                                            <td id="TDD2" className="slotBoxes">TDD2</td>
                                            <td className="slotBoxes">-</td>
                                            <td id="V7" className="slotBoxes">V7</td>
                                </tr>
                                
                      
                                <tr style={{backgroundColor: "#FFFFCC"}}>
                
                                    <td bgcolor="#e2e2e2" className="dayBoxes">LAB</td> 
                                            <td id="L25" className="slotBoxes">L25</td>         
                                            <td id="L26" className="slotBoxes">L26</td>                
                                            <td id="L27" className="slotBoxes">L27</td>        
                                            <td id="L28" className="slotBoxes">L28</td>
                                            <td id="L29" className="slotBoxes">L29</td>  
                                            <td id="L30" className="slotBoxes">L30</td>  
                                        <td bgcolor="#e2e2e2" className="slotBoxes">Lunch</td>   
                                            <td id="L55" className="slotBoxes">L55</td>        
                                            <td id="L56" className="slotBoxes">L56</td>       
                                            <td id="L57" className="slotBoxes">L57</td>
                                            <td id="L58" className="slotBoxes">L58</td>     
                                            <td id="L59" className="slotBoxes">L59</td>   
                                            <td id="L60" className="slotBoxes">L60</td>    
                                        <td className="slotBoxes">-</td>
                                </tr>
                  
                        </tbody></table>   
        </div>
    )
}
export default TimeTable;