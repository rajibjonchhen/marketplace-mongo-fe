import { useState } from "react"
import { useNavigate } from "react-router"

function EditProfile({user}) {

    const navigate = useNavigate()
    const [updatedUser, setUpdatedUser] = useState({
        name:'',
        email:'',
        avatar:''
    })
    const handleUpdate = async(e) => {
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
            if(data._id){
                navigate(`/home/${data._id}`)
            }
        }
    }

    return ( 
    <div>
        <p className='h3 text-light outline-primary p-3 mt-5'>Enter your details and sign up to start</p>
                    <div className='d-flex flex-column p-4 text-left text-white px-5'>
                        <label htmlFor='name'> Full Name</label>
                        <input onChange={(e) => setUpdatedUser({...updatedUser, name:e.target.value})}type='text' id='name' value={updatedUser.name} className='rounded-lg mb-2'/>
                        <label htmlFor='email'>Email</label>
                        <input onChange={(e) => setUpdatedUser({...updatedUser, email:e.target.value})} type='email' id='email' value={updatedUser.email} className='rounded-lg mb-2'/>
                        <label htmlFor='avatar'>Avatar</label>
                        <input onChange={(e) => setUpdatedUser({...updatedUser, avatar:e.target.value})} type='text' id='avatar' value={updatedUser.avatar} className='rounded-lg mb-2'/>
                        
                    </div>
                    <div className='pb-3'>
                        <button type='button' className='btn btn-secondary'>Reset</button>
                        <button type='button' className='btn btn-secondary ml-2' onClick={(e) => handleUpdate()}>Sign Up</button>
                    </div>
                    
    </div> );
}

export default EditProfile;