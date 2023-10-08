import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import './GalleryNavigation.css'

function GalleryNavigation({galleries}) {
    console.log(galleries);
    return (
        <nav>
            <h1>Galleries</h1>
            <NavLink to='/' exact activeClassName='active'>Home</NavLink>
            {galleries.map((gallery)=>
                <NavLink to={'/galleries/'+gallery.galleryid} activeClassName='active'>
                    {gallery.name + '  '}
                </NavLink>
            )}
        </nav>
        
    )
}

export default GalleryNavigation;