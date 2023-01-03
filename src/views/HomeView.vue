<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <h1>Hola Mundo</h1>

    <button class="btn btn-primary" @click="goToDayBook()">primary</button>
    <button class="btn btn-success">primary</button>
  </div>
</template>
<script>
export default {
    methods : {
        goToDayBook(){
            this.$router.push({name: 'no-entry'})
        }
    }
}
</script>