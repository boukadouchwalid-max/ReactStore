import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import ListeMovies from './components/ListeMovies.jsx'
import Watchlist from './components/Watchlist.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navbar />
        <main className="container app-content">
          <Routes>
            <Route path="/" element={<ListeMovies />} />
            <Route path="/watchlist" element={<Watchlist />} />
          </Routes>
        </main>
        <footer className="app-footer">
          <span>Movie App</span>
          <span>Une histoire à la fois.</span>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
