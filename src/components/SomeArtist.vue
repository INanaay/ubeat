<template>
  <div>
    <ul>
      <li>
        <img
          v-bind:key="artistpicture"
          v-for="artistpicture in artist_Info"
          v-bind:src="artistpicture.artworkUrl100"
        />
        <span v-bind:key="artistname" v-for="artistname in artist_Info">
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
    artist_Info: []
  }),

  created() {
    ArtistApi.getArtistinfo("2Pac")
      .then(response => {
        this.artist_Info = response;
      })
      .catch(error => console.log(error));
  }
};
</script>

<style scoped></style>
