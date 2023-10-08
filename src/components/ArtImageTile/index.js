import './ArtImageTile.css'
import { useParams, Link } from 'react-router-dom/cjs/react-router-dom.min';

function ArtImageTile({art}) {
    const { galleryId } = useParams();
    //let galleryChoice = galleries.find((gallery) => (gallery.galleryid.toString() === galleryId));
    return (
        <div>
            {
                art.map((object, index) =>
                    <Link to={'/galleries/' + galleryId + '/art/' + index} exact>
                        <img src={object.images[0].baseimageurl}></img>
                    </Link>
                )
            }
        </div>
        
    )
}

export default ArtImageTile;