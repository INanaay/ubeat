<template>
  <div>
    <ul>
      <li>
        <img alt="album_picture" v-bind:src="album_Picture" />
        <p>{{ album_Name }}</p>
        <p>{{ artist_Name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import HomeApi from "@/script/api";
export default {
  name: "SomeAlbum",

  data: () => ({
    artist_Name: [],
    album_Picture: [],
    album_Name: []
  }),

  created() {
    HomeApi.getAlbuminfo("Back in Black")
      .then(response => {
        this.artist_Name = response.artistName;
        this.album_Picture = response.artworkUrl100;
        this.album_Name = response.collectionName;
      })
      .catch(error => console.log(error));
  }
};
</script>

<style scoped></style>
