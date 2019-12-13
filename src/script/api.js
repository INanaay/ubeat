import axios from "axios";

const LastFM = require("last-fm");

const lastFmKey = "6367fd015b143157df97f99f9bcb003d";
const lastfm = new LastFM(lastFmKey);
const apiUrl = "http://ubeat.herokuapp.com/unsecure/";
const realApiUrl = "http://ubeat.herokuapp.com/";
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI1ZGYzMTA0MjcxYjk2YjAwMDQ5NjVhYzgiLCJleHAiOjE1NzYzMDA1OTM2NDV9.22dtd6NuTsyiztmCfIgmZLr224JKJ_4czNqjLtU3_uI";
const userId = "5df3104271b96b0004965ac8";

var Color = ["#2980b9", "#e74c3c", "#2ecc71", "#f39c12"];

export default {
  getArtistinfo(artist_name) {
    const url = apiUrl + "search?limit=1&q=" + artist_name;
    return axios.get(url).then(response => {
      return response.data.results;
    });
  },

  getAlbuminfo(album_name) {
    const url = apiUrl + "search/albums?limit=1&q=" + album_name;
    return axios.get(url).then(response => {
      return response.data.results;
    });
  },
  getArtistById(id) {
    const url = apiUrl + "artists/" + id;
    return axios.get(url).then(response => {
      return response.data.results;
    });
  },
  getArtistAlbumsById(id) {
    const url = apiUrl + "artists/" + id + "/albums";
    return axios.get(url).then(response => {
      return response.data.results;
    });
  },
  getAlbumTracksByAlbumId(id) {
    const url = apiUrl + "albums/" + id + "/tracks";
    return axios.get(url).then(response => {
      return response.data.results;
    });
  },
  getAlbumInfoByAlbumId(id) {
    const url = apiUrl + "albums/" + id;
    return axios.get(url).then(response => {
      return response.data.results[0];
    });
  },
  getUserData(id) {
    const url = realApiUrl + "users/" + id;
    return axios.get(url, {
      headers: {
        'Authorization': token
      }
    }).then(response => {
      return response.data
    }).catch(error => {
      return error;
    })
  },
  postFollow(id) {
    const url = realApiUrl + "follow";
    return axios.post(url, {
      id: id
    }, {
      headers: {
        Authorization: token,
        "Content-Type": "application/json"
      },
    }).then(response => {
      return response.data
    }).catch(error => {
      return error;
    })
  },
  deleteFollow(id) {
    const url = realApiUrl + "follow/" + id;
    return axios.delete(url, {
      headers: {
        Authorization: token
      }, data: {
        id: id
      }
    }).then(response => {
      return response.data
    }).catch(error => {
      return error;
    })
  },
  getUserPlaylists(id) {
    const url = realApiUrl + "users/" + id + "/playlists";
    return axios.get(url, {
      headers: {
        Authorization: token
      }
    }).then(response => {

      for (var i = 0; i < response.data.length; i++) {
        response.data[i].active = false;
        response.data[i].color = Color[parseInt(response.data[i].id.substr(-1), 10) % 4];
        response.data[i].size = response.data[i].tracks.length;
        if (!response.data[i].color)
          response.data[i].color = Color[1]
        response.data[i].getTracks = function () {
          return this.tracks;
        }
      }

      return response.data
    }).catch(error => {
      return error;
    })
  },
  postPlaylist(name) {
    const url = realApiUrl + "playlists";
    return axios.post(url, {
      name: name
    }, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      }
    }).then(response => {
      return response.data
    }).catch(error => {
      return error;
    })
  },
  putPlaylist(id, name) {
    const url = realApiUrl + "playlists/" + id;
    return axios.put(url, {
      name: name
    }, {
      headers: {
        Authorization: token,
        "Content-Type": "application/json"
      }
    }).then(response => {
      return response.data
    }).catch(error => {
      return error;
    })
  },
  deletePlaylist(id) {
    const url = realApiUrl + "playlists/" + id;
    return axios.delete(url, {
      headers: {
        Authorization: token
      }
    }).then(response => {
      return response.data
    }).catch(error => {
      return error;
    })
  },

  postPlaylistTrack(id, track) {
    const url = realApiUrl + "playlists/" + id + "/tracks";
    return axios.post(url, track,
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json"
          }
      }).then(response => {
      return response.data
    }).catch(error => {
      return error;
    })
  },
  deletePlaylistTrack(id, trackId) {
    const url = realApiUrl + "playlists/" + id + "/tracks/" + trackId;
    return axios.delete(url, {
      headers: {
        Authorization: token
      }
    }).then(response => {
      return response.data
    }).catch(error => {
      return error;
    })
  },
  userId: userId,
  lastfm : lastfm,
};
