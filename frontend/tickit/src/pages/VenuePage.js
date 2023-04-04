import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import logo from '../assets/logo.png'
import Nav from '../components/Nav'

export default function VenuePage(props) {

    const [venues, setVenues] = useState("")

    let { id } = useParams()

    useEffect(()=>{
        let selectedVenue = props.venues[id];
        setVenues(selectedVenue)
    },[venues, id])

    return venues && props.events && props.venues ? (
        <div className="venue-page">
            <img className="tickit-logo" src={logo}/>
            <Nav/>
            <img className="venue-backdrop" src={venues.photo_url}/>
            <section className="details-container">
            <h1><span style={{color: 'white'}}>{venues.name}</span></h1>
            <h1>{venues.location}</h1>
            <h1>Max. Occupancy: <span style={{color: '#FFBD59'}}>{venues.occupancy}</span></h1>
            </section>
            </div>
    ) : <h2 className="loading">Loading . . . </h2>
}