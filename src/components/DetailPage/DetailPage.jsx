import { useEffect, useState } from "react";
import { Badge, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import productImg from '../../assets/highpoint-lg.jpeg'
import Loader from "../../Loader";


function DetailPage() {

    const params = useParams()  

    const [productRating, setProductRating] = useState()
    const [ product, setProduct ] = useState({})
    const [ getReviews, setGetReviews ] = useState([])
    const [ showReviews,setShowReviews] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [errorMsg, setErrorMsg] = useState()
    const [review, setReview] = useState({
        comment:'',
        rate:null
    })
    const rating = [1,2,3,4,5]


    useEffect(() => {
        const id = params.id
        fetchProduct(id)
        console.log(review)
    },[])


    const fetchProduct = async(id) => {
        const url = `http://localhost:3001`
        let totalRating = 5
        try {
            if(id){
                const response = await fetch(`${url}/products/${id}`)
                if(response.ok){
                    let data = await response.json()
                        setProduct(data)
                        setGetReviews(data.reviews)
                        console.log(data.reviews)
                        setIsLoading(false)
                        data.reviews.forEach(item => {
                            totalRating = totalRating + item.rate
                        })
                        setProductRating(totalRating/(data.reviews.length+1))
                    } else{
                        console.log("error in fetching product")
                        setIsLoading(false)
                        setErrorMsg("error in fetching product")
                    }
                } else {
                    console.log('id is undefined')
                    setIsLoading(false)
                    setErrorMsg('id is undefined')
                    setErrorMsg()
                }
            } catch (error) {
                setIsLoading(false)
                setErrorMsg(error)
            
        }
    }

    const addReview = async(id) => {
        const url = `http://localhost:3001`
        try {
            const response = await fetch(`${url}/products/${product._id}/reviews`,{
                method:'POST',
                body:JSON.stringify(review),
                headers:{
                    'Content-Type':'application/json'
                }
            })
            if(response.ok){
                alert("Comment Added")
                fetchProduct()
                setReview({
                    comment:'',
                    rate:null
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    return ( 
        <Container style={{margin:'50px auto', padding:'0 0 50px 0'}}>
            {isLoading? (<Loader/>) : (product && 
                <Row className="justify-content-between">
                    <Col>
                        <img className='rounded-lg' style={{width:'500px'}} src={product.imageUrl || productImg} alt={product.name}/>
                            <Badge pill variant='warning' style={{position:'absolute',top:'10px',left:'50px'}}>{productRating}</Badge>
                    </Col>
                    <Col >
                        <div className='bg-light h-100 p-3'>
                            <p className="h3 p-1 bg-primary rounded-lg text-white">Product Name : {product.name}</p>
                            <div className='text-left'>
                            <p className="">Price : {product.price}</p>
                            <p className="">Category : {product.category}</p>
                            <p className="">Description : {product.description}</p>
                            <button type='button' className='btn btn-secondary' onClick={(e) => setShowReviews(true)}>Show Reviews</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            )}
            <hr/>
            <Row className='mt-3'>
                <Col>
                    <div className="d-flex flex-column p-5 h-100 text-left">
                    <p className='h2'> Number of Reviews {getReviews.length} </p>
                        <ul className='list-unstyled'>
                            {getReviews &&
                                getReviews.map(review => 
                                    <li>{review.rate }{ review.comment}</li>
                                    )
                                }
                        </ul>
                    </div>
                </Col>
                <Col>
                <div className="d-flex flex-column p-5 h-100 text-left mb-5">
                    <h3>Leave your review</h3>
                    <label for='comment'>Comment</label>
                    <textarea id="comment"  value={review.comment} onChange={(e) => setReview({...review, comment:e.target.value})}/>
                    <label for='rate'>Rate the post</label>
                    <div className="d-flex justify-content-between align-items-center">
                    {rating.map(i => <>
                        <label for='rate'>{i}</label>
                        <input type="radio" name="rate" value={review.rate} onChange={(e) => setReview({...review, rate: i})}/>
                        </>
                        )
                    }
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                    <button type='button' className='btn btn-outline-dark'>Cancel</button>
                    <button type='button' className='btn btn-outline-dark mx-2 '>Reset</button>
                    <button type='button' className='btn btn-outline-dark' onClick={(e) => addReview() }>Submit</button>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
     );
}

export default DetailPage;