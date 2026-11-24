import './ArticleCard.css';

function ArticleCard({article}) {
    return (
        <article className="article-card">
            <img className="article-card-image" src={article.image} alt={article.imageAlt} loading="lazy" />
            <p className="article-card-topic">{article.topic}</p>
            <h3 className="article-card-title">{article.title}</h3>
            <p className="article-card-intro">{article.introduction}</p>
        </article>
    );
}

export default ArticleCard;
