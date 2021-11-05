import React,{useState} from 'react'  //usestate is a hook helps us to create state.


export default function TextForm(props) {
    const [text, setText]= useState("");
    //text="new text" //worng way to change the state
    //setText("new text");//corrrect way to change the state.
    const handleUpClick= ()=>{
        // console.log("UpperCase was clicked"+text);
        let  newtext= text.toUpperCase();
        setText(newtext);
        props.showAlert("converted to Uppercase","success")

    }
    
    const handleLoClick= ()=>{
        let  newtext= text.toLowerCase();
        setText(newtext);
        props.showAlert("converted to lower case","success")

    }
    const ClearText= ()=>{
        let  newtext= "";
        setText(newtext);
        props.showAlert("Text cleared","success")

    }
    const handleCopy=()=>{
        console.log("I am copy")
        var text= document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("copied to clipboard","success")
    }
    const handleExtraSpaces=()=>{
        let newtext= text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showAlert("extra spaces removed","success")
    }
    const handleOnChange= (event)=>{
        // console.log("On change");
        setText(event.target.value)

    }
    return (
        <>
        <div className="container" style={{color:props.mode==="dark"?'white':"#11114e"}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
         <textarea className="form-control" value={text} onChange={handleOnChange} style= {{backgroundColor:props.mode==='dark'?'grey':'white', color: props.mode==="dark"?'white':"#04044b"}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" style={{backgroundColor:props.mode==='dark'?'#04044b':'white',color:props.mode==="dark"?'white':"#04044b"}} onClick={handleUpClick}>Convert To UpperCase</button>
            <button className="btn btn-primary mx-1"  style={{backgroundColor:props.mode==='dark'?'#04044b':'white',color:props.mode==="dark"?'white':"#04044b"}} onClick={handleLoClick}>Convert To LowerCase</button>
            <button className="btn btn-primary mx-1" style={{backgroundColor:props.mode==='dark'?'#04044b':'white',color:props.mode==="dark"?'white':"#04044b"}} onClick={ClearText}>ClearText</button>
            <button className="btn btn-primary mx-1"style={{backgroundColor:props.mode==='dark'?'#04044b':'white',color:props.mode==="dark"?'white':"#04044b"}} onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" style={{backgroundColor:props.mode==='dark'?'#04044b':'white',color:props.mode==="dark"?'white':"#04044b"}} onClick={handleExtraSpaces}>Remove Extra Spaces</button>

        </div>
        <div className="container my-3" style={{color:props.mode==="dark"?'white':"#11114e"}}>
            <h1>your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008* text.split(" ").length}minutes to read</p>
            <h2>preview</h2>
             <p>{text.length>0?text:"enter text in box to review it here"}</p>
        </div>

        </>
    )
}
