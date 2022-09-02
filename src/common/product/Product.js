import './Product.css'

import { ProductInCartActions } from '../../container/Layout';
import { useContext } from 'react';
import { useCartProductsDispatcher } from '../../contexts/CartProvider';

const Product = ({ datas }) => {

    const CartProductsDispatcher = useCartProductsDispatcher()

    const addProductHandler = () => {
        CartProductsDispatcher({ type: "ADD_TO_CART", product: datas })
    }

    return (
        <div className="product">
            <div className='product_img_section'>
                <img className='product_img' src={datas.image} alt="img"></img>
            </div>
            <div className='product_info'>
                <p>{datas.name}</p>
                <p>{datas.price}$</p>
            </div>
            <button onClick={() => addProductHandler()}>Add</button>
        </div >
    );
}

export default Product;