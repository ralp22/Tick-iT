import React, {useState, useEffect} from 'react'; 
//import { Swipeable } from "react-swipeable";
import "./carousel.css";

export const CarouselItem = ({children, width}) => {
    return (
        <div className="carousel-item" style={{ width:width }}>
            {children}
        </div>
    );
};

const Carousel = ({children}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const [paused, setpaused] = useState(false);

    const updateIndex = (newIndex) => { 
        if (newIndex < 0) {
            newIndex = React.Children.count(children) -1;
        } else if (newIndex >= React.Children.count(children)){
            newIndex = 0;
        }
            setActiveIndex(newIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if(!paused) {
            updateIndex(activeIndex + 1);}
        }, 5500); 
        return () => {
            if (interval) {
                clearInterval(interval)
            }
        }
    });
// const handlers = Swipeable({
//     onSwipedLeft: () => updateIndex(activeIndex + 1),
//     onSwipedRight: () => updateIndex(activeIndex - 1)
// });
    return (
        <div 
        // {...handlers}
        className="carousel"
            onMouseEnter={() => setpaused(true)}
            onMouseLeave={() => setpaused(false)}>
            <div className="inner" 
            style={{ transform: `translateX(-${activeIndex * 100}%)`}}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%"});
                })}
            </div>
            <div className="indicators">
                <button 
                onClick={() => {
                updateIndex(activeIndex - 1);
            }}
            >
                Previous
            </button>
            <button onClick={() => {
                updateIndex(activeIndex + 1);
            }}
            >
                Next
            </button>
            </div>

        </div>
    )
}

export default Carousel