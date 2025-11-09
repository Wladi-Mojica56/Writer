import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Featured from './components/Featured/Featured'
import Poems from './components/Poems/Poems'

function App() {
  return (
    <div className="portfolio">
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Featured 
          title="WLADI MOJICA"
          quote="¿Y si las anomalías no fueran errores, sino versos sin escribir?"
          author="Una reflexión sobre la lógica y la poesía en el código"
          highlightWord="anomalías"
        />
        <Poems />
      </main>
    </div>
  )
}

export default App
