import React, {useState} from "react";
import UserView from "./UserView";
import './App.css';

/* PARENT FROM USERVIEW 
Check calendarGrid comments for lines 11-28
*/

function App() {

  let [request, setRequest] = useState([]);

  // requestMonth uses a specific route created for creating a new table
  const requestMonth = async month => {
    //NewRequest --> date(Month)
    //Get the veggies linked to Month
    try {
      let response = await fetch(`api/veggies/${month}`);
      if (response.ok) {
        let data = await response.json();
        setRequest(data);
        console.log(data)
      } else {
        console.log(`Server error: ${response.status}: ${response.statusText}`);
      }
    } catch (err) {
      console.log(`Server error: ${err.message}`);
    }
    
  };

  return (
    <div>
      <div className="App">
        <h1 className="Apptitle">
          GreenGrab
        </h1>
        <h2 className="container">
          Vegetables for your season
        </h2>
        <div>
          <UserView requestMonthCb={text => requestMonth(text)} monthVeggies = {request}/>
        </div>
    
      </div>
      </div>
  );
}

export default App;
