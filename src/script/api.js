import axios from "axios";

export default {
  getArtistinfo(artist_name) {
    let url =
      "http://ubeat.herokuapp.com/unsecure/search/artists?limit=3&q=" + artist_name;
    return axios.get(url).then(response => {
      return response.data.results;
    });
  },

  getAlbuminfo(album_name) {
    let url =
      "http://ubeat.herokuapp.com/unsecure/search/albums?limit=3&q=" +
      album_name;
    return axios.get(url).then(response => {
      return response.data.results;
    });
  }
};
