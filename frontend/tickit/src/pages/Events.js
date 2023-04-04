import Nav from "../components/Nav"
import logo from '../assets/event.png'
import Carousel, { CarouselItem } from "../Carousel"

export default function Events(props){
    return props.events? (
        <div className="event-page">
            <img className="tickit-logo" src={logo}/>
            <Nav/>
            <Carousel>
                {
                    props.events.map((event)=>(
                        <CarouselItem>
                            <div>
                            <img src={event.image_url}/>
                            <h1>{event.name}</h1>
                            </div>
                        </CarouselItem>
                    ))
                }
            </Carousel>
        </div>
    ) : <h1>Loading . . . </h1>
}