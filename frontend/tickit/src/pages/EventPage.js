import logo from '../assets/logo.png'
import Nav from '../components/Nav'

export default function EventPage(props) {
    return props.events && props.venues ? (
        <div className="event-page">
            <img className="tickit-logo" src={logo}/>
            <Nav/>
            </div>
    ) :  <h2 className="loading">Loading . . . </h2>
}