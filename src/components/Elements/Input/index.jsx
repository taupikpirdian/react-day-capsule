import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
    const { title, type, placeholder, name } = props;
    return (
        <div>
            <Label htmlFor={name}>{title}</Label>
            <Input type={type} name={name} placeholder={placeholder} />
        </div>
    )
}

export default InputForm;