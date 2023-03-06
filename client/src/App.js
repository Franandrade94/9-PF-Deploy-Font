import { useState, useEffect } from "react";
import { connect } from "react-redux";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as actions from "./Redux/actions/index";

import Home from './Pages/1-Home/Home';
import Products from './Pages/2-Product/Product';
import ProductDetailCard from './Pages/3-Detail/ProductDetailCard'
import Create from './Pages/4-Create/Create';
import Animales from "./Pages/2.1-Animales/Animales";
import Bizocho from './Pages/2.2-Bizcocho/Bizcocho';
import Cemento from './Pages/2.3-Cemento/Cemento';
import Colgantes from './Pages/2.4-Colgantes/Colgantes';
import FridasyBaby from './Pages/2.5-Fridas&Baby/Fridas&Baby';
import Otros from './Pages/2.6-Otros/Otros';
import DeleteProduct from './Pages/4-DeleteP/DeleteP';
import Administrador from './Components/13-BotonCrear/BotonCrear'
import AdminstrarUsers from "./Pages/4-AdminUser/AdminUser";
import BotonCarrito from './Components/17-PasareladePago/BotonCarrito/BotonCarrito';
import Payment from './Pages/7-Payment/Payment';


function App({users, getAllUsers}) {

  const [state, setState] = useState(null);

  useEffect(() => {
    setState(state => state);
  }, [state]);

  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);
  
  const users2 = JSON.parse(localStorage.getItem('user'));

  console.log(users2, "SOY EL ROOOOOOL")

  return (
    <div className="App">
      <Router>

         {users2?.admin === true && <Administrador/>}
     
        
        { users2?.admin === false && <BotonCarrito/>}
        
        <Route path="/" exact component={Home}/>

        <Route path="/products" exact component={Products}/>

        <Route path="/products/animales" exact component={Animales}/>

        <Route path="/products/bizcocho" exact component={Bizocho}/>

        <Route path="/products/cemento" exact component={Cemento}/>

        <Route path="/products/colgantes" exact component={Colgantes}/>

        <Route path="/products/fridas" exact component={FridasyBaby}/>

        <Route path="/products/otros" exact component={Otros}/>

        <Route path="/products/details/:id" exact component={ProductDetailCard}/>

        <Route path="/product/create" exact component={Create}/>

        <Route path="/product/delete" exact component={DeleteProduct}/>

        <Route path="/user/rol" exact component={AdminstrarUsers}/>
    
        <Route path="/pagos/:price" exact component={Payment}/>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllUsers: () => dispatch(actions.getAllUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
