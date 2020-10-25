import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';

function ProductScreen(props) {
    console.log(typeof props.match.params.ids)
    const product = data.products.find(x => x._id === props.match.params.id);
    return ( <div>
        <div className="back-to-result">
            <Link to="/">Back to Results</Link>
        </div>
        <div className="details">
            <div className="details-image">
                <img src={product.image} alt="product"/>
            </div>
            
            <div className="details-info">
                <ul>
                    <li>
                        <h3>{product.name}</h3>
                    </li>
                    <li>
                        Description: <br></br> {product.description}
                    </li>
                    <li>
                        Size: {product.size}
                    </li>
                    <li>
                        Price: <b>${product.price}</b>
                    </li>
                    <li>
                        Status: {product.status}
                    </li>
                    <li>
                        Qty: <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </li>
                    <button>Add to Cart</button>
                </ul>
            </div>
        </div>
    </div>
    )
}
export default ProductScreen;

