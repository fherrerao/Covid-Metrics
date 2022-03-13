import { Link } from 'react-router-dom';
import covid from '../img/covid.svg';

const Header = () => (
  <nav className="navbar bg-blue f-gill fc-white">
    <div className="container-fluid d-flex justify-content-around">
      <div>
        <h1>
          C
          <img className="covid" src={covid} alt="" />
          vid-19
        </h1>
      </div>
      <div className="d-flex gap-sm-4">
        <Link className="navbar-brand" to="/">
          <box-icon name="microphone" animation="burst-hover" type="solid" color="#ffffff">{ }</box-icon>
        </Link>
        <Link className="navbar-brand fc-white" to="/">
          <box-icon name="cog" animation="burst-hover" color="#ffffff">{ }</box-icon>
        </Link>
      </div>
    </div>
  </nav>
);

export default Header;
