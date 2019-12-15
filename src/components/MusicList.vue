<template>
  <div id="musicList">
    <MusicListItem
      v-for="(info, index) in infos"
      v-bind:key="info.id"
      v-bind:info="info"
      v-bind:itemId="index"
      v-bind:playlist="playlist"
      v-bind:artistName="info.artistName"
      v-bind:trackDuration="info.trackTimeMillis"
      @refresh="refresh"
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
  },
  methods: {
    refresh: function () {
      this.$emit('refreshHigh');
    }
  }
};
</script>

<style></style>
