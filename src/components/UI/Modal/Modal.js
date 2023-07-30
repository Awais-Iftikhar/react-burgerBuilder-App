import BackDrop from '../BackDrop/BackDrop';
import Wrapper from '../../../hoc/Wrapper/Wrapper';
import Classes from '../Modal/Modal.module.css';
import { Component } from 'react';
class Modal extends Component {
    componentDidUpdate(){
        console.log('Modal.js');
    }
    shouldComponentUpdate(nextProps,prevProps){
        console.log(this.props);
        return nextProps.show != this.props.show || this.props.children != nextProps.children
    }
    render(){
        console.log('modal', this.props);
        return (
            <Wrapper>
                <BackDrop show={this.props.show} clicked={this.props.closeModal}/>
                <div className={`${Classes.Modal} ${this.props.show ? Classes.show : Classes.hide}` } >
                    {this.props.children}
                </div>
            </Wrapper>
        )
    }
    
}

export default Modal