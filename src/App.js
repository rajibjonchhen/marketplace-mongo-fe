import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import LoginPage from './components/LoginPage/LoginPage';
import Home from './components/home/Home';
import MyLayout from './MyLayout';
import DetailPage from './components/DetailPage/DetailPage';


function App() {

  const [user, setUser] = useState()
  const [myCart, setMyCart] = useState([])
  
  const fetchUser = async(id) => {
    const url =  `http://localhost:3001`
    try {
        const response = await fetch(`${url}/users/${id}`)
        if(response.ok){
            let data = await response.json()
            if(data._id){
                console.log(data)
                setUser(data)
                fetchCart(id)
            }
        }
    } catch (error) {
        console.log(error)
    }
}

      const fetchCart = async(id) => {
        const url =`http://localhost:3001`
        try {
          const response = await fetch(`${url}/carts/${id}`)
          if(response.ok){
            const data = await response.json()
            console.log(data.products)
            setMyCart(data.products)
          }
        } catch (error) {
          
        }
      }

  return (
    <div className="App" >
     <BrowserRouter>
     <Routes>
       {/* route to home with layout for navbar and footer */}
       <Route path='/' element={<LoginPage/>}/>
        <Route path='/home/:id' element={
         <MyLayout user={user} setUser={setUser} fetchUser={fetchUser} myCart={myCart} setMyCart={setMyCart}>
                  <Home user={user} setUser={setUser} fetchUser={fetchUser} fetchCart={fetchCart}/>
              </MyLayout>}/>
        
      {/* route to detail page with layout for navbar and footer */}
      <Route path='/detail/:id' element={
      <MyLayout user={user} setUser={setUser} fetchUser={fetchUser} myCart={myCart} setMyCart={setMyCart}>
        <DetailPage user={user} setUser={setUser}/>
      </MyLayout>}/>

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
