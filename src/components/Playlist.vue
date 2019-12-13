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
        v-bind:infos="currentPlaylist.getTracks()"
        v-bind:playlist="currentPlaylist"
        @refreshHigh="refresh"
      />
    </div>
  </div>
</template>

<script>
import MusicList from "@/components/MusicList.vue";
import db from "@/script/db";
import api from "@/script/api"

export default {
  name: "Playlist",
  components: {
    MusicList
  },
  data() {
    return {
      fakeDB: db.getFakeDB(),
      playlists: [],
      songToAdd: {},
      musicListMode: false,
      currentPlaylist: ""
    };
  },
  created() {
    this.getPlaylists();
  },
  methods: {
    refresh: function() {
      this.getPlaylists();
    },
    getPlaylists: function() {
      api.getUserPlaylists(api.userId)
        .then(result => {
          this.playlists = result;
          if (this.currentPlaylist && this.currentPlaylist.id) {
            for (var i = 0; i < this.playlists.length; i++) {
               if (this.playlists[i].id === this.currentPlaylist.id)
                 this.currentPlaylist = this.playlists[i]
            }
          }
        })
        .catch(() => {
          alert("Error getting playlist");
        });
    },
    addPlaylist: function() {
      this.$prompt("Playlist name", "", "Create playlist", "question")
        .then(result => {
          if (result.length > 10)
            this.$alert("Maxium playlist name length is 10", "Error", "error");
          else {
            api.postPlaylist(result)
            .then(() => {
              this.getPlaylists();
              this.$alert("Successfully added playlist", result, "success");
            })
            .catch(() => {
              alert("Error adding playlist")
            });
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
            api.putPlaylist(playlist, result)
              .then(() => {
                this.getPlaylists();
                this.$alert(
                  'Successfully renamed "' + oldName + '" to "' + result + '"',
                  "Renamed",
                  "success"
                );
              })
              .catch(() => {
                alert("Error editing playlist")
              });;
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
          api.postPlaylistTrack(playlist.id, song)
            .then(() => {
              this.getPlaylists();
              this.$alert("Successfully added new song", playlist.name, "success");
              playlist.active = false;
            })
            .catch(() => {
            alert("Error adding song")
          });
        }
      })
        .catch(() => {});
    },
    deletePlaylist: function(playlist) {
      this.$confirm(
        'Do you want to delete "' + playlist.name + '"',
        "Are you sure ?",
        "warning"
      )
        .then(result => {
          if (result) {
            api.deletePlaylist(playlist.id)
              .then(() => {
                this.getPlaylists();
                this.$alert(
                  'Successfully deleted "' + playlist.name + '"',
                  "Deleted",
                  "success"
                );
              })
              .catch(() => {
              alert("Error deleting playlist")
            });;
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
