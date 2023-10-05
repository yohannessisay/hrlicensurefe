<template>
  <!-- Sidebar -->
  <reviewer-side-bar>
    <ul class="nav-links">
      <router-link
        to="/admin/dashboard"
        v-if="adminData ? adminData.role.code != 'SA' : ''"
      >
        <li class="mb-2">
          <a href="#Dashboard">
            <i class="bx bx-chart"></i>
            <span class="links_name">Dashboard</span>
          </a>
        </li>
      </router-link>
      <router-link
        to="/admin/newLicense/"
        v-if="adminData ? adminData.role.code != 'SA' : ''"
      >
        <li class="mb-2">
          <a href="#NewLicense">
            <i class="bx bx-certification"></i>
            <span class="links_name">New License</span>
          </a>
        </li>
      </router-link>
      <router-link
        to="/admin/renewal/"
        v-if="adminData ? adminData.role.code != 'SA' : ''"
      >
        <li class="mb-2">
          <a href="#Renewal">
            <i class="bx bx-refresh"></i>
            <span class="links_name">Renewal</span>
          </a>
        </li>
      </router-link>
      <router-link
        to="/admin/goodStanding/"
        v-if="adminData ? adminData.role.code != 'SA' : ''"
      >
        <li class="mb-2">
          <a href="#GoodStanding">
            <i class="bx bx-mail-send"></i>
            <span class="links_name">Good Standing</span>
          </a>
        </li>
      </router-link>
      <router-link
        to="/admin/requests/"
        v-if="adminData ? adminData.role.code == 'ADM' : ''"
      >
        <li class="mb-2">
          <a href="#Requests">
            <i class="bx bx-question-mark"></i>
            <span class="links_name">Requests</span>
          </a>
        </li>
      </router-link>
      <router-link
        to="/admin/verification/"
        v-if="adminData ? adminData.role.code != 'SA' : ''"
      >
        <li class="mb-2">
          <a href="#Verification">
            <i class="bx bx-message-check"></i>
            <span class="links_name">Verification</span>
          </a>
        </li>
      </router-link>

      <router-link
        to="/admin/cpdCertified"
        v-if="adminData ? adminData.role.code != 'SA' : ''"
      >
        <li class="mb-2">
          <a href="#CpdCertified">
            <i class="bx bx-badge-check"></i>
            <span class="links_name">CPD Certified</span>
          </a>
        </li>
      </router-link>

      <router-link
        to="/admin/userManagement"
        v-if="adminData ? adminData.role.code == 'UM' || adminData.role.code == 'SA' : ''"
      >
        <li class="mb-2">
          <a href="#UserManagement">
            <i class="bx bx-user"></i>
            <span class="links_name">User Management</span>
          </a>
        </li>
      </router-link>

      <router-link to="/admin/report">
        <li class="mb-2">
          <a href="#Report">
            <i class="bx bx-table"></i>
            <span class="links_name">Report</span>
          </a>
        </li>
      </router-link>

      <router-link
        to="/admin/importResults"
        v-if="
          adminData
            ? adminData.role.code != 'SA' &&
              adminData.role.code != 'REV' &&
              adminData.expertLevel.code == 'FED'
            : ''
        "
      >
        <li class="mb-2">
          <a href="#ImportResults">
            <i class="bx bx-import"></i>
            <span class="links_name">National Licensure Exam Import</span>
          </a>
        </li>
      </router-link>

      <router-link
        to="/admin/legacyData"
        v-if="adminData ? adminData.role.code != 'SA' : ''"
      >
        <li class="mb-2">
          <a href="#LegacyData">
            <i class="bx bx-skip-previous-circle"></i>
            <span class="links_name">Legacy Data</span>
          </a>
        </li>
      </router-link>

      <router-link
        to="/admin/lookupManagement"
        v-if="
          adminData
            ? adminData.role.code == 'SA' && adminData.expertLevel.code == 'FED'
            : ''
        "
      >
        <li class="mb-2">
          <a href="#LookupManagement">
            <i class="bx bx-desktop"></i>
            <span class="links_name">Lookup Management</span>
          </a>
        </li>
      </router-link>

      <router-link
        to="/admin/lookupManagement/regional/licenseExpirationDate"
        v-if="
          adminData
            ? adminData.role.code == 'SA' && adminData.expertLevel.code == 'REG'
            : ''
        "
      >
        <li class="mb-2">
          <a href="#LookupManagementRegional">
            <i class="bx bx-desktop"></i>
            <span class="links_name">Lookup Management</span>
          </a>
        </li>
      </router-link>

      <router-link to="/admin/statusLog">
        <li class="mb-2">
          <a href="#StatusLog">
            <i class="bx bx-book"></i>
            <span class="links_name">Status Log</span>
          </a>
        </li>
      </router-link>
    </ul>
  </reviewer-side-bar>

  <!-- Sidebar -->
  <section class="home-section">
    <!-- Header -->
    <reviewer-nav-bar>
      <h2>Home</h2>
    </reviewer-nav-bar>
    <!-- Header -->

    <!-- Main Content -->
    <div class="home-content">
      <reviewer-main-content></reviewer-main-content>
    </div>
    <!-- Main Content -->
  </section>
