import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cart from './../../assets/images/cart.png';

export default function CartCount() {
    const cartItemCount  = useSelector((state) => state.TestCartList.cartTest);

    return (
        <Link to='/my-cart' className='position-relative'>
            <img src={cart} alt="" className="img-fluid"/>
                {
                    cartItemCount !== undefined 
                    ? 
                        
                        cartItemCount.length !== 0 ?
                            <b className="badge badge-dark cart-count">{cartItemCount.length}</b>
                        : null
                    : 
                        localStorage.getItem('CartTestList') !== null 
                    ?
                        JSON.parse(localStorage.getItem('CartTestList')).length !== 0 ? 
                        <b className="badge badge-dark cart-count">{JSON.parse(localStorage.getItem('CartTestList')).length}</b>
                        : null
                    :   null
                }
            <span>Cart</span>
        </Link>
    )
}