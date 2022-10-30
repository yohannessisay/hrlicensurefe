<template>
  <div class="side-navbar">
    <router-link class="link" to="/menu">
      <div
        class="flex justify-center p-4 cursor-pointer"
        style="border-bottom: 2px solid white; margin-top: -5px"
      >
        <img
          src="../../../../assets/image.png"
          style="height: 40px; width: 40px"
          alt=""
          srcset=""
        />
        <span class="text-white font-bold mt-2 ml-2" id="header-text"
          >EHPL</span
        >
      </div>
    </router-link>

    <ul class="mt-2">
      <li class="list">
        <b></b>
        <b></b>
        <a href="#Home">
          <router-link class="link" to="/menu">
            <span class="icon"><i class="bx bx-home text-white"></i></span>
            <span class="title text-white font-bold">Home</span>
          </router-link>
        </a>
      </li>

      <li
        :class="
          $route.fullPath === '/applicant/profile' ? 'list active' : 'list'
        "
      >
        <b></b>
        <b></b>
        <a href="#">
          <router-link class="link" to="/applicant/profile">
            <span class="icon"
              ><i
                :class="
                  $route.fullPath === '/applicant/profile'
                    ? 'bx bx-user'
                    : 'bx bx-user'
                "
              ></i
            ></span>
            <span class="text text-white font-bold mt-1">Profile</span>
          </router-link>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
</script>