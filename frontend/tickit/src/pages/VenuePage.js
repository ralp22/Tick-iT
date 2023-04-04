import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import logo from '../assets/logo.png'
import Nav from '../components/Nav'
import axios from 'axios'

export default function VenuePage(props) {

    const [venues, setVenues] = useState(null)
    const [venueEvents, setVenueEvents] = useState(null)

    let { id } = useParams()

    useEffect(()=>{
        let selectedVenue = props.venues[id];
        setVenues(selectedVenue)
    },[])

    useEffect(()=>{
        setVenueEvents([])
        const getVenueEvents = async () => {
            for(let i = 0; i < venues.events.length; i++){
                const res = await axios.get(venues.events[i])
                let events = venueEvents
                console.log(events)
                events.push(res.data)
                console.log(events)
                setVenueEvents([...events])
            }
        }
        getVenueEvents()
    }, [venues])



    return venues && venueEvents && props.events && props.venues ? (
        <div className="venue-page">
            <img className="tickit-logo" src={logo}/>
            <Nav/>
            <img className="venue-backdrop" src={venues.photo_url}/>
            <section className="details-container">
            <h1><span style={{color: 'white'}}>{venues.name}</span></h1>
            <h1>{venues.location}</h1>
            <h1>Max. Occupancy: <span style={{color: '#FFBD59'}}>{venues.occupancy}</span></h1>
            </section>

            <section>
                <h1>Venue Events</h1>
                {
                    (venueEvents) ?
                    <div> {
                    venueEvents.map((event)=>{
                        
                        return (
                        <div>
                            <h1>{event.name}</h1>
                            <h1>{event.artist}</h1>
                            <h1>{event.date}</h1>
                            <h1>{event.price}</h1>
                        </div>)
                        })
                    } </div> : null
                }


            </section>
            </div>
    ) : <h2 className="loading">Loading . . . </h2>
}