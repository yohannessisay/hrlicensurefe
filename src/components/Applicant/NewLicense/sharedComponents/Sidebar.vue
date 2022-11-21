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
          $route.fullPath === '/Applicant/NewLicense' ? 'list active' : 'list'
        "
        :id="$route.fullPath === '/Applicant/NewLicense' ? 'activeMenu' : ''"
      >
        <b></b>
        <b></b>
        <a href="#NewLicense">
          <router-link class="link" to="/Applicant/NewLicense">
            <span class="icon"><i class="bx bx-certification"></i></span>
            <span class="text text-white font-bold">New License</span>
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
        <a href="#Renewal">
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
        <a href="#Verification">
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
        <a href="#GoodStanding">
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
        <a href="#">
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
        <a href="#">
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
        <a href="#">
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
        <a href="#">
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
        <a href="#">
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
        <a href="#">
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
        <a href="#">
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
        <a href="#">
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
    </ul>
  </div>
</template>

<script>
</script>