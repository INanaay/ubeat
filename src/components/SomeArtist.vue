<template>
  <div>
    <ul>
      <li>
        <img class="artiste" v-bind:src="artist_Picture" /> <br />
        <p class="caption">{{ artist_Name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import ArtistApi from "@/script/api";
export default {
  name: "SomeArtist",

  data: () => ({
    artist_Name: [],
    artist_Picture: []
  }),

  created() {
    ArtistApi.getArtistinfo("2pac")
      .then(response => {
        this.artist_Name = response.artistName;
        this.artist_Picture = response.artworkUrl100;
      })
      .catch(error => console.log(error));
  }
};
</script>

<style scoped></style>
