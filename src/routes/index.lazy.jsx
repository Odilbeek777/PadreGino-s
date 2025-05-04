import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { Button } from "antd";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="index">
      <div className="index-brand">
        <h1>Padre Gino's</h1>
        <p>Pizza & Art at a location near you</p>
      </div>
      <ul>
        <li>
          <Button className="btn">
            <Link to="/order">Order</Link>
          </Button>
        </li>
        <li>
          <Button className="btn">
            <Link to="/past">past</Link>
          </Button>
        </li>
        <li>
          <Button className="btn">
            <Link to="/contact">contact</Link>
          </Button>
        </li>
        {/* <li>
          <Link to="/past">Past Orders</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li> */}
      </ul>
    </div>
  );
}
