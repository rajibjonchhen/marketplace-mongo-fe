import { Button, Card, Col } from "react-bootstrap";
import productImg from '../../assets/highpoint-sm.jpeg'
import {MdRateReview} from 'react-icons/md'
import {BsCart4} from 'react-icons/bs'
import { useState } from "react";
import { Link } from "react-router-dom";
import './home.css'

function ProductCard({product}) {

    const [ showReviews, setShowReviews ] = useState(false)

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
                <button className='btn btn-sm btn-success'>Add to cart <BsCart4/></button>
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