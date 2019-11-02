<template>
  <div class="item-container">
    <p>{{info.trackNumber}}</p>
    <p>{{title}}</p>
    <PlayButton v-bind:previewUrl="info.previewUrl"/>
    <p>{{trackDuration}}</p>
  </div>
</template>

<script>
import PlayButton from "@/components/PlayButton.vue";

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
  props: ["info"],
  data() {
    var trackDuration = new Date(this.info.trackTimeMillis);
    var time = timeConversion(this.info.trackTimeMillis);
    return {
      title: this.info.trackName,
      trackDuration: time
    };
  },
  components: {
    PlayButton
  }
};
</script>

<style scoped>
.item-container {
  display: grid;
  grid-template-columns: 10% 10% 65% 15%;
  border-bottom-style: solid;
  border-width: 1px;
  border-color: gray;
}

audio:hover,
audio:focus,
audio:active {
  -webkit-box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.4);
  box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.4);
  -webkit-transform: scale(1.05);
  -moz-transform: scale(1.05);
  transform: scale(1.05);
}

audio {
  -webkit-transition: all 0.5s linear;
  -moz-transition: all 0.5s linear;
  -o-transition: all 0.5s linear;
  transition: all 0.5s linear;
  -moz-box-shadow: 2px 2px 4px 0px #006773;
  -webkit-box-shadow: 2px 2px 4px 0px #006773;
  box-shadow: 2px 2px 4px 0px #006773;
  -moz-border-radius: 7px 7px 7px 7px;
  -webkit-border-radius: 7px 7px 7px 7px;
  border-radius: 7px 7px 7px 7px;
}
</style>