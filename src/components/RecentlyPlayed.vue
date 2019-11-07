<template>
  <div>
    <ul>
      <li><img class="artiste" v-bind:src="artist_Picture" /></li>
      <span class="caption">{{ artist_Name }}</span>
    </ul>
  </div>
</template>

<script>
import ArtistApi from "@/script/api";
export default {
  name: "RecentlyPlayed",

  data: () => ({
    artist_Name: [],
    artist_Picture: []
  }),

  created() {
    ArtistApi.getArtistName("Skrillex")
      .then(artist_Name => {
        this.artist_Name = artist_Name;
      })
      .catch(error => console.log(error));

    ArtistApi.getArtistPicture("Skrillex")
      .then(artist_Picture => {
        this.artist_Picture = artist_Picture;
      })
      .catch(error => console.log(error));
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
li {
  list-style-type: none;
}
</style>
