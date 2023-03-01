import "./payment.css";
import Logo2 from "../../Components/1-Logo/Logo2";
import Stripe from "../../Components/17-PasareladePago/Stripe/Stripe";
import { useParams } from "react-router-dom";

function Payment() {
    const {price} = useParams();
    console.log(price, "hola")
  return (
    <div className="Payment">
      <div>
        <Logo2 />
        <Stripe price={price}/>
      </div>
    </div>
  );
}

export default Payment;
