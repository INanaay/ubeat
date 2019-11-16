<template>
  <div class="item-container">
    <p>{{info.trackNumber}}</p>
    <p>{{title}}</p>
    <PlayButton v-bind:previewUrl="info.previewUrl" />
    <select v-if="isActive" size="3" style="position: relative">
      <option v-for="playlist in playlists" v-on:click="addMusicToPlaylist(info, playlist)" v-bind:key="playlist.id">{{playlist.name}}</option>
    </select>
    <img
      src="../assets/plus.svg"
      alt
      style="height: 25px; lenght: 25xp"
      v-on:click="openSelect()"
    />
    <p>{{trackDuration}}</p>
  </div>
</template>

<script>
import PlayButton from "@/components/PlayButton.vue";
import db from "@/script/db";

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
  name: "MusicListItem",
  props: ["info", "itemId"],
  data() {
    var trackDuration = new Date(this.info.trackTimeMillis);
    var time = timeConversion(this.info.trackTimeMillis);
    return {
      title: this.info.trackName,
      trackDuration: time,
      playlists: [],
      isActive: false
    };
  },
  methods: {
    getPlaylist: function() {
      this.playlists = db.getPlaylists();    },
    openSelect: function() {
      this.isActive = !this.isActive;
    },
    addMusicToPlaylist(music, playlist) {
      playlist.addMusic(music)
      this.isActive = !this.isActive
    }
  },
  created() {
    this.getPlaylist();
  },
  components: {
    PlayButton
  }
};
</script>

<style scoped>
.item-container {
  display: grid;
  padding: 5px;
  grid-template-columns: 10% 10% 55% 10% 15%;
  border-bottom-style: solid;
  border-width: 1px;
  border-color: gray;
  align-items: center;
}
</style>