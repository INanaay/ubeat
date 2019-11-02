<template>
  <div>
    <audio controls>
      <source v-bind:src="previewUrl" type="audio/mpeg" />
    </audio>
  </div>
</template>

<script>
export default {
  name: "PlayButton",
  props: ["previewUrl"]
};
</script>

<style scoped>
</style>