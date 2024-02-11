<template>
  <ul class="mt-5">
    <div class="parentList flex justify-start">
      <a
        href="#"
        :class="
          isDarkMode
            ? 'bg-primaryDark text-white rounded-md mr-4 ml-1 w-full flex justify-start p-2 pointer-events-none'
            : 'bg-white text-main-400 rounded-md mr-4 ml-1 w-full flex justify-start p-2 pointer-events-none'
        "
      >
        <span class="icon"
          ><i class="bx bx-certification text-2xl mt-1"></i
        ></span>
        <h2 class="text-xl font-bold ml-4">New License</h2>
      </a>
    </div>

    <li
      v-for="link in links"
      :key="link.id"
      :class="$route.fullPath === link.path ? 'list active' : 'list'"
      :id="$route.fullPath === link.path ? 'activeMenu' : ''"
      :style="link.id === 11 ? 'margin-bottom: 75px !important' : ''"
    >
      <b></b>
      <b></b>
      <a class="ml-4" href="#NewLicense">
        <router-link class="link" :to="link.path">
          <span :class="isDarkMode ? 'icon dark' : 'icon light'"
            ><i :class="link.icon"></i
          ></span>
          <span
            :class="
              isDarkMode
                ? 'text text-primary-200 font-bold dark'
                : 'text text-white font-bold light'
            "
            >{{ link.name }}</span
          >
        </router-link>
      </a>
    </li>

    <router-link class="" to="/menu">
      <a
        :class="
          isDarkMode
            ? 'last_menu flex justify-center  mt-4'
            : 'last_menu flex justify-center hover:bg-main-400 mt-4'
        "
      >
        <span class="icon"
          ><i class="bx bx-home text-white text-2xl -ml-8"></i
        ></span>
        <span class="title text-white font-bold ml-2">Home</span>
      </a>
    </router-link>
  </ul>
</template>
<script>
import { ref } from "vue";
export default {
  props: ["isDarkMode"],
  setup() {
    let links = ref([
      {
        id: 1,
        name: "Apply For New License",
        path: "/Applicant/NewLicense",
        icon: "bx bx-plus",
      },
      {
        id: 2,
        name: "Submitted",
        path: "/Applicant/NewLicense/submitted",
        icon: "bx bxs-save",
      },
      {
        id: 3,
        name: "Draft",
        path: "/Applicant/NewLicense/draft",
        icon: "bx bxs-paste",
      },
      {
        id: 4,
        name: "Withdraw",
        path: "/Applicant/NewLicense/withdraw",
        icon: "bx bxs-x-circle",
      },
      {
        id: 5,
        name: "In Review",
        path: "/Applicant/NewLicense/inReview",
        icon: "bx bx-refresh",
      },
      {
        id: 6,
        name: "Approved",
        path: "/Applicant/NewLicense/approved",
        icon: "bx bxs-badge-check",
      },
      {
        id: 7,
        name: "Declined",
        path: "/Applicant/NewLicense/declined",
        icon: "bx bxs-shield-x",
      },
      {
        id: 8,
        name: "Under Supervision",
        path: "/Applicant/NewLicense/underSupervision",
        icon: "bx bx-glasses",
      },
      {
        id: 9,
        name: "Returned",
        path: "/Applicant/NewLicense/returned",
        icon: "bx bx-rotate-left",
      },
      {
        id: 10,
        name: "Suspend",
        path: "/Applicant/NewLicense/suspended",
        icon: "bx bx-stop-circle",
      },
      {
        id: 11,
        name: "Revoked",
        path: "/Applicant/NewLicense/revoked",
        icon: "bx bx-trash-alt",
      },
    ]);
    return {
      links,
    };
  },
};
</script>
