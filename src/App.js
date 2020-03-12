import React from 'react';
import './App.css';
import Profile1 from './Profile1';
import Resume1 from './Resume1';
import {BrowserRouter,Route,Link} from 'react-router-dom';
let App=()=>{
  return(
    <BrowserRouter>
    <Route exact path="/" component={Profile1}/>
    <Route exact path="/resume1" component={Resume1} />
    </BrowserRouter>
  )
}
export default App;