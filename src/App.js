import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from 'react';
import Alert from "./components/Alert";

import {
  BrowserRouter as Router,
  Switch,
  Route
 
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not 
  
  const [alert, setAlert] = useState(null);
const showAlert=(message, type)=>{
      setAlert({
        msg:message,
        type:type  
      })
      setTimeout(() => {
        setAlert(null)
      }, 1500);
}

  const toggleMode=()=>{
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor= "#04044b";
    showAlert("Dark mode has been enabled", "success");
    document.title='TextUtils-dark mode'
    // setInterval(() => {
    //   document.title='TextUtils-dark mode'
    // }, 2000);
    // setInterval(() => {
    //   document.title='Install this now'
    // }, 1500);
  }
  else{
    setMode('light');
    document.body.style.backgroundColor= "white";
    showAlert("Light mode has been enabled", "success");
    document.title='TextUtils-light mode'
  }
  }
  
  return (
<> 
{/* <Navbar title="TextUtils" About="AboutUs" /> */}
{/* <Navbar  /> */}
<Router>

<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className="container my-3">

  <Switch>
    {/* exaxt to match to the exact path */}
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
          </Route>
       </Switch>

</div>
</Router>
 </>
  );
}
export default App;
