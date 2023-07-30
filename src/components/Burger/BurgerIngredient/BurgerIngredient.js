import classes from '../BurgerIngredient/BurgerIngredient.module.css';
import propTypes from 'prop-types';


const ingredients = (props) => {
        let items = null;
        if (props.type == 'BreadTop') {
            return items = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            )
        }
        else if(props.type == 'Salad'){
            return items = <div className={classes.Salad}></div>
        }
        else if(props.type == 'Meat'){
            return items = <div className={classes.Meat}></div>
        }
        else if(props.type == 'Cheese'){
            return items = <div className={classes.Cheese}></div>
        }
        else if(props.type == 'Bacon'){
            return items = <div className={classes.Bacon}></div>
        }
        else if(props.type == 'BreadBottom'){
            return items = <div className={classes.BreadBottom}></div>
        }
        else{
            return items = null
        }
}

ingredients.obj = {
    type: propTypes.string.isRequired
}

export default ingredients;