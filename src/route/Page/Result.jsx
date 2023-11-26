import React, {useContext} from "react";
import { BackwardIcon } from "../component/IconComponent";
import male from "../../images/male.jpg";
import female from "../../images/female.jpg";
import resultParameter from "../../images/resultParameter.png";
import "./Result.css";
import { useLocation } from 'react-router-dom';
import MyContext from "./MyContext";

const Result = () => {
    const location = useLocation();
    const value=location.state?.data;
    //const height=location.state?.height;
    //console.log(height);
    const {height,weight}=useContext(MyContext);
    const bmi=(weight*100)/(height*height);
    return (
        <div className="result">
            <BackwardIcon destination="/calculate" value={value}/>
            <div className="resultContaine">
            <img src={(value==="male")?male:female} alt="male/femal" />
                <h1>Your BMI is {bmi.toFixed(1)}</h1>
            </div>
            <img src={resultParameter} alt="ResultParameter" />
        </div>
    );
}

export default Result;
