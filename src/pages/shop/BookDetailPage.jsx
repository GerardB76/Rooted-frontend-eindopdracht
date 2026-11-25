import {Link, useParams} from 'react-router-dom';
import Button from '../../components/button/Button.jsx';
import {articles} from '../../data/articles.js';
import {bookPriceDate, books} from '../../data/books.js';
import BookCover from './BookCover.jsx';
import './Shop.css';

function BookDetailPage() {
    const {bookId} = useParams();
    const book = books.find((item) => item.id === bookId);

    if (!book) {
        return (
            <section className="content-container section-spacing">
                <h1>Boek niet gevonden</h1>
                <Link to="/shop#boeken">Terug naar de boeken</Link>
            </section>
        );
    }

    const relatedArticle = articles.find((article) => article.id === book.articleId);

    return (
        <article className="content-container section-spacing book-detail" aria-labelledby="book-title">
            <Link className="shop-back-link" to="/shop#boeken">← Terug naar de shop</Link>
            <div className="book-detail-layout">
                <div className="book-detail-visual">
                    <BookCover book={book} />
                    <Button className="book-favorite" aria-label="Bewaren als favoriet" disabled>
                        <span aria-hidden="true">♡</span>
                    </Button>
                    <p className="book-favorite-note">Bewaren als favoriet kan straks na inloggen.</p>
                </div>
                <div className="book-detail-copy">
                    <h1 id="book-title">{book.title}</h1>
                    <p className="book-subtitle">{book.subtitle}</p>
                    <dl className="book-summary">
                        <div><dt>Geschreven door</dt><dd>{book.author}</dd></div>
                        <div><dt>Vermelde uitgave</dt><dd>{book.edition}</dd></div>
                        <div><dt>ISBN</dt><dd>{book.isbn}</dd></div>
                    </dl>
                    <section className="book-detail-section" aria-labelledby="about-book">
                        <h2 id="about-book">Over dit boek</h2>
                        {book.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                        <h3>Voor wie?</h3>
                        <p>{book.readership}</p>
                    </section>
                    <div className="book-order">
                        <p className="shop-price">
                            {book.price}
                            <small>Uitgeversprijs op {bookPriceDate}</small>
                        </p>
                        <Button disabled>Bestellen nog niet beschikbaar</Button>
                    </div>
                    <section className="book-detail-section" aria-labelledby="book-facts">
                        <h2 id="book-facts">Boekgegevens</h2>
                        <dl className="book-facts">
                            {book.facts.map(([label, value]) => (
                                <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
                            ))}
                        </dl>
                        <a href={book.publisherUrl}>Boekgegevens bij {book.publisher}</a>
                    </section>
                    {relatedArticle && (
                        <section className="book-detail-section" aria-labelledby="related-book-article">
                            <h2 id="related-book-article">Verder lezen op Rooted</h2>
                            <p>{book.articleDescription}</p>
                            <Link className="book-related-link" to={`/blog/${relatedArticle.id}`}>
                                {relatedArticle.title}
                            </Link>
                        </section>
                    )}
                </div>
            </div>
        </article>
    );
}

export default BookDetailPage;
