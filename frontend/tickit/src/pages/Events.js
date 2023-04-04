import Nav from "../components/Nav"
import logo from '../assets/event.png'
import Carousel, { CarouselItem } from "../Carousel"

export default function Events(props){
    return props.events && props.venues ? (
        <div className="event-page">
            <img className="tickit-logo" src={logo}/>
            <Nav/>
            <Carousel>
                {
                    props.venues.map((venue)=>(
                        <CarouselItem>
                            <div>
                            <img className="carousel-img" src={venue.photo_url}/>
                            <h1>{venue.name}</h1>
                            </div>
                        </CarouselItem>
                    ))
                }
            </Carousel>
            <div className="grid">
                {props.events.map((event) => (
                    <div className="card">
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
    ) : <h1>Loading . . . </h1>
}