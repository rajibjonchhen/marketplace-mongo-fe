import { useEffect, useState } from "react"
import { Button, Col, Container, Modal, Row } from "react-bootstrap"
import { useNavigate } from "react-router"

function EditProfile({user, setShowEditPage, showEditPage, fetchUser}) {

    const navigate = useNavigate()
    const [updatedUser, setUpdatedUser] = useState({
        name:'',
        email:'',
        avatar:''
    })

    useEffect(() => {
        setUpdatedUser( {
            name: user.name,
            email: user.email,
            avatar:user.avatar
        })
    },[])
    const handleUpdate = async(e) => {
        setShowEditPage(false)
        const url = 'http://localhost:3001'
        const response = await fetch(`${url}/users/${user._id}`,{
            method:"PUT",
            body:JSON.stringify(updatedUser),
            headers:{
                "Content-type":"application/json"
            }
        })
        if(response.ok){
            let data = await response.json()
            fetchUser(data._id)
            }
        }
    

    return ( 
    
    <Container fluid>
        <Row>
            <Col xs={12} sm={12} md={8} lg={6} style={{display:showEditPage? 'block':'none', position:'absolute',margin:'auto', top:'50px', bottom:'0', left:'0', right:'0',backgroundColor:'rgb(40,1,20)'}} >
                    <div  className='bg-dark'>
                    <p className='h3 text-light outline-primary p-3 mt-5'>Edit your information</p>
                    <div className='d-flex flex-column p-4 text-left text-white px-5'>
                        <label htmlFor='name'> Full Name</label>
                        <input onChange={(e) => setUpdatedUser({...updatedUser, name:e.target.value})}type='text' id='name' value={updatedUser.name} className='rounded-lg mb-2'/>
                        <label htmlFor='email'>Email</label>
                        <input onChange={(e) => setUpdatedUser({...updatedUser, email:e.target.value})} type='email' id='email' value={updatedUser.email} className='rounded-lg mb-2'/>
                        <label htmlFor='avatar'>Avatar</label>
                        <input onChange={(e) => setUpdatedUser({...updatedUser, avatar:e.target.value})} type='text' id='avatar' value={updatedUser.avatar} className='rounded-lg mb-2'/>
                        
                    </div>
                    <div className='pb-3'>
                        <button type='button' className='btn btn-secondary ' onClick={(e) => setShowEditPage(false)}>Cancel</button>
                        <button type='button' className='btn btn-secondary ml-2' onClick={(e) => handleUpdate()}>Confirm</button>
                    </div>
                    </div>
                    
            </Col>
        </Row>
    </Container> 
    );
}

export default EditProfile;