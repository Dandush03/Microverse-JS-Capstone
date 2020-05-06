/* eslint-disable no-underscore-dangle */
export default class User {
  constructor() {
    this._user = '';
    this._score = 0;
  }

  set user(value) {
    this._user = value;
  }

  get user() {
    return this._user;
  }

  set score(value) {
    this._score = value;
  }

  get score() {
    return this._score;
  }
}