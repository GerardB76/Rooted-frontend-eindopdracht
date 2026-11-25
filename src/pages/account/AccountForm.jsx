import {useState} from 'react';
import Button from '../../components/button/Button.jsx';

function AccountForm({fields, submitLabel, message}) {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [feedback, setFeedback] = useState('');

    function handleChange(event) {
        const {name, value} = event.target;
        setValues((currentValues) => ({...currentValues, [name]: value}));
        setErrors((currentErrors) => ({...currentErrors, [name]: undefined}));
        setFeedback('');
    }

    function handleSubmit(event) {
        event.preventDefault();
        const form = event.currentTarget;
        const fieldErrors = {};

        for (const field of fields) {
            const input = form.elements.namedItem(field.name);

            if (!input.value.trim()) {
                fieldErrors[field.name] = 'Vul dit veld in.';
            } else if (input.validity.typeMismatch) {
                fieldErrors[field.name] = 'Vul een geldig e-mailadres in.';
            }
        }

        const passwordConfirmation = form.elements.namedItem('passwordConfirmation');
        if (passwordConfirmation && !fieldErrors.password && !fieldErrors.passwordConfirmation
            && passwordConfirmation.value !== form.elements.namedItem('password').value) {
            fieldErrors.passwordConfirmation = 'De wachtwoorden zijn niet hetzelfde.';
        }

        setErrors(fieldErrors);
        const [firstInvalidField] = Object.keys(fieldErrors);

        if (firstInvalidField) {
            setFeedback('');
            form.elements.namedItem(firstInvalidField).focus();
            return;
        }

        setValues({});
        setFeedback(message);
    }

    return (
        <form className="account-form" method="post" noValidate onSubmit={handleSubmit}
            aria-labelledby="account-form-title" aria-describedby="account-preview">
            {fields.map((field) => (
                <div className="account-field" key={field.name}>
                    <label htmlFor={field.name}>{field.label}</label>
                    <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        autoComplete={field.autoComplete}
                        placeholder={field.placeholder}
                        value={values[field.name] ?? ''}
                        onChange={handleChange}
                        required
                        aria-invalid={errors[field.name] ? true : undefined}
                        aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
                    />
                    {errors[field.name] && <p id={`${field.name}-error`} className="account-error">{errors[field.name]}</p>}
                </div>
            ))}
            <div>
                <Button type="submit">{submitLabel}</Button>
                <p className="account-feedback" role="status">{feedback}</p>
            </div>
        </form>
    );
}

export default AccountForm;
