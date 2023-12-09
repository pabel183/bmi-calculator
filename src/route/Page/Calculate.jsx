import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./Calculate.css";
import male from "../../images/male.jpg";
import female from "../../images/female.jpg";
import { ForwardIcon, BackwardIcon } from "../component/IconComponent";
import { useLocation } from 'react-router-dom';
import ItemList from "../component/ItemListComponent";

const Calculate = () => {

    const location = useLocation();
    const value = location.state?.data;


    return (
        <div className="calculate">
                <BackwardIcon destination="/" value={value} />
            <h1>Height and Weight</h1>
            <div className="mainComponent" >
                <img src={(value === "male") ? male : female} alt="male/femal" />
                <div className="heightAndWeight">
                    <div className="height">
                        {/* <div className="designlist" /> */}
                        <ItemList key="abc" name="height" />
                        <div className="unit">
                            <h1>cm</h1>
                        </div>
                    </div>
                    <div className="weight">
                        {/* <div className="designlist" /> */}
                        <ItemList key="sladjf" name="weight" />
                        <div className="unit">
                            <h1>kg</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <ForwardIcon destination="/result" value={value} />
            </div>
        </div>
    );
}

export default Calculate;

