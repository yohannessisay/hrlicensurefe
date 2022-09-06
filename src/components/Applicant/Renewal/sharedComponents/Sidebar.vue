<template>
  <div class="side-navbar">
    <div class="flex justify-center p-4" style="border-bottom: 2px solid white">
      <img
        src="../../../../assets/image.png"
        style="height: 40px; width: 40px"
        alt=""
        srcset=""
      />
      <span class="text-white font-bold mt-2 ml-2" id="header-text">EHPL</span>
    </div>

    <ul class="mt-12">
      <li class="list">
        <b></b>
        <b></b>
        <a href="#Home">
          <router-link class="link" to="/menu">
            <span class="icon"><i class="bx bxs-home text-white"></i></span>
            <span class="title text-white font-bold">Home</span>
          </router-link>
        </a>
      </li>
      <li :class="$route.fullPath === '/newLicense' ? 'list active' : 'list'">
        <b></b>
        <b></b>
        <a href="#NewLicense">
          <router-link class="link" to="/newLicense">
            <span class="icon"><i class="bx bxs-certification"></i></span>
            <span class="text font-bold">New License</span>
          </router-link>
        </a>
      </li>

      <li
        :class="
          $route.fullPath === '/newLicense/submitted' ? 'list active' : 'list'
        "
      >
        <b></b>
        <b></b>
        <a href="#Renewal">
          <router-link class="link" to="/newLicense/submitted">
            <span class="icon"><i class="bx bx-refresh text-white"></i></span>
            <span class="text text-white font-bold">Submitted</span>
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
            <span class="text text-white font-bold">Draft</span>
          </router-link>
        </a>
      </li>
      <li class="list">
        <b></b>
        <b></b>
        <a href="#GoodStanding">
          <router-link class="link" to="/goodStanding">
            <span class="icon"><i class="bx bx-mail-send text-white"></i></span>
            <span class="text text-white font-bold hover:text-black"
              >Withdrawn</span
            >
          </router-link>
        </a>
      </li>

      <li class="list">
        <b></b>
        <b></b>
        <a href="#">
          <router-link class="link" to="/newLicense">
            <span class="icon"><i class="bx bx-user text-white"></i></span>
            <span class="text text-white font-bold">Approved</span>
          </router-link>
        </a>
      </li>

      <li class="list">
        <b></b>
        <b></b>
        <a href="#">
          <router-link class="link" to="/newLicense">
            <span class="icon"><i class="bx bx-user text-white"></i></span>
            <span class="text text-white font-bold">Declined</span>
          </router-link>
        </a>
      </li>

      <li class="list">
        <b></b>
        <b></b>
        <a href="#">
          <router-link class="link" to="/newLicense">
            <span class="icon"><i class="bx bx-user text-white"></i></span>
            <span class="text text-white font-bold">Under Supervision</span>
          </router-link>
        </a>
      </li>

      <li class="list">
        <b></b>
        <b></b>
        <a href="#">
          <router-link class="link" to="/newLicense">
            <span class="icon"><i class="bx bx-user text-white"></i></span>
            <span class="text text-white font-bold">Pending Payment</span>
          </router-link>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
</script>