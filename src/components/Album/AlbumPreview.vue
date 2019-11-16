<template>
  <router-link class="album-preview" v-bind:to="'/album/' + albumData.collectionId">
    <img v-bind:src="albumData.artworkUrl100" />
    <span>
      {{ albumData.collectionName }} <br />
      {{ albumData.artistName }}
    </span>
  </router-link>
</template>

<script>
export default {
  name: "AlbumPreview",
  props: ["albumData"],
};
</script>

<style scoped>
.album-preview {
  display: inline-block;
  text-align: center;
  text-decoration: none;
  padding: 20px;
}

.album-preview img {
  width: 150px;
  display: block;
  margin-bottom: 10px;
}

.album-preview img:hover {
  opacity: 0.5;
}

.album-preview span {
  display: block;
  color: white;
}

.album-preview span:hover {
  color: #939393;
}

@media screen and (max-width: 992px) {
  .album-preview img {
    width: 150px;
    height: 150px;
  }

  .album-preview span {
    font-size: 15px;
  }
}

@media screen and (max-width: 600px) {
  .album-preview img {
    width: 100px;
    height: 100px;
  }

  .album-preview span {
    font-size: 10px;
  }
}
</style>
