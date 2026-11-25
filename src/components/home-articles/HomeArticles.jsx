import {Link} from 'react-router-dom';
import ArticleCard from '../article-card/ArticleCard.jsx';
import {featuredArticle, otherArticles} from '../../data/articles.js';
import './HomeArticles.css';

function HomeArticles() {
    const articles = [featuredArticle, ...otherArticles.slice(0, 2)];

    return (
        <section className="section-spacing" aria-labelledby="home-articles-title">
            <div className="content-container">
                <div className="home-articles-heading">
                    <h2 id="home-articles-title">Nieuwe perspectieven</h2>
                    <Link to="/blog">Alle artikelen</Link>
                </div>
                <div className="home-articles-list">
                    {articles.map((article) => (
                        <ArticleCard key={article.id} article={article} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HomeArticles;
