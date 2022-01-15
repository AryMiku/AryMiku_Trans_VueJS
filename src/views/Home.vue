<template>
  <div class="Home">
    <div class="page-content page-content-padding" id="content">
      <h2 class="display-4 mb-4">AryMiku</h2>

      <div class="form-group has-search">
        <span class="fa fa-search form-control-feedback"></span>
        <input type="text" class="form-control" placeholder="Search" ng-model="searchText">
      </div>

      <div class="separator"></div>

      <div class="row">
        <div class="col-lg-4 col-sm-6 mb-4" v-for="(item,index) in listCardData" :key="index">
          <div class="card">
            <div class="card-header bank-fonthead">
              <i class="fa fa-tag"></i>
              {{item.Name}}
              <span class="badge bg-success">Complete</span>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-3">
                  <img src="https://arymikutrans.netlify.app/pic/heavenfeel.jpg" class="pop img-fluid" alt="">
                </div>
                <div class="col-9">
                  <p class="card-text">จำนวนตอน : 3</p>
                  <p class="card-text">รูปแบบ : BD [1080P]</p>
                  <p class="card-text">สถานะ : จบแล้ว</p>
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

export default {
  name: "Home",
  data(){
    return {
      listCardData : [
        {
          Id : 1,
          Name : `Fate/stay night : Heaven's Feel`,
          Suscess : true,
          Img : `heavenfeel.jpg`,
          Category : `Anime`,
          Type : [`The Movie`,`BD`],
          Episode : `3/3`
        },
        {
          Id : 2,
          Name : `Hitman (Kouji Seo)`,
          Suscess : false,
          Img : `Hitman_2.jpg`,
          Category : `Manga`,
          Type : [`PDF`],
          Episode : `18`
        },
        {
          Id : 3,
          Name : `Brawling Go`,
          Suscess : true,
          Img : `Brawling_2.jpg`,
          Category : `Manhua`,
          Type : [`PDF`],
          Episode : `153`
        },
        {
          Id : 4,
          Name : `The Secret 3P`,
          Suscess : true,
          Img : `3P.jpg`,
          Category : `Manhua`,
          Type : [`PDF`],
          Episode : `18`
        }
      ]
    }
  },
  components: {
  },
};
</script>

