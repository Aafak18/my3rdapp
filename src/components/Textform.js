import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function Textform(props) {
    
    const handleUpClick =()=> {
 
        let text2 = text.toUpperCase();
        setText(text2);
    }
    
    const handleLowClick =()=> {
        let text3 = text.toLowerCase();
        setText(text3);
    }

    const handleDoubleClick =()=> {
 
        let text4 = text.repeat(2);
        setText(text4);
    }
    
    const handleClearClick =()=> {
 
        let text5 =' ';
        setText(text5);
    }

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here');

  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" value = {text} onChange = {handleOnChange} id="myTextBox" rows="5"></textarea>
    </div>
       <button className="btn btn-primary mx-3" 
       onClick={handleUpClick}> Click to convert text to Upper case</button>

       <button className="btn btn-primary mx-3" 
       onClick={handleLowClick}> Click to convert text to Lower Case</button>
    
        <button className="btn btn-primary mx-3" 
       onClick={handleDoubleClick}> Click to repeat the text twice in the box</button>

       <button className="btn btn-primary mx-3" 
       onClick={handleClearClick}> Click to clear the screen</button>
    </div>

    <div className="container">
        <h2>Your text Summary</h2>
        <p>{text.split(" ").length} word and {text.length} characters</p>
        <p>You need {0.008 * text.split(" ").length} Minutes to read this</p>
        <br/>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  )
}

Textform.propTypes = {
    heading: PropTypes.string
}