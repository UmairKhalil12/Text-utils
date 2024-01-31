import "./styles.css"
import Label from "../Label"
import TextBox from "../TextBox"

export default function Form() {
    return (
        <>
            <div className="container-1">
                <div >
                    <Label text="Enter your text"  />
                    <TextBox />
                    <br />
                </div>
            </div>

        </>
    );
}