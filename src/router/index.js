import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Album from "@/components/Album";
import AlbumOverview from "@/components//Album/AlbumOverview";
import Artist from "@/components/Artist/ArtistHome";
import ArtistDetail from "../components/Artist/ArtistDetail";
import Playlist from '@/components/Playlist';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/artist",
      name: "Artist",
      component: Artist
    },
    {
      path: "/artist/:id",
      name: "ArtistDetails",
      component: ArtistDetail
    },
    {
      path: "/albumOverview",
      name: "AlbumOverview",
      component: AlbumOverview
    },
    {
      path: "/album/:id",
      name: "Album",
      component: Album
    }, {
      path: '/playlist',
      name: 'Playlist',
      component: Playlist
    }
  ]
});
