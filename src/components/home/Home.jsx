import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import ProductCard from "./ProductCard";

function Home({user, setUser}) {

    const params = useParams()
    const [products, setProducts] = useState([])

    useEffect(()=>{
        let id = params.id
        fetchUser(id)
        fetchProducts(id)
    },[])

    const fetchUser = async(id) => {
        const url =  `http://localhost:3001`
        try {
            const response = await fetch(`${url}/users/${id}`)
            if(response.ok){
                let data = await response.json()
                if(data._id){
                    console.log(data)
                    setUser(data)
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    const fetchProducts = async(id) => {
        const url = `http://localhost:3001`
        try {
            const response = await fetch(`${url}/products`)
            if(response.ok){
                let data = await response.json()
                if(data){
                    console.log(data)
                    setProducts(data.products)
                }
            }
        } catch (error) {
            
        }
    }

    return ( 
        <Container>
            <Row>
                {products && products.map(product => <ProductCard product={product}/>)}
            </Row>
        </Container>
     );
}

export default Home;