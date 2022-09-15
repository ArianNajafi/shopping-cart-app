import { NavLink } from "react-router-dom";
import { useCartState } from "../../contexts/CartProvider";
import { toPersianNumber } from '../../utility/toPersianNumber'


const Navigation = () => {
    const cartState = useCartState();

    return (
        <header className="navigation">
            <nav className="nav">
                <NavLink to="/" className={({ isActive }) => isActive ? "navItem navItemActive" : "navItem"}>فروشگاه</NavLink>
                <div className="cartItem_section">
                    <NavLink to="/cart" className={({ isActive }) => isActive ? "navItem navItemActive" : "navItem"}>سبد خرید</NavLink>
                    <span>{toPersianNumber(cartState.totalNum)}</span>
                </div>
            </nav>
        </header>
    );
}

export default Navigation;