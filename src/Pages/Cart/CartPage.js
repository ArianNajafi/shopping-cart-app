import './CartPage.css'
import { MdOutlineMoreVert } from 'react-icons/md'
import img from "../../img/istockphoto-1327712003-612x612-removebg-preview.png"

import { useCartState } from '../../contexts/CartProvider';
import ProductInCart from '../../common/productInCart/ProductInCart';

const CartPage = () => {
    const cartState = useCartState();

    return (
        <div className="cartPage">
            <div className='cartPage_header'>
                <div className='cartPage_titles'>
                    <h3>سبد خرید شما</h3>
                    <h4>{`${(cartState.totalNum)} کالا`}</h4>
                </div>
                <MdOutlineMoreVert className='cartPage_more' />
            </div>
            {cartState.cart.length !== 0 ?
                <div className='productList'>
                    {/* <hr className='hr'></hr> */}
                    {cartState.cart.map((item) => {
                        return <ProductInCart product={item} key={item.id} />
                    })}
                </div>
                :
                <div className='cartEmpity'>
                    <img className='img_empty' src={img} alt="empity"></img>
                    <p>سبد خرید شما خالی است!</p>
                </div>
            }
            {cartState.cart.length !== 0 ?
                <div className='cartSummary'>
                    <div className='summary_real_totalPrice'>
                        <p>قیمت کالاها({cartState.totalNum})</p>
                        <p>{cartState.totalPrice} تومان</p>
                    </div>
                    <div className='summary_off_totalPrice'>
                        <p>جمع سبد خرید</p>
                        <p>{cartState.totalPrice} تومان</p>
                    </div>
                    <div className='summary_off_discount'>
                        <p>سود شمااز خرید</p>
                        <p>720000 تومان</p>
                    </div>
                </div>
                :
                <></>
            }
        </div>
    );
}

export default CartPage; 