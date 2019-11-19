class Searchbar {
  constructor() {
    this.node = document.getElementById('searchbar');
    this.node.addEventListener('change', e => this.onSearchbarChange(e));
    this.currentSearch = this.data = null;
  }
  async onSearchbarChange(e) {
    this.currentSearch = e.target.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.currentSearch}&APPID=436d1eea572e5d346f8cd5eb7c8dfa14&units=metric&lang=pl`;

    const data = await fetch(url);
    const json = await data.json();
    this.data = json;

    document.querySelector('.div').innerHTML = this.data.main.temp;
    console.log('TCL: Searchbar -> onSearchbarChange -> json', json);
  }
}

export default Searchbar;
