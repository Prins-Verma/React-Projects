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
            }

        const handleLowercaseClick = () => 
            {
                console.log("Lower case was clicked");
                // setText("You have clicked on 'Convert to Lower case'")
                let newText = text.toLowerCase();
                setText(newText)

             }

        const handleCopy = () => {
            let text = document.getElementById("myBox");
            text.select();
            navigator.clipboard.writeText(text.value);
        }

        // Remove extra spaces
        const handleExtraSpaces = () => {
                // if a paraagraph has one or more than one spaces then it will split(remove) it and then form a array by help of split(/[]+/)
            let newText = text.split(/[ ]+/);
                // then paragraph will be join by one space

            setText(newText.join(" ")) 
        }

        const clearText = () =>
            {
                console.log("Clear text area was clicked");
                //let newText = text.reset();
                //text.clear()
                setText("")
            }

        const handleOnChange = (event) => 
            {
                console.log("On change ");
                setText(event.target.value);
            }


        return (
                <>
                <div className="container" style= {{backgroundColor: props.mode === 'dark' ? 'grey': 'white'}}>
                    <h1> {props.heading} </h1>
                    <div className="mb-3">
                        {/* <label htmlFor="myBox" className="form-label"> Text area </label> */}
                        <textarea className="form-control" value={text} onChange={handleOnChange} style= {{backgroundColor: props.mode === 'dark' ? 'grey': 'white'}} id="myBox" rows="6" ></textarea>
                    </div>

                    <button className="btn btn-primary m-2" onClick={handleUppercaseClick}> Convert to Upper case </button>
                    <button className="btn btn-primary m-2" onClick={handleLowercaseClick}> Convert to Lower case </button>
                    <button className="btn btn-primary m-2" onClick={handleCopy}> Copy text </button>
                    <button className="btn btn-primary m-2" onClick={handleExtraSpaces}> Remove Extra Spaces </button>

                    <button className="btn btn-primary m-2" onClick={clearText}> Clear text area </button>

                </div>
                <div className="container my-3">
                    <h2> Your text summary </h2>
                    <p> <i> {text.split(' ').length} words and {text.length} characters </i></p>
                    {/* calculating time for reading  (measure: 1 word per (1/25) minutes i.e. 0.008 minutes) */}
                    <p> <i>{ 0.008 * text.split('').length} minutes reading </i></p>

                    {/* let t = { 0.008 * text.split(' ').length}
                    console.log(t.toFixed(2) + "minutes reading")
                    <p> {t.toFixed(2)} minutes reading</p> */}

                    <h2> Preview</h2>
                    <p> {text} </p>

                </div>
                </>
                )
    }
