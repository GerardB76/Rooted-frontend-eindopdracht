import './App.css';
import AboutSection from './components/about-section/AboutSection.jsx';
import Header from './components/header/Header.jsx';
import Hero from './components/hero/Hero.jsx';
import HomeArticles from './components/home-articles/HomeArticles.jsx';
import QuoteCarousel from './components/quote-carousel/QuoteCarousel.jsx';

function App() {
    return (
        <div className="site-layout">
            <Header />
            <main id="main-content" className="site-main">
                <Hero />
                <HomeArticles />
                <AboutSection />
                <QuoteCarousel />
            </main>
            <footer className="site-footer">
                <div className="content-container"></div>
            </footer>
        </div>
    );
}

export default App;
