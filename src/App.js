import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Projects from "./components/pages/Projects";

import Container from "./components/layout/Container";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="App">
      <Router>

        <NavBar />

        <Container customClass="min-height">
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/company" element={<Company />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/newproject" element={<NewProject />}></Route>
          </Routes>
        </Container>

        <Footer />

      </Router>
    </div>
  );
}

export default App;
