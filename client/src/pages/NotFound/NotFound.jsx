import "../../assets/NotFound.css";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <Link to="/">Home</Link>
      <h1>404 Not found</h1>
    </>
  );
}
