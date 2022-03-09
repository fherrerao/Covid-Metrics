import { NavLink } from "react-router-dom";
import covid from "../img/covid.svg";

const Header = () => (
  <nav className="navbar bg-blue f-gill fc-white">
    <div className="container-fluid d-flex justify-content-around">
      <div>
        <h1>C{<img className="covid" src={covid} alt="" />}vid-19</h1>
      </div>
      <div>
        <NavLink className="navbar-brand fc-white h-link" to="/">
          Countries
        </NavLink>
        <NavLink className="navbar-brand fc-white h-link" to="about">
          About
        </NavLink>
      </div>
    </div>
  </nav>
);

export default Header;
