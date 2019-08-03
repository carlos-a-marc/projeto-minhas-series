import React, { useState, useEffect } from 'react'
import Header from './Header'
import Generos from './Generos'
import EditarGenero from './EditarGenero'
import NovoGenero from './NovoGenero'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const Home = () => {
  return <h1>Home</h1>
}

function App() {
  const [data, setData] = useState({}) // vazio
  useEffect(() => { // dispara um efeito colateral quando app é chamado
    axios.get('/api').then(res => {
      setData(res.data)
    })
  }, [])

  return (
    <Router>
      <div>
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/genre/:id' exact component={EditarGenero} />
        <Route path='/genre/new' exact component={NovoGenero} />   
        <Route path='/genre' exact component={Generos} />   
        
      </div>
    </Router>
  )
}

export default App;
