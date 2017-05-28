<template>
  <div class="hello">
    <h1>Objects List</h1>
    <ul>
      <li v-for="item in objs">Point ({{item.x}}, {{item.y}})</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'objectslist',
  data () {
    return {
      objs: window.store.objs
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
