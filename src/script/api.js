import axios from "axios";

const LastFM = require("last-fm");

const lastFmKey = "6367fd015b143157df97f99f9bcb003d";
const lastfm = new LastFM(lastFmKey);
const apiUrl = "http://ubeat.herokuapp.com/unsecure/";

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
  getSearchUser(userInput) {
    userInput;
    // Add this code and change url to get user from real user
    // const url = apiUrl + "search/users";
    // .get(url, {
    //   params: {
    //     q: userInput
    //   }
    // })
    const url = "http://www.mocky.io/v2/5df04fe82f0000acc18e0f8e";
    return axios.get(url).then(response => {
      console.log("response uszer", response);
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
          q: querry
        }
      })
      .then(response => {
        console.log(response);
        return response;
      });
  },
  lastfm: lastfm
};
