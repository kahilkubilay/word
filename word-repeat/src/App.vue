<template>
  <div id="app">
    <div class="welcome" v-show="welcomeContainer">
      <h2 class="msg">Word Speech</h2>

      <p class="countWord msg" v-bind="counterEffect()">
        <span>{{ wordsCapsule.countWord }}</span>
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

      <div class="oval-progress">
        <svg class="progress-circle" width="200px" height="200px">
          <circle class="progress-circle-back" cx="80" cy="80" r="40"></circle>
          <circle class="progress-circle-prog" cx="80" cy="80" r="40"></circle>
        </svg>
        <div class="progress-img">
          <img src="../src/assets/iconPackage/colored/drums-colored.png" alt="">
        </div>
      </div>

      <p class="word"> {{ wordsCapsule.word }} </p>

      <input type="text" v-model="wordsCapsule.answer">
    </div>

    <menubar v-if="!welcomeContainer" v-on:getChangeCategories="changeCategory"></menubar>

  </div>

</template>

<script>

  /*Burası request api ile birlestirilecek alan */

  var wordsArray = ['apocalipse', 'kıyamet', 'rain', 'yağmur'];

  var wordList = {
    technologies: ['application', 'uygulama', 'audio', 'ses', 'cursor', 'imleç', 'database', 'veri tabanı', 'engine',
      'motor' ,'electronic', 'elektronik', 'file', 'dosya', 'firewall', 'güvenlik duvarı', 'hardware', 'donanım', 
      'software', 'yazılım', 'keyboard', 'klavye', 'monitor', 'ekran', 'network', 'ağ', 'interface', 'arayüz', 
      'printer', 'yazıcı', 'visual', 'görsel', 'browser', 'tarayıcı', 'machine', 'makine', 'radio', 'radyo', 
      'key', 'anahtar', 'resize', 'yeniden boyutlandırma', 'calculator', 'hesap makinesi', 'data', 'veri', 
      'bookmark', 'yer işareti', 'connection', 'bağlantı'],
    sport: ['athletics', 'atletizm', 'athlet', 'atlet', 'badminton', 'badminton', 'baseball', 'beyzbol', 'billiards',
      'bilardo', 'boxing', 'boks', 'canoeing', 'kano', 'diving', 'dalış', 'football', 'futbol', '', '', '', '', '', ''],
    nature: ['leaf', 'yaprak', 'grass', 'çim', 'tree', 'ağaç', 'branch', 'dal'],
    family: ['family', 'aile', 'father', 'baba', 'mother', 'anne', 'son', 'oğul'],
    time: ['monday', 'pazartesi', 'Tuesday', 'salı', 'Wednesday', 'Çarşamba', 'Friday', 'Cuma'],
    clothes: ['shirt', 'Gömlek', 'Pants', 'tie', 'kravat', 'cap', 'kep', 'vest', 'yelek'],
    body: ['eye', 'göz', 'knee', 'diz', 'back', 'sırt', 'blood', 'kan', 'bone', 'kemik'],
    animals: ['elephant', 'fil', 'bear', 'ayı', 'fox', 'tilki', 'wolf', 'kurt'],
    jobs: ['barber', 'berber', 'dentist', 'dişçi', 'doctor', 'doktor', 'farmer', 'çiftçi', 'engineer', 'mühendis'],
    education: ['collage', 'kolej', 'semester', 'yarıyıl', 'grades', 'notlar', 'recess', 'ara', 'attend', 'katılmak'],
    universe: ['planet', 'gezegen', 'space', 'uzay', 'earth', 'dünya', 'meteor', 'göktaşı', 'sky', 'gökyüzü', 'comet',
      'kuyruklu yıldız'
    ],
  }

  /*Burası request api ile birlestirilecek alan */

  export default {
    name: 'app',
    data() {
      return {
        welcomeContainer: true,
        badge: ['analyze', 'apple', 'billpaid', 'cube', 'diving', 'drums', 'education', 'spaceship',
          'statsincrease', 'tamburine'],
        wordsCapsule: {
          word: '',
          answer: '',
          countWord: 0,
          wordCounter: 0,
          words: wordList.technologies,
          wordList: wordList,
        },
        logs: {
          log: '',
          msg: '',
        }
      }
    },
    methods: {
      counterEffect() {
        var totalWord = this.getLengthOfWords();
        var vm = this;

        setTimeout(function () {
          vm.wordsCapsule.countWord < totalWord ? vm.wordsCapsule.countWord++ : false;
        }, 100);
      },
      gameArea() {
        this.welcomeContainer = false;
        this.wordsCapsule.word = this.wordsCapsule.words[this.wordsCapsule.wordCounter];

        this.startGame();
      },
      startGame() {
        var vm = this;

        setInterval(function () {

          if (vm.wordsCapsule.answer === vm.wordsCapsule.words[vm.wordsCapsule.wordCounter + 1]) {
            vm.wordsCapsule.wordCounter += 2;

            vm.wordsCapsule.word = vm.wordsCapsule.words[vm.wordsCapsule.wordCounter];
            vm.wordsCapsule.answer = '';
            vm.logs.log = 'dogru';
            vm.progressBar(vm.wordsCapsule.wordCounter, 100);
          }

        }, 500);
      },
      changeCategory(categoryName) {
        this.wordsCapsule.words = this.wordsCapsule.wordList[categoryName];
        this.wordsCapsule.word = this.wordsCapsule.words[0];
      },
      getImagePath(iconPath) {
        return ('../src/assets/iconPackage/colored/' + iconPath + '-colored.png');
      },
      getLengthOfWords() {
        var toArrayWordList = Object.values(wordList);
        var wordLength = 0;

        toArrayWordList.forEach(function (wordListCategory) {
          wordListCategory.forEach(function () {
            wordLength++;
          });
        });

        return wordLength;
      },
      progressBar(progressVal, totalPercentageVal) {
        var strokeVal = (2 * totalPercentageVal) / totalPercentageVal;
        var circleProgress = document.querySelector('.progress-circle-prog');
        circleProgress.style.strokeDasharray = (progressVal*2) * (strokeVal) + ' 999';
      },
    }
  }

</script>
