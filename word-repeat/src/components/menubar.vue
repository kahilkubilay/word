<template>

  <div id="menubar" class="fieldOptions">
    <ul>
      <li v-for="category in listWords" v-bind:key="category" v-on:click="getCategory(category); addActiveClass($event);
       "> {{ category }} </li>
    </ul>
  </div>

</template>

<script>

  export default {
    name: 'menubar',
    props: {
      msg: String,
    },
    data() {
      return {
        listWords: ['Technologies', 'Sport', 'Nature', 'Family', 'Time', 'Clothes', 'Part Of Body', 'Animals',
          'Jobs', 'Education', 'Universe'
        ],
        category: '',
      }
    },
    methods: {
      getCategory(categoryName) {
        
        this.$emit('getChangeCategories', categoryName.toLowerCase());
      },
      addActiveClass(event) {
        (((document.querySelector('.active') || {}).classList || {})).length || 0 > 0 ? 
          document.querySelector('.active').classList.remove('active') : false;
        event.target.className += ' active';
      },
    },
  }

</script>

<style scoped>

  /*left menu*/
  .fieldOptions {
    width: 10%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background-color: #cceabb;
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
  /*left menu*/

</style>
