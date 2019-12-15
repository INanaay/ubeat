<template>
  <div id="userContainer">
    <router-link
      class="user-preview"
      v-bind:to="{ path: '/user/' + peopleData.id, params: { isMe: false } }"
    >
      <img src="../../assets/avatar2.png" alt="" />
      <span>
        {{ peopleData.name }}
        <br />
        {{ peopleData.email }}
        <br />
      </span>
    </router-link>
    <button class="followButton" v-if="!this.isFollowing" v-on:click="follow()">
      Follow
    </button>
    <button
      class="followButton"
      v-if="this.isFollowing"
      v-on:click="unfollow()"
    >
      Unfollow
    </button>
  </div>
</template>

<script>
import api from "@/script/api";

export default {
  name: "SearchUsetrItem",
  props: ["peopleData", "userData"],
  data: () => ({
    isFollowing: false
  }),
  created() {
    this.checkIfFollowing();
  },
  methods: {
    checkIfFollowing: function() {
        // eslint-disable-next-line no-unused-vars
      for (const user of this.userData.following) {
        if (user.id === this.peopleData.id) this.isFollowing = true;
      }
    },
    follow: function() {
      console.log("his id = " + this.peopleData.id);
      api
        .postFollow(this.peopleData.id)
        .then(() => {
          this.isFollowing = !this.isFollowing;
          this.$alert(
            "Successfully followed " + this.peopleData.name,
            "Follow",
            "success"
          );
        })
        .catch(() => {
          alert("Error following user");
        });
    },
    unfollow: function() {
      api
        .deleteFollow(this.peopleData.id)
        .then(() => {
          this.isFollowing = !this.isFollowing;
          this.$alert(
            "Successfully unfollowed " + this.peopleData.name,
            "UnFollow",
            "success"
          );
        })
        .catch(() => {
          alert("Error unfollowing user");
        });
    }
  }
};
</script>

<style scoped>
.follow {
  align-self: center;
}

#userContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  padding: 20px;
}

.user-preview {
  word-wrap: normal;
  margin: 15px;
  justify-content: center;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  overflow: hidden;
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
