import React from 'react';
import { useStateValue } from './StateProvider';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import FlipMove from 'react-flip-move';

const Checkout = () => {
    const [{ basket, user }] = useStateValue();
   
    return (
        
        <div className="checkout">
         <div className="checkout_left">
         {basket?.length === 0 ? (
             <div>
                 <h2>Your Shopping Basket is Empty.</h2>
                 <p>Click the button "Add to Busket" to purchase our items</p>
             </div>
         ) : (
             <div>
                 <h3>Hello, {user?.email}</h3>
                 <h2 className="checkout_title">Your Shopping Basket</h2>
                 
                     <FlipMove staggerDelayBy={100}>
                     {basket?.map((item)=>(
                        
                        <CheckoutProduct
                        key={Math.random()* 100000}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))
                    }
                     </FlipMove>
               
             </div>
         )
         }
         </div>
         
         {basket?.length>0 && (
             <div className="checkout_right">
                 <h1>Subtotal</h1>
                 <Subtotal />
             </div>
         )}

        </div>
    )
}

export default Checkout;