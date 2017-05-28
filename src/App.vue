<template>
  <div id="app">
    <router-view></router-view>
    <colorselect></colorselect>
    <objectslist></objectslist>

  </div>
</template>

<script>
import objectslist from './components/objectslist'
import colorselect from './components/colorselect'

export default {
  name: 'app',
  components: {objectslist, colorselect}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
