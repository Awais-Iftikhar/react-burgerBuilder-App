import { Component } from "react";
import Order from '../../components/Order/Order';
import axios from '../../axios-config';
import Spinner from '../../components/UI/Spinner/Spinner';
import errorWrapper from '../../hoc/ErrorWrapper/ErrorWrapper';
class Orders extends Component{
    state = {
        orders: [],
        loading: true,
        err: null
    }
    componentDidMount(){
        axios.get('orders.json').then(result => {
            // let k = Object.keys(result.data).map(key => {
            //     return {
            //         id: key,
            //         data: result.data[key]
            //     }
            // })
            // console.log(k);
            console.log(result.data);
            let data = []
            for (const key in result.data) {
                console.log(result.data[key]);
                data.push({
                    id: key,
                    ...result.data[key]
                })
            }
            console.log(data);
            this.setState({orders: data ,loading: false})
        })
        .catch(err => {
            console.log(err);
            this.setState({loading:false , err: err})
        })
    }
    render(){
        console.log(this.state.orders);

        let orders = this.state.orders.map(result => {
            return <Order key={result.id} ingredients = {result.ingredients} price = {result.price}/>
        }) 
        if(this.state.loading){
            orders = <Spinner/>
        }
        if(this.state.err){
            orders = <p>something went wrong</p>
        }
        return(
            <div>
                {orders}
            </div>

        )
    }
}
export default errorWrapper(Orders, axios)