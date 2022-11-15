<template>
  <div class="sidebar-parent" >
    <div class="side-navbar" id="mainSideBar">
      <div
        class="flex justify-center p-4"
        style="border-bottom: 2px solid white; margin-top: -5px"
      >
        <img
          src="../../assets/image.png"
          style="height: 40px; width: 40px"
          alt=""
          class="mr-4"
        />
        <span id="header-text" class="text-white font-bold mt-2 ml-">EHPL</span>
      </div>

      <ul class="mt-24">
        <li class="list active" id="activeMenu">
          <b></b>
          <b></b>
          <a href="#Home">
            <router-link class="link" to="/Applicant/NewLicense">
              <span class="icon"><i class="bx bxs-home text-black"></i></span>
              <span class="title">Home</span>
            </router-link>
          </a>
        </li>
        <li class="list">
          <b></b>
          <b></b>
          <a href="#NewLicense">
            <router-link class="link" to="/Applicant/NewLicense">
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
            <router-link class="link" to="/Applicant/Renewal">
              <span class="icon"><i class="bx bx-refresh text-white"></i></span>
              <span class="text text-white font-bold">Renewal</span>
            </router-link>
          </a>
        </li>

        <li class="list">
          <b></b>
          <b></b>
          <a href="#GoodStanding">
            <router-link class="link" to="/Applicant/GoodStanding">
              <span class="icon"
                ><i class="bx bx-mail-send text-white"></i
              ></span>
              <span class="text text-white font-bold">Good Standing</span>
            </router-link>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
</script>