import React from 'react';
import './VeggiesGrid.css';
import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";

/* CHILD OF USERVIEW 
--> Lines 31-35 are creating a grid of Months(y) from the array of "yearcalendar" 
--> the function handleclick() is recovering the index of the Month clicked on, and 
comparing it to the ID of the Month selected from table "calendar"(requestMonthCb). 
See lines 13-28 from App. 
*/

function VeggiesGrid(props) {
    
  
    return (
        <div>
          
            <div className='monthVeggies'>
                {/* Second Part : Veggies Grid*/}
                <ul id="VegiesGrid">
                    {
                        props.monthVeggies.map((veggie) => (
                            <li id='veggiesbox'>
                            <img className='veggieImage'
                                src= {veggie.veggie_url}
                                alt= {veggie.veggie_name}
                                />
                            <h2 id='veggieText'>
                                {veggie.veggie_name}    
                            </h2>
                            </li>
                        )) 
                    }

                </ul>
            </div>
        </div>
    );
}

export default VeggiesGrid;
