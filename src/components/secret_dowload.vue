<template>
  <div class="dowload">
    <div class="page-content page-content-padding mrt" id="content">
        <!-- <div class="container"> -->
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <center><img v-bind:src="data.Img" style="width: 100%; max-width: 350px;" ></center>
                    </div>
                    <div class="col-sm font-sarabun lmt">
                        <b>ชื่อเรื่อง</b> : {{data.Name}} <hr>
                        <!-- <b>รูปแบบ</b> : <span v-for="(value,key) in data.Type" :key="key">[{{value}}] </span> <hr>  -->
                        <b>รูปแบบ</b> : {{data.Category}} <hr>
                        <b>จำนวนตอน</b> : {{data.Episode}} <hr> 
                        <b>เนื้อเรื่องย่อ</b> : {{data.ShortStory}} <hr> 
                        <b> แนวเรื่อง </b> :  <span v-for="(value,key) in data.Type" :key="key" class="badge bg-primary me-2">{{value}} </span>  <hr>
                        <b>สถานะ</b> : <span :class="[data.Suscess ? 'badge bg-success' : 'badge bg-danger']">{{data.Suscess ? 'จบแล้ว' : 'ยังไม่จบ'}}</span>
                    </div>
                </div>
            </div>

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
                            <b-table :fields="fields" :items="filteredItems" :current-page="currentPage" :per-page="perPage" :filter="filter" show-empty hover class="table table-bordered font-sarabun">
                                <template #cell(name)="data">
                                    <b @click="ShowDowload(data.item)">{{data.item.Name}}</b>
                                </template>
                                <template #cell(fileowner)>
                                    <b><a v-bind:href="data.Trans.Link" target="_blank">{{data.Trans.Name}}</a></b>
                                </template>
                                <template #cell(link)="data">
                                    <b-dropdown size="sm" variant="outline-primary" right text="Link">
                                        <b-dropdown-item v-for="(value,key) in data.item.DownloadLink" :key="key" :disabled="false" v-bind:href="value.Link" target="_blank">
                                            {{value.Name}}
                                        </b-dropdown-item>
                                    </b-dropdown>
                                </template>
                                <template #cell(status)="data">
                                    <span :class="BadgeStatus(data.item.Status)">{{NameShowStatus(data.item.Status)}}</span>
                                </template>
                            </b-table>
                            <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage" class="mb-4"></b-pagination>
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

import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  name: 'dowload',
  data(){
      return{
          id: this.$route.params.id,
          listdata : [], //รอค่าจาก mount
          data : {Img:null},
          fields : [
              {key:'name',label:'Anime Name'},
              {key:'fileowner',label:'ผู้จัดทำ',class: 'text-center hide-column'},
              {key:'link', label:'Link',class: 'text-center'},
              {key:'status',label:'status',class: 'text-center hide-column'}
          ],
          currentPage: 1,
          totalRows: 1,
          perPage: 5,
          filter: null
      }
  },
  methods: {
    NameShowStatus(status){
        let text = '';
        if(status == '1'){
            text = "สถานะสมบูรณ์"
        }
        else if(status == '2'){
            text = "ไฟล์เสียหาย"
        }
        else if(status == '3'){
            text = "มีลิงค์ที่เสียหาย"
        }
        return text;
    },
    BadgeStatus(statue){
        let badge = '';
        if(statue == '1'){
            badge = "badge bg-success"
        }
        else if(statue == '2'){
            badge = "badge bg-danger"
        }
        else if(statue == '3'){
            badge = "badge bg-warning text-dark"
        }
        return badge;
    },
    ShowDowload(item){
        let row = `<div class="mb-2">${item.Name}</div>`;
        item.DownloadLink.forEach(element => {
            row += `
                <a href="${element.Link}" class="hideunderline" target="_blank">
                    <button type="button" class="btn btn-outline-primary m-1">${element.Name}</button>
                </a>`
        });
        Swal.fire({
            title : 'Dowload',
            icon : 'info',
            html : row
        })
    }
  },
  computed:{
      bindings() {
          return {
              data : this.listdata
          }
      },
      filteredItems(){
        if (this.filter) {
            return this.listdata.filter(item =>
            item.Name.toLowerCase().includes(this.filter.toLowerCase())
        );
        }
        else {
            return this.listdata;
        }
      }
  },
  created(){ //เกิดหลังจาก Build Components เสร็จแล้ว
      console.log(this.id)
  },
  async mounted(){ //เปิดมาก็จัดเลย
    let response = null
    try{
        Swal.fire({
            title: 'กำลังโหลดจ้า...',
            showConfirmButton: false,
            allowOutsideClick: false,
        });
        Swal.showLoading();
        // response = await axios.get(`https://raw.githubusercontent.com/AryMiku/API_AryMiku/master/${this.id}.json`);
        response = await axios.get(`https://api.arymiku.com/select/Select_Home_Dowload.php?id=${this.id}&isDowload=0`);
        this.listdata = response.data.Download
        this.data = response.data
        document.title = response.data.Name
        //set number of item
        this.totalRows = response.data.Download.length
        if(this.totalRows < 20){
            this.perPage = 20;
        }
        Swal.close();
    } catch(err){
        console.log(err)
        // alert('Id นี้ไม่มีอยู่จริง')
        Swal.fire({
                title: 'หน้านี้ไม่มีข้อมูลกำลังกลับหน้าหลัก',
                showConfirmButton: false,
                allowOutsideClick: false,
                timer: 2000,
        }).then(() => {
            this.$router.push({name: 'Home'})
        });
        Swal.showLoading();
    }
  }
}
</script>

<style>
    .mrt {
        margin-top: 2rem;
    }
    @media screen and (max-width: 975px) {
        .hide-column {
            display: none;
        }
        .lmt{
            margin-top: 1rem;
        }
    }
    .redtext{
        color: red;
    }
</style>
