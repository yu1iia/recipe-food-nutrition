export default class ApiService {
  constructor() {
    this.key = '639ac62715mshb0b42d8a0ee40bdp15ecc5jsn0f89107ac09d';
    this.page = 1;
    this.searchQuery = '';
  }
  async fetchImages() {
    const url = `https://edamam-recipe-search.p.rapidapi.com/search?q=${this.searchQuery}`;
    const response = await fetch(url);
    return response.json().then(({ hits }) => {
      this.incrementPage();
      return hits;
    });
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
