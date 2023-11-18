<template>
  <div class="Home">
    <div class="page-content page-content-padding font-kanit" id="content">
        <!-- <div class="container"> -->
        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <div>
                        Serch : <b-form-input
                            id="filter-input"
                            v-model="filter"
                            type="search"
                            placeholder="Type to Search"
                            class="mb-2"
                        ></b-form-input>
                        <b-table :fields="fields" :items="listdata" :current-page="currentPage" :per-page="perPage" :filter="filter" show-empty hover class="table table-bordered font-sarabun">
                            <template #cell(name)="data">
                                <b>{{data.item.Name}}</b>
                            </template>
                            <template #cell(Category_Name)="data">
                                <b>{{data.item.Category_Name}}</b>
                            </template>
                            <template #cell(Chapter)="data">
                                <b>{{data.item.Chapter}}</b>
                            </template>
                            <template #cell(Languagejson)="data">
                                <span v-for="(value,key) in data.item.Languagejson" :key="key">
                                    <img v-bind:src="getflagicon(value)" class="me-2">
                                </span>
                            </template>
                            <template #cell(Subtitlejson)="data">
                                <span v-for="(value,key) in data.item.Subtitlejson" :key="key">
                                    <img v-bind:src="getflagicon(value)" class="me-2">
                                </span>
                            </template>
                            <template #cell(Backupjson)="data">
                                <span v-for="(value,key) in data.item.Backupjson" :key="key">
                                    <img v-bind:src="getflagicon(value)" class="me-2">
                                </span>
                            </template>
                        </b-table>
                        <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage"></b-pagination>
                        <b-badge variant="success">Success</b-badge>
                    </div>
                </div>
            </div>
        </div>
        <!-- </div> -->
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
    // let response = await axios.get("https://raw.githubusercontent.com/AryMiku/API_AryMiku/master/API_DowloadAnother.json");
    let response = await axios.get("https://api.arymiku.com/select/Select_List_MyItem.php");
    response.data.forEach(element => {
      element.Languagejson = element.Language == '' ? '' : JSON.parse(element.Language);
      element.Subtitlejson = element.Subtitle == '' ? '' : JSON.parse(element.Subtitle);
      element.Backupjson = JSON.parse(element.Backup);
    });
    this.listdata = response.data;
    this.totalRows = response.data.length;
    Swal.close();
  },
  data(){
    return {
      currentPage: 1,
      totalRows: 0, /*ไปกำหนดค่าจำนวนหน้าตอนได้ list item แล้ว*/
      perPage: 20, 
      filter: null,
      listdata : [],
      fields : [
              {key:'name',label:'ชื่อ'},
              {key:'Category_Name',label:'หมวดหมู่',class: 'text-center'},
              {key:'Chapter',label:'จำนวนตอน',class: 'text-center hide-column'},
              {key:'Languagejson',label:'ภาษา',class: 'text-center hide-column'},
              {key:'Subtitlejson',label:'คำบรรยาย',class: 'text-center hide-column'},
              {key:'Backupjson',label:'ที่จัดเก็บ',class: 'text-center hide-column'}
      ],
      selected: [],
      searchText : '',
      sortType:''
    }
  },
  methods:{
    getflagicon(value){
      let item = '';
      switch(value) {
        case 'TH':
          item = require("../assets/th.png")
          break;
        case 'JP':
          item = require("../assets/jp.png")
          break;
        case 'EN':
          item = require("../assets/en.png")
          break;
        case 'BOX':
          item = require("../assets/box.png")
          break;
        case 'NAS':
          item = require("../assets/nas.png")
          break;
        case 'TERABOX' :
          item = require("../assets/tera.png")
          break;
        default:
          item = ''
      }
      return item
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
  .font-kanit{
    font-family: 'Kanit', sans-serif;
  }
  .color-tomato{
    background: tomato;
    color: white;
    font-weight: bold;
    text-align: center;
    font-size: 3em;
  }
  /* Container ตรงกลาง */
  .bank-flex-container {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  }
  bank-row {
    width: 100%;
  }
  .bank-flex-item {
    background: tomato;
    padding: 5px;
    width: 200px;
    height: 150px;
    margin: 10px;
    line-height: 150px;
    color: white;
    font-weight: bold;
    font-size: 3em;
    text-align: center;
  }
  
</style>