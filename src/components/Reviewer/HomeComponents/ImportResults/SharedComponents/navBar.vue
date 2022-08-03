  <template>
  <nav id="mainNav">
    <div class="sidebar-button">
     <slot></slot>
    </div>

    <div class="profile-details">
      <div style="color: #2081f8">
        {{ adminName }}
      </div>
      <div class="flex flex-row">
        <div class="relative inline-block text-left">
          <a
            class="
              focus:outline-none
              bg-lightBlueB-300
              text-lightBlueB-400
              hover:text-gray-800
              w-7
              h-7
              rounded-full
              flex
              items-center
              justify-center
            "
            id="options-menu"
            aria-expanded="true"
            aria-haspopup="true"
            href="#"
            v-on:click="showDropDown()"
          >
            <svg
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              class="w-8 h-8 px-1 py-1"
              aria-hidden="true"
            >
              <circle cx="12" cy="8" r="5" />
              <path d="M3,21 h18 C 21,12 3,12 3,21" />
            </svg>
          </a>
          <div
            v-if="showDD == true"
            class="
              origin-top-right
              absolute
              right-0
              mt-2
              w-56
              rounded-md
              shadow-lg
              bg-white
              focus:outline-none
            "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div class="py-1" role="none">
              <a
                @click="logout()"
                class="
                  block
                  px-4
                  py-2
                  text-sm text-blue-100
                  hover:bg-gray-100 hover:text-gray-900
                "
                role="menuitem"
                id="logout"
              >
                Sign Out
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script scoped>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  components: {},
  props: {},

  computed: {
    changeSelectedSideBar(menu) {
      return menu;
    },
  },
  setup(props, { emit }) {
    const router = useRouter();
    const store = useStore();
    let showDD = ref(false);
    let showUnfinishedDD = ref(false);
    let showAssignedDD = ref(false);
    let showFinishedDD = ref(false);
    let showLicensedDD = ref(false);
    let search = ref("");
    let primaryText = ref("");
    let isUserManager = ref(false);
    const adminName = JSON.parse(localStorage.getItem("allAdminData")).name;


    const navigateToHomePage = () => {
      if (loggedInAdminRole === "UM") {
        return;
      }
      if (router.currentRoute._value.path === "/admin/review") {
        emit("navigateToHome", "newLicenseUnassigned");
      } else {
        router.push("/admin/review");
      }
    };

    let showAdminCreate = false;
    let isSuperAdmin = ref(false);
    const loggedInAdminRole = localStorage.getItem("role");
    loggedInAdminRole === "UM"
      ? (showAdminCreate = true)
      : (showAdminCreate = false);

    loggedInAdminRole === "ADM"
      ? (isSuperAdmin.value = true)
      : (isSuperAdmin.value = false);

    if (isSuperAdmin.value == false) {
      primaryText.value = "text-primary-300";
    }
    const showDropDown = () => {
      showDD.value = !showDD.value;
      showUnfinishedDD.value = false;
      showAssignedDD.value = false;
      showFinishedDD.value = false;
      showLicensedDD.value = false;
    };

    const showUnfinishedDropDown = () => {
      showUnfinishedDD.value = !showUnfinishedDD.value;
      showDD.value = false;
      showAssignedDD.value = false;
      showFinishedDD.value = false;
      showLicensedDD.value = false;
    };
    const showAssignedDropDown = () => {
      showAssignedDD.value = !showAssignedDD.value;
      showDD.value = false;
      showUnfinishedDD.value = false;
      showFinishedDD.value = false;
      showLicensedDD.value = false;
    };

    const showFinishedDropDown = () => {
      showFinishedDD.value = !showFinishedDD.value;
      showAssignedDD.value = false;
      showDD.value = false;
      showUnfinishedDD.value = false;
      showLicensedDD.value = false;
    };
    const showLicensedDropDown = () => {
      showLicensedDD.value = !showLicensedDD.value;
      showAssignedDD.value = false;
      showDD.value = false;
      showUnfinishedDD.value = false;
      showFinishedDD.value = false;
    };
    const logout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("adminEmail");
      localStorage.removeItem("allAdminData");
      localStorage.removeItem("adminId");
      localStorage.removeItem("role");
      store.dispatch("admin/logout");
      router.push({ path: "/admin" });
    };
    return {
      showDD,
      showDropDown,
      showUnfinishedDD,
      showAssignedDD,
      showFinishedDD,
      showLicensedDD,
      showUnfinishedDropDown,
      showAssignedDropDown,
      showFinishedDropDown,
      showLicensedDropDown,
      search,
      logout,
      showAdminCreate,
      isSuperAdmin,
      primaryText,
      adminName,
      isUserManager,
      navigateToHomePage,
    };
  },
};
</script>
<style lang="postcss" scoped>
#logout {
  cursor: pointer;
}
.width-548 {
  width: 548px;
}
.width-8 {
  width: 22px;
}
.width-small {
  width: 8px;
}
.height-8 {
  height: 22px;
}
h3 {
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
  background: linear-gradient(-85deg, #3674b9, #b5b173);
  -webkit-background-clip: text;
}
hr {
  width: 32px;
  height: 3px;
  border-radius: 3px;
}
a {
  cursor: pointer;
}
</style>
