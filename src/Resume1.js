import React from 'react';
import data from './data.json';
import icon from './jyothi.svg';
let Resume1=(props)=>{
    let info=Object.values(props.location.index.value);
    let person=data.profiles[info]
    console.log(person);
    return(
        <div className="parent">
            <div className="child">
            <img src={icon} alt="profile1" />
            
            <h3>{person.details.name}</h3>
            <a href={"mailto:"+person.details.email} className="link"> {person.details.email}</a>
            <h3>{person.details.mobile}</h3>
            
            </div>
            <div className="child2">
            <h2> Educational Qualifications:</h2><hr></hr>{
            person.education.map((j,k)=>(
                <div key={k}>
                <h4>{j.degree}</h4>
                <ul>
                    <li> {j.percentage+"%"}</li>
                    <li>{j.institute}</li>
                </ul>
                </div>
            ))}
            
            <h2> Skills: </h2> <hr></hr>
            {person.skills.map((x,y)=>(
               <div key={y}>
                   <h4> {x.type} </h4>
                   {x.values.map((k,l)=>(
                       <div key={l} style={{display:"inline"}}>
                        <span className="skill"> {k}</span>
                        </div>
                    ))}
                </div>))}
         </div>
         </div>
    )
}
export default Resume1;