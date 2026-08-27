
import { Route } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes } from 'react-router-dom'
import Landing_page from './routes/Landing_page'
import Pansion from './routes/Pansion'
import Camp from './routes/Camp'
import Discover_Tisno from './routes/Discover_Tisno'
import Apartments from './routes/Apartments'  

function App() {

  return (
    <>
      <div className="app">
        <Header/>
        <Routes>
          <Route path="/" element={<Landing_page/>}/>
          <Route path="/pansion" element={<Pansion/>}/>
          <Route path="/camp" element={<Camp/>}/>
          <Route path="/discover_tisno" element={<Discover_Tisno/>}/>
          <Route path="/apartments" element={<Apartments />} />
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App
