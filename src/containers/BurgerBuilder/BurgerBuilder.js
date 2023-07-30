import { Component } from "react";

import Wrapper from '../../hoc/Wrapper/Wrapper';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-config';
import Spinner from '../../components/UI/Spinner/Spinner';
import errorWrapper from '../../hoc/ErrorWrapper/ErrorWrapper';
const INGREDIENTS_PRICES = {
    Salad: 0.5,
    Meat: 10,
    Cheese: 0.5,
    Bacon: 10
}

class BurgerBuilder extends Component {

    state={
        ingredients: null,
        price: 0,
        isShow: false,
        loading: false,
        err: null

    }
    componentDidMount(){
        console.log(this.props);
        console.log('called from builder');
        axios.get('https://react-app-7e047-default-rtdb.firebaseio.com/ingredients.json')
        .then(res => {

            console.log(res);
            this.setState({ingredients: res.data })
            this.ingredientPrices(res.data)
        })
        .catch(error => {
            debugger
            console.log('err broo',error);
            this.setState({err: true})
        })
    }
    ingredientPrices(data){
        if(data){
            let totalPrice
        let sum = 0
        Object.keys(data)
        .map(i => {
            debugger
            if(data[i] != 0){
                debugger
                const itemPrice = INGREDIENTS_PRICES[i]
                const itemQuantity = this.state.ingredients[i]
                const calculatedPrice = itemPrice * itemQuantity
                sum = calculatedPrice + sum
            }
        })
        this.setState({price: sum })
        }
    }
    addIngredients = (type) => {
        
        const ingredient =  this.state.ingredients[type] + 1
        const priceOfIngredient = INGREDIENTS_PRICES[type];
        const currentPrice = this.state.price;
        let totalPrice = priceOfIngredient + currentPrice
        const newIngredients = {
            ...this.state.ingredients
        }
        newIngredients[type] = ingredient
        this.setState({ingredients: newIngredients, price: totalPrice})

    }
    openModalHandler = () => {
        // let price = this.state.price;
        // if(price > 0){
            this.setState({isShow: true});
        // } 
    }
    closeModalHandler = () => {
            this.setState({isShow: false});
    }
    continueCheckoutHandler = () => {
        console.log(this.props);
        this.setState({loading: true })
        // this.props.history.push(`/checkout?ingredients=${this.state.ingredients}&price=${this.state.price}`)
        console.log((this.state.ingredients));
        const param = Object.keys(this.state.ingredients).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(this.state.ingredients[key])}`)
        param.push(`price=${this.state.price}`)
        console.log(param);
        const queryString = param.join('&')
        console.log(encodeURIComponent(JSON.stringify(this.state.ingredients)));
        const params = encodeURIComponent(JSON.stringify(this.state.ingredients))
        this.props.history.push({
            pathname: `/checkout`,
            search: `?${queryString}`
        })
        // this.props.history.push(`/checkout`)

        
    }
    removeIngredients = (type) => {
        debugger
        const length = this.state.ingredients[type]
        if(length > 0){
            const ingredient =  length - 1            
            const newIngredients = {
                ...this.state.ingredients
            }
            const priceOfIngredient = INGREDIENTS_PRICES[type];
            const currentPrice = this.state.price;
            let totalPrice =  currentPrice - priceOfIngredient
            newIngredients[type] = ingredient
            this.setState({ingredients: newIngredients, price: totalPrice})
        }        
        
    }
    render(){
        // let modal;
        // if(this.state.isShow){
        //     modal = <Modal>
        //                 <OrderSummary  ingredients ={this.state.ingredients}/>
        //             </Modal>
        // }
        let burger = this.state.err ? <p>something went wrong</p> : <Spinner/>
        let order 
        if(this.state.ingredients){
            debugger
         burger =  (
            <Wrapper>
                   <Burger items={this.state.ingredients}/>
                    <BuildControls  
                        add={this.addIngredients}
                        remove={this.removeIngredients}
                        items={this.state.ingredients} 
                        price={this.state.price}
                        showModal={this.openModalHandler}
                    />
            </Wrapper>
            )
             order = <OrderSummary   ingredients ={this.state.ingredients}
                        closeModal={this.closeModalHandler} 
                        continue={this.continueCheckoutHandler}
                        totalPrice={this.state.price}
                    />
        if (this.state.loading) {
            order = <Spinner/>
        }
        }
        
        return(
            <Wrapper>
                <Modal show = {this.state.isShow}>
                    {order}
                </Modal>
                {burger}
            </Wrapper>
        )
    }
}

export default errorWrapper(BurgerBuilder, axios);