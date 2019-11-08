<template>
  <div class="SomeAlb">
    <img
      class="albPicture"
      alt="album_picture"
      v-bind:key="albumpicture"
      v-for="albumpicture in album_Picture"
      v-bind:src="albumpicture.artworkUrl100"
    />
    <br />
    <span
      class="albName"
      v-bind:key="albumname"
      v-for="albumname in album_Name"
    >
      {{ albumname.collectionName }}
    </span>
    <br />
    <span
      class="artName"
      v-bind:key="artistname"
      v-for="artistname in artist_Name"
    >
      {{ artistname.artistName }}
    </span>
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
        this.artist_Name = response;
        this.album_Picture = response;
        this.album_Name = response;
      })
      .catch(error => console.log(error));
  }
};
</script>

<style scoped>
.SomeAlb {
}
.albPicture {
  width: 130px;
  height: auto;
}
.artName {
}
.albName {
}
</style>
