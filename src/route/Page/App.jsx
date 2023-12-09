import React,{ useRef } from "react";
import Home from "./Home";
import Calculate from "./Calculate";
import Result from "./Result";
import male from "../../images/male.jpg";
import femal from "../../images/female.jpg";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import MyContext from "./MyContext";
import "./App.css";

const App=()=>{
    const myRef=useRef({height:null,weight:null});
    return(
        <MyContext.Provider value={ myRef }>
        <Router>
            <Routes>
                <Route path="/" element={ <Home maleImage={male} femalImage={femal} /> } />
                <Route path="/calculate" element={<Calculate />} />
                <Route path="/result" element={<Result />} />
            </Routes>
        </Router>
        </MyContext.Provider>
    );
}

export default App;