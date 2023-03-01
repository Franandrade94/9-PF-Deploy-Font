import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

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
import BotonCrear from './Components/13-BotonCrear/BotonCrear';
import BotonCarrito from './Components/17-PasareladePago/BotonCarrito/BotonCarrito';
import Payment from './Pages/7-Payment/Payment';

function App() {
  return (
    <div className="App">
      <Router>
        <BotonCrear/>
        
        <BotonCarrito/>
        
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
    
        <Route path="/pagos" exact component={Payment}/>
      </Router>
    </div>
  );
}

export default App;
