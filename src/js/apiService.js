const API_KEY = '22960309-85052fc004ca9b43ae271af96';
const BASE_URL = 'https://pixabay.com/api';

export default class ImageApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchImages() {
    return fetch(
      `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`,
    )
      .then(response => response.json())
      .then(({ hits }) => {
        this.incrementPage();

        return hits;
      })
      .catch(err => console.log(err));
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
