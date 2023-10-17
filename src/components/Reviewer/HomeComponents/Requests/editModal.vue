<template>
  <!-- Modal -->
  <div
    class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
    id="editModal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="editModalLabel"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-dialog-centered modal-lg relative w-auto pointer-events-none"
    >
      <div
        class="modal-content border-none relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"
      >
        <div
          class="modal-header flex flex-shrink-0 items-center justify-between p-2 rounded-t-md"
        ></div>
        <div class="vld-parent">
          <loading
            :active="isLoading"
            :is-full-page="false"
            :color="'#2F639D'"
            :opacity="1"
          ></loading>
          <div class="modal-body relative">
            <div class="container">
              <section class="text-gray-800">
                <div class="flex justify-center border-b-2 mb-8">
                  <div class="text-center max-w-full">
                    <h2 class="text-2xl font-bold">New License Request</h2>
                  </div>
                </div>

                <div class="p-4">
                  <div class="grid grid-cols-3 gap-4">
                    <div>
                      <h2 class="text-primary-600 font-bold text-xl">Reviewer Reason</h2>
                      <p class="border-2 shadow-md rounded-md p-2 break-words">
                        {{
                          editData && editData.data ? editData.data.reviewer_reason : ""
                        }}
                      </p>
                    </div>
                    <div>
                      <h2 class="text-primary-600 font-bold text-xl">Requested Status</h2>
                      <p class="border-2 shadow-md rounded-md p-2">
                        {{
                          editData && editData.data
                            ? editData.data.requestedStatus.name
                            : ""
                        }}
                      </p>
                    </div>
                    <div>
                      <h2 class="text-primary-600 font-bold text-xl">Current Status</h2>
                      <p class="border-2 shadow-md rounded-md p-2">
                        {{
                          editData && editData.data
                            ? editData.data.currentStatus.name
                            : ""
                        }}
                      </p>
                    </div>
                    <div v-if="editData && editData.Status == 'new'">
                      <label class="text-main-400 text-xl">Final Status </label>
                      <select
                        class="form-select appearance-none block w-full mb-2 px-3 py-2 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-400 focus:outline-none"
                        v-model="finalizedStatus"
                        :disabled="editData && editData.Status == 'finalized'"
                      >
                        <option
                          v-for="req in applicationStatuses"
                          v-bind:key="req.id"
                          v-bind:value="req"
                        >
                          {{ req.name }}
                        </option>
                      </select>
                    </div>
                    <div>
                      <label class="text-main-400 text-xl">Approved By</label>
                      <p class="border-2 shadow-md rounded-md p-2">
                        {{
                          editData && editData.data && editData.data.approvedBy
                            ? editData.data.approvedBy.name
                            : ""
                        }}
                      </p>
                    </div>
                    <div>
                      <h2 class="text-primary-600 font-bold text-xl">Approver Comment</h2>
                      <textarea
                        v-if="editData && editData.Status == 'new'"
                        class="w-full shadow-inner p-4 border-grey-100"
                        placeholder="Write a remark note of why the license is being revoked."
                        rows="6"
                        v-model="approverComment"
                      ></textarea>
                      <p class="border-2 shadow-md rounded-md p-2 break-words" v-else>
                        {{
                          editData && editData.data ? editData.data.approver_reason : ""
                        }}
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div
          class="modal-footer flex p-2 justify-center border-t border-grey-100 rounded-b-md"
        >
          <button
            type="button"
            :class="
              editData && editData.Status == 'new'
                ? 'inline-block px-6 text-white bg-primary-700 font-medium text-xs leading-tight uppercase rounded hover:bg-white hover:text-primary-600 hover:border-primary-600 transition duration-150 ease-in-out'
                : 'pointer-events-none inline-block px-6 text-white bg-grey-400 font-medium text-xs leading-tight uppercase rounded hover:bg-white hover:text-primary-600 hover:border-primary-600 transition duration-150 ease-in-out'
            "
            @click="updateRequest()"
          >
            <i class="fa fa-save"></i>
            Save
          </button>
          <button
            type="button"
            class="inline-block px-6 text-white bg-primary-700 font-medium text-xs leading-tight uppercase rounded hover:bg-white hover:text-primary-600 hover:border-primary-600 transition duration-150 ease-in-out"
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
import { ref, computed, onMounted } from "vue";
import Loading from "vue3-loading-overlay";
import { useStore } from "vuex";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import { useToast } from "vue-toastification";
export default {
  components: { Loading },
  props: ["editModalData"],
  setup(props) {
    const store = useStore();
    const toast = useToast();
    let isLoading = ref(false);
    let finalizedStatus = ref("");
    let approverComment = ref("");

    let applicationStatuses = ref([]);
    let saveData = ref({});
    let editData = computed(() =>
      props.editModalData ? props.editModalData : { Name: "" }
    );
    let isActive =
      editData.value && editData.value.Status ? editData.value.Status : ref(false);

    const changeverified = () => {
      isActive.value = !isActive.value;
    };

    const updateRequest = () => {
      isLoading.value = true;

      let finalRequestType =
        editData.value && editData.value.RequestType == "NewLicense"
          ? "NewLicenseRequest"
          : editData.value && editData.value.RequestType == "Renewal"
          ? "RenewalRequest"
          : editData.value && editData.value.RequestType == "Goodstanding"
          ? "GoodStandingRequest"
          : "";

      saveData.value = {
        id: editData.value.id,
        current_status_id: finalizedStatus.value.id,
        status: "finalized",
        approved_by_id: +localStorage.getItem("adminId"),
        action: finalizedStatus.value.action,
      };

      store.dispatch(`reviewer/update${finalRequestType}`, saveData.value).then(() => {
        isLoading.value = false;
        toast.success("Updated Successfully", {
          timeout: 5000,
          position: "bottom-center",
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          icon: true,
        });
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      });
    };
    onMounted(() => {
      let tempAp = JSON.parse(localStorage.getItem("applicationStatuses"))
        ? JSON.parse(localStorage.getItem("applicationStatuses"))
        : [];
      tempAp.forEach((el) => {
        switch (el.code) {
          case "DEC":
            el.action = "DeclineEvent";
            applicationStatuses.value.push(el);
            break;
          case "IRV":
            el.action = "InReviewEvent";
            applicationStatuses.value.push(el);
            break;
          case "SUB":
            el.action = "SubmitEvent";
            applicationStatuses.value.push(el);
            break;
          default:
            break;
        }
      });
    });
    return {
      isLoading,
      applicationStatuses,
      editData,
      finalizedStatus,
      updateRequest,
      isActive,
      approverComment,
      changeverified,
    };
  },
};
</script>
