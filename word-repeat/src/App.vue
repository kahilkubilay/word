<template>
  <div id="app">
    <div class="welcome" v-show="welcomeContainer">
      <h2 class="msg">Word Speech</h2>

      <p class="countWord" v-bind="counterEffect()">{{ countWord }} </p>
      <p class="msg">Words</p>

      <button @click="gameArea()">Start</button>

      <div class="badge">

        <p class="badgeHeader">27 Badge</p>

        <ul>
          <li v-for="option in options"><img src="src/assets/basic.png" alt=""></li>
        </ul>
      </div>
    </div>

    <div id="mainContainer" v-show="!welcomeContainer">
      <div class="badgeProcess">
        <div class="badgeLevel">
          <img src="" alt="">
        </div>
      </div>

      <p class="word"> {{ word }} </p>

      <input type="text" v-model="answer">

      <p>{{ log }}</p>
    </div>

    <menubar v-show="!welcomeContainer" v-on:getChangeCategories="changeCategory"></menubar>

  </div>


</template>

<script>
  import menubar from './components/menubar';

  var wordsArray = ['apocalipse', 'kıyamet', 'rain', 'yağmur'];

  var wordList = {
    technologies: ['application', 'uygulama', 'audio', 'ses', 'cursor', 'imleç', 'database', 'veri tabanı'],
    sport: ['athletics', 'atletizm', 'athlet', 'atlet', 'badminton', 'badminton', 'baseball', 'beyzbol'],
    naturel: ['leaf', 'yaprak', 'grass', 'çim', 'tree', 'ağaç', 'branch', 'dal'],
    family: ['family', 'aile', 'father', 'baba', 'mother', 'anne', 'son', 'oğul'],
    time: ['monday', 'pazartesi', 'Tuesday', 'salı', 'Wednesday', 'Çarşamba', 'Friday', 'Cuma'],
    clothes: ['shirt', 'Gömlek', 'Pants', 'tie', 'kravat', 'cap', 'kep', 'vest', 'yelek'],
    partOfBody: ['eye', 'göz', 'knee', 'diz', 'back', 'sırt', 'blood', 'kan', 'bone', 'kemik'],
    animals: ['elephant', 'fil', 'bear', 'ayı', 'fox', 'tilki', 'wolf', 'kurt'],
    jobs: ['barber', 'berber', 'dentist', 'dişçi', 'doctor', 'doktor', 'farmer', 'çiftçi', 'engineer', 'mühendis'],
    education: ['collage', 'kolej', 'semester', 'yarıyıl', 'grades', 'notlar', 'recess', 'ara', 'attend', 'katılmak'],
    universe: ['planet', 'gezegen', 'space', 'uzay', 'earth', 'dünya', 'meteor', 'göktaşı', 'sky', 'gökyüzü', 'comet',
      'kuyruklu yıldız'
    ],
  }

  export default {
    name: 'app',
    components: {
      menubar,
    },
    data() {
      return {
        welcomeContainer: true,
        active: false,
        countWord: 0,
        options: ['option1', 'option2', 'option3', 'option4', 'option5', 'option6', 'option7', 'option8', 'option9'],
        badge: [],
        word: '',
        answer: '',
        wordCounter: 0,
        words: wordList.technologies,
        wordList: wordList,
        log: '',
        msg: '',
      }
    },
    methods: {
      counterEffect() {
        var vm = this;
        setTimeout(function () {
          vm.countWord < 2023230 ? vm.countWord++ : false;
        }, 100);
      },
      addClass(event) {
        event.target.className += ' active';
      },
      gameArea() {
        this.welcomeContainer = false;
        this.word = this.words[this.wordCounter];

        this.startGame();

      },
      startGame() {
        var vm = this;

        setInterval(function () {

          if (vm.answer === vm.words[vm.wordCounter + 1]) {
            vm.wordCounter += 2;

            vm.word = vm.words[vm.wordCounter];
            vm.answer = '';
            vm.log = 'dogru';
          }

        }, 100);
      },
      changeCategory(categoryName) {
        this.words = wordList[categoryName];
        this.word = this.words[0];
      }
    }
  }

</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@300&display=swap');

  * {
    margin: 0;
    padding: 0;
    font-family: 'Work Sans', sans-serif;
    color: #3a4750;
    list-style-type: none;
  }

  body {
    background-color: #fcf9f9;
  }

  #app {
    width: 100%;
  }

  /*welcome area*/
  .welcome {
    width: 100%;
    height: auto;
    margin-top: 10%;
    text-align: center;
  }

  .msg {
    font-size: 300%;
    text-decoration: underline;
    margin-bottom: 1%;
  }

  .countWord {
    font-weight: bold;
    font-size: 125%;
    left: 49%;
  }

  .countWord,
  .countWord span {
    position: absolute;
  }

  p.msg {
    margin-left: 5%;
    font-size: 125%;
    font-weight: bold;
    text-decoration: none;
  }

  button {
    border: none;
    padding: 15px 32px;
    text-align: center;
    display: inline-block;
    font-size: 125%;
    border-radius: 5px;
  }

  .badge {
    width: 100%;
    position: absolute;
    top: 60%;
    left: 0%;
    margin: auto auto;
  }

  .badge .badgeHeader {
    font-size: 150%;
    font-weight: bold;
  }

  .badge ul {
    margin-left: 30%;
  }

  .badge ul li {
    width: 75px;
    height: 75px;
    background-color: #aacfcf;
    border: 2px solid #679b9b;
    border-radius: 100px;
    float: left;
    margin: 1%;
  }

  .badge ul li img {
    margin-top: 15%;
    width: 50px;
  }

  /*welcome area*/

  /*main container */
  #mainContainer {
    width: 100%;
    height: auto;
    text-align: center;
    margin-top: 10%;
  }

  #mainContainer p {
    font-size: 125%;
    font-weight: bold;
    margin-bottom: 1.5%;
  }

  #mainContainer input {
    width: 13%;
    border: 2px solid #679b9b;
    border-radius: 15px;
    background-color: #aacfcf;
    font-weight: bold;
    font-size: 125%;
    padding: 0.5%;
    text-align: center;
    outline: none;
  }

  /*main container */

</style>
