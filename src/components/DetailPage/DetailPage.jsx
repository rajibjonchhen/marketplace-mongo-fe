import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import productImg from '../../assets/highpoint-lg.jpeg'
import Loader from "../../Loader";


function DetailPage() {

    const params = useParams()
    const [ product, setProduct ] = useState({})
    const [ reviews, setReviews ] = useState([])
    const [ showReviews,setShowReviews] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [errorMsg, setErrorMsg] = useState()
    useEffect(() => {
        const id = params.id
        fetchProduct(id)
    },[])


    const fetchProduct = async(id) => {
        const url = `http://localhost:3001`
        try {
            if(id){
                const response = await fetch(`${url}/products/${id}`)
                if(response.ok){
                    let data = await response.json()
                        setProduct(data)
                        setReviews(data.reviews)
                        setIsLoading(false)
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
    return ( 
        <Container style={{marginTop:'50px'}}>
            {isLoading? (<Loader/>) : (product && 
                <Row >
                    <Col>
                        <img style={{width:'500px'}} src={product.imageUrl || productImg} alt={product.name}/>
                    </Col>
                    <Col>
                            <p className="h3">{product.name}</p>
                            <p className="">{product.price}</p>
                            <p className="">{product.description}</p>
                            <button onClick={(e) => setShowReviews(true)}>Show Reviews</button>
                            <div style={{display:showReviews? 'block':'none'}}>
                                <ul>
                                    {reviews &&
                                        reviews.map(review => {
                                            <li>{review.rate }{ review.comment}</li>
                                        })
                                    }
                                </ul>
                            </div>
                    </Col>
                </Row>
            )}
        </Container>
     );
}

export default DetailPage;