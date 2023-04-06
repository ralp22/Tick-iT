import './App.css';
import Events from "./pages/Events"
import Venues from "./pages/Home"
import VenuePage from './pages/VenuePage'
import EventPage from './pages/EventPage'
import LoginPage from './pages/LoginPage'
import axios from 'axios' 
import React, { useState, useEffect } from 'react'
import {Route, Routes} from 'react-router-dom'

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
    <Routes>
            <Route path="/" element={<Venues 
            venues={venues}
            events={events}/>}></Route>
            <Route path="/events" element={<Events 
            venues={venues}
            events={events}
            />}></Route>
            <Route path="/venues/:id" element={<VenuePage 
            venues={venues}
            events={events}/>}></Route>
            <Route path="/events/:id" element={<EventPage 
            venues={venues}
            events={events}/>}></Route>
            <Route path="/login" element={<LoginPage/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
