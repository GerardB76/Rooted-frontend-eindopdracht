import './Hero.css';

function Hero() {
    return (
        <section className="hero" aria-labelledby="hero-title">
            <div className="content-container">
                <h1 id="hero-title" className="hero-title">Rooted</h1>
                <p className="hero-payoff">alles over systemisch werk</p>
                <p className="hero-intro">Ontdek hoe jouw plek in het grotere geheel invloed heeft op je leven.</p>
                <a className="button hero-link" href="#systemisch-werk">Ontdek systemisch werk</a>
            </div>
        </section>
    );
}

export default Hero;
