import React, {useState, useEffect} from 'react';
import './SearchBarForm.css';
import Select from 'react-select';

/* CHILD FROM USERVIEW */

//Work in progress : This child(SearchBarForm) is currently not being used but could be for a future feature

function SearchBarForm() {
//     let [ input, setInput ] = useState("");
//     let [ country, setCountry ] = useState([]);
    
    // const handleSubmit = event => {
    //     let input = `SELECT MONTH(${input}) AS Month;`;
    //     event.preventDefault();
    //     props.addRequestCb(input);
    //     setInput("");
    // };

//     async function searchCountry(e){
//         e.preventDefault()
//         const response = await fetch("/search?search="+input)
//         const data = await response.json()
//         setCountry(data)
//     }
    
//     const handleChange = event => {
//         setInput(event.target.value);
//     };

//     const options = countries.map((country, index) => {
//         return {
//            label: country.country_name,
//            value: country,
//            key: index
//         }
//    })
   
//     return (
//       <div>
//         <div>
//             Search bar
//             <form onSubmit={searchCountry}>
//                 <input 
//                     type="text" 
//                     name="input" 
//                     value={input}
//                     onChange={e => handleChange(e)} />
//             <button type='submit'>Submit</button>
//             </form>
           {/* <form>
            <select placeholder="Nenhum selecionado" >
    {countries.map((country) => {
        <option value={country.country_name}>
            {`${country.country_name}`}
        </option>
    })}
           </select>
           </form> */}

           {/* <form>
           <Select name={input}>
    {countries.map(country =>
      <option key={country.id} value={country.id}>{country.country_name}</option>
    )};
  </Select>
           </form> */}
           

//             <div className="dropDown text-decoration-none">{
//                 countries.map(country => 
//                 <div>
//                     <h4>{`${country.country_name}`}</h4>
                    
//                 </div>)
//                 }
                
//                 </div>    
    
//         </div>
//       </div>
//     );
// }

// export default SearchBarForm;
// let [ input, setInput ] = useState("");
const [countries, setCountries ] = useState([]);
const [ selectedCountry, setSelectedCountry ] = useState([]);

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


// const suppliers = [
//     { label: 'Facebook', value: 'Facebook' },
//     { label: 'Instagram', value: 'Instagram' },
//     { label: 'YouTube', value: 'YouTube' },
// ]

// const DBSuppliers = ['Facebook', 'Instagram', 'YouTube'];

// const DBSuppliers2 = [
//     { id: 123, name: 'Facebook', adress: 'FB Address' },
//     { id: 124, name: 'Instagram', adress: 'IG Address' },
//     { id: 125, name: 'Youtube', adress: 'YT Address' },
// ]



    const handleSelectChange = ( event ) => {
        // setSelectedCountry(selectedCountry);
        console.log(event);
    }

    return (
        <div className = "container">
            <Select
                // defaultValue = { suppliers[0] }
                options = { countries.map(country => ({ label: country.country_name, value: country.id })) }
                onChange = { handleSelectChange }
            />

{/* <form onSubmit={searchCountry}>
                <input 
                    type="text" 
                    name="input" 
                    value={input}
                    onChange={e => handleChange(e)} />
            <button type='submit'>Submit</button>
            </form> */}
    </div>
        );
}

export default SearchBarForm;
