import Nav from "../components/Nav"
import logo from "../assets/venue.png"

export default function Venues(){
    return (
        <div className="home-page">
            <img src={logo}/>
            <Nav/>
        </div>
    )
}