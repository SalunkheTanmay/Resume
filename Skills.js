import { useState } from 'react';
import './Skills.css';
function Skills({Skills, deleteskill,updateskill}){
    const indexx=Skills.length;
    console.log(Skills)
    const[index,setIndex]=useState([])
    
    return (
        <div className="skills-section">
        <h2>Skills</h2>
        <br></br>
        {
         Skills.map((r, index)=>{
          return <div className="render-listt"> 
          <li >{r.name}</li>
          <div className='skillss-btn'>
          <button className='skill-del'onClick={()=>deleteskill(r.id)}>D</button>
          <button className='skill-upd' onClick={()=>updateskill(index)}>U</button>
          </div>
          </div>
         })   
}
        <br></br>
        <hr></hr>
        </div>
        
    )
}
export default Skills;