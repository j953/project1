import React from 'react';
import data from './data.json';
import icon from './jyothi.svg';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Resume1 from './Resume1';
let Profile1=()=>{
    const profiles=data.profiles;
    return(
        <div className="parent">
            <BrowserRouter>
            <Route exact path="/resume1" component={Resume1}></Route>
            </BrowserRouter>
            {profiles.map((j,k)=>(
                <div className="child" key={k}>
                    <img src={icon} alt="profile1" />
                    <h2>{j.details.name}</h2><hr></hr>
                    <a href={"mailto:"+j.details.email} className="link"> {j.details.email}</a><br></br>
                    <a href={"tel:"+j.details.mobile} className="link">{j.details.mobile}</a><hr></hr>
                    <Link to={{pathname:"/resume1",index:{value:{k}}}} className="btn"> View Profile </Link>
                </div>
            ))}
        </div>
    )
}
export default Profile1;