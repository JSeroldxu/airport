<template>
  <div class="Person">
    <Floor/>
    <Scenery/>
  </div>
</template>
<script>
  import Floor from './pages/Floor'
  import Scenery from './pages/Scenery'
  export default {
    components:{
      Floor,Scenery
    },
   data () {
      return {

      }
    },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin: 0;
  bottom: 0;
}
.Person{
  position: relative;
  width: 100%;
  height: 100%;
  margin:0;
  padding:0;
  background:#002558;
  overflow: hidden;
}

</style>
