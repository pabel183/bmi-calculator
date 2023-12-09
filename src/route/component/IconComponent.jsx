import React from "react";
import { useNavigate } from "react-router-dom";
import "./IconComponent.css";
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EastIcon from '@mui/icons-material/East';

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


export const ForwardIcon = props => {   
    const navigate = useNavigate();
   // console.log(props.value+"sjdlkj");
   if(props.name==="height"){
    console.log(props.value);
    console.log("oh value is found");
   }
    return (
        <div className="forwardIcon">
            <IconButton className="material-icons custom-icon" onClick={() => navigate(props.destination,{state:{data:props.value}})}>
                <EastIcon className="arrowForwardIcon" />
            </IconButton>
        </div>
    );
}
 
