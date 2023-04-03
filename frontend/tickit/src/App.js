import './App.css';
import Main from "./components/Main"
import axios from 'axios' 
import React, { useState, useEffect } from 'react'


function App() {

  const [ venues, setVenues ] = useState(null)
  const [ events, setEvents ] = useState(null)
  const BASE_URL = "http://localhost:8000"
  useEffect(()=>{
    const getVenues = async () => {
      const res = await axios.get(`${BASE_URL}/venues/`)
      console.log(res.data)
      setVenues(res.data)
    }
    getVenues()
  }, [])
  useEffect(()=>{
    const getEvents = async () => {
      const res = await axios.get(`${BASE_URL}/events/`)
      console.log(res.data)
      setEvents(res.data)
    }
    getEvents()
  }, [])

  return (
    <div className="App">
    <Main venues={venues}
          events={events}/>
    </div>
  );
}

export default App;
