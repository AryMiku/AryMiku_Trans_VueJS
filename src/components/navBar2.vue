<template>
<div class="container">
  <nav class="navbar navbar-expand-lg navbar-light bg-light rounded" aria-label="Twelfth navbar example">
    <a href="#" class="navbar-brand ps-3" >
      <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24">
      AryMiku
    </a>
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content" id="navbarsExample10">
          <ul class="navbar-nav">
            <li class="nav-item px-5">
              <router-link v-bind:to="'/'" class="nav-link text-dark bg-light">
                <i class="fa fa-th-large fa-fw icon-purple-color"></i>
                  Home
              </router-link>
            </li>
            <li class="nav-item px-5">
              <router-link v-bind:to="'/secret'" class="nav-link text-dark bg-light">
                <i class="fa fa-lock  fa-fw icon-purple-color"></i>
                  DarkZone
              </router-link>
            </li>
            <li class="nav-item px-5">
              <router-link v-bind:to="'/echhi'" class="nav-link text-dark bg-light">
                <i class="fa fa-file  fa-fw icon-purple-color"></i>
                  Ecchi
              </router-link>
            </li>
            <li class="nav-item px-5 dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="dropdown10" data-bs-toggle="dropdown" aria-expanded="false">Contact</a>
              <ul class="dropdown-menu" aria-labelledby="dropdown10">
                <li><a class="dropdown-item" href="#">Facebook</a></li>
                <li><a class="dropdown-item" href="#">Discord</a></li>
              </ul>
            </li>
            <li class="nav-item px-5 dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="dropdown10" data-bs-toggle="dropdown" aria-expanded="false">Alliance</a>
              <ul class="dropdown-menu" aria-labelledby="dropdown10">
                <li>
                  <a class="dropdown-item" href="https://discord.gg/ryKVxXggsg" target="_blank">
                    <i class="fa fa-discord me-1 fa-fw icon-purple-color"></i>
                    Rafasu
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="https://discord.gg/ryKVxXggsg" target="_blank">
                    <i class="fa fa-discord me-1 fa-fw icon-purple-color"></i>
                    Aileen
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</div>
  
</template>

<script>
    export default {
        name : "navbar2"
    };
</script>