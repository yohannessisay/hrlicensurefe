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
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
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
                <div class="text-center lg:max-w-3xl md:max-w-xl">
                  <h2 class="text-2xl font-bold mb-8 px-6">
                    Showing Verification Data For
                    <span class="text-2xl font-bold px-6">
                      {{ applicantName }}</span
                    >
                  </h2>
                </div>
              </div>

              <div class="grid grid-cols-3 gap-4">
                <div class="form-group mb-4">
                  <label for="firstName">Applicant Name</label>
                  <input
                    disabled
                    readonly
                    :value="
                      modalData.ApplicantName ? modalData.ApplicantName : ''
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
                      modalData.RequestedRegion ? modalData.RequestedRegion : ''
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
                    :value="modalData.LicenseCode ? modalData.LicenseCode : ''"
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
                    :value="modalData.data&& modalData.data.verifier? modalData.data.verifier.name : ''"
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
                        @change="verifiedCheck"
                        :disabled="modalData.IsVerified==true"
                        id="isVerified"
                        class="toggle-checkbox hidden cursor-pointer"
                        type="checkbox"
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
                          modalData.IsVerified == null ||
                          modalData.IsVerified == ""
                            ? "Click the Checkbox"
                            : isVerified === true
                            ? "Verified"
                            : "Not Verified"
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
                    :value="modalData.data ? modalData.data.requester.name : ''"
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
                    placeholder="Remark details"
                    :value="modalData.data ? modalData.data.remark : ''"
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
                    :value="
                      modalData.data ? modalData.data.malpracticeInfo : ''
                    "
                    type="textarea"
                    id="malpracticeInfo"
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
            type="button"
            @click="saveVerification()"
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
              hover:bg-purple-700 hover:shadow-lg
              focus:bg-purple-700
              focus:shadow-lg
              focus:outline-none
              focus:ring-0
              active:bg-purple-800 active:shadow-lg
              transition
              duration-150
              ease-in-out
              dark:focus:ring-gray-600
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
              hover:bg-purple-700 hover:shadow-lg
              focus:bg-purple-700
              focus:shadow-lg
              focus:outline-none
              focus:ring-0
              active:bg-purple-800 active:shadow-lg
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
  props: ["modalData"],
  setup(props, { emit }) {
    const store = useStore();
    const toast = useToast();
    const remark = ref("");
    let loggedInAdmin = JSON.parse(localStorage.getItem("allAdminData"));
    const malpracticeInfo = computed(() =>
      props.modalData.data ? props.modalData.data.malpracticeInfo : ""
    );
    const issuedInGoodStanding = computed(() =>
      props.modalData.data ? props.modalData.data.issuedInGoodStanding : ""
    );
    const regionId = computed(() =>
      props.modalData.data ? props.modalData.data.region.id : ""
    );
    const verificationId = computed(() =>
      props.modalData ? props.modalData.Number : ""
    );
    const renewalId = ref(
      props.modalData.data
        ? props.modalData.data.renewal.renewalLicenseCode
        : ""
    );
    const isVerified = ref("");
    const applicantId = computed(() =>
      props.modalData.data ? props.modalData.data.applicant.id : ""
    );
    const licenseCode = computed(() =>
      props.modalData.data ? props.modalData.data.newLicense.newLicenseCode : ""
    );
    const requestedRegion = computed(() => props.modalData.RequestedRegion);
    const verifiedBy = computed(() =>
      props.modalData.data ? props.modalData.data.verifier.name : ""
    );
    const requester = computed(() =>
      props.modalData.data ? props.modalData.data.requester.name : ""
    );
    const applicantName = computed(() => props.modalData.ApplicantName);
    const editedData = ref({});
    const saveVerification = () => {
      editedData.value.isVerified = isVerified.value;
      editedData.value.remark = remark.value;
      editedData.value.malpracticeInfo = malpracticeInfo.value;
      editedData.value.verifier = loggedInAdmin.name;
      editedData.value.applicantId = applicantId.value;
      editedData.value.issuedInGoodStanding = issuedInGoodStanding.value;
      editedData.value.regionId = regionId.value;
      editedData.value.verifiedById = loggedInAdmin.id;
      editedData.value.renewalId = renewalId.value;
      editedData.value.licenseId = licenseCode.value;
      editedData.value.verificationId = verificationId.value;

      store
        .dispatch("applicationVerification/saveResponse", editedData)
        .then((res) => {
          console.log(res, editedData);
          if (res.data.status == "Success") {
            toast.success("Verification request is successfully verified", {
              timeout: 5000,
              position: "bottom-center",
            });
            emit("getVerification");
          } else {
            toast.error(res.data.message, {
              timeout: 20000,
              position: "bottom-center",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true,
            });
          }
        });
    };

    const verifiedCheck = () => {
      isVerified.value = !isVerified.value;
    };
    return {
      saveVerification,
      applicantName,
      remark,
      malpracticeInfo,
      issuedInGoodStanding,
      regionId,
      verificationId,
      renewalId,
      isVerified,
      applicantId,
      verifiedCheck,
      licenseCode,
      requestedRegion,
      verifiedBy,
      requester,
    };
  },
};
</script>
<style scoped>
.shadow-md {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 34%), 0 2px 4px -1px rgb(0 0 0 / 6%);
}
</style>
