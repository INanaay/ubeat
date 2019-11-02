<template>
  <div id="musicList">
    <h1>Je suce !</h1>
    <div v-bind:key="info.id" v-for="info in infos">
      <MusicListItem v-bind:info="info"/>
    </div>
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