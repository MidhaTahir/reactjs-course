import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <h1>React Router</h1>
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