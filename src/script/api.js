import axios from "axios";

/* Using The spotify Api was the only way to get artist images. */

const SpotifyWebApi = require("spotify-web-api-node");

const apiUrl = "http://ubeat.herokuapp.com/unsecure/";
const spotifyKey =
  "BQAeCiKJPogJcev54Nd-phQRBCR8d9aIlKr8tEFDB7UDgiXSuO9uz1iEIGGZJvRsp4XtKqglzB5e1Cli-wCWOJ_6ZK_-LgnI2cKmwvHyNnFc_jWc7v6wnULMiDofh9MmNu6HqrA";

const spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(spotifyKey);

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
  async getArtistImage(artistName) {
    const response = await spotifyApi.searchArtists(artistName);
    return response.body.artists.items[0].images[0].url;

  }
};
