<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->

    <!-- ###### SideBar ##### -->
    <!-- <navBar></navBar> -->

    <narBar2></narBar2>

    <!-- ###### Main Show ##### -->
    <router-view/>


  </div>
</template>

<script>

  // import navBar from '@/components/navBar.vue'
  import narBar2 from '@/components/navBar2.vue'

  export default {
    name: "app",
    components: {
      // navBar,
      narBar2
    }
  }
</script>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@500&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@500&display=swap');

  @media screen and (min-width:400px) {
    .page-content {
      width: calc(100% - 3rem);
      margin-right: 10rem;
      /* margin-left: 5rem; */
      transition: all 0.4s;
    }

    .page-content-padding {
      padding-left : 3rem !important;
    }
  }

  @media screen and (min-width:800px) {
    .page-content {
      width: calc(100% - 5rem);
      margin-right: 10rem;
      /* margin-left: 5rem; */
      transition: all 0.4s;
    }

    .page-content-padding {
      padding-left : 5rem !important;
    }
  }

  .separator {
    margin: 3rem 0;
    border-bottom: 1px dashed rgb(0, 0, 0);
  }

  .font-kanit{
    font-family: 'Kanit', sans-serif;
  }

  .font-sarabun{
    font-family: 'Sarabun', sans-serif;
  }

  .color-success{
    color: green;
  }

  .color-incoming{
    color: red;
  }

  .tag-color-anime{
    color: #23FFD4;
  }

  .tag-color-manga{
    color: #4679FF;
  }

  .tag-color-liveaction{
    color: #EFF210;
  }

  .tag-color-manhua{
    color: #F210D3;
  }
</style>
