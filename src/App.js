import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Read from './components/Read';
import Create from './components/Create';
/* The following line is included in src/index.js or App.js file */


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    {/* some comment */}
<    Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/read">Read</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


    <Routes>
      <Route path='/' element={<Content></Content>}></Route>
      <Route path='/read' element={<Read></Read>}></Route>
      <Route path='/create' element={<Create></Create>}></Route>
    </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
