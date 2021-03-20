export class DisarrayAPI {
  constructor() {
    this._baseUrl = 'http://b4t.to:8898/';
  }

  async search(query, page=0) {
    const resp = await fetch(`${this._baseUrl}search?q=${query}&page=${page}`);
    return await resp.json();
  }

  async stats() {
    const resp = await fetch(`${this._baseUrl}stats`);
    return await resp.json();
  }
}