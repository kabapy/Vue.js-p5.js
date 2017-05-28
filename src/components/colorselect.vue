<template>
  <div class="hello">
    <div class="colorPick red" @click="colorClicked('red')">
    </div>
    <div class="colorPick blue" @click="colorClicked('blue')">
    </div>
    <div class="colorPick green" @click="colorClicked('green')">
    </div>

  </div>
</template>

<script>
export default {
  name: 'colorselect',
  data () {
    return {
      objs: window.store.objs
    }
  },
  methods:{
    colorClicked: function(color){
      window.store.brushColor = color;
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.colorPick{
  width:50px;
  height: 50px;
  display: inline-block;
}
.red{
  background-color: red;
}
.blue{
  background-color: blue;
}
.green{
  background-color: green;
}
</style>
