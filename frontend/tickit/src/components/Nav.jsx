import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import events from "../assets/events.png";

export default function Nav() {
  return (
    <section
      style={{
        top: 0,
        position: "sticky",
        background: "black",
        border: "2px solid black",
        padding: "10px",
        display: "inline-block",
        alignItems: "center",
        zIndex: 1,
        width: "100vw",
      }}
    >
      <Link to="/">
        <img style={{ maxHeight: "30px" }} src={logo} />
      </Link>
      <Link to="/events">
        <img style={{ maxHeight: "30px" }} src={events} />
      </Link>
      <Link to="/login">
        <button>Log In</button>
      </Link>
    </section>
  );
}
