const Label = (props) => {
    const { htmlFor, children } = props;
    return (
        <label htmlFor={htmlFor}
            className="label">{children}
        </label>
    )
}

export default Label;