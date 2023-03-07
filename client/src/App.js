import React, {useState} from "react";
import UserView from "./Views/UserView";
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import NotFound from './Views/Components/NotFound';
/* PARENT FROM USERVIEW 
Check calendarGrid comments for lines 11-28
*/

function App() {

  const [ request, setRequest ] = useState([]);
  const [ request2, setRequest2 ] = useState([]);
  const [ selectedCountry, setSelectedCountry ] = useState(0);

  console.log(selectedCountry);

  // requestMonth uses a specific route created for creating a new table
  const requestMonth = async (month) => {
    //NewRequest --> date(Month)
    //Get the veggies linked to Month
    try {
      let response = await fetch(`/veggies/${selectedCountry}/${month}`);
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

  const requestMonth2 = async (month) => {
    //NewRequest --> date(Month)
    //Get the veggies linked to Month and Country
    try {
      let response = await fetch(`/fruits/${selectedCountry}/${month}`);
      if (response.ok) {
        let data = await response.json();
        setRequest2(data);
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
          <Routes>
            <Route path="/" element={ <UserView requestMonthCb={text => requestMonth(text)}
                  setSelectedCountry ={setSelectedCountry}  selectedCountry={selectedCountry}
                  requestMonth2Cb={text => requestMonth2(text)}
                  monthVeggies = {request}
                  monthFruits={request2}/>}> 
            </Route>
            
        

            {/* <Route path=":month" element={
                  <UserView requestMonthCb={text => requestMonth(text)}
                  setSelectedCountry ={setSelectedCountry}  selectedCountry={selectedCountry}
                  requestMonth2Cb={text => requestMonth2(text)}
                  monthVeggies = {request}
                  monthFruits={request2}/>}>
            </Route> */}

            {/* <Route path=":month/veggies" element={
                      <VeggiesGrid monthVeggies = {request}/>
                    }>
            </Route> */}

            <Route path="*" element={
              <NotFound />
            }>
            </Route> 
          </Routes>
          
        </div>
    
      </div>
      </div>
  );
}

export default App;
