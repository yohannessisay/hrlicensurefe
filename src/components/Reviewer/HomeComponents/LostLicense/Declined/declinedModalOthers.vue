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
               
              hover:bg-purple-700 hover: 
              focus:bg-purple-700
              focus: 
              focus:outline-none
              focus:ring-0
              active:bg-purple-800 active: 
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
        <div class="vld-parent mt-4">
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
                        {{ modalData.name }}
                      </span>
                      's Application
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
                                  type="image/jpg"
                                />

                                <img
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
                              {{ modalData ? modalData.name : "" }}
                            </p>
                            <p class="text-gray-500">
                              <span class="font-semibold text-primary-700 mb-1"
                                >Gender:</span
                              >
                              {{ modalData ? modalData.gender : "" }}
                            </p>
                            <p class="text-gray-500">
                              <span class="font-semibold text-primary-700 mb-1"
                                >Nationality:</span
                              >
                              {{ modalData ? modalData.nationality : "" }}
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
                                >Marital Status:</span
                              >
                              {{ modalData ? modalData.maritalStatus : "" }}
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
                                 
                                w-40
                                h-40
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
                              {{ modalData.mobileNumber }}
                            </p>
                            <p class="text-gray-500">
                              <span class="font-medium text-primary-700 mb-1"
                                >Email:</span
                              >
                              {{ modalData.email }}
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
                                 
                                w-48
                                h-64
                                flex
                                items-center
                                justify-center
                              "
                            >
                              <i class="fa fa-building fa-4x"></i>
                            </div>
                          </div>
                          <div class="grow ml-6 mb-4">
                            <h2 class="font-bold mb-1">Education Detail</h2>

                            <div
                              class="
                                border-2
                                p-2
                                rounded-lg
                                m-1
                                 
                                text-primary-500
                              "
                            >
                              <p class="text-gray-500">
                                <span
                                  class="font-semibold text-primary-700 mb-1"
                                  >Department:</span
                                >
                                {{
                                  modalData &&
                                  modalData.data &&
                                  modalData.data.department
                                    ? modalData.data.department.name
                                    : ""
                                }}
                              </p>
                              <p class="text-gray-500">
                                <span
                                  class="font-semibold text-primary-700 mb-1"
                                  >Education Level:</span
                                >

                                {{
                                  modalData &&
                                  modalData.data &&
                                  modalData.data.GSProfessionals &&
                                  modalData.data.GSProfessionals.educationLevel
                                    ? modalData.data.GSProfessionals
                                        .educationLevel.name
                                    : ""
                                }}
                              </p>
                              <p class="text-gray-500">
                                <span
                                  class="font-semibold text-primary-700 mb-1"
                                  >Profession:</span
                                >
                                {{
                                  modalData &&
                                  modalData.data &&
                                  modalData.data.GSProfessionals &&
                                  modalData.data.GSProfessionals
                                    .professionalTypes
                                    ? modalData.data.GSProfessionals
                                        .professionalTypes.name
                                    : ""
                                }}
                              </p>
                            </div>
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
                        <h2 class="text-primary-600 text-xl font-bold">
                          Actions
                        </h2>
                        <button
                          v-if="
                            (adminData.expertLevel.code == 'FED' &&
                              adminData.role.code == 'ADM') ||
                            (adminData.expertLevel.code == 'REG' &&
                              adminData.role.code == 'ADM') ||
                            (adminData.expertLevel.code == 'REG' &&
                              adminData.role.code == 'TL')
                          "
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
                        <button
                          class="
                            inline-block
                            px-6
                            py-2.5
                            bg-blue-600
                            hover:text-primary-600 hover:border
                            text-white
                            font-medium
                            text-xs
                            leading-tight
                            uppercase
                            rounded
                             
                            hover:bg-blue-700 hover: 
                            focus:bg-blue-700
                            focus: 
                            focus:outline-none
                            focus:ring-0
                            active:bg-blue-800 active: 
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
                          Show Attached Documents
                        </button>
                      </div>
                    </div>

                    <div class="collapse mt-12" id="collapseExample">
                      <div class="block p-6 rounded-lg   bg-white">
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

                                <h4 style="font-weight: bold">Document Type</h4>
                                <h5 class="text-primary-500">
                                  {{
                                    document.documentType
                                      ? document.documentType.name
                                      : ""
                                  }}
                                </h5>
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
            modal-footer p-2
            flex flex-shrink-0 flex-wrap
            items-center
            justify-end
            border-t border-grey-100
            rounded-b-md
          "
        >
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
              hover:border-primary-600
               
              hover:bg-white hover:text-primary-700
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
import { useStore } from "vuex";
import { ref, watch } from "vue";
import moment from "moment";
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import { googleApi } from "@/composables/baseURL";
import { useToast } from "vue-toastification";
export default {
  props: ["modalDataIdOthers"],
  components: {
    Loading,
  },
  computed: {
    moment: () => moment,
  },
  setup(props) {
    const store = useStore();
    const toast = useToast();
    let show = ref(true);
    let adminId = +localStorage.getItem("adminId");
    let goodstanding = {};
    const isLoading = ref(true);
    let reviewerAdminId = ref(0);
    let adminData = JSON.parse(localStorage.getItem("allAdminData"));
    const showModal = () => {
      show.value = true;
    };

    const onCancel = () => {
      isLoading.value = false;
    };
    const modalData = ref({});
    let result = {};

    const check = () => {
      store
        .dispatch(
          "reviewer/getGoodStandingApplication",
          props.modalDataIdOthers.id
        )
        .then((res) => {
          if (
            res.data.status == "Success" &&
            res.data.message !=
              "Goodstanding total count retrieved successfully!"
          ) {
            result = res.data.data;
            modalData.value.name =
              (result && result.profile ? result.profile.name : "") +
              " " +
              (result && result.profile ? result.profile.fatherName : "") +
              "  " +
              (result && result.profile ? result.profile.grandFatherName : "");
            modalData.value.gender = result.profile.gender
              ? result.profile.gender
              : "-----";
            modalData.value.nationality = result.profile.nationality?.name
              ? result.profile.nationality?.name
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

            modalData.value.profile = result.profile;
            modalData.value.professionalTypes = result.licenseProfessions;
            modalData.value.certifiedDate = result.certifiedDate;
            modalData.value.licenseExpirationDate =
              result.licenseExpirationDate;
            modalData.value.documents = result.documents;
            goodstanding = result ? result : {};
            modalData.value.data = result;
            isLoading.value = false;
          }
        });
    };
    const release = () => {
      isLoading.value = true;
      goodstanding.acceptedFields = [];

      goodstanding.documents.forEach((element) => {
        goodstanding.acceptedFields.push(element.fileName);
      });

      isLoading.value = false;
      goodstanding.declinedFields = [];
      let req = {
        action: "ApproveEvent",
        data: goodstanding,
      };
      let smsData = {
        recipients: [
          goodstanding.value && goodstanding.value.applicant
            ? "251" + goodstanding.value.applicant.phoneNumber
            : "",
        ],
        message:
          goodstanding && goodstanding.profile
            ? "Dear " +
              goodstanding.profile.name +
              goodstanding.profile.fatherName +
              ", Your license with license number " +
              goodstanding.goodStandingCode +
              " has been released from a declined state. Thank you for using eHPEL,https://www.hrl.moh.gov.et"
            : "",
      };

      store
        .dispatch("reviewer/editGoodStanding", req)
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
    watch(props.modalDataIdOthers, () => {
      isLoading.value = true;
      check();
    });

    return {
      adminId,
      release,
      reviewerAdminId,
      showModal,
      check,
      isLoading,
      onCancel,
      adminData,
      modalData,
      googleApi,
    };
  },
};
</script>
 