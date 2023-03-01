import React from 'react';
import './CalendarGrid.css';

/* CHILD OF USERVIEW 
--> Lines 31-35 are creating a grid of Months(y) from the array of "yearcalendar" 
--> the function handleclick() is recovering the index of the Month clicked on, and 
comparing it to the ID of the Month selected from table "calendar"(requestMonthCb). 
See lines 13-28 from App. 
*/

function CalendarGrid(props) {

    const handleClick = month => {
        props.requestMonthCb(month);
        console.log(yearcalendar[month]) //just testing
    };
    //Work in progress : This function is currently not being used but could be for a future feature as to specify which Month was clicked on
    const handleChange = event => {
      };

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
                            <li className='monthsbox' id={y} onClick={() => handleClick(index+1)}>{y}</li>
                        ))
                    }
                </ul>
            </div>
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

export default CalendarGrid;
