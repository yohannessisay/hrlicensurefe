<template>
  <ul class="mt-5">
    <div class="parentList flex justify-start">
      <a
        href="#"
        class="bg-white rounded-md mr-4 ml-1 w-full flex justify-start p-2 pointer-events-none"
      >
        <span class="icon"
          ><i class="bx bx-certification text-grey-800 text-2xl mt-1"></i
        ></span>
        <h2 class="title text-grey-800 text-xl font-bold ml-2">Renewal</h2>
      </a>
    </div>

    <li
      :class="$route.fullPath === '/Applicant/Renewal' ? 'list active' : 'list'"
      :id="$route.fullPath === '/Applicant/Renewal' ? 'activeMenu' : ''"
    >
      <b></b>
      <b></b>
      <a class="ml-4" href="#Renewal">
        <router-link class="link" to="/Applicant/Renewal">
          <span class="icon"><i class="bx bx-certification"></i></span>
          <span class="text text-white font-bold">Apply for Renewal</span>
        </router-link>
      </a>
    </li>

    <li
      :class="$route.fullPath === '/Applicant/Renewal/submitted' ? 'list active' : 'list'"
      :id="$route.fullPath === '/Applicant/Renewal/submitted' ? 'activeMenu' : ''"
    >
      <b></b>
      <b></b>
      <a class="ml-4" href="#Renewal">
        <router-link class="link" to="/Applicant/Renewal/submitted">
          <span :class="isDarkMode ? 'icon dark' : 'icon light'"
            ><i
              :class="
                $route.fullPath === '/Applicant/Renewal/submitted'
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
      :class="$route.fullPath === '/Applicant/Renewal/draft' ? 'list active' : 'list'"
      :id="$route.fullPath === '/Applicant/Renewal/draft' ? 'activeMenu' : ''"
    >
      <b></b>
      <b></b>
      <a class="ml-4" href="#Verification">
        <router-link class="link" to="/Applicant/Renewal/draft">
          <span :class="isDarkMode ? 'icon dark' : 'icon light'"
            ><i
              :class="
                $route.fullPath === '/Applicant/Renewal/draft'
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
      :class="$route.fullPath === '/Applicant/Renewal/withdraw' ? 'list active' : 'list'"
      :id="$route.fullPath === '/Applicant/Renewal/withdraw' ? 'activeMenu' : ''"
    >
      <b></b>
      <b></b>
      <a class="ml-4" href="#GoodStanding">
        <router-link class="link" to="/Applicant/Renewal/withdraw">
          <span :class="isDarkMode ? 'icon dark' : 'icon light'"
            ><i
              :class="
                $route.fullPath === '/Applicant/Renewal/withdraw'
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
      :class="$route.fullPath === '/Applicant/Renewal/inReview' ? 'list active' : 'list'"
      :id="$route.fullPath === '/Applicant/Renewal/inReview' ? 'activeMenu' : ''"
    >
      <b></b>
      <b></b>
      <a class="ml-4" href="#">
        <router-link class="link" to="/Applicant/Renewal/inReview">
          <span :class="isDarkMode ? 'icon dark' : 'icon light'"
            ><i
              :class="
                $route.fullPath === '/Applicant/Renewal/inReview'
                  ? 'bx bx-refresh'
                  : 'bx bx-refresh'
              "
            ></i
          ></span>
          <span class="text text-white font-bold">In Review</span>
        </router-link>
      </a>
    </li>

    <li
      :class="$route.fullPath === '/Applicant/Renewal/approved' ? 'list active' : 'list'"
      :id="$route.fullPath === '/Applicant/Renewal/approved' ? 'activeMenu' : ''"
    >
      <b></b>
      <b></b>
      <a class="ml-4" href="#">
        <router-link class="link" to="/Applicant/Renewal/approved">
          <span :class="isDarkMode ? 'icon dark' : 'icon light'"
            ><i
              :class="
                $route.fullPath === '/Applicant/Renewal/approved'
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
      :class="$route.fullPath === '/Applicant/Renewal/declined' ? 'list active' : 'list'"
      :id="$route.fullPath === '/Applicant/Renewal/declined' ? 'activeMenu' : ''"
    >
      <b></b>
      <b></b>
      <a class="ml-4" href="#">
        <router-link class="link" to="/Applicant/Renewal/declined">
          <span :class="isDarkMode ? 'icon dark' : 'icon light'"
            ><i
              :class="
                $route.fullPath === '/Applicant/Renewal/declined'
                  ? 'bx bxs-shield-x'
                  : 'bx bx-shield-x'
              "
            ></i
          ></span>
          <span class="text text-white font-bold">Declined</span>
        </router-link>
      </a>
    </li>

    <li
      :class="
        $route.fullPath === '/Applicant/Renewal/underSupervision' ? 'list active' : 'list'
      "
      :id="$route.fullPath === '/Applicant/Renewal/underSupervision' ? 'activeMenu' : ''"
    >
      <b></b>
      <b></b>
      <a class="ml-4" href="#">
        <router-link class="link" to="/Applicant/Renewal/underSupervision">
          <span :class="isDarkMode ? 'icon dark' : 'icon light'"
            ><i
              :class="
                $route.fullPath === '/Applicant/Renewal/underSupervision'
                  ? 'bx bx-glasses'
                  : 'bx bx-glasses'
              "
            ></i
          ></span>
          <span class="text text-white font-bold">Under Supervision</span>
        </router-link>
      </a>
    </li>

    <!-- <li
        :class="
          $route.fullPath === '/Applicant/Renewal/pendingPayment'
            ? 'list active'
            : 'list'
        "
      >
        <b></b>
        <b></b>
        <a class="ml-4" href="#">
          <router-link class="link" to="/Applicant/Renewal/pendingPayment">
            <span class="icon"
              ><i
                :class="
                  $route.fullPath === '/Applicant/Renewal/pendingPayment'
                    ? 'bx bx-loader'
                    : 'bx bx-loader'
                "
              ></i
            ></span>
            <span class="text text-white font-bold">Pending Payment</span>
          </router-link>
        </a>
      </li> -->

    <li
      :class="$route.fullPath === '/Applicant/Renewal/returned' ? 'list active' : 'list'"
      :id="$route.fullPath === '/Applicant/Renewal/returned' ? 'activeMenu' : ''"
    >
      <b></b>
      <b></b>
      <a class="ml-4" href="#">
        <router-link class="link" to="/Applicant/Renewal/returned">
          <span :class="isDarkMode ? 'icon dark' : 'icon light'"
            ><i
              :class="
                $route.fullPath === '/Applicant/Renewal/returned'
                  ? 'bx bx-rotate-left'
                  : 'bx bx-rotate-left'
              "
            ></i
          ></span>
          <span class="text text-white font-bold">Returned</span>
        </router-link>
      </a>
    </li>

    <li
      :class="$route.fullPath === '/Applicant/Renewal/suspended' ? 'list active' : 'list'"
      :id="$route.fullPath === '/Applicant/Renewal/suspended' ? 'activeMenu' : ''"
    >
      <b></b>
      <b></b>
      <a class="ml-4" href="#">
        <router-link class="link" to="/Applicant/Renewal/suspended">
          <span :class="isDarkMode ? 'icon dark' : 'icon light'"
            ><i
              :class="
                $route.fullPath === '/Applicant/Renewal/suspended'
                  ? 'bx bx-stop-circle'
                  : 'bx bx-stop-circle'
              "
            ></i
          ></span>
          <span class="text text-white font-bold">Suspended</span>
        </router-link>
      </a>
    </li>

    <li
      :class="
        $route.fullPath === '/Applicant/Renewal/revoked'
          ? 'list active mb-20'
          : 'list mb-20'
      "
      style="margin-bottom: 75px !important"
      :id="$route.fullPath === '/Applicant/Renewal/revoked' ? 'activeMenu' : ''"
    >
      <b></b>
      <b></b>
      <a class="ml-4" href="#">
        <router-link class="link" to="/Applicant/Renewal/revoked">
          <span :class="isDarkMode ? 'icon dark' : 'icon light'"
            ><i
              :class="
                $route.fullPath === '/Applicant/Renewal/revoked'
                  ? 'bx bx-trash-alt'
                  : 'bx bx-trash-alt'
              "
            ></i
          ></span>
          <span class="text text-white font-bold">Revoked</span>
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
