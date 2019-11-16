const axios = require("axios");

class Api {
  constructor() {
    this.baseUrl = "http://ubeat.herokuapp.com/unsecure";
  }

  async getAlbumTracks(id) {
    return await axios
      .get(this.baseUrl + "/albums/" + id + "/tracks")
      .then(result => result.data.results)
      .catch(error => error.response.data.errorMessage);
  }
}

var API = new Api();

module.exports = API;
