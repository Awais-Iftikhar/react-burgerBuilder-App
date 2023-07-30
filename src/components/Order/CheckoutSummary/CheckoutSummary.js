import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes, { Classes } from './CheckoutSummary.module.css';
const checkOutSummary = (props) => {
    return(
        <div className={classes.Summary}>
            <h1>Have a great meal</h1>
            <div style={{width: '100%'}}>
                <Burger items={props.ingredients}/>
            </div>
            <div>
                <Button type='Danger' clicked={props.cancelCheckout}>CANCEL</Button>
                <Button type='Success' clicked={props.continueCheckout}>CONTINUE</Button>
            </div>
        </div>
    )
}
export default checkOutSummary