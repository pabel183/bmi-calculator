import React, { useContext,useState } from "react";
import MyContext from "../Page/MyContext";
import "../Page/Calculate.css";

export const ItemList = (propes) => {

    const { height, setHeight, weight, setWeight } = useContext(MyContext);
    let preHeightTarget=null;
    let preWeightTarget=null;
    let currentTarget,name,value;
    const [a,sa]=useState("");
    const handleMouseClick = (event) => {
        currentTarget= event.target;
        name = event.target.dataset.name;
        value = event.target.textContent;

        if (name === "height" ) {
          
          if (preHeightTarget!==null)preHeightTarget.classList.remove("targetdlisthight");   
            currentTarget.classList.add("targetdlisthight");
            setHeight(value);
            if(preWeightTarget!==null)preWeightTarget.classList.add("targetdlistwidth");
            currentTarget.classList.add("targetdlisthight");
            preHeightTarget=currentTarget;
            sa(currentTarget.classList);
            console.log(a);
          }

         else if (name === "weight" ) {
          console.log(a);
          if (preWeightTarget!==null)preWeightTarget.classList.remove("targetdlistwidth"); 
          
            setWeight(value);
            currentTarget.classList.add("targetdlistwidth");
            if(preHeightTarget!==null)preHeightTarget.classList.add("targetdlisthight");
            preWeightTarget=currentTarget;
        }
        event.preventDefault();
    };
    return (
        <li
            className={propes.listStyle}
            onClick={handleMouseClick}
            // onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
            key={propes.value + 1}
            data-name={propes.name}
            data-id={propes.targedItem}
        >{propes.value + 1}</li>
    );
}