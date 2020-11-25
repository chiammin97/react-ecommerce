import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; 
import { detailsProduct } from '../actions/productActions';

function ProductScreen(props) {
    
    const [qty, setQty] = useState(1);
    const productDetails = useSelector(state => state.productDetails);
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch();

   useEffect(() => {
       dispatch(detailsProduct(props.match.params.id));
       return () => {
           //
       };
   }, [])

   const handleAddToCart = () => {
       props.history.push("cart/" + props.match.params.id + "?qty=" + qty)
   }

    return ( 
    <div>
        <div className="back-to-result">
            <Link to="/">Back to Results</Link>
        </div>

        {loading? <div>Loading...</div>:
        error? <div>{error}</div>:
        (
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
                        Status: {product.countInStock >0 ? "In Stock" : "Unavailable"}
                    </li>
                    <li>
                        Qty: <select value={qty} onChange={(e) => { setQty(e.target.value) }}>
                         {[...Array(product.countInStock).keys()].map(x=>
                            <option key={x+1} value={x+1}>{x+1}</option>
                            )}   
                        </select>
                    </li>
                    {product.countInStock >0 && <button onClick={handleAddToCart}>Add to Cart</button>}
                    
                </ul>
            </div>
        </div> 
        )
     }
    </div>
    )
}
export default ProductScreen;

