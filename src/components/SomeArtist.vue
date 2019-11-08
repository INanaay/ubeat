<template>
  <div>
    <ul>
      <li>
        <img
          v-bind:key="artistpicture"
          v-for="artistpicture in artist_Picture"
          v-bind:src="artistpicture.artworkUrl100"
        />
        <br />
        <span v-bind:key="artistname" v-for="artistname in artist_Name">
          {{ artistname.artistName }}
        </span>
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
    ArtistApi.getArtistinfo("2Pac")
      .then(response => {
        this.artist_Name = response;
        this.artist_Picture = response;
      })
      .catch(error => console.log(error));
  }
};
</script>

<style scoped></style>
