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
        <h2 class="title text-grey-800 text-xl font-bold ml-4">New License</h2>
      </a>
    </div>

    <li
      :class="$route.fullPath === '/Applicant/NewLicense' ? 'list active' : 'list mt-8'"
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
        $route.fullPath === '/Applicant/NewLicense/submitted' ? 'list active' : 'list'
      "
      :id="$route.fullPath === '/Applicant/NewLicense/submitted' ? 'activeMenu' : ''"
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
      :class="$route.fullPath === '/Applicant/NewLicense/draft' ? 'list active' : 'list'"
      :id="$route.fullPath === '/Applicant/NewLicense/draft' ? 'activeMenu' : ''"
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
        $route.fullPath === '/Applicant/NewLicense/withdraw' ? 'list active' : 'list'
      "
      :id="$route.fullPath === '/Applicant/NewLicense/withdraw' ? 'activeMenu' : ''"
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
          <span class="text text-white font-bold hover:text-black">Withdraw</span>
        </router-link>
      </a>
    </li>

    <li
      :class="
        $route.fullPath === '/Applicant/NewLicense/inReview' ? 'list active' : 'list'
      "
      :id="$route.fullPath === '/Applicant/NewLicense/inReview' ? 'activeMenu' : ''"
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
        $route.fullPath === '/Applicant/NewLicense/approved' ? 'list active' : 'list'
      "
      :id="$route.fullPath === '/Applicant/NewLicense/approved' ? 'activeMenu' : ''"
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
        $route.fullPath === '/Applicant/NewLicense/declined' ? 'list active' : 'list'
      "
      :id="$route.fullPath === '/Applicant/NewLicense/declined' ? 'activeMenu' : ''"
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
        $route.fullPath === '/Applicant/NewLicense/underSupervision' ? 'activeMenu' : ''
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
        $route.fullPath === '/Applicant/NewLicense/returned' ? 'list active' : 'list'
      "
      :id="$route.fullPath === '/Applicant/NewLicense/returned' ? 'activeMenu' : ''"
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
        $route.fullPath === '/Applicant/NewLicense/suspended' ? 'list active' : 'list'
      "
      :id="$route.fullPath === '/Applicant/NewLicense/suspended' ? 'activeMenu' : ''"
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
        $route.fullPath === '/Applicant/NewLicense/revoked' ? 'list active' : 'list'
      "
      style="margin-bottom: 75px !important"
      :id="$route.fullPath === '/Applicant/NewLicense/revoked' ? 'activeMenu' : ''"
    >
      <b></b>
      <b></b>
      <a class="ml-4" href="#">
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
        <span class="icon"><i class="bx bx-home text-white text-2xl -ml-8"></i></span>
        <span class="title text-white font-bold ml-2">Home</span>
      </a>
    </router-link>
  </ul>
</template>
