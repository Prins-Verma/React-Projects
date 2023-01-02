// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

// let name = "Prince";
function App() {
  const [mode, setMode] = useState('light'); //mode checking 
  const toggleMode = () => {
      if (mode=== 'light') {
        setMode('dark')
      }
      else {
        setMode('light')
      }
  }
  return (
          <>
             {/* Giving a name of Navbar which is TextUtils through props */}
              <Navbar title = "WordCounter" mode= {mode} toggleMode= {toggleMode} /> 
              <div className= "container my - 3"  >
                <TextForm  heading = "Enter your text below to analyze" />
              </div>   
              {/* <About/> */}



            {/* <Navbar/> */}
  </>
  );
}

export default App;
