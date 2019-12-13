<template>
  <div>
    <button v-if=!isMe v-on:click="goBack" class="backButton">Back to my profil</button>
    <div v-if="!isActive">
      <h2 class="title">User profile</h2>
      <div v-if=!isMe id="followButton">
        <button class="followButton" v-if="!isFollowing" v-on:click="follow()">Follow</button>
        <button class="followButton" v-if="isFollowing" v-on:click="unfollow()">Unfollow</button>
      </div>
      <div id="name">Name : <span id="nameValue">{{userData.name}}</span></div>
      <div id="email">Email : <span id="emailValue">{{userData.email}}</span></div>
      <h2 class="title">Follows</h2>
      <div v-bind:key="user.id" v-for="user in userData.following" class="followBlock">
        <div v-on:click="goToUser(user.id)" class="followCard">
          <div class="followName">{{user.name}}</div>
          <div class="followEmail">{{user.email}}</div>
        </div>
      </div>
      <h2 class="title">Playlists</h2>
      <div v-bind:key="playlist.id" v-for="playlist in playlists" class="playlistBlock" >

        <div v-if="isMe">
          <div class="playlistCard" v-on:click="goToMyPlaylist()" v-bind:style="{ 'background-color': playlist.color }">
            <div class="playlistName">{{playlist.name}}</div>
            <div class="playlistNumberOfSongs">{{playlist.tracks.length}} songs</div>
          </div>
        </div>
        <div v-else>
          <div class="playlistCard" v-on:click="openPlaylist(playlist)" v-bind:style="{ 'background-color': playlist.color }">
            <div class="playlistName">{{playlist.name}}</div>
            <div class="playlistNumberOfSongs">{{playlist.tracks.length}} songs</div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isActive">
      <MusicList v-bind:infos="currentPlaylist.getTracks()" />
    </div>
  </div>
</template>


<style scoped>
  .backButton {
    font-size: 17px;
    padding: 10px;
    background-color: black;
    border: 2px solid black;
    border-radius: 20px;
    color: white;
    margin: 10px;
  }

  div {
    color: white;
    font-size: 22px;
  }

  #name, #email {
    color: lightgrey;
    margin-left: 30vw;
    margin-bottom: 2vw;
    font-size: 25px
  }

  #emailValue, #nameValue {
    color: #f39c12;
    font-size: 25px;
    margin-left: 10vw;
  }

  .followButton {

    color: white;
    padding: 15px;
    background-color: #2980b9;
    border-color: #2980b9;
    border-radius: 10px;
    margin-left: 80vw;
    font-size: 25px;
  }

  .title {
    margin-left: 10px;
    color: white;
  }

  .followCard {
    text-align: center;
    border: 2px solid grey;
    padding: 20px;
    width: 10vw;
    height: 10vw;
    background-color: #2980b9;
    color: white;
    border-radius: 200px;
    word-wrap: break-word;
    cursor: pointer;
  }

  .followBlock {
    display: inline-flex;
    padding-left: 4vw;
  }

  .followEmail {
    color: lightgrey;
    font-size: 1vw;
  }

  .followName {
    font-size: 2vw;
    margin-top: 3vw;
  }

  .playlistBlock {
    display: inline-flex;
    margin-bottom: 40px;
    padding-left: 3vw;
  }

  .playlistCard {
    text-align: center;
    border: 2px solid grey;
    padding: 20px;
    width: 10vw;
    height: 8vw;
    color: white;
    border-radius: 20px;
    word-wrap: break-word;
    cursor: pointer;
  }

  .playlistName {
    font-size: 2vw;
    margin-top: 2vw;
  }

  .playlistNumberOfSongs {
    color: lightgrey;
    font-size: 1vw;
  }

  button {
    cursor: pointer;
  }





</style>

<script>
  import api from "@/script/api"
  import MusicList from "@/components/MusicList";

    export default {
      name: "User.vue",
      components: {MusicList},
      data: function () {
        return {
          connectUserData: {},
          userData: {},
          playlists: {},
          id: this.$route.params.id,
          isMe: false,
          isFollowing: false,
          currentPlaylist: {},
          isActive: false,
        }
      },
      methods: {
        goToMyPlaylist: function() {
          this.$router.push('/playlist')
        },
        openPlaylist: function(playlist) {
          this.currentPlaylist = playlist;
          this.isActive = true;
          console.log(this.currentPlaylist.getTracks())
        },
        getUserPlaylist: function () {
            api.getUserPlaylists(this.id)
              .then(result => {
                this.playlists = result;
              })
              .catch(() => {
                alert("Error getting playlist");
              });
          },
        getUserData: function() {
          api.getUserData(this.id)
            .then(result => {
              this.userData = result;
              this.getConnectUserData();
            })
            .catch(() => {
              alert("Error getting user data");
            });
        },
        getConnectUserData: function() {
          api.getUserData(api.userId)
            .then(result => {
              this.connectUserData = result;
              this.isFollowing = this.amIFollowing();
            })
            .catch(() => {
              alert("Error getting connect user data");
            });
        },
        amIFollowing: function () {
          for (var user of this.connectUserData.following) {
            if (user.id === this.id) {
              return true;
            }
          }
          return false;
        },
        follow: function () {
          api.postFollow(this.id)
            .then(() => {
              this.isFollowing = !this.isFollowing;
            this.$alert("Successfully followed " + this.userData.name, "Follow", "success");
          })
          .catch(() => {
            alert("Error following user");
          });
        },
        unfollow: function () {
          api.deleteFollow(this.id)
            .then(() => {
              this.isFollowing = !this.isFollowing;
              this.$alert("Successfully unfollowed " + this.userData.name, "UnFollow", "success");
            })
            .catch(() => {
              alert("Error unfollowing user");
            });
        },
        refresh: function() {
          this.currentPlaylist = {},
          this.isActive = false,
          this.userData = {},
          this.playlists = {},
          this.id = this.$route.params.id,
          this.isFollowing = false
          this.isMe = this.id === api.userId;
          this.getUserPlaylist();
          this.getUserData();
        },
        goToUser: function (userId) {
          this.$router.push('/user/' + userId);
          this.refresh();
        },
        goBack: function () {
          this.$router.push('/user/' + api.userId);
          this.refresh();
        }
      },
      mounted() {
          this.isMe = this.id === api.userId;
          this.getUserPlaylist();
          this.getUserData();
      }
    }
</script>

