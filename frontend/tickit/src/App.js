import './App.css';
import Nav from './components/Nav'
import Main from "./components/Main"
import Carousel, { CarouselItem } from "./Carousel"


function App() {
  return (
    <div className="App">
      
     <h1> Tick-iT </h1>
    <Nav/>
    <Main/>
    <Carousel>
        <CarouselItem> Item 1 </CarouselItem>
        <CarouselItem> Item 2 </CarouselItem>
        <CarouselItem> Item 3 </CarouselItem>
      </Carousel>
    </div>
  );
}

export default App;
