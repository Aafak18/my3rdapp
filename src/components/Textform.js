import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function Textform(props) {
    
    const handleUpClick =()=> {
        console.log("Upper case was clicked" + text)
        let text2 = text.toUpperCase();
        setText(text2);
    }

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }
 


    const [text, setText] = useState('Enter text here');
    //setText("Enter here!!!");
  return (
    <div>
        <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" value = {text} onChange = {handleOnChange} id="myTextBox" rows="5"></textarea>
    </div>
       <button className="btn btn-primary" onClick={handleUpClick}> Click to convert text to Upper case</button>
    </div>
  )
}

Textform.propTypes = {
    heading: PropTypes.string
}