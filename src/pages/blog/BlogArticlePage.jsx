import {Link, useParams} from 'react-router-dom';
import {articles} from '../../data/articles.js';
import articleContent from '../../data/article-content.jsx';
import NotFoundPage from '../NotFoundPage.jsx';
import './Blog.css';

function BlogArticlePage() {
    const {articleId} = useParams();
    const article = articles.find((item) => item.id === articleId);

    if (!article) {
        return <NotFoundPage article />;
    }

    return (
        <article aria-labelledby="blog-article-title">
            <header className="blog-article-header">
                <div className="content-container blog-article-heading">
                    <div className="blog-article-intro">
                        <Link className="blog-back-link" to="/blog">← Terug naar alle artikelen</Link>
                        <p className="article-card-topic">{article.topic}</p>
                        <h1 id="blog-article-title">{article.title}</h1>
                        <p>{article.introduction}</p>
                    </div>
                    <img className="blog-article-photo" src={article.image} alt={article.imageAlt} />
                </div>
            </header>
            <div className="content-container section-spacing blog-article-body">
                {articleContent[article.id]}
            </div>
        </article>
    );
}

export default BlogArticlePage;
