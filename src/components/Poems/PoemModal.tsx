
import { useEffect } from 'react'
import './PoemModal.css'

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

interface PoemModalProps {
    poem: Poem
    onClose: () => void
}

function PoemModal({ poem, onClose }: PoemModalProps) {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose()
            }
        }

        document.addEventListener('keydown', handleEscape)
        document.body.style.overflow = 'hidden'

        return () => {
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = 'unset'
        }
    }, [onClose])

    return (
        <div className="poem-modal-overlay" onClick={onClose}>
            <div className="poem-modal" onClick={(e) => e.stopPropagation()}>
                <button 
                    className="modal-close-btn"
                    onClick={onClose}
                    aria-label="Cerrar modal"
                >
                    ✕
                </button>

                <div className="modal-header">
                    <div className="modal-image">
                        <img src={poem.image} alt={poem.title} />
                    </div>
                    <div className="modal-header-content">
                        <span className="modal-category">{poem.category}</span>
                        <h2 className="modal-title">{poem.title}</h2>
                        <p className="modal-author">BY {poem.author.toUpperCase()}</p>
                        <div className="modal-meta">
                            <span className="modal-read-time">
                                <span className="icon">⏱</span>
                                {poem.readTime}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="modal-divider"></div>

                <div className="modal-content">
                    <div className="poem-text">
                        {poem.content.split('\n').map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                    </div>
                </div>

                <div className="modal-footer">
                    <button className="modal-share-btn">
                        <span>Compartir</span>
                        <span className="icon">↗</span>
                    </button>
                    <button className="modal-favorite-btn">
                        <span>Favorito</span>
                        <span className="icon">♡</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PoemModal
