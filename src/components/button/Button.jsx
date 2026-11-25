function Button({children, type = 'button', className = '', ...buttonProps}) {
    return (
        <button {...buttonProps} type={type} className={`button ${className}`.trim()}>
            {children}
        </button>
    );
}

export default Button;
