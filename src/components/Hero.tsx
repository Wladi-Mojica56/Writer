import './Hero.css'
import silueta from '../img/silueta.png'

function Hero() {
  return (
    <section 
      className="hero-section" 
      aria-label="Introduction"
    >
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-title">
            <h1 className="hero-title-word">OSCURIDAD</h1>
            <h1 className="hero-title-word">ENTRE</h1>
            <h1 className="hero-title-word hero-title-word--gray">PALABRAS</h1>
          </div>
          <p className="hero-description">
            Escritor emergente especializado en thriller psicológico y poesía que explora la fragilidad mental.
          </p>
          <a 
            href="#obra" 
            className="hero-explore-link"
            aria-label="Explorar obra"
          >
            <span className="hero-explore-text">Explorar</span>
            <span className="hero-explore-arrow">→</span>
          </a>
        </div>
        <div className="hero-silhouette">
          <img src={silueta} alt="Silueta abstracta" className="hero-silhouette-image" />
        </div>
      </div>
    </section>
  )
}

export default Hero