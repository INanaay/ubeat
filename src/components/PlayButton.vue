<template>
  <div>
    <audio controls>
      <source v-bind:src="previewUrl" type="audio/mpeg" />
    </audio>
  </div>
</template>

<script>
// TODO: Need to change the button design
export default {
  name: "PlayButton",
  props: ["previewUrl"],
  created: function() {},
  methods: {}
};
</script>

<style scoped>
</style>