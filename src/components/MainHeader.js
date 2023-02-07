import { NavLink } from 'react-router-dom';
import './css/style.css';

const MainHeader = () => (
  <div className="display__flex">
    <div className="header">
      <h1 className="page__header">Country Stats</h1>
    </div>
    <nav>
      <ul>
        <li>
          <NavLink exact to="/">
            Countries
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/countrieslist">Countries List</NavLink>
        </li> */}
      </ul>
    </nav>
  </div>
);

export default MainHeader;
