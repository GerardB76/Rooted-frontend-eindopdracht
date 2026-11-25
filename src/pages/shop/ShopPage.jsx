import {Link} from 'react-router-dom';
import workshopPhoto from '../../assets/rooted-bos.jpg';
import Button from '../../components/button/Button.jsx';
import {books} from '../../data/books.js';
import BookCover from './BookCover.jsx';
import './Shop.css';

const workshops = [
    {
        type: 'Workshop',
        title: 'Kennismaken met systemisch werk',
        description: 'Ontdek met eenvoudige oefeningen wat een systemische blik kan betekenen.',
    },
    {
        type: 'Training',
        title: 'Patronen in verbinding',
        description: 'Onderzoek in een kleine groep hoe patronen in relaties zichtbaar worden.',
    },
    {
        type: 'Workshop',
        title: 'Jouw plek in het geheel',
        description: 'Sta stil bij jouw plek binnen familie, werk en andere groepen.',
    },
];

function WorkshopCard({workshop, featured = false}) {
    return (
        <article className={featured ? 'workshop-card workshop-featured' : 'workshop-card'}>
            <img className="workshop-photo" src={workshopPhoto} alt="" width="220" height="164" />
            <div className="workshop-copy">
                <p className="shop-label">{workshop.type}</p>
                <h3>{workshop.title}</h3>
                <p>{workshop.description}</p>
                <Button className="workshop-order" disabled>Bestellen nog niet beschikbaar</Button>
            </div>
        </article>
    );
}

function ShopPage() {
    const [featuredWorkshop, ...otherWorkshops] = workshops;

    return (
        <div className="shop-page">
            <header className="shop-intro">
                <div className="content-container">
                    <h1>Shop</h1>
                    <p>Ontdek workshops, trainingen en boeken over systemisch werk.</p>
                </div>
            </header>
            <section className="content-container section-spacing" aria-labelledby="workshops-title">
                <div className="shop-section-heading">
                    <h2 id="workshops-title">Workshops &amp; trainingen</h2>
                    <p>Ruimte om te onderzoeken, ervaren en leren in een groep. Dit is een voorbeeld van het aanbod.</p>
                </div>
                <div className="workshop-list">
                    <WorkshopCard workshop={featuredWorkshop} featured />
                    <div className="workshop-secondary">
                        {otherWorkshops.map((workshop) => <WorkshopCard key={workshop.title} workshop={workshop} />)}
                    </div>
                </div>
            </section>
            <section className="shop-books section-spacing" aria-labelledby="boeken">
                <div className="content-container">
                    <div className="shop-section-heading">
                        <h2 id="boeken" tabIndex={-1}>Boeken</h2>
                        <p>Een selectie om thuis op je eigen tempo verder te ontdekken.</p>
                    </div>
                    <div className="shop-book-list">
                        {books.map((book) => (
                            <article className="shop-book-card" key={book.id}>
                                <BookCover book={book} />
                                <h3>{book.title}</h3>
                                <p className="shop-book-author">{book.author}</p>
                                <p>{book.introduction}</p>
                                <div className="shop-book-action">
                                    <p className="shop-price">{book.price} <small>Uitgeversprijs</small></p>
                                    <Link to={`/shop/${book.id}`} aria-label={`Bekijk boek: ${book.title}`}>
                                        Bekijk boek <span aria-hidden="true">↗</span>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ShopPage;
