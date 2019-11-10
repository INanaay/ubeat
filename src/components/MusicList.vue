<template>
  <div id="musicList">
    <MusicListItem
      v-for="info in infos"
      v-bind:key="info.id"
      v-bind:info="info"
    />
  </div>
</template>

<script>
import MusicListItem from "@/components/MusicListItem.vue";

export default {
  name: "MusicList",
  components: {
    MusicListItem
  },
  props: ["infos"]
};
</script>

<style>
</style>