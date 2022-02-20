import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import Loader from "../../Loader";
import ProductCard from "./ProductCard";

function Home({user, setUser, fetchUser, fetchCart}) {

    const params = useParams()
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [errorMsg, setErrorMsg] = useState()
    useEffect(()=>{
        let id = params.id
        fetchUser(id)
        fetchProducts(id)
    },[])

  

    const fetchProducts = async(id) => {
        const url = `http://localhost:3001`
        try {
            const response = await fetch(`${url}/products`)
            if(response.ok){
                let data = await response.json()
                if(data){
                    console.log(data)
                    setProducts(data.products)
                    setIsLoading(false)
                }else{
                    console.log("error on fetching products")
                    setErrorMsg("error on fetching products")
                    setIsLoading(false)
                }
            }
        } catch (error) {
            setErrorMsg(error)
            setIsLoading(false)
        }
    }

    return ( 
        <Container >
            <Row className="pt-4">
                {isLoading? (<Loader/>):(products && products.map(product => <ProductCard product={product} user={user} fetchCart={fetchCart}/>))
                }  
            </Row>
        </Container>
     );
}

export default Home;