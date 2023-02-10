import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';


const Cart = (props)=>{

    const ctx = useContext(CartContext); 

    const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
    const hasItems = ctx.items.length > 0
    const data = ctx.items;

    const cartItemRemoveHandler = (id)=>{
        console.log(id)
        ctx.removeItem(id);
    }

    const cartItemAddHandler = (item)=>{
        ctx.addItem({...item, amount:1})
    }
    return (
        <Modal onClose={props.onClose}>
            {/* {cartItems} */}
            <ul className={classes['cart-items']}>
                {data.map((item)=>(
                    <CartItem 
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                    />
                ))}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                { hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart;