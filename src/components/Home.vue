<template>
  <div id="home">
    <div class="box">
      <img class="banner" src="../assets/banner.png" />
      <div class="text">
        <h2>Ubeat</h2>
        <br />
        <p>Share music with your friend</p>
      </div>
    </div>
    <h1>Home</h1>
    <div>
      <div>
        <h2 class="title">Some Artist</h2>
        <div>
          <ArtistPreview
            v-bind:key="'item' + i"
            v-for="(item, i) in artists"
            v-bind:artistData="item"
          />
        </div>
      </div>
    </div>
    <div>
      <div>
        <h2 class="title">Some Album</h2>
        <div>
          <AlbumPreview
            v-bind:key="'item' + a"
            v-for="(item, a) in albums"
            v-bind:albumData="item"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArtistPreview from "./Artist/ArtistPreview";
import AlbumPreview from "./Album/AlbumPreview";
import api from "@/script/api";
export default {
  name: "HomeVue",
  components: {
    ArtistPreview,
    AlbumPreview
  },
  methods: {
    async populateArtists() {
      Promise.all([
        api.getArtistinfo("Skrillex"),
        api.getArtistinfo("2pac"),
        api.getArtistinfo("Sum41"),
        api.getArtistinfo("AC/DC")
      ])
        .then(response => {
          for (let index = 0; index < response.length; index++) {
            this.artists.push(response[index][0]);
          }
        })
        .catch(error => {
          alert(error);
        });
    },
    async populateAlbum() {
      Promise.all([
        api.getAlbuminfo("Back in Black"),
        api.getAlbuminfo("Recess"),
        api.getAlbuminfo("The Wall"),
        api.getAlbuminfo("Stadium Arcadium")
      ])
        .then(response => {
          for (let index = 0; index < response.length; index++) {
            this.albums.push(response[index][0]);
          }
        })
        .catch(error => {
          alert(error);
        });
    }
  },
  data: () => ({
    artists: [],
    albums: []
  }),
  created() {
    this.populateArtists();
    this.populateAlbum();
  }
};
</script>

<style>
.box {
  position: relative;
  display: flex; /* Make the width of box same as image */
}

.box img {
  -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(0, 0, 0, 1)),
    to(rgba(0, 0, 0, 0))
  );
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
}

.box .text {
  position: absolute;
  z-index: 999;
  margin: 0 auto;
  padding-bottom: 200px;
  left: 0;
  right: 0;
  top: 10%;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
}

#home {
  background-color: #1b1b1b;
  color: white;
  font-family: "Poppins", sans-serif;
}

.title {
  padding-left: 30px;
}

@media screen and (max-width: 600px) {
  .box .text {
    top: 0;
    font-size: 10px;
  }
  .box .text h1 {
    top: 0;
    font-size: 15px;
  }
}
</style>
