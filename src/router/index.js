import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Album from "@/components/Album/Album";
import AlbumOverview from "@/components//Album/AlbumOverview";
import Artist from "@/components/Artist/ArtistHome";
import ArtistDetail from "../components/Artist/ArtistDetail";
import Playlist from "@/components/Playlist";
import Search from "../components/Search/Search";
import Login from "@/components/Login";
import Register from "../components/Register";
import User from "@/components/User";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/artist",
      name: "Artist",
      component: Artist,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/artist/:id",
      name: "ArtistDetails",
      component: ArtistDetail,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/albumOverview",
      name: "AlbumOverview",
      component: AlbumOverview,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/album/:id",
      name: "Album",
      component: Album,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/playlist",
      name: "Playlist",
      component: Playlist,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/user/:id",
      name: "User",
      component: User,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/search/:tag",
      name: "Search",
      component: Search,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    }
  ]
});
