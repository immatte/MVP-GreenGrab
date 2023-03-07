import React from 'react';
import './CalendarGrid.css';
import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import VeggiesGrid from './VeggiesGrid';
import FruitsGrid from './FruitsGrid';

/* CHILD OF USERVIEW 
--> Lines 31-35 are creating a grid of Months(y) from the array of "yearcalendar" 
--> the function handleclick() is recovering the index of the Month clicked on, and 
comparing it to the ID of the Month selected from table "calendar"(requestMonthCb). 
See lines 13-28 from App. 
*/

function CalendarGrid(props) {
    const [ active, setActive ] = useState(false); //added for FE
    const [ isFruits, setIsFruits ] = useState(false); //display veggies by default

    const handleClick = month => {
        // props.requestMonthCb(month);
        props.requestMonth2Cb(month);
        props.requestMonthCb(month);
        setActive(month);
        console.log(yearcalendar[month]) //just testing
    };

    const handleChangeView = (isFruits) => {
        setIsFruits(isFruits);
    }
    //Work in progress : This function is currently not being used but could be for a future feature as to specify which Month was clicked on
    // const handleChange = event => {
    //   };

    //added for FE:
    // const activeMonth = () => {
    //     setActive(!isActive);
    // }


    //array of the Month used in line 28
    let yearcalendar = ['January','February','March','April','May','June','July','August','September','October','November','December']

    return (
        <div>
            <div className='CalendarGrid'>
                <h2>
                    Click to find your Month veggies !
                </h2>
                <ul id='months'>
                    {/* First Part : Calendar Grid buttons*/}
                    {
                        yearcalendar.map((y, index) => (
                            <li key={y}
                            onClick={() => handleClick(index+1)}
                            className={`monthsbox ${active === index+1 ? 'active' : null}`}>
                            {y}                        
                            </li>
                        ))
                    }
                </ul>
                
           
        </div>
            <nav>
                <div className={!isFruits ? 'active' : null} onClick={()=>handleChangeView(false)}>VEGGIES</div>
                <div className={isFruits ? 'active' : null} onClick={()=> handleChangeView(true)}>FRUITS</div>
            </nav>

      {(isFruits)
      ? <FruitsGrid monthFruits = {props.monthFruits}/>
      : <VeggiesGrid monthVeggies = {props.monthVeggies}/>
}
        </div>
    );
}

export default CalendarGrid;
