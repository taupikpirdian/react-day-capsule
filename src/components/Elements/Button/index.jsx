const Button = (props) => {
    const { children } = props;
    return (
        <button
            type="submit"
            className="btn-c-submit"
        >
            {children}
        </button>
    )
}

export default Button;