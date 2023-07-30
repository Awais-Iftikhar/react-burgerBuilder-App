import Classes from '../Button/Button.module.css';

const Button = (props) => {
    console.log(props);
    return <button disabled={props.isDisabled} className={`${Classes.Button} ${Classes[props.type]}`}
            onClick={props.clicked}
            >{props.children}</button>
}

export default Button;