import React, { useState } from 'react'

// console.log(useState('Enter text here'));

export default function TextForm(props) 
    {
        // text = "new text";  wrong way to change the stete
        // setText("new text");  right way to chnage the state
        const [text, setText] = useState('');
       // let msg = text;

        const handleUppercaseClick = () => 
            {
                console.log("Upper case was clicked");
                // setText("You have clicked on 'Convert to Upper case'")
                let newText = text.toUpperCase();
                setText(newText)
                props.showAlert("Converted to Uppercase!", "Success")
            }

        const handleLowercaseClick = () => 
            {
                console.log("Lower case was clicked");
                // setText("You have clicked on 'Convert to Lower case'")
                let newText = text.toLowerCase();
                setText(newText)
                props.showAlert("Converted to Lowercase!", "Success")
                
             }

        const handleCopy = () => {
            let text = document.getElementById("myBox");
            text.select();
            navigator.clipboard.writeText(text.value);
            props.showAlert("Text copied to clipboard!", "Success")

        }

        // Remove extra spaces
        const handleExtraSpaces = () => {
                // if a paraagraph has one or more than one spaces then it will split(remove) it and then form a array by help of split(/[]+/)
            let newText = text.split(/[ ]+/);
                // then paragraph will be join by one space

            setText(newText.join(" ")) 
            props.showAlert("Extra spaces removed!", "Success")
        }

        const clearText = () =>
            {
                console.log("Clear text area was clicked");
                //let newText = text.reset();
                //text.clear()
                setText("")
                props.showAlert("Text area cleared!", "Success")
            }

        const handleOnChange = (event) => 
            {
                console.log("On change ");
                setText(event.target.value);
                
            }


        return (
                <>
                <div className="container" style= {{color: props.mode === 'dark' ? 'white': '#042743'}}>
                    <h1> {props.heading} </h1>
                    <div className="mb-3">
                        {/* <label htmlFor="myBox" className="form-label"> Text area </label> */}
                        <textarea className="form-control" value={text} onChange={handleOnChange} style= 
                            {{backgroundColor: props.mode === 'dark' ? 'grey': 'white', color: props.mode === 'dark' ? 'white': '#042743'}} id="myBox" rows="6" ></textarea>
                    </div>

                    <button className="btn btn-primary m-2" onClick={handleUppercaseClick}> Convert to Upper case </button>
                    <button className="btn btn-primary m-2" onClick={handleLowercaseClick}> Convert to Lower case </button>
                    <button className="btn btn-primary m-2" onClick={handleCopy}> Copy text </button>
                    <button className="btn btn-primary m-2" onClick={handleExtraSpaces}> Remove Extra Spaces </button>

                    <button className="btn btn-primary m-2" onClick={clearText}> Clear text area </button>

                </div>
                <div className="container my-3" style= {{color: props.mode === 'dark' ? 'white': '#042743'}}>
                    <h2> Your text summary </h2>
                    <p> <i> {text.split(' ').length} words and {text.length} characters </i></p>
                    {/* calculating time for reading  (measure: 1 word per (1/25) minutes i.e. 0.008 minutes) */}
                    <p> <i>{ 0.008 * text.split('').length} minutes reading </i></p>

                    {/* let t = { 0.008 * text.split(' ').length}
                    console.log(t.toFixed(2) + "minutes reading")
                    <p> {t.toFixed(2)} minutes reading</p> */}

                    <h2> Preview</h2>
                    <p> {text.length> 0 ? text: "Enter something in Text Area above to preview here!!"} </p>

                </div>
                </>
                )
    }
