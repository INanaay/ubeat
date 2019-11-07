<template>
  <div id="home">
    <h1>Home</h1>
    <div id="recently-played">
      <div class="title">
        <h2>Recently played</h2>
        <RecentlyPlayed />
      </div>
    </div>
  </div>
</template>

<script>
import RecentlyPlayed from "@/components/RecentlyPlayed";
export default {
  name: "HomeVue",
  components: {
    RecentlyPlayed
  }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
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

.item ul {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.title img {
  width: 150px;
  cursor: pointer;
}
.item li {
  vertical-align: top;
  display: inline-block;
  text-align: center;
  padding-top: 10px;
  width: 220px;
  cursor: pointer;
}
.item img {
  width: 200px;
  height: 200px;
}

.item .artiste {
  border-radius: 50%;
}

.caption {
  padding-top: 5px;
  font-weight: 550;
  display: block;
}

.caption:hover,
.caption:hover span {
  opacity: 0.5;
}

#selected-song h2 {
  padding-left: 10px;
}

@media screen and (max-width: 992px) {
  .item ul {
    display: inline-block;
  }

  .item img {
    width: 150px;
    height: 150px;
  }

  .item span {
    font-size: 15px;
  }
}

@media screen and (max-width: 600px) {
  .item ul {
    display: inline-block;
  }

  .item img {
    width: 100px;
    height: 100px;
  }

  .title {
    font-size: 10px;
  }
}
</style>
