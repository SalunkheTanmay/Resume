import { useState } from "react";

function Education({Education,deleteedu,updateedu}){
    const[index,setIndex]=useState([])
    return (
        <div className="education-section">
        <h2>Education</h2>
        <br></br>
        {
        Education.map((r,index)=>{
          return <div className="render-listt">
           <li>{r.name}</li>
           <div className='skillss-btn'>
          <button className='skill-del'onClick={()=>deleteedu(r.id)}>D</button>
          <button className='skill-upd' onClick={()=>updateedu(index)}>U</button>
          </div>
          </div>
        })
       
}
        <br></br>
        <hr></hr>
        </div>
    )
}
export default Education;