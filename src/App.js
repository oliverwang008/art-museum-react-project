import hardvardArt from './data/hardvardArt';
import GalleryNavigation from './components/GalleryNavigation';
import GalleryView from './components/GalleryView';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';


function App() {
  return (
    <div className='page-wrapper'>
      <GalleryNavigation galleries={hardvardArt.records} />
      <Switch>
        <Route exact path='/'>
          <h2>Harvard Art Museum</h2>
          <p>Look, but Don't Touch. Please select a Gallery in the navigation bar</p>
        </Route>
        <Route path='/galleries/:galleryId'>
          <GalleryView galleries={hardvardArt.records} />
        </Route>
        <Route>
          <h2>Page Not Found</h2>
        </Route>
      </Switch>
    </div>

  );
}

export default App;
