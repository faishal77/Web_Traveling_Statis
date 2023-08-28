import { useState } from 'react'
import './App.css'
import LandingPage from './Pages/LandingPage/LandingPage'
import Navbar from './Pages/Navbar/Navbar'
import Find from './Pages/RowdBeutyfulPlace/Find'
import Card from './Pages/SpesifikPlace/Card'
import Etd from './Pages/ExploreTravelDoHiking/Etd'
import Destination from './Pages/Destination/Destination'



const App = () => {
  return(
    <>
      <LandingPage/>
      <Navbar/>
      <Etd/>
      <Find/>
      <Card/>
      <Destination/>
    </>
  )
}

export default App
