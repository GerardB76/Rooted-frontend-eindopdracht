import RatesBlock from '../rates-block/RatesBlock.jsx';
import './ServicesSection.css';

const services = [
    {
        title: 'Individuele begeleiding',
        description: 'Sta stil bij een persoonlijke vraag en onderzoek terugkerende patronen.',
    },
    {
        title: 'Familieopstellingen',
        description: 'Verken jouw plek en de verbindingen binnen je familiesysteem.',
    },
    {
        title: 'Workshops',
        description: 'Maak samen met anderen kennis met een systemische manier van kijken.',
    },
];

function ServicesSection() {
    return (
        <section id="diensten" className="section-spacing" aria-labelledby="services-title" tabIndex={-1}>
            <div className="content-container">
                <h2 id="services-title">Verkennen op jouw manier</h2>
                <div className="services-list">
                    {services.map((service) => (
                        <article className="service-card" key={service.title}>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </article>
                    ))}
                </div>
                <RatesBlock />
            </div>
        </section>
    );
}

export default ServicesSection;
