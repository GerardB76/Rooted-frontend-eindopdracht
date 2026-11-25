import painBodyPhoto from '../assets/pijnlichaam-familieopstelling.png';
import communicationPhoto from '../assets/geweldloze-communicatie.jpg';
import familyCarePhoto from '../assets/zorgen-voor-je-ouders.jpg';
import letterPhoto from '../assets/een-brief-voor-jezelf.jpg';

export const articles = [
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
    {
        id: 'een-brief-voor-jezelf',
        topic: 'Zelfreflectie',
        title: 'Een brief die je voor jezelf schrijft',
        introduction: 'Met sommige mensen voer je in gedachten steeds hetzelfde gesprek. Zodra je tegenover ze zit, zeg je toch weer iets anders. Een brief die je voor jezelf houdt, geeft je de tijd om te ontdekken wat je eigenlijk wilt zeggen.',
        image: letterPhoto,
        imageAlt: 'Een hand schrijft een brief aan een houten tafel.',
    },
];

export const [featuredArticle, ...otherArticles] = articles;
