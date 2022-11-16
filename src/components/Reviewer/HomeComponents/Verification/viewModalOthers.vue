<template>
  <!-- Modal -->
  <div
    class="
      modal
      fade
      fixed
      top-0
      left-0
      hidden
      w-full
      h-full
      outline-none
      overflow-x-hidden overflow-y-auto
    "
    id="staticBackdropOthers"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropOthersLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl relative w-auto pointer-events-none">
      <div
        class="
          modal-content
          border-none
          shadow-lg
          relative
          flex flex-col
          w-full
          pointer-events-auto
          bg-white bg-clip-padding
          rounded-md
          outline-none
          text-current
        "
      >
        <div
          class="
            modal-header
            flex flex-shrink-0
            items-center
            justify-between
            p-2
            rounded-t-md
          "
        >
          <button
            class="btn-close border-none rounded-lg"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <div class="modal-body relative p-4">
          <div class="container px-6 mx-auto">
            <section class="text-gray-800">
              <div class="flex justify-center">
                <div class="text-center lg:max-w-3xl md:max-w-xl"></div>
              </div>

              <div class="grid grid-cols-3 gap-4">
                <div class="form-group mb-4">
                  <label for="firstName">Applicant Name</label>
                  <input
                    disabled
                    readonly
                    :value="
                      modalDataOthers && modalDataOthers.ApplicantName
                        ? modalDataOthers.ApplicantName
                        : ''
                    "
                    type="text"
                    class="
                      form-control
                      block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-bold
                      text-white
                      bg-primary-700 bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                    "
                    id="applicantName"
                    placeholder="Applicant Name"
                  />
                </div>
                <div class="form-group mb-4">
                  <label for="requestedRegion">Requested Region</label>
                  <input
                    disabled
                    :value="
                      modalDataOthers && modalDataOthers.RequestedRegion
                        ? modalDataOthers.RequestedRegion
                        : ''
                    "
                    type="text"
                    class="
                      form-control
                      block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-bold
                      text-white
                      bg-primary-700 bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                    "
                    id="requestedRegion"
                    placeholder="Requested Region"
                  />
                </div>
                <div class="form-group mb-4">
                  <label for="requestedRegion">License Code</label>
                  <input
                    disabled
                    :value="
                      modalDataOthers && modalDataOthers.LicenseCode
                        ? modalDataOthers.LicenseCode
                        : ''
                    "
                    type="text"
                    class="
                      form-control
                      block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-primary-700 bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700
                      focus:bg-white
                      focus:border-blue-600
                      focus:outline-none
                    "
                    style="color: white; font-weight: bold"
                    id="licenseCode"
                    placeholder="License Code"
                  />
                </div>
              </div>

              <div class="grid grid-cols-3 gap-4">
                <div class="form-group mb-4">
                  <label for="requestedRegion">Verified By</label>
                  <input
                    disabled
                    :value="
                      modalDataOthers &&
                      modalDataOthers.data &&
                      modalDataOthers.data.verifier
                        ? modalDataOthers.data.verifier.name
                        : ''
                    "
                    type="text"
                    class="
                      form-control
                      block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-primary-700 bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700
                      focus:bg-white
                      focus:border-blue-600
                      focus:outline-none
                    "
                    style="color: white; font-weight: bold"
                    id="verifiedBy"
                  />
                </div>

                <div class="form-group">
                  <label for="requestedRegion">Is Verified</label>
                  <div class="m-4">
                    <div class="toggle slim colour">
                      <input
                        :disabled="
                          modalDataOthers && modalDataOthers.data
                            ? modalDataOthers.data.isVerified == true
                            : false
                        "
                        v-model="isVerified"
                        id="isVerified"
                        class="toggle-checkbox hidden cursor-pointer"
                        type="checkbox"
                        :checked="
                          modalDataOthers && modalDataOthers.data
                            ? modalDataOthers.data.isVerified == true
                            : false
                        "
                      />
                      <label
                        for="isVerified"
                        class="
                          toggle-label
                          block
                          w-12
                          h-4
                          rounded-full
                          transition-color
                          duration-150
                          ease-out
                        "
                      ></label>
                      <span>
                        {{
                          modalDataOthers &&
                          modalDataOthers.data &&
                          modalDataOthers.data.isVerified == true
                            ? "Yes"
                            : "No"
                        }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-3 gap-4">
                <div class="form-group mb-4">
                  <label for="requestedRegion"
                    >Verification Requester Name</label
                  >

                  <input
                    disabled
                    :value="
                      modalDataOthers && modalDataOthers.data
                        ? modalDataOthers.data.requester.name
                        : ''
                    "
                    type="text"
                    class="
                      form-control
                      block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-primary-700 bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700
                      focus:bg-white
                      focus:border-blue-600
                      focus:outline-none
                    "
                    style="color: white; font-weight: bold"
                    id="requesterName"
                  />
                </div>

                <div class="form-group mb-4">
                  <label for="firstName">Remark</label>
                  <textarea
                    :disabled="
                      modalDataOthers && modalDataOthers.data
                        ? modalDataOthers.data.remark
                        : ''
                    "
                    type="textarea"
                    rows="4"
                    class="
                      block
                      p-2.5
                      w-full
                      text-sm text-gray-900
                      bg-gray-50
                      rounded-lg
                      border border-gray-300
                      focus:ring-blue-500 focus:border-blue-500
                      dark:bg-gray-700
                      dark:border-gray-600
                      dark:placeholder-gray-400
                      dark:text-white
                      dark:focus:ring-blue-500
                      dark:focus:border-blue-500
                    "
                    id="remark"
                    placeholder="Remark note "
                    v-model="remark"
                    required
                  />
                </div>

                <div class="form-group mb-4">
                  <label for="firstName">Malpractice Information</label>
                  <textarea
                    rows="4"
                    class="
                      pa-2
                      block
                      p-2.5
                      w-full
                      text-sm text-gray-900
                      bg-gray-50
                      rounded-lg
                      border border-gray-300
                      focus:ring-blue-500 focus:border-blue-500
                      dark:bg-gray-700
                      dark:border-gray-600
                      dark:placeholder-gray-400
                      dark:text-white
                      dark:focus:ring-blue-500
                      dark:focus:border-blue-500
                    "
                    placeholder="Information regarding malpractice"
                    v-model="malpracticeInfo"
                    type="textarea"
                    id="malpracticeInfo"
                    required
                    :disabled="
                      modalDataOthers && modalDataOthers.data
                        ? modalDataOthers.data.malpracticeInfo
                        : ''
                    "
                  />
                </div>
              </div>
            </section>
          </div>
        </div>

        <div
          class="
            modal-footer
            flex flex-shrink-0 flex-wrap
            items-center
            justify-end
            border-t border-grey-100
            rounded-b-md
          "
        >
          <button
            v-if="
              modalDataOthers &&
              modalDataOthers.data &&
              modalDataOthers.data.requesterId != loggedInAdmin.id
            "
            type="button"
            @click="saveVerification()"
            :class="
              modalDataOthers &&
              modalDataOthers.data &&
              modalDataOthers.data.isVerified == true
                ? 'pointer-events-none disabled inline-block px-6 text-white font-medium text-xs leading-tight uppercase rounded shadow-md bg-grey-300 hover:bg-whitehover:shadow-lg hover:text-primary-600 hover:border transition duration-150 ease-in-out'
                : 'inline-block px-6 text-white font-medium text-xs leading-tight uppercase rounded shadow-md bg-primary-700 hover:bg-whitehover:shadow-lg hover:text-primary-600 hover:border transition duration-150 ease-in-out'
            "
          >
            Save
          </button>
          <button
            type="button"
            class="
              inline-block
              px-6
              text-white
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              shadow-md
              bg-primary-700
              hover:bg-whitehover:shadow-lg hover:text-primary-600 hover:border
              transition
              duration-150
              ease-in-out
            "
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useToast } from "vue-toastification";
export default {
  props: ["modalDataOthers"],
  setup(props) {
    const store = useStore();
    const toast = useToast();
    let loggedInAdmin = JSON.parse(localStorage.getItem("allAdminData"));

    let isVerified = ref(
      props.modalDataOthers && props.modalDataOthers.data
        ? props.modalDataOthers.data.isVerified
        : false
    );
    let remark = computed(() =>
      props.modalDataOthers && props.modalDataOthers.data
        ? props.modalDataOthers.data.remark
        : ""
    );
    let malpracticeInfo = computed(() =>
      props.modalDataOthers && props.modalDataOthers.data
        ? props.modalDataOthers.data.malpracticeInfo
        : ""
    );
    const editedData = ref({});
    const saveVerification = () => {
      editedData.value.isVerified = isVerified.value ? isVerified.value : null;
      editedData.value.remark = remark.value ? remark.value : null;
      editedData.value.malpracticeInfo = malpracticeInfo.value
        ? malpracticeInfo.value
        : null;
      editedData.value.verifier = loggedInAdmin.name;
      (editedData.value.applicantId =
        props.modalDataOthers && props.modalDataOthers.data
          ? props.modalDataOthers.data.applicantId
          : null),
        (editedData.value.issuedInGoodStanding =
          props.modalDataOthers && props.modalDataOthers.data
            ? props.modalDataOthers.data.issuedInGoodStanding
            : null),
        (editedData.value.regionId =
          props.modalDataOthers && props.modalDataOthers.data
            ? props.modalDataOthers.data.regionId
            : null);
      editedData.value.verifiedById = loggedInAdmin.id;
      editedData.value.renewalId =
        props.modalDataOthers && props.modalDataOthers.data
          ? props.modalDataOthers.data.renewalId
          : null;
      editedData.value.licenseId =
        props.modalDataOthers && props.modalDataOthers.data
          ? props.modalDataOthers.data.licenseId
          : null;
      editedData.value.verificationId =
        props.modalDataOthers && props.modalDataOthers.data
          ? props.modalDataOthers.data.id
          : null;

      store
        .dispatch("applicationVerification/saveResponse", editedData.value)
        .then((res) => {
          if (res.data.status == "Success") {
            toast.success("Verification request is successfully verified", {
              timeout: 5000,
              position: "bottom-center",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true,
            });
          } else {
            toast.error(res.data.message, {
              timeout: 5000,
              position: "bottom-center",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true,
            });
          }
        });
    };

    return {
      saveVerification,
      remark,
      malpracticeInfo,
      isVerified,
      loggedInAdmin,
    };
  },
};
</script>
<style scoped>
.shadow-md {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 34%), 0 2px 4px -1px rgb(0 0 0 / 6%);
}
</style>
