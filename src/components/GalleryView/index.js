import './GalleryView.css';
import ArtImageTile from '../ArtImageTile';
import ArtDescription from '../ArtDescription';
import { useParams, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';

function GalleryView({galleries}) {
    const {galleryId} = useParams();
    let galleryChoice = galleries.find((gallery) => (gallery.galleryid.toString() === galleryId));
    
    return (
        <div>
            <h2>{galleryChoice.name}</h2>
            <Switch>
                <Route exact path='/galleries/:galleryId'>
                    <ArtImageTile art={galleryChoice.objects} />
                </Route>
                <Route path='/galleries/:galleryId/art/:artId'>
                    <ArtDescription art={galleryChoice.objects} />
                </Route>
            </Switch>
        </div>
        
    )
}

export default GalleryView;