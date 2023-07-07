import './Header.css'; // Import CSS file
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Feedback</h1>
      <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/feedback">Feedback</NavLink>
        </li>
        
      </ul>
      </nav>
    </header>
  );
}
export default Header;