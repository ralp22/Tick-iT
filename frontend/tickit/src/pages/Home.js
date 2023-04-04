import Nav from "../components/Nav"
import logo from "../assets/venue.png"
import Carousel, { CarouselItem } from "../Carousel"

export default function Venues(props){
    return props.venues ? (
        <div className="home-page">
            <img src={logo}/>
            <Nav/>
            <Carousel>
                {
                    props.venues.map((venue)=>(
                        <CarouselItem>
                            <div>
                            <img src={venue.photo_url}/>
                            <h1>{venue.name}</h1>
                            </div>
                        </CarouselItem>
                    ))
                }
            </Carousel>
            <div className="grid">
                {props.venues.map((venue) => (
                    <div className="card">
                    <img src={venue.photo_url}/>
                    <div className="banner">
                    <p>{venue.name}</p>
                    <p>{venue.location}</p>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    ) : <h1>Loading . . . </h1>
}