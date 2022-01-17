<template>
  <div class="dowload">
    <div class="page-content page-content-padding mrt" id="content">
        <div class="container">
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <center><img src="https://sv1.picz.in.th/images/2022/01/16/nQIdlR.jpg" style="width: 100%; max-width: 350px;" ></center>
                    </div>
                    <div class="col-sm">
                        <b>ชื่อเรื่อง</b> : Sword Art Online Alicization <hr>
                        <b>รูปแบบ</b> : [TH][BD][1080P] <hr> 
                        <b>จำนวนตอน</b> : 24 ตอน <hr> 
                        <b>เนื้อเรื่องย่อ</b> : สิงหาคม 2026 คิริโตะ รับงานเป็นผู้ทดสอบระบบ FullDive รุ่นที่ 4 Soul Translator 
                        ซึ่งทำให้เขาไปอยู่ในโลกเสมือน Underworld ที่เวลาเดินเร็วกว่าโลกความเป็นจริง 1,000 เท่า เขาได้ใช้ชีวิตในนั้นตั้งแต่เด็ก 
                        จนใช้เวลาร่วม 11 ปี แต่ความทรงจำเหตุการณ์ต่างๆ กลับถูกผนึกไว้หลังกลับสู่โลกเดิม 
                        จนวันหนึ่ง คิริโตะบาดเจ็บสาหัสจาก Johnny Black (อดีตสมาชิกของ Death Gun ที่รอดอยู่) ต่อหน้าอาสึนะ 
                        ผลจากยาฉีดเข้าร่าง ทำให้เขาหยุดหายใจ แม้จะช่วยทำให้หัวใจเต้นอีกครั้ง แต่เกิดความเสียหายทางสมองจากขาดอ๊อกซิเจนเป็นเวลานาน 
                        คิริโตะอยู่ในอาการโคม่าไม่ได้สติ มีกลุ่มคนที่ใช้อุปกรณ์ Soul Translators พาเขาไปรักษา ซึ่งทำให้เขาได้ความทรงจำเดิมในโลก 
                        Underworld กลับไปผจญภัยในโลกนั้น จนกว่าจะมีหนทางพาเขากลับมาโลกเดิมได้ <hr> 
                        <b> แนวเรื่อง </b> :  แอ็กชั่น , RPG  <hr>
                        <b>สถานะ</b> : <span class="badge badge-success">จบแล้ว</span>
                    </div>
                    <div>
                        <!-- {{this.listdata}} -->
                        <data-table v-bind="bindings"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'dowload',
  data(){
      return{
          id: this.$route.params.id,
          listdata : [] //รอค่าจาก mount
      }
  },
  computed:{
      bindings() {
          return {
              data : this.listdata,
              columns : [
                  {
                      key : "EP",
                      Name : "EP"
                  }
              ]
          }
      }
  },
  created(){ //เกิดหลังจาก Build Components เสร็จแล้ว
      console.log(this.id)
  },
  async mounted(){ //เปิดมาก็จัดเลย
    let response = await axios.get("https://raw.githubusercontent.com/AryMiku/API_AryMiku/master/11.json");
    this.listdata = response.data.Download

  }
}
</script>

<style>
    .mrt {
        margin-top: 2rem;
    }
</style>
