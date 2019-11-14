<template>
  <div class="wrapper">
    <div class="box sidebar">
      <img
        id="album_cover_img"
        src="../assets/album_cover.jpg"
        alt="Italian Trulli"
        width="300"
        height="300"
      />
      <div id="album_infos">
        <div id="album_resume">
          <span class="album_infos_text">
            Blood Sugar Sex Magik
            <br />
          </span>
          <span class="album_infos_text">
            By
            <br />Red Hot Chili Peppers (1991) <br />Rock / Funk rock
          </span>
          <span class="album_infos_text">
            <br />19 tracks, 1 hr 19 min
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
    </div>
    <div class="box sidebar2">
      <MusicList v-bind:infos="musicList.results"/>
      <div class="grid-item">
        <ul class="music_list">
          <li>
            <div class="music-list-grid-container">
              <div class="music-list-grid-item">
                <span class="music_number">1</span>
              </div>
              <div class="music-list-grid-item">
                <img
                  src="../assets/play.png"
                  alt="love_track"
                  width="20"
                  height="20"
                />
              </div>
              <div class="music-list-grid-item">
                <span class="music_name">The Power Of Equality</span>
              </div>
              <div class="music-list-grid-item">
                <span class="music_duration">4:04</span>
              </div>
            </div>
          </li>
          <li>
            <div class="music-list-grid-container">
              <div class="music-list-grid-item">
                <span class="music_number">2</span>
              </div>
              <div class="music-list-grid-item">
                <img
                  src="../assets/play.png"
                  alt="love_track"
                  width="20"
                  height="20"
                />
              </div>
              <div class="music-list-grid-item">
                <span>If You Have To Ask</span>
              </div>
              <div class="music-list-grid-item">
                <span>3:37</span>
              </div>
            </div>
          </li>
          <li>
            <div class="music-list-grid-container">
              <div class="music-list-grid-item">
                <span class="music_number">3</span>
              </div>
              <div class="music-list-grid-item">
                <img
                  src="../assets/play.png"
                  alt="love_track"
                  width="20"
                  height="20"
                />
              </div>
              <div class="music-list-grid-item">
                <span>Breaking The Girl</span>
              </div>
              <div class="music-list-grid-item">
                <span>4:55</span>
              </div>
            </div>
          </li>
          <li>
            <div class="music-list-grid-container">
              <div class="music-list-grid-item">
                <span class="music_number">4</span>
              </div>
              <div class="music-list-grid-item">
                <img
                  src="../assets/play.png"
                  alt="love_track"
                  width="20"
                  height="20"
                />
              </div>
              <div class="music-list-grid-item">
                <span>Funky Monks</span>
              </div>
              <div class="music-list-grid-item">
                <span>5:23</span>
              </div>
            </div>
          </li>
          <li>
            <div class="music-list-grid-container">
              <div class="music-list-grid-item">
                <span class="music_number">5</span>
              </div>
              <div class="music-list-grid-item">
                <img
                  src="../assets/play.png"
                  alt="love_track"
                  width="20"
                  height="20"
                />
              </div>
              <div class="music-list-grid-item">
                <span>Suck My Kiss</span>
              </div>
              <div class="music-list-grid-item">
                <span>3:37</span>
              </div>
            </div>
          </li>
          <li>
            <div class="music-list-grid-container">
              <div class="music-list-grid-item">
                <span class="music_number">6</span>
              </div>
              <div class="music-list-grid-item">
                <img
                  src="../assets/play.png"
                  alt="love_track"
                  width="20"
                  height="20"
                />
              </div>
              <div class="music-list-grid-item">
                <span>I Could Have Lied</span>
              </div>
              <div class="music-list-grid-item">
                <span>4:04</span>
              </div>
            </div>
          </li>
          <li>
            <div class="music-list-grid-container">
              <div class="music-list-grid-item">
                <span class="music_number">7</span>
              </div>
              <div class="music-list-grid-item">
                <img
                  src="../assets/play.png"
                  alt="love_track"
                  width="20"
                  height="20"
                />
              </div>
              <div class="music-list-grid-item">
                <span>Mellowship Slinky in B Major</span>
              </div>
              <div class="music-list-grid-item">
                <span>4:00</span>
              </div>
            </div>
          </li>
          <li>
            <div class="music-list-grid-container">
              <div class="music-list-grid-item">
                <span class="music_number">8</span>
              </div>
              <div class="music-list-grid-item">
                <img
                  src="../assets/play.png"
                  alt="love_track"
                  width="20"
                  height="20"
                />
              </div>
              <div class="music-list-grid-item">
                <span>The Righteous & the Wicked</span>
              </div>
              <div class="music-list-grid-item">
                <span>4:08</span>
              </div>
            </div>
          </li>
          <li>
            <div class="music-list-grid-container">
              <div class="music-list-grid-item">
                <span class="music_number">9</span>
              </div>
              <div class="music-list-grid-item">
                <img
                  src="../assets/play.png"
                  alt="love_track"
                  width="20"
                  height="20"
                />
              </div>
              <div class="music-list-grid-item">
                <span>Give It Away</span>
              </div>
              <div class="music-list-grid-item">
                <span>4:43</span>
              </div>
            </div>
          </li>
          <li>
            <div class="music-list-grid-container">
              <div class="music-list-grid-item">
                <span class="music_number">10</span>
              </div>
              <div class="music-list-grid-item">
                <img
                  src="../assets/play.png"
                  alt="love_track"
                  width="20"
                  height="20"
                />
              </div>
              <div class="music-list-grid-item">
                <span>Blood Sugar Sex Magik</span>
              </div>
              <div class="music-list-grid-item">
                <span>4:31</span>
              </div>
            </div>
          </li>
          <li>
            <div class="music-list-grid-container">
              <div class="music-list-grid-item">
                <span class="music_number">11</span>
              </div>
              <div class="music-list-grid-item">
                <img
                  src="../assets/play.png"
                  alt="love_track"
                  width="20"
                  height="20"
                />
              </div>
              <div class="music-list-grid-item">
                <span>Under The Brifge</span>
              </div>
              <div class="music-list-grid-item">
                <span>4:24</span>
              </div>
            </div>
          </li>
          <li>
            <div class="music-list-grid-container">
              <div class="music-list-grid-item">
                <span class="music_number">12</span>
              </div>
              <div class="music-list-grid-item">
                <img
                  src="../assets/play.png"
                  alt="love_track"
                  width="20"
                  height="20"
                />
              </div>
              <div class="music-list-grid-item">
                <span>Naked in the Rain</span>
              </div>
              <div class="music-list-grid-item">
                <span>4:04</span>
              </div>
            </div>
          </li>
          <li>
            <div class="music-list-grid-container">
              <div class="music-list-grid-item">
                <span class="music_number">13</span>
              </div>
              <div class="music-list-grid-item">
                <img
                  src="../assets/play.png"
                  alt="love_track"
                  width="20"
                  height="20"
                />
              </div>
              <div class="music-list-grid-item">
                <span>Apache Rose Peacock</span>
              </div>
              <div class="music-list-grid-item">
                <span>4:04</span>
              </div>
            </div>
          </li>
          <li>
            <div class="music-list-grid-container">
              <div class="music-list-grid-item">
                <span class="music_number">14</span>
              </div>
              <div class="music-list-grid-item">
                <img
                  src="../assets/play.png"
                  alt="love_track"
                  width="20"
                  height="20"
                />
              </div>
              <div class="music-list-grid-item">
                <span>The Greeting Song</span>
              </div>
              <div class="music-list-grid-item">
                <span>4:04</span>
              </div>
            </div>
          </li>
          <li>
            <div class="music-list-grid-container">
              <div class="music-list-grid-item">
                <span class="music_number">15</span>
              </div>
              <div class="music-list-grid-item">
                <img
                  src="../assets/play.png"
                  alt="love_track"
                  width="20"
                  height="20"
                />
              </div>
              <div class="music-list-grid-item">
                <span>My Lovely Man</span>
              </div>
              <div class="music-list-grid-item">
                <span>4:04</span>
              </div>
            </div>
          </li>
          <li>
            <div class="music-list-grid-container">
              <div class="music-list-grid-item">
                <span class="music_number">16</span>
              </div>
              <div class="music-list-grid-item">
                <img
                  class="love-track"
                  src="../assets/play.png"
                  alt="love_track"
                  width="20"
                  height="20"
                />
              </div>
              <div class="music-list-grid-item">
                <span>My Lovely Man</span>
              </div>
              <div class="music-list-grid-item">
                <span>4:04</span>
              </div>
            </div>
          </li>
          <li>
            <div class="music-list-grid-container">
              <div class="music-list-grid-item">
                <span class="music_number">17</span>
              </div>
              <div class="music-list-grid-item">
                <img
                  src="../assets/play.png"
                  alt="love_track"
                  width="20"
                  height="20"
                />
              </div>
              <div class="music-list-grid-item">
                <span>Sir Psycho Sexy</span>
              </div>
              <div class="music-list-grid-item">
                <span>4:04</span>
              </div>
            </div>
          </li>
          <li>
            <div class="music-list-grid-container">
              <div class="music-list-grid-item">
                <span class="music_number">18</span>
              </div>
              <div class="music-list-grid-item">
                <img
                  src="../assets/play.png"
                  alt="love_track"
                  width="20"
                  height="20"
                />
              </div>
              <div class="music-list-grid-item">
                <span>They're Red Hot</span>
              </div>
              <div class="music-list-grid-item">
                <span>4:04</span>
              </div>
            </div>
          </li>
          <li>
            <div class="music-list-grid-container">
              <div class="music-list-grid-item">
                <span class="music_number">18</span>
              </div>
              <div class="music-list-grid-item">
                <img
                  src="../assets/play.png"
                  alt="love_track"
                  width="20"
                  height="20"
                />
              </div>
              <div class="music-list-grid-item">
                <span>Little Miss Lover</span>
              </div>
              <div class="music-list-grid-item">
                <span>4:04</span>
              </div>
            </div>
          </li>
          <li>
            <div class="music-list-grid-container">
              <div class="music-list-grid-item">
                <span class="music_number">19</span>
              </div>
              <div class="music-list-grid-item">
                <img
                  src="../assets/play.png"
                  alt="love_track"
                  width="20"
                  height="20"
                />
              </div>
              <div class="music-list-grid-item">
                <span>Castles Made of Sand</span>
              </div>
              <div class="music-list-grid-item">
                <span>4:04</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import MusicList from "@/components/MusicList";
import AlbumInfos from "@/components/AlbumInfos.vue";

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
    try {
      const response = await axios.get(
        `http://ubeat.herokuapp.com/unsecure/albums/929463779`
      );
      if (response.status) {
        this.albumInfos = response.data.results[0];
        console.log(albumInfos)
      }
    } catch (e) {
      this.errors.push(e);
    }
    try {
      const response = await axios.get(
        `http://ubeat.herokuapp.com/unsecure/albums/929463779/tracks`
      );      
      this.musicList = response.data;
      var time = 0
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
