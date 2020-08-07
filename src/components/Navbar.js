import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';

import './navbar.css'

const Navbar = ({cart}) => {
    const dataCart = cart.length;
    return (
        <div className="navbar">
             <Link to="/"> Home
             </Link> 
             <h1>Adorable Furniture</h1>
             <Link to="/cart"> Cart{`(${dataCart})`}
             </Link>   
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        cart : state.cart
    }
}

export default connect(mapStateToProps, null)(Navbar);