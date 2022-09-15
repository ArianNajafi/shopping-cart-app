import './CartPage.css'
import { MdOutlineMoreVert } from 'react-icons/md'
import img from "../../img/istockphoto-1327712003-612x612-removebg-preview.png"

import { useCartState } from '../../contexts/CartProvider';
import ProductInCart from '../../common/productInCart/ProductInCart';
import { toPersianNumber } from '../../utility/toPersianNumber'

const CartPage = () => {
    const cartState = useCartState();

    return (
        <div className="cartPage">
            <div className='cartPage_header'>
                <div className='cartPage_titles'>
                    <h3>سبد خرید شما</h3>
                    <h4>{`${toPersianNumber(cartState.totalNum)} کالا`}</h4>
                </div>
                <MdOutlineMoreVert className='cartPage_more' />
            </div>
            {cartState.cart.length !== 0 ?
                <div className='productList'>
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
                <CartSummary />
                :
                <></>
            }

        </div>
    );
}

export default CartPage;


const CartSummary = () => {
    const cartState = useCartState();

    const totalPrice = cartState.totalPrice;
    const totalPrice_off = cartState.cart.reduce((prevValue, currValue) => {
        return prevValue + currValue.offPrice * currValue.number
    }, 0)

    return (
        <div className='cartSummary'>
            <div className='summary_real_totalPrice'>
                <p>قیمت کالاها({cartState.totalNum})</p>
                <p>{toPersianNumber(totalPrice)} تومان</p>
            </div>
            <div className='summary_off_totalPrice'>
                <p>جمع سبد خرید</p>
                <p>{toPersianNumber(totalPrice_off)} تومان</p>
            </div>
            <div className='summary_off_discount'>
                <p>سود شما از خرید</p>
                <p>{toPersianNumber(totalPrice - totalPrice_off)} تومان</p>
            </div>
            <button className='checkoutBtn'>تکمیل خرید  </button>
            {/* checkout for mobile */}
            <div className='checkout_bar'>
                <button>تکمیل خرید</button>
                <div>
                    <p className='p1'>جمع سبد خرید</p>
                    <p className='p2'>{toPersianNumber(totalPrice_off)} تومان</p>
                </div>
            </div>
        </div>
    )
}