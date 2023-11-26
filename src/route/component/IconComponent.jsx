import React from "react";
import { useNavigate } from "react-router-dom";
import "../Page/Calculate.css";
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';

export const ForwardIcon = props => {   
    const navigate = useNavigate();
   // console.log(props.value+"sjdlkj");
   if(props.name==="height"){
    console.log(props.value);
    console.log("oh value is found");
   }
    return (
        <div className="forwardIcon">
            <IconButton className="material-icons" onClick={() => navigate(props.destination,{state:{data:props.value}})}>
                <ArrowForwardSharpIcon className="arrowForwardIcon" />
            </IconButton>
        </div>
    );
}
export const BackwardIcon = props => {   
    const navigate = useNavigate();
    return(
        <div className="backIcon">
                <IconButton className="material-icons" onClick={() => navigate(props.destination,{state:{data:props.value}})}>
                    <ArrowBackIcon className="arrowBackIcon" />
                </IconButton>
            </div>
    );
}

 
