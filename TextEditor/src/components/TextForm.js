import React, { useState } from 'react'
// import './styles.css';

export default function TextForm(props) 
    {
        // text = "new text";  wrong way to change the stete
        // setText("new text");  right way to chnage the state
        const [text, setText] = useState('');
       
        
        const handleUppercaseClick = () => 
            {
                console.log("Upper case was clicked");
                // setText("You have clicked on 'Convert to Upper case'")
                let newText = text.toUpperCase();
                setText(newText)
                props.showAlert("Converted to Uppercase!", "success")
            }

        const handleLowercaseClick = () => 
            {
                console.log("Lower case was clicked");
                // setText("You have clicked on 'Convert to Lower case'")
                let newText = text.toLowerCase();
                setText(newText)
                props.showAlert("Converted to Lowercase!", "success")
                
             }

        const handleCopy = () => {
            //let text = document.getElementById("myBox");
            //text.select();
            navigator.clipboard.writeText(text);
            props.showAlert("Text copied to clipboard!", "success")

        }
        
        
        // const ItalicText = () => {
        //     //return <p className="italic-text">{text1}</p>;
        //     return <i>{text}</i>
        //   };

        // const handleItalic = () => 
        //     {
        //         console.log("Italic was clicked");

        //         // setText("You have clicked on 'Convert to Lower case'")
        //         //let newText= 
        //         let newText = text.ItalicText()
        //         setText(newText)
        //         props.showAlert("Converted to Italics!", "success")
                
        //      }

        // const handleBold = () => 
        //     {
        //         console.log("Bold was clicked");
        //         // setText("You have clicked on 'Convert to Lower case'")
        //         let newText = text.bold();
        //         setText(newText)
        //         props.showAlert("Converted to Bold!", "success")
                
        //      }
        // Remove extra spaces
        const handleExtraSpaces = () => {
                // if a paraagraph has one or more than one spaces then it will split(remove) it and then form a array by help of split(/[]+/)
            let newText = text.split(/[ ]+/);
                
            // then paragraph will be join by one space
            setText(newText.join(" ")) 
            props.showAlert("Extra spaces removed!", "success")
        }

        const clearText = () =>
            {
                console.log("Clear text area was clicked");
                setText("")
                props.showAlert("Text area cleared!", "success")
            }

        const handleOnChange = (event) => 
            {
                console.log("On change ");
                setText(event.target.value);
                
            }


        return (
                <>
                <div className="container" style= {{color: props.mode === 'dark' ? 'white': '#042743'}}>
                    <h2 className= 'mb-2'> {props.heading} </h2>
                    <div className="mb-3">
                        {/* <label htmlFor="myBox" className="form-label"> Text area </label> */}
                        <textarea className="form-control" value={text} onChange={handleOnChange} style= 
                            {{backgroundColor: props.mode === 'dark' ? '#13466e': 'white', color: props.mode === 'dark' ? 'white': '#042743'}} id="myBox" rows="6"  placeholder='Please enter something to activate Buttons'></textarea>
                    </div>

                    <button disabled={text.length === 0} className="btn btn-primary m-2" onClick={handleUppercaseClick}> Convert to Upper case </button>
                    <button disabled={text.length === 0} className="btn btn-primary m-2" onClick={handleLowercaseClick}> Convert to Lower case </button>
                    <button disabled={text.length === 0} className="btn btn-primary m-2" onClick={handleCopy}> Copy text </button>
                    <button disabled={text.length === 0} className="btn btn-primary m-2" onClick={handleExtraSpaces}> Remove Extra Spaces </button>
                    {/* <button disabled={text.length === 0} className="btn btn-primary m-2" onClick={handleItalic}> Make Italic </button>
                    <button disabled={text.length === 0} className="btn btn-primary m-2" onClick={handleBold}> Make Bold </button> */}

                    <button disabled={text.length === 0} className="btn btn-primary m-2" onClick={clearText}> Clear text area </button>

                </div>
                <div className="container my-3" style= {{color: props.mode === 'dark' ? 'white': '#042743'}}>
                   

        {/* if (text.length ===0)
            <strong>Note: </strong> Please enter text to activate Buttons. */}
    
    


                    <h2> Your text summary </h2>
                    {/* (/\s+/) is a regular expression used with split() for calculating words as per "spaces and new line" */}
                    <p> <i> {text.split(/\s+/).filter((element) => {return element.length !== 0}).length} words and {text.length} characters </i></p>
                    
                    {/* calculating time for reading  (measure: 1 word per (1/25) minutes i.e. 0.008 minutes) */}
                    <p> <i>{ 0.008 * text.split('').length} minutes reading </i></p>

                    

                    <h2> Preview</h2>
                    <p> <i>{text.length> 0 ? text: "Nothing to preview!!"}</i> </p>

                </div>
                </>
                )
    }
