import './ArtDescription.css'
import { useParams, Link } from 'react-router-dom/cjs/react-router-dom.min';

function ArtDescription({art}) {
    const { artId } = useParams();
    const { galleryId } = useParams();
    let artChoice = art[artId];
    return (
        <div>
            <a href={artChoice.url} target="_blank">{artChoice.title}</a>
            <p>{artChoice.description}</p>
            <Link to={'/galleries/' + galleryId}>
                Back to Gallery
            </Link>
        </div>
        
    )
}

export default ArtDescription;