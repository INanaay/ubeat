<template>
  <div>
    <h1>Artists</h1>
    <div id="artist-container">
      <artist-preview
        v-bind:key="'item' + i"
        v-for="(item, i) in artists"
        v-bind:artistData="item"
      />
    </div>
  </div>
</template>

<script>
import ArtistPreview from "./ArtistPreview";
import api from "@/script/api";

export default {
  name: "ArtistHome",
  components: { ArtistPreview },
  methods: {
    /**
     * This function is to be replaced for the next delivery.
     * It populates the artists home page with 10 artists, these you can click on.
     * Later on, these artits will be chosen with an algorithm.
     * @returns {Promise<void>}
     */

    //TODO change this function in the 3rd delivery
    async populateArtists() {
      Promise.all([
        api.getArtistinfo("Red Hot Chili Peppers"),
        api.getArtistinfo("Primus"),
        api.getArtistinfo("Rammstein"),
        api.getArtistinfo("Indochine"),
        api.getArtistinfo("The Clash"),
        api.getArtistinfo("Jimi Hendrix"),
        api.getArtistinfo("Daft Punk"),
        api.getArtistinfo("John Frusciante"),
        api.getArtistinfo("Ultra Vomit"),
        api.getArtistinfo("Nirvana")
      ])
        .then(response => {
          for (let index = 0; index < response.length; index++) {
            this.artists.push(response[index][0]);
          }
        })
        .catch(error => {
          alert(error);
        });
    }
  },
  data: () => ({
    artists: []
  }),
  created() {
    this.populateArtists();
  }
};
</script>

<style scoped>
#artist-container {
  display: flex;
  flex-direction: row;
  padding: 10px;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
