
import './App.css'
import NavBar from './components/layout/NavBar'
import Container from './components/layout/Container'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'  
import CreateBooks from './components/pages/CreateBooks'
import ListBooks from './components/pages/ListBooks'



function App() {

  return (
    <>
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path='/' element={<NavBar />}>
              <Route path='/' element={<Home />} />
              <Route path='/createBook' element={<CreateBooks />} />
              <Route path='/listBook' element={<ListBooks />} />
            </Route>
          </Routes>
        </Container>
      </BrowserRouter>

    </>

  )
}

export default App
