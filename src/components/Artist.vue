<template>
  <div>
    <div id="container">
      <img
        id="background-image"
        src="https://www.thenational.ae/image/policy:1.905572:1567597685/ac03-SEP-music-rhcp02.jpg?f=16x9&w=1200&$p$f$w=a6bfc83x"
      />
      <div id="centered">
        <h1 id="title">Red Hot Chili Peppers</h1>
        <span>Rock, Funk Rock</span>
      </div>
      <a
        id="itunes-button"
        href="https://geo.music.apple.com/us/artist/red-hot-chili-peppers/889780?mt=1&app=music&ls=1"
        style="display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/en-us/lockup.svg?kind=artist&bubble=apple_music&style=standard-white) no-repeat;width:140px;height:30px;"
      ></a>
    </div>

    <div>
      <h1 id="albums-title">Albums</h1>
      <div id="albums-container">
        <div class="album-artist">
          <img
            class="album-cover"
            src="https://images-na.ssl-images-amazon.com/images/I/81TnWHafWdL._SL1448_.jpg"
          />
          <a>Californication</a>
        </div>

        <div class="album-artist">
          <img
            class="album-cover"
            src="https://upload.wikimedia.org/wikipedia/en/2/23/Rhcp9.jpg"
          />
          <a>By The Way</a>
        </div>

        <div class="album-artist">
          <img
            class="album-cover"
            src="https://images-na.ssl-images-amazon.com/images/I/81hS2wgxbhL._SY355_PJautoripBadge,BottomRight,4,-40_OU11__.jpg"
          />
          <a>Blood Sugar Sex Magik</a>
        </div>

        <div class="album-artist">
          <img
            class="album-cover"
            src="https://images-na.ssl-images-amazon.com/images/I/81lOFvmn6tL._SL1500_.jpg"
          />
          <a>Stadium Arcadium</a>
        </div>

        <div class="album-artist">
          <img
            class="album-cover"
            src="https://images-na.ssl-images-amazon.com/images/I/81CGfXRJkUL._SL1500_.jpg"
          />
          <a>The Getaway</a>
        </div>

        <div class="album-artist">
          <img
            class="album-cover"
            src="https://m.media-amazon.com/images/I/81pAOO4ouyL._SS500_.jpg"
          />
          <a>One Hot Minute</a>
        </div>

        <div class="album-artist">
          <img
            class="album-cover"
            src="https://images-na.ssl-images-amazon.com/images/I/91OMG4YkWML._SY355_.jpg"
          />
          <a>The Uplift Mofo Party Plan</a>
        </div>

        <div class="album-artist">
          <img
            class="album-cover"
            src="https://upload.wikimedia.org/wikipedia/en/9/98/Mother%27sMilkAlbumcover.jpg"
          />
          <a>Mother's Milk</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#background-image {
  width: 100%;
  height: 250px;
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

body {
  height: 100%;
  margin: 0px;
  padding: 0px;
  background-color: #1b1b1b;
}

#container {
  position: relative;
  color: white;
  justify-content: center;
  align-items: center;
}

#centered {
  background-color: transparent;
  position: absolute;
  top: 10%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-left: 10px;
}

#centered span {
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

.album-artist {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
}

.album-artist a {
  color: white;
  font-weight: bold;
  font-size: 13px;
}

#albums-container {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  padding: 10px;
  flex-wrap: wrap;
  justify-content: space-evenly;
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

  #centered span {
    font-size: 15px;
  }

  #background-image {
    height: 175px;
  }

  .album-cover {
    height: 100px;
    width: 100px;
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
    font-size: 20px;
  }

  #background-image {
    height: 100px;
  }

 #centered span {
    font-size: 10px;
  }

  .album-cover {
    height: 75px;
    width: 75px;
  }

  .album-artist a {
    font-size: 10px;
  }
}
</style>
