import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Home'
import Footer from './Footer'
import Header from './Header';
function App() {
  const [count, setCount] = useState(0)
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    < >

    
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={ <HomePage/>} />
          </Routes>
        </div>
        <Footer/>
        </div>
    </Router>
    </>
  )
}

export default App

