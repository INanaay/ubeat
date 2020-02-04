<template>
  <div>
    <img
      id="album_cover_img"
      :src="albumInfos.artworkUrl100"
      alt="Italian Trulli"
      width="300"
      height="300"
    />
    <div id="album_resume">
      <p class="album_infos_text">
        {{ albumInfos.collectionCensoredName }}, by
        {{ albumInfos.artistName }}
      </p>
      <p class="album_infos_text">
        {{ albumInfos.releaseDate }},
        {{ albumInfos.primaryGenreName }}
      </p>
      <p class="album_infos_text">
        {{ albumInfos.trackCount }} tracks, {{ albumTimeMillis }}
      </p>
      <img
        src="../../assets/plus.svg"
        alt
        class="album_infos_text"
        style="height: 25px; lenght: 25xp"
        v-on:click="openSelect()"
      />
      <br />
      <a
        id="itunes-button"
        v-bind:href="albumInfos.collectionViewUrl"
        style="display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/en-us/lockup.svg?kind=artist&bubble=apple_music&style=standard-white) no-repeat;width:140px;height:30px;"
      ></a>
      <select
        class="album_infos_text"
        v-if="isActive"
        size="3"
        style="position: relative"
      >
        <option
          v-for="playlist in playlists"
          v-on:click="addAllMusic(playlist)"
          v-bind:key="playlist.id"
          >{{ playlist.name }}</option
        >
      </select>
      <br />
    </div>
  </div>
</template>

<script>
import api from "../../script/api";

export default {
  name: "AlbumInfos",
  props: ["albumInfos", "albumTimeMillis", "infos"],
  data: () => ({
    isActive: false,
    playlists: []
  }),
  methods: {
    addAllMusic: function(playlist) {
      api
        .putMusicPlaylist(playlist, this.$props.infos)
        .then(() => {
          this.$alert(
            "Successfully added song to the play",
            "Add songs",
            "success"
          );
          this.isActive = !this.isActive;
        })
        .catch(() => {
          alert("Error getting playlist");
        });
    },
    openSelect: function() {
      this.isActive = !this.isActive;
    },
    getPlaylist: function() {
      api
        .getUserPlaylists(api.userId())
        .then(result => {
          this.playlists = result;
        })
        .catch(() => {
          alert("Error getting playlist");
        });
    }
  },
  created() {
    this.getPlaylist();
  }
};
</script>

<style scoped>
#album_resume {
  text-align: center;
}

#album_resume a {
  margin-top: 20px;
}
.album_infos_text {
  text-align: center;
}
#album_cover_img {
  height: auto;
  max-width: 100%;
  display: block;
  margin-top: 10px;
  margin-bottom: 5px;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>
