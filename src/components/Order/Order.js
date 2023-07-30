import classes from './Order.module.css';
const order = (props) => {
    console.log(props);
    let items = []
    for (const key in props.ingredients) {
       items.push({ingredients: key , quantity:props.ingredients[key] })
    }
    console.log(items);
    const data = items.map((i, index) => {
        console.log(i);
       return  <span key={index} className={classes.items}>{i.ingredients} ({i.quantity})</span>
    })
    return(
        <div className={classes.Order}>
            <p>Ingredients {data} </p>
            <p>Total price: <strong>USD ${props.price}</strong></p>
        </div>
    )
}
export default order