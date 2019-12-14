<template>
  <div class="user-preview">
    <img src="../assets/avatar2.png" alt="" />
    <span>
      {{ peopleData.name }}
      <br />
      {{ peopleData.email }}
      <br />
    </span>
  </div>
</template>

<script>
export default {
  name: "SearchUsetrItem",
  props: ["peopleData"]
};
</script>

<style scoped>
.user-preview {
  word-wrap: normal;
  margin: 15px;
  justify-content: center;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  overflow: hidden;
  padding: 20px;
  width: 200px;
}

.user-preview img {
  text-align: center;
  width: 150px;
  height: 150px;
  margin-bottom: 10px;
}

.user-preview img:hover {
  opacity: 0.5;
}

.user-preview span {
  display: block;
  color: white;
  overflow: hidden;
}

.user-preview span:hover {
  color: #939393;
}

@media screen and (max-width: 992px) {
  .user-preview {
    width: 150px;
  }

  .user-preview img {
    width: 100px;
    height: 100px;
  }

  .user-preview span {
    font-size: 15px;
  }
}

@media screen and (max-width: 600px) {
  .user-preview {
    width: 100px;
  }
  .user-preview img {
    width: 75px;
    height: 75px;
  }

  .user-preview span {
    font-size: 10px;
  }
}
</style>
