import { Route, Routes} from 'react-router-dom'
import axios from 'axios'
import {useState,useEffect} from 'react'
import Events from "../pages/Events"
import Venues from "../pages/Home"


export default function Main(){

  const [ venues, setVenues ] = useState("")
  const [ events, setEvents ] = useState("")
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
        <Routes>
            <Route path="/" element={<Venues 
            venues={venues}
            events={events}/>}></Route>
            <Route path="/events" element={<Events 
            venues={venues}
            events={events}
            />}></Route>
        </Routes>
    )
}