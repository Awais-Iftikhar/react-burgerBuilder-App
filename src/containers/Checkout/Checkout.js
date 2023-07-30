import { Component } from "react";
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';
class Checkout extends Component {
    state = {
        ingredients : {
            Bacon: 0,
            Salad: 0,
            Cheese: 0,
            Meat: 0
        },
        totalPrice: 0
    }
    componentWillMount(){
        console.log('will mount');
        console.log(this.props);
        console.log(this.props.location.search);
        // const i = this.props.location.search.split('=')[1]
        // debugger
        // const ing =  (i.split('&')[0])
        // console.log(JSON.parse(ing));
        // const price = i.split('&')[1]
        // console.log(price);
        // let d = this.props.location.search
        // debugger
        // let arr = []
        // for (let index = 0; index <= d.length; index++) {
        //     if(index != 0){
        //        arr.push = d.split('=')[0]
        //        arr.push = d.split('=')[1]
        //     }
            
        // }
        if(this.props.location.search){
            const query = new  URLSearchParams(this.props.location.search)
        const ingredients = {}
        let price = 0
        for (let params of query.entries()) {
            console.log(params); // yields ['start', '5']
            if(params[0] === 'price'){
                price = params[1]
            } else{
                ingredients[params[0]] = +params[1] 

            }
        }
        console.log(ingredients);
        console.log(price);
        this.setState({ingredients : ingredients, totalPrice: price})
        }

    }

    cancelCheckoutHandler = () => {
        this.props.history.goBack()
    }
    continueCheckoutHandler = () => {
        this.props.history.replace('/checkout/contact-data')
        
    }
    render(){
        console.log('render');
        return(
            <div>
                <CheckoutSummary 
            cancelCheckout={this.cancelCheckoutHandler}
            continueCheckout={this.continueCheckoutHandler}
            ingredients={this.state.ingredients}/>
            <Route path={`${this.props.match.url}/contact-data`} 
            render={(props) => (<ContactData {...props} ingredients={this.state.ingredients} price={this.state.totalPrice} />)}/>
            </div>
        )
    }
}

export default Checkout