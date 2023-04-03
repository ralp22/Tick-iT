import './App.css';
import Nav from './components/Nav'
import Main from "./components/Main"

import Carousel, { CarouselItem } from "./Carousel"

import axios from 'axios' 
import React, { useState, useEffect } from 'react'


// const Axios = axios.create({
//   baseURL: `${BASE_URL}`,
//   timeout: 1000,

//   headers: { 
//       'Content-Type': 'application/json',
//       'Access-Control-Allow-Origin': '*'
//    }  
// })

>>>>>> main


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
     <h1> Tick-iT </h1>
    <Nav/>
    <Main/>
    <Carousel>
        <CarouselItem> Item 1 </CarouselItem>
        <CarouselItem> Item 2 </CarouselItem>
        <CarouselItem> Item 3 </CarouselItem>
      </Carousel>
    </div>
  );
}

export default App;
