import React,{useState} from "react";
import {ForwardIcon} from "../component/IconComponent";
import "./Home.css";

const Home=(props)=>{
    const [button1,setButton1]=useState(false);
    const [button2,setButton2]=useState(true);
    const [value,setValue]=useState("male");
    
    const buttonHandalar=(event)=>{
        const value=event.target.value;
        setValue(value);
        if(value==="male"){
            setButton1(false);
            setButton2(true);
        }
        else{
            setButton1(true);
            setButton2(false);
        }
    }
    
    return(
        <div className="home">
        <h1>Choose your Gender</h1>
        <div className="images">
            <img src={props.maleImage} alt="male" />
            <img src={props.femalImage} alt="female" />
        </div>
        <div className="genderSelector">
                <button className={button1?"buttonColor":null} onClick={buttonHandalar} value="male">Male</button>
                <button className={button2?"buttonColor":null} onClick={buttonHandalar} value="female">Female</button>
        </div>
        <div>
        <ForwardIcon destination="/calculate" value={value}/>
        </div>
        </div>
    )
}

export default Home;