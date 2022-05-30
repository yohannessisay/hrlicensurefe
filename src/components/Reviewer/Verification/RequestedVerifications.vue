<template>
  <div class=" p-5">
    <h2 class="align-middle ">Verification Requests</h2>
    <div class="float-right">
      <button @click="showNewVerificationModal()">Request Verifications</button>
    </div>
    <div></div>
    <Modal v-if="showRequestVerificationModal">
      <RequestVerification @closeModal="closeModal" />
    </Modal>
  </div>
</template>

<script>
import "@ocrv/vue-tailwind-pagination/dist/style.css";
import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";
import {ref} from "@vue/reactivity";
import {onMounted} from "@vue/runtime-core";
import {useStore} from "vuex";
import {useRoute, useRouter} from "vue-router";
import Spinner from "@/sharedComponents/Spinner";
import Modal from "@/sharedComponents/Modal";
import RequestVerification from "@/components/Reviewer/Verification/RequestVerification.vue";

import ReviewerNavBar from "@/components/Reviewer/ReviewerNavBar";

export default {
  components: {
    Spinner,
    VueTailwindPagination,
    RequestVerification,
    Modal,
  },
  setup() {
    let showRequestVerificationModal = ref(false);
    const showNewVerificationModal = () => {
      showRequestVerificationModal.value = true;
    };
    const closeModal = () => {
      showRequestVerificationModal.value = false;
    };
    return {
      showRequestVerificationModal,
      showNewVerificationModal,
      closeModal,
    };
  },
};
</script>

<style></style>
