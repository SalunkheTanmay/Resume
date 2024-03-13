import './App.css';
import Print from './Resume/Print';
import Education from './Resume/Education';
import Experience from './Resume/Experience';
import ResumeEditor from './Resume/ResumeEditor';
import Skills from './Resume/Skills';
import { useReducer, useState } from 'react';
import Educationadd from './Resume/Educationadd';

function App() {
  const[updateddata, setUpdateddata]=useState(null)
  function reducer(edu,action){
    switch(action.type){
      case 'ADD':
        return [...edu,{
          name:action.payload,
          id:edu.length
        }]

      case 'DELETE':
        return edu.filter(r=>r.id!==action.payload) 
       
      case 'UPDATE':
        console.log(action.payload)
        console.log(action.id)
        const newedu=[...edu];
        //newskills.splice(gettingindex,1,name)
         newedu.forEach((r)=>{
            if(r.id===action.id){
             r.name=action.payload
            }
          })
          setUpdateddata(null)
         return newedu
    }
 }
  const[skills, setSkills]=useState([]);
 //const[education, setEducation]=useState([]);
  const[edu,dispatch]=useReducer(reducer, [])
  const[experience, setExperience]=useState([])
  

  // let resume=[{
  //   skills:["React", "Node.js" , "CSS"],
  //   Education: ["B.E"],
  //   Experience: [{ year:2012, company:'Accenture', role:'Developer' }]
  // }]

  function add(name,id){
    console.log(name,id)
    setSkills([...skills,{
      name:name,
      id:skills.length
    }  ]);

  }

  function deleteskill(id){
    console.log(id)
    setSkills(skills.filter(r=>r.id!==id))
  //  const finalarr=skills.filter(r=>r.id!=id)
  //  setSkills(finalarr)
  }

  function deleteedu(id){
  dispatch({type:'DELETE',payload:id})
  }
  
  function updateskill(id){
    setUpdateddata(skills.find(r=>r.id===id))
  }

  function updateedu(id){
    setUpdateddata(edu.find(r=>r.id===id))
  }

  function addeducation(name,id){
   dispatch({type:'ADD', payload:name})
    //  setEducation([...education,{
    //   name:name,
    //   id:id++
    //  }])
  }

  function addexperience(name,id){
    setExperience([...experience,{
         name:name,
         id:id++
    }])


  }

  function up(name,id){
    
   const gettingindex=updateddata.id;
    //console.log(skills)
    const newskills=[...skills];
    //newskills.splice(gettingindex,1,name)
     newskills.forEach((r)=>{
        if(r.id===gettingindex){
         r.name=name
        }
      })
      setSkills(newskills)
  }

  function updateeducation(name,id){
    const gettingindex=updateddata.id;
    dispatch({type:'UPDATE', payload:name,id:gettingindex})
  }
   
  
   
  
  return(
    <div>
     <h1>Resume</h1>
    <hr></hr>
    <br></br>
    {/* {skills.map(skill=><Skills
    key={skill.id} 
    Skills={skill.name}></Skills>)} */}
    <Skills  updateskill={updateskill} deleteskill={deleteskill}  Skills={skills} ></Skills>
   
    <Education 
        Education={edu}  deleteedu={deleteedu} updateedu={updateedu} ></Education>
     
      <Experience Experience={experience}></Experience>
         

      <div>
        <Print></Print>
      </div>
      
      <ResumeEditor updatedskill={up}passing={updateddata}addskills={add}  addexperience={addexperience}></ResumeEditor>
       <Educationadd passingedu={updateddata} updatededu={updateeducation} addeducation={addeducation} passing={updateddata} ></Educationadd> 
   </div>
  
  );
}

export default App;
