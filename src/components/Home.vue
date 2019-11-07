<template>
  <div id="home">
    <h1>Home</h1>
    <div>
      <div class="title">
        <h2>Some Artist</h2>
        <SomeArtist />
      </div>
    </div>
    <div>
      <div class="title">
        <h2>Some Album</h2>
        <SomeAlbum />
      </div>
    </div>
    <div>
      <div class="title">
        <h2>I Try Something</h2>
        <ListTry />
      </div>
    </div>
  </div>
</template>

<script>
import SomeArtist from "@/components/SomeArtist";
import SomeAlbum from "@/components/SomeAlbum";
import ListTry from "@/components/ListTry";
export default {
  name: "HomeVue",
  components: {
    SomeArtist,
    SomeAlbum,
    ListTry
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
