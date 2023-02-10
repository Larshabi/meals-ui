import classes from './Cart.module.css';

const Cart = (props)=>{
const cartItems = (
<ul className={classes['cart-items']}>
    {[{id:'c1', name:'sushi', amount:2, price:12.99}].map(item=>(<li>{item.name}</li>))}
</ul>) ;
    return (
        <div>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amounts</span>
                <span>36.52</span>
            </div>
            <div></div>
        </div>
    )
}

export default Cart;