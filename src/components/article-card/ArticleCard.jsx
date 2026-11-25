import {Link} from 'react-router-dom';
import './ArticleCard.css';

function ArticleCard({article, featured = false}) {
    const Heading = featured ? 'h2' : 'h3';

    return (
        <article className={featured ? 'article-card article-card-featured' : 'article-card'}>
            <img className="article-card-image" src={article.image} alt={article.imageAlt} loading="lazy" />
            <div className="article-card-copy">
                <p className="article-card-topic">{featured && 'Uitgelicht · '}{article.topic}</p>
                <Heading className="article-card-title">{article.title}</Heading>
                <p className="article-card-intro">{article.introduction}</p>
                <Link className="article-card-link" to={`/blog/${article.id}`} aria-label={`Lees het artikel: ${article.title}`}>
                    Lees het artikel
                </Link>
            </div>
        </article>
    );
}

export default ArticleCard;
