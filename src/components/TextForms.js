import React, { useState } from 'react'

export default function TextForms(props) {



    const handleUpClick = () => {
        console.log("Upper Case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert(" Converted to UpperCase","success");
    };
    const handleLoClick = () => {
        console.log("Lower Case was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCased","success");
    };
    const Clear = () => {
        console.log("Lower Case was clicked" + text);
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared","success");
    };
    const handleOnChange = (event) => {
        console.log("licked");
        setText(event.target.value);
    };
    <link rel="stylesheet" href="App.css" />
    const [text, setText] = useState("");
    return (
        <>
            <div className="container" style={{color : props.mode === 'dark' ? 'white' : '#0B1E32'}} >
                <div className='container' >
                    <h1> {props.heading} </h1>
                    <div className="mb-3"  >
                        <textarea className="form-control" onChange={handleOnChange}  id="myBox" rows="10" value={text} style={{backgroundColor : props.mode === 'light' ? 'white' : '#061F42',color : props.mode === 'dark' ? 'white' : '#0B1E32'}} ></textarea>
                    </div>
                        <button className="btn btn-primary my-3" onClick={handleUpClick} >Convert to Upper Case</button>
                        <button className="btn btn-primary mx-5 my-3" onClick={handleLoClick} >Convert to Lower Case</button>
                        <button className="btn btn-primary mx-5 my-3" onClick={Clear} >Clear text</button>

                </div>
                <div className="container" >
                    <h2>Your text summary</h2>
                    <p>{text.split(" ").length} Words, {text.length} Characters</p>
                    <p>{0.008 * text.split(" ").length} Minutes to read</p>
                    <h2>Preview</h2>
                    <p> {text.length>0 ? text :"Enter your text to preview" }</p>

                </div>
            </div>


        </>

    )
}
