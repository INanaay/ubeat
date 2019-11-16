class Album {
  constructor(id) {
    this.id = id;
    this.musics = [];
  }

  getMusics() {
    return this.musics;
  }

  setAlbumMusic(list) {
    this.musics = list;
  }
}

module.exports = Album;
