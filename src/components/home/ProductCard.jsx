import { Button, Card, Col } from "react-bootstrap";
import productImg from '../../assets/highpoint-sm.jpeg'
import {MdRateReview} from 'react-icons/md'
import {BsCart4} from 'react-icons/bs'
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from 'react-icons/ai'
import { useState } from "react";
import { Link } from "react-router-dom";
import './home.css'

function ProductCard({product, user, fetchCart}) {

    const [ showReviews, setShowReviews ] = useState(false)
    const [myCart, setMyCart] = useState({
        "_id": product._id,
        "name": product.name,
        "price": product.price,
        "quantity": 1
    })

    const setQuantity = (qty) => {
        if(myCart.quantity > 1 || qty === 1){
            setMyCart({...myCart, quantity: myCart.quantity+ qty})
        }
    }

    const addToCart = async(productId) => {
        const url = `http://localhost:3001`
        try {
                const response = await fetch(`${url}/carts/${user._id}`,{
                method : 'POST', 
                body : JSON.stringify(myCart),
                headers:{
                    "Content-Type" : "application/json"
                }
            })
            if(response.ok){
                fetchCart()
            }
        } catch (error) {
            
        }

    }


    return (  
        <Col>
            <Card style={{ width: '15rem', boxShadow:'0 0 3px 3px rgb(200,200,200)', marginTop:'20px', padding:'10px' }}>
            <Card.Img variant="top" src={product.imageUrl || productImg} alt={product.name} style={{width:'100%',maxHeight:'200px'}}/>
            <Card.Body>
                <Card.Title className='bg-dark px-0 m-0 py-2 text-white w-100'>{product.name}</Card.Title>
                <Card.Text >
                    <p className='text-line'>
                    {product.description}
                    </p>
                    <Link to={`/detail/${product._id}`}>
                    <span className='pointer text-primary'>see details</span>
                    </Link>
                    <span onClick={(e) => setShowReviews(!showReviews)}><MdRateReview/></span>
                </Card.Text>
                {/* counter */}
                <div className='d-flex'>
                    <div className='d-flex align-items-center' >
                        <div onClick={(e) => setQuantity(-1)}><AiOutlineMinusCircle/></div>
                        <div style={{width:'20px'}}>{myCart.quantity}</div>
                        <div onClick={(e) => setQuantity(1)}><AiOutlinePlusCircle/></div>
                    </div>
                    <button className='btn btn-sm btn-success ml-2' onClick={(e) => addToCart(product._id) }>Add to cart <BsCart4/></button>
                </div>
            </Card.Body>
            <div style={{display:showReviews? 'block':'none'}}>
                <ul>

                {product.reviews.map(review => {
                    <li>{review.rate} {review.comment}</li>  
                    })}
                </ul>
            </div>
        </Card>
    </Col>
    );
}

export default ProductCard;