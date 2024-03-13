function Experience ({Experience}){
    //console.log(Experience);
  
    return (
 
            <>
            <h2>Experience</h2>
            <br></br>
         {
          Experience.map(r=>{
               return <li>{r.name}</li>
          })
         }

           <br></br>
            <hr></hr>
            
            </>
    
    )
  
 // return <div className="container">{data}</div>;
}
export default Experience;