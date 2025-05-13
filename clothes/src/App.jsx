import React from 'react'
import LandingPage from './pages/LandingPage'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Electronics from './components/Electronics'
import Jewelery from './components/Jewelery'
import MenClothing from './components/MenClothing'
import WomenClothing from './components/Receipe'
import Unique from './singles/Unique'
import UserCart from './UserCart'
import Login from './Auth/Login'
import Register from './Auth/Register'
import ProtectedRoute from './components/ProtectedRoute'
import SearchResults from './components/SearchResults'
import Drinks from './components/Drinks'
import SinComponents from './singleComponents/IndividualElectonics'
import IndividualJeweller from './singleComponents/IndividualJeweller'
import IndividualMenClothing from './singleComponents/IndividualMenClothing'
import IndividualReceipe from './singleComponents/IndividualReceipe'

import IndividualDrinks from './singleComponents/IndividualDrinks';



const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<ProtectedRoute><LandingPage/></ProtectedRoute>}/>
       
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
       <Route path='/search-results' element={<SearchResults/>} />
        
        <Route path="/electronic" element={<Electronics/>}/>
        <Route path="/jewellery" element={<Jewelery/>}/>
        <Route path='/menClothing' element={<MenClothing/>}/>
        <Route path='/womenClothing' element={<WomenClothing/>}/>
       <Route path="/unique/:type/:id" element={<Unique />} />
        <Route path="/cart" element={<UserCart/>} />   
        <Route path="/drinks" element={<Drinks/>}/> 

        <Route path='/singleComponent' element={<SinComponents/>}/>
        <Route path='/singleJewellery' element={<IndividualJeweller/>}/>
        <Route path='/singleMenClothing' element={<IndividualMenClothing/>}/>
        <Route path='/singleReceipe' element={<IndividualReceipe/>}/>
        <Route path='/singleDrink' element={<IndividualDrinks/>}/>
        
      </Routes>
      
    </div>
  )
}

export default App