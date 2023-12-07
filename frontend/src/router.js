import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Edit from './update.js'
import Create from  './create.js'
import Home from './home.js'
import Read from './read.js'
function Routing(){
  return(
    <div>
        <Router>
            <Routes>
              <Route path="/edit/:id" element={<Edit/>}/>
              <Route path="/read/:id" element={<Read/>}/>
              <Route path="/Create" element={<Create/>}/>
            </Routes>
            <Home/>
        </Router>
    </div>
  )
}
export default Routing