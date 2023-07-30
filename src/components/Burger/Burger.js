import classes from '../Burger/Burger.module.css';
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient';
import Wrapper from '../../hoc/Wrapper/Wrapper';
const burger = (props) => {   
    debugger
    let ingredients = Object.keys(props.items)
    .map(keys => {
        let arr = [...Array(props.items[keys])]
        console.log(arr);
        return arr
        .map((_,i) => {
            return <BurgerIngredient key={keys+i} type={keys} />
        })
    })
    .reduce((preval, nextval) => {
        return preval.concat(nextval);
    })
    if(ingredients.length == 0){
        ingredients = <p style={{textAlign: 'center'}}>start adding ingredients</p>
    }
    return (
        <Wrapper>
            <div className={classes.burger}>
            <BurgerIngredient type='BreadTop'/>
            {ingredients}
            <BurgerIngredient type='BreadBottom'/>
            </div>
        </Wrapper>
    )  
}

export default burger;