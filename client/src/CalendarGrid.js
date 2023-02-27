import React from 'react';
import './CalendarGrid.css';

function CalendarGrid(props) {

    const handleClick = month => {
        props.requestMonthCb(month);
        console.log(yearcalendar[month])
    };

    const handleChange = event => {
      };


    let yearcalendar = ['January','February','March','April','May','June','July','August','September','October','November','December']

    return (
        <div>
            <div className='CalendarGrid'>
                <h2>
                    Click to find your Month veggies !
                </h2>
                <ul id='months'>
                    {
                        yearcalendar.map((y, index) => (
                            <li className='monthsbox' id={y} onClick={() => handleClick(index+1)}>{y}</li>
                        ))
                    }
                </ul>
            </div>
            <div className='monthVeggies'>
            <h2 >
                {props.month}
            </h2>
                <ul id="VegiesGrid">
                    {
                        props.monthVeggies.map((veggie) => (
                            <li id='veggiesbox'>
                            <img className='veggieImage'
                                src= {veggie.veggie_url}
                                alt= {veggie.veggie_name}
                                />
                                {veggie.veggie_name}    
                            </li>
                        ))  //mejor cambia el nombre a monthvegies en todas partes
                    }

                </ul>
            </div>
        </div>
    );
}

export default CalendarGrid;
