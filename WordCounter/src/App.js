import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
        const [mode, setMode] = useState('light'); //mode checking 
        const [alert, setAlert] = useState(null); //this state is for alert

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
                                if (mode=== 'light') {
                                  setMode('dark')
                                  document.body.style.backgroundColor = '#042743';
                                  showAlert("Dark mode has been enabled","Success");
                                }
                                else {
                                  setMode('light')
                                  document.body.style.backgroundColor = 'white';
                                  showAlert("Light mode has been enabled","Success");
                                    
                                }
                           }
        return (
                <>
                  {/* Giving a name of Navbar which is TextUtils through props */}
                    <Navbar title = "WordCounter" mode= {mode} toggleMode= {toggleMode} /> 
                    <Alert alert={alert}/> 
                    <div className= "container my - 3"  >
                      <TextForm  showAlert= {showAlert} heading = "Enter your text below to analyze" mode= {mode}/>
                    </div>   
                                     
        </>
        );
      }

export default App;
