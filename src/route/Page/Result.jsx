import React, { useRef, useContext } from "react";
import { BackwardIcon } from "../component/IconComponent";
import male from "../../images/male.jpg";
import female from "../../images/female.jpg";
import resultParameter from "../../images/resultParameter.png";
import "./Result.css";
import { useLocation } from 'react-router-dom';
import MyContext from "./MyContext";

const Result = () => {
    const location = useLocation();
    const value = location.state?.data;
    //const height=location.state?.height;
    //console.log(height);
    const myRef = useContext(MyContext);
    const heigtValue = myRef.current.height;
    const weightValue = myRef.current.weight;
    console.log(heigtValue);
    console.log("weight");
    console.log(weightValue);
    const bmi = (weightValue * 100) / (heigtValue * heigtValue);

    return (
        <div className="result">
            <BackwardIcon destination="/calculate" value={value} />
            <div className="container">
                <div className="resultContaine">
                    <img src={(value === "male") ? male : female} alt="male/femal" />
                    {
                        bmi?
                        <h1>Your BMI is {bmi.toFixed(1)}</h1>    
                        :<h1>Please Select your height and weight</h1>
                    }
                </div>
                <img src={resultParameter} alt="ResultParameter" />
            </div>
        </div>
    );
}

export default Result;
