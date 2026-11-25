import {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import logo from '../../assets/rooted-logo.png';
import './Header.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    return (
        <header className="site-header">
            <div className="content-container header-content">
                <a className="logo-link" href="/" aria-label="Rooted — naar de homepage">
                    <img className="site-logo" src={logo} alt="Rooted — systemisch werken" />
                </a>
                <button
                    className="button button-secondary menu-toggle"
                    type="button"
                    aria-expanded={menuOpen}
                    aria-controls="main-navigation"
                    onClick={toggleMenu}
                >
                    {menuOpen ? 'Sluiten' : 'Menu'}
                </button>
                <nav
                    id="main-navigation"
                    className={menuOpen ? 'main-navigation is-open' : 'main-navigation'}
                    aria-label="Hoofdnavigatie"
                >
                    <ul className="navigation-list">
                        <li><NavLink className="navigation-link" to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink></li>
                        <li><Link className="navigation-link" to="/#diensten" onClick={() => setMenuOpen(false)}>Diensten</Link></li>
                        <li><NavLink className="navigation-link" to="/blog" onClick={() => setMenuOpen(false)}>Blog</NavLink></li>
                        <li><NavLink className="navigation-link" to="/shop" onClick={() => setMenuOpen(false)}>Shop</NavLink></li>
                        <li><button className="navigation-link" type="button" disabled>Contact</button></li>
                        <li><NavLink className="button" to="/inloggen" onClick={() => setMenuOpen(false)}>Inloggen</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
