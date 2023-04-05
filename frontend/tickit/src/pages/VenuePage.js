import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import Nav from "../components/Nav";
import axios from "axios";

export default function VenuePage(props) {
  const [venues, setVenues] = useState(null);
  const [venueEvents, setVenueEvents] = useState(null);

  let { id } = useParams();

  useEffect(() => {
    let selectedVenue = props.venues[id];
    setVenues(selectedVenue);
  }, []);

  useEffect(() => {
    setVenueEvents([]);
    const getVenueEvents = async () => {
      for (let i = 0; i < venues.events.length; i++) {
        const res = await axios.get(venues.events[i]);
        let events = venueEvents;
        console.log(events);
        events.push(res.data);
        console.log(events);
        setVenueEvents([...events]);
      }
    };
    getVenueEvents();
  }, [venues]);

  return venues && venueEvents && props.events && props.venues ? (
    <div className="venue-page">
      <img className="tickit-logo" src={logo} />
      <Nav />
      <img className="venue-backdrop-header" src={venues.photo_url} />
      <section className="details-container">
        <h1>
          <span style={{ color: "white" }}>{venues.name}</span>
        </h1>
        <h1>{venues.location}</h1>
        <h5>
          Max. Occupancy:{" "}
          <span style={{ color: "#FFBD59" }}>{venues.occupancy}</span>
        </h5>
      </section>

      <section className="venue-events">
        {venueEvents ? (
          <div>
            {" "}
            {venueEvents.map((event) => {
              return (
                <div className="venue-events-rows">
                  <p>{event.artist}</p>
                  <div className="div-image">
                    <img className="venue-events-img" src={event.image_url} />
                  </div>
                  <p>{event.price}</p>
                  <p>{event.date}</p>

                  <p>
                    <span className="event-shadow">{event.name}</span>
                  </p>
                  <p>Available Tickets: {event.tickets_available}</p>
                </div>
              );
            })}{" "}
          </div>
        ) : null}
      </section>
    </div>
  ) : (
    <h2 className="loading">Loading . . . </h2>
  );
}
