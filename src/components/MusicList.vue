<template>
  <div id="musicList">
    <MusicListItem
      v-for="(info, index) in infos"
      v-bind:key="info.id"
      v-bind:info="info"
      v-bind:itemId="index"
      v-bind:playlist="playlist"
      v-bind:artistName="info.artistName"
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
  props: ["infos", "playlist"],
  created() {
    console.log(this.$props)
  }
};
</script>

<style>
</style>