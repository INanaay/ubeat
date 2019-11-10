<template>
  <div id="home">
    <h1>Home</h1>
    <div>
      <div class="title">
        <h2>Some Artist</h2>
        <SomeArtist
          v-for="item in Artist_Data"
          v-bind:key="item.id"
          v-bind:data="item"
        />
      </div>
    </div>
    <div>
      <div class="title">
        <h2>Some Album</h2>
        <SomeAlbum
          v-for="item in Album_Data"
          v-bind:key="item.id"
          v-bind:data="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SomeArtist from "@/components/SomeArtist";
import SomeAlbum from "@/components/SomeAlbum";
import HomeApi from "@/script/api";
export default {
  name: "HomeVue",
  components: {
    SomeArtist,
    SomeAlbum
  },
  data: () => ({
    Artist_Data: [],
    Album_Data: []
  }),
  created() {
    HomeApi.getArtistinfo("Skrillex")
      .then(response => {
        this.Artist_Data = response;
      })
      .catch(error => console.log(error));

    HomeApi.getAlbuminfo("Back in Black").then(response => {
      this.Album_Data = response;
    });
  }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

ul {
  list-style-type: none;
}
li {
  list-style-type: none;
}

#home h1 {
  padding-top: 20px;
  padding-left: 10px;
}

#home {
  background-color: #1b1b1b;
  color: white;
  font-family: "Poppins", sans-serif;
}

.title {
  padding-left: 10px;
}
</style>
