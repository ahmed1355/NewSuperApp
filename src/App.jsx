import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './home';
import Category from './category';
function App() {
  return (
<>
<Router>

<Routes>

<Route path='/' element={<Home/>}/>
<Route path="/category" element={<Category/>}/>


</Routes>

</Router>

</>
    )
}

export default App