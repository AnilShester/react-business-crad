import React from 'react'
import CardImage from './components/CardImage'
import CardInfo from './components/CardInfo'
import Footer from './components/Footer'

import './App.css'

function App() {
  return (
    <div className="container">
      <div className="card-contianer">
        <CardImage />
        <CardInfo />
        <Footer />
      </div>
    </div>
  )
}

export default App
