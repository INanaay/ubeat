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
audio {
  margin-right: 30px;
  padding-right: 10px;
}

@media screen and (max-width: 992px) {
  audio {
    width: 100px;
    height: 30px;
    margin-right: 10px;
    padding-right: 5px;
  }
}
</style>