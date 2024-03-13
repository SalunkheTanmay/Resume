import { useEffect, useState } from 'react';
import './ResumeEditor.css';
let skillid=0;
function ResumeEditor({addskills,addexperience,passing,updatedskill}){
    const[name, setName]=useState('');
   //console.log(passing)
  useEffect(()=>{
   if(passing)
  setName(passing.name)
  },[passing])

     function handleskills(e){
       setName(e.target.value);
     }

     function handleskillsubmit(){
      if(passing){
         updatedskill(name,skillid)
      }else{
        addskills(name,skillid);
      }
        setName('')
     }



     function handleexp(e){
       setName(e.target.value)
     }

     function handleexpsubmit(){
        addexperience(name,skillid)
        console.log()
     }

    return(
        <>
        
        <div className="skill-section">
        <h2>Skills</h2>
        <div className='input'>
         <input type='text' placeholder="Enter your Skills"  onChange={handleskills} value={name}></input>
         <button className='skill-btn'onClick={handleskillsubmit}>{passing?'Edit' :'Add'}</button>
        </div>
        </div>

    
      

        <div className='Experience-section'>
            <h2>Experience</h2>
            <div className='input'>
         <input placeholder="Enter your Education" onChange={handleexp}></input>
         <button className='skill-btn'onClick={handleexpsubmit}>Add</button>
        </div>
        </div>
        
        </>
    )
}

export default ResumeEditor;