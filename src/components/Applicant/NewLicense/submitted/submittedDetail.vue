<template>
  <main-content>
    <div
      class="pages-navbar flex justify-center h-12 rounded-sm"
      style="width: 98% !important"
    >
      <div class="profile p-4">
        <h2 class="text-white">License Detail</h2>
      </div>
    </div>
    <div class="container my-12 mx-auto px-4 md:px-12">







    </div>
  </main-content>
</template>
  
  <script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import MainContent from "../sharedComponents/Menu.vue";
import { googleApi } from "@/composables/baseURL";
import { useRoute } from "vue-router";
export default {
  components: { MainContent },
  setup() {
    const route = useRoute(); 
    let store = useStore();
    let newLicense = ref({});
    let userInfo = ref({});
    onMounted(() => {
      userInfo.value = JSON.parse(window.localStorage.getItem("personalInfo"));
      store.dispatch("newlicense/getNewLicenseApplication",route.params.id).then((res) => {
        ge.value = res.data.data;
        




      });
    });

    return {
      newLicense,
      googleApi,
      userInfo,
    };
  },
};
</script>
  