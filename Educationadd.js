import { useEffect, useState } from 'react';
import './ResumeEditor.css';
let skillid=0;
function Educationadd({addeducation,passing,updatededu,passingedu}){
    const[eduname, setEduname]=useState('');

    useEffect(()=>{
        if(passingedu)
       setEduname(passingedu.name)
       },[passingedu])
    function handleedu(e){
        setEduname(e.target.value);
     }

     function handleedusubmit(){
           if(passingedu){
             updatededu(eduname,skillid)
           }else{
           addeducation(eduname,skillid)
           }
           setEduname('')
     }
    return(
        <>
        <div className='Education-section'>
            <h2>Education</h2>
            <div className='input'>
         <input placeholder="Enter your Education" onChange={handleedu}  value={eduname}></input>
         <button className='skill-btn'onClick={handleedusubmit}>{passingedu?'Edit':'Add'}</button>
        </div>
        </div>
        </>
    )
}
export default Educationadd;