import { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Wrapper from '../../hoc/Wrapper/Wrapper';
import axios from '../../axios-config';
const ErrorWrapper = (WrapperComponent, ax) => {
    return class extends Component{
        state = {
            error: null
        }
        componentWillMount(){
            console.log(this.props);
            this.req = ax.interceptors.request.use(req => {
                console.log(req);
                this.setState({error: null})
                return req
            } )
            this.res = ax.interceptors.response.use(res => res, err => {
                console.log('sada',err);
                console.log(err.message);
                this.setState({error: err})
            } )
            console.log('req',ax.interceptors.request);
            console.log('res',ax.interceptors.response);


            console.log('mount', this.req, this.res);

        }
        componentWillUnmount() {
            console.log('unmount', this.req,this.res)
            ax.interceptors.request.eject(this.req)
            ax.interceptors.response.eject(this.res)
            console.log('req',ax.interceptors.request);
            console.log('res',ax.interceptors.response);

        }
        closeErrHandler = () => {
            this.setState({error: null})
        }
        render() {
            console.log(WrapperComponent);

            return (
                <Wrapper>
                    <Modal show={this.state.error} closeModal={this.closeErrHandler}>
                        {this.state.error && this.state.error.message}
                    </Modal>
                    <WrapperComponent {...this.props}/>
                </Wrapper>
            )
        }
    } 
   

}

export default ErrorWrapper