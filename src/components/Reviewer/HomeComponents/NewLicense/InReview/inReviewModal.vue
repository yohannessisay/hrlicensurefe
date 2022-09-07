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
            type="button"
            class="btn-close border-none rounded-lg hover:text-primary-400"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
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
                        {{ modalData.name }}
                      </span>
                      's License Data
                    </h2>
                  </div>
                </div>
                <div class="vld-parent">
                  <loading
                    :active="isLoading"
                    :is-full-page="false"
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
                                <span
                                  class="font-semibold text-primary-700 mb-1"
                                  >Gender:</span
                                >
                                {{ modalData.gender }}
                              </p>
                              <p class="text-gray-500">
                                <span
                                  class="font-semibold text-primary-700 mb-1"
                                  >Nationality:</span
                                >
                                {{ modalData.nationality }}
                              </p>
                              <p class="text-gray-500">
                                <span
                                  class="font-semibold text-primary-700 mb-1"
                                  >Date Of Birth:</span
                                >
                                {{
                                  modalData.dateOfBirth
                                    ? modalData.dateOfBirth.slice(0, 10)
                                    : "-----"
                                }}
                              </p>
                              <p class="text-gray-500">
                                <span
                                  class="font-semibold text-primary-700 mb-1"
                                  >Martial Status:</span
                                >
                                {{ modalData.martialStatus }}
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
                                <i class="fa fa-right-left fa-4x"></i>
                              </div>
                            </div>
                            <div class="grow ml-6">
                              <h2 class="font-bold mb-1">Transfer To</h2>

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
                                    <div>
                                      <button
                                        class="
                                      inline-block
                                      px-6
                                      py-2.5
                                      bg-blue-600
                                      text-white
                                      font-medium
                                      text-xs
                                      leading-tight
                                      uppercase
                                      rounded
                                      hover:text-primary-600
                                      shadow-lg
                                      hover:bg-blue-700 hover:shadow-lg
                                      focus:bg-blue-700
                                      focus:shadow-lg
                                      focus:outline-none
                                      focus:ring-0
                                      active:bg-blue-800 active:shadow-lg
                                      transition
                                      duration-150
                                      ease-in-out
                                    "
                                        @click="transferReviewer()"
                                      >
                                        Transfer
                                      </button>
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
                                          {{ value.name }}
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>

                        <!-- <div
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
                              <h2 class="font-bold mb-1">Institution Info</h2>
                              <p class="text-gray-500">
                                <span class="font-medium text-primary-700 mb-1"
                                  >Institution Name:</span
                                >
                                {{ modalData.instName }}
                              </p>
                              <p class="text-gray-500">
                                <span class="font-medium text-primary-700 mb-1"
                                  >Department:</span
                                >
                                {{ modalData.department }}
                              </p>
                              <p class="text-gray-500">
                                <span class="font-medium text-primary-700 mb-1"
                                  >Institution Type:</span
                                >
                                {{ modalData.instType }}
                              </p>
                            </div>
                          </div>
                        </div> -->

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
          <a :href="'/admin/newLicense/evaluate/' + licenseId">
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
              shadow-lg
              bg-primary-600
              hover:text-primary-600 hover:shadow-lg
              focus:bg-purple-700
              focus:shadow-lg
              focus:outline-none
              focus:ring-0
              active:bg-purple-800 active:shadow-lg
              transition
              duration-150
              ease-in-out
            "
            >
              Evaluate
            </button>
          </a>
          <button
            type="button"
            class="
              inline-block
              px-6
              text-white
              bg-primary-600
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              shadow-lg
              hover:text-primary-600 hover:shadow-lg
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
import { useStore } from "vuex";
import { ref, onMounted, watch, computed } from "vue";
import moment from "moment";
import Loading from "vue3-loading-overlay";
// Import stylesheet
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";

