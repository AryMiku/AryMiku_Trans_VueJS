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
        <div class="col-lg-4 col-sm-6 mb-4">
          <div class="card">
            <div class="card-header bank-fonthead">
              <i class="fa fa-tag"></i>
              Fate Heaven Feel
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
  components: {
  },
};
</script>

