import Wrapper from '../../../hoc/Wrapper/Wrapper'
import BuildControl from './BuildControl/BuildControl';
import Styles from './BuildControls.module.css';

const buildControls = (props) => {

    let items = {...props.items};    
    for(let key in items){
        items[key] = items[key] <= 0
    }

    

    let arr  = Object.keys(props.items)
    const itemsLength = {...props.items}
    const itemsCount = arr.map(keys => {
        return itemsLength[keys]
    })
    .reduce((prev, next) => {
        return prev + next
    }, 0)

    let newArr = arr.map((result, i) => {
        return {
            type : result.toLowerCase(),
            label: result
        }
    })    

    return (
        <div className={Styles.BuildControls}>
            <p>Total Price : <b>{props.price.toFixed(2)}</b></p>
            {newArr.map((ctrl, i) => {
                return <BuildControl 
                label = {ctrl.label}
                key= {i}
                add={props.add.bind(this,ctrl.label)}
                remove={props.remove.bind(this, ctrl.label)}
                items = {items[ctrl.label]}
                />
            })}
            <button className={Styles.OrderButton} 
                    disabled = {!itemsCount > 0} 
                    onClick={props.showModal}
                    >Order Now</button>
            
        </div>
    )
}

export default buildControls;