import React, {useState} from 'react';
import './UserView.css';
import { Routes, Route, Link } from 'react-router-dom';
import SelectCountry from './Components/SelectCountry';
import CalendarGrid from './Components/CalendarGrid';

/* CHILD FROM APP */
/* PARENT FROM CALENDARGRID AND SEARCHBARFORM */

function UserView(props) {

    
    
    return (
        
        <div>
            <div className="Dropdown">
            <SelectCountry setSelectedCountry = {props.setSelectedCountry} selectedCountry= {props.selectedCountry} />
            </div>
            
            <div className = 'background'>
            
            <h2>
            {(props.selectedCountry)
            ? <CalendarGrid requestMonthCb={text => props.requestMonthCb(text)}
            requestMonth2Cb={text => props.requestMonth2Cb(text)} monthFruits={props.monthFruits}
            monthVeggies = {props.monthVeggies}
            selectedCountry={props.selectedCountry}/>
            : null}
                
                {/* Show veggies grid if there is data */}
                {/* {props.monthVeggies.length &&  <VeggiesGrid monthVeggies = {props.monthVeggies}/> } */}
                
            </h2>
            </div>
        </div>
    );
}

export default UserView;
