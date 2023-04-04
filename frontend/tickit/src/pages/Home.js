import Nav from "../components/Nav"
import logo from "../assets/venue2.png"
import Carousel, { CarouselItem } from "../Carousel"
import { useNavigate } from "react-router-dom"

export default function Venues(props){

    let navigate = useNavigate()

    const showVenue = (id) => {
    navigate(`/venues/${id}`)
    }
    const showEvent = (id) => {
    navigate(`/events/${id}`)
    }

    return props.venues && props.events ? (
        <div className="home-page">
            <img className="tickit-logo2" src={logo}/>
            <Nav/>
            <Carousel>
                {
                    props.events.map((event, id)=>(
                        <CarouselItem>
                            <div onClick={()=>{showEvent(id)}}>
                            <img className="carousel-img" src={event.image_url}/>
                            <h1>{event.name}</h1>
                            </div>
                        </CarouselItem>
                    ))
                }
            </Carousel>
            <div className="grid">
                {props.venues.map((venue, id) => (
                    <div onClick={()=>{showVenue(id)}} className="card">
                    <img className="card-img" src={venue.photo_url}/>
                    <div className="banner">
                    <div className="venue-info">
                    <p>{venue.name}</p>
                    <p>{venue.location}</p>
                    </div>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    ) :  <h2 className="loading">Loading . . . </h2>
}