<template>
  <div class="Home">
    <div class="page-content page-content-padding" id="content">
      <h2 class="display-4 mb-4">AryMiku</h2>

      <div class="form-group has-search">
        <span class="fa fa-search form-control-feedback"></span>
        <input type="text" class="form-control" placeholder="Search" v-model="searchText">
      </div>

      <div class="separator"></div>

      <div class="row">
        <div class="col-lg-4 col-sm-6 mb-4" v-for="(item,index) in listFilter" :key="index">
          <div class="card">
            <div class="card-header font-kanit">
              <i v-bind:class="[getTagColor(item.Category)]" class="fa fa-tag"></i>
              <router-link v-bind:to="'/dowload/'+item.Id" class="link-hover"> {{item.Name}} </router-link>
              <span v-bind:class="[item.Suscess ? 'badge bg-success' : 'badge bg-danger']">
                {{item.Suscess ? 'Complete' : 'Incoming'}}
              </span>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-3">
                  <b-img-lazy :src="item.Img" class="pop img-fluid" alt=""></b-img-lazy>
                </div>
                <div class="col-9 font-kanit">
                  <p class="card-text">จำนวนตอน : {{item.Episode}}</p>
                  <p class="card-text">รูปแบบ : {{item.Category}}</p>
                  <p v-bind:class="[item.Suscess ? 'color-success' : 'color-incoming']" class="card-text">สถานะ : จบแล้ว</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  name: "Home",
  async mounted(){
    document.title = 'AryMiku VueJS'
    Swal.fire({
      title: 'กำลังโหลดจ้า...',
      showConfirmButton: false,
      allowOutsideClick: false,
    });
    Swal.showLoading();
    let response = await axios.get("https://raw.githubusercontent.com/AryMiku/API_AryMiku/master/AryMiku_List/AryMiku_List.json");
    this.listCardData = response.data;
    Swal.close();
  },
  data(){
    return {
      listCardData : [],
      searchText : ''
    }
  },
  methods:{
    getTagColor(Category){
      let classselect = '';
        switch(Category){
            case "Anime" :
                classselect = 'tag-color-anime'
                break;
            case "Manga" :
                classselect = 'tag-color-manga'
                break;
            case "Live Action" :
                classselect = 'tag-color-liveaction'
                break;
            case "Manhua" :
                classselect = 'tag-color-manhua'
                break;
        }
        return classselect;
    }
  },
  components: {
  },
  computed:{
    listFilter (){
      let text = this.searchText.trim()
      return this.listCardData.filter(item =>{
        return item.Name.indexOf(text) > -1 || item.Category.indexOf(text) > -1
      })
    }
  }
};
</script>

<style>
  .swal2-title {
    font-family: 'Kanit', sans-serif;
  }
  .link-hover {
    color: black;
    text-decoration: none;
  }
  .link-hover:hover {
    color: blueviolet;
    text-decoration: underline;
  }
</style>