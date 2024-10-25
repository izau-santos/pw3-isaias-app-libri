import './App.css'
import NavBar from './components/layout/NavBar'
import Container from './components/layout/Container'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'  
import CreateBooks from './components/pages/CreateBooks'
import DetailBook from './components/pages/DetailBook'
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
              <Route path='/DetailBook/:cod_livro' element={<DetailBook />} />
            </Route>
          </Routes>
        </Container>
      </BrowserRouter>

    </>

  )
}

export default App
