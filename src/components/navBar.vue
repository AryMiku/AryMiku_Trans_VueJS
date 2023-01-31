<template>
  <div class="navbar">
    <div class="vertical-nav bg-white" id="sidebar">

      <div class="py-4 px-3 mb-4 bg-light">
        <div class="media d-flex align-items-center">
          <img loading="lazy" src="https://c.tenor.com/mKTS5nbF1zcAAAAM/cute-anime-dancing.gif" alt="..." width="80" height="80" class="me-3 rounded-circle img-thumbnail shadow-sm" />
          <div class="media-body">
            <p class="font-weight-normal text-muted mb-0">Ary</p>
          </div>
        </div>
      </div>

      <p class="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">
        Normal
      </p>

      <ul class="nav flex-column bg-white mb-0">
        <li class="nav-item">
          <!-- <a href="/index.html" class="nav-link text-dark bg-light">
            <i class="fa fa-th-large me-3 fa-fw icon-purple-color"></i>
            Home
          </a> -->
          <router-link v-bind:to="'/'" class="nav-link text-dark bg-light">
            <i class="fa fa-th-large me-3 fa-fw icon-purple-color"></i>
            Home
          </router-link>
        </li>
        <li class="nav-item">
          <a
            href="https://www.facebook.com/AnimefunBB"
            class="nav-link text-dark"
            target="_blank"
          >
            <i class="fa fa-facebook-official me-3 fa-fw icon-purple-color"></i>
            Facebook
          </a>
        </li>
        <li class="nav-item">
          <a href="https://discord.gg/vCFeuEt" target="_blank" class="nav-link text-dark">
            <i class="fa fa-discord me-3 fa-fw icon-purple-color"></i>
            Discord
          </a>
        </li>
        <!-- <li class="nav-item">
      <a href="#" class="nav-link text-dark">
                <i class="fa fa-picture-o mr-3 text-primary fa-fw"></i>
                Gallery
            </a>
    </li> -->
      </ul>

      <p class="text-gray font-weight-bold text-uppercase px-3 small py-4 mb-0">
        Secret
      </p>

      <ul class="nav flex-column bg-white mb-0">
        <li class="nav-item">
          <router-link v-bind:to="'/secret'" class="nav-link text-dark bg-light">
            <i class="fa fa-lock me-3 fa-fw icon-purple-color"></i>
            DarkZone
          </router-link>
        </li>
        <li class="nav-item">
          <router-link v-bind:to="'/echhi'" class="nav-link text-dark bg-light">
            <i class="fa fa-file me-3 fa-fw icon-purple-color"></i>
            EcchiZone
          </router-link>
        </li>
        <!-- <li class="nav-item">
      <a href="#" class="nav-link text-dark">
                <i class="fa fa-bar-chart mr-3 text-primary fa-fw"></i>
                bar charts
            </a>
    </li> -->
        <!-- <li class="nav-item">
      <a href="#" class="nav-link text-dark">
                <i class="fa fa-pie-chart mr-3 text-primary fa-fw"></i>
                pie charts
            </a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link text-dark">
                <i class="fa fa-line-chart mr-3 text-primary fa-fw"></i>
                line charts
            </a>
    </li> -->
      </ul>

      <p class="text-gray font-weight-bold text-uppercase px-3 small py-4 mb-0">
        Alliance
      </p>

      <ul class="nav flex-column bg-white mb-0">
        <li class="nav-item">
          <a href="https://discord.gg/ryKVxXggsg" target="_blank" class="nav-link text-dark">
            <i class="fa fa-discord me-3 fa-fw icon-purple-color"></i>
            Rafasu
          </a>
          <a href="https://discord.gg/ryKVxXggsg" target="_blank" class="nav-link text-dark">
            <i class="fa fa-facebook-official me-3 fa-fw icon-purple-color"></i>
            Aileen
          </a>
        </li>
        <!-- <li class="nav-item">
      <a href="#" class="nav-link text-dark">
                <i class="fa fa-bar-chart mr-3 text-primary fa-fw"></i>
                bar charts
            </a>
    </li> -->
        <!-- <li class="nav-item">
      <a href="#" class="nav-link text-dark">
                <i class="fa fa-pie-chart mr-3 text-primary fa-fw"></i>
                pie charts
            </a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link text-dark">
                <i class="fa fa-line-chart mr-3 text-primary fa-fw"></i>
                line charts
            </a>
    </li> -->
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name : "navbar"
    };
</script>

<style>
    .vertical-nav {
        min-width: 10rem;
        width: 10rem;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
        transition: all 0.4s;
    }
    .text-gray {
        color: #aaa;
    }
    .nav-link:hover{
      background:#f3f2f2;
    }
    .font-weight-bold {
        font-weight: 700;
    }
    .icon-purple-color {
        color: #8589ea;
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
    @media (max-width: 768px) {
    #sidebar {
      margin-left: -17rem !important;
    }
    #sidebar.active {
      margin-left: 0;
    }
    #content {
      width: 100%;
      margin: 0;
      padding-left: 2rem !important;
      padding-right: 2rem !important;
    }
    #content.active {
      margin-left: 17rem;
      width: calc(100% - 17rem);
    }
  }
</style>