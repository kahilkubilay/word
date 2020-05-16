<template>
  <div id="app">
    <div class="welcome" v-show="welcomeContainer">
      <h2 class="msg">Word Speech</h2>

      <p class="countWord msg" v-bind="counterEffect()">
        <span>{{ countWord }}</span>
        <span>Words</span>
      </p>

      <button @click="gameArea()">Start</button>

      <div class="badge">

        <p class="badgeHeader">10 Badge</p>

        <ul>
          <li v-for="badgeIcon in badge" v-bind:key="badgeIcon">
            <img :src="getImagePath(badgeIcon)" :alt="badgeIcon + ' icon'">
          </li>
        </ul>
      </div>
    </div>

    <div id="mainContainer" v-show="!welcomeContainer">
      <div class="badgeProcess">
        <div class="badgeLevel">
          <img src="" alt="">
        </div>
      </div>

      <div class="circle-wrap">
        <div class="circle">

          <div class="mask full">
            <div class="fill"></div>
          </div>

          <div class="mask half">
            <div class="fill"></div>
          </div>

          <div class="inside-circle">
            <img src="../src/assets/iconPackage/colored/drums-colored.png" alt="">
          </div>

        </div>
      </div>

      <!---->


      <p class="word"> {{ word }} </p>

      <input type="text" v-model="answer">

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
        welcomeContainer: false,
        active: false,
        countWord: 0,
        options: ['option1', 'option2', 'option3', 'option4', 'option5', 'option6', 'option7', 'option8', 'option9'],
        badge: ['analyze', 'apple', 'billpaid', 'cube', 'diving', 'drums', 'education', 'spaceship',
          'statsincrease', 'tamburine'
        ],
        word: '',
        answer: '',
        wordCounter: 0,
        words: wordList.technologies,
        wordList: wordList,
        log: '',
        msg: '',
        lengthOfWords: 0,
      }
    },
    methods: {
      counterEffect() {
        var totalWord = this.getLengthOfWords();
        var vm = this;

        setTimeout(function () {
          vm.countWord < totalWord ? vm.countWord++ : false;
        }, 100);
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

            // document.querySelector(){

            // }



            vm.word = vm.words[vm.wordCounter];
            vm.answer = '';
            vm.log = 'dogru';
          }

        }, 100);
      },
      changeCategory(categoryName) {
        this.words = wordList[categoryName];
        this.word = this.words[0];
      },
      getImagePath(iconPath) {
        return ('../src/assets/iconPackage/colored/' + iconPath + '-colored.png');
      },
      getLengthOfWords() {
        var toArrayWordList = Object.values(wordList);
        var countWord = 0;

        toArrayWordList.forEach(function (wordListCategory) {
          wordListCategory.forEach(function () {
            countWord++;
          });
        });

        return countWord;

      },
    }
  }

</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Niramit&display=swap');

  * {
    margin: 0;
    padding: 0;
    font-family: 'Niramit', sans-serif;
    color: #00005c;
    list-style-type: none;
  }

  html body {
    background-color: #ecfeff;
  }

  #app {
    width: 100%;
  }

  /*welcome area*/
  .welcome {
    width: 100%;
    height: auto;
    margin-top: 7%;
    text-align: center;
  }

  .msg {
    width: 45%;
    margin: auto;
    font-size: 300%;
    display: block;
    text-decoration: none;
    margin-bottom: 1%;
  }

  .countWord {
    font-weight: bold;
    font-size: 200%;
    left: 49%;
    width: 20%;
  }

  button {
    padding: 15px 50px;
    text-align: center;
    font-size: 175%;
    font-weight: bold;
    border: none;
    background-color: #d9bf77;
    border-radius: 5px;
    margin: 3% auto;
    cursor: pointer;
  }

  button:active {
    border: 2px solid #2b580c;
  }

  /*badge area*/
  .badge {
    width: 100%;
    margin: 4% auto;
  }

  .badge .badgeHeader {
    font-size: 200%;
    font-weight: bold;
  }

  .badge ul {
    width: 50%;
    display: flex;
    flex-flow: row wrap;
    margin: 1% auto;
  }

  .badge ul li {
    width: 75px;
    height: 75px;
    padding: 0.3%;
    ;
    margin: 1% 1%;
    background-color: #d8ebb5;
    border-radius: 50%;
  }

  .badge ul li img {
    margin-top: 15%;
    width: 50px;
  }

  /*badge area*/

  /*welcome area*/

  /*main container */
  #mainContainer {
    width: 100%;
    height: auto;
    text-align: center;
    margin-top: 10%;
  }

  #mainContainer p {
    font-size: 150%;
    font-weight: bold;
    margin-bottom: 1%;
  }

  #mainContainer input {
    width: 13%;
    border: 2px solid #679b9b;
    border-radius: 15px;
    font-weight: bold;
    font-size: 125%;
    padding: 0.5%;
    text-align: center;
    outline: none;
  }

  /*circle-wrap */
  .circle-wrap {
    margin: 50px auto;
    width: 150px;
    height: 150px;
    background: #e6e2e7;
    border-radius: 50%;
  }

  .circle-wrap .circle .mask,
  .circle-wrap .circle .fill {
    width: 150px;
    height: 150px;
    position: absolute;
    border-radius: 50%;
  }

  .circle-wrap .circle .mask {
    clip: rect(0px, 150px, 150px, 75px);
  }

  .circle-wrap .circle .mask .fill {
    clip: rect(0px, 75px, 150px, 0px);
    background-color: #639a67;
  }

  .circle-wrap .circle .mask.full,
  .circle-wrap .circle .fill {
    animation: fill ease-in-out 3s;
    transform: rotate(130deg);
  }

  /* @keyframes fill {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(0deg);
    }
  } */

  .circle-wrap .inside-circle {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    background-color: #cceabb;
    line-height: 130px;
    text-align: center;
    margin-top: 10px;
    margin-left: 10px;
    position: absolute;
    z-index: 100;
    font-weight: 700;
    font-size: 2em;
  }

  .circle-wrap .inside-circle img {
    width: 50%;
    margin-top: 23%;
  }


  /*circle-wrap */

  /*main container */

</style>
