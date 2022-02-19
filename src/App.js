import React from 'react';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import LoginPage from './components/LoginPage/LoginPage';
import Home from './components/home/Home';
import MyLayout from './MyLayout';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
       <Route path='/' element={<LoginPage/>}/>
       <Route path='/home/:id' element={
              <MyLayout>
              <Home/>
              </MyLayout>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
