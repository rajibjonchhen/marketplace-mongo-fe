import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import {useNavigate} from 'react-router-dom'

const LoginPage = () => {

const navigate = useNavigate()
const [signIn, setSignIn] = useState(false)
const [newUser, setNewUser] = useState({
    name:'',
    email:'',
    avatar:''
})

const handleSignUp = async(e) => {
    const url = 'http://localhost:3001'
    const response = await fetch(`${url}/users`,{
        method:"POST",
        body:JSON.stringify(newUser),
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

const handleSignIn = async(e) => {
            navigate(`/home/62111cad23ae6eaab7ac33bd`)

    // const url = 'http://localhost:3001'
    // const response = await fetch(`${url}/users?`,{
    //     method:"GET",
    //     body:JSON.stringify(user),
    //     headers:{
    //         "Content-type":"application/json"
    //     }
    // })
    // if(response.ok){
    //     let data = await response.json()
    //     if(data._id){
    //         navigate(`/home/${data._id}`)
    //     }
    // }
}
    
    return(
    <Container >
        <Row>
            <Col xs={12} sm={12} md={8} lg={6} className='m-auto' style={{paddingTop:'25vh'}}>
                <div  className='m-auto bg-dark  rounded-lg' style={{minHeigh:'800px'}}>
                   {/* sign in box */}
                    <div style={{display:signIn? 'block':'none'}} >
                        <p className='h3 text-light outline-primary p-3 mt-5'>Enter your userName and password</p>
                        <div className='d-flex flex-column p-4 text-left text-white px-5'>
                        <label htmlFor='email'>Email</label>
                        <input onChange={(e) => setNewUser({...newUser, email:e.target.value})} type='email' id='email' value={newUser.email} className='rounded-lg mb-2'/>
                        <label htmlFor='email'>Password</label>
                        <input onChange={(e) => setNewUser({...newUser, email:e.target.value})} type='email' id='email' value={newUser.email} className='rounded-lg mb-2'/>
                        </div>
                        <div className='pb-3'>
                            <button type='button' className='btn btn-secondary ml-2' onClick={(e) => handleSignIn(e)}>Sign In</button>
                        </div>
                        <p className='p-3 text-light'>Do not hava an account become a member <span className='text-primary pointer' onClick={(e) => setSignIn(false)}>sign up now</span> </p>
                    </div>

                   {/* sign up new member box */}

                    <div style={{display:!signIn? 'block':'none'}}>
                    <p className='h3 text-light outline-primary p-3 mt-5'>Enter your details and sign up to start</p>
                    <div className='d-flex flex-column p-4 text-left text-white px-5'>
                        <label htmlFor='name'> Full Name</label>
                        <input onChange={(e) => setNewUser({...newUser, name:e.target.value})}type='text' id='name' value={newUser.name} className='rounded-lg mb-2'/>
                        <label htmlFor='email'>Email</label>
                        <input onChange={(e) => setNewUser({...newUser, email:e.target.value})} type='email' id='email' value={newUser.email} className='rounded-lg mb-2'/>
                        <label htmlFor='avatar'>Avatar</label>
                        <input onChange={(e) => setNewUser({...newUser, avatar:e.target.value})} type='text' id='avatar' value={newUser.avatar} className='rounded-lg mb-2'/>
                        
                    </div>
                    <div className='pb-3'>
                        <button type='button' className='btn btn-secondary'>Reset</button>
                        <button type='button' className='btn btn-secondary ml-2' onClick={(e) => handleSignUp(e)}>Sign Up</button>
                    </div>
                    <p className='p-3 text-light'>Already a member <span className='text-primary pointer' onClick={(e) => setSignIn(true)}>sign in</span> </p>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
        
        )
}
export default LoginPage