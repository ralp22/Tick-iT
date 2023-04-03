import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import events from "../assets/events.png"


export default function Nav(){
    return (
<section style={{background: 'black', border: '2px solid black', padding: '10px', display: 'inline-block', alignItems: 'center'}}>
<Link to="/"><img style={{maxHeight: '30px'}} src={logo}/></Link>
<Link to="/events"><img style={{maxHeight: '30px'}} src={events}/></Link>
</section>
    )
}