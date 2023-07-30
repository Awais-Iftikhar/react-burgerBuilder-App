import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import Classes from './SideDrawer.module.css';
import BackDrop from '../../UI/BackDrop/BackDrop';
import Wrapper from '../../../hoc/Wrapper/Wrapper';
const sideDrawer = (props) => {
    const classes = Classes.SideDrawer
    return (
        <Wrapper>
            <BackDrop 
                show={props.show} 
                clicked={props.closed}
            />
            <div className={props.show ? `${classes} ${Classes.Open}` : `${classes} ${Classes.Closed}`}>
                <div className={Classes.Logo}>
                    <Logo/>
                </div>
                <div>
                    <NavigationItems/>
                </div>
            </div>
        </Wrapper>
    )
}

export default sideDrawer;