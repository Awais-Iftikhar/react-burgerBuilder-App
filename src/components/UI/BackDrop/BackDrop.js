import Classes from '../BackDrop/BackDrop.module.css';

const backDrop = (props) => {
    return props.show ? <div className={Classes.BackDrop} onClick={props.clicked} /> : null

}

export default backDrop;