<template>
  <div class="shadowContainer">
    
    <div id="menubar" class="fieldOptions">
      <ul>
        <li v-for="category in listWords" v-bind:key="category" v-on:click="getCategory(category, $event)"> 
          {{ category }} 
        </li>
      </ul>
    </div>

    <!-- free template -->
    <div class="backgroundTemplate">
      <img v-for="image in 3" :src="'../../src/assets/' + category + '/background-' + image +'.png'" alt="">
    </div>
    <!-- free template -->

  </div>
</template>

<script>
  export default {
    name: 'menubar',
    data() {
      return {
        listWords: ['Technologies', 'Sport', 'Nature', 'Family', 'Time', 'Clothes', 'Body', 'Animals',
          'Jobs', 'Education', 'Universe', 'Life'
        ],
        category: null
      }
    },
    methods: {
      getCategory(categoryName, event) {
        (((document.querySelector('.active') || {}).classList || {})).length || 0 > 0 ? document
          .querySelector('.active').classList.remove('active') : false;
        
        event.target.className += ' active';
        this.category = categoryName.toLowerCase();
        this.$emit('getChangeCategories', categoryName.toLowerCase());
      },
    }
  }
</script>

<style scoped>
  .shadowContainer {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
  }

  .fieldOptions {
    width: 10%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background-color: #cceabb;
    z-index: 1;
  }

  .fieldOptions ul {
    height: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    border-right: 1px solid #00005c;
  }

  .fieldOptions ul li {
    list-style-type: none;
    margin: 0;
    padding: 4% 8%;
    font-size: 115%;
    overflow: hidden;
    cursor: pointer;
  }

  .active {
    background-color: #639a67;
    color: white;
  }

  .fieldOptions ul li:hover {
    color: white;
    background-color: #639a67;
  }

  .backgroundTemplate {
    width: 100%;
    height: 100%;
  }

  .backgroundTemplate img{
    
    position: absolute;
  }

  .backgroundTemplate img:nth-child(1) {
    right: 0;
  }

  .backgroundTemplate img:nth-child(2) {
    right: 0;
    bottom: 0;
    z-index: 1;
  }

  .backgroundTemplate img:nth-child(3) {
    bottom: 0;
    left: 10%;
  }

</style>
