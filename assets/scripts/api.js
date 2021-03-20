export class DisarrayAPI {
  constructor() {
    this._baseUrl = 'https://discord-crawler-api.b4t.to/';
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