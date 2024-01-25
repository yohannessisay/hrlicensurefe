<template>
  <ul class="mt-5">
    <div class="parentList flex justify-start">
      <a
        href="#"
        class="bg-white text-white rounded-md mr-4 ml-1 w-full flex justify-start p-2 pointer-events-none"
      >
        <span class="icon"
          ><i class="bx bx-recycle text-grey-800 text-2xl mt-1"></i
        ></span>
        <h2 class="title text-grey-800 text-xl font-bold ml-4">Lost License</h2>
      </a>
    </div>

    <li
      :class="$route.fullPath === '/Applicant/LostLicense' ? 'list active' : 'list'"
      :id="$route.fullPath === '/Applicant/LostLicense' ? 'activeMenu' : ''"
    >
      <b></b>
      <b></b>
      <a class="ml-4" href="#LostLicense">
        <router-link class="link" to="/Applicant/LostLicense">
          <span class="icon"><i class="bx bx-plus"></i></span>
          <span class="text text-white font-bold break-all">Lost License Form</span>
        </router-link>
      </a>
    </li>
    <li
      :class="$route.fullPath === '/Applicant/LostLicense/submitted' ? 'list active' : 'list'"
      :id="$route.fullPath === '/Applicant/LostLicense' ? 'activeMenu' : ''"
    >
      <b></b>
      <b></b>
      <a class="ml-4" href="#LostLicenseSubmitted">
        <router-link class="link" to="/Applicant/LostLicense/submitted">
                 <span class="icon"
            ><i
              :class="
                $route.fullPath === '/Applicant/GoodStanding/submitted'
                  ? 'bx bxs-save'
                  : 'bx bx-save'
              "
            ></i
          ></span>
          <span class="text text-white font-bold break-all">Submitted</span>
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
