import { Outlet, Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <h1>LOGO</h1>

        <ul>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/leaders"}>
            <li>leaders</li>
          </Link>
          <Link to={"/data"}>
            <li>check data</li>
          </Link>
        </ul>
      </header>
      <Outlet />
    </>
  );
}
