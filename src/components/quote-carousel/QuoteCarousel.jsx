import {useEffect, useState} from 'react';
import quotes from './quotes.js';
import './QuoteCarousel.css';

const rotationDelay = 7000;

function QuoteCarousel() {
    const [quoteIndex, setQuoteIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    const [isHovered, setIsHovered] = useState(false);
    const quote = quotes[quoteIndex];

    useEffect(() => {
        if (isPaused || isHovered) {
            return;
        }

        const timer = window.setInterval(() => {
            setQuoteIndex((index) => (index + 1) % quotes.length);
        }, rotationDelay);

        return () => window.clearInterval(timer);
    }, [isPaused, isHovered]);

    function changeQuote(step) {
        setIsPaused(true);
        setQuoteIndex((index) => (index + step + quotes.length) % quotes.length);
    }

    function pauseForKeyboard(event) {
        if (!event.currentTarget.contains(event.relatedTarget) && event.target.matches(':focus-visible')) {
            setIsPaused(true);
        }
    }

    return (
        <section
            className="quote-carousel"
            aria-label="Citaten"
            onPointerEnter={(event) => setIsHovered(event.pointerType === 'mouse')}
            onPointerLeave={() => setIsHovered(false)}
            onFocus={pauseForKeyboard}
        >
            <div className="content-container">
                <figure className="quote-content" aria-live={isPaused ? 'polite' : 'off'}>
                    <blockquote cite={quote.source}>
                        <p>“{quote.text}”</p>
                    </blockquote>
                    <figcaption className="quote-author">
                        <strong>{quote.author}</strong>
                        {quote.translated && <span className="quote-translation">eigen vertaling</span>}
                    </figcaption>
                </figure>

                <div className="quote-controls">
                    <p className="quote-count">{quoteIndex + 1} / {quotes.length}</p>
                    <button
                        className="button button-secondary quote-play"
                        type="button"
                        aria-label={isPaused ? 'Afspelen: citaten automatisch wisselen' : 'Pauze: automatisch wisselen stoppen'}
                        onClick={() => setIsPaused((paused) => !paused)}
                    >
                        {isPaused ? 'Afspelen' : 'Pauze'}
                    </button>
                    <button className="button button-secondary quote-arrow" type="button" aria-label="Vorig citaat" onClick={() => changeQuote(-1)}>←</button>
                    <button className="button button-secondary quote-arrow" type="button" aria-label="Volgend citaat" onClick={() => changeQuote(1)}>→</button>
                </div>
            </div>
        </section>
    );
}

export default QuoteCarousel;
