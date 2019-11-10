<template>
  <div>
    <ul>
      <li>
        <img v-bind:src="data.artworkUrl100" />
        <br />
        {{ data.collectionName }}
        <br />
        {{ data.artistName }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SomeAlbum",
  props: ["data"]
};
</script>

<style scoped></style>
