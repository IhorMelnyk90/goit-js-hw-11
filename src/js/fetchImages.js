
const axios = require('axios');

axios.defaults.baseURL = 'https://pixabay.com/api/';


export function fetchImages(searchRequest){
    return axios.get(`?key=6233847-6e262c1189fcf23cdea715b95&q=${searchRequest}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40`);
}