<template>
  <main-content>
    <div class="pages-navbar flex justify-center h-12 rounded-sm"  style="width: 98% !important">
      <div class="profile p-4">
        <h2 class="text-white">Your submitted applications</h2>
      </div>
    </div>
    <div class="container my-12 mx-auto px-4 md:px-12">
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <!-- Column -->
        <div
          class="
            bg-main-400
            my-1
            px-1
            w-full
            md:w-1/2
            lg:my-4 lg:px-4 lg:w-1/4
            shadow-2xl
            rounded-lg
          "
        >
          <!-- Article -->

          <h1 class="text-white border-b-2">Department Name</h1>

          <header
            class="flex items-center justify-between leading-tight p-2 md:p-2"
          >
            <h1 class="text-lg">
              <a class="no-underline hover:underline text-white" href="#">
                Profession Name
              </a>
            </h1>
            <p class="text-white text-sm">Profession Name</p>
          </header>
          <div
            class="flex items-center justify-between leading-tight p-2 md:p-2"
          >
            <h1 class="text-lg">
              <a class="no-underline hover:underline text-white" href="#">
                Certified Date
              </a>
            </h1>
            <p class="text-white text-sm">Certified Date</p>
          </div>
          <div
            class="flex items-center justify-between leading-tight p-2 md:p-2"
          >
            <h1 class="text-lg">
              <a class="no-underline hover:underline text-white" href="#">
                Expiry Date
              </a>
            </h1>
            <p class="text-white text-sm">Expiry Date</p>
          </div>
          <div
            class="flex items-center justify-between leading-tight p-2 md:p-2"
          >
            <h1 class="text-lg">
              <a class="no-underline hover:underline text-white" href="#">
                Other Kotets
              </a>
            </h1>
            <p class="text-white text-sm">kotets</p>
          </div>

          <!-- END Article -->
        </div>
        <!-- END Column -->
      </div>
    </div>
  </main-content>
</template>
  
  <script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import MainContent from "./sharedComponents/Menu.vue";
import "../../../styles/applicant.css";
export default {
  components: { MainContent },
  setup() {
    let store = useStore();
    let newLicense = ref({});
    onMounted(() => {
      store.dispatch("newlicense/getNewLicense").then((res) => {
        newLicense.value = res.data.data;
        if (newLicense.value) {
          newLicense.value = newLicense.value.filter(function (e) {
            return (
              e.applicationStatus.code.includes("UPD") ||
              e.applicationStatus.code.includes("SUB")
            );
          });
        }
      });
    });

    return {
      newLicense,
    };
  },
};
</script>
  