<template>
  <div id="musicList">
    <MusicListItem
      v-for="(info, index) in infos"
      v-bind:key="info.id"
      v-bind:info="info"
      v-bind:itemId="index"
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