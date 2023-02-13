import React from "react";
import { useState } from "react";

export default function TextBox() {
    const [text,setText]=useState('Test text');
    const [style,setStyle]=useState({color:'black',backgroundColor:'white'});
    const [btnText,setBtnText]=useState('Enable dark-mode')
    let changeStyle=()=>{
      if(style.color==='white')
      {
        setStyle({color:'black',backgroundColor:'white'});
        setBtnText('Enable dark-mode');
      }
      else
      {
        setStyle({color:'white',backgroundColor:'black'});
        setBtnText('Disable dark-mode');
      }
    }
  return (
    <>
    <div className="container mb-3" style={style}>
      <label htmlFor="exampleFormControlTextarea1" className="form-label my-2">
        <h2>Enter Text</h2>
      </label>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="10"
        onChange={(event)=>{setText(event.target.value)}}
        value={text}
        style={style}
      ></textarea>
      <button className="btn btn-primary my-2" onClick={()=>{setText(text.toUpperCase())}}>
        toUpperCase
      </button><button className="btn btn-primary mx-2" onClick={()=>{setText(text.toLowerCase())}}>
        toLowerCase
      </button><button className="btn btn-primary" onClick={()=>{setText('')}}>
        ClearText
      </button>
      
    <button onClick={changeStyle} type="button" className="btn btn-primary mx-2">{btnText}</button>
    </div>
    <div className="container" style={style}>
      <h2>
        Text summary
      </h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
    </div>
    <div className="container" style={style}>
      <h2>
        Text Preview
      </h2>
      <p>{text}</p>
    </div>
    </>
  );
}
