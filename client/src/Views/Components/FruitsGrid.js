import React from 'react';
import './FruitsGrid.css';
import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";

/* CHILD OF USERVIEW 
--> Lines 31-35 are creating a grid of Months(y) from the array of "yearcalendar" 
--> the function handleclick() is recovering the index of the Month clicked on, and 
comparing it to the ID of the Month selected from table "calendar"(requestMonthCb). 
See lines 13-28 from App. 
*/

function FruitsGrid(props) {
    
  
    return (
        <div>
          
            <div className='monthFruits'>
                {/* Second Part : Veggies Grid*/}
                <ul id="FruitsGrid">
                    {
                        props.monthFruits.map((fruit) => (
                            <li id='fruitbox'>
                            <img className='fruitImage'
                                src= {fruit.fruit_url}
                                alt= {fruit.fruit_name}
                                />
                            <h2 id='fruitText'>
                                {fruit.fruit_name}    
                            </h2>
                            </li>
                        )) 
                    }

                </ul>
            </div>
        </div>
    );
}

export default FruitsGrid;
