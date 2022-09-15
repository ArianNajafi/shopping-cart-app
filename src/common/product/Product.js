import './Product.css'

import { ProductInCartActions } from '../../container/Layout';
import { useContext } from 'react';
import { useCartState, useCartStateDispatcher } from '../../contexts/CartProvider';
import { getEsistenceProduct } from '../../utility/existenceProduct_inCart';
import { useNavigate } from 'react-router-dom';
import { toPersianNumber } from '../../utility/toPersianNumber';

const Product = ({ product }) => {
    const navigate = useNavigate();

    const cartState = useCartState()
    const cartStateDispatcher = useCartStateDispatcher()

    getEsistenceProduct(cartState.cart, product);

    const addProductHandler = () => {
        cartStateDispatcher({ type: "ADD_TO_CART", product: product })
    }

    return (
        <div className="product">
            <div className='product_img_section'>
                <img className='product_img' src={product.image} alt="img"></img>
            </div>
            <div className='product_name'>
                <p>{product.name}</p>
            </div>
            <div className='product_price_state'>
                <button
                    className={getEsistenceProduct(cartState.cart, product) ? "addedProduct_btn" : "addProduct_btn"}
                    onClick={() => {
                        getEsistenceProduct(cartState.cart, product) ? navigate("/cart") : addProductHandler()
                    }}>
                    {getEsistenceProduct(cartState.cart, product) ? "ادامه خرید" : "افزودن به سبد"}
                </button>
                <p className='product_price'>{toPersianNumber(product.price)}  تومان</p>
            </div>
        </div >
    );
}

export default Product;