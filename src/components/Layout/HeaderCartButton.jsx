import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';
import CartContext from "../../store/cart-context";
import { useContext, useEffect, useState } from "react";


const HeaderCartButton = (props) =>{
    const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false)
    const ctx = useContext(CartContext);
    
    const {items} = ctx;
    const numberOfCartItems = items.reduce((curNumber, item)=>{
        return curNumber + item.amount;
    }, 0);


    const htmlClasses = `${classes.button} ${buttonIsHighlighted ? classes.bump: ''}`
    useEffect(()=>{
        if(items.length === 0){
            return;
        }
        setButtonIsHighlighted(true);
        const timer = setTimeout(()=>{
            setButtonIsHighlighted(false)
        }, 300)

        return ()=>{
            clearTimeout(timer);
        }
    }, [items])
    return (
        <button className={htmlClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>
    )
}

export default HeaderCartButton;