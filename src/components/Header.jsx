import { NavLink } from "react-router-dom";

const Header = () => (
  <nav className="navbar navbar-light bg-secondary">
    <div className="container-fluid">
      <div>
        <h1>
          C<box-icon type="solid" name="virus" animation="spin"></box-icon>
          vid-19
        </h1>
      </div>
      <div>
        <NavLink className="navbar-brand" to="/">Countries</NavLink>
        <NavLink className="navbar-brand" to="about">About</NavLink>
      </div>
    </div>
  </nav>
);

export default Header;
