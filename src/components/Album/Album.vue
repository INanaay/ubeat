<template>
  <div class="wrapper">
    <div class="box sidebar">
      <AlbumInfos
        v-bind:albumInfos="this.albumInfos"
        v-bind:albumTimeMillis="this.albumTimeMillis"
        v-bind:infos="musicList.results"
      />
    </div>
    <div class="box sidebar2">
      <MusicList v-bind:infos="musicList.results" />
    </div>
  </div>
</template>
<script>
import axios from "axios";
import MusicList from "../MusicList";
import AlbumInfos from "./AlbumInfos";

function timeConversion(millisec) {
  var seconds = (millisec / 1000).toFixed(1);
  var minutes = (millisec / (1000 * 60)).toFixed(1);
  var hours = (millisec / (1000 * 60 * 60)).toFixed(1);
  var days = (millisec / (1000 * 60 * 60 * 24)).toFixed(1);

  if (seconds < 60) {
    return seconds + " Sec";
  } else if (minutes < 60) {
    return minutes + " Min";
  } else if (hours < 24) {
    return hours + " Hrs";
  } else {
    return days + " Days";
  }
}

export default {
  name: "Album",
  components: {
    MusicList,
    AlbumInfos
  },
  data: () => ({
    musicList: [],
    errors: [],
    albumInfos: [],
    albumTimeMillis: ""
  }),
  async created() {
    var albumId = this.$route.params.id;
    try {
      const response = await axios.get(
        `http://ubeat.herokuapp.com/unsecure/albums/` + albumId
      );
      if (response.status) {
        this.albumInfos = response.data.results[0];
      }
    } catch (e) {
      this.errors.push(e);
    }
    try {
      const response = await axios.get(
        "http://ubeat.herokuapp.com/unsecure/albums/" + albumId + "/tracks"
      );
      this.musicList = response.data;
      var time = 0;
      for (let index = 0; index < this.musicList.results.length; index++) {
        const element = this.musicList.results[index];
        time += element.trackTimeMillis;
      }
      this.albumTimeMillis += timeConversion(time);
    } catch (e) {
      this.errors.push(e);
    }
  }
};
</script>
<style>
body {
  background-color: #1b1b1b;
  margin: 0px;
  padding: 0px;
}
.sidebar {
  grid-area: sidebar;
  justify-content: center;
}

.sidebar2 {
  grid-area: sidebar2;
  justify-content: center;
}

.wrapper {
  display: grid;
  width: 100%;
  grid-template-areas:
    "sidebar"
    "sidebar2";
}

.box {
  color: #fff;
}

@media only screen and (min-width: 600px) {
  .wrapper {
    grid-template-columns: 25% auto;
    grid-template-areas: "sidebar sidebar2";
  }
}

@media screen and (max-width: 992px) {
  .wrapper {
    font-size: 12px;
  }
}
</style>
