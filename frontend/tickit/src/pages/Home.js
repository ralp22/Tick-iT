import Nav from "../components/Nav"
import logo from "../assets/venue.png"
import Carousel, { CarouselItem } from "../Carousel"

export default function Venues(props){
    return (
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
        </div>
    )
}