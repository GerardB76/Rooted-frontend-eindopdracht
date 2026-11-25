import ArticleCard from '../../components/article-card/ArticleCard.jsx';
import Button from '../../components/button/Button.jsx';
import {featuredArticle, otherArticles} from '../../data/articles.js';
import './Blog.css';

function BlogPage() {
    return (
        <section className="content-container section-spacing" aria-labelledby="blog-title">
            <header className="blog-intro">
                <h1 id="blog-title">Inzicht en inspiratie</h1>
                <p>Artikelen over systemisch werk, verbinding en de patronen die ons vormen.</p>
            </header>
            <ArticleCard article={featuredArticle} featured />
            <section className="blog-more" aria-labelledby="more-articles-title">
                <h2 id="more-articles-title">Meer artikelen</h2>
                <div className="blog-article-list">
                    {otherArticles.map((article) => <ArticleCard key={article.id} article={article} />)}
                </div>
                <div className="blog-load-more">
                    <Button disabled>Meer artikelen laden</Button>
                </div>
            </section>
        </section>
    );
}

export default BlogPage;
