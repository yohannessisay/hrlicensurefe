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
    id="othersModal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="othersModalLabel"
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
            :can-cancel="true"
            :on-cancel="onCancel"
            :is-full-page="false"
            :color="'#2F639D'"
            :opacity="1"
          ></loading>
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
                      's Application
                    </h2>
                  </div>
                </div>
                <div class="vld-parent mt-4">
                  <loading
                    :active="isLoading"
                    :can-cancel="true"
                    :on-cancel="onCancel"
                    :is-full-page="false"
                    :color="'#2F639D'"
                    :opacity="1"
                  ></loading>
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
                                  <span class="text-grey-800 ml-1">
                                    {{
                                      modalData.name ? modalData.name : ""
                                    }}</span
                                  >
                                </p>
                                <p class="text-gray-500">
                                  <span
                                    class="font-semibold text-primary-700 mb-1"
                                    >Gender:</span
                                  >
                                  <span class="text-grey-800 ml-1">
                                    {{
                                      modalData.gender ? modalData.gender : ""
                                    }}</span
                                  >
                                </p>
                                <p class="text-gray-500">
                                  <span
                                    class="font-semibold text-primary-700 mb-1"
                                    >Nationality:</span
                                  >
                                  <span class="text-grey-800 ml-1">
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
                                  <span class="text-grey-800 ml-1">
                                    {{
                                      modalData.dateOfBirth
                                        ? modalData.dateOfBirth.slice(0, 10)
                                        : "-----"
                                    }}</span
                                  >
                                </p>
                                <p class="text-gray-500">
                                  <span
                                    class="font-semibold text-primary-700 mb-1"
                                    >Marital Status:</span
                                  >
                                  <span class="text-grey-800 ml-1">{{
                                    modalData.maritalStatus
                                      ? modalData.maritalStatus
                                      : ""
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
                                <i class="fa fa-right-left fa-4x"></i>
                              </div>
                            </div>
                            <div
                              class="grow ml-6"
                              v-if="adminRole && adminRole != 'REV'"
                            >
                              <h2 class="font-bold mb-1">Transfer To</h2>

                              <div class="flex items-center">
                                <label
                                  for="email"
                                  class="
                                    block
                                    text-sm
                                    font-semibold
                                    leading-5
                                    text-gray-700
                                    sr-only
                                  "
                                >
                                  Users
                                </label>
                              </div>
                              <label class="block text-left">
                                <div>
                                  <div class="w-full relative">
                                    <div
                                      class="
                                        mt-1
                                        ml-1
                                        relative
                                        border border-grey-200
                                        overflow-hidden
                                        focus:border-primary-600
                                        rounded-md
                                        shadow-sm
                                      "
                                    >
                                      <input
                                        id="email"
                                        @keyup="showOptions = true"
                                        v-model="reviewer.name"
                                        class="w-full px-3 py-3 "
                                        style="border: none"
                                        autocomplete="off"
                                        placeholder="Select reviewer by typing a name"
                                      />
                                    </div>
                                    <div
                                      v-show="
                                        resultQuery().length && showOptions
                                      "
                                      class="
                                        w-full
                                        bg-white
                                        border border-gray-300
                                        mt-2
                                        ml-1
                                        max-height-12
                                        overflow-hidden overflow-y-scroll
                                        rounded-lg
                                         
                                        text-left
                                        dropdown-menu
                                      "
                                      style="height: 148px; border: none"
                                    >
                                      <ul class="py-1">
                                        <li
                                          v-for="value in resultQuery()"
                                          :key="value.id"
                                          @click="setInput(value)"
                                          class="
                                            dropdown-toggle
                                            px-4
                                            py-2
                                            cursor-pointer
                                            hover:bg-primary-700
                                            hover:text-white
                                          "
                                        >
                                          {{ value.name }}
                                        </li>
                                      </ul>
                                    </div>
                                    <div>
                                      <textarea
                                        placeholder="Reason for transfer"
                                        v-model="transferRemark"
                                        class="
                                          resize-none
                                          tArea
                                          border
                                          rounded-lg
                                          flex
                                          mt-4
                                          ml-1
                                          w-full
                                        "
                                      ></textarea>
                                      <button
                                        class="
                                          inline-block
                                          px-6
                                          py-2.5
                                          bg-primary-600
                                          text-white
                                          font-semibold
                                          text-xs
                                          leading-tight
                                          uppercase
                                          rounded
                                           
                                          mt-4
                                          ml-1
                                          hover:bg-white
                                          hover: 
                                          hover:text-primary-600
                                          transition
                                          duration-150
                                          ease-in-out
                                          mb-8
                                        "
                                        @click="transferReviewer()"
                                      >
                                        Transfer
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </label>
                            </div>
                            <div v-if="adminRole && adminRole == 'REV'">
                              <h2 class="ml-4">
                                Please Contact Your Team Leader Or Admin For
                                Transfer
                              </h2>
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
                                  <span
                                    class="font-semibold text-primary-700 mb-1"
                                    >Mobile Number:</span
                                  >
                                  <span class="text-grey-800 ml-1">
                                    {{
                                      modalData.mobileNumber
                                        ? modalData.mobileNumber
                                        : ""
                                    }}</span
                                  >
                                </p>
                                <p class="text-gray-500">
                                  <span
                                    class="font-semibold text-primary-700 mb-1"
                                    >Email:</span
                                  >
                                  <span class="text-grey-800 ml-1">
                                    {{
                                      modalData.email ? modalData.email : ""
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
                                  <span
                                    class="font-medium text-primary-700 mb-1"
                                    >Profession Name:</span
                                  >
                                  <span class="text-grey-800 ml-2">
                                    {{
                                      modalData.data &&
                                      modalData.data.GSProfessionals &&
                                      modalData.data.GSProfessionals
                                        .professionalTypes
                                        ? modalData.data.GSProfessionals
                                            .professionalTypes.name
                                        : ""
                                    }}</span
                                  >
                                </p>
                                <p class="text-gray-500">
                                  <span
                                    class="font-medium text-primary-700 mb-1"
                                    >Department:</span
                                  >
                                  <span class="text-grey-800 ml-2">
                                    {{
                                      modalData.data &&
                                      modalData.data.department
                                        ? modalData.data.department.name
                                        : ""
                                    }}</span
                                  >
                                </p>
                                <p class="text-gray-500">
                                  <span
                                    class="font-medium text-primary-700 mb-1"
                                    >Education Level:</span
                                  >
                                  <span class="text-grey-800 ml-2">
                                    {{
                                      modalData.data &&
                                      modalData.data.GSProfessionals &&
                                      modalData.data.GSProfessionals
                                        .professionalTypes
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
                      </div>
                    </div>
                    <div
                      class="bg-primary-300 mt-4 ml-1 p-4 rounded-lg"
                      v-if="
                        modalData &&
                          modalData.data &&
                          modalData.data.goodstandingReviewer &&
                          modalData.data.goodstandingReviewer.transferFrom
                      "
                    >
                      <h2 class="text-xl text-yellow-300">
                        This license is a transfer from
                      </h2>

                      <div class="grid grid-cols-2">
                        <div class="grid grid-cols-2">
                          <h5 class="text-lg  ">Reviewer Name</h5>

                          <h5 class="text-lg text-primary-600">
                            {{
                              modalData &&
                              modalData.data &&
                              modalData.data.goodstandingReviewer &&
                              modalData.data.goodstandingReviewer.transferFrom
                                ? modalData.data.goodstandingReviewer
                                    .transferFrom.name
                                : ""
                            }}
                          </h5>
                        </div>
                      </div>
                      <div class="grid grid-cols-2">
                        <div class="grid grid-cols-2">
                          <h5 class="text-lg  ">With a reason of</h5>

                          <h5 class="text-lg text-primary-600">
                            {{
                              modalData &&
                              modalData.data &&
                              modalData.data.goodstandingReviewer &&
                              modalData.data.goodstandingReviewer.transferFrom
                                ? modalData.data.goodstandingReviewer
                                    .transferRemark
                                : ""
                            }}
                          </h5>
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
            rounded-b-md
            mt-2
            p-2
          "
                >
                  <button
                    type="button"
                    class="
              inline-block
             
              
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
  </div>
</template>
<script>
import { useStore } from "vuex";
import { ref, watch } from "vue";
import moment from "moment";
import Loading from "vue3-loading-overlay";
// Import stylesheet
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import { useToast } from "vue-toastification";
export default {
  props: ["modalDataIdOthers", "reviewers"],
  components: {
    Loading,
  },
  computed: {
    moment: () => moment,
  },
  setup(props) {
    const store = useStore();
    const toast = useToast();
    let adminRole = localStorage.getItem("role");
    let show = ref(true);
    let transferRemark = ref("");
    let role = ref({});

    let isLoading = ref(true);
    let showOptions = ref(false);
    let reviewer = ref({ id: "", name: "", expertLevel: "", role: "" });

    let transfer = ref({
      reviewerId: "",
      licenseId: "",
      createdByAdminId: "",
    });
    const showModal = () => {
      show.value = true;
    };
    const resultQuery = () => {
      if (reviewer.value.name) {
        let data = props.reviewers.filter((item) => {
          return reviewer.value.name
            .toLowerCase()
            .split(" ")
            .every((v) => item.name.toLowerCase().includes(v));
        });

        return data;
      } else {
        return [];
      }
    };
    const onCancel = () => {
      isLoading.value = false;
    };

    const setInput = (value) => {
      reviewer.value = {
        id: value.id,
        name: value.name,
        expertLevel: value.expertLevel.code,
        role: value.role.code,
      };
      transfer.value.reviewerId = value.id;
      showOptions.value = false;
    };
    watch(props.modalDataIdOthers, () => {
      isLoading.value = true;
      check();
    });
    const modalData = ref({});
    let result;
    const transferReviewer = () => {
      if (transferRemark.value == "" || transfer.value.reviewerId == null) {
        toast.error(
          transferRemark.value == ""
            ? "Transfer reason is required"
            : "Please select reviewer to tansfer to",
          {
            timeout: 5000,
            position: "bottom-center",
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            icon: true,
          }
        );
        return;
      } else {
        transfer.value = {
          goodStandingId: props.modalDataIdOthers.id,
          reviewerId: transfer.value.reviewerId,
          createdByAdminId: +localStorage.getItem("adminId"),
          transferRemark: transferRemark.value,
          expertLevelId: modalData.value.data.expertLevelId,
        };

        isLoading.value = true;
        store
          .dispatch("reviewer/transferGoodStandingReview", transfer.value)
          .then(() => {
            toast.success("Selected reviewer is successfully assigned", {
              timeout: 5000,
              position: "bottom-center",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true,
            });
            isLoading.value = false;
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          })
          .catch(() => {
            toast.error("Error Occured", {
              timeout: 5000,
              position: "bottom-center",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true,
            });
            isLoading.value = false;
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          });
      }
    };

    const check = () => {
      store
        .dispatch(
          "reviewer/getGoodStandingApplication",
          props.modalDataIdOthers.id
        )
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
      adminRole,
      show,
      reviewer,
      showOptions,
      showModal,
      isLoading,
      resultQuery,
      setInput,
      modalData,
      transferRemark,
      transferReviewer,
      onCancel,
    };
  },
};
</script>

<style scoped></style>
