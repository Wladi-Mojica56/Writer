import styles from './Featured.module.css'
import bookCover from '../../img/portada.png' 

interface FeaturedProps {
  title?: string
  quote: string
  author?: string
  highlightWord?: string
}

function Featured({ 
  title = 'WLADI MOJICA',
  quote = '¿Y si las anomalías no fueran errores, sino versos sin escribir?',
  author = 'Una reflexión sobre la lógica y la poesía en el código',
  highlightWord = 'anomalías'
}: FeaturedProps) {
  
  const renderQuoteWithHighlight = () => {
    if (!highlightWord) return quote
    
    const regex = new RegExp(`(${highlightWord})`, 'gi')
    const parts = quote.split(regex)
    
    return parts.map((part, index) => 
      part.toLowerCase() === highlightWord.toLowerCase() 
        ? <span key={index} className={styles.highlight}>{part}</span>
        : part
    )
  }

  return (
    <section 
      className={styles.section}
      aria-label="Contenido destacado"
    >
      <div className={styles.container}>
        {/* Card con imagen */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.label}>DESTACADO</span>
            <div className={styles.divider}></div>
          </div>
          
          <div className={styles.cardContent}>
            <img 
              src={bookCover} 
              alt={`Portada del libro ${title}`}
              className={styles.bookImage}
            />
          </div>
          
          <div className={styles.cardFooter}>
            <div className={styles.pulseLine}></div>
            <p className={styles.cardSubtitle}>{title.toLowerCase()}</p>
          </div>
        </div>

        {/* Contenido derecha */}
        <div className={styles.content}>
          <blockquote className={styles.quote}>
            {renderQuoteWithHighlight()}
          </blockquote>
          
          <p className={styles.author}>{author}</p>
          
          <a 
            href="#obra" 
            className={styles.link}
            aria-label="Leer más sobre esta reflexión"
          >
            <span>Explorar más</span>
            <span className={styles.arrow}>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Featured
