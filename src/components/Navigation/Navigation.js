import { NavLink } from "react-router-dom";


const Navigation = () => {
    return (
        <header className="navigation">
            <nav className="nav">
                <NavLink to="/" className={({ isActive }) => isActive ? "navItemActive" : "navItem"}>فروشگاه</NavLink>
                <NavLink to="/cart" className={({ isActive }) => isActive ? "navItemActive" : "navItem"}>سبد خرید</NavLink>
            </nav>
        </header>
    );
}

export default Navigation;