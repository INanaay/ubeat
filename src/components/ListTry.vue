<template>
  <div>
    <ul>
      <li>
        <img v-bind:key="img" v-for="img in picture" v-bind:src="img" />
        <p v-bind:key="item" v-for="item in name">{{ item }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SomeAlbum",
  data: () => ({
    picture: [
      "https://is3-ssl.mzstatic.com/image/thumb/Music118/v4/2e/b9/10/2eb910ad-5dbd-130d-5713-ff19dcadba2e/source/100x100bb.jpg",
      "https://is4-ssl.mzstatic.com/image/thumb/Music/v4/73/55/ee/7355ee91-1b7e-ab3c-7117-dd4aaa1cbb75/source/100x100bb.jpg"
    ],
    name: ["2Pac", "AC/DC"]
  })
};
</script>

<style scoped></style>
