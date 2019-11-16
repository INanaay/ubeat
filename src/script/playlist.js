const Music = require("./music");

var Color = ["#2980b9", "#e74c3c", "#2ecc71", "#f39c12"];

class Playlist {
  constructor(id, name, musics = []) {
    this.id = id;
    this.musicsId = 1;
    this.musics = musics;
    this.name = name;
    this.size = musics.length;
    this.color = Color[id % 4];
    this.active = false;
  }

  getMusics() {
    return this.musics;
  }

  setMusics(musicList) {
    this.musics = [];
    for (var data of musicList) {
      var music = new Music(this.musicsId, data);
      this.musicsId++;
      this.size++;
      this.musics.push(music);
    }
  }

  addMusic(data) {
    var music = new Music(this.musicsId, data);
    this.musicsId++;
    this.size++;
    this.musics.push(music);
  }

  removeMusicById(id) {
    for (var i = 0; i < this.musics.length; i++) {
      if (this.musics[i].id === id) {
        this.musics.splice(i, 1);
        this.size--;
        return true;
      }
    }
    return false;
  }

  rename(name) {
    this.name = name;
  }

  formatMusicList() {
    var musicData = [];
    for (var music of this.getMusics()) {
      musicData.push(music.data);
    }
    return musicData;
  }
}

module.exports = Playlist;
