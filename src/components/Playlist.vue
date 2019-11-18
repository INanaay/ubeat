<template>
  <div>
    <div v-if="!musicListMode">
      <div class="header">
        <h1>Playlists</h1>
        <button v-on:click="addPlaylist()" id="createButton">
          Create playlist
        </button>
      </div>
      <div id="playlists">
        <div v-for="playlist in playlists" v-bind:key="playlist.id">
          <div
            class="card"
            v-bind:style="{ 'background-color': playlist.color }"
          >
            <button v-on:click="changeSelectState(playlist)" class="cardButton">
              <span
                v-bind:class="{ blue: playlist.active }"
                class="mdi mdi-plus"
              ></span>
            </button>
            <button v-on:click="renamePlaylist(playlist)" class="cardButton">
              <span class="mdi mdi-rename-box"></span>
            </button>
            <button v-on:click="deletePlaylist(playlist)" class="cardButton">
              <span class="mdi mdi-trash-can"></span>
            </button>
            <select v-if="playlist.active" size="10">
              <option
                v-for="song in fakeDB"
                v-bind:key="song.id"
                v-on:click="addSong(playlist, song)"
              >
                {{ song.trackName }} - {{ song.artistName }}
              </option>
            </select>
            <div
              v-if="!playlist.active"
              v-on:click="openPlaylist(playlist)"
              class="cardTitle"
            >
              {{ playlist.name }}
            </div>
            <div v-if="!playlist.active" class="songSize">
              {{ playlist.size }} songs
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <button class="backButton" v-on:click="backToPlaylists()">
        <span class="mdi mdi-undo"></span>
      </button>
      <div class="header">
        <h1>{{ currentPlaylist.name }} playlist</h1>
      </div>
      <MusicList
        v-bind:infos="currentPlaylist.formatMusicList()"
        v-bind:playlist="currentPlaylist"
      />
    </div>
  </div>
</template>

<script>
import MusicList from "@/components/MusicList.vue";
import db from "@/script/db";

export default {
  name: "Playlist",
  components: {
    MusicList
  },
  data() {
    return {
      fakeDB: db.getFakeDB(),
      playlists: db.getPlaylists(),
      songToAdd: {},
      musicListMode: false,
      currentPlaylist: ""
    };
  },
  methods: {
    addPlaylist: function() {
      this.$prompt("Playlist name", "", "Create playlist", "question")
        .then(result => {
          if (result.length > 10)
            this.$alert("Maxium playlist name length is 10", "Error", "error");
          else {
            db.addPlaylist(result);
            this.$alert("Successfully added playlist", result, "success");
          }
        })
        .catch(() => {});
    },
    renamePlaylist: function(playlist) {
      let oldName = playlist.name;
      this.$prompt("New playlist name", name, "Rename playlist", "question")
        .then(result => {
          if (result.length > 10)
            this.$alert("Maxium playlist name length is 10", "Error", "error");
          else {
            playlist.rename(result);
            this.$alert(
              'Successfully renamed "' + oldName + '" to "' + result + '"',
              "Renamed",
              "success"
            );
          }
        })
        .catch(() => {});
    },
    addSong: function(playlist, song) {
      this.$confirm(
        'Do you want to add "' +
          song.trackName +
          '" of "' +
          song.artistName +
          '"',
        playlist.name,
        "question"
      ).then(result => {
        if (result) {
          playlist.addMusic(song);
          playlist.active = false;
          this.$alert("Successfully added new song", playlist.name, "success");
        }
      });
    },
    deletePlaylist: function(playlist) {
      this.$confirm(
        'Do you want to delete "' + playlist.name + '"',
        "Are you sure ?",
        "warning"
      )
        .then(result => {
          if (result) {
            db.removePlaylistBy(playlist.id);
            this.$alert(
              'Successfully deleted "' + playlist.name + '"',
              "Deleted",
              "success"
            );
          }
        })
        .catch(() => {});
    },
    changeSelectState: function(playlist) {
      this.fakeDB = db.getFakeDB();
      playlist.active = !playlist.active;
    },
    openPlaylist: function(playlist) {
      this.musicListMode = true;
      this.currentPlaylist = playlist;
    },
    backToPlaylists: function() {
      this.musicListMode = false;
    }
  }
};
</script>

<style scoped>
.backButton {
  position: absolute;
  font-size: 40px;
  color: black;
  left: 0%;
  background-color: gray;
  border-color: #1b1b1b;
  border-radius: 10px;
}

option {
  font-size: 15px;
}

select {
  margin-bottom: 10px;
  position: relative;
  width: 20vw;
}

h1 {
  margin: 30px;
  font-size: 35px;
  color: white;
  text-align: center;
}

#createButton {
  border-color: black;
  border-radius: 10px;
  background-color: #3498db;
  color: white;
  font-size: 30px;
  padding: 10px;
  margin: 20px;
}

#playlists {
  text-align: center;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
}

.cardTitle {
  color: white;
  display: block;
  text-align: center;
  font-size: 3vw;
  margin-left: 5px;
  margin-right: 5px;
}

.songSize {
  color: white;
  text-align: center;
  display: block;
  font-size: 2vw;
  margin-top: 1vw;
  margin-left: 1vw;
}

.cardButton {
  text-align: center;
  display: inline-block;
  color: white;
  border-color: #1b1b1b;
  background-color: #1b1b1b;
  font-size: 2vw;
  margin-top: 1vw;
  margin-right: 3px;
  margin-left: 3px;
  margin-bottom: 1vw;
  border-radius: 5px;
  padding: 4px;
  padding-right: 6px;
  padding-left: 6px;
}

div {
  text-align: center;
}

.card {
  margin: 20px;
  height: 16vw;
  border: 3px solid black;
  border-radius: 20px;
  width: 20vw;
  padding: 15px;
}
</style>
