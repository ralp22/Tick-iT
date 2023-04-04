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

    return props.events && props.venues ? (
        <div className="event-page">
            <img className="tickit-logo" src={logo}/>
            <Nav/>
            </div>
    ) : <h2 className="loading">Loading . . . </h2>
}