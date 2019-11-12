<template>
  <div id="home">
    <div class="box">
      <img class="banner" src="../assets/Grey-banner-musical-notes.jpg" />
      <div class="text">
        <h1>Ubeat</h1>
        <br />
        <p>Share music with your friend</p>
      </div>
    </div>
    <h2>Home</h2>
    <div>
      <div>
        <h2 class="title">Some Artist</h2>
        <div class="SomeArt">
          <SomeArtist
            v-for="item in Artist_Data"
            v-bind:key="item.id"
            v-bind:data="item"
          />
        </div>
      </div>
    </div>
    <div>
      <div>
        <h2 class="title">Some Album</h2>
        <div class="SomeAlb">
          <SomeAlbum
            v-for="item in Album_Data"
            v-bind:key="item.id"
            v-bind:data="item"
          />
        </div>
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
  left: 0;
  right: 0;
  top: 10%; /* Adjust this value to move the positioned div up and down */
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  width: 60%; /* Set the width of the positioned div */
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

.SomeArt {
  display: flex;
  justify-content: space-around;
  padding-left: 50px;
  text-align: center;
  font-weight: bold;
}

.SomeArt img {
  width: 150px;
  border-radius: 50%;
}

.SomeAlb {
  display: flex;
  justify-content: space-around;
  padding-left: 50px;
  text-align: center;
  font-weight: bold;
}

.SomeAlb img {
  width: 150px;
}
</style>
