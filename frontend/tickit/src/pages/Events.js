import Nav from "../components/Nav"
import logo from '../assets/event.png'
import Carousel, { CarouselItem } from "../Carousel"
import { useNavigate } from "react-router-dom"

export default function Events(props){

    let navigate = useNavigate()

    const showVenue = (id) => {
    navigate(`/venues/${id}`)
    }
    const showEvent = (id) => {
    navigate(`${id}`)
    }
    
    return props.events && props.venues ? (
        <div className="event-page">
            <img className="tickit-logo" src={logo}/>
            <Nav/>
            <Carousel>
                {
                    props.venues.map((venue, id)=>(
                        <CarouselItem>
                            <div onClick={()=>{showVenue(id)}}>
                            <img className="carousel-img" src={venue.photo_url}/>
                            <h1>{venue.name}</h1>
                            </div>
                        </CarouselItem>
                    ))
                }
            </Carousel>
            <div className="grid">
                {props.events.map((event, id) => (
                    <div onClick={()=>{showEvent(id)}} className="card">
                    <img className="card-img" src={event.image_url}/>
                    <div className="banner">
                    <div className="venue-info">
                    <p>{event.name}</p>
                    <p>{event.location}</p>
                    </div>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    ) :  <h2 className="loading">Loading . . . </h2>
}