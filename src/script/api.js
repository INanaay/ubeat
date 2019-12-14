import axios from "axios";
import Cookies from "js-cookie";
const LastFM = require("last-fm");

const lastFmKey = "6367fd015b143157df97f99f9bcb003d";
const lastfm = new LastFM(lastFmKey);
const apiUrl = "http://ubeat.herokuapp.com/";

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
};
