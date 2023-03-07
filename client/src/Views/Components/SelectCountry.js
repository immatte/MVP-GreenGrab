import React, {useState, useEffect} from 'react';
import './SelectCountry.css';

/* CHILD FROM USERVIEW */

function SelectCountry(props) {

const [countries, setCountries ] = useState([]);

useEffect(() => {
    getCountries();
  }, []);

//get all countries
async function getCountries() {
    try {
      let response = await fetch('/countries');
      if (response.ok) {
          let countries = await response.json();
          setCountries(countries);
      } else {
          console.log(`Server error: ${response.status} ${response.statusText}`);
      }
  } catch (err) {
      console.log(`Server error: ${err.message}`);
  }
  }

//Search bar built before the dropdown SELECT
// let [ input, setInput ] = useState("");
// async function searchCountry(e){
//             e.preventDefault()
//             const response = await fetch("/search?search="+input)
//             const data = await response.json()
//             setCountries(data)
//             console.log(countries);
//         }
        
// const handleChange = event => {
//      setInput(event.target.value);
//         };


const handleSelectChange = ( event ) => {
    
    let  value  = event.target.value;
    console.log(value);
    
    props.setSelectedCountry(value);
    console.log(event);
}

    return (
        <div className="SelectBackground">
            <div className="card-sm">
            <select className = "form-select form-select-" aria-label=".form-select-lg example"
                
                onChange = { handleSelectChange }
                
            >
         <option selected>Choose your country... </option> 
            { countries.map(country => (
                <option value={country.id}>{country.country_name}</option>
                )) }
</select>
{/*FORM built for the searchbar done before:
<form onSubmit={searchCountry}>
                <input 
                    type="text" 
                    name="input" 
                    value={input}
                    onChange={e => handleChange(e)} />
            <button type='submit'>Submit</button>
            </form> */}
    </div>
    </div>
        );
}

export default SelectCountry;
