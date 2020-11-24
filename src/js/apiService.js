const BASE_URL = 'https://pixabay.com/api';

let numberOfpage, prevQuery;
const KEY = '19233295-27cce40f388ac30d61b3ab95a';
const perPage = 12;

function page() {
    return numberOfpage + 1 || 0;
}
 
function fetchImages(searchQuery) { 
    if (searchQuery !== prevQuery) numberOfpage = 0;
    prevQuery = searchQuery;
    numberOfpage++;
    return fetch(`${BASE_URL}/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${numberOfpage}&per_page=${perPage}&key=${KEY}`)
        .then(response => {
            return response.json();
        })
        .catch(error => console.log(error));
}

export { fetchImages, page };