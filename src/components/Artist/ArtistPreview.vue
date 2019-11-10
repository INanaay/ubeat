<template>
  <a href="#" class="artist-preview">
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/81lOFvmn6tL._SL1500_.jpg"
    />
    <span>{{ name }}</span>
  </a>
</template>

<script>
export default {
  name: "ArtistPreview",
  props: ["name", "url"]
};
</script>

<style scoped>
.artist-preview {
  display: inline-block;
  text-align: center;
  text-decoration: none;
}

.artist-preview img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: block;
  margin-bottom: 10px;
}

.artist-preview img:hover {
  opacity: 0.5;
}

.artist-preview span {
  display: block;
  font-size: 20px;
  font-weight: bold;
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
