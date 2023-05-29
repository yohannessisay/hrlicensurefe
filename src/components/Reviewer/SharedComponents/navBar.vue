<template>
  <nav>
    <div class="sidebar-button">
      <slot></slot>
    </div>

    <div class="profile-details">
      <span
        :class="
          notifications && notifications.length > 0
            ? 'cursor-pointer notifIcon mr-8'
            : 'cursor-pointer mr-8'
        "
        v-on:click="showNotifications()"
        ><i
          class="fa fa-bell text-primary-600 text-2xl
              "
        ></i
      ></span>

      <div style="color: #2081f8">
        {{ adminName }}
      </div>

      <div class="flex flex-row">
        <div
          v-if="showNotif == true"
          class="
              origin-top-right
              absolute
              right-0
              sm:w-40
              lg:w-64
              mt-10
              
              p-4
              rounded-md
              shadow-lg
              bg-white
              focus:outline-none
            "
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <span v-if="notifications && notifications.length > 0">
            <li
              class="text-primary-600 cursor-pointer hover:underline  border-b-4"
              v-for="notif in notifications"
              :key="notif"
            >
              <h6 @click="updateNotif(notif)">
                <span class="text-grey-800">{{
                  notif.data ? notif.data.createdAt.slice(0, 10) : ""
                }}</span>
                {{ notif && notif.message ? notif.message : "" }}
              </h6>
            </li>
          </span>
          <span v-else>No Notifications</span>
        </div>
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
    let showNotif = ref(false);
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
    const showNotifications = () => {
      showNotif.value = !showNotif.value;
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
                    ? "/admin/newLicense"
                    : element && element.renewal_id
                    ? "/admin/renewal"
                    : element && element.goodstanding_id
                    ? "/admin/goodStanding"
                    : "",
              })
            : "";
        });
      });
    };
    const updateNotif = (notifData) => {
      router.push({ path: notifData.url.toString() });
      showNotif.value = false;
      store
        .dispatch("notification/updateReviewerNotification", notifData.data)
        .then(() => {
          checkedForNotification();
        })
        .catch((err) => {
          console.log(err);
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
      showNotif,
      updateNotif,
      showDropDown,
      showNotifications,
      showUnfinishedDD,
      checkForNotification,
      checkedForNotification,
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
.notifIcon {
  animation: pulse 2s infinite;
  border-radius: 50%;
  margin-right: 35px;
}
@-webkit-keyframes pulse {
  0% {
    -webkit-box-shadow: 0 0 0 0 #ffc400;
  }
  70% {
    -webkit-box-shadow: 0 0 0 10px #ffc400;
  }
  100% {
    -webkit-box-shadow: 0 0 0 0 #ffc400;
  }
}
@keyframes pulse {
  0% {
    -moz-box-shadow: 0 0 0 0 #ffc400;
    color: #fcca2946;
    box-shadow: 0 0 0 0 rgba(244, 157, 22, 1);
  }
  70% {
    -moz-box-shadow: 0 0 0 10px #ffc400;

    box-shadow: 0 0 0 10px rgba(244, 157, 22, 0);
  }
  100% {
    -moz-box-shadow: 0 0 0 0 #ffc400;
    box-shadow: 0 0 0 0 rgba(244, 157, 22, 0);
  }
}
.toggle-label {
  position: relative;
}
.toggle-label:before {
  position: absolute;
  top: 0.125rem;
  left: 0.125rem;
  display: block;
  content: "";
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 9999%;
  background-color: white;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 40%;
  background-image: url('data:image/svg+xml;charset=UTF-8,<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 240 240" style="enable-background:new 0 0 240 240" xml:space="preserve"><g><path d="M58.57,25.81c-2.13-3.67-0.87-8.38,2.8-10.51c3.67-2.13,8.38-0.88,10.51,2.8l9.88,17.1c2.13,3.67,0.87,8.38-2.8,10.51 c-3.67,2.13-8.38,0.88-10.51-2.8L58.57,25.81L58.57,25.81z M120,51.17c19.01,0,36.21,7.7,48.67,20.16 C181.12,83.79,188.83,101,188.83,120c0,19.01-7.7,36.21-20.16,48.67c-12.46,12.46-29.66,20.16-48.67,20.16 c-19.01,0-36.21-7.7-48.67-20.16C58.88,156.21,51.17,139.01,51.17,120c0-19.01,7.7-36.21,20.16-48.67 C83.79,58.88,101,51.17,120,51.17L120,51.17z M158.27,81.73c-9.79-9.79-23.32-15.85-38.27-15.85c-14.95,0-28.48,6.06-38.27,15.85 c-9.79,9.79-15.85,23.32-15.85,38.27c0,14.95,6.06,28.48,15.85,38.27c9.79,9.79,23.32,15.85,38.27,15.85 c14.95,0,28.48-6.06,38.27-15.85c9.79-9.79,15.85-23.32,15.85-38.27C174.12,105.05,168.06,91.52,158.27,81.73L158.27,81.73z M113.88,7.71c0-4.26,3.45-7.71,7.71-7.71c4.26,0,7.71,3.45,7.71,7.71v19.75c0,4.26-3.45,7.71-7.71,7.71 c-4.26,0-7.71-3.45-7.71-7.71V7.71L113.88,7.71z M170.87,19.72c2.11-3.67,6.8-4.94,10.48-2.83c3.67,2.11,4.94,6.8,2.83,10.48 l-9.88,17.1c-2.11,3.67-6.8,4.94-10.48,2.83c-3.67-2.11-4.94-6.8-2.83-10.48L170.87,19.72L170.87,19.72z M214.19,58.57 c3.67-2.13,8.38-0.87,10.51,2.8c2.13,3.67,0.88,8.38-2.8,10.51l-17.1,9.88c-3.67,2.13-8.38,0.87-10.51-2.8 c-2.13-3.67-0.88-8.38,2.8-10.51L214.19,58.57L214.19,58.57z M232.29,113.88c4.26,0,7.71,3.45,7.71,7.71 c0,4.26-3.45,7.71-7.71,7.71h-19.75c-4.26,0-7.71-3.45-7.71-7.71c0-4.26,3.45-7.71,7.71-7.71H232.29L232.29,113.88z M220.28,170.87 c3.67,2.11,4.94,6.8,2.83,10.48c-2.11,3.67-6.8,4.94-10.48,2.83l-17.1-9.88c-3.67-2.11-4.94-6.8-2.83-10.48 c2.11-3.67,6.8-4.94,10.48-2.83L220.28,170.87L220.28,170.87z M181.43,214.19c2.13,3.67,0.87,8.38-2.8,10.51 c-3.67,2.13-8.38,0.88-10.51-2.8l-9.88-17.1c-2.13-3.67-0.87-8.38,2.8-10.51c3.67-2.13,8.38-0.88,10.51,2.8L181.43,214.19 L181.43,214.19z M126.12,232.29c0,4.26-3.45,7.71-7.71,7.71c-4.26,0-7.71-3.45-7.71-7.71v-19.75c0-4.26,3.45-7.71,7.71-7.71 c4.26,0,7.71,3.45,7.71,7.71V232.29L126.12,232.29z M69.13,220.28c-2.11,3.67-6.8,4.94-10.48,2.83c-3.67-2.11-4.94-6.8-2.83-10.48 l9.88-17.1c2.11-3.67,6.8-4.94,10.48-2.83c3.67,2.11,4.94,6.8,2.83,10.48L69.13,220.28L69.13,220.28z M25.81,181.43 c-3.67,2.13-8.38,0.87-10.51-2.8c-2.13-3.67-0.88-8.38,2.8-10.51l17.1-9.88c3.67-2.13,8.38-0.87,10.51,2.8 c2.13,3.67,0.88,8.38-2.8,10.51L25.81,181.43L25.81,181.43z M7.71,126.12c-4.26,0-7.71-3.45-7.71-7.71c0-4.26,3.45-7.71,7.71-7.71 h19.75c4.26,0,7.71,3.45,7.71,7.71c0,4.26-3.45,7.71-7.71,7.71H7.71L7.71,126.12z M19.72,69.13c-3.67-2.11-4.94-6.8-2.83-10.48 c2.11-3.67,6.8-4.94,10.48-2.83l17.1,9.88c3.67,2.11,4.94,6.8,2.83,10.48c-2.11,3.67-6.8,4.94-10.48,2.83L19.72,69.13L19.72,69.13z"/></g></svg>');
  transition: transform 0.15s cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.toggle-checkbox:checked + .toggle-label:before {
  transform: translateX(1.5rem);
  background-image: url('data:image/svg+xml;charset=UTF-8,<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 122.89" style="enable-background:new 0 0 122.88 122.89" xml:space="preserve"><g><path d="M49.06,1.27c2.17-0.45,4.34-0.77,6.48-0.98c2.2-0.21,4.38-0.31,6.53-0.29c1.21,0.01,2.18,1,2.17,2.21 c-0.01,0.93-0.6,1.72-1.42,2.03c-9.15,3.6-16.47,10.31-20.96,18.62c-4.42,8.17-6.1,17.88-4.09,27.68l0.01,0.07 c2.29,11.06,8.83,20.15,17.58,25.91c8.74,5.76,19.67,8.18,30.73,5.92l0.07-0.01c7.96-1.65,14.89-5.49,20.3-10.78 c5.6-5.47,9.56-12.48,11.33-20.16c0.27-1.18,1.45-1.91,2.62-1.64c0.89,0.21,1.53,0.93,1.67,1.78c2.64,16.2-1.35,32.07-10.06,44.71 c-8.67,12.58-22.03,21.97-38.18,25.29c-16.62,3.42-33.05-0.22-46.18-8.86C14.52,104.1,4.69,90.45,1.27,73.83 C-2.07,57.6,1.32,41.55,9.53,28.58C17.78,15.57,30.88,5.64,46.91,1.75c0.31-0.08,0.67-0.16,1.06-0.25l0.01,0l0,0L49.06,1.27 L49.06,1.27z"/></g></svg>');
}

.toggle.slim .toggle-label:before {
  top: -0.15rem;
  left: 0;
}
.toggle.slim .toggle-checkbox:checked + .toggle-label:before {
  transform: translateX(1.75rem);
}
.toggle.colour .toggle-label {
  background-color: #000000;
}
.toggle.colour .toggle-checkbox:checked + .toggle-label {
  background-color: #07677e;
}
</style>
