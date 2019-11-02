<template>
  <div>
    <img
      id="album_cover_img"
      src="../assets/album_cover.jpg"
      alt="Italian Trulli"
      width="300"
      height="300"
    />
    <div id="album_resume">
      <span class="album_infos_text">
          {{albumInfos.collectionCensoredName}}
        <br />
      </span>
      <span class="album_infos_text">
        By
        <br />{{albumInfos.artistName}} (1991)
        <br />Rock / Funk rock
      </span>
      <span class="album_infos_text">
        <br />{{albumInfos.trackCount}} tracks, 1 hr 19 min
        <br />
      </span>
      <button type="button" class="play-button">Play</button>
      <br />
      <a
        href="https://geo.music.apple.com/ca/album/blood-sugar-sex-magik/945581828?mt=1&app=music"
        style="margin:5px;display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=1991-09-24&kind=album&bubble=apple_music) no-repeat;width:158px;height:45px;"
      ></a>
    </div>
  </div>
</template>

<script>
export default {
    name: "AlbumInfos",
    props: ["albumInfos"]
};
</script>

<style scoped>
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