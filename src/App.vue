<template>
  <div id="app">
      <!-- <Home /> -->
      <router-view></router-view>
  </div>
</template>


<script>

export default {
  components: {
  },
  created() {
    //从数据库获取数据然后传给Vuex
    this.$http.get('http://127.0.0.1:3000').then(ret => console.log(ret))
  }
}
</script>

<style lang="scss">
</style>
