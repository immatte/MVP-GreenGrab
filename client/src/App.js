import React, {useState} from "react";
import UserView from "./UserView";
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import VeggiesGrid from "./VeggiesGrid";
import NotFound from "./NotFound";
/* PARENT FROM USERVIEW 
Check calendarGrid comments for lines 11-28
*/

function App() {

  const [ request, setRequest ] = useState([]);
  const [ request2, setRequest2 ] = useState([]);

  // requestMonth uses a specific route created for creating a new table
  const requestMonth = async (month) => {
    //NewRequest --> date(Month)
    //Get the veggies linked to Month
    try {
      let response = await fetch(`/veggies/${country}/${month}`);
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
    //Get the veggies linked to Month
    try {
      let response = await fetch(`/fruits/${month}`);
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
            <Route path="/" element={
               <UserView requestMonthCb={text => requestMonth(text)}
               requestMonth2Cb={text => requestMonth2(text)}
               monthVeggies = {request}
               monthFruits={request2}/>}>    

               {/* <Route path="*" element={
              <NotFound />
            }>
            </Route>        */}

            </Route>
            
        

            <Route path=":month" element={
                  <UserView requestMonthCb={text => requestMonth(text)}
                  requestMonth2Cb={text => requestMonth2(text)}
                  monthVeggies = {request}
                  monthFruits={request2}/>}>
            </Route>

            <Route path=":month/veggies" element={
                      <VeggiesGrid monthVeggies = {request}/>
                    }>
            </Route>

            {/* <Route path="*" element={
              <NotFound />
            }>
            </Route>  */}
          </Routes>
          
        </div>
    
      </div>
      </div>
  );
}

export default App;
