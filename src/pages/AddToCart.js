import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Product from './Components/Product';
import { removeFormCart } from './Redux/productAction/productAction';

const AddToCart = () => {
  const cart = useSelector((state) => state.product.cart);
  // console.log(cart)
  const dispatch = useDispatch();
  return (
    <div className=' mx-auto my-10'>
      add to cart page
      <div className='grid grid-cols-1 md:grid-cols-2 max-w-7xl gap-14'>
        {
          cart.sort((a, b) => a.cartPosition - b.cartPosition)
          .map((product) => <Product product={product} key={product.idMeal} >
            <div className='flex justify-between px-4 items-center bg-green-400 rounded-full py-2 mb-4'>
              <p className='text-xl'>{product.quantity} item Remove</p>
              <button onClick={() => dispatch(removeFormCart(product))} className='btn btn-sm btn-ghost rounded-full'>
                <FaTrash className='text-xl text-green-700 my-1 hover:text-red-800' />
              </button>
            </div>
          </Product>)
        }
      </div>
    </div>
  );
};

export default AddToCart;