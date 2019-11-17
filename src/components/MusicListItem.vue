<template>
  <div class="item-container">
    <span v-if="isInPlaylist" v-on:click="deleteSong(itemId)" class="mdi mdi-trash-can" />
    <p style="float: left; padding: 5px; margin: 3px" v-if="!isInPlaylist">{{info.trackNumber}}</p>
    <p v-if="isInPlaylist">{{artistName}}</p>
    <p style="float: left; padding: 5px; margin: 3px;">{{info.trackName}}</p>
    <PlayButton v-bind:previewUrl="info.previewUrl"/>
    <img src="../assets/plus.svg" alt style="height: 25px; lenght: 25px; padding: 5px; margin: 3px;" v-on:click="openSelect()" />
    <select v-if="isActive" size="3" style="position: relative">
      <option
        v-for="(playlist) in playlists"
        v-on:click="addMusicToPlaylist(info, playlist)"
        v-bind:key="playlist.id"
      >{{playlist.name}}</option>
    </select>
    <p style="float: left; padding: 5px; margin: 3px">{{this.timeConversion(trackDuration)}}</p>
    <div id="snackbar-delete">Music deleted</div>
  </div>
</template>

<script>
import PlayButton from "@/components/PlayButton.vue";
import db from "@/script/db";

export default {
  name: "MusicListItem",
  props: ["info", "itemId", "playlist", "artistName", "trackDuration"],
  data() {
    return {
      playlists: [],
      isActive: false,
      isInPlaylist: !(this.$props.playlist === undefined)
    };
  },
  methods: {
    timeConversion: function(millisec) {
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
    },
    myFunction: function(idTag) {
      var x = document.getElementById(idTag);
      x.className = "show";
      setTimeout(function() {
        x.className = x.className.replace("show", "");
      }, 3000);
    },

    getPlaylist: function() {
      this.playlists = db.getPlaylists();
    },
    openSelect: function() {
      this.isActive = !this.isActive;
    },
    addMusicToPlaylist(music, playlist) {
      playlist.addMusic(music);
      this.isActive = !this.isActive;
    },
    deleteSong(index) {
      this.$props.playlist.removeMusicByPosition(index);
      this.myFunction("snackbar-delete");
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
  margin: 3px;
  grid-template-columns: 5% 25% auto auto 15% auto;
  border-bottom-style: solid;
  border-width: 1px;
  border-color: gray;
  align-items: center;
  align-content: center;
  justify-content: space-between;
}

#snackbar-delete {
  visibility: hidden; /* Hidden by default. Visible on click */
  min-width: 250px; /* Set a default minimum width */
  margin-left: -125px; /* Divide value of min-width by 2 */
  background-color: #333; /* Black background color */
  color: #fff; /* White text color */
  text-align: center; /* Centered text */
  border-radius: 2px; /* Rounded borders */
  padding: 16px; /* Padding */
  position: fixed; /* Sit on top of the screen */
  z-index: 1; /* Add a z-index if needed */
  left: 50%; /* Center the snackbar */
  bottom: 30px; /* 30px from the bottom */
}

/* Show the snackbar when clicking on a button (class added with JavaScript) */
#snackbar-delete.show {
  visibility: visible; /* Show the snackbar */
  /* Add animation: Take 0.5 seconds to fade in and out the snackbar.
  However, delay the fade out process for 2.5 seconds */
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

/* Animations to fade the snackbar in and out */
@-webkit-keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@-webkit-keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}

@keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}
</style>