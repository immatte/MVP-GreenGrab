import React, {useState} from 'react';
import './App.css';

/* CHILD FROM USERVIEW */

//Work in progress : This child(SearchBarForm) is currently not being used but could be for a future feature

function SearchBarForm(props) {
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

    return (
        <div>
        <h2>
            Search bar
            <form onSubmit={e => handleSubmit(e)}>
                <input 
                    type="date" 
                    name="title" 
                    value={input.date}
                    onChange={e => handleChange(e)} />
            <button type='submit'>Submit</button>
            </form>
        </h2>
        </div>
    );
}

export default SearchBarForm;
