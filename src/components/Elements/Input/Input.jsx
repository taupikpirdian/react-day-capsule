const Input = (props) => {
    const { type, placeholder, name } = props;
    return (
        <input
            type={type}
            className="form-control"
            placeholder={placeholder}
            name={name}
        />
    )
}

export default Input;