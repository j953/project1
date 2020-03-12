import React from 'react';

let Profile=(p)=>{
    const {name,role}=p
    return(
        <h1> {p.name} is working as {p.role} </h1>
    )
}


export default Profile;