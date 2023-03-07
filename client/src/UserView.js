import React, {useState} from 'react';
import './App.css';
import SearchBarForm from './SearchBarForm';
import CalendarGrid from './CalendarGrid';

/* CHILD FROM APP */
/* PARENT FROM CALENDARGRID AND SEARCHBARFORM */

function UserView(props) {

    return (
        
        <div>
            <div>
                <SearchBarForm />
            </div>

            <div className = 'background'>
            <h2>
                <CalendarGrid requestMonthCb={text => props.requestMonthCb(text)} requestMonth2Cb={text => props.requestMonth2Cb(text)} monthFruits={props.monthFruits} monthVeggies = {props.monthVeggies}/>
                {/* {props.monthVeggies.length &&  <VeggiesGrid monthVeggies = {props.monthVeggies}/> } */}
                
            </h2>
            </div>
        </div>
    );
}

export default UserView;
