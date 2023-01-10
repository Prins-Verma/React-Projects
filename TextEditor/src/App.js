import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {  
  BrowserRouter as Router,    
  Routes,  
  Route
}   
from 'react-router-dom';  

function App() {
  const [mode, setMode] = useState('light'); //mode checking 
  const [alert, setAlert] = useState(''); //this state is for alert

  // this function is used to show alert
  const showAlert = (message, type) => {
    setAlert({              //creatig objects
      msg: message,
      typ: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      // document.title = 'TextEditor- Dark mode';          //to show 'Dark mode' on title bar
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = 'TextEditor- Light mode';           //to show 'Light mode' on title bar

    }
  }
  return (
    <>
      {/* Giving a name of Navbar which is TextUtils through props */}
  <Router>
  
        <Navbar title="TextEditor
        " mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my - 3"  >

      {/* "exact path" is used to match exact path which we want to render instead "path" ex: /users  and /users/home both are different */} 
            <Routes>                    
                <Route path= "/" element= {<TextForm showAlert={showAlert} heading="Try TextEditor- Word Counter, Character counter, Remove extra spaces"  mode={mode} />}>
                </Route>
            
            {/* mode={mode} will set the mode in About component */}
                <Route path= "/about" element= {<About  mode={mode} />}  >      
                </Route>
            </Routes>      
       </div>

  </Router>

    </>
  );
}

export default App;
