import React from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import Delhivery from './Component/Delhivery'
import About from './Component/About'
import Recipes from './Component/Recipes'
import Topcollection from './Component/Topcollection'
import Team from './Component/Team'
import Testimonial from './Component/Testimonial'
import Fotter from './Component/Fotter'

const App = () => {
  return (
    <>

      <Navbar></Navbar>
      <Home></Home>
      <Delhivery></Delhivery>
      <About></About>
      <Recipes></Recipes>
      <Topcollection></Topcollection>
      <Team></Team>
      <Testimonial></Testimonial>

      <Fotter></Fotter>

    </>
  )
}

export default App