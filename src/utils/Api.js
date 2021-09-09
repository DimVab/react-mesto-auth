class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}cards`, {
    method: 'GET',
    headers: this._headers
    })
    .then(this._handleResponse);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}users/me`, {
      method: 'GET',
      headers: this._headers
      })
      .then(this._handleResponse);
  }

  getInitialData() {
    return Promise.all([this.getInitialCards(), this.getUserInfo()]);
  }

  editUserInfo(data) {
    return fetch(`${this._baseUrl}users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data)
      })
      .then(this._handleResponse);
  }

  addCard(data) {
    return fetch(`${this._baseUrl}cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data)
      })
      .then(this._handleResponse);
  }

  likeCard(cardID) {
    return fetch(`${this._baseUrl}cards/likes/${cardID}`, {
      method: 'PUT',
      headers: this._headers
      })
      .then(this._handleResponse);
  }

  removeLikeCard(cardID) {
    return fetch(`${this._baseUrl}cards/likes/${cardID}`, {
      method: 'DELETE',
      headers: this._headers
      })
      .then(this._handleResponse);
  }

  deleteCard(cardID) {
    return fetch(`${this._baseUrl}cards/${cardID}`, {
      method: 'DELETE',
      headers: this._headers
      })
      .then(this._handleResponse);
  }

  editAvatar(avatarUrl) {
    return fetch(`${this._baseUrl}users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(avatarUrl)
      })
      .then(this._handleResponse);
  }

  _handleResponse(res) {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

const api = new Api ({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-26/',
  headers: {
    authorization: '1e46d460-5fe9-4d55-8f96-bc20172f2d2e',
    'Content-Type': 'application/json'
  }
});

export default api;
