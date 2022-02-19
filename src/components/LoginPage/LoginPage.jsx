import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import {useLocation,useNavigate} from 'react-router-dom'

const LoginPage = () => {

const navigate = useNavigate()
const [user, setUser] = useState({
    name:'',
    email:'',
    avatar:''
})

const handleLogin = async(e) => {
    const url = 'http://localhost:3001'
    const response = await fetch(`${url}/users`,{
        method:"POST",
        body:JSON.stringify(user),
        headers:{
            "Content-type":"application/json"
        }
    })
    if(response.ok){
        let data = await response.json()
        if(data._id){
            navigate(`/home/${data._id}`)
        }
    }


}
    
    return(
    <Container >
        <Row>
            <Col xs={12} sm={12} md={8} lg={6} className='m-auto' style={{paddingTop:'25vh'}}>
                <div  className='m-auto bg-dark  rounded-lg' >
                    <p className='h3 text-light outline-primary p-3 mt-5'>Enter your details and sign up to start</p>
                    <div className='d-flex flex-column p-4 text-left text-white'>
                        <label htmlFor='name'> Full Name</label>
                        <input onChange={(e) => setUser({...user, name:e.target.value})}type='text' id='name' value={user.name} className='rounded-lg mb-2'/>
                        <label htmlFor='email'>Email</label>
                        <input onChange={(e) => setUser({...user, email:e.target.value})} type='email' id='email' value={user.email} className='rounded-lg mb-2'/>
                        <label htmlFor='avatar'>Avatar</label>
                        <input onChange={(e) => setUser({...user, avatar:e.target.value})} type='text' id='avatar' value={user.avatar} className='rounded-lg mb-2'/>
                        
                    </div>
                    <div className='pb-3'>
                        <button type='button' className='btn btn-secondary'>Reset</button>
                        <button type='button' className='btn btn-secondary ml-2' onClick={(e) => handleLogin(e)}>Sign Up</button>
                    </div>
                    <p className='p-3 text-light'>Already a member <span className='text-primary pointer'>sign in</span> </p>
                </div>
            </Col>
        </Row>
    </Container>
        
        )
}
export default LoginPage