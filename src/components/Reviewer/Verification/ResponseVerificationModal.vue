<template>
  <div
    class="
      card-wrapper
      sm:rounded-lg
      w-full
      p-large
      flex flex-col
      justify-center
      items-center
      mt-5
    "
  >
    <div class="float-right mb-8">
      <button
        class="text-right mr-2 mt-2 text-primary-600"
        @click="$emit('closeModal', false)"
        variant="rounded"
      >
        <i class="fa fa-close"></i>
      </button>
    </div>

    <div class="bg-white blue-box-shadow-light rounded w-11/12 p-5">
      <Title message="Respond to verification" />
<slot></slot>
    </div>
  </div>
  <ErrorFlashMessage :message="message.errorMessage" v-if="response.error" />
  <FlashMessage
    message="Successfully requested verification"
    v-if="response.success"
  />
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import store from "../../../store";
import Title from "@/sharedComponents/TitleWithIllustration";
import ErrorFlashMessage from "@/sharedComponents/ErrorFlashMessage";
import Spinner from "@/sharedComponents/Spinner";
import FlashMessage from "@/sharedComponents/FlashMessage";

export default {
  components: {
    Title,
    Spinner,
    ErrorFlashMessage,
    FlashMessage,
  },
props: ['item'],
  setup({ emit }) {
    let users = ref([]);
    let filteredUsers = ref([]);
    let selectedUser = ref();
    let showForm = ref(false);
    let searchInput = ref("");
    let regions = ref([]);
    let region = ref();
    let showCustomLookup = ref(false);
    let licenseNumber = ref("");
    let loggedInAdmin = JSON.parse(localStorage.getItem("allAdminData"));
    let message = ref({
      successMessage: "",
      errorMessage: "",
    });
    let response = ref({
      success: false,
      error: false,
    });

    onMounted(async () => {
      showForm.value = true;
    });


    return {
      users,
      selectedUser,
      showForm,
      searchInput,
      filteredUsers,
      region,
      response,
      regions,
      showCustomLookup,
      licenseNumber,
      message,
    };
  },
};
</script>

<style scoped>
.custom-lookup {
  max-height: 100px;
}
</style>
