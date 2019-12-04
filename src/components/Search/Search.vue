<template>
  <div>
    <h1>Results for {{ this.searchTag }}</h1>

    <div v-if="results.artists.length !== 0">
      <h1>Artists</h1>
      <div id="artist-container">
        <artist-preview
          v-bind:key="'item' + i"
          v-for="(item, i) in results.artists"
          v-bind:artistData="item"
        />
      </div>
    </div>

    <div v-if="results.albums.length !== 0">
      <h1>Albums</h1>
      <div id="albums-container">
        <album-preview
          v-bind:key="'item' + i"
          v-for="(item, i) in results.albums"
          v-bind:albumData="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/script/api";
import ArtistPreview from "../Artist/ArtistPreview";
import AlbumPreview from "../Album/AlbumPreview";

export default {
  name: "Search",
  components: { ArtistPreview, AlbumPreview },
  methods: {
    setSearchTag() {
      this.searchTag = this.$route.params.tag;
    },
    sortResults(data) {
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
      console.log("Tamere");
      for (const artist of this.results.artists) {
        console.log(artist.artistName);
        const response = await api.getArtistinfo(artist.artistName);
        if (Object.hasOwnProperty.call(response[0], "artworkUrl100")) {
            artist.artworkUrl100 = response[0].artworkUrl100;
            console.log(artist)
        }
        else
            console.log("Could not retrieve artist image");
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
    }
  },
  data: () => ({
    searchTag: "",
    results: { tracks: [], albums: [], artists: [], people: [] }
  }),
  mounted() {
    this.setSearchTag();
    this.search();
  }
};
</script>

<style scoped></style>
