<template>
  <div id="app">
    <router-view/>
    <div>
    	<buttomnav></buttomnav>
    </div>
  </div>
</template>

<script>
import buttomnav from './components/buttomnav'
export default {
  name: 'App',
  components:{
  	buttomnav
  }
}
</script>

<style>
</style>
