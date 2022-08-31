<template>
  <div class="side-navbar ">
    <div class="flex justify-center p-4  " style=" border-bottom: 2px solid white">
      <img
        src="../../assets/image.png"
        style="height: 40px; width: 40px"
        alt=""
        class="mr-4"
       
      />
      <span id="header-text" class="text-white font-bold mt-2 ml- ">EHPL</span>
    
    </div>
   

    <ul class="mt-24 ">
      
      <li class="list active">
        <b></b>
        <b></b>
        <a href="#Home">
          <router-link class="link" to="/newLicense">
            <span class="icon"><i class="bx bxs-home text-black"></i></span>
            <span class="title">Home</span>
          </router-link>
        </a>
      </li>
      <li class="list">
        <b></b>
        <b></b>
        <a href="#NewLicense">
          <router-link class="link" to="/newLicense">
            <span class="icon"
              ><i class="bx bxs-certification text-white"></i
            ></span>
            <span class="text text-white font-bold">New License</span>
          </router-link>
        </a>
      </li>

      <li class="list">
        <b></b>
        <b></b>
        <a href="#Renewal">
          <router-link class="link" to="/renewal">
            <span class="icon"><i class="bx bx-refresh text-white"></i></span>
            <span class="text text-white font-bold">Renewal</span>
          </router-link>
        </a>
      </li>
      <li class="list">
        <b></b>
        <b></b>
        <a href="#Verification">
          <router-link class="link" to="/verification">
            <span class="icon"
              ><i class="bx bxs-message-check text-white"></i
            ></span>
            <span class="text text-white font-bold">Verification</span>
          </router-link>
        </a>
      </li>
      <li class="list">
        <b></b>
        <b></b>
        <a href="#GoodStanding">
          <router-link class="link" to="/goodStanding">
            <span class="icon"><i class="bx bx-mail-send text-white"></i></span>
            <span class="text text-white font-bold">Good Standing</span>
          </router-link>
        </a>
      </li>

      <li class="list">
        <b></b>
        <b></b>
        <a href="#">
          <router-link class="link" to="/newLicense">
            <span class="icon"><i class="bx bx-user text-white"></i></span>
            <span class="text text-white font-bold">Profile</span>
          </router-link>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
</script>