import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./Calculate.css";
import male from "../../images/male.jpg";
import female from "../../images/female.jpg";
import { ForwardIcon, BackwardIcon } from "../component/IconComponent";
import { useLocation } from 'react-router-dom';
import { ItemList } from "../component/ItemListComponent";



const Calculate = () => {

    const location = useLocation();
    const value = location.state?.data;
    const [heightItems, setHeightItems] = useState([0]);
    const [weightItems, setWeightItems] = useState([0]);

    useEffect(() => {
        let heightArray = [], weightArray = [];
        for (let i = 30; i <= 250; i += 1) {
            heightArray.push(i);
        };
        setHeightItems(heightArray)

        for (let i = 5; i <= 150; i += 1) {
            weightArray.push(i);
        };
        setWeightItems(weightArray);
    }, []);
    return (
        <div className="calculate">
            <BackwardIcon destination="/" value={value} />
            <h1>Height and Weight</h1>
            <img src={(value === "male") ? male : female} alt="male/femal" />
            <div className="heightAndWeight">
                <div className="height">
                    <div className="designlist" />
                    <div className="list">
                        
                        {
                            heightItems.map((value) => {
                                const key = uuidv4();
                                const targedItem = uuidv4();
                                return (
                                    <ItemList
                                        key={key}
                                        listStyle="listStyle"
                                        value={value}
                                        name="height"
                                        targedItem={targedItem} />
                                );
                            })
                        }
                    </div>
                    <div className="unit">
                        <h1>cm</h1>
                    </div>
                </div>
                <div className="weight">
                <div className="designlist" />
                    <div className="list">
                        {
                            weightItems.map((value) => {
                                const key = uuidv4();
                                const targedItem = uuidv4();
                                return (
                                    <ItemList key={key} listStyle="listStyle" value={value} name="weight" targedItem={targedItem} />
                                );
                            })
                        }
                    </div>
                    <div className="unit">
                        <h1>kg</h1>
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
