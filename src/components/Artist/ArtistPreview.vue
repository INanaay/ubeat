<template>
  <router-link
    v-bind:to="'/artist/' + artistData.artistId"
    class="artist-preview"
  >
    <img v-bind:src="artistData.artworkUrl100" />
    <span>{{ artistData.artistName }}</span>
  </router-link>
</template>

<script>
export default {
  name: "ArtistPreview",
  props: ["artistData"],
};
</script>

<style scoped>
.artist-preview {
  display: inline-block;
  text-align: center;
  text-decoration: none;
  padding: 20px;
}

.artist-preview img {
  width: 150px;
  border-radius: 50%;
  display: block;
  margin-bottom: 10px;
}

.artist-preview img:hover {
  opacity: 0.5;
}

.artist-preview span {
  display: block;
  color: white;
}

.artist-preview span:hover {
  color: #939393;
}

@media screen and (max-width: 992px) {
  .artist-preview img {
    width: 150px;
    height: 150px;
  }

  .artist-preview span {
    font-size: 15px;
  }
}

@media screen and (max-width: 600px) {
  .artist-preview img {
    width: 100px;
    height: 100px;
  }

  .artist-preview span {
    font-size: 10px;
  }
}
</style>
