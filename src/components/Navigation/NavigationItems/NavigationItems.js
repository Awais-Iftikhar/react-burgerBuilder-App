import NavigationItem from '../NavigationItems/NavigationsItem/NavigationItem';
import Classes from './NavigationItems.module.css';
const NavigationItems = () => (
        <ul className={Classes.NavigationItems}>
            <NavigationItem link='/' exact>BurgerBuilder</NavigationItem>
            <NavigationItem link='/orders'>Checkout</NavigationItem>
        </ul>
)

export default NavigationItems