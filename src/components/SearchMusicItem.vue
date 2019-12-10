<template>
  <router-link class="music-preview" v-bind:to="'/album/' + musicData.collectionId">
    <img v-bind:src="musicData.artworkUrl100" />
    <span>
      {{ musicData.trackName }}
      <br />
      {{ musicData.artistName }}
      <br />
      {{ musicData.collectionName }}
    </span>
  </router-link>
</template>

<script>
export default {
  name: "SearchMusicItem",
  props: ["musicData"]
};
</script>

<style scoped>
.music-preview {
  word-wrap: normal;
  margin: 15px;
  justify-content: center;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  overflow: hidden;
  padding: 20px;
  width: 200px;
}

.music-preview img {
  text-align: center;
  width: 150px;
  height: 150px;
  margin-bottom: 10px;
}

.music-preview img:hover {
  opacity: 0.5;
}

.music-preview span {
  display: block;
  color: white;
  overflow: hidden;
}

.music-preview span:hover {
  color: #939393;
}

@media screen and (max-width: 992px) {
  .music-preview {
    width: 150px;
  }

  .music-preview img {
    width: 100px;
    height: 100px;
  }

  .music-preview span {
    font-size: 15px;
  }
}

@media screen and (max-width: 600px) {
  .music-preview {
    width: 100px;
  }
  .music-preview img {
    width: 75px;
    height: 75px;
  }

  .music-preview span {
    font-size: 10px;
  }
}
</style>