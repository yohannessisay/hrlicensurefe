<template>
  <div class="side-navbar">
    <router-link class="link" to="/menu">
      <div class="flex justify-center p-4 cursor-pointer" style="border-bottom: 2px solid white;margin-top:-5px">
        <img src="../../../../assets/image.png" style="height: 40px; width: 40px" alt="" srcset="" />
        <span class="text-white font-bold mt-2 ml-2" id="header-text">EHPL</span>
      </div>
    </router-link>

    <ul class="mt-12">
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
      <li :class="
        $route.fullPath === '/Applicant/Renewal' ? 'list active' : 'list'
      ">
        <b></b>
        <b></b>
        <a href="#Renewal">
          <router-link class="link" to="/Applicant/Renewal">
            <span class="icon"><i class="bx bx-certification"></i></span>
            <span class="text text-white font-bold">Renewal</span>
          </router-link>
        </a>
      </li>

      <li :class="
        $route.fullPath === '/Applicant/Renewal/submitted'
          ? 'list active'
          : 'list'
      ">
        <b></b>
        <b></b>
        <a href="#Renewal">
          <router-link class="link" to="/Applicant/Renewal/submitted">
            <span class="icon"><i :class="
              $route.fullPath === '/Applicant/Renewal/submitted'
                ? 'bx bxs-save'
                : 'bx bx-save'
            "></i></span>
            <span class="text text-white font-bold">Submitted</span>
          </router-link>
        </a>
      </li>
      <li :class="
        $route.fullPath === '/Applicant/Renewal/draft'
          ? 'list active'
          : 'list'
      ">
        <b></b>
        <b></b>
        <a href="#Verification">
          <router-link class="link" to="/Applicant/Renewal/draft">
            <span class="icon"><i :class="
              $route.fullPath === '/Applicant/Renewal/draft'
                ? 'bx bxs-paste'
                : 'bx bx-paste'
            "></i></span>
            <span class="text text-white font-bold">Draft</span>
          </router-link>
        </a>
      </li>
      <li :class="
        $route.fullPath === '/Applicant/Renewal/withdraw'
          ? 'list active'
          : 'list'
      ">
        <b></b>
        <b></b>
        <a href="#GoodStanding">
          <router-link class="link" to="/Applicant/Renewal/withdraw">
            <span class="icon"><i :class="
              $route.fullPath === '/Applicant/Renewal/withdraw'
                ? 'bx bxs-x-circle'
                : 'bx bx-x-circle'
            "></i></span>
            <span class="text text-white font-bold hover:text-black">Withdraw</span>
          </router-link>
        </a>
      </li>

      <li :class="
        $route.fullPath === '/Applicant/Renewal/inReview'
          ? 'list active'
          : 'list'
      ">
        <b></b>
        <b></b>
        <a href="#GoodStanding">
          <router-link class="link" to="/Applicant/Renewal/inReview">
            <span class="icon"><i :class="
              $route.fullPath === '/Applicant/Renewal/inReview'
                ? 'bx bxs-x-circle'
                : 'bx bx-x-circle'
            "></i></span>
            <span class="text text-white font-bold hover:text-black">In Review</span>
          </router-link>
        </a>
      </li>

      <li :class="
        $route.fullPath === '/Applicant/Renewal/approved'
          ? 'list active'
          : 'list'
      ">
        <b></b>
        <b></b>
        <a href="#">
          <router-link class="link" to="/Applicant/Renewal/approved">
            <span class="icon"><i :class="
              $route.fullPath === '/Applicant/Renewal/approved'
                ? 'bx bxs-badge-check'
                : 'bx bx-badge-check'
            "></i></span>
            <span class="text text-white font-bold">Approved</span>
          </router-link>
        </a>
      </li>

      <li :class="
        $route.fullPath === '/Applicant/Renewal/declined'
          ? 'list active'
          : 'list'
      ">
        <b></b>
        <b></b>
        <a href="">
          <router-link class="link" to="/Applicant/Renewal/declined">
            <span class="icon"><i :class="
              $route.fullPath === '/Applicant/Renewal/declined'
                ? 'bx bxs-shield-x'
                : 'bx bx-shield-x'
            "></i></span>
            <span class="text text-white font-bold">Declined</span>
          </router-link>
        </a>
      </li>

      <li :class="
        $route.fullPath === '/Applicant/Renewal/underSupervision'
          ? 'list active'
          : 'list'
      ">
        <b></b>
        <b></b>
        <a href="#">
          <router-link class="link" to="/Applicant/Renewal/underSupervision">
            <span class="icon"><i :class="
              $route.fullPath === '/Applicant/Renewal/underSupervision'
                ? 'bx bx-glasses'
                : 'bx bx-glasses'
            "></i></span>
            <span class="text text-white font-bold">Under Supervision</span>
          </router-link>
        </a>
      </li>

      <li :class="
        $route.fullPath === '/Applicant/Renewal/returned'
          ? 'list active'
          : 'list'
      ">
        <b></b>
        <b></b>
        <a href="#">
          <router-link class="link" to="/Applicant/Renewal/returned">
            <span class="icon"><i :class="
              $route.fullPath === '/Applicant/Renewal/returned'
                ? 'bx bx-glasses'
                : 'bx bx-glasses'
            "></i></span>
            <span class="text text-white font-bold">Returned</span>
          </router-link>
        </a>
      </li>

      <li :class="
        $route.fullPath === '/Applicant/Renewal/suspended'
          ? 'list active'
          : 'list'
      ">
        <b></b>
        <b></b>
        <a href="#">
          <router-link class="link" to="/Applicant/Renewal/suspended">
            <span class="icon"><i :class="
              $route.fullPath === '/Applicant/Renewal/suspended'
                ? 'bx bx-glasses'
                : 'bx bx-glasses'
            "></i></span>
            <span class="text text-white font-bold">Suspended</span>
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
        <a href="#">
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
    </ul>
  </div>
</template>

<script>
</script>