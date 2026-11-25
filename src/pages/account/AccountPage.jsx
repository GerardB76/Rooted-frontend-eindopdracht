import {Link} from 'react-router-dom';
import AccountForm from './AccountForm.jsx';
import './Account.css';

const emailField = {
    name: 'email',
    label: 'E-mailadres',
    type: 'email',
    autoComplete: 'username',
    placeholder: 'naam@voorbeeld.nl',
};

const loginPage = {
    title: 'Fijn dat je er bent.',
    introduction: 'Log in op je persoonlijke omgeving.',
    formTitle: 'Inloggen',
    formIntroduction: 'Vul je gegevens in om verder te gaan.',
    fields: [
        emailField,
        {name: 'password', label: 'Wachtwoord', type: 'password', autoComplete: 'current-password', placeholder: 'Je wachtwoord'},
    ],
    message: 'De invoer is gecontroleerd. Inloggen is nog niet aangesloten.',
    nextQuestion: 'Nog geen account?',
    nextLink: '/registreren',
    nextLabel: 'Maak een account aan',
};

const registerPage = {
    title: 'Welkom bij Rooted.',
    introduction: 'Maak je persoonlijke account aan.',
    formTitle: 'Account aanmaken',
    formIntroduction: 'Maak een account aan om je eigen plek bij Rooted te gebruiken.',
    fields: [
        {name: 'firstName', label: 'Voornaam', type: 'text', autoComplete: 'given-name', placeholder: 'Je voornaam'},
        {name: 'lastName', label: 'Achternaam', type: 'text', autoComplete: 'family-name', placeholder: 'Je achternaam'},
        emailField,
        {name: 'password', label: 'Wachtwoord', type: 'password', autoComplete: 'new-password', placeholder: 'Kies een wachtwoord'},
        {name: 'passwordConfirmation', label: 'Herhaal wachtwoord', type: 'password', autoComplete: 'new-password', placeholder: 'Herhaal je wachtwoord'},
    ],
    message: 'De invoer is gecontroleerd. Registreren is nog niet aangesloten.',
    nextQuestion: 'Heb je al een account?',
    nextLink: '/inloggen',
    nextLabel: 'Ga naar inloggen',
};

function AccountPage({register = false}) {
    const page = register ? registerPage : loginPage;

    return (
        <div className={register ? 'account-page account-register' : 'account-page account-login'}>
            <header className="account-intro">
                <div className="content-container">
                    <h1>{page.title}</h1>
                    <p>{page.introduction}</p>
                </div>
            </header>
            <div className="content-container account-layout">
                <section className="account-panel" aria-labelledby="account-form-title">
                    <h2 id="account-form-title">{page.formTitle}</h2>
                    <p>{page.formIntroduction}</p>
                    <p id="account-preview" className="account-preview">Voorbeeldformulier. Gebruik oefengegevens.</p>
                    <AccountForm key={page.formTitle} fields={page.fields} submitLabel={page.formTitle} message={page.message} />
                    <div className="account-next">
                        <p>{page.nextQuestion}</p>
                        <Link to={page.nextLink}>
                            {page.nextLabel} <span aria-hidden="true">↗</span>
                        </Link>
                    </div>
                </section>
                {!register && <div className="account-photo" aria-hidden="true" />}
            </div>
        </div>
    );
}

export default AccountPage;
