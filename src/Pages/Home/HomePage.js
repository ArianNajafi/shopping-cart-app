import './HomePage.css'
import { products } from '../../data';
import Product from '../../common/product/Product';
import Layout from '../../container/Layout';



const HomePage = () => {
    return (
        <Layout>
            <div className="homePage">
                <section className='productsList'>
                    {products.map((product, index) => {
                        return <Product key={index} product={product} />
                    })}
                </section>
            </div>
        </Layout>
    );
}

export default HomePage;