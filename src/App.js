import React, { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Wedding from './components/Wedding'
import DaysToGo from './components/DaysToGo'
import Invitation from './components/Invitation'
import Location from './components/Location'
import Details from './components/Details'
import Contact from './components/Contact'
import SpecialInvitation from './components/SpecialInvition'
import Footer from './components/Footer'

function App() {

  const [marriageResponse, setMarriageResponse] = useState({});

  const getResumeData = async () => {
    try {
      let response = await fetch('/marraigeData.json');
      response = await response.json();
      setMarriageResponse({ ...response });
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getResumeData();
  },[]);

  return (
    <div className="App">
      <Header data= { marriageResponse.commanImages }/>
      <Wedding images = { marriageResponse.commanImages} data = { marriageResponse.main }/>
      <DaysToGo data = { marriageResponse.dateAndTime}/>
      <Invitation  images = { marriageResponse.rimages} data = {marriageResponse.main} />
      <Location data = {marriageResponse.ceremonyDetails}/>
      <Details data = {marriageResponse.pujaDetails}/>
      <Contact />
      <SpecialInvitation data = {marriageResponse.specialInviation}/>
      <Footer data = {marriageResponse.social}/>
    </div>
  );
}

export default App;
