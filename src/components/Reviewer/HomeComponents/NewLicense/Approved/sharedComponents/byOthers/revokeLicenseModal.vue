<template>
  <div
    class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
    id="revokeLicenseOther"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="revokeLicenseOtherLabel"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-dialog-centered modal-md relative w-auto pointer-events-none"
    >
      <div
        class="modal-content border-none relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current justify-center"
      >
        <div
          class="modal-header flex flex-shrink-0 items-center justify-center p-2 rounded-t-md border-b border-grey-100"
        >
          <label class="mb-4 text-lg text-red-300 font-bold">Revoke License</label>
        </div>

        <div class="modal-body relative p-4">
          <div class="container px-6 mx-auto">
            <section class="text-gray-800">
              <div class="flex justify-center">
                <div class="text-center lg:max-w-3xl md:max-w-xl"></div>
              </div>
              <div class="vld-parent">
                <loading
                  :active="isLoading"
                  :can-cancel="true"
                  :is-full-page="true"
                  :color="'#2F639D'"
                  :opacity="0.7"
                ></loading>
                <div class="flex flex-wrap justify-center">
                  <label for="" class="text-lg text-primary-600 font-bold">Remark</label>
                </div>
                <div class="flex flex-wrap justify-center">
                  <textarea
                    class="w-full shadow-inner p-4 border-grey-100"
                    placeholder="Write a remark note of why the license is being revoked."
                    rows="6"
                    v-model="remark"
                  ></textarea>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div
          class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-center border-t border-grey-100 rounded-b-md"
        >
          <button
            type="button"
            class="inline-block px-6 text-white font-medium text-xs leading-tight uppercase rounded bg-red-300 hover:bg-white hover:text-red-300 hover: focus:bg-purple-700 focus: focus:outline-none focus:ring-0 active:bg-purple-800 active: transition duration-150 ease-in-out"
            @click="revoke()"
          >
            <i class="fa fa-times-circle"></i>
            Revoke
          </button>
          <button
            type="button"
            class="inline-block px-6 text-white font-medium text-xs bg-primary-700 leading-tight uppercase rounded hover:border-primary-600 hover:bg-white hover:text-primary-700 transition duration-150 ease-in-out"
            data-bs-dismiss="modal"
          >
            <i class="fa fa-times-circle"></i>
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useStore } from "vuex";

import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import { useToast } from "vue-toastification";

export default {
  props: ["modalData"],
  computed: {},
  components: { Loading },
  setup(props) {
    let showFlash = ref(false);
    let showErrorFlash = ref(false);
    let remark = ref("");
    let isLoading = ref(false);
    const store = useStore();
    const toast = useToast();
    const revoke = () => {
      let revokedData = {
        data: { ...props.modalData.data, remark: remark.value },
        action: "RevokeEvent",
      };
      let smsData = {
        recipients: [
          revokedData.data && revokedData.data.applicant
            ? "251" + revokedData.data.applicant.phoneNumber
            : "",
        ],
        message:
          revokedData.data && revokedData.data.profile
            ? "Dear " +
              revokedData.data.profile.name +
              " " +
              revokedData.data.profile.fatherName +
              ", Your license with license number " +
              revokedData.data.newLicenseCode +
              "has been revoked.Please visit nearest office or contact your reviewer if you have any question. Thank you for using eHPEL,https://www.hrl.moh.gov.et"
            : "",
      };
      isLoading.value = true;
      store
        .dispatch("reviewer/editNewLicense", revokedData)
        .then(() => {
          isLoading.value = false;

          store.dispatch("sms/sendSms", smsData).then(() => {
            toast.success("Application revoked Successfully", {
              timeout: 5000,
              position: "bottom-center",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true,
            });
            setTimeout(() => {
              location.reload();
            }, 2000);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };

    return {
      showFlash,
      showErrorFlash,
      isLoading,
      remark,
      revoke,
    };
  },
};
</script>