</template>

<script>
import ReviewerNavBar from "./SharedComponents/navBar.vue";
import ReviewerSideBar from "./ReviewerSideNav.vue";
import ReviewerMainContent from "./ReviewerMainContent.vue";
import { useStore } from "vuex";
import { useToast } from "vue-toastification";
export default {
  components: {
    ReviewerNavBar,
    ReviewerSideBar,
    ReviewerMainContent,
  },
  setup() {
    const store = useStore();
    const toast = useToast();
    navigator.browserSpecs = (function () {
      var ua = navigator.userAgent,
        tem,
        M =
          ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
      if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return {
          name: "IE",
          version: tem[1] || "",
        };
      }
      if (M[1] === "Chrome") {
        tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
        if (tem != null)
          return {
            name: tem[1].replace("OPR", "Opera"),
            version: tem[2],
          };
      }
      M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, "-?"];
      if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
      return {
        name: M[0],
        version: M[1],
      };
    })();

    switch (navigator.browserSpecs.name) {
      case "Chrome":
        if (Number(navigator.browserSpecs.version) < 80) {
          toast.warning(
            `Your browser version ${navigator.browserSpecs.version} is below the recomended version for eHPEL, please update before going any further`,
            {
              timeout: 10000,
              position: "bottom-right",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true,
            }
          );
        }
        break;
      case "Opera":
        if (Number(navigator.browserSpecs.version) < 80) {
          toast.warning(
            `Your browser version ${navigator.browserSpecs.version} is below the recomended version for eHPEL, please update before going any further`,
            {
              timeout: 10000,
              position: "bottom-right",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true,
            }
          );
        }
        break;
      case "Edge":
        if (Number(navigator.browserSpecs.version) < 44) {
          toast.warning(
            `Your browser version ${navigator.browserSpecs.version} is below the recomended version for eHPEL, please update before going any further`,
            {
              timeout: 10000,
              position: "bottom-right",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true,
            }
          );
        }
        break;
      case "Firefox":
        if (Number(navigator.browserSpecs.version) < 80) {
          toast.warning(
            `Your browser version ${navigator.browserSpecs.version} is below the recomended version for eHPEL, please update before going any further`,
            {
              timeout: 10000,
              position: "bottom-right",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true,
            }
          );
        }
        break;
      default:
        break;
    }
    const adminData = JSON.parse(localStorage.getItem("allAdminData"));
    store.dispatch("ReviewerSideNav/assignSelectedSideBar", "mainPage");
    let currentMenu = store.getters["ReviewerSideNav/getSelectedSideBar"];

    function updateMenu(menu) {
      currentMenu = menu;
    }
    return {
      currentMenu,
      updateMenu,
      adminData,
    };
  },
};
</script>
