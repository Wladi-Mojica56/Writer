import { useState } from 'react'
import './Poems.css'
import { poems } from '../../data/poems'
import PoemModal from './PoemModal'

interface Poem {
    id: number
    title: string
    excerpt: string
    category: string
    image: string
    author: string
    readTime: string
    content: string
}

function Poems() {
    const [selectedCategory, setSelectedCategory] = useState('Todos')
    const [hoveredPoem, setHoveredPoem] = useState<number | null>(null)
    const [selectedPoem, setSelectedPoem] = useState<Poem | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const categories = [
        'Todos',
        ...Array.from(new Set(poems.map(poem => poem.category)))
    ]

    const filteredPoems = selectedCategory === 'Todos'
        ? poems
        : poems.filter(poem => poem.category === selectedCategory)

    const handleReadPoem = (poem: Poem) => {
        setSelectedPoem(poem)
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setTimeout(() => setSelectedPoem(null), 300)
    }

    return (
        <>
            <section className="poems-section" id="poesia">
                <div className="poems-container">
                    <div className="poems-header">
                        <h2 className="poems-title">GALERÍA POÉTICA</h2>
                        <p className="poems-subtitle">Versos que habitan en la oscuridad</p>
                    </div>

                    <div className="poems-filters">
                        {categories.map(category => (
                            <button
                                key={category}
                                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="poems-grid">
                        {filteredPoems.map((poem, index) => (
                            <article
                                key={poem.id}
                                className="poem-card"
                                onMouseEnter={() => setHoveredPoem(poem.id)}
                                onMouseLeave={() => setHoveredPoem(null)}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="poem-image-wrapper">
                                    <img
                                        src={poem.image}
                                        alt={poem.title}
                                        className="poem-image"
                                    />
                                    <div className="poem-overlay">
                                        <p className="poem-excerpt">{poem.excerpt}</p>
                                    </div>
                                </div>

                                <div className="poem-content">
                                    <span className="poem-category">{poem.category}</span>
                                    <h3 className="poem-title">{poem.title}</h3>
                                    <p className="poem-author">BY {poem.author.toUpperCase()}</p>
                                    <div className="poem-meta">
                                        <span className="poem-read-time">
                                            <span className="icon">⏱</span>
                                            {poem.readTime}
                                        </span>
                                    </div>
                                </div>

                                <button 
                                    className="poem-read-btn"
                                    onClick={() => handleReadPoem(poem)}
                                    aria-label={`Leer poema: ${poem.title}`}
                                >
                                    <span>Leer Poema</span>
                                    <span className="arrow">→</span>
                                </button>
                            </article>
                        ))}
                    </div>

                    {filteredPoems.length === 0 && (
                        <div className="poems-empty">
                            <p>No hay poemas en esta categoría</p>
                        </div>
                    )}

                    <div className="poems-footer">
                        <button className="view-all-btn">
                            <span>Ver Todos los Poemas ({poems.length})</span>
                            <span className="arrow">→</span>
                        </button>
                    </div>
                </div>
            </section>

            {isModalOpen && selectedPoem && (
                <PoemModal 
                    poem={selectedPoem} 
                    onClose={handleCloseModal}
                />
            )}
        </>
    )
}

export default Poems