import { useToast } from "vue-toastification";
export default {
  props: ["modalDataId", "reviewers"],
  components: {
    Loading
  },
  computed: {
    moment: () => moment
  },
  setup(props) {
    const store = useStore();
    const toast = useToast();
    let show = ref(true);
    let showRes = ref(false);
    let showOptions = ref(false);
    let reviewer = ref({ id: "", name: "", expertLevel: "", role: "" });
    let adminId = +localStorage.getItem("adminId");
    const licenseId = computed(() => props.modalDataId.id);
    let transfer = ref({
      reviewerId: "",
      licenseId: "",
      createdByAdminId: ""
    });
    let role = ref({});
    let isLoading = ref(false);
    const isLoadingStart = ref(true);
    const fullPage = ref(false);
    const evaluationData = ref({});
    let reviewerAdminId = ref(0);

    const fetchRole = id => {
      store.dispatch("reviewer/getRoles", id).then(res => {
        role.value = res.data.data.role;
      });
    };

    const transferReviewer = () => {
      if (role.value.code === "TL" || role.value.code === "ADM") {
        transfer.value = {
          licenseId: props.modalDataId.id,
          reviewerId: transfer.value.reviewerId,
          createdByAdminId: +localStorage.getItem("adminId")
        };
      }

      if (role.value.code == "REV") {
        transfer.value = {
          licenseId: props.modalDataId.id,
          reviewerId: +localStorage.getItem("adminId"),
          createdByAdminId: +localStorage.getItem("adminId")
        };
      }

      isLoading.value = true;

      store
        .dispatch("reviewer/transferLicenseReview", transfer.value)
        .then(response => {
          if (response.statusText == "Created") {
            toast.success("Selected application transfered Successfully", {
              timeout: 5000,
              position: "bottom-center",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true
            });
            isLoading.value = false;
            setTimeout(() => {
              window.location.reload();
            }, 3000);
          } else {
            toast.error("Error transfering", {
              timeout: 5000,
              position: "bottom-center",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true
            });
            isLoading.value = false;
            setTimeout(() => {
              window.location.reload();
            }, 3000);
          }
        })
        .catch(() => {
          toast.error("Error transfering", {
            timeout: 5000,
            position: "bottom-center",
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            icon: true
          });
          isLoading.value = false;
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        });
    };

    const showModal = () => {
      show.value = true;
    };
    const resultQuery = () => {
      if (reviewer.value.name) {
        let data = props.reviewers.filter(item => {
          return reviewer.value.name
            .toLowerCase()
            .split(" ")
            .every(v => item.name.toLowerCase().includes(v));
        });

        return data;
      } else {
        return [];
      }
    };

    const setInput = value => {
      reviewer.value = {
        id: value.id,
        name: value.name,
        expertLevel: value.expertLevel.code,
        role: value.role.code
      };
      transfer.value.reviewerId = value.id;
      showOptions.value = false;
    };
    const onCancel = () => {
      isLoading.value = false;
    };
    onMounted(() => {
      adminId = +localStorage.getItem("adminId");
      fetchRole(adminId);
    });

    watch(props.modalDataId, () => {
      isLoadingStart.value = true;
      check();
    });
    const modalData = ref({});
    let result;
    const licenseData = ref({});

    const check = () => {
      store
        .dispatch("reviewer/getNewLicenseApplication", props.modalDataId.id)
        .then(res => {
          if (res.data.status == "Success") {
            result = res.data.data;
            evaluationData.value = result;
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
            modalData.value.martialStatus = result.profile.martialStatus?.name
              ? result.profile.martialStatus.name
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
            licenseData.value = result;
            isLoadingStart.value = false;
          }
        });
    };
    return {
      adminId,
      reviewerAdminId,
      role,
      transfer,
      licenseData,
      show,
      showRes,
      showOptions,
      reviewer,
      setInput,
      showModal,
      resultQuery,
      isLoading,
      isLoadingStart,
      licenseId,
      fullPage,
      modalData,
      evaluationData,
      transferReviewer,
      onCancel
    };
  }
};
</script>

<style scoped>
.shadow-lg {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 34%), 0 2px 4px -1px rgb(0 0 0 / 6%);
}
</style>
