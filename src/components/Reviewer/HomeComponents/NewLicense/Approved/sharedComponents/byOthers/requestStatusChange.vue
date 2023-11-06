<template>
  <div
    class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
    id="requestStatusOther"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="requestStatusOtherLabel"
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
          <label class="mb-4 text-lg text-primary-600 font-bold"
            >Request License Status Change</label
          >
        </div>

        <div class="modal-body relative p-4">
          <div class="container px-6">
            <div class="vld-parent">
              <loading
                :active="isLoading"
                :can-cancel="true"
                :is-full-page="true"
                :color="'#2F639D'"
                :opacity="0.7"
              ></loading>
              <div class="grid grid-cols-1 gap-4">
                <div>
                  <label class="text-main-400">Request Status </label
                  ><span class="text-red-300">*</span>
                  <select
                    class="form-select appearance-none block w-full mb-2 px-3 py-2 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-400 focus:outline-none"
                    v-model="request.requested_status_id"
                  >
                    <option
                      v-for="req in applicationStatuses"
                      v-bind:key="req.id"
                      v-bind:value="req.id"
                    >
                      {{ req.name }}
                    </option>
                  </select>
                </div>

                <div>
                  <div class="grid grid-cols-1">
                    <label class="text-main-400 mb-2"
                      >Request Reason <span class="text-red-300">*</span></label
                    >
                    <textarea
                      class="w-full shadow-inner p-4 border-grey-100"
                      placeholder="Write a remark note of why the license is being revoked."
                      rows="6"
                      v-model="request.reviewer_reason"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-center border-t border-grey-100 rounded-b-md"
        >
          <button
            type="button"
            class="inline-block px-6 text-white font-medium text-xs leading-tight uppercase rounded bg-red-300 hover:bg-white hover:text-red-300 hover: focus:bg-purple-700 focus: focus:outline-none focus:ring-0 active:bg-purple-800 active: transition duration-150 ease-in-out"
            @click="addRequest()"
          >
            <i class="fa fa-times-circle"></i>
            Add Request
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
import { ref, onMounted } from "vue";
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
    let applicationStatuses = ref([]);
    let isLoading = ref(false);
    let request = ref({
      requested_status_id: null,
      new_license_id: null,
      reviewer_reason: "",
      approver_reason: null,
      approved_by_id: null,
      current_status_id: null,
      requester_id: null,
      status: "new",
    });
    const store = useStore();
    const toast = useToast();
    const addRequest = () => {
      request.value.new_license_id = props.modalData.data.id;
      request.value.current_status_id = props.modalData.data.applicationStatusId;
      request.value.requester_id = +localStorage.getItem("adminId");
      isLoading.value = true;
      store
        .dispatch("reviewer/addNewLicenseRequest", request.value)
        .then((res) => {
          console.log(res);
          isLoading.value = false;
          if (res.data.status && res.data.status == "Error") {
            toast.error("Unresolved request already exists for the selected license", {
              timeout: 5000,
              position: "bottom-center",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true,
            });
          } else {
            toast.success("Application status change requested Successfully", {
              timeout: 5000,
              position: "bottom-center",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true,
            });
          }

          setTimeout(() => {
            location.reload();
          }, 2000);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    onMounted(() => {
      let allowedRequests = ["DEC", "IRV", "SUB"];
      applicationStatuses.value = JSON.parse(localStorage.getItem("applicationStatuses"))
        ? JSON.parse(localStorage.getItem("applicationStatuses"))
        : [];
      applicationStatuses.value = applicationStatuses.value.filter((el) => {
        return allowedRequests.includes(el.code);
      });
    });
    return {
      showFlash,
      showErrorFlash,
      applicationStatuses,
      isLoading,
      request,
      remark,
      addRequest,
    };
  },
};
</script>
