<template>
  <div class="item-container">
    <p>{{info.trackNumber}}</p>
    <h1>{{title}}</h1>
    <audio controls>
      <source v-bind:src="info.previewUrl" type="audio/mpeg" />
    </audio>
    <p>{{trackDuration}}</p>
  </div>
</template>

<script>
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
    var time = timeConversion(this.info.trackTimeMillis)
    return {
      title: this.info.trackName,
      trackDuration: time
    };
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
</style>