import { Component } from "react";
import Button from '../../../components/UI/Button/Button';
import Classes from './ContactData.module.css';
import axios from '../../../axios-config';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/Input/Input';
import { generateDropdown, generateFields } from '../FormConfig/FormConfig';
class ContactData extends Component{
    state = {
        loading : false,
        OrderForm: {
            name: generateFields('Name','input','text','Your Name', 'aaa', true, 2,5,false, false),
            email: generateFields('Email','input','email','Your Email', 'm', true, undefined, undefined, false, ''),
            address: generateFields('Address','input','text','Your Address', '',true, undefined, undefined, false, ''),
            postalCode: generateFields('Postal Code','input','number','Postal Code', '',true, undefined, undefined, false, ''),
            country: generateFields('Country','input','text','Country', '',true, undefined, undefined, false, ''),
            deliveryMethod: generateDropdown('select', ['cheapest','fastest']),
        },
        formValidity: false
    }
    changeInputHandler = (event, fieldName) => {
        debugger
        console.log(event);
        const updForm = {...this.state.OrderForm}
        const formField = {...updForm[fieldName]}
        console.log(formField);
        formField['value'] = event.target.value
        formField['valid'] = this.checkValidity(formField['value'], formField['validation'])
        formField['touched'] = true
        updForm[fieldName] = formField
        console.log(updForm);
        let formValid = true;
        debugger
        for (const key in updForm) {
            formValid = updForm[key].valid && formValid
            console.log(formValid);
        }
        this.setState({OrderForm: updForm, formValidity: formValid})

    }
    componentWillMount() {
        console.log(this.state.OrderForm);
        console.log(this.props);
    }
    checkValidity(value, rules){
        debugger
        let isValid = true
        if(rules && rules.required){
            isValid = value.trim('') !== '' && isValid
        } 
         if(rules && rules.minLength){
            isValid = value.length >= rules.minLength && isValid
        }
         if(rules && rules.maxLength){
            isValid = value.length <= rules.maxLength && isValid
        }
        return isValid
    }
    submitOrderHandler = (event) => {
        event.preventDefault()
        const userData = {}
        for (let key in this.state.OrderForm) {
            userData[key] = this.state.OrderForm[key].value;
            
        }
        console.log(userData);
        console.log(this.props);
        const data = {
            ingredients: this.props.ingredients,
            price : this.props.price,
            userInfo: userData
        }
        this.setState({loading: true})

        debugger
        axios.post('orders.json', data).then(res=> {
            console.log(res);
            this.props.history.push('/')
        } , err => {
            this.setState({loading: false})
            debugger
            console.log(err);
        })
    }
    render(){
        console.log(this.state.formValidity);
        const formFields = Object.keys(this.state.OrderForm).map((field,i) => {
            const fields  = this.state.OrderForm[field]
            console.log(fields)
            debugger
            if(fields.inputType === 'select'){
               return  <Input key={i} inputtype={fields.inputType} 
                        elementConfig={fields['elementConfig']} 
                        changed={(event) => this.changeInputHandler(event,field)}
                />
            } else{
              return  <Input key={i} inputtype={fields.inputType} 
                        label={fields.label}
                        valid = {fields['valid']}
                        elementConfig={fields['elementConfig']} 
                        value={fields.value}
                        shouldValidate={fields['validation']}
                        touched = {fields['touched']}
                        changed={(event) => this.changeInputHandler(event,field)}
                />
            }
        })
        let formData = (
                <form onSubmit={this.submitOrderHandler}>
                    {formFields}
                    <Button isDisabled={!this.state.formValidity} label="Name" inputtype="input" type='Success'>Order Now</Button>
                </form>
        )
        if (this.state.loading) {
            formData = <Spinner/>
        }
        return(
            <div className={Classes.Contact}>
                <h1>Enter your Details</h1>
                {formData}
            </div>
        )
    }
}
export default ContactData