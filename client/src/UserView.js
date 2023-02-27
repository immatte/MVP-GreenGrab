import React, {useState} from 'react';
import './App.css';
import SearchBarForm from './SearchBarForm';
import CalendarGrid from './CalendarGrid';

function UserView(props) {

    return (
        <div className = 'background'>
            {/* <h2>
                <SearchBarForm/>
            </h2> */}
            <h2>
                <CalendarGrid requestMonthCb={month => props.requestMonthCb(month)} monthVeggies = {props.monthVeggies}/>
            </h2>
            
        </div>
    );
}

export default UserView;
