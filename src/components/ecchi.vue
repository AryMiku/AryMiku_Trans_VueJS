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
                                <b>{{data.item.Name}}</b>
                            </template>
                            <template #cell(link)="data">
                                <span class="badge bg-success">{{data.item.Status == true ? 'สถานะสมบูรณ์' : 'ไฟล์เสียหาย'}}</span>
                            </template>
                            <template #cell(status)="data">
                                <!-- <span class="badge bg-warning" @click="openPictuce(data.item.Id)">ดูรูปภาพ</span> -->
                                <span class="badge bg-warning" @click="$bvModal.show('modal-1');IdModal=data.item.Id;">ดูรูปภาพ</span>
                                <!-- <b-button v-b-modal.modal-1>ดูรูปภาพ</b-button> -->
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
    <b-modal id="modal-1" size="xl" title="BootstrapVue">
        <div class="container">
            <div class="row">
                <div class="col-1">
                    <span class="badge bg-warning" style="float:left;" @click="ShowPic=!ShowPic">ซ่อน/โชว์ รูปภาพ</span>
                </div>
                <div class="col-5">
                    <img src="https://usercontent.2th.me/a/i/rt3jw5rn/2th.me_3272039.jpg" style="width:25rem;height:35rem;" v-if="ShowPic"/>
                </div>
                <div class="col-6">
                    <table class="table">
                    <tr>
                        <th> Name </th>
                        <th> Link </th>
                    </tr>
                    <tr>
                        <th> Final </th>
                        <th><a href="#">Test</a></th>
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
              {key:'fileowner',label:'ชื่อ',class: 'text-center hide-column'},
              {key:'link', label:'Status',class: 'text-center'},
              {key:'status',label:'รูปภาพ',class: 'text-center hide-column'}
          ],
          currentPage: 1,
          totalRows: 1,
          perPage: 5,
          filter: null,
          IdModal:null,
          ShowPic:true
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
        response = await axios.get(`https://raw.githubusercontent.com/AryMiku/API_AryMiku/master/AryMiku_List/AryMiku_List_Ecchi.json`);
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
    @media screen and (max-width: 975px) {
        .hide-column {
            display: none;
        }
    }
</style>
