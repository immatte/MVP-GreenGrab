import React from 'react';
import './CalendarGrid.css';

function CalendarGrid(props) {

    const handleClick = month => {
        props.requestMonthCb(month);
    };


    let yearcalendar = ['January','February','March','April','May','June','July','August','September','October','November','December']

    return (
        <div className='CalendarGrid'>
            <ul id='months'>
                {
                    yearcalendar.map((y, index) => (
                        <li id='monthsbox' onClick={() => handleClick(index+1)}>{y}</li>
                    ))
                }

            </ul>
            <ul id='monthVeggies'>
                {
                    props.monthVeggies.map((veggie) => (
                        <li id='veggiesbox'>{veggie.veggie_name}</li>    
                    ))  //mejor cambia el nombre a monthvegies en todas partes
                }
                {
                    props.monthVeggies.map((veggie) => (
                        <li id='veggiesbox'>{veggie.veggie_name}</li>    
                    ))  //mejor cambia el nombre a monthvegies en todas partes
                }

            </ul>
        </div>
    );
}

export default CalendarGrid;
