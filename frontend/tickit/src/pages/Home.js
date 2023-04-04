import Nav from "../components/Nav"
import logo from "../assets/venue.png"
import Carousel, { CarouselItem } from "../Carousel"

export default function Venues(props){
    return props.venues && props.events ? (
        <div className="home-page">
            <img className="tickit-logo" src={logo}/>
            <Nav/>
            <Carousel>
                {
                    props.events.map((event)=>(
                        <CarouselItem>
                            <div>
                            <img className="carousel-img" src={event.image_url}/>
                            <h1>{event.name}</h1>
                            </div>
                        </CarouselItem>
                    ))
                }
            </Carousel>
            <div className="grid">
                {props.venues.map((venue) => (
                    <div className="card">
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
    ) : <h1>Loading . . . </h1>
}