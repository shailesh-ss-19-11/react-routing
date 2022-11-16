import {increment,decrement} from './store/action/index'
import { useDispatch,useSelector } from 'react-redux';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import About from './components/About';
import Service from './components/Service';
import {Redirect, Route, Switch} from 'react-router-dom'
import ProductDetails from './productDetails/ProductDetails';
import NotFound from './components/NotFound';
function App() {
  const dispatch = useDispatch();
  const state = useSelector((state)=>state.counter);
  return (
    <div className="App">
      <Navbar/>
      <div className='content'>
        <Switch>
          <Route path="/products/:id" component={ProductDetails}/>
          <Route path="/about" render={(props)=><About sortby="newest" {...props}/>}/>
          <Route path="/service" component={Service} />
          <Redirect from='/masseges' to="/about"/>

          <Route path="/not-found" component={NotFound}/>
          <Route path="/" exact component={Home} />
          <Redirect to="/not-found"/> 
        </Switch>
      </div>
      {/* {state}
      <button className='btn btn-primary' onClick={()=>dispatch(increment())}>+</button>
      <button className='btn btn-primary' onClick={()=>dispatch(decrement())}> - </button> */}
      {/* <Home/> */}
    </div>
  );
}

export default App;
