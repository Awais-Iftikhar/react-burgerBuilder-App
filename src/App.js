import './App.css';
import Layout from '../src/hoc/Layout/Layout';
// import BurgerBuilder from '../src/containers/BurgerBuilder/BurgerBuilder';
import  BurgerBuilder  from './containers/BurgerBuilder/BurgerBuilder';
import { Route , Switch } from 'react-router-dom';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
function App() {
  return (
   <Layout>
      <h1>Burger Builder App</h1>
      {/* <BurgerBuilder/>
      <Checkout/> */}
      <Switch>
        <Route path='/checkout' component={Checkout}></Route>
        <Route path='/orders' component={Orders}></Route>
        <Route path='/' component={BurgerBuilder}></Route>
      </Switch>

   </Layout>
  );
}

export default App;
