import classes from './Input.module.css';

const input = (props) => {
    
    const inputClasses = !props.valid && props.shouldValidate && props.touched ? `${classes.InputElement} ${classes.Invalid}` : `${classes.InputElement} `;
    console.log(props);
    let input = null
    switch (props.inputtype) {
        case 'input':
            input =  <input className={inputClasses}
            {...props.elementConfig} value={props.value} onChange={props.changed}/>
            break;
        case 'select':
            input = (
                <select className={inputClasses}  onChange={props.changed}>
                    <option>select method</option>
                    {
                        props.elementConfig.options.map(element => {
                          return  <option key={element.value} 
                                          value={element.value}>{element.value}
                                </option>
                        })
                    }
                </select>
                )
        default:
            break;
    }
    return(
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {input}
        </div>
    )
}
export default input