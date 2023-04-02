import "../../assets/Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Home page</h1>
      <article>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/signup">
          <button>Signup</button>
        </Link>
        <Link to="/contacts">
          <button>My contacts</button>
        </Link>
        <Link to="/about">
          <button>About me</button>
        </Link>
      </article>
    </>
  );
}
