import { NavLink } from "react-router-dom";
import covid from "../img/covid.svg";
import { IoIosArrowBack } from "react-icons/io";

const Header = () => (
  <nav className="navbar bg-blue f-gill fc-white">
    <div className="container-fluid d-flex justify-content-around">
      <div>
        <NavLink to="/">
          <IoIosArrowBack />
        </NavLink>

        <h1>C{<img className="covid" src={covid} alt="" />}vid-19</h1>
      </div>
      <div className="d-flex gap-sm-4">
        <NavLink className="navbar-brand" to="/">
          <box-icon
            name="microphone"
            animation="burst-hover"
            type="solid"
            color="#ffffff"
          ></box-icon>
        </NavLink>
        <NavLink className="navbar-brand fc-white" to="about">
          <box-icon
            name="cog"
            animation="burst-hover"
            color="#ffffff"
          ></box-icon>
        </NavLink>
      </div>
    </div>
  </nav>
);

export default Header;
