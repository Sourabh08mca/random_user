import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RandomUser from './component/RandomUser'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RandomUser/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
