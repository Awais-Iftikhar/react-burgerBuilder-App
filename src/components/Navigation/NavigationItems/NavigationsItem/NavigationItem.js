import Classes from './NavigationItem.module.css';
import propTypes from 'prop-types';
import { NavLink , Link} from 'react-router-dom';
const NavigationItem = (props) => {
    
    return <li className={Classes.NavigationItem}>
        <NavLink to={props.link}  
            exact={props.exact}
            activeClassName={Classes.active} >
            {props.children}
        </NavLink>
    </li>
}
NavigationItem.propTypes = {
    link : propTypes.string.isRequired
}
export default NavigationItem