<template>
  <div id="home">
    <h1>Home</h1>
    <div id="recently-played">
      <div class="title">
        <h2 class="">Recently played <img id="right-arrow" src="../assets/next-page.png"><img id="left-arrow" src="../assets/next-page.png"></h2>
      </div>
      <div class="item">
        <ul>
          <li><img class="artiste" src="https://lecanalauditif.ca/wp-content/uploads/2018/01/rhcp1000-588x588.jpg">
          <span class="caption">Red Hot Chili Peppers</span></li>
          <li><img class="artiste" src="https://pbs.twimg.com/profile_images/1138464643695796224/S2yyxQ4r_400x400.png">
          <span class="caption">Sum 41</span></li>
          <li><img class="album" src="https://e.snmc.io/i/300/w/f1d8054c94d3380d11a32c10614d74f5/1779160">
          <span class="caption">Demons Days<br>2005</span></li>
          <li><img class="artiste" src="https://nightlife.ca/wp-content/uploads/2018/09/gorillaz-sera-de-passage-montreal-le-mois-prochain-529929.jpg">
          <span class="caption">Gorillaz</span></li>
        </ul>
      </div>
    </div>
    <div id="recommendation">
      <div class="title">
        <h2>Our recommendation<img id="right-arrow" src="../assets/next-page.png"><img id="left-arrow" src="../assets/next-page.png"></h2>
      </div>
      <div class="item">
        <ul>
          <li><img class="artiste" src="https://hardforce.com/img/uploads/Artists/2015/02/HardForce-40_inset_300x300.jpg">
            <span class="caption">AC/DC</span></li>
          <li><img class="artiste" src="http://www.albumrock.net/dyn_img/groupes/124.jpg">
            <span class="caption">System Of A Down</span></li>
          <li><img class="artiste" src="https://lh3.googleusercontent.com/MqFTrDu66Os_lNDXr_s0U66mXqD-MKv9S88NYy_-QSVbYiWSrOd2FbVHbJkIjjbJAs_7tLJ8f8hiut_YQbtpptOY">
            <span class="caption">Cage The Elephant</span></li>
          <li><img class="album" src="https://www.thebackpackerz.com/wp-content/uploads/2017/04/gorillaz-humanz-cover.jpg">
            <span class="caption">Humanz</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
body {
  padding: 0;
  margin: 0;
}

#home h1 {
  padding-top: 20px;
  padding-left: 10px;
}

#home {
  background-color: #1B1B1B;
  color: white;
  font-family: 'Poppins', sans-serif;
}

.title {
  padding-left: 10px;
}

.title:after {
  content: ' ';
  display: block;
  width: 50%;
  border: 2px solid white;
  opacity: 0.5;
  border-radius: 20%;
}

.item ul {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.title img {
  width: 20px;
  align-content: middle;
  padding-left: 10px;
  padding-right: 10px;
  float: right;
  opacity: 0.3;
  cursor: pointer;
}

#left-arrow:hover {
  opacity: 1;
}

#right-arrow:hover {
  opacity: 1;
}

#left-arrow {
  transform: rotate(180deg);
}

.item li {
  vertical-align: top;
  display: inline-block;
  text-align: center;
  padding-top: 10px;
  width: 220px;
  cursor: pointer;
}
.item img {
  width: 200px;
  height: 200px;
}

.item .artiste {
  border-radius: 50%;
}

.caption {
  padding-top: 5px;
  font-weight: 550;
  display: block;
}

.caption:hover, .caption:hover span{
  opacity: 0.5;
}

#selected-song h2 {
  padding-left: 10px;
}

@media screen and (max-width: 992px) {
  .item ul {
    display: inline-block;
  }

  .item img {
    width: 150px;
    height: 150px;
  }

  .item span {
    font-size: 15px;
  }
}

@media screen and (max-width: 600px) {
  .item ul {
    display: inline-block;
  }

  .item img {
    width: 100px;
    height: 100px;
  }

  .title {
    font-size: 10px;
  }
}
</style>
