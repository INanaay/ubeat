<template>
  <div>
    <audio controls>
      <source v-bind:src="previewUrl" type="audio/mpeg" />
    </audio>
    <!-- <audio id="player" src="vincent.mp3"></audio> -->
    <!-- <div>
      <button v-on:click="playMusic">Play</button>
    </div> -->
  </div>
</template>

<script>
// TODO: Need to change the button design
export default {
  name: "PlayButton",
  props: ["previewUrl"],
  created: function() {

  },
  methods: {
    // playMusic: function() {
    //   console.log(this.$refs)
    // }
  }
};
</script>

<style scoped>
</style>