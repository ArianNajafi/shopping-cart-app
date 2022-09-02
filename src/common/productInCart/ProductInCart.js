import './ProductInCart.css'
import { CgTrash } from 'react-icons/cg'
import { BiPlus } from 'react-icons/bi'
import { HiMinusSm } from 'react-icons/hi'

const ProductInCart = ({ product }) => {

    return (
        <div className="productInCart">
            <div className="img_info_section">
                <div className="productImgDiv"> <img className='productImg' src={product.image} alt="img"></img> </div>
                <div className="productInfo">
                    <p className='productName_inCart'>{product.name}</p>
                    <p>{product.description[0].support}</p>
                    <p>{product.description[1].support}</p>
                    <p>{product.description[2].support}</p>
                </div>
            </div>
            <div className="price_number_section">
                <div className="controlNumber">
                    <BiPlus className='addNumber_btn' />
                    <p>{product.number}</p>
                    {product.number === 1 ? <CgTrash className='removeProduct_btn' /> : <HiMinusSm className='minesNumber_btn' />}

                </div>
                <p className="product_price">{product.price} تومان</p>
            </div>
            <hr className='hr'></hr>
        </div >
    );
}

export default ProductInCart;