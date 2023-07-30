import { Component } from 'react';
import Wrapper from '../../../hoc/Wrapper/Wrapper';
import Button from '../../UI/Button/Button';
class OrderSummary extends Component{
    componentDidUpdate(){
        console.log('ordersumary.js');
    }
    render(){
        const ingredients = Object.keys(this.props.ingredients)
        .map(keys => {
            return <li key={keys}>{keys}: {this.props.ingredients[keys]}</li>
        })
    
        return (
            <Wrapper>
                <h1>Your Order</h1>
                <p>You have delicious burger with the following ingredients</p>
                <ul>
                    {ingredients}
                </ul>
                <p>Total Price: {this.props.totalPrice}</p>
                <p>Continue to Checkout?</p>
                <Button type='Success' clicked={this.props.continue}>Continue</Button>
                <Button type='Danger' clicked={this.props.closeModal}>Cancel</Button>
    
            </Wrapper>
        )
    }
    
}

export default OrderSummary