import {useState} from 'react';
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
                        <li><a className="navigation-link" href="/" aria-current="page">Home</a></li>
                        <li><button className="navigation-link" type="button" disabled>Diensten</button></li>
                        <li><button className="navigation-link" type="button" disabled>Blog</button></li>
                        <li><button className="navigation-link" type="button" disabled>Shop</button></li>
                        <li><button className="navigation-link" type="button" disabled>Contact</button></li>
                        <li><button className="button" type="button" disabled>Inloggen</button></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
