import { Link } from 'react-router-dom'

export default function Nav(){
    return (
<section>
<Link to="/"><button> Tick-iT </button></Link>
<Link to="/venues"><button>Venues</button></Link>
<Link to="/events"><button>Events</button></Link>
</section>
    )
}