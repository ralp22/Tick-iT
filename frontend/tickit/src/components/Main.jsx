import { Route, Routes} from 'react-router-dom'
import Events from "../pages/Events"
import Venues from "../pages/Home"


export default function Main(){

    return (
        <Routes>
            <Route path="/" element={<Venues/>}></Route>
            <Route path="/events" element={<Events/>}></Route>
        </Routes>
    )
}