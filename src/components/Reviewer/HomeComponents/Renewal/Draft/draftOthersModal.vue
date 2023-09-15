<template>
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
           justify-end
           
            p-2
            rounded-t-md
          "
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
              ease-in-out"
            data-bs-dismiss="modal"
            aria-label="Close"
          ><i class="fa fa-close fa-2x"></i></button>
        </div>

        <div class="modal-body relative p-4">
          <div class="container px-6 mx-auto">
            <section class="text-gray-800">
              <div class="flex justify-center">
                <div class="text-center lg:max-w-3xl md:max-w-xl">
                  <h2 class="text-2xl font-bold mb-12 px-6">
                    Showing
                    <span class="text-2xl font-bold mb-12 px-6">
                      {{ modalData.name }}
                    </span>
                    's License Data
                  </h2>
                </div>
              </div>
              <div class="vld-parent">
                <loading
                  :active="isLoading"
                  :can-cancel="true"
                  :on-cancel="onCancel"
                  :is-full-page="false"
                  :color="'#2F639D'"
                  :opacity="0.7"
                ></loading>
                <div class="flex flex-wrap">
                  <div class="grow-0 shrink-0 basis-auto w-full lg:w-11/12">
                    <div class="flex flex-wrap">
                      <div
                        class="
                          mb-12
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
                              {{ modalData.name }}
                            </p>
                            <p class="text-gray-500">
                              <span class="font-semibold text-primary-700 mb-1"
                                >Gender:</span
                              >
                              {{ modalData.gender }}
                            </p>
                            <p class="text-gray-500">
                              <span class="font-semibold text-primary-700 mb-1"
                                >Nationality:</span
                              >
                              {{ modalData.nationality }}
                            </p>
                            <p class="text-gray-500">
                              <span class="font-semibold text-primary-700 mb-1"
                                >Date Of Birth:</span
                              >
                              {{
                                modalData.dateOfBirth
                                  ? modalData.dateOfBirth.slice(0, 10)
                                  : "-----"
                              }}
                            </p>
                            <p class="text-gray-500">
                              <span class="font-semibold text-primary-700 mb-1"
                                >marital Status:</span
                              >
                              {{ modalData.maritalStatus }}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        class="
                          mb-12
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
                                  h-48
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
                                v-for="education in modalData.data
                              ? modalData.data.educations
                              : []"
                                :key="education.id"
                              >
                                <p class="text-gray-500">
                                  <span
                                    class="font-semibold text-primary-700 mb-1"
                                    >Department:</span
                                  >
                                  {{
                                    education.department
                                      ? education.department.name
                                      : ""
                                  }}
                                </p>
                                <p class="text-gray-500">
                                  <span
                                    class="font-semibold text-primary-700 mb-1"
                                    >Education Level:</span
                                  >
                                  {{
                                    education.educationLevel
                                      ? education.educationLevel.name
                                      : ""
                                  }}
                                </p>
                                <p class="text-gray-500">
                                  <span
                                    class="font-semibold text-primary-700 mb-1"
                                    >Profession:</span
                                  >
                                  {{
                                    education.professionType
                                      ? education.professionType.name
                                      : ""
                                  }}
                                </p>
                                <p class="text-gray-500">
                                  <span
                                    class="font-semibold text-primary-700 mb-1"
                                    >Institution:</span
                                  >
                                  {{
                                    education.institution
                                      ? education.institution.name
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
                      ></div>
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
            rounded-b-md
          "
                >
                  <button
                    type="button"
                    class="
              inline-block
             
              mt-4
              text-white
              bg-primary-600
              font-semibold
              text-xs
              leading-tight
              uppercase
              rounded
               
              hover:text-primary-600 hover: 
             
              active:bg-purple-800 active: 
              transition
              duration-150
              ease-in-out
            "
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
            </section>
          </div>
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
// Import stylesheet
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import { googleApi } from "@/composables/baseURL";

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

    let show = ref(true);

    let role = ref({});
    let isLoading = ref(true);

    const showModal = () => {
      show.value = true;
    };

    const onCancel = () => {
      isLoading.value = false;
    };

    watch(props.modalDataIdOthers, () => {
     isLoading.value=true
      check();
    });
    const modalData = ref({});
    let result;
    const check = () => {
      store
        .dispatch("reviewer/getRenewalApplication", props.modalDataIdOthers.id)
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
            modalData.value.nationality = result.profile
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
            modalData.value.profile = result.profile;
            modalData.value.professionalTypes = result.licenseProfessions;
            modalData.value.certifiedDate = result.certifiedDate;
            modalData.value.licenseExpirationDate =
              result.licenseExpirationDate;
            modalData.value.data = result;

            isLoading.value = false;
          }
        });
    };
    return {
      role,
      show,
      showModal,
      isLoading,
      modalData,
      googleApi,
      onCancel,
    };
  },
};
</script>

<style scoped>
</style>