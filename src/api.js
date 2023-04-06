import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID _6dUU_mVYXJOhXPZ2kTTbVWknWQpiL59Q2VlAqjLINs'
        },
        params: {
            query: term,
        }
    });

    return response.data.results;
};

export default searchImages;