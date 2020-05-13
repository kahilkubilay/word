<template>

  <div id="menubar" class="fieldOptions">
    <ul>
      <li v-for="(category, index) in listWords" v-on:click="getCategory(category)"> {{ category }} </li>
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
        deneme: '12',
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
  }

  .fieldOptions ul {
    height: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
    background-color: #f1f1f1;
    overflow: hidden;
    border-right: 1px solid green;
  }

  .fieldOptions ul li {
    list-style-type: none;
    margin: 0;
    padding: 4% 8%;
    background-color: #f1f1f1;
    overflow: hidden;
    cursor: pointer;
  }

  .active {
    background-color: #4CAF50;
    color: white;
  }

  .fieldOptions ul li:hover {
    background-color: yellow;
  }

  /*left menu*/

</style>
