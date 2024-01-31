import "./styles.css"
import { useState } from "react";
import Btn from "../Buttons/Btn"
import Heading from "../Heading/Heading"


export default function TextBox() {
    const [text, setText] = useState("");
    let handleChange = ((event) => {
        setText(event.target.value);
        console.log("Onchange running")
    })
    return (
        <>
            <div></div>
            <div></div>
            <div className="text-area">
                <div>
                    <textarea className="text-box" value={text} onChange={handleChange}></textarea>
                    <br/>  
                    <Btn text="UpperCase" setText={setText} /> &nbsp; &nbsp;
                    <Btn text="LowerCase" setText={setText} />  &nbsp; &nbsp;
                    <Btn text="Clear" setText={setText} />
                    <br/> <br/> 
                    <p>The total number of characters are {text.length} and total number of words are {text.split(" ").length}</p>
                    <p>Total time required to read typed in text : {0.008 * text.split(" ").length} minutes</p>
                    <Heading text="Preview Text" />
                    {text}
                </div>
            </div>
            <br />

        </>
    );
}