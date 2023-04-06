import { useState } from 'react';
import searchImages from './api';
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList';

function App() {
    const [images, setImages ] = useState ([]);

    const handlesubmit = async (term) => {
       const result = await searchImages(term);

       setImages(result);
    };

    return <div>
        <SearchBar onSubmit={handlesubmit} />
        <ImageList images={images} />
    </div>
}

export default App;