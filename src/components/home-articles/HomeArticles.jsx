import ArticleCard from '../article-card/ArticleCard.jsx';
import painBodyPhoto from '../../assets/pijnlichaam-familieopstelling.png';
import communicationPhoto from '../../assets/geweldloze-communicatie.jpg';
import familyCarePhoto from '../../assets/zorgen-voor-je-ouders.jpg';
import './HomeArticles.css';

const articles = [
    {
        id: 'pijnlichaam',
        topic: 'Systemisch werk',
        title: 'Het pijnlichaam: als oude pijn weer voelbaar wordt',
        introduction: 'Een opmerking aan tafel raakt je meer dan je had verwacht. Eckhart Tolle noemt de oude emotionele pijn die dan kan opspelen het pijnlichaam. Wat zie je als je ook kijkt naar de rol die je in je familie gewend bent in te nemen?',
        image: painBodyPhoto,
        imageAlt: 'Vijf houten figuren op een tafel, met één figuur op enige afstand van de andere vier',
    },
    {
        id: 'geweldloze-communicatie',
        topic: 'Communicatie',
        title: 'Geweldloze communicatie begint bij voelen wat er in je leeft',
        introduction: 'Je zegt dat het prima is, terwijl het je vanbinnen raakt. Een familieopstelling kan helpen ontdekken welk gevoel en welke behoefte aandacht vragen. Met geweldloze communicatie kun je daar woorden aan geven en horen wat er bij de ander speelt.',
        image: communicationPhoto,
        imageAlt: 'Twee kopjes koffie op een houten tafel',
    },
    {
        id: 'zorgen-voor-je-ouders',
        topic: 'Familie & verbinding',
        title: 'Wanneer zorgen voor je ouders vanzelfsprekend voelt',
        introduction: 'Zelfs op vakantie bel je elke avond naar huis. Je doet het graag, maar als je een keer overslaat, word je onrustig. Hoe merk je of je belt omdat je dat wilt, of omdat zorgen voor je ouders zo vertrouwd voelt?',
        image: familyCarePhoto,
        imageAlt: 'Een telefoon en een kop koffie op een houten tafel buiten',
    },
];

function HomeArticles() {
    return (
        <section className="section-spacing" aria-labelledby="home-articles-title">
            <div className="content-container">
                <h2 id="home-articles-title">Nieuwe perspectieven</h2>
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
