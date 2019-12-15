<template>
  <div class="music-preview">
    <router-link class="music-preview" v-bind:to="'/album/' + musicData.collectionId">
      <img v-bind:src="musicData.artworkUrl100" alt />
      <span>
        {{ musicData.trackName }}
        <br />
        {{ musicData.artistName }}
        <br />
        {{ musicData.collectionName }}
      </span>
    </router-link>

    <span>
      <img
        src="../../assets/plus.svg"
        alt
        style="height: 25px; lenght: 25px; padding: 5px; margin: 3px;"
        v-on:click="openSelect()"
      />
      <select v-if="isActive" size="3" style="position: center">
        <option
          v-for="playlist in this.playlists"
          v-on:click="addMusicToPlaylist(info, playlist)"
          v-bind:key="playlist.id"
        >{{ playlist.name }}</option>
      </select>
    </span>
  </div>
</template>

<script>
import api from "@/script/api";

export default {
  name: "SearchMusicItem",
  props: ["musicData"],
  methods: {
    addMusicToPlaylist(music, playlist) {
      api
        .postPlaylistTrack(playlist.id, music)
        .then(() => {
          if (this.isInPlaylist) {
            this.$parent.$parent.getPlaylists();
            this.$emit("refresh");
          }
          this.$alert("Successfully added new song", playlist.name, "success");
          this.isActive = !this.isActive;
        })
        .catch(() => {
          alert("Error adding song");
        });
    },
    openSelect: function() {
      this.isActive = !this.isActive;
    },
    getPlaylist: function() {
      api
        .getUserPlaylists(api.userId())
        .then(result => {
          this.$data.playlists = result;
        })
        .catch(() => {
          alert("Error getting playlist");
        });
    }
  },
  created() {
    this.getPlaylist();
  },
  data: () => ({
    playlists: [],
    isActive: false
  })
};
</script>

<style scoped>
.music-preview {
  word-wrap: normal;
  margin: 15px;
  justify-content: center;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  overflow: hidden;
  padding: 20px;
  width: 200px;
}

.music-preview img {
  text-align: center;
  width: 150px;
  height: 150px;
  margin-bottom: 10px;
}

.music-preview img:hover {
  opacity: 0.5;
}

.music-preview span {
  display: block;
  color: white;
  overflow: hidden;
}

.music-preview span:hover {
  color: #939393;
}

@media screen and (max-width: 992px) {
  .music-preview {
    width: 150px;
  }

  .music-preview img {
    width: 100px;
    height: 100px;
  }

  .music-preview span {
    font-size: 15px;
  }
}

@media screen and (max-width: 600px) {
  .music-preview {
    width: 100px;
  }
  .music-preview img {
    width: 75px;
    height: 75px;
  }

  .music-preview span {
    font-size: 10px;
  }
}
</style>
