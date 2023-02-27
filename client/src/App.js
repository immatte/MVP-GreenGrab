import React, {useState} from "react";
import UserView from "./UserView";
import './App.css';


function App() {

  let [request, setRequest] = useState([]);

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
      <div>
        <h1 className="Apptitle">
          GreenGrab
        </h1>
        <h2>
          Vegetables and Fruit for your season
        </h2>
        <div>
          <UserView requestMonthCb={text => requestMonth(text)} monthVeggies = {request} />
        </div>
        <h3>
          Simplified Calendar visualization
        </h3>
        {/* <img className = 'background' src='https://www.pixelstalk.net/wp-content/uploads/images3/Funny-Panda-Backgrounds.jpeg' alt="panda background"/> */}
      </div>
      </div>
  );
}

export default App;
