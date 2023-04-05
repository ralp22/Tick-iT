import logo from '../assets/logo.png'
import Nav from '../components/Nav'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'

export default function EventPage(props) {

    const [events, setEvents] = useState(null)

    let { id } = useParams()

    useEffect(()=>{
        let selectedEvent = props.events[id];
        setEvents(selectedEvent)
    },[])



    return events && props.events && props.venues ? (
        <div className="event-page">
            <img className="tickit-logo" src={logo}/>
            <Nav/>
            <img className="venue-backdrop" src={events.image_url}/>
            <section className="details-container">
            <h1><span style={{color: 'white'}}>{events.name}</span></h1>
            <h1><span style={{color: 'white'}}>{events.artist}</span></h1>
            <h1>{events.date}</h1>
            <h1>Price: <span style={{color: '#FFBD59'}}>{events.price}</span></h1>
            </section>

            </div>
    ) :  <h2 className="loading">Loading . . . </h2>
}