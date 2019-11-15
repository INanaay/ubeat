<template>
  <div class="wrapper">
    <div class="box sidebar">
      <AlbumInfos
        v-bind:albumInfos="this.albumInfos"
        v-bind:albumTimeMillis="this.albumTimeMillis"
      />
    </div>
    <div class="box sidebar2">
      <MusicList v-bind:infos="musicList.results" />
      <div class="grid-item"></div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import MusicList from "@/components/MusicList";
import AlbumInfos from "@/components/AlbumInfos.vue";
import api from "@/script/api";

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
}

.sidebar2 {
  grid-area: sidebar2;
}

.wrapper {
  background-color: #fff;
}

.wrapper {
  display: grid;
  grid-template-areas:
    "sidebar"
    "sidebar2";
}

.box {
  background-color: #1b1b1b;
  color: #fff;
}

.sidebar2 {
  background-color: #1b1b1b;
}

.music_number_info {
  color: white;
}

.music-list-grid-container {
  margin: 4px;
  display: grid;
  grid-template-columns: 10% 10% 65% 15%;
  padding: 5px;
  border-bottom-style: solid;
  border-width: 1px;
  border-color: gray;
}

.music-list-grid-item {
  border: 1px;
  border-color: green;
  font-size: 13px;
}

.music-list-grid-item .love-track {
  float: left;
}

.album_infos_text {
  font-family: "Poppins", sans-serif;
  color: white;
  font-size: 21px;
}

#album_info {
  text-align: center;
}

#grid-header-container {
  display: grid;
  grid-template-columns: 25% 50% 25%;
}

#album_resume {
  margin: 10px;
  text-align: center;
}

#cover_photo {
  margin: auto;
}

#music_list_container {
  padding: 10px;
  margin: 10px;
}

#listen_on_apple {
  padding: 10px;
  float: right;
}

.music_list {
  padding-left: 3px;
  font-family: "Poppins", sans-serif;
  list-style-type: none;
  color: white;
}

.music_list .music_number {
  font-family: "Poppins", sans-serif;
  padding: 5px;
  padding-right: 0px;
  color: white;
}

.music_list .music_element {
  font-family: "Poppins", sans-serif;
  padding: 5px;
  color: white;
}

@media only screen and (min-width: 600px) {
  .wrapper {
    grid-template-columns: 40% auto;
    grid-template-areas: "sidebar sidebar2";
  }

  .music-list-grid-item {
    border: 1px;
    border-color: green;
    font-size: 18px;
  }
}
</style>
