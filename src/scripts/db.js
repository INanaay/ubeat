const Album = require("./album.js");
const Playlist = require("./playlist.js");
const API = require("./api.js");

class DB {
  constructor() {
    this.fakeDB = [];
    this.albums = [];
    this.albumId = 1;
    this.playlists = [];
    this.playlistId = 1;
  }

  fillFakeDb(musicList) {
    this.fakeDB = this.fakeDB.concat(musicList);
  }

  getFakeDB() {
    return this.fakeDB;
  }

  getAlbums() {
    return this.albums;
  }

  getAlbumById(id) {
    for (var album of this.albums) {
      if (album.id === id) {
        return album;
      }
    }
    return null;
  }

  getPlaylists() {
    return this.playlists;
  }

  getPlaylistById(id) {
    for (var playlist of this.playlists) {
      if (playlist.id === id) {
        return playlist;
      }
    }
    return null;
  }

  removePlaylistBy(id) {
    for (var i = 0; i < this.playlists.length; i++) {
      if (this.playlists[i].id === id) {
        this.playlists.splice(i, 1);
        return true;
      }
    }
    return false;
  }

  addAlbum() {
    var album = new Album(this.albumId);
    this.albumId++;
    this.albums.push(album);
  }

  addPlaylist(name, array = []) {
    var playlist = new Playlist(this.playlistId, name, array);
    this.playlistId++;
    this.playlists.push(playlist);
  }

  addPlaylistMusicById(id, music) {
    var playList = this.getPlaylistById(id);

    if (playList) {
      playList.addMusic(music);
      return true;
    }
    return false;
  }
}

function initDB() {
  db.addAlbum();
  db.addPlaylist("Rock");
  db.addPlaylist("Electro");
  db.addPlaylist("Empty");

  API.getAlbumTracks("369711549")
    .then(result => {
      db.fillFakeDb(result);
      db.addPlaylistMusicById(2, result[0]);
      db.addPlaylistMusicById(2, result[1]);
      db.addPlaylistMusicById(2, result[2]);
      db.addPlaylistMusicById(2, result[3]);
    })
    .catch(err => console.log(err));

  API.getAlbumTracks("1440872730")
    .then(result => {
      db.fillFakeDb(result);
      db.addPlaylistMusicById(2, result[0]);
      db.addPlaylistMusicById(2, result[1]);
      db.addPlaylistMusicById(2, result[2]);
      db.addPlaylistMusicById(2, result[3]);
    })
    .catch(err => console.log(err));

  API.getAlbumTracks("1161539183")
    .then(result => {
      db.fillFakeDb(result);
      db.addPlaylistMusicById(1, result[0]);
      db.addPlaylistMusicById(1, result[2]);
      db.addPlaylistMusicById(1, result[3]);
    })
    .catch(err => console.log(err));

  API.getAlbumTracks("991509751")
    .then(result => {
      db.fillFakeDb(result);
      db.addPlaylistMusicById(1, result[0]);
      db.addPlaylistMusicById(1, result[3]);
      db.addPlaylistMusicById(1, result[4]);
      db.addPlaylistMusicById(1, result[6]);
    })
    .catch(err => console.log(err));

  API.getAlbumTracks("1440920798")
    .then(result => {
      db.fillFakeDb(result);
      db.addPlaylistMusicById(1, result[0]);
      db.addPlaylistMusicById(1, result[1]);
      db.addPlaylistMusicById(1, result[2]);
      db.addPlaylistMusicById(1, result[3]);
    })
    .catch(err => console.log(err));
}

var db = new DB();

initDB();

module.exports = db;
