import './CartPage.css'
import { MdOutlineMoreVert } from 'react-icons/md'

import { useCartProducts } from '../../contexts/CartProvider';
import ProductInCart from '../../common/productInCart/ProductInCart';

const CartPage = () => {
    const cartProducts = useCartProducts();



    return (
        <div className="cartPage">
            <div className='cartPage_header'>
                <div className='cartPage_titles'>
                    <h3>سبد خرید شما</h3>
                    <h4>{`${cartProducts.cart.length} کالا`}</h4>
                </div>
                <MdOutlineMoreVert className='cartPage_more' />
            </div>
            <div className='productList'>
                {/* <hr className='hr'></hr> */}
                {cartProducts.cart.map((item) => {
                    return <ProductInCart product={item} key={item.id} />
                })}
            </div>
        </div>
    );
}

export default CartPage; 