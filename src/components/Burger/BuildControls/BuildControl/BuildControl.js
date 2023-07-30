import Wrapper from '../../../../hoc/Wrapper/Wrapper';
import Classes from './BuildControl.module.css';
const BuildControl = (props) => {
    return (
        <div className={Classes.BuildControl}>
            <div className={Classes.Label}>{props.label}</div>
            <button className={Classes.Less} disabled={props.items} onClick={props.remove}>Less</button>
            <button className={Classes.More}  onClick={props.add}>More</button>
        </div>
    )
}

export default BuildControl;