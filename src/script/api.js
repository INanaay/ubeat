import axios from "axios";

export default {
  getArtistinfo(artist_name) {
    let url =
      "http://ubeat.herokuapp.com/unsecure/search?limit=1&q=" + artist_name;
    return axios.get(url).then(response => {
      return response.data.results[0];
    });
  },

  getAlbuminfo(album_name) {
    let url =
      "http://ubeat.herokuapp.com/unsecure/search/albums?limit=1&q=" +
      album_name;
    return axios.get(url).then(response => {
      return response.data.results[0];
    });
  }
};
