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
                          editedData.isVerified
                            ? editedData.isVerified == true
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
                    :disabled="
                      modalDataOthers &&
                      modalDataOthers.data &&
                      modalDataOthers.data.remark
                        ? true
                        : false
                    "
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
                      modalDataOthers &&
                      modalDataOthers.data &&
                      modalDataOthers.data.malpracticeInfo
                        ? true
                        : false
                    "
                  />
                </div>
              </div>
              <hr class="text-primary-600 " />
              <div class="bg-white shadow-md p-4 m-4">
                <h2 class="text-primary-600 font-bold text-xl">
                  License Detail
                </h2>
              </div>
              <div class="grid grid-cols-2">
                <div class="bg-white shadow-md p-4 m-4">
                  <h4 class="text-primary-600 font-bold text-xl">
                    Applicant Detail
                  </h4>
                  <div class="grid grid-cols-2 mt-4">
                    <h4 class="text-grey-800 font-bold text-base">
                      Applicant Name
                    </h4>
                    <h4 class="text-primary-600 font-bold text-base">
                      {{
                        licenseInfo && licenseInfo.profile
                          ? licenseInfo.profile.name +
                            " " +
                            licenseInfo.profile.fatherName +
                            " " +
                            licenseInfo.profile.grandFatherName
                          : ""
                      }}
                    </h4>
                    <h4 class="text-grey-800 font-bold text-base">
                      Applicant Nationality
                    </h4>
                    <h4 class="text-primary-600 font-bold text-base">
                      {{
                        licenseInfo &&
                        licenseInfo.profile &&
                        licenseInfo.profile.nationality
                          ? licenseInfo.profile.nationality.name
                          : ""
                      }}
                    </h4>
                    <h4 class="text-grey-800 font-bold text-base">
                      Applicant Email
                    </h4>
                    <h4 class="text-primary-600 font-bold text-base">
                      {{
                        licenseInfo && licenseInfo.applicant
                          ? licenseInfo.applicant.emailAddress
                          : ""
                      }}
                    </h4>
                    <h4 class="text-grey-800 font-bold text-base">
                      Applicant Phone
                    </h4>
                    <h4 class="text-primary-600 font-bold text-base">
                      {{
                        licenseInfo && licenseInfo.applicant
                          ? "+251 " + licenseInfo.applicant.phoneNumber
                          : ""
                      }}
                    </h4>
                  </div>
                </div>

                <div class="bg-white shadow-md p-4 m-4">
                  <h4 class="text-primary-600 font-bold text-xl">
                    Reviewer Detail
                  </h4>
                  <div class="grid grid-cols-2 mt-4">
                    <h4 class="text-grey-800 font-bold text-base">
                      Reviewer Name
                    </h4>
                    <h4 class="text-primary-600 font-bold text-base">
                      {{
                        licenseInfo &&
                        licenseInfo.newLicense &&
                        licenseInfo.newLicense.licenseReviewer
                          ? licenseInfo.newLicense.licenseReviewer.reviewer.name
                          : licenseInfo &&
                            licenseInfo.renewal &&
                            licenseInfo.renewal.renewalReviewer
                          ? licenseInfo.renewal.renewalReviewer.reviewer.name
                          : ""
                      }}
                    </h4>
                    <h4 class="text-grey-800 font-bold text-base">
                      Reviewer Email
                    </h4>
                    <h4 class="text-primary-600 font-bold text-base">
                      {{
                        licenseInfo &&
                        licenseInfo.newLicense &&
                        licenseInfo.newLicense.licenseReviewer
                          ? licenseInfo.newLicense.licenseReviewer.reviewer
                              .email
                          : licenseInfo &&
                            licenseInfo.renewal &&
                            licenseInfo.renewal.renewalReviewer
                          ? licenseInfo.renewal.renewalReviewer.reviewer.email
                          : ""
                      }}
                    </h4>
                    <h4 class="text-grey-800 font-bold text-base">
                      Reviewer Phone
                    </h4>
                    <h4 class="text-primary-600 font-bold text-base">
                      {{
                        licenseInfo &&
                        licenseInfo.newLicense &&
                        licenseInfo.newLicense.licenseReviewer
                          ? licenseInfo.newLicense.licenseReviewer.reviewer
                              .phoneNumber
                          : licenseInfo &&
                            licenseInfo.renewal &&
                            licenseInfo.renewal.renewalReviewer
                          ? licenseInfo.renewal.renewalReviewer.reviewer
                              .phoneNumber
                          : ""
                      }}
                    </h4>
                    <h4 class="text-grey-800 font-bold text-base">
                      Reviewer Region
                    </h4>
                    <h4 class="text-primary-600 font-bold text-base">
                      {{
                        licenseInfo &&
                        licenseInfo.newLicense &&
                        licenseInfo.newLicense.licenseReviewer &&
                        licenseInfo.newLicense.licenseReviewer.reviewer.region
                          ? licenseInfo.newLicense.licenseReviewer.reviewer
                              .region.name
                          : licenseInfo &&
                            licenseInfo.renewal &&
                            licenseInfo.renewal.renewalReviewer &&
                            licenseInfo.renewal.renewalReviewer.reviewer.region
                          ? licenseInfo.renewal.renewalReviewer.reviewer.region
                              .name
                          : ""
                      }}
                    </h4>
                  </div>
                </div>
              </div>
              <div
                v-if="
                  (licenseInfo && licenseInfo.newLicense) ||
                    (licenseInfo && licenseInfo.renewal)
                "
                class="grid grid-cols-3"
              >
                <div
                  class="bg-white shadow-md p-4 m-4"
                  v-for="education in licenseInfo && licenseInfo.newLicense
                    ? licenseInfo.newLicense.educations
                    : licenseInfo && licenseInfo.renewal
                    ? licenseInfo.renewal.educations
                    : []"
                  :key="education.id"
                >
                  <h4 class="text-primary-600 font-bold text-xl">
                    Education Detail
                  </h4>
                  <div class="grid grid-cols-2 mt-4">
                    <h4 class="text-grey-800 font-bold text-base">
                      Department Name
                    </h4>
                    <h4 class="text-primary-600 font-bold text-base">
                      {{
                        education && education.department
                          ? education.department.name
                          : ""
                      }}
                    </h4>
                    <h4 class="text-grey-800 font-bold text-base">
                      Educational Level
                    </h4>
                    <h4 class="text-primary-600 font-bold text-base">
                      {{
                        education && education.educationLevel
                          ? education.educationLevel.name
                          : ""
                      }}
                    </h4>
                    <h4 class="text-grey-800 font-bold text-base">
                      Profession Name
                    </h4>
                    <h4 class="text-primary-600 font-bold text-base">
                      {{
                        education && education.professionType
                          ? education.professionType.name
                          : ""
                      }}
                    </h4>
                    <h4 class="text-grey-800 font-bold text-base">
                      Institution Name
                    </h4>
                    <h4 class="text-primary-600 font-bold text-base">
                      {{
                        education && education.institution
                          ? education.institution.name
                          : ""
                      }}
                    </h4>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div
          class="collapse mt-12"
          id="collapseExample"
          v-if="
            (licenseInfo && licenseInfo.newLicense) ||
              (licenseInfo && licenseInfo.renewal)
          "
        >
          <div class="block p-6 rounded-lg shadow-md m-4 bg-white">
            <div class="flex justify-content-evenly align-center">
              <h1>Attached Documents</h1>
            </div>
            <div class="grid grid-cols-4 gap-4">
              <div
                class="mt-4 mb-8 bg-white"
                style="border-radius: 15px; padding: 10px"
                v-for="document in licenseInfo &&
                licenseInfo.newLicense &&
                licenseInfo.newLicense.documents
                  ? licenseInfo.newLicense.documents
                  : licenseInfo &&
                    licenseInfo.renewal &&
                    licenseInfo.renewal.documents
                  ? licenseInfo.renewal.documents
                  : []"
                :key="document.id"
              >
                <div class="flex justify-center">
                  <div class="mt-large bg-white">
                    <a
                      :href="googleApi + document.filePath"
                      :data-title="
                        document.documentType ? document.documentType.name : ''
                      "
                      data-lightbox="example-2"
                    >
                      <img
                        :src="googleApi + document.filePath"
                        class="w-full h-48 object-cover"
                      />
                    </a>

                    <h4 style="font-weight: bold">
                      Document Type:-
                    </h4>
                    <h6>
                      {{
                        document.documentType ? document.documentType.name : ""
                      }}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="
            modal-footer
            flex flex-shrink-0 flex-wrap
            items-center
            justify-end
            border-t border-grey-100
            rounded-b-mdmodalData
          "
        >
          <button
            class="
              inline-block
              px-6
              py-2.5
              m-2
              bg-primary-700
              text-white
              font-bold  
              text-xs
              leading-tight
              uppercase
              rounded
              shadow-lg
              hover:bg-white hover:text-primary-600
              transition
              duration-150
              ease-in-out
            "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <i class="fa fa-eye"></i>
            Show Attached Documents
          </button>
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
import { ref, computed, watch } from "vue";
import { useStore } from "vuex";
import { useToast } from "vue-toastification";
import { googleApi } from "@/composables/baseURL";
export default {
  props: ["modalDataOthers"],
  setup(props) {
    const store = useStore();
    const toast = useToast();
    let loggedInAdmin = JSON.parse(localStorage.getItem("allAdminData"));

    let isVerified = ref(null);
    let remark = ref("");

    let malpracticeInfo = ref("");
    let licenseInfo = computed({
      get: () => props.modalDataOthers?.data,
    });

    const editedData = ref({});
    const saveVerification = () => {
      editedData.value.verifier = loggedInAdmin.name;
      editedData.value.remark = remark.value;
      editedData.value.isVerified = isVerified.value;
      editedData.value.malpracticeInfo = malpracticeInfo.value;
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
            setTimeout(() => {
              location.reload();
            }, 1000);
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
    watch(props.modalDataOthers, () => {
      isVerified.value = props.modalDataOthers.data.isVerified;
      remark.value = props.modalDataOthers.data.remark;
      malpracticeInfo.value = props.modalDataOthers.data.malpracticeInfo;
    });
    return {
      saveVerification,
      remark,
      malpracticeInfo,
      editedData,
      isVerified,
      licenseInfo,
      googleApi,
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
