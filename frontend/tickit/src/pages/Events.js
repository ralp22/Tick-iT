import Nav from "../components/Nav"
import logo from '../assets/event.png'

export default function Events(){
    return (
        <div className="event-page">
            <img src={logo}/>
            <Nav/>
        </div>
    )
}