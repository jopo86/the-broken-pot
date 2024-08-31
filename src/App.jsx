import HomePage from './HomePage';
import AboutPage from './AboutPage';
import GalleryPage from './GalleryPage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter basename="the-broken-pot">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
