import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from './Components/Product';
import { toggleBrand, toggleStock } from './Redux/FilterAction/filterAction';
import { addToCart, loadProducts } from './Redux/productAction/productAction';
import loadProductData from './Redux/thunk/products/fetchProducts';

const Home = () => {
    const dispatch = useDispatch();
    const filters = useSelector((state) => state.filter.filters);
    const products = useSelector((state) => state.product.products);
    const activeClass = "btn-primary";
    const { brands, stock } = filters;
    useEffect(() => {
        dispatch(loadProductData())
    }, [dispatch])
    // console.log(products)

    let content;
    if (products.length) {
        content = products.map(product => <Product product={product} key={product.idMeal}>
            <div className='flex justify-between items-center mb-4'>
                <button
                    onClick={() => dispatch(addToCart(product))}
                    className='btn btn-primary rounded-full w-full ml-2'
                >Add To Cart</button>
            </div>
        </Product>)
    }
    if (products.length && (stock || brands.length)) {
        content = products
            .filter((product) => {
                if (stock) {
                    return product.strTags === null;
                }
                return product;
            })
            .filter((product) => {
                if (brands.length) {
                    return brands.includes(product.strArea)
                }
                return product;
            })
            .map(product => <Product product={product} key={product.idMeal}>
                <div className='flex justify-between items-center mb-4'>
                    <button
                        onClick={() => dispatch(addToCart(product))}
                        className='btn btn-primary rounded-full w-full ml-2'
                    >Add To Cart</button>
                </div>
            </Product>)
    }
    return (
        <div className=' mx-auto mb-10 mt-2'>
            <div className='my-4 flex justify-between items-center'>
                <h4 className='text-2xl text-left'> Home page</h4>
                <div>
                    <button onClick={() => dispatch(toggleStock())} className={`btn btn-sm ml-1 ${stock ? activeClass : "btn-outline"}`}>In stock</button>
                    <button onClick={() => dispatch(toggleBrand("Canadian"))} className={`btn btn-sm ml-1 ${brands.includes("Canadian") ? activeClass : "btn-outline"}`}>Canadian</button>
                    <button onClick={() => dispatch(toggleBrand("Italian"))} className={`btn btn-sm ml-1 ${brands.includes("Italian") ? activeClass : "btn-outline"}`}>Italian</button>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 max-w-7xl gap-14'>
                {content}
            </div>
        </div>
    );
};

export default Home;