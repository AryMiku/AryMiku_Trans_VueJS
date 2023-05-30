<template>
  <div class="Home">
    <div class="page-content page-content-padding font-kanit" id="content">
        <!-- <div class="fs-1 d-flex justify-content-center">
          <div class="row color-tomato">
            ขี้เกียจทำ ดองไว้ก่อนนะ
          </div> 
        </div>  -->
        <div class="bank-flex-container">
          <div class="bank-row">
            <span class="bank-flex-item">ขี้เกียจทำ ดองไว้ก่อนนะ </span>
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
    // let response = await axios.get("https://raw.githubusercontent.com/AryMiku/API_AryMiku/master/API_DowloadAnother.json");
    let response = await axios.get("https://api.arymiku.com/select/Select_Home_List.php?typeid=0");
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