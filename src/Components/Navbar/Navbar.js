import "./styles.css"
import Btn from "../Buttons/Btn"
import { useState } from "react";

export default function Navbar({ mode, setMode }) {

    const [myStyle, setmyStyle] = useState({
        color: "black",
        backgroundColor: "white"

    })

    const handleClick = ((event) => {
        if (mode === "dark") {
            setmyStyle({
                color: "black",
                backgroundColor: "white"

            })
            setMode("light");
            setRadioText("Enable Dark Mode");
            document.body.style.color = "black"
            document.body.style.backgroundColor = "white"
        }
        if (mode === "light") {
            setmyStyle({
                color: "white",
                backgroundColor: "black"
            })
            setMode("dark")
            setRadioText("Enable Light Mode");
            document.body.style.color = "white"
            document.body.style.backgroundColor = "#222224"
        }

    })

    const [btnText, setbtnText] = useState("Enable Dark Mode")
    const [radioText, setRadioText] = useState("Enable Dark Mode");

    // const handleOnClick = (()=>{


    // })


    return (
        <>
            <div >
                <nav className="navbar" style={myStyle} >
                    <ul>
                        <li><a href="/" style={myStyle}>Home</a></li>
                        <li><a href="/" style={myStyle} >About</a></li>
                        <li><a href="/" style={myStyle} >Contact</a></li>
                        <Btn text={btnText} setmyStyle={setmyStyle} setbtnText={setbtnText} />
                        <div class="form-check form-switch " style={{ display: "inline-block", marginLeft: "25px" }}>
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={handleClick} />
                            <label class="form-check-label" for="flexSwitchCheckChecked">{radioText} </label>
                        </div>

                    </ul>
                </nav>
            </div>

        </>
    );

}


