<template>
  <div class="side-navbar" id="mainSideBar">
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
          $route.fullPath === '/Applicant/GoodStanding' ? 'list active' : 'list'
        "
        :id="$route.fullPath === '/Applicant/GoodStanding' ? 'activeMenu' : ''"
      >
        <b></b>
        <b></b>
        <a href="#GoodStanding">
          <router-link class="link" to="/Applicant/GoodStanding">
            <span class="icon"><i class="bx bx-certification"></i></span>
            <span class="text text-white font-bold">GoodStanding</span>
          </router-link>
        </a>
      </li>

      <li
        :class="
          $route.fullPath === '/Applicant/GoodStanding/submitted'
            ? 'list active'
            : 'list'
        "
        :id="
          $route.fullPath === '/Applicant/GoodStanding/submitted'
            ? 'activeMenu'
            : ''
        "
      >
        <b></b>
        <b></b>
        <a href="#GoodStanding">
          <router-link class="link" to="/Applicant/GoodStanding/submitted">
            <span class="icon"
              ><i
                :class="
                  $route.fullPath === '/Applicant/GoodStanding/submitted'
                    ? 'bx bxs-save'
                    : 'bx bx-save'
                "
              ></i
            ></span>
            <span class="text text-white font-bold">Submitted</span>
          </router-link>
        </a>
      </li>
      <li
        :class="
          $route.fullPath === '/Applicant/GoodStanding/draft'
            ? 'list active'
            : 'list'
        "
        :id="
          $route.fullPath === '/Applicant/GoodStanding/draft' ? 'activeMenu' : ''
        "
      >
        <b></b>
        <b></b>
        <a href="#Verification">
          <router-link class="link" to="/Applicant/GoodStanding/draft">
            <span class="icon"
              ><i
                :class="
                  $route.fullPath === '/Applicant/GoodStanding/draft'
                    ? 'bx bxs-paste'
                    : 'bx bx-paste'
                "
              ></i
            ></span>
            <span class="text text-white font-bold">Draft</span>
          </router-link>
        </a>
      </li>
      <li
        :class="
          $route.fullPath === '/Applicant/GoodStanding/withdraw'
            ? 'list active'
            : 'list'
        "
        :id="
          $route.fullPath === '/Applicant/GoodStanding/withdraw'
            ? 'activeMenu'
            : ''
        "
      >
        <b></b>
        <b></b>
        <a href="#GoodStanding">
          <router-link class="link" to="/Applicant/GoodStanding/withdraw">
            <span class="icon"
              ><i
                :class="
                  $route.fullPath === '/Applicant/GoodStanding/withdraw'
                    ? 'bx bxs-x-circle'
                    : 'bx bx-x-circle'
                "
              ></i
            ></span>
            <span class="text text-white font-bold hover:text-black"
              >Withdraw</span
            >
          </router-link>
        </a>
      </li>

      <li
        :class="
          $route.fullPath === '/Applicant/GoodStanding/assigned'
            ? 'list active'
            : 'list'
        "
        :id="
          $route.fullPath === '/Applicant/GoodStanding/assigned'
            ? 'activeMenu'
            : ''
        "
      >
        <b></b>
        <b></b>
        <a href="#">
          <router-link class="link" to="/Applicant/GoodStanding/assigned">
            <span class="icon"
              ><i
                :class="
                  $route.fullPath === '/Applicant/GoodStanding/assigned'
                    ? 'bx bx-refresh'
                    : 'bx bx-refresh'
                "
              ></i
            ></span>
            <span class="text text-white font-bold">Assigned</span>
          </router-link>
        </a>
      </li>

      <li
        :class="
          $route.fullPath === '/Applicant/GoodStanding/approved'
            ? 'list active'
            : 'list'
        "
        :id="
          $route.fullPath === '/Applicant/GoodStanding/approved'
            ? 'activeMenu'
            : ''
        "
      >
        <b></b>
        <b></b>
        <a href="#">
          <router-link class="link" to="/Applicant/GoodStanding/approved">
            <span class="icon"
              ><i
                :class="
                  $route.fullPath === '/Applicant/GoodStanding/approved'
                    ? 'bx bxs-badge-check'
                    : 'bx bx-badge-check'
                "
              ></i
            ></span>
            <span class="text text-white font-bold">Approved</span>
          </router-link>
        </a>
      </li>

      <li
        :class="
          $route.fullPath === '/Applicant/GoodStanding/declined'
            ? 'list active'
            : 'list'
        "
        :id="
          $route.fullPath === '/Applicant/GoodStanding/declined'
            ? 'activeMenu'
            : ''
        "
      >
        <b></b>
        <b></b>
        <a href="#">
          <router-link class="link" to="/Applicant/GoodStanding/declined">
            <span class="icon"
              ><i
                :class="
                  $route.fullPath === '/Applicant/GoodStanding/declined'
                    ? 'bx bxs-shield-x'
                    : 'bx bx-shield-x'
                "
              ></i
            ></span>
            <span class="text text-white font-bold">Declined</span>
          </router-link>
        </a>
      </li>

   

      
    </ul>
  </div>
</template>

<script>
</script>