<template>
  <nav>
    <div class="sidebar-button">
      <slot></slot>
    </div>

    <div class="profile-details">
      <div style="color: #2081f8">
        {{ adminName }}
      </div>

      <div class="flex flex-row">
        <div class="relative inline-block text-left ">
          <a
            class="

              focus:outline-none
            bg-primary-700
              text-lightBlueB-400
              hover:text-gray-800
              w-7
              ml-4
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
              class="w-8 h-8 px-1 py-1 text-white font-bold"
              aria-hidden="true"
            >
              <circle cx="12" cy="8" r="5" />
              <path d="M3,21 h18 C 21,12 3,12 3,21" />
            </svg>
          </a>
          <div
            v-if="showDD == true"
            class="
            bg-primary-600
              
              origin-top-right
              absolute
              right-0
              mt-2
              w-56
              rounded-md
              shadow-lg
             text-white
            
              focus:outline-none
            "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div class="py-1 px-1 " role="none">
              <a
                href="/admin/profile"
                class="
                  block
                  px-4
                  py-2
                  mb-2
                  border-b-4
                  font-bold
                  hover:bg-white
                  hover:text-primary-600
                  text-sm text-white
               
                "
                role="menuitem"
                id="logout"
              >
                <i class="fa fa-user mr-2"></i>
                Manage Profile
              </a>

              <a
                @click="logout"
                class="
                  block
                  px-4
                  py-2
                 
                  font-bold
                  hover:bg-white
                  hover:text-primary-600
                  text-sm text-white
               
                "
                role="menuitem"
                id="logout"
              >
                <i class="fa fa-sign-out mr-2"></i>
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
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  components: {},
  setup() {
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
    let checkedForNotification = JSON.parse(
      localStorage.getItem("checkedForExpired")
    );
    const id = +localStorage.getItem("adminId");
    let notifications = ref([]);

    const showDropDown = () => {
      showDD.value = !showDD.value;
      showUnfinishedDD.value = false;
      showAssignedDD.value = false;
      showFinishedDD.value = false;
      showLicensedDD.value = false;
    };
    const checkForNotification = () => {
      store.dispatch("notification/getReviewerNotification", id).then((res) => {
        let tempData = res && res.data ? res.data : [];

        tempData.forEach((element) => {
          element && element.message
            ? notifications.value.push({
                data: element,
                message: element && element.message ? element.message : "",
                url:
                  element && element.new_license_id
                    ? "/Reviewer/NewLicense"
                    : element && element.renewal_id
                    ? "/Reviewer/Renewal"
                    : element && element.goodstanding_id
                    ? "/Reviewer/Goodstanding"
                    : "",
              })
            : "";
        });
      });
    };
    const logout = () => {
      localStorage.clear();
      store.dispatch("admin/logout");
      router.push({ path: "/admin" });
    };
    onMounted(() => {
      checkForNotification();
    });
    return {
      showDD,
      showDropDown,
      showUnfinishedDD,
      checkForNotification,
      notifications,
      showAssignedDD,
      showFinishedDD,
      showLicensedDD,
      search,
      logout,
      primaryText,
      adminName,
      isUserManager,
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
