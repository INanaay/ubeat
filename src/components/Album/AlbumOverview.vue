<template>
  <div>
    <h1>Album</h1>
    <div id="album-container">
      <AlbumPreview
        v-bind:albumData="item"
        v-bind:key="'item' + index"
        v-for="(item, index) in albums"
      />
    </div>
  </div>
</template>

<script>
import AlbumPreview from "./AlbumPreview";
import api from "@/script/api";

export default {
  name: "AlbumOverview",
  components: {
    AlbumPreview
  },
  methods: {
    async populateAlbum() {
      Promise.all([
        api.getAlbuminfo("Back in Black"),
        api.getAlbuminfo("The Wall"),
        api.getAlbuminfo("Stadium Arcadium"),
        api.getAlbuminfo("Heligoland"),
        api.getAlbuminfo("Mr Sal"),
        api.getAlbuminfo("Alph Lauren 3"),
        api.getAlbuminfo("Recess")
      ])
        .then(response => {
          for (let index = 0; index < response.length; index++) {
            this.albums.push(response[index][0]);
          }
          console.log(this.albums);
        })
        .catch(error => {
          alert(error);
        });
    }
  },
  data: () => ({ albums: [] }),
  created() {
    this.populateAlbum();
  }
};
</script>

<style scoped>
#album-container {
  display: flex;
  flex-direction: row;
  padding: 10px;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
