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
              font-bold text-xl
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
                              <img
                                src="../../../../../assets/showLicense/profile.png"
                                alt=""
                                style="height: 152px; width: 150px"
                              />
                            </div>
                          </div>
                          <div class="grow ml-6">
                            <h2 class="font-extrabold text-2xl mb-1">
                              Personal Info
                            </h2>

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
                                  class="
                                    font-semibold
                                    text-lg text-primary-700
                                    mb-1
                                  "
                                  >Full Name:</span
                                >
                                <span class="text-grey-800 ml-2">{{
                                  modalData.name ? modalData.name : ""
                                }}</span>
                              </p>
                              <p class="text-gray-500 ">
                                <span
                                  class="font-semibold text-primary-700 mb-1"
                                  >Gender:</span
                                >
                                <span class="text-grey-800 ml-2">{{
                                  modalData.gender ? modalData.gender : ""
                                }}</span>
                              </p>
                              <p class="text-gray-500">
                                <span
                                  class="font-semibold text-primary-700 mb-1"
                                  >Nationality:</span
                                >
                                <span class="text-grey-800 ml-2">
                                  {{
                                    modalData.nationality
                                      ? modalData.nationality
                                      : ""
                                  }}</span
                                >
                              </p>
                              <p class="text-gray-500">
                                <span
                                  class="font-semibold text-primary-700 mb-1"
                                  >Date Of Birth:</span
                                >
                                <span class="text-grey-800 ml-2">
                                  {{
                                    modalData.dateOfBirth
                                      ? modalData.dateOfBirth.slice(0, 10)
                                      : ""
                                  }}</span
                                >
                              </p>
                              <p class="text-gray-500">
                                <span
                                  class="font-semibold text-primary-700 mb-1"
                                  >Marital Status:</span
                                >
                                <span class="text-grey-800 ml-2">
                                  {{
                                    modalData.maritalStatus
                                      ? modalData.maritalStatus
                                      : ""
                                  }}</span
                                >
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
                                <span class="font-medium text-primary-700 mb-1"
                                  >Mobile Number:</span
                                >
                                <span class="text-grey-800 ml-2">{{
                                  modalData.mobileNumber
                                }}</span>
                              </p>
                              <p class="text-gray-500">
                                <span class="font-medium text-primary-700 mb-1"
                                  >Email:</span
                                >
                                <span class="text-grey-800 ml-2">{{
                                  modalData.email
                                }}</span>
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
                        <div class="flex align-center">
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
                          <div class="grow ml-6">
                            <h2 class="font-bold mb-1">Education Info</h2>
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
                                <span class="font-medium text-primary-700 mb-1"
                                  >Profession Name:</span
                                >
                                <span class="text-grey-800 ml-2">
                                  {{
                                    modalData.data &&
                                    modalData.data.GSProfessionals
                                      ? modalData.data.GSProfessionals
                                          .professionalTypes.name
                                      : ""
                                  }}</span
                                >
                              </p>
                              <p class="text-gray-500">
                                <span class="font-medium text-primary-700 mb-1"
                                  >Department:</span
                                >
                                <span class="text-grey-800 ml-2">
                                  {{
                                    modalData.data && modalData.data.department
                                      ? modalData.data.department.name
                                      : ""
                                  }}</span
                                >
                              </p>
                              <p class="text-gray-500">
                                <span class="font-medium text-primary-700 mb-1"
                                  >Education Level:</span
                                >
                                <span class="text-grey-800 ml-2">
                                  {{
                                    modalData.data &&
                                    modalData.data.GSProfessionals
                                      ? modalData.data.GSProfessionals
                                          .educationLevel.name
                                      : ""
                                  }}</span
                                >
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
                              <i class="fa fa-book fa-4x"></i>
                            </div>
                          </div>
                          <div class="grow ml-6">
                            <h2 class="font-bold mb-1">Letter Detail</h2>
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
                                  class="font-bold text-xl text-primary-700 mb-1"
                                  >Printed Date:</span
                                >
                                <span class="text-grey-800">
                                  {{
                                    modalData &&
                                    modalData.data &&
                                    modalData.data.certifiedDate
                                      ? modalData.data.certifiedDate.slice(
                                          0,
                                          10
                                        )
                                      : ""
                                  }}</span
                                >
                              </p>

                              <p class="text-gray-500">
                                <span
                                  class="font-bold text-xl text-primary-700 mb-1"
                                  >Reviewer Name:</span
                                >
                                <span class="text-grey-800">
                                  {{
                                    modalData &&
                                    modalData.data &&
                                    modalData.data.goodstandingReviewer
                                      ? modalData.data.goodstandingReviewer
                                          .reviewer.name
                                      : ""
                                  }}</span
                                >
                              </p>
                              <p class="text-gray-500">
                                <span
                                  class="font-bold text-xl text-primary-700 mb-1"
                                  >Reviewer Phone:</span
                                >
                                <span class="text-grey-800">
                                  {{
                                    modalData &&
                                    modalData.data &&
                                    modalData.data.goodstandingReviewer
                                      ? modalData.data.goodstandingReviewer
                                          .reviewer.phoneNumber
                                      : ""
                                  }}</span
                                >
                              </p>
                              <p class="text-gray-500">
                                <span
                                  class="font-bold text-xl text-primary-700 mb-1"
                                  >Reviewer Email:</span
                                >
                                <span class="text-grey-800">
                                  {{
                                    modalData &&
                                    modalData.data &&
                                    modalData.data.goodstandingReviewer
                                      ? modalData.data.goodstandingReviewer
                                          .reviewer.email
                                      : ""
                                  }}</span
                                >
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
            modal-footer p-2
            flex flex-shrink-0 flex-wrap
            items-center
            justify-end
            p-2
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
              font-bold  
              text-xs
              leading-tight
              uppercase
              rounded
               
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
              font-bold  
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

export default {
  name: "Modal",
  components: { Loading },
  props: ["modalDataId"],
  setup(props) {
    const store = useStore();
    const showModal = () => {
      this.show = true;
    };
    const show = ref(true);
    const showRes = ref(true);
    const showOptions = ref(true);
    const isLoading = ref(true);
    const modalData = ref({});
    let result = {};
    const check = () => {
      store
        .dispatch("reviewer/getGoodStandingApplication", props.modalDataId.id)
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
            modalData.value.profile = result.profile;
            modalData.value.professionalTypes = result.licenseProfessions;
            modalData.value.certifiedDate = result.certifiedDate;
            modalData.value.licenseExpirationDate =
              result.licenseExpirationDate;
            modalData.value.documents = result.documents;
            modalData.value.data = result;
            modalData.value.id = result.id;
            isLoading.value = false;
          }
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
      isLoading,
      showRes,
      showOptions,
      googleApi,
      modalData,
    };
  },
};
</script>
 
