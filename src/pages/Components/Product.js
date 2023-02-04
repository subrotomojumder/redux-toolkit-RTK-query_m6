import React from 'react';

const Product = ({ product, children }) => {

    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img src={product.strMealThumb} alt="Shoes" /></figure>
                <div className=" text-center p-6">
                    <h2 className="card-title">Category: {product.strArea}</h2>
                    <p>{product.strInstructions.slice(0, 200)}</p>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Product;