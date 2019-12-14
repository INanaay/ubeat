<template>
  <div>
    <h1>Results for {{ this.searchTag }}</h1>

    <div v-if="results.artists.length !== 0">
      <h1>Artists</h1>
      <div class="container">
        <artist-preview
          v-bind:key="'item' + i"
          v-for="(item, i) in results.artists"
          v-bind:artistData="item"
        />
      </div>
    </div>

    <div v-if="results.albums.length !== 0">
      <h1>Albums</h1>
      <div class="container">
        <album-preview
          v-bind:key="'item' + i"
          v-for="(item, i) in results.albums"
          v-bind:albumData="item"
        />
      </div>
    </div>

    <div v-if="results.tracks.length !== 0">
      <h1>Musics</h1>
      <div class="container">
        <SearchMusicItem
          v-bind:key="'item' + i"
          v-for="(item, i) in results.tracks"
          v-bind:musicData="item"
        />
      </div>
    </div>

    <div v-if="results.tracks.length !== 0">
      <h1>User</h1>
      <div class="container">
        <SearchUserItem
          v-bind:key="'item' + i"
          v-for="(item, i) in results.people"
          v-bind:peopleData="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/script/api";
import ArtistPreview from "../Artist/ArtistPreview";
import AlbumPreview from "../Album/AlbumPreview";
import SearchMusicItem from "./SearchMusicItem";
import SearchUserItem from "./SearchUserItem";

export default {
  name: "Search",
  components: { ArtistPreview, AlbumPreview, SearchMusicItem, SearchUserItem },
  methods: {
    setSearchTag() {
      this.searchTag = this.$route.params.tag;
    },
    sortResults(data) {
      // eslint-disable-next-line no-unused-vars
      for (const result of data) {
        const type = result.wrapperType;
        switch (type) {
          case "track":
            this.results.tracks.push(result);
            break;
          case "collection":
            this.results.albums.push(result);
            break;
          case "artist":
            this.results.artists.push(result);
            break;
          default:
            console.log("Unkown type");
        }
      }
    },

    async getMoreArtistsInfo() {
      // eslint-disable-next-line no-unused-vars
      for (const artist in this.results.artists) {
        const response = await api.getArtistinfo(
          this.results.artists[artist].artistName
        );
        if (Object.hasOwnProperty.call(response[0], "artworkUrl100")) {
          this.$set(
            this.results.artists[artist],
            "artworkUrl100",
            response[0].artworkUrl100
          );
        } else console.log("Could not retrieve artist image");
      }
    },
    async search() {
      const response = await api.getSearchResults(this.searchTag);
      if (!response || response.status !== 200) {
        alert("Error retrieving querry");
      } else {
        this.sortResults(response.data.results);
        this.getMoreArtistsInfo();
      }
      const userResponse = await api.getSearchUser(this.searchTag);
      if (!userResponse || userResponse.status !== 200) {
        alert("Error retrieving querry");
      } else {
        this.results.people = userResponse.data;
      }
    }
  },
  data: () => ({
    searchTag: "",
    results: { tracks: [], albums: [], artists: [], people: [] }
  }),
  watch: {
    // eslint-disable-next-line no-unused-vars
    "$route.params.tag"(newTag, _) {
      this.searchTag = newTag;
      this.results = { tracks: [], albums: [], artists: [], people: [] };
      this.search();
    }
  },
  created() {
    this.setSearchTag();
    this.search();
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  padding: 10px;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
