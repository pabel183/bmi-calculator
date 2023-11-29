import React,{ useState } from "react";
import Home from "./Home";
import Calculate from "./Calculate";
import Result from "./Result";
import male from "../../images/male.jpg";
import femal from "../../images/female.jpg";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import MyContext from "./MyContext";

const App=()=>{
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    
    return(
        <MyContext.Provider value={ {height,setHeight,weight,setWeight} }>
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