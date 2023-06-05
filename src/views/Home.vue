<template>
  <div class="Home">
    <div class="page-content page-content-padding" id="content">
      <!-- <div class="display-4 mb-4 mt-4 mx-5">
        <img src="https://media.tenor.com/Bsc24Fia060AAAAC/anime-banner.gif" 
          style="width: 80%;height:200px" class="center-block"
        alt="">
      </div> -->

      <div class="row pt-5">
        <div class="form-group has-search col-12">
          <span class="fa fa-search form-control-feedback"></span>
          <input type="text" class="form-control" placeholder="Search" v-model="searchText">
        </div>
      </div>

      <div>
          <b-collapse id="collapse-1" class="mt-2">
            <b-card>
              Group
              <select class="form-control form-control-sm" @change="groupbytype(sortType)" v-model="sortType">
                <option value="">All</option>
                <option value="Anime">Anime</option>
                <option value="Manga">Manga</option>
              </select>
            </b-card>
          </b-collapse>
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
                  <p v-bind:class="[item.Suscess ? 'color-success' : 'color-incoming']" class="card-text">สถานะ : {{item.Success ? 'จบแล้ว' : 'ยังไม่จบ'}}</p>
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
import {BCard,BCollapse,VBToggle} from 'bootstrap-vue'

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
    //let response = await axios.get("https://raw.githubusercontent.com/AryMiku/API_AryMiku/master/AryMiku_List/AryMiku_List.json");
    let response = await axios.get("https://api.arymiku.com/select/Select_Home_List.php?typeid=1");
    this.listCardData = response.data;
    Swal.close();
  },
  data(){
    return {
      listCardData : [],
      selected: [],
      searchText : '',
      optionGroup : [
        {text:'Anime',value:'Anime'},
        {text:'Manga',value:'Mange'}
      ],
      sortType:''
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
    },
    groupbytype(item){
      console.log('test' + item);
      console.log(this.listCardData);
    }
  },
  components: {
    BCard,
    BCollapse
  },
  computed:{
    listFilter (){
      let text = this.searchText.trim()
      let type = this.sortType.trim()
      return this.listCardData.filter(item =>{
        return (item.Name.indexOf(text) > -1 || item.Category.indexOf(text) > -1) && item.Category.indexOf(type) > -1
      })
    }
  },
  directives:{
    'b-toggle':VBToggle
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

  .has-search .form-control {
    padding-left: 2.375rem;
  }
  .has-search .form-control-feedback {
      position: absolute;
      z-index: 2;
      display: block;
      width: 2.375rem;
      height: 2.375rem;
      line-height: 2.375rem;
      text-align: center;
      pointer-events: none;
      color: #aaa;
  }
</style>