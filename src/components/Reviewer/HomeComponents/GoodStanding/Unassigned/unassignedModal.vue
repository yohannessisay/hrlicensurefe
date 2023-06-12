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
        <div class="vld-parent mt-4">
          <loading
            :active="isLoadingStart"
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
                <div class="vld-parent">
                  <loading
                    :active="isLoading"
                    :can-cancel="true"
                    :on-cancel="onCancel"
                    :is-full-page="fullPage"
                    :color="'#2F639D'"
                    :opacity="0.7"
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
                                  shadow-lg
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
                                  shadow-md
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
                                    >Martial Status:</span
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
                          <div class="flex align-center">
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
                                <i class="fa fa-link fa-4x"></i>
                              </div>
                            </div>

                            <div
                              class="grow ml-6"
                              v-if="adminRole && adminRole != 'REV'"
                            >
                              <h2 class="font-bold mb-1">Assign To</h2>

                              <div class="flex items-center">
                                <label
                                  for="email"
                                  class="
                                    block
                                    text-sm
                                    font-medium
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
                                        border border-gray-300
                                        overflow-hidden
                                        rounded-md
                                        shadow-sm
                                      "
                                    >
                                      <input
                                        id="email"
                                        @keyup="showOptions = true"
                                        v-model="reviewer.name"
                                        class="w-full px-3 py-3"
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
                                        shadow-lg
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
                                          {{
                                            value && value.name
                                              ? value.name
                                              : ""
                                          }}
                                        </li>
                                      </ul>
                                    </div>
                                    <div
                                      v-for="button in modalData.buttons"
                                      :key="button.id"
                                    >
                                      <button
                                        v-if="button.code == 'AT'"
                                        class="
                                          inline-block
                                          px-6
                                          py-2.5
                                          mt-4
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
                                        @click="
                                          assignReviewer({
                                            action: button.action,
                                            type: 'toOthers',
                                          })
                                        "
                                      >
                                        {{
                                          button && button.name
                                            ? button.name
                                            : ""
                                        }}
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </label>
                            </div>

                            <div v-if="adminRole && adminRole == 'REV'">
                              <div
                                v-for="button in modalData.buttons"
                                :key="button.id"
                              >
                                <button
                                  v-if="button.code == 'AT'"
                                  class="
                                          inline-block
                                          px-6
                                          py-2.5
                                          mt-4
                                          bg-primary-700
                                          text-white
                                          font-medium
                                          text-xs
                                          ml-4
                                          leading-tight
                                          uppercase
                                          rounded
                                          shadow-lg
                                          hover:bg-white hover:text-primary-600
                                          transition
                                          duration-150
                                          ease-in-out
                                        "
                                  @click="
                                    assignReviewer({
                                      action: button.action,
                                      type: 'toSelf',
                                    })
                                  "
                                >
                                  {{ button && button.name ? button.name : "" }}
                                  Self
                                </button>
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
                                  shadow-lg
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
                                  shadow-md
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
                                        .educationLevel
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
                              <div
                                class="
                                  border-2
                                  p-2
                                  rounded-lg
                                  m-1
                                  shadow-md
                                  text-primary-500
                                "
                              >
                                <p class="text-gray-500">
                                  <span
                                    class="font-medium text-primary-700 mb-1"
                                    >Mobile Number:</span
                                  >
                                  <span class="text-grey-800 ml-2">{{
                                    modalData.mobileNumber
                                  }}</span>
                                </p>
                                <p class="text-gray-500">
                                  <span
                                    class="font-medium text-primary-700 mb-1"
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
              shadow-lg
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
import { ref, onMounted, watch } from "vue";
import moment from "moment";
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";
export default {
  props: ["modalDataId", "reviewers"],
  components: {
    Loading,
  },
  computed: {
    moment: () => moment,
  },
  setup(props) {
    const store = useStore();
    const toast = useToast();
    const router = useRouter();
    let show = ref(true);
    let showRes = ref(false);
    let showOptions = ref(false);
    let reviewer = ref({ id: "", name: "", expertLevel: "", role: "" });
    let adminId = +localStorage.getItem("adminId");
    let adminRole = localStorage.getItem("role");
    let assign = ref({
      reviewerId: "",
      goodStandingId: "",
    });
    let role = ref({});
    let isLoadingStart = ref(true);
    let isLoading = ref(false);
    const fullPage = ref(false);
    const licenseData = ref({});
    let reviewerAdminId = ref(0);

    const fetchRole = () => {
      role.value = JSON.parse(localStorage.getItem("allAdminData")).role;
    };

    const assignReviewer = (data) => {
      if (data.type == "toSelf") {
        assign.value = {
          reviewerId: +localStorage.getItem("adminId"),
          createdByAdminId: +localStorage.getItem("adminId"),
          goodStandingId: licenseData.value.id,
        };
      } else {
        assign.value = {
          reviewerId: assign.value.reviewerId,
          createdByAdminId: +localStorage.getItem("adminId"),
          goodStandingId: licenseData.value.id,
        };
      }
      let smsData = {
        recipients: [
          modalData.value && modalData.value.mobileNumber
            ? "251" + modalData.value.mobileNumber
            : "",
        ],
        message: licenseData.value
          ? modalData.value.name
            ? "Dear " +
              modalData.value.name +
              " your applied good standing letter for " +
              licenseData.value.goodStandingCode +
              " has been assigned a reviewer , after careful examination of your uploaded documents by our reviewers we will get back and notify you on each steps, Thank you for using eHPL. https://hrl.moh.gov.et/"
            : ""
          : "",
      };
      isLoading.value = true;
      let userNotification = {
        user_id:
          modalData.value.data && modalData.value.data.applicant
            ? modalData.value.data.applicant.id
            : null,
        reviewer_id: assign.value.reviewerId,
        goodstanding_id: modalData.value.data ? modalData.value.data.id : null,
        message: modalData.value.data
          ? // eslint-disable-next-line prettier/prettier
            `Dear applicant your submitted goodstanding application letter of number ${modalData.value.data.goodStandingCode} has been assigned to a reviewer.`
          : "",
        type: "applicant_good_standing",
        status: "new",
      };

      store
        .dispatch("reviewer/assignGoodStandingReviewer", assign.value)
        .then((response) => {
          if (response.statusText == "Created") {
            store.dispatch("sms/sendSms", smsData).then(() => {
              toast.success("Selected Rviewer assigned Successfully", {
                timeout: 5000,
                position: "bottom-center",
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                icon: true,
              });
              isLoading.value = false;

              store
                .dispatch("notification/notifyApplicant", userNotification)
                .then((res) => {
                  if (res && res.status == "Success") {
                    let notification = {
                      user_id:
                        modalData.value.data && modalData.value.data.applicant
                          ? modalData.value.data.applicant.id
                          : null,
                      reviewer_id: assign.value.reviewerId,
                      goodstanding_id: modalData.value.data
                        ? modalData.value.data.id
                        : null,
                      message: modalData.value.data
                        ? // eslint-disable-next-line prettier/prettier
                          `Dear reviewer , a  new submitted goodstanding application with code ${modalData.value.data.goodStandingCode} has been assigned to you.`
                        : "",
                      type: "reviewer_good_standing",
                      status: "new",
                    };
                    store.dispatch("notification/notifyReviewer", notification);
                    router.push({ path: "/admin/goodStanding/assigned" });
                    setTimeout(() => {
                      location.reload();
                    }, 100);
                  }
                });
            });
          } else {
            toast.error(
              "Sorry there seems to be a problem, please try again.",
              {
                timeout: 5000,
                position: "bottom-center",
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                icon: true,
              }
            );
            isLoading.value = false;
            setTimeout(() => {
              window.location.reload();
            }, 3000);
          }
        })
        .catch(() => {
          toast.error("Sorry there seems to be a problem, please try again.", {
            timeout: 5000,
            position: "bottom-center",
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            icon: true,
          });
          isLoading.value = false;
        });
    };

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

    const setInput = (value) => {
      reviewer.value = {
        id: value.id,
        name: value.name,
        expertLevel: value.expertLevel.code,
        role: value.role.code,
      };
      assign.value.reviewerId = value.id;
      showOptions.value = false;
    };
    const onCancel = () => {
      isLoading.value = false;
    };
    const modalData = ref({});
    let result = {};

    const check = () => {
      store
        .dispatch("reviewer/getGoodStandingApplication", props.modalDataId.id)
        .then((res) => {
          if (
            res.data.status == "Success" &&
            res.data.message !=
              "New licenses total count retrieved successfully!"
          ) {
            result = res.data.data;
            modalData.value.buttons =
              result && result.applicationStatus
                ? result.applicationStatus.buttons
                : [];
            modalData.value.name =
              (result.profile ? result.profile.name : "") +
              " " +
              (result.profile ? result.profile.fatherName : "") +
              "  " +
              (result.profile ? result.profile.grandFatherName : "");
            modalData.value.gender = result.profile
              ? result.profile.gender
              : "-----";
            modalData.value.nationality =
              result.profile && result.profile.nationality
                ? result.profile.nationality?.name
                : "-----";
            modalData.value.dateOfBirth = result.profile
              ? result.profile.dateOfBirth
              : "-----";
            modalData.value.maritalStatus =
              result.profile && result.profile.maritalStatus
                ? result.profile.maritalStatus.name
                : "-----";
            modalData.value.mobileNumber = result.applicant
              ? result.applicant.phoneNumber
              : "-----";
            modalData.value.email = result.applicant
              ? result.applicant.emailAddress
              : "-----";
            modalData.value.instName =
              result.education && result.education.institution
                ? result.education.institution?.name
                : "-----";
            modalData.value.instType =
              result.education && result.education.institution
                ? result.education.institution?.institutionType.name
                : "-----";
            modalData.value.department =
              result.education && result.education.department
                ? result.education?.department.name
                : "-----";
            modalData.value.profile = result.profile;
            modalData.value.professionalTypes = result.licenseProfessions;
            modalData.value.certifiedDate = result.certifiedDate;
            modalData.value.licenseExpirationDate =
              result.licenseExpirationDate;

            modalData.value.data = result;
            licenseData.value = result;
            isLoadingStart.value = false;
          }
        });
    };

    watch(props.modalDataId, () => {
      isLoadingStart.value = true;
      check();
    });

    onMounted(() => {
      fetchRole();
    });

    return {
      adminId,
      reviewerAdminId,
      role,
      assign,
      adminRole,
      show,
      showRes,
      showOptions,
      reviewer,
      setInput,
      showModal,
      check,
      resultQuery,
      isLoading,
      isLoadingStart,
      fullPage,
      assignReviewer,
      onCancel,
      modalData,
    };
  },
};
</script>

<style scoped>
.shadow-lg {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 34%), 0 2px 4px -1px rgb(0 0 0 / 6%);
}
</style>
