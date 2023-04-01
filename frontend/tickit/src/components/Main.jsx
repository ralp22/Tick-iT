import { Route, Routes} from 'react-router-dom'
import Events from "../components/Events"
import Venues from "../components/Venues"


export default function Main(){

    return (
        <Routes>
            <Route path="/"></Route>
            <Route path="/events" element={<Events/>}></Route>
            <Route path="/venues" element={<Venues/>}></Route>
        </Routes>
    )
}