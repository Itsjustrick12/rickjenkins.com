import { useParams } from 'react-router-dom'
import { getAlbumContent, getAlbumMetadata, getAllPicturesByAlbum } from './albums'
import ReactMarkdown from 'react-markdown'
import { useState, useEffect, useCallback } from 'react'

export function PhotoAlbumPage(){
    const { folder } = useParams()
    const metadata = getAlbumMetadata(folder)
    const content = getAlbumContent(folder)
    const pics = getAllPicturesByAlbum(folder);
    // Current Index for the Overlay Image Viewer
    const [currentIndex, setCurrentIndex] = useState(null);
   // Memoized navigation handlers
    const handleNext = useCallback((e) => {
        if (e) e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % pics.length);
    }, [pics.length]);

    const handlePrev = useCallback((e) => {
        if (e) e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + pics.length) % pics.length);
    }, [pics.length]);


    // Listner for moving images if Image Viewer is open
    useEffect(() => {
        // Only attach listeners if the viewer is actually open
        if (currentIndex === null) return;

        // If the key pressed is relevant, process the corresponding function
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
                handlePrev();
            } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
                handleNext();
            } else if (e.key === 'Escape') {
                setCurrentIndex(null);
            }
        };

        // Event Listener to catch the keys
        window.addEventListener('keydown', handleKeyDown);

        // Cleanup the listener when the modal closes or component unmounts
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentIndex, handlePrev, handleNext]);

    return (
        <div className="album-page-container">

            <div>            
            {/* Image Viewer Modal */}
            {currentIndex !== null && (
                    <div className='image-viewer-background' onClick={() => setCurrentIndex(null)}>
                        {/* Left Navigation Arrow */}
                        <button className="nav-btn prev-btn" onClick={handlePrev}>&#10094;</button>
                        <div className='image-viewer' onClick={(e) => e.stopPropagation()}>
                            <img 
                            src={pics[currentIndex]} 
                            alt={`Album preview ${currentIndex + 1}`} 
                        />
                        </div>
                        {/* Right Navigation Arrow */}
                        <button className="nav-btn next-btn" onClick={handleNext}>&#10095;</button>
                    </div>
                    
                )}
            
            </div>

            <div className="center-everything">
                <h1>{metadata.title}</h1>
                <h3>{metadata.startDate} - {metadata.endDate}</h3>
            </div>
            <ReactMarkdown>
                {content}
            </ReactMarkdown>
            <section className="travel-gallery">
                {pics.map((url, index) => (
                    <div className="album-image"
                        onClick={() => setCurrentIndex(index)} // Opens viewer and sets active index
                        style={{ cursor: 'pointer' }}
                    >
                        <img key={url} src={url} alt={`Album photo ${index + 1}`} loading="lazy"  />
                    </div>
                ))}
            </section>
        </div>
    )
}