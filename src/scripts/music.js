class Music {
  constructor(id, data) {
    this.id = id;
    this.data = data;
  }

  get() {
    return this.data;
  }
}

module.exports = Music;
