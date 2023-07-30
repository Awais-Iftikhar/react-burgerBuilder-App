import Classes from './Logo.module.css';
import image from '../../assets/images/burgerLogo.png';
const Logo = (props) => (
    <div className={Classes.Logo}>
        <img src={image} alt="burgerimage"/>
    </div>
)

export default Logo;