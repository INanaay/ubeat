<template>
  <div>
    <div id="container">
      <img id="background-image" v-bind:src="this.imageUrl" />
      <div id="basic-info-container">
        <h2 id="title">{{ this.artistInfo.artistName }}</h2>
        <span>{{ this.artistInfo.primaryGenreName }}</span>
      </div>
      <a
        id="itunes-button"
        v-bind:href="artistInfo.artistLinkUrl"
        style="display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/en-us/lockup.svg?kind=artist&bubble=apple_music&style=standard-white) no-repeat;width:140px;height:30px;"
      ></a>
    </div>

    <div>
      <h1 id="albums-title">Albums</h1>
      <div id="albums-container">
        <album-preview
          v-bind:key="'item' + a"
          v-for="(item, a) in albums"
          v-bind:albumData="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/script/api";
import AlbumPreview from "@/components/Album/AlbumPreview";

export default {
  name: "ArtistDetail",
  components: { AlbumPreview },
  methods: {
    async getArtistInfos() {
      const artistId = this.$route.params.id;

      const response = await Promise.all([
        api.getArtistById(artistId),
        api.getArtistAlbumsById(artistId)
      ]);

      if (!response) {
        alert("Error fetching apis");
        return;
      }

      this.artistInfo = response[0][0];
      this.albums = response[1];
      this.imageUrl = await api.getArtistImage(this.artistInfo.artistName);
    }
  },
  data: () => ({
    artistInfo: {},
    albums: [],
    imageUrl: ""
  }),
  created() {
    this.getArtistInfos();
  }
};
</script>

<style scoped>
#background-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: 10% 10%;
  -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(0, 0, 0, 1)),
    to(rgba(0, 0, 0, 0))
  );
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
}

#container {
  position: relative;
  color: white;
  justify-content: center;
  align-items: center;
}

#basic-info-container {
  background-color: transparent;
  position: absolute;
  top: 10%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-left: 50px;
}

#basic-info-container span {
  color: white;
  font-weight: bold;
  font-size: 20px;
}

#title {
  color: white;
  font-weight: bolder;
  font-size: 60px;
  margin-bottom: 10px;
}

.album-artist a {
  color: white;
  font-weight: bold;
  font-size: 13px;
}

#albums-container {
  display: flex;
  flex-direction: row;
  padding: 10px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
}

.album-cover {
  height: 150px;
  width: 150px;
  padding: 10px;
}

#albums-title {
  color: white;
  margin-left: 20px;
}

@media screen and (max-width: 992px) {
  #title {
    font-size: 40px;
  }

  #basic-info-container span {
    font-size: 15px;
  }

  #background-image {
    height: 175px;
  }
}

#itunes-button {
  margin: 10px 0px 0px 20px;
}

.album-artist a {
  font-size: 13px;
}

@media screen and (max-width: 600px) {
  #title {
    font-size: 25px;
  }

  #background-image {
    height: 100px;
  }

  #basic-info-container span {
    font-size: 10px;
  }

  .album-artist a {
    font-size: 10px;
  }
}
</style>
