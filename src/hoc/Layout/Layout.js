import Wrapper from '../Wrapper/Wrapper';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Classes from './Layout.module.css';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import { Component } from 'react';
class Layout extends Component {
    state = {
         isShow: false
    }
    closeBackDrop = () => {
        this.setState({isShow: false})
    }
    toggleBackDrop = () => {
        this.setState( prevState => {
            return {isShow: !prevState.isShow}
        })
    }
    render(){
        return(
            <Wrapper>
                <Toolbar open={this.toggleBackDrop}/>
                <SideDrawer 
                    show={this.state.isShow}
                    closed={this.closeBackDrop}
                />
                <main className={Classes.Content}>
                    {this.props.children}
                </main>
            </Wrapper>
        )
    }
}

export default Layout;