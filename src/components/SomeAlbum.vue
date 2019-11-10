<template>
  <div>
    <ul>
      <li>
        <img
          v-bind:key="albumpicture"
          v-for="albumpicture in album_Info"
          v-bind:src="albumpicture.artworkUrl100"
        />
        <span
          class="albName"
          v-bind:key="albumname"
          v-for="albumname in album_Info"
        >
          {{ albumname.collectionName }}
        </span>
        <span
          class="artName"
          v-bind:key="artistname"
          v-for="artistname in album_Info"
        >
          {{ artistname.artistName }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import HomeApi from "@/script/api";
export default {
  name: "SomeAlbum",

  data: () => ({
    album_Info: []
  }),

  created() {
    HomeApi.getAlbuminfo("Back in Black")
      .then(response => {
        this.album_Info = response;
      })
      .catch(error => console.log(error));
  }
};
</script>

<style scoped></style>
