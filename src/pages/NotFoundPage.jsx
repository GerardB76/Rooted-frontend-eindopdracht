import {Link} from 'react-router-dom';

function NotFoundPage({article = false}) {
    return (
        <section className="content-container section-spacing">
            <h1>{article ? 'Artikel niet gevonden' : 'Pagina niet gevonden'}</h1>
            <Link to={article ? '/blog' : '/'}>{article ? 'Terug naar alle artikelen' : 'Terug naar Home'}</Link>
        </section>
    );
}

export default NotFoundPage;
