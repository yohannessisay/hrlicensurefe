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
    <div
      class="
        modal-dialog modal-dialog-centered modal-xl
        relative
        w-auto
        pointer-events-none
      "
    >
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
          class="modal-header flex flex-shrink-0 justify-end p-2 rounded-t-md"
        >
          <button
            type="button"
            class="
              px-6
              text-white
              bg-primary-600
              hover:text-primary-600 hover:border
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              hover:border-primary-600
              shadow-lg
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
            aria-label="Close"
          >
            <i class="fa fa-close fa-2x"></i>
          </button>
        </div>
        <div class="vld-parent">
          <loading
            :active="isLoading"
            :is-full-page="false"
            :color="'#2F639D'"
            :opacity="1"
          ></loading>
          <div class="modal-body relative p-4">
            <div class="container px-6 mx-auto">
              <section class="text-gray-800">
                <div class="flex justify-center">
                  <div class="text-center lg:max-w-3xl md:max-w-xl">
                    <h2 class="text-2xl font-bold mb-8 px-6">
                      Showing
                      <span class="text-2xl font-bold px-6">
                        {{ modalData.name ? modalData.name : "" }}
                      </span>
                      's License Data
                    </h2>
                  </div>
                </div>

                <div class="flex flex-wrap">
                  <div class="grow-0 shrink-0 basis-auto w-full lg:w-11/12">
                    <div class="flex flex-wrap">
                      <div
                        class="
                          grow-0
                          shrink-0
                          basis-auto
                          w-full
                          lg:w-6/12
                          px-3
                          lg:px-6
                        "
                      >
                        <div class="flex items-start">
                          <div class="shrink-0">
                            <div
                              class="
                                p-4
                                bg-blue-600
                                rounded-md
                                shadow-lg
                                w-48
                                h-48
                                flex
                                mb-12
                                items-center
                                justify-center
                              "
                            >
                              <picture>
                                <source
                                  :srcset="
                                    modalData.profile &&
                                    modalData.profile.profilePicture
                                      ? googleApi +
                                        modalData.profile.profilePicture
                                          .filePath
                                      : ''
                                  "
                                  style="height: 177px"
                                  type="image/jpg"
                                />

                                <img
                                  style="height: 177px"
                                  src="../../../../../assets/showLicense/profile.png"
                                />
                              </picture>
                            </div>
                          </div>
                          <div class="grow ml-6">
                            <h2 class="font-extrabold text-2xl mb-1">
                              Personal Info
                            </h2>
                            <p class="text-gray-500">
                              <span
                                class="
                                  font-semibold
                                  text-lg text-primary-700
                                  mb-1
                                "
                                >Full Name:</span
                              >
                              {{ modalData.name ? modalData.name : "" }}
                            </p>
                            <p class="text-gray-500">
                              <span class="font-semibold text-primary-700 mb-1"
                                >Gender:</span
                              >
                              {{ modalData.gender ? modalData.gender : "" }}
                            </p>
                            <p class="text-gray-500">
                              <span class="font-semibold text-primary-700 mb-1"
                                >Nationality:</span
                              >
                              {{
                                modalData.nationality
                                  ? modalData.nationality
                                  : ""
                              }}
                            </p>
                            <p class="text-gray-500">
                              <span class="font-semibold text-primary-700 mb-1"
                                >Date Of Birth:</span
                              >
                              {{
                                modalData.dateOfBirth
                                  ? modalData.dateOfBirth.slice(0, 10)
                                  : ""
                              }}
                            </p>
                            <p class="text-gray-500">
                              <span class="font-semibold text-primary-700 mb-1"
                                >Martial Status:</span
                              >
                              {{
                                modalData.maritalStatus
                                  ? modalData.maritalStatus
                                  : ""
                              }}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div
                        class="
                          grow-0
                          shrink-0
                          basis-auto
                          w-full
                          lg:w-6/12
                          px-3
                          lg:px-6
                        "
                      >
                        <div class="flex items-start">
                          <div class="shrink-0">
                            <div
                              class="
                                p-4
                                bg-blue-600
                                rounded-md
                                shadow-lg
                                w-48
                                h-48
                                flex
                                items-center
                                justify-center
                              "
                            >
                              <i class="fa fa-phone fa-4x"></i>
                            </div>
                          </div>
                          <div class="grow ml-6">
                            <h2 class="font-bold mb-1">Revoke Info</h2>
                            <p class="text-gray-500">
                              <span class="font-medium text-primary-700 mb-1"
                                >Reviewer:</span
                              >
                              {{
                                modalData.reviewer &&
                                modalData.reviewer.reviewer
                                  ? modalData.reviewer.reviewer.name
                                  : ""
                              }}
                            </p>
                            <p class="text-gray-500">
                              <span class="font-medium text-primary-700 mb-1"
                                >Reviewer Phone:</span
                              >
                              {{
                                modalData.reviewer &&
                                modalData.reviewer.reviewer
                                  ? modalData.reviewer.reviewer.phoneNumber
                                  : ""
                              }}
                            </p>
                            <p class="text-gray-500">
                              <span class="font-medium text-primary-700 mb-1"
                                >Reviewer Email:</span
                              >
                              {{
                                modalData.reviewer &&
                                modalData.reviewer.reviewer
                                  ? modalData.reviewer.reviewer.email
                                  : ""
                              }}
                            </p>
                            <p class="text-gray-500">
                              <span class="font-medium text-primary-700 mb-1"
                                >Revoked Reason:</span
                              >
                              {{ modalData ? modalData.remark : "" }}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div
                        class="
                          grow-0
                          shrink-0
                          basis-auto
                          w-full
                          lg:w-6/12
                          px-3
                          lg:px-6
                        "
                      >
                        <div class="flex items-start">
                          <div class="shrink-0">
                            <div
                              class="
                                p-4
                                bg-blue-600
                                rounded-md
                                shadow-lg
                                w-48
                                h-48
                                flex
                                items-center
                                justify-center
                              "
                            >
                              <i class="fa fa-phone fa-4x"></i>
                            </div>
                          </div>
                          <div class="grow ml-6">
                            <h2 class="font-bold mb-1">Contact Info</h2>
                            <p class="text-gray-500">
                              <span class="font-medium text-primary-700 mb-1"
                                >Mobile Number:</span
                              >
                              {{
                                modalData.mobileNumber
                                  ? modalData.mobileNumber
                                  : ""
                              }}
                            </p>
                            <p class="text-gray-500">
                              <span class="font-medium text-primary-700 mb-1"
                                >Email:</span
                              >
                              {{ modalData.email ? modalData.email : "" }}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div
                        class="
                          grow-0
                          shrink-0
                          basis-auto
                          w-full
                          lg:w-6/12
                          px-3
                          lg:px-6
                        "
                      >
                        <div class="flex items-start">
                          <div class="shrink-0">
                            <div
                              class="
                                p-4
                                bg-blue-600
                                rounded-md
                                shadow-lg
                                w-48
                                h-48
                                flex
                                items-center
                                justify-center
                              "
                            >
                              <i class="fa fa-phone fa-4x"></i>
                            </div>
                          </div>
                          <div
                            class="grow ml-6"
                            v-if="
                            (adminData.expertLevel.code == 'FED' &&
                                adminData.role.code == 'ADM') ||
                              (adminData.expertLevel.code == 'REG' &&
                                adminData.role.code == 'ADM')||
                            (adminData.expertLevel.code == 'REG' &&
                              adminData.role.code == 'TL')
                            "
                          >
                            <h2 class="font-bold mb-1">Action</h2>
                            <button
                              type="button"
                              class="
                                inline-block
                                px-6
                                text-white
                                font-medium
                                text-xs
                                bg-main-400
                                leading-tight
                                uppercase
                                rounded
                                shadow-lg
                                hover:bg-white hover:text-main-400
                                transition
                                duration-150
                                ease-in-out
                              "
                              @click="release()"
                            >
                              <i class="fa fa-refresh"></i>
                              Approve
                            </button>
                          </div>
                        </div>
                      </div>
                      <div
                        class="
                          grow-0
                          shrink-0
                          basis-auto
                          w-full
                          lg:w-6/12
                          px-3
                          lg:px-6
                        "
                      ></div>
                    </div>

                    <div class="collapse mt-12" id="collapseExample">
                      <div class="block p-6 rounded-lg shadow-lg bg-white">
                        <div class="flex justify-content-evenly align-center">
                          <h1>Attached Documents</h1>
                        </div>
                        <div class="grid grid-cols-4 gap-4">
                          <div
                            class="mt-4 mb-8 bg-white"
                            style="border-radius: 15px; padding: 10px"
                            v-for="document in modalData.documents"
                            :key="document.id"
                          >
                            <div class="flex justify-center">
                              <div class="mt-large bg-white">
                                <a
                                  :href="googleApi + document.filePath"
                                  :data-title="
                                    document.documentType
                                      ? document.documentType.name
                                      : ''
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
                                    document.documentType
                                      ? document.documentType.name
                                      : ""
                                  }}
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
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
            rounded-b-md
          "
        >
          <button
            class="
              inline-block
              px-6
              py-2.5
              bg-primary-700
              text-white
              font-medium
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
            type="button"
            class="
              inline-block
              px-6
              text-white
              font-medium
              text-xs
              bg-primary-700
              leading-tight
              uppercase
              rounded
              shadow-lg
              hover:bg-white hover:text-primary-700
              transition
              duration-150
              ease-in-out
            "
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
import { googleApi } from "@/composables/baseURL";
import { ref, watch } from "vue";
import { useStore } from "vuex";
import Loading from "vue3-loading-overlay";
// Import stylesheet
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import { useToast } from "vue-toastification";
export default {
  name: "Modal",
  components: { Loading },
  props: ["modalDataId"],
  setup(props) {
    const store = useStore();
    const toast = useToast();
    const showModal = () => {
      this.show = true;
    };
    const show = ref(true);
    const showRes = ref(true);
    const showGenerateModal = ref(true);
    const showOptions = ref(true);
    const isLoading = ref(true);
    const modalData = ref({});
    let adminData = JSON.parse(localStorage.getItem("allAdminData"));
    let result = {};
    let renewal = {};
    const check = () => {
      store
        .dispatch("reviewer/getRenewalApplication", props.modalDataId.id)
        .then((res) => {
          if (res.data.status == "Success") {
            result = res.data.data;
            modalData.value.name =
              result.profile.name +
              " " +
              result.profile.fatherName +
              "  " +
              result.profile.grandFatherName;
            modalData.value.gender = result.profile.gender
              ? result.profile.gender
              : "-----";
            modalData.value.nationality = result.profile.nationality
              ? result.profile.nationality.name
              : "-----";
            modalData.value.dateOfBirth = result.profile.dateOfBirth
              ? result.profile.dateOfBirth
              : "-----";
            modalData.value.maritalStatus = result.profile.maritalStatus?.name
              ? result.profile.maritalStatus.name
              : "-----";
            modalData.value.mobileNumber = result.applicant.phoneNumber
              ? result.applicant.phoneNumber
              : "-----";
            modalData.value.email = result.applicant.emailAddress
              ? result.applicant.emailAddress
              : "-----";
            modalData.value.reviewer = result.licenseReviewer
              ? result.licenseReviewer
              : {};

            modalData.value.professionalTypes = result.licenseProfessions;
            modalData.value.profile = result.profile;
            modalData.value.certifiedDate = result.certifiedDate;
            modalData.value.licenseExpirationDate =
              result.licenseExpirationDate;
            modalData.value.documents = result.documents;
            modalData.value.remark = result ? result.remark : "";
            modalData.value.id = result.id;
            renewal = result ? result : {};
            isLoading.value = false;
          }
        });
    };
    const release = () => {
      isLoading.value = true;
      renewal.acceptedFields = [];

      renewal.documents.forEach((element) => {
        renewal.acceptedFields.push(element.fileName);
      });

      isLoading.value = false;
      renewal.declinedFields = [];
      let req = {
        action: "ApproveEvent",
        data: renewal,
      };
      let smsData = {
        recipients: [
          renewal.value && renewal.value.applicant
            ? "251" + renewal.value.applicant.phoneNumber
            : "",
        ],
        message:
          renewal && renewal.profile
            ? "Dear " +
              renewal.profile.name +
              renewal.profile.fatherName +
              ", Your license with license number " +
              renewal.renewalCode +
              " has been released from a declined state. Thank you for using eHPEL,https://www.hrl.moh.gov.et"
            : "",
      };

      store
        .dispatch("reviewer/editRenewal", req)
        .then((res) => {
          isLoading.value = false;
          if (res.statusText == "Created") {
            store.dispatch("sms/sendSms", smsData).then(() => {
              toast.success("Application approved Successfully", {
                timeout: 5000,
                position: "bottom-center",
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                icon: true,
              });
              setTimeout(() => {
                window.location.reload();
              }, 3000);
            });
          } else {
            toast.error("Please try again", {
              timeout: 5000,
              position: "bottom-center",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true,
            });
          }
        })
        .catch(() => {
          toast.error("Please try again", {
            timeout: 5000,
            position: "bottom-center",
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            icon: true,
          });
        });
    };
    watch(props.modalDataId, () => {
      isLoading.value = true;
      check();
    });
    return {
      showModal,
      show,
      check,
      release,
      isLoading,
      showRes,
      showGenerateModal,
      showOptions,
      googleApi,
      modalData,
      adminData,
    };
  },
};
</script>
<style scoped>
.shadow-lg {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 34%), 0 2px 4px -1px rgb(0 0 0 / 6%);
}
</style>
