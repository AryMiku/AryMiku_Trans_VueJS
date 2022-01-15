<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->

    <!-- ###### SideBar ##### -->
    <navBar></navBar>

    <!-- ###### Main Show ##### -->
    <router-view/>


  </div>
</template>

<script>

  import navBar from '@/components/navBar.vue'

  export default {
    name: "app",
    components: {
      navBar
    }
  }
</script>

<style>
.page-content {
  width: calc(100% - 10rem);
  margin-right: 10rem;
  transition: all 0.4s;
}

.page-content-padding {
  padding-left : 15rem !important;
}

.separator {
    margin: 3rem 0;
    border-bottom: 1px dashed rgb(0, 0, 0);
  }
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
