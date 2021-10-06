<template>
    <div>
<h1> Sugar Anniversery Sale </h1>
<h4 v-bind:style="object1"> Sale is live!!About 50% offer on all products </h4>
<img src="../assets/sugar.jpg"><br>
<button @click="$router.push({name: 'home'})"> goto home </button>

    </div>
</template>
<script>
export default {
  name: 'App',
  data()
  {
    return{
       object1: {
        backgroundColor: 'black',
        border: '1px solid green',
        padding: '30px'
       }
    }
  }
}
</script>


<style>
img{
  height:300px;
  width:300px;
}


</style>