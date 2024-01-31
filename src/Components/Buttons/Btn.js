import "./styles.css"
// import PropTypes from 'prop-types';

export default function Btn({setText  ,text ,setmyStyle , setbtnText}){
    const handleClick = ((event)=>{
        if (text === "UpperCase"){
            setText((prevText)=>prevText.toUpperCase()) 

        }
        if(text === "LowerCase"){
            setText((prevText)=>prevText.toLowerCase())
        }

        if(text === "Clear"){
            setText("");
        }
        

        if (text === "Enable Dark Mode"){
            setmyStyle({
                color : "white",
                backgroundColor : "black" 
            })
            setbtnText("Enable Light Mode")
            document.body.style.color = "white"
            document.body.style.backgroundColor = "#222224"

        }
        
        if (text === "Enable Light Mode"){
            setmyStyle({
                color : "black",
                backgroundColor : "white" 
            })
            setbtnText("Enable Dark Mode")
            document.body.style.color = "black"
            document.body.style.backgroundColor = "white"

        }


        // if(text === "Preview text"){
        //     <p>{text}</p>; 
        // }
        
    }) 
    return(
       <button onClick={handleClick} className="btn">{text}</button>
    );
} 

// Btn.propTypes = {
//     text : PropTypes.string
// }

// Btn.defaultProps = {
//     text : "Button"
// }