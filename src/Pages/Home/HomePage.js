import './HomePage.css'
import { products } from '../../data';
import Product from '../../common/product/Product';



const HomePage = () => {
    return (
        <div className="homePage">
            <section className='productsList'>
                {products.map((product, index) => {
                    return <Product key={index} datas={product} />
                })}
            </section>
        </div>
    );
}

export default HomePage;