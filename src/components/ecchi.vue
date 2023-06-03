<template>
  <div class="dowload">
    <div class="page-content page-content-padding mrt" id="content">
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
                                <b>{{data.item.Category}}</b>
                            </template>
                            <template #cell(fileowner)="data">
                                <span @click="OpenModalValue(data.item.Id);"><b>{{data.item.Name}}</b></span>
                            </template>
                            <template #cell(link)="data">
                                <span :class="[data.item.Suscess ? 'badge bg-success' : 'badge bg-error']">{{data.item.Suscess == true ? 'สถานะสมบูรณ์' : 'ไฟล์เสียหาย'}}</span>
                            </template>
                            <template #cell(status)="data">
                                <span class="badge bg-warning" @click="OpenModalValue(data.item.Id);">ดูรูปภาพ</span>
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
    <!-- model -->
    <b-modal id="modal-1" ref="modal-1" size="xl" :title="listdata_modal.Name">
        <div class="container">
            <div class="row">
                <div class="col-1">
                    <span class="badge bg-warning" style="float:left;" @click="ShowPic=!ShowPic">ซ่อน/โชว์ รูปภาพ</span>
                </div>
                <div class="col-5">
                    <img v-bind:src="listdata_modal.Img" style="width:80%" v-if="ShowPic"/>
                </div>
                <div class="col-6">
                    <table class="table">
                    <tr>
                        <th> Name </th>
                        <th> Link </th>
                    </tr>
                        <tr v-for="(item ,index) in listdata_modal.Download" v-bind:key="index">
                            <th> {{item.Name}} </th>
                            <th>
                                <!-- <a href="#">Test</a> -->
                                <!-- <b-dropdown-item v-for="(value,key) in item.DownloadLink" :key="key" v-bind:href="value.Link" target="_blank">
                                    {{value.Name}}
                                </b-dropdown-item> -->
                                <b-dropdown text="Dowload">
                                    <b-dropdown-item v-bind:href="dw.Link" target="_blank" v-for="(dw,index) in item.DownloadLink" v-bind:key="index">{{dw.Name}}</b-dropdown-item>
                                </b-dropdown>
                            </th>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <p>{{IdModal}}</p>
        
        
    </b-modal>
    <!-- model -->
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
              {key:'name',label:'หมวดหมู่'},
              {key:'fileowner',label:'ชื่อ',class: 'text-center'},
              {key:'link', label:'Status',class: 'text-center hide-column'},
              {key:'status',label:'รูปภาพ',class: 'text-center hide-column'}
          ],
          currentPage: 1,
          totalRows: 1,
          perPage: 5,
          filter: null,
          IdModal:null,
          ShowPic:true,
          listdata_modal : {}
      }
  },
  methods:{
    openPictuce(Id){
        console.log(Id);
        Swal.fire({
            title: `Test ${Id}`,
            html:
                `<div>
                    <img src="https://usercontent.2th.me/a/i/rt3jw5rn/2th.me_3272039.jpg" style="width:25rem;height:35rem;"/>
                </div>
                <span class="badge bg-warning" style="float:left;" onclick="Test()">ซ่อน/โชว์ รูปภาพ</span>
                <table class="table">
                    <tr>
                        <th> Name </th>
                        <th> Link </th>
                    </tr>
                    <tr>
                        <th> Final </th>
                        <th></th>
                    </tr>
                </table>`,
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:
                '<i class="fa fa-thumbs-up"></i> Great!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText:
                '<i class="fa fa-thumbs-down"></i>',
            cancelButtonAriaLabel: 'Thumbs down',
            width:'1020px'
        })
    },
    async OpenModalValue(Id){
        // $bvModal.show('modal-1');
        let response = await axios.get(`https://api.arymiku.com/select/Select_Home_Dowload.php?id=${Id}`);
        console.log(Id);
        this.listdata_modal = response.data;
        this.$refs['modal-1'].show();
    }
  },
  computed:{
      bindings() {
          return {
              data : this.listdata
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
        // response = await axios.get(`https://raw.githubusercontent.com/AryMiku/API_AryMiku/master/AryMiku_List/AryMiku_List_Ecchi.json`);
        response = await axios.get(`https://api.arymiku.com/select/Select_Home_List.php?typeid=2`);
        this.listdata = response.data
        this.data = response.data
        //set number of item
        this.totalRows = response.data.length
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
    .swal-height {
        height: 80vh;
    }
    .close{
        background-color: transparent;
        border: 0;
        font-size: 1.5rem;
    }
    @media screen and (max-width: 975px) {
        .hide-column {
            display: none;
        }
    }
</style>
