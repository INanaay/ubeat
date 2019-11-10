<template>
  <div>
    <ul>
      <li>
        <img
          v-bind:key="img"
          v-for="img in Artist_Data"
          v-bind:src="img.artworkUrl100"
        />
        <span>
          {{ item.artistName }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import HomeApi from "@/script/api";
export default {
  name: "SomeAlbum",
  data: () => ({
    Artist_Data: []
  }),
  props: ["item"],
  created() {
    HomeApi.getArtistinfo("Skrillex")
      .then(response => {
        this.Artist_Data = response;
      })
      .catch(error => console.log(error));
  }
};
</script>

<style scoped></style>
