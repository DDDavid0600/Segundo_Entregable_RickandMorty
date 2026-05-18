import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from "./Components/Header/Header"
import Nav from './Components/Nav/Nav'

//Pages
import Home from './Pages/Home/Home'
import Filter from './Pages/Filter/Filter'
import Details from './Pages/Details/Details'
import Error from './Pages/Error/Error'

function App() {
  return (
    <>
    <Header></Header>
      <Router>
        <Nav></Nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Filtrar' element={<Filter/>} />
          <Route path='/character/:id' element={<Details />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
