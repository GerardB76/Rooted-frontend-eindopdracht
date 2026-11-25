import AboutSection from '../../components/about-section/AboutSection.jsx';
import Hero from '../../components/hero/Hero.jsx';
import HomeArticles from '../../components/home-articles/HomeArticles.jsx';
import QuoteCarousel from '../../components/quote-carousel/QuoteCarousel.jsx';
import ServicesSection from '../../components/services-section/ServicesSection.jsx';

function HomePage() {
    return (
        <>
            <Hero />
            <HomeArticles />
            <AboutSection />
            <QuoteCarousel />
            <ServicesSection />
        </>
    );
}

export default HomePage;
