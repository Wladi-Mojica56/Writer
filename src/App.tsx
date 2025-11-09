import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  return (
    <div className="portfolio">
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
      </main>
    </div>
  )
}

export default App
