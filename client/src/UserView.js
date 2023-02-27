import React, {useState} from 'react';
import './App.css';
import SearchBarForm from './SearchBarForm';
import CalendarGrid from './CalendarGrid';

function UserView(props) {
    let [input, setInput] = useState("");
    
    const handleSubmit = event => {
        let input = `SELECT MONTH(${input}) AS Month;`;
        event.preventDefault();
        props.addRequestCb(input);
        setInput("");
    };
    
    const handleChange = event => {
        setInput(event.target.value);
    };

    let yearcalendar = ['January','February','March','April','May','June','July','August','September','October','November','December']

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
