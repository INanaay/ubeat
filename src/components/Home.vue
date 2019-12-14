<template>
  <div id="home">
    <div id="header">
      <h2>Ubeat</h2>
      <hr class="new5" />
      <p>Share music with your friend</p>
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
#header {
  text-align: center;
  margin-top: 10px;
  font-size: 45px;
}

#header h2 {
  margin: 0;
}

#header p {
  font-size: 30px;
}

hr.new5 {
  width: 500px;
  border: 6px solid White;
  border-radius: 5px;
}

#home {
  color: white;
}

.title {
  padding-left: 30px;
}

@media screen and (max-width: 992px) {
  .title {
    font-size: 40px;
  }
  #header {
    font-size: 35px;
  }
  #header p {
    font-size: 20px;
  }
  hr.new5 {
    width: 200px;
    border: 6px solid White;
    border-radius: 5px;
  }
}
</style>
