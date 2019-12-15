import axios from "axios";
import Cookies from "js-cookie";
const LastFM = require("last-fm");
const md5 = require("js-md5");

const lastFmKey = "6367fd015b143157df97f99f9bcb003d";
const lastfm = new LastFM(lastFmKey);
const apiUrl = "http://ubeat.herokuapp.com/";
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI1ZGYzNjFiOTcxYjk2YjAwMDQ5NjViZTciLCJleHAiOjE1NzYzMTc4Nzg2MDR9.gmZDwNn4PNHKMKVVMecazWSffRJ_-TIoCrnihn1MeCQ";
const userId = "5df361b971b96b0004965be7";

export default {
  getArtistinfo(artist_name) {
    const url =
      apiUrl +
      "search?limit=1&q=" +
      artist_name +
      "&access_token=" +
      Cookies.get("token");
    return axios.get(encodeURI(url)).then(response => {
      return response.data.results;
    });
  },

  getAlbuminfo(album_name) {
    const url =
      apiUrl +
      "search/albums?limit=1&q=" +
      album_name +
      "&access_token=" +
      Cookies.get("token");
    return axios.get(encodeURI(url)).then(response => {
      return response.data.results;
    });
  },
  getArtistById(id) {
    const url =
      apiUrl + "artists/" + id + "?access_token=" + Cookies.get("token");
    return axios.get(encodeURI(url)).then(response => {
      return response.data.results;
    });
  },
  getArtistAlbumsById(id) {
    const url =
      apiUrl +
      "artists/" +
      id +
      "/albums" +
      "?access_token=" +
      Cookies.get("token");
    return axios.get(encodeURI(url)).then(response => {
      return response.data.results;
    });
  },
  getAlbumTracksByAlbumId(id) {
    const url =
      apiUrl +
      "albums/" +
      id +
      "/tracks" +
      "?access_token=" +
      Cookies.get("token");
    return axios.get(encodeURI(url)).then(response => {
      return response.data.results;
    });
  },
  getSearchUser(userInput) {
    const url = apiUrl + "search/users";
    return axios
      .get(url, {
        params: {
          q: userInput,
          access_token: Cookies.get("token")
        }
      })
      .then(response => {
        return response;
      });
  },
  getAlbumInfoByAlbumId(id) {
    const url = apiUrl + "albums/" + id;
    return axios.get(url).then(response => {
      return response.data.results[0];
    });
  },
  getSearchResults(querry) {
    const url = apiUrl + "search";
    return axios
      .get(url, {
        params: {
          q: querry,
          access_token: Cookies.get("token")
        }
      })
      .then(response => {
        console.log(response);
        return response;
      });
  },
  lastfm: lastfm
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
        response.data[i].color = Color[response.data[i].id.charCodeAt(response.data[i].id.length - 1) % 4];
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
  putPlaylist(playlist, name) {
    playlist.name = name;
    const url = realApiUrl + "playlists/" + playlist.id;
    return axios.put(url, playlist, {
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
  getGravatarImage(email) {
    if (email) {
      return md5(email.toLowerCase());
    }
    return "";
  }
};
