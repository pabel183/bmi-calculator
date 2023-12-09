import React, { useRef,useContext } from 'react';
import WheelPicker  from 'react-simple-wheel-picker';
import Styled from "styled-components";
import MyContext from '../Page/MyContext';

import { RemoveScroll } from 'react-remove-scroll';
import "./ItemListComponent.css"


const ItemList = (props) => {

	const myRef=useContext(MyContext);

	let heightArray = [], weightArray = [];
        let heigtVlaue=30;
        let weightValue=1;    
        for(let i=0;i<120;i++){
            heightArray.push( {id:i.toString(),value:heigtVlaue} )
            weightArray.push({id:i.toString(),value:weightValue});
            heigtVlaue++;
            weightValue++;
            
        }

	const heightId = heightArray.find(obj => obj.id === "30");
	const weightId = weightArray.find(obj=>obj.id==="33");

	const heightSetup = target => {
		console.log(target);
		//setHeight(target);
		myRef.current.height=target.value;
	};
	const weightSetup=target=>{
		console.log(target);
		// setWeight(target);
		myRef.current.weight=target.value;
	}

  const styleWheelPicker=Styled.WheelPicker;
	return (
		
    <div className='wheelPicker' style={{ display: 'flex', justifyContent: 'center' }}> 
    <WheelPicker
			data={ (props.name==="height") ? heightArray:weightArray}
			onChange={ (props.name==="height") ? heightSetup:weightSetup}
			height={135}
			width={100}
			titleText="Enter value same as aria-label"
			itemHeight={30}
			selectedID={ (props.name==="height") ? heightId.id:weightId.id}
			activeColor="#333"
			backgroundColor="#fff"
      		shadowColor="none"
			color="#B1B1B1"
			fontSize={30}
			
      
		/>
  </div>
	);
  
};


export default ItemList;


//error: npm-solution above

// import React, { useContext,useEffect,useState } from "react";
// import MyContext from "../Page/MyContext";
// import "../Page/Calculate.css";

// export const ItemList = (propes) => {

//     const { height, setHeight, weight, setWeight } = useContext(MyContext);
    
//     let preHeightTarget=null;
//     let preWeightTarget=null;
//     let currentTarget,name="",value=0;
    
//     const handleMouseClick = (event) => {
//         currentTarget= event.target;
//         name = event.target.dataset.name;
//         value = event.target.textContent;
//         const liElement = event.target.closest('li');
//         console.log(liElement);

//         if (name === "height" ) {
          
//           if (preHeightTarget!==null)preHeightTarget.classList.remove("targetdlisthight");   
//             currentTarget.classList.add("targetdlisthight");
//             setHeight(value);
    
//             if(preWeightTarget!==null)preWeightTarget.classList.add("targetdlistwidth");
//             currentTarget.classList.add("targetdlisthight");
//             preHeightTarget=currentTarget;
//           }

//          else if (name === "weight" ) {
//           if (preWeightTarget!==null)preWeightTarget.classList.remove("targetdlistwidth"); 
          
//             setWeight(value);
//             currentTarget.classList.add("targetdlistwidth");
//             if(preHeightTarget!==null)preHeightTarget.classList.add("targetdlisthight");
//             preWeightTarget=currentTarget;
//         }
//     };
//     console.log(height);

//     return (
//         <li
//             className={propes.listStyle}
//             onClick={handleMouseClick}
//             // onMouseEnter={handleMouseEnter}
//             // onMouseLeave={handleMouseLeave}
//             key={propes.value + 1}
//             data-name={propes.name}
//             data-id={propes.targedItem}
//         >{propes.value + 1}</li>
//     );
// }

//error:chacking above 

// import React, { useContext,useEffect,useState } from "react";
// import MyContext from "../Page/MyContext";
// import "../Page/Calculate.css";

// export const ItemList = (propes) => {

//     const { height, setHeight, weight, setWeight } = useContext(MyContext);
    
//     const [heightId,setHeightId]=useState("");
//     const [weightId,setWeightId]=useState("");
    
//     const handleMouseClick = (event) => {
//         const name = event.target.dataset.name;
//         const value = event.target.textContent;
//         const id=event.target.dataset.id;
//         //const liElement = event.target.closest('li');
//         //console.log(liElement);
//       console.log(event.target);
//         if (name === "height" ) {
          
//           // if (preHeightTarget!==null)preHeightTarget.classList.remove("targetdlisthight");   
//           //   currentTarget.classList.add("targetdlisthight");
//           setHeight(value);
//           setHeightId(id)
    
//             // if(preWeightTarget!==null)preWeightTarget.classList.add("targetdlistwidth");
//             // currentTarget.classList.add("targetdlisthight");
//             // preHeightTarget=currentTarget;
//           }

//          else if (name === "weight" ) {
//           // if (preWeightTarget!==null)preWeightTarget.classList.remove("targetdlistwidth"); 
          
//             setWeight(value);
//             setWeightId(id);
//             // currentTarget.classList.add("targetdlistwidth");
//             // if(preHeightTarget!==null)preHeightTarget.classList.add("targetdlisthight");
//             // preWeightTarget=currentTarget;
//         }
//     };
//     //console.log(height);
//     console.log("height: "+heightId);
//     console.log("weightid: "+weightId);
//     // console.log("id :");
//     console.log("id: "+propes.targedItem);
//     return (
//         <li
//             className={ "{${propes.listStyle} ${heightId===propes.targedItem?targetdlisthight:''}}"}// ${weightId===propes.targedItem?'targetdlistwidth':''}}" }
//             onClick={handleMouseClick}
//             // onMouseEnter={handleMouseEnter}
//             // onMouseLeave={handleMouseLeave}
//             key={propes.value + 1}
//             data-name={propes.name}
//             data-id={propes.targedItem}
//         >{propes.value + 1}</li>
//     );
// }

