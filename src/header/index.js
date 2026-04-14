
import { Link } from 'react-router-dom';
import WetherWidget from '../body/components/WetherWidget';
import './style.css';

function Header() {
    return (
        <header className="header">
          <div className="wrap-logo">
            <Link className="logo" to="/">
              Шапка проекта
            </Link>
          </div>
          <nav>
            <Link className="AppLink" to="/course">
              Курс
            </Link>
            <Link className="AppLink" to="https://react.dev/">
              React
            </Link>
            <Link className="AppLink" to="/about">
              О нас
            </Link>

            <WetherWidget />

          </nav>
        </header>
    );
}
export default Header;