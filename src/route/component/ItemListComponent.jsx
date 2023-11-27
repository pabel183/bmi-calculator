import React, { useContext,useState } from "react";
import MyContext from "../Page/MyContext";

export const ItemList = (propes) => {
    const { height, setHeight, weight, setWeight } = useContext(MyContext);
    const [position,setPosition]=useState(null);
    const [positionValue,setPositionValue]=useState(null);

    const handleMouseClick = (event) => {
        const name = event.target.dataset.name;
        const targedItem= event.target.dataset.targeditem;
        const value = event.target.textContent
        setPosition(name);
        if (name === "height") {
            console.log("height: "+targedItem);
            setHeight(value);
        }
        else if (name === "weight") {
            console.log("weight: "+targedItem);
            setWeight(value);
        }
        event.target.classList.add("targetdlist");
        
    };
    const handleMouseEnter = (event) => {
        event.target.classList.add("targetdlist");
    };
    const handleMouseLeave = (event) => {
        // const name = event.target.dataset.name;
        // const value = event.target.textContent;
        // if(position!==name){
            event.target.classList.remove("targetdlist");
        // }
        
        
    };
    return (
        <li
            className={propes.listStyle}
            onClick={handleMouseClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            key={propes.value + 1}
            data-name={propes.name}
            data-targeditem={propes.targedItem}
        >{propes.value + 1}</li>
    );
}