import './AboutSection.css';

function AboutSection() {
    return (
        <section id="systemisch-werk" className="about-section section-spacing" aria-labelledby="about-title">
            <div className="content-container about-content">
                <div className="about-intro">
                    <h2 id="about-title">Je staat niet op jezelf.</h2>
                    <p>
                        Je maakt deel uit van een familie, een team en andere groepen. Systemisch werk onderzoekt de
                        relaties en patronen binnen die groepen. Wat wordt zichtbaar als je naar het geheel kijkt?
                    </p>
                    <p>
                        Bij Rooted kun je je verdiepen in systemisch werk met artikelen en boeken. Je vindt hier ook
                        informatie over individuele begeleiding, familieopstellingen en workshops.
                    </p>
                </div>

                <div className="about-faq">
                    <h3>Veelgestelde vragen</h3>
                    <details name="rooted-faq">
                        <summary>Wat gebeurt er tijdens een familieopstelling?</summary>
                        <p>
                            Je begint met iets wat je wilt onderzoeken. Misschien merk je dat je in je familie vaak probeert
                            de vrede te bewaren en wil je begrijpen wat er op zulke momenten gebeurt. Samen met de begeleider
                            maak je een ruimtelijk beeld van de situatie. Dat kan met andere deelnemers, figuren op tafel of
                            kaartjes op de vloer.
                        </p>
                        <p>
                            Je kijkt bijvoorbeeld naar wie dicht bij elkaar staat, op wie je aandacht gericht is en wat die
                            opstelling bij jou oproept. Wat opvalt, kun je gebruiken om verder te onderzoeken hoe jij de
                            situatie ervaart. Als je na afloop vragen hebt, kun je bij de begeleider navragen of er ruimte is
                            om na te praten.
                        </p>
                    </details>
                    <details name="rooted-faq">
                        <summary>Moet ik mijn familie meenemen?</summary>
                        <p>
                            Nee, je kunt alleen komen. Het vertrekpunt is jouw vraag en hoe jij de relaties in je familie
                            ervaart. In een groep kunnen andere deelnemers een plek innemen voor iemand uit je familie.
                            Zij worden <em>representanten</em> genoemd. In een individuele sessie kun je die plekken
                            bijvoorbeeld met figuren of kaartjes aangeven.
                        </p>
                        <p>
                            Wil je graag samen met je partner, broer of zus komen? Bespreek dat vooraf met de begeleider.
                            Het helpt om te bedenken of je met die persoon erbij vrij kunt vertellen wat je bezighoudt.
                        </p>
                    </details>
                    <details name="rooted-faq">
                        <summary>Doe ik een familieopstelling alleen of in een groep?</summary>
                        <p>
                            <strong>Rooted biedt beide vormen aan.</strong> In een individuele sessie werk je één-op-één
                            met een begeleider aan je eigen vraag. In een groepssessie kun je een eigen vraag inbrengen
                            of als representant een plek innemen in de opstelling van iemand anders.
                        </p>
                        <p>
                            Vind je het spannend om in een groep iets persoonlijks te delen? Dan kun je vooraf bespreken
                            wat er van je wordt verwacht, welke afspraken er zijn over vertrouwelijkheid en of je eerst
                            kunt meekijken. Zo kun je kiezen welke vorm bij je past.
                        </p>
                    </details>
                    <details name="rooted-faq">
                        <summary>Hoe lang duurt een familieopstelling en wat kost het?</summary>
                        <p>Bij Rooted kun je kiezen tussen twee vormen:</p>
                        <ul>
                            <li><strong>Groepssessie</strong> — 4 uur, € 75</li>
                            <li><strong>Individuele sessie</strong> — 2 uur, € 100</li>
                        </ul>
                    </details>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
