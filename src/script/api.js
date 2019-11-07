import axios from "axios";

export default {
  getArtistName(artist_name) {
    let url =
      "http://ubeat.herokuapp.com/unsecure/search?limit=1&q=" + artist_name;
    return axios.get(url).then(response => {
      return response.data.results[0].artistName;
    });
  },

  getArtistPicture(artist_name) {
    let url =
      "http://ubeat.herokuapp.com/unsecure/search?limit=1&q=" + artist_name;
    return axios.get(url).then(response => {
      return response.data.results[0].artworkUrl100;
    });
  }
};
