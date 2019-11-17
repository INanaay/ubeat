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
        {{ albumInfos.releaseDate.split("-")[0] }},
        {{ albumInfos.primaryGenreName }}
      </p>
      <p class="album_infos_text">
        {{ albumInfos.trackCount }} tracks, {{ albumTimeMillis }}
      </p>
      <button type="button" class="play-button">Play</button>
      <img
        src="../../assets/plus.svg"
        alt
        class="album_infos_text"
        style="height: 25px; lenght: 25xp"
        v-on:click="openSelect()"
      />
      <br/>
      <a
        href="https://geo.music.apple.com/ca/album/blood-sugar-sex-magik/945581828?mt=1&app=music"
        style="margin:5px;display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=1991-09-24&kind=album&bubble=apple_music) no-repeat;width:158px;height:45px;"
      ></a>
      <select class="album_infos_text" v-if="isActive" size="3" style="position: relative">
        <option
          v-for="playlist in playlists"
          v-on:click="addAllMusic(playlist)"
          v-bind:key="playlist.id"
          >{{ playlist.name }}</option
        >
      </select>
      <br/>
    </div>
  </div>
</template>

<script>
import db from "../../script/db";
export default {
  name: "AlbumInfos",
  props: ["albumInfos", "albumTimeMillis", "infos"],
  data: () => ({
    isActive: false,
    playlists: []
  }),
  methods: {
    addAllMusic: function(playlist) {
      playlist.addAllMusic(this.$props.infos);
      this.isActive = !this.isActive;
    },
    openSelect: function() {
      this.isActive = !this.isActive;
    },
    getPlaylist: function() {
      this.playlists = db.getPlaylists();
    }
  },
  created() {
    this.getPlaylist();
  }
};
</script>

<style scoped>
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

.play-button {
  font-family: "Poppins", sans-serif;
  background-color: #4caf50;
  border: none;
  border-radius: 25%;
  color: white;
  padding: 14px 40px;
  margin: 5px;
  font-size: 18;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}
</style>
