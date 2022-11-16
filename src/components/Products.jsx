import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ProductDetails from '../productDetails/ProductDetails';
class Products extends Component {
    
    state = {
        products:[
        {id:1,name:"Product 1"},
        {id:2,name:"Product 2"},
        {id:3,name:"Product 3"}
    ]}
    render() { 
        return (
            <>
                {this.state.products.map((p)=>(
                    <li key={p.id}><Link to={`/products/${p.id}`}>{p.name}</Link></li>
                ))}
            </>
        );
    }
}
 
export default Products;