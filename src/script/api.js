import axios from "axios";

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
  async getAlbumTracksByAlbumId(id) {
    const url = apiUrl + "albums/" + id + "/tracks";
    return await axios.get(url).then(response => {
      return response.data.results;
    });
  },
  getAlbumInfoByAlbumId(id) {
    const url = apiUrl + "albums/" + id;
    return axios.get(url).then(response => {
      return response.data.results[0];
    });
  }
};
