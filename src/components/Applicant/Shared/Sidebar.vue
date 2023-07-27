<template>
  <div class="side-navbar" id="mainSideBar">
    <div
      class="flex justify-center p-4 cursor-pointer fixed z-10 bg-main-400"
      id="sidebarLogo"
      style="border-bottom: 2px solid white; margin-top: -5px;width: 305px;"
    >
      <img
        src="../../../assets/image.png"
        style="height: 40px; width: 40px"
        alt="logo"
        class="cursor-pointer"
      />
      <span
        class="text-white font-bold mt-2 ml-2 cursor-pointer"
        id="header-text"
        >EHPL</span
      >
    </div>

    <!-- Renewal Routes -->
    <ul class="mt-5" v-if="finalUrl == 'renewal'">
      <div class="parentList flex justify-center ">
        <a
          href="#"
          class="bg-white rounded-md mr-4 ml-1 w-full flex justify-center p-2 pointer-events-none"
        >
          <span class="icon"
            ><i class="bx bx-certification text-grey-800 text-2xl mt-1"></i
          ></span>
          <h2 class="title text-grey-800 text-xl font-bold ml-2">Renewal</h2>
        </a>
      </div>

      <li
        :class="
          $route.fullPath === '/Applicant/Renewal' ? 'list active' : 'list'
        "
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
        :class="
          $route.fullPath === '/Applicant/Renewal/submitted'
            ? 'list active'
            : 'list'
        "
        :id="
          $route.fullPath === '/Applicant/Renewal/submitted' ? 'activeMenu' : ''
        "
      >
        <b></b>
        <b></b>
        <a class="ml-4" href="#Renewal">
          <router-link class="link" to="/Applicant/Renewal/submitted">
            <span class="icon"
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
        :class="
          $route.fullPath === '/Applicant/Renewal/draft'
            ? 'list active'
            : 'list'
        "
        :id="$route.fullPath === '/Applicant/Renewal/draft' ? 'activeMenu' : ''"
      >
        <b></b>
        <b></b>
        <a class="ml-4" href="#Verification">
          <router-link class="link" to="/Applicant/Renewal/draft">
            <span class="icon"
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
        :class="
          $route.fullPath === '/Applicant/Renewal/withdraw'
            ? 'list active'
            : 'list'
        "
        :id="
          $route.fullPath === '/Applicant/Renewal/withdraw' ? 'activeMenu' : ''
        "
      >
        <b></b>
        <b></b>
        <a class="ml-4" href="#GoodStanding">
          <router-link class="link" to="/Applicant/Renewal/withdraw">
            <span class="icon"
              ><i
                :class="
                  $route.fullPath === '/Applicant/Renewal/withdraw'
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
          $route.fullPath === '/Applicant/Renewal/inReview'
            ? 'list active'
            : 'list'
        "
        :id="
          $route.fullPath === '/Applicant/Renewal/inReview' ? 'activeMenu' : ''
        "
      >
        <b></b>
        <b></b>
        <a class="ml-4" href="#">
          <router-link class="link" to="/Applicant/Renewal/inReview">
            <span class="icon"
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
        :class="
          $route.fullPath === '/Applicant/Renewal/approved'
            ? 'list active'
            : 'list'
        "
        :id="
          $route.fullPath === '/Applicant/Renewal/approved' ? 'activeMenu' : ''
        "
      >
        <b></b>
        <b></b>
        <a class="ml-4" href="#">
          <router-link class="link" to="/Applicant/Renewal/approved">
            <span class="icon"
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
        :class="
          $route.fullPath === '/Applicant/Renewal/declined'
            ? 'list active'
            : 'list'
        "
        :id="
          $route.fullPath === '/Applicant/Renewal/declined' ? 'activeMenu' : ''
        "
      >
        <b></b>
        <b></b>
        <a class="ml-4" href="#">
          <router-link class="link" to="/Applicant/Renewal/declined">
            <span class="icon"
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
          $route.fullPath === '/Applicant/Renewal/underSupervision'
            ? 'list active'
            : 'list'
        "
        :id="
          $route.fullPath === '/Applicant/Renewal/underSupervision'
            ? 'activeMenu'
            : ''
        "
      >
        <b></b>
        <b></b>
        <a class="ml-4" href="#">
          <router-link class="link" to="/Applicant/Renewal/underSupervision">
            <span class="icon"
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
        :class="
          $route.fullPath === '/Applicant/Renewal/returned'
            ? 'list active'
            : 'list'
        "
        :id="
          $route.fullPath === '/Applicant/Renewal/returned' ? 'activeMenu' : ''
        "
      >
        <b></b>
        <b></b>
        <a class="ml-4" href="#">
          <router-link class="link" to="/Applicant/Renewal/returned">
            <span class="icon"
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
        :class="
          $route.fullPath === '/Applicant/Renewal/suspended'
            ? 'list active'
            : 'list'
        "
        :id="
          $route.fullPath === '/Applicant/Renewal/suspended' ? 'activeMenu' : ''
        "
      >
        <b></b>
        <b></b>
        <a class="ml-4" href="#">
          <router-link class="link" to="/Applicant/Renewal/suspended">
            <span class="icon"
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
        :id="
          $route.fullPath === '/Applicant/Renewal/revoked' ? 'activeMenu' : ''
        "
      >
        <b></b>
        <b></b>
        <a class="ml-4" href="#">
          <router-link class="link" to="/Applicant/Renewal/revoked">
            <span class="icon"
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
          <span class="icon"
            ><i class="bx bx-home text-white text-2xl -ml-8 "></i
          ></span>
          <span class="title text-white font-bold ml-2">Home</span>
        </a>
      </router-link>
    </ul>

    <!--End of Renewal Routes -->
    <!-- New License routes -->
    <ul class="mt-5" v-if="finalUrl == 'newLicense'">
      <div class="parentList flex justify-center">
        <a
          href="#"
          class=" bg-white rounded-md mr-4 ml-1 w-full flex justify-center p-2 pointer-events-none"
        >
          <span class="icon"
            ><i class="bx bx-certification text-grey-800 text-2xl mt-1"></i
          ></span>
          <h2 class="title text-grey-800 text-xl font-bold ml-4">New License</h2>
        </a>
      </div>

      <li
        :class="
          $route.fullPath === '/Applicant/NewLicense'
            ? 'list active'
            : 'list mt-8'
        "
        :id="$route.fullPath === '/Applicant/NewLicense' ? 'activeMenu' : ''"
      >
        <b></b>
        <b></b>
        <a class="ml-4" href="#NewLicense">
          <router-link class="link" to="/Applicant/NewLicense">
            <span class="icon"><i class="bx bx-plus"></i></span>
            <span class="text text-white font-bold">Apply For New License</span>
          </router-link>
        </a>
      </li>

      <li
        :class="
          $route.fullPath === '/Applicant/NewLicense/submitted'
            ? 'list active'
            : 'list'
        "
        :id="
          $route.fullPath === '/Applicant/NewLicense/submitted'
            ? 'activeMenu'
            : ''
        "
      >
        <b></b>
        <b></b>
        <a class="ml-4" href="#NewLicense">
          <router-link class="link" to="/Applicant/NewLicense/submitted">
            <span class="icon"
              ><i
                :class="
                  $route.fullPath === '/Applicant/NewLicense/submitted'
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
          $route.fullPath === '/Applicant/NewLicense/draft'
            ? 'list active'
            : 'list'
        "
        :id="
          $route.fullPath === '/Applicant/NewLicense/draft' ? 'activeMenu' : ''
        "
      >
        <b></b>
        <b></b>
        <a class="ml-4" href="#Verification">
          <router-link class="link" to="/Applicant/NewLicense/draft">
            <span class="icon"
              ><i
                :class="
                  $route.fullPath === '/Applicant/NewLicense/draft'
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
          $route.fullPath === '/Applicant/NewLicense/withdraw'
            ? 'list active'
            : 'list'
        "
        :id="
          $route.fullPath === '/Applicant/NewLicense/withdraw'
            ? 'activeMenu'
            : ''
        "
      >
        <b></b>
        <b></b>
        <a class="ml-4" href="#GoodStanding">
          <router-link class="link" to="/Applicant/NewLicense/withdraw">
            <span class="icon"
              ><i
                :class="
                  $route.fullPath === '/Applicant/NewLicense/withdraw'
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
          $route.fullPath === '/Applicant/NewLicense/inReview'
            ? 'list active'
            : 'list'
        "
        :id="
          $route.fullPath === '/Applicant/NewLicense/inReview'
            ? 'activeMenu'
            : ''
        "
      >
        <b></b>
        <b></b>
        <a class="ml-4" href="#">
          <router-link class="link" to="/Applicant/NewLicense/inReview">
            <span class="icon"
              ><i
                :class="
                  $route.fullPath === '/Applicant/NewLicense/inReview'
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
        :class="
          $route.fullPath === '/Applicant/NewLicense/approved'
            ? 'list active'
            : 'list'
        "
        :id="
          $route.fullPath === '/Applicant/NewLicense/approved'
            ? 'activeMenu'
            : ''
        "
      >
        <b></b>
        <b></b>
        <a class="ml-4" href="#">
          <router-link class="link" to="/Applicant/NewLicense/approved">
            <span class="icon"
              ><i
                :class="
                  $route.fullPath === '/Applicant/NewLicense/approved'
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
          $route.fullPath === '/Applicant/NewLicense/declined'
            ? 'list active'
            : 'list'
        "
        :id="
          $route.fullPath === '/Applicant/NewLicense/declined'
            ? 'activeMenu'
            : ''
        "
      >
        <b></b>
        <b></b>
        <a class="ml-4" href="#">
          <router-link class="link" to="/Applicant/NewLicense/declined">
            <span class="icon"
              ><i
                :class="
                  $route.fullPath === '/Applicant/NewLicense/declined'
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
          $route.fullPath === '/Applicant/NewLicense/underSupervision'
            ? 'list active'
            : 'list'
        "
        :id="
          $route.fullPath === '/Applicant/NewLicense/underSupervision'
            ? 'activeMenu'
            : ''
        "
      >
        <b></b>
        <b></b>
        <a class="ml-4" href="#">
          <router-link class="link" to="/Applicant/NewLicense/underSupervision">
            <span class="icon"
              ><i
                :class="
                  $route.fullPath === '/Applicant/NewLicense/underSupervision'
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
          $route.fullPath === '/Applicant/NewLicense/pendingPayment'
            ? 'list active'
            : 'list'
        "
      >
        <b></b>
        <b></b>
        <a class="ml-4" href="#">
          <router-link class="link" to="/Applicant/NewLicense/pendingPayment">
            <span class="icon"
              ><i
                :class="
                  $route.fullPath === '/Applicant/NewLicense/pendingPayment'
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
        :class="
          $route.fullPath === '/Applicant/NewLicense/returned'
            ? 'list active'
            : 'list'
        "
        :id="
          $route.fullPath === '/Applicant/NewLicense/returned'
            ? 'activeMenu'
            : ''
        "
      >
        <b></b>
        <b></b>
        <a class="ml-4" href="#">
          <router-link class="link" to="/Applicant/NewLicense/returned">
            <span class="icon"
              ><i
                :class="
                  $route.fullPath === '/Applicant/NewLicense/returned'
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
        :class="
          $route.fullPath === '/Applicant/NewLicense/suspended'
            ? 'list active'
            : 'list'
        "
        :id="
          $route.fullPath === '/Applicant/NewLicense/suspended'
            ? 'activeMenu'
            : ''
        "
      >
        <b></b>
        <b></b>
        <a class="ml-4" href="#">
          <router-link class="link" to="/Applicant/NewLicense/suspended">
            <span class="icon"
              ><i
                :class="
                  $route.fullPath === '/Applicant/NewLicense/suspended'
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
          $route.fullPath === '/Applicant/NewLicense/revoked'
            ? 'list active'
            : 'list'
        "
      
        :id="
          $route.fullPath === '/Applicant/NewLicense/revoked'
            ? 'activeMenu'
            : ''
        "
      >
        <b></b>
        <b></b>
        <a class="ml-4" href="#" style="margin-bottom: 75px !important;">
          <router-link class="link" to="/Applicant/NewLicense/revoked">
            <span class="icon"
              ><i
                :class="
                  $route.fullPath === '/Applicant/NewLicense/revoked'
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
          <span class="icon"
            ><i class="bx bx-home text-white text-2xl -ml-8 "></i
          ></span>
          <span class="title text-white font-bold ml-2">Home</span>
        </a>
      </router-link>
    </ul>
    <!-- End of New License routes -->
    <!-- Goodstanding routes -->
    <ul class="mt-5" v-if="finalUrl == 'goodstanding'">
      <div class="parentList flex justify-center">
        <a
          href="#"
          class="bg-white text-white rounded-md mr-4 ml-1 w-full flex justify-center p-2 pointer-events-none"
        >
          <span class="icon"
            ><i class="bx bx-envelope text-grey-800 text-2xl mt-1"></i
          ></span>
          <h2 class="title text-grey-800 text-xl font-bold ml-4">Goodstanding</h2>
        </a>
      </div>

      <li
        :class="
          $route.fullPath === '/Applicant/GoodStanding' ? 'list active' : 'list'
        "
        :id="$route.fullPath === '/Applicant/GoodStanding' ? 'activeMenu' : ''"
      >
        <b></b>
        <b></b>
        <a class="ml-4" href="#GoodStanding">
          <router-link class="link" to="/Applicant/GoodStanding">
            <span class="icon"><i class="bx bx-plus"></i></span>
            <span class="text text-white font-bold break-all"
              >Apply for GoodStanding</span
            >
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
        <a class="ml-4" href="#GoodStanding">
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
          $route.fullPath === '/Applicant/GoodStanding/draft'
            ? 'activeMenu'
            : ''
        "
      >
        <b></b>
        <b></b>
        <a class="ml-4" href="#Verification">
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
        <a class="ml-4" href="#GoodStanding">
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
        <a class="ml-4" href="#">
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
        <a class="ml-4" href="#">
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
            ? 'list active mb-20'
            : 'list mb-20'
        "
        :id="
          $route.fullPath === '/Applicant/GoodStanding/declined'
            ? 'activeMenu'
            : ''
        "
      >
        <b></b>
        <b></b>
        <a class="ml-4" href="#">
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
      <router-link class="" to="/menu">
        <a class="last_menu flex justify-center hover:bg-main-400 mt-4">
          <span class="icon"
            ><i class="bx bx-home text-white text-2xl -ml-8 "></i
          ></span>
          <span class="title text-white font-bold ml-2">Home</span>
        </a>
      </router-link>
    </ul>
    <!--End of Goodstanding routes -->
  </div>
</template>

<script>
export default {
  props: ["finalUrl"],
  setup() {
    return {};
  },
};
</script>
