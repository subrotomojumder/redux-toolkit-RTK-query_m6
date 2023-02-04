import React from 'react';
import Product from './Components/Product';

const TopProducts = () => {
    // const {state: {products, loading, error}} = useProduct();
    
    // let content;
    // if (loading) {
    //     content = <div>Loading......</div>;
    // }
    // if (error) {
    //     content = <div>Something want wrong</div>;
    // } 
    // if (!loading && !error && products.length === 0) {
    //     content = <div>Nothing to show, product list empty</div>
    // }
    // if (!loading && !error && products.length) {
    //     content = products.filter(product=> product?.idMeal >= 53000).map((product)=> <Product product={product} key={product.idMeal}/>);
    // }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 max-w-7xl gap-14 mx-auto my-10'>
           
        </div>
    );
};

export default TopProducts;