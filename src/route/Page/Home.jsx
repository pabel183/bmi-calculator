import React, { useState } from "react";
import { ForwardIcon } from "../component/IconComponent";
import "./Home.css";

const Home = (props) => {
    const [isTransparent, setTransparent] = useState(false);
    const [isColor, setColor] = useState(false);
    const [value, setValue] = useState("male");

    const buttonHandalar = (event) => {
        const value = event.target.value;
        setValue(value);
        if(value==="female") {
            setColor(true);
        }
        else {
            setColor(false);
        }
    }

    return (
        <div className="home">
            <h1>Choose your Gender</h1>
            <div className="mainCompoent">
                <div className="images">
                    <img src={props.maleImage} alt="male" />
                    <img src={props.femalImage} alt="female" />
                </div>
                <div className="genderSelector">
                    <button className={ isColor?"colorTransparent":"" } onClick={buttonHandalar} value="male">Male</button>
                    <button className={ !isColor?"colorTransparent":"" } onClick={buttonHandalar} value="female">Female</button>
                </div>
            </div>
            <div className="forwordIcon">
                <ForwardIcon destination="/calculate" value={value} />
            </div>
        </div>
    )
}

export default Home;