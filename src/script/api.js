import axios from "axios";
import Cookies from "js-cookie";
const LastFM = require("last-fm");
const md5 = require("js-md5");

const lastFmKey = "6367fd015b143157df97f99f9bcb003d";
const lastfm = new LastFM(lastFmKey);
const apiUrl = "http://ubeat.herokuapp.com/";
const userId = "5df361b971b96b0004965be7";
var Color = ["#2980b9", "#e74c3c", "#2ecc71", "#f39c12"];

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
  getUserData(id) {
    const url = apiUrl + "users/" + id;
    return axios.get(url, {
      headers: {
        'Authorization': Cookies.get("token")
      }
    }).then(response => {
      return response.data
    }).catch(error => {
      return error;
    })
  },
  postFollow(id) {
    const url = apiUrl + "follow";
    return axios.post(url, {
      id: id
    }, {
      headers: {
        Authorization: Cookies.get("token"),
        "Content-Type": "application/json"
      },
    }).then(response => {
      return response.data
    }).catch(error => {
      return error;
    })
  },
  deleteFollow(id) {
    const url = apiUrl + "follow/" + id;
    return axios.delete(url, {
      headers: {
        Authorization: Cookies.get("token")
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
    const url = apiUrl + "users/" + id + "/playlists";
    return axios.get(url, {
      headers: {
        Authorization: Cookies.get("token")
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
    const url = apiUrl + "playlists";
    return axios.post(url, {
      name: name
    }, {
      headers: {
        "Content-Type": "application/json",
        Authorization: Cookies.get("token")
      }
    }).then(response => {
      return response.data
    }).catch(error => {
      return error;
    })
  },
  putPlaylist(playlist, name) {
    playlist.name = name;
    const url = apiUrl + "playlists/" + playlist.id;
    return axios.put(url, playlist, {
      headers: {
        Authorization: Cookies.get("token"),
        "Content-Type": "application/json"
      }
    }).then(response => {
      return response.data
    }).catch(error => {
      return error;
    })
  },
  deletePlaylist(id) {
    const url = apiUrl + "playlists/" + id;
    return axios.delete(url, {
      headers: {
        Authorization: Cookies.get("token")
      }
    }).then(response => {
      return response.data
    }).catch(error => {
      return error;
    })
  },

  postPlaylistTrack(id, track) {
    const url = apiUrl + "playlists/" + id + "/tracks";
    return axios.post(url, track,
        {
          headers: {
            Authorization: Cookies.get("token"),
            "Content-Type": "application/json"
          }
      }).then(response => {
      return response.data
    }).catch(error => {
      return error;
    })
  },
  deletePlaylistTrack(id, trackId) {
    const url = apiUrl + "playlists/" + id + "/tracks/" + trackId;
    return axios.delete(url, {
      headers: {
        Authorization: Cookies.get("token")
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
