<template>
  <ul class="mt-5">
    <div class="parentList flex justify-start">
      <a
        href="#"
        class="bg-white text-white rounded-md mr-4 ml-1 w-full flex justify-start p-2 pointer-events-none"
      >
        <span class="icon"
          ><i class="bx bx-envelope text-grey-800 text-2xl mt-1"></i
        ></span>
        <h2 class="title text-grey-800 text-xl font-bold ml-4">Goodstandings</h2>
      </a>
    </div>

    <li
      :class="$route.fullPath === '/Applicant/GoodStanding' ? 'list active' : 'list'"
      :id="$route.fullPath === '/Applicant/GoodStanding' ? 'activeMenu' : ''"
    >
      <b></b>
      <b></b>
      <a class="ml-4" href="#GoodStanding">
        <router-link class="link" to="/Applicant/GoodStanding">
          <span class="icon"><i class="bx bx-plus"></i></span>
          <span class="text text-white font-bold break-all">Apply for GoodStanding</span>
        </router-link>
      </a>
    </li>

    <li
      :class="
        $route.fullPath === '/Applicant/GoodStanding/submitted' ? 'list active' : 'list'
      "
      :id="$route.fullPath === '/Applicant/GoodStanding/submitted' ? 'activeMenu' : ''"
    >
      <b></b>
      <b></b>
      <a class="ml-4" href="#GoodStanding">
        <router-link class="link" to="/Applicant/GoodStanding/submitted">
          <span :class="isDarkMode ? 'icon dark' : 'icon light'"
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
        $route.fullPath === '/Applicant/GoodStanding/draft' ? 'list active' : 'list'
      "
      :id="$route.fullPath === '/Applicant/GoodStanding/draft' ? 'activeMenu' : ''"
    >
      <b></b>
      <b></b>
      <a class="ml-4" href="#Verification">
        <router-link class="link" to="/Applicant/GoodStanding/draft">
          <span :class="isDarkMode ? 'icon dark' : 'icon light'"
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
        $route.fullPath === '/Applicant/GoodStanding/withdraw' ? 'list active' : 'list'
      "
      :id="$route.fullPath === '/Applicant/GoodStanding/withdraw' ? 'activeMenu' : ''"
    >
      <b></b>
      <b></b>
      <a class="ml-4" href="#GoodStanding">
        <router-link class="link" to="/Applicant/GoodStanding/withdraw">
          <span :class="isDarkMode ? 'icon dark' : 'icon light'"
            ><i
              :class="
                $route.fullPath === '/Applicant/GoodStanding/withdraw'
                  ? 'bx bxs-x-circle'
                  : 'bx bx-x-circle'
              "
            ></i
          ></span>
          <span class="text text-white font-bold hover:text-black">Withdraw</span>
        </router-link>
      </a>
    </li>

    <li
      :class="
        $route.fullPath === '/Applicant/GoodStanding/assigned' ? 'list active' : 'list'
      "
      :id="$route.fullPath === '/Applicant/GoodStanding/assigned' ? 'activeMenu' : ''"
    >
      <b></b>
      <b></b>
      <a class="ml-4" href="#">
        <router-link class="link" to="/Applicant/GoodStanding/assigned">
          <span :class="isDarkMode ? 'icon dark' : 'icon light'"
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
        $route.fullPath === '/Applicant/GoodStanding/approved' ? 'list active' : 'list'
      "
      :id="$route.fullPath === '/Applicant/GoodStanding/approved' ? 'activeMenu' : ''"
    >
      <b></b>
      <b></b>
      <a class="ml-4" href="#">
        <router-link class="link" to="/Applicant/GoodStanding/approved">
          <span :class="isDarkMode ? 'icon dark' : 'icon light'"
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
          ? 'list active mb-20'
          : 'list mb-20'
      "
      :id="$route.fullPath === '/Applicant/GoodStanding/declined' ? 'activeMenu' : ''"
    >
      <b></b>
      <b></b>
      <a class="ml-4" href="#">
        <router-link class="link" to="/Applicant/GoodStanding/declined">
          <span :class="isDarkMode ? 'icon dark' : 'icon light'"
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
    <router-link class="" to="/menu">
      <a class="last_menu flex justify-center hover:bg-main-400 mt-4">
        <span class="icon"><i class="bx bx-home text-white text-2xl -ml-8"></i></span>
        <span class="title text-white font-bold ml-2">Home</span>
      </a>
    </router-link>
  </ul>
</template>
