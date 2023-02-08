import { NavLink } from 'react-router-dom';
import './css/style.css';
import { MdChevronLeft } from 'react-icons/md';
import { FaMicrophone, FaCog } from 'react-icons/fa';

const MainHeader = () => (
  <div className="display__flex">
    <NavLink to="/">
      <MdChevronLeft size={60} />
      {' '}
    </NavLink>

    <div className="header">
      <h1 className="page__header">Country Stats</h1>
    </div>
    <nav>
      <ul>
        {/* <li>
          <NavLink exact to="/">
            Countries
          </NavLink>
        </li> */}
        {/* <li>
          <NavLink to="/countrieslist">Countries List</NavLink>
        </li> */}
      </ul>
    </nav>
    <div className="icons">
      <FaMicrophone size={30} />
      <FaCog size={30} />
    </div>
  </div>
);

export default MainHeader;
