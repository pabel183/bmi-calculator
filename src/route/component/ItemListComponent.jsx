import React,{useContext} from "react";
import MyContext from "../Page/MyContext";

export const ItemList = (propes) => {
    const { setHeight, setWeight } = useContext(MyContext);

    const handleMouseClick = (event) => {
        const name = event.target.dataset.name;
        const value = event.target.textContent
        if (name === "height") {
            setHeight(value);
        }
        else {
            setWeight(value);
        }
    };
    const handleMouseEnter = (event) => {
//const name = event.target.dataset.name;
        //console.log(name+"enter");
        // setSelectedItem(event.target.textContent);
        // console.log(selectedItem);
        event.target.classList.add("targetdlist");
    };
    const handleMouseLeave = (event) => {
       // const name = event.target.dataset.name;
        //   console.log(name+"leave");
        // if (isClick === event.target) {
        //     console.log(isClick);
        // }
        // else {
        event.target.classList.remove("targetdlist");

    };
    return (
        <li
            className={propes.listStyle}
            onClick={handleMouseClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            key={propes.value + 1}
            data-name={propes.name}
        >{propes.value + 1}</li>
    );
}