import {useState} from 'react';
import Button from '../button/Button.jsx';
import './RatesBlock.css';

function RatesBlock() {
    const [showMessage, setShowMessage] = useState(false);

    function toggleMessage() {
        setShowMessage((visible) => !visible);
    }

    return (
        <div className="rates-block">
            <Button
                onClick={toggleMessage}
                aria-expanded={showMessage}
                aria-controls="rates-message"
                aria-describedby="rates-note"
            >
                Bekijk tarieven
            </Button>
            <p id="rates-note">Het tarievenoverzicht is beschikbaar na inloggen.</p>
            <p id="rates-message" className="rates-message" hidden={!showMessage}>
                Inloggen is nog in ontwikkeling.
            </p>
        </div>
    );
}

export default RatesBlock;
