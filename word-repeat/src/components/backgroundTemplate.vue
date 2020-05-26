<template>

    <div id="backgroundTemplate">
        <!-- <div class="box"  v-on:getChangeCategories="getTemplate">qweqweqweqweqwe</div> -->
        <slot></slot>
    </div>

</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            getTemplate(){
                console.log('loooooooooooooooooooooooggg');
            }
        }
    }
</script>

<style scoped>



</style>