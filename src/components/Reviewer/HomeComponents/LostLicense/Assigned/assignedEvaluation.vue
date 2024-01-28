<template>
  <!-- Sidebar -->
  <reviewer-side-nav />
  <!-- Sidebar -->

  <section class="home-section">
    <!-- Header -->
    <reviewer-nav-bar>
      <h2 class="dashboard">Evaluation</h2>
    </reviewer-nav-bar>
    <!-- Header -->

    <!-- Main Content -->
    <div class="home-content">
      <div class="container px-4 mx-auto mb-12 sm:px-4">
        <div class="w-full rounded-lg bg-primary-800">
          <h2 class="ml-4 text-xl text-white">
            Evaluating
            {{
              lostLicense && lostLicense.profile && lostLicense.profile.name
                ? lostLicense.profile.name
                : ""
            }}
            's Letter
          </h2>
          <div class="vld-parent">
            <loading
              :active="isLoadingStart"
              :is-full-page="false"
              :color="'#2F639D'"
              :opacity="1"
            ></loading>
            <div class="w-full">
              <div class="box-shadow-pop bg-lightGrey-100">
                <div class="grid grid-cols-1 sm:grid-cols-8">
                  <div
                    class="sm:col-span-2 col-span-8 container w-64 h-40 p-4 mt-8 ml-8 rounded-lg box-shadow-pop"
                  >
                    <div class="mt-8">
                      <div class="flex items-center justify-center my-auto">
                        <h2 class="text-3xl">
                          {{ accepted.length }}
                        </h2>
                      </div>
                      <div class="flex items-center justify-center">
                        <h2 class="text-3xl">Accepted</h2>
                      </div>
                    </div>
                    <!-- Left side profile view -->
                    <div
                      class="container max-w-md mx-auto my-2 mt-8 overflow-hidden bg-white rounded-lg"
                    >
                      <div
                        class="relative z-10 h-auto"
                        style="
                          clip-path: polygon(
                            0 0,
                            100% 0,
                            100% 100%,
                            0 calc(100% - 5vw)
                          );
                        "
                      >
                        <img
                          class="w-full h-32"
                          :src="
                            lostLicense &&
                            lostLicense.profile &&
                            lostLicense.profile.profilePicture
                              ? googleApi +
                                lostLicense.profile.profilePicture.filePath
                              : ''
                          "
                          alt="Profile image"
                        />
                      </div>

                      <div
                        class="relative z-50 flex flex-row items-center justify-between px-6 -mt-10"
                      >
                        <h2
                          class="text-xl font-bold underline text-primary-600"
                        >
                          Applicant's Profile
                        </h2>
                      </div>

                      <div class="p-2 pt-6 pb-8 text-gray-600">
                        <div class="grid grid-cols-3">
                          <div class="col-span-1 mt-4 text-primary-600">
                            Name
                          </div>
                          <div class="col-span-2 mt-4 break-all">
                            {{
                              lostLicense &&
                              lostLicense.profile &&
                              lostLicense.profile.name
                                ? lostLicense.profile.name +
                                  " " +
                                  lostLicense.profile.fatherName +
                                  " " +
                                  lostLicense.profile.grandFatherName
                                : ""
                            }}
                          </div>
                          <div class="col-span-1 mt-2 text-primary-600">
                            Email
                          </div>
                          <div class="col-span-2 mt-2 break-all">
                            {{
                              lostLicense &&
                              lostLicense.applicant &&
                              lostLicense.applicant.emailAddress
                                ? lostLicense.applicant.emailAddress
                                : ""
                            }}
                          </div>
                          <div class="col-span-1 mt-2 text-primary-600">
                            Phone
                          </div>
                          <div class="col-span-2 mt-2 break-all">
                            {{
                              lostLicense &&
                              lostLicense.applicant &&
                              lostLicense.applicant.phoneNumber
                                ? lostLicense.applicant.phoneNumber
                                : ""
                            }}
                          </div>
                          <div class="col-span-1 mt-2 text-primary-600">
                            Gender
                          </div>
                          <div class="col-span-2 mt-2 break-all">
                            {{
                              lostLicense &&
                              lostLicense.profile &&
                              lostLicense.profile.gender
                                ? lostLicense.profile.gender
                                : ""
                            }}
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- End of profile view -->
                  </div>
                  <div class="sm:col-span-4 col-span-8 w-full p-4 mt-4">
                    <div class="p-4 mb-8 box-shadow-pop bg-lightGrey-100">
                      <div class="">
                        <svg
                          width="40"
                          height="60"
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          @click="previous()"
                          v-if="index != 0"
                        >
                          <polyline
                            points="30 10 10 30 30 50"
                            stroke="rgba(103,128,159,1)"
                            stroke-width="3"
                            stroke-linecap="butt"
                            fill="none"
                            stroke-linejoin="round"
                          >
                            &gt;
                          </polyline>
                        </svg>
                      </div>

                      <div class="flex flex-col items-center justify-center">
                        <label
                          v-if="!showButtons"
                          class="text-2xl text-grey-800"
                        >
                          {{ documentTypeName }}
                        </label>
                        <div class="flex content-center justify-center">
                          <div
                            class="container px-4 mx-auto my-2 md:px-4 mt-8 flex justify-center"
                            v-if="showButtons"
                          >
                            <div class="flex flex-wrap md:-mx-4 lg:-mx-8">
                              <!-- Personal Info card -->
                              <div class="w-full mx-4 my-1 mb-4">
                                <!-- Article -->
                                <article class="overflow-hidden rounded-lg">
                                  <header
                                    class="flex items-center justify-between p-2 leading-tight md:p-4"
                                  >
                                    <h2 class="font-bold">
                                      Personal Information
                                    </h2>
                                    <i
                                      class="fa fa-user fa-2x text-primary-600"
                                    ></i>
                                  </header>
                                  <hr class="text-grey-100" />
                                  <div
                                    class="container flex items-center justify-between p-2 leading-tight md:p-4"
                                  >
                                    <div class="font-bold">Full Name</div>

                                    <div>
                                      {{
                                        (profileInfo.name
                                          ? profileInfo.name
                                          : "-") +
                                        " " +
                                        (profileInfo.fatherName
                                          ? profileInfo.fatherName
                                          : "-") +
                                        " " +
                                        (profileInfo.grandFatherName
                                          ? profileInfo.grandFatherName
                                          : "-")
                                      }}
                                    </div>
                                  </div>
                                  <div
                                    class="container flex items-center justify-between p-2 leading-tight md:p-4"
                                  >
                                    <div class="font-bold">
                                      Full Name In Amharic
                                    </div>
                                    <div v-if="editPersonalData">
                                      <input
                                        v-model="
                                          lostLicense.profile.alternativeName
                                        "
                                        class="w-48 mr-1"
                                        type="text"
                                      />
                                    </div>
                                    <div v-if="editPersonalData">
                                      <input
                                        v-model="
                                          lostLicense.profile
                                            .alternativeFatherName
                                        "
                                        class="w-48 mr-1"
                                        type="text"
                                      />
                                    </div>
                                    <div v-if="editPersonalData">
                                      <input
                                        v-model="
                                          lostLicense.profile
                                            .alternativeGrandFatherName
                                        "
                                        class="w-48"
                                        type="text"
                                      />
                                    </div>
                                    <div class="vld-parent">
                                      <loading
                                        :active="isLoadingName"
                                        :is-full-page="false"
                                        :color="'#2F639D'"
                                        :opacity="1"
                                      ></loading>
                                      <button
                                        v-if="editPersonalData"
                                        class="inline-block px-6 text-xs font-medium leading-tight text-white uppercase transition duration-150 ease-in-out rounded hover:bg-purple-700 hover: focus:bg-purple-700 focus: focus:outline-none focus:ring-0 active:bg-purple-800 active:"
                                        @click="changeAmharicName"
                                      >
                                        Save
                                      </button>
                                    </div>

                                    <div v-if="!editPersonalData">
                                      {{
                                        (profileInfo.alternativeName
                                          ? profileInfo.alternativeName
                                          : "-") +
                                        " " +
                                        (profileInfo.alternativeFatherName
                                          ? profileInfo.alternativeFatherName
                                          : "-") +
                                        " " +
                                        (profileInfo.alternativeGrandFatherName
                                          ? profileInfo.alternativeGrandFatherName
                                          : "-")
                                      }}
                                    </div>
                                  </div>
                                  <div
                                    class="container flex items-center justify-between p-2 leading-tight md:p-4"
                                  >
                                    <div class="font-bold">Nationality</div>
                                    <div>
                                      {{
                                        profileInfo.nationality
                                          ? profileInfo.nationality.name
                                          : "-"
                                      }}
                                    </div>
                                  </div>

                                  <div
                                    class="container flex items-center justify-between p-2 leading-tight md:p-4"
                                  >
                                    <div class="font-bold">gender</div>
                                    <div>
                                      {{
                                        profileInfo.gender
                                          ? profileInfo["gender"]
                                          : "-"
                                      }}
                                    </div>
                                  </div>

                                  <div
                                    class="container flex items-center justify-between p-2 leading-tight md:p-4"
                                  >
                                    <div class="font-bold">marital Status</div>
                                    <div>
                                      {{
                                        profileInfo.maritalStatus
                                          ? profileInfo.maritalStatus.name
                                          : "-"
                                      }}
                                    </div>
                                  </div>
                                  <hr class="text-grey-100" />
                                  <footer
                                    class="flex items-center justify-center p-2 leading-none md:p-4"
                                  >
                                    {{ new Date().toISOString().slice(0, 10) }}
                                  </footer>
                                </article>
                                <!-- END Article -->
                              </div>
                              <!-- Personal Info card -->
                              <!-- Contact card -->
                              <div
                                class="w-full px-1 my-1 mb-3 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2"
                              >
                                <!-- Article -->
                                <article class="overflow-hidden rounded-lg">
                                  <header
                                    class="flex items-center justify-between p-2 leading-tight md:p-4"
                                  >
                                    <h2 class="font-bold">
                                      Contact Information
                                    </h2>
                                    <i
                                      class="fa fa-phone text-primary-600 fa-2xl"
                                    ></i>
                                  </header>
                                  <hr class="text-grey-100" />
                                  <div
                                    class="container flex items-center justify-between p-2 leading-tight md:p-4"
                                  >
                                    <div class="font-bold">Mobile Number</div>
                                    <div>
                                      {{
                                        lostLicense && lostLicense.applicant
                                          ? lostLicense.applicant.phoneNumber
                                          : "---"
                                      }}
                                    </div>
                                  </div>

                                  <div
                                    class="container flex items-center justify-between p-2 mb-10 leading-tight md:p-4"
                                  >
                                    <div class="mb-1 font-bold">Email</div>
                                    <div>
                                      {{
                                        lostLicense && lostLicense.applicant
                                          ? lostLicense.applicant.emailAddress
                                          : "---"
                                      }}
                                    </div>
                                  </div>
                                </article>
                                <!-- END Article -->
                              </div>
                              <!-- Contact card -->
                            </div>
                          </div>

                          <div
                            v-else
                            class="flex content-center justify-center"
                          >
                            <div
                              v-if="docs.length > 0"
                              class="flex content-center justify-center"
                            >
                              <div
                                v-if="
                                  docs[index] &&
                                  docs[index].fileType.split('/')[1] == 'pdf'
                                "
                              >
                                <div
                                  width="300"
                                  height="200"
                                  class="duration-500 ease-in scale-75 cursor-pointer transition-transform transform hover:scale-125"
                                >
                                  <iframe
                                    :src="
                                      docs[index] && docs[index].filePath
                                        ? googleApi + '' + docs[index].filePath
                                        : ''
                                    "
                                  ></iframe>
                                </div>
                                <br />
                                <a
                                  @click="
                                    openPdfInNewTab(
                                      docs[index] && docs[index].filePath
                                        ? docs[index].filePath
                                        : ''
                                    )
                                  "
                                  >see pdf in detail</a
                                >
                              </div>

                              <div v-else>
                                <img
                                  class="duration-500 ease-in scale-75 cursor-pointer transition-transform transform hover:scale-100"
                                  @click="
                                    viewImage(
                                      docs[index]
                                        ? googleApi + docs[index].filePath
                                        : ''
                                    )
                                  "
                                  :src="
                                    docs[index] && docs[index].filePath
                                      ? googleApi + '' + docs[index].filePath
                                      : ''
                                  "
                                  style="height: 400px; width: 400px"
                                />
                                <small
                                  class="ml-12 font-bold text-base text-green-200"
                                >
                                  <i class="fa-regular fa-circle-question"></i>
                                  Click the image to zoom</small
                                >
                              </div>
                            </div>

                            <div
                              class="flex content-center justify-center pb-large"
                              v-else
                            >
                              <h2>No Documents To Show!!</h2>
                            </div>
                          </div>
                        </div>
                        <div class="mt-medium" v-if="!showButtons">
                          <button
                            class="inline-block px-6 py-2.5 bg-primary-700 hover:text-primary-600 hover:bg-white hover:border text-white font-medium text-xs leading-tight uppercase rounded transition duration-150 ease-in-out"
                            @click="accept(docs[index])"
                          >
                            Accept
                          </button>
                          <button
                            class="inline-block px-6 py-2.5 bg-red-300 hover:text-red-300 hover:bg-white hover:border text-white font-medium text-xs leading-tight uppercase rounded transition duration-150 ease-in-out"
                            @click="reject(docs[index])"
                          >
                            Reject
                          </button>
                          <!-- <button
                            class="inline-block px-6 py-2.5 bg-yellow-300 hover:text-yellow-300 hover:bg-white hover:border text-white font-medium text-xs leading-tight uppercase rounded transition duration-150 ease-in-out"
                            @click="action('ReviewerDraftEvent')"
                          >
                            Save as Draft
                          </button> -->
                          <!-- <button
                            v-if="showTransferToAdminButton"
                            class="inline-block px-6 py-2.5 bg-primary-700 hover:text-primary-600 hover:bg-white hover:border text-white font-medium text-xs leading-tight uppercase rounded transition duration-150 ease-in-out"
                            @click="transferToFederal()"
                          >
                            Transfer to Federal
                          </button> -->
                        </div>
                        <div class="relative pt-1 mt-medium">
                          <div class="flex items-center justify-between">
                            <radial-progress-bar
                              :diameter="200"
                              :completed-steps="completedSteps"
                              :total-steps="totalSteps"
                            >
                              {{ completedSteps }} Completed/{{ totalSteps }}
                            </radial-progress-bar>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="sm:col-span-2 col-span-8 container w-64 h-40 p-4 mt-8 rounded-lg shadow-lg ml-8 sm:mr-4 sm:ml-2 mb-12 sm:mb-0"
                  >
                    <div class="mt-8">
                      <div class="flex items-center justify-center my-auto">
                        <h2 class="text-3xl text-red-300">
                          {{ rejected.length }}
                        </h2>
                      </div>
                      <div class="flex items-center justify-center">
                        <h2 class="text-3xl text-red-300">Rejected</h2>
                      </div>
                    </div>
                    <!-- Right side letter detail view -->
                    <div
                      class="container max-w-md mx-auto my-2 mt-8 p-2 overflow-hidden bg-white rounded-lg"
                    >
                      <h2 class="text-xl font-bold underline text-primary-600">
                        Application Detail
                      </h2>
                    </div>
                    <!-- End of letter view -->
                  </div>
                </div>

                <div
                  class="flex items-center justify-center mb-medium"
                  v-if="showButtons && !showLoadingButtons"
                >
                  <div
                    v-for="button in buttons"
                    :key="button.name"
                    :value="button.id"
                  >
                    <div class="vld-parent">
                      <loading
                        :active="isLoadingFinalAction"
                        :is-full-page="false"
                        :color="'#2F639D'"
                        :opacity="1"
                      >
                      </loading>
                      <button
                        v-if="button.code === 'APP' && rejected.length === 0"
                        class="inline-block px-6 text-xs font-medium leading-tight text-white uppercase transition duration-150 ease-in-out rounded bg-primary-700 hover:text-primary-600 hover:border"
                        @click="action(button.action)"
                      >
                        {{ button.name }}
                      </button>
                           <button
                        v-if="button.code === 'DEC' && rejected.length != 0"
                        class="inline-block px-6 text-xs font-medium leading-tight text-white uppercase transition duration-150 ease-in-out rounded bg-primary-700 hover:text-primary-600 hover:border"
                        @click="action(button.action)"
                      >
                        {{ button.name }}
                      </button>
                    </div>
                  </div>
                </div>

                <modal v-if="showRemark">
                  <template v-slot:modalHeader>
                    Decline Documents Reason
                  </template>
                  <template v-slot:modalBody>
                    <div class="w-full p-2 m-4">
                      <div class="flex justify-center">
                        <div
                          class="mt-2 cursor-pointer bg-grey-200 rounded mr-4"
                        >
                          <svg
                            width="40"
                            height="60"
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            class="text-black mt-2"
                            @click="previousRemark()"
                            v-if="ind != 0"
                          >
                            <polyline
                              points="30 10 10 30 30 50"
                              stroke="rgba(103,128,159,1)"
                              stroke-width="3"
                              stroke-linecap="butt"
                              fill="#ffffff"
                              stroke-linejoin="round"
                            >
                              &gt;
                            </polyline>
                          </svg>
                        </div>

                        <div class="flex flex-col items-center justify-center">
                          <h5 class="text-2xl text-grey-800">
                            {{
                              rejectedObj[ind] && rejectedObj[ind].documentType
                                ? rejectedObj[ind].documentType.name
                                : ""
                            }}
                          </h5>
                          <div class="mt-2">
                            <div class="flex justify-center rounded">
                              <div v-if="rejectedObj.length > 0">
                                <div
                                  v-if="
                                    rejectedObj[ind] &&
                                    rejectedObj[ind].fileType &&
                                    rejectedObj[ind].fileType.split('/')[1] ==
                                      'pdf'
                                  "
                                >
                                  <h5 class="text-2xl text-grey-800">
                                    {{
                                      rejectedObj[ind] &&
                                      rejectedObj[ind].documentType
                                        ? rejectedObj[ind].documentType.name
                                        : ""
                                    }}
                                  </h5>

                                  <button
                                    class="inline-block px-6 text-xs font-medium leading-tight text-white uppercase transition duration-150 ease-in-out rounded bg-primary-400 hover:bg-purple-700 hover: focus:bg-purple-700 focus: focus:outline-none focus:ring-0 active:bg-purple-800 active: hover:bg-white hover:text-primary-600"
                                    @click="
                                      openPdfInNewTab(
                                        rejectedObj[ind]
                                          ? rejectedObj[ind].filePath
                                          : ''
                                      )
                                    "
                                  >
                                    See pdf in detail
                                  </button>
                                </div>

                                <picture
                                  style="height: 400px; width: 400px"
                                  class="imageViewer"
                                  v-else
                                >
                                  <img
                                    :src="
                                      rejectedObj[ind]
                                        ? googleApi + rejectedObj[ind].filePath
                                        : ''
                                    "
                                  />
                                </picture>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          class="mt-2 cursor-pointer bg-grey-200 rounded mr-4"
                        >
                          <svg
                            width="40"
                            height="60"
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            @click="nextRemark()"
                            v-if="ind != rejected.length - 1"
                            class="hover:text-primary-60"
                          >
                            <polyline
                              points="10 10 30 30 10 50"
                              stroke="rgba(103,128,159,1)"
                              stroke-width="3"
                              stroke-linecap="butt"
                              fill="#ffffff"
                              stroke-linejoin="round"
                            >
                              &gt;
                            </polyline>
                          </svg>
                        </div>
                      </div>

                      <!--footer-->
                      <div class="flex justify-center">
                        <div class="grid grid-cols-1">
                          <label for="" class="mb-4 text-xl mt-8"
                            >Remark on why you are declining the request</label
                          >
                          <div class="w-full">
                            <textarea
                              v-model="lostLicense.remark"
                              class="w-full border rounded-sm"
                              rows="6"
                            ></textarea>
                          </div>
                          <small class="mt-2 mb-2 text-red-300"
                            >Remark note must be more than 10 letters</small
                          >
                        </div>
                      </div>
                      <div
                        class="flex items-center justify-center border-t border-solid rounded-b border-blueGray-200"
                      >
                        <button
                          class="inline-block px-6 text-xs mt-4 font-medium leading-tight text-white uppercase transition duration-150 ease-in-out rounded bg-primary-600 hover:bg-purple-700 hover: focus:bg-purple-700 focus: focus:outline-none focus:ring-0 active:bg-purple-800 active: hover:bg-primary-400 hover:text-white"
                          type="button"
                          v-on:click="showRemark = false"
                        >
                          Close
                        </button>
                        <button
                          type="button"
                          class="inline-block px-6 text-white mt-4 bg-primary-600 font-medium text-xs leading-tight uppercase rounded hover:bg-purple-700 hover: focus:bg-purple-700 focus: focus:outline-none focus:ring-0 active:bg-purple-800 active: transition duration-150 hover:bg-primary-400 hover:text-white ease-in-out"
                          v-on:click="submitRemark()"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </template>
                </modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Main Content -->
  </section>
</template>
<script>
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted } from "vue";

import { googleApi } from "@/composables/baseURL";

import { useToast } from "vue-toastification";
import modal from "@/sharedComponents/modal";
import moment from "moment";
import ReviewerSideNav from "../SharedComponents/sideNav.vue";
import ReviewerNavBar from "../../../SharedComponents/navBar.vue";
import Loading from "vue3-loading-overlay";
// Import stylesheet
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import RadialProgressBar from "vue3-radial-progress";
import { v3ImgPreviewFn } from "v3-img-preview";
export default {
  components: {
    modal,
    ReviewerSideNav,
    ReviewerNavBar,
    RadialProgressBar,
    Loading,
  },
  computed: {
    moment: () => moment,
  },
  setup() {
    const route = useRoute();
    const store = useStore();
    const toast = useToast();
    const router = useRouter();

    let isLoadingStart = ref(false);

    let isPdf = ref(false);

    let pdfFilePath = ref("");
    let admin = localStorage.getItem("allAdminData");
    let adminId = localStorage.getItem("adminId");
    let editPersonalData = ref(false);
    const completedSteps = ref(0);
    const totalSteps = ref(0);
    let lostLicense = ref({
      applicant: { profile: { name: "", fatherName: "" } },
      applicantType: { name: "" },
      declinedFields: "",
      remark: "",
      documents: [{ filePath: "" }],
      applicationStatus: {
        buttons: [{ action: "", name: "" }],
      },
    });
    let buttons = ref([
      { action: "", name: "" },
      { action: "", name: "" },
      { action: "", name: "" },
      { action: "", name: "" },
    ]);

    let documentTypes = ref([]);
    let documentTypeName = ref("");
    let modalDocumentTypeName = ref("");
    let docs = ref([]);
    let index = ref(0);
    let ind = ref(0);
    let amount = ref(1);
    let width = ref("width:11.11111%");
    let accepted = ref([]);
    let rejected = ref([]);
    let showTransferToAdminButton = ref(false);
    let rejectedObj = ref([]);
    let showButtons = ref(false);
    let isLoadingName = ref(false);
    let disableNext = ref(true);
    let nextClickable = ref(false);
    let foundInRejected = ref(false);
    let foundInAcceptted = ref(false);
    let profileInfo = ref({});
    let activeClass = ref("active");
    let errorClass = ref("text-danger");
    let showRemark = ref(false);
    let applicationType = ref("");
    let showDeclineFlash = ref(false);
    let sendDeclinedData = ref(true);
    let fromModalSendDeclinedData = ref(false);
    let showActionLoading = ref(false);
    let showLoadingButtons = ref(false);
    let isLoadingFinalAction = ref(false);
    let evaluateRoute = ref("/admin/evaluate/lostLicense" + route.params.id);
    let canChangeName = ref(false);
    const created = async (applicationTypeName, applicationId) => {
      applicationType.value = applicationTypeName;

      store
        .dispatch(
          "reviewerLostLicense/getLostLicenseApplication",
          applicationId
        )
        .then((res) => {
          lostLicense.value = res.data.data;
          profileInfo.value = lostLicense.value.profile;
          buttons.value = res.data.data.applicationStatus.buttons;
          docs.value = res.data.data.documents;
          totalSteps.value = docs.value ? docs.value.length : 0;
          accepted.value =
            lostLicense.value &&
            lostLicense.value.acceptedFields &&
            lostLicense.value.acceptedFields.length > 0
              ? lostLicense.value.acceptedFields
              : (accepted.value = []);
          rejected.value =
            lostLicense.value &&
            lostLicense.value.declinedFields &&
            lostLicense.value.declinedFields.length > 0
              ? lostLicense.value.declinedFields
              : (rejected.value = []);
          completedSteps.value = accepted.value.length + rejected.value.length;
          index.value = completedSteps.value;
          if (completedSteps.value == docs.value.length) {
            showButtons.value = true;
          }
          if (docs.value.length == 0) {
            showButtons.value = true;
          }
          fetchDocumentTypes();

          if (lostLicense.value.applicationStatus.code == "REVDRA") {
            rejected.value = lostLicense.value.declinedFields;
            for (let i in lostLicense.value.documents) {
              for (let j in rejected.value) {
                if (
                  lostLicense.value.documents[i].documentTypeCode ==
                  rejected.value[j]
                ) {
                  rejectedObj.value.push(lostLicense.value.documents[i]);
                  break;
                }
              }
            }
            accepted.value = lostLicense.value.acceptedFields;
            index.value = rejected.value.length + accepted.value.length;
            if (index.value == docs.value.length) {
              index.value -= 1;
            }
            amount.value = ((index.value + 1) / docs.value.length) * 100;
            width.value = "width:" + amount.value + "%";
            if (
              accepted.value.includes(
                docs.value[index.value - 1].documentTypeCode
              ) ||
              rejected.value.includes(
                docs.value[index.value - 1].documentTypeCode
              )
            ) {
              if (lostLicense.value.documnets) {
                findDocumentType(documentTypes.value, docs.value[index.value]);
              }
            }
          }

          if (admin && admin.expertLevelId == 3) {
            showTransferToAdminButton.value = false;
          }
          isLoadingStart.value = false;
        });

      applicationType.value = route.params.applicationType;
    };

    const fetchDocumentTypes = async () => {
      store.dispatch("reviewer/getDocumentTypes").then((res) => {
        documentTypes.value = res.data.data;
        findDocumentType(documentTypes.value, docs.value[0]);
      });
    };
    const next = (doc) => {
      if (nextClickable.value == true) {
        index.value = index.value + 1;
        amount.value = ((index.value + 1) / docs.value.length) * 100;
        width.value = "width:" + amount.value + "%";
        findDocumentType(documentTypes.value, docs.value[index.value]);
        nextClickable.value = false;
      }
      if (
        accepted.value.includes(
          doc && doc.documentTypeCode ? doc.documentTypeCode : ""
        ) ||
        rejected.value.includes(
          doc && doc.documentTypeCode ? doc.documentTypeCode : ""
        )
      ) {
        nextClickable.value = true;
      }
    };
    const previous = () => {
      if (index.value == docs.value.length - 1) {
        showButtons.value = false;
      }
      index.value = index.value - 1;
      completedSteps.value -= 1;
      amount.value = ((index.value + 1) / docs.value.length) * 100;
      width.value = "width:" + amount.value + "%";
      findDocumentType(documentTypes.value, docs.value[index.value]);
      nextClickable.value = true;
    };
    const nextRemark = () => {
      if (ind.value != rejectedObj.value.length - 1) {
        ind.value = ind.value + 1;
        modalFindDocumentType(
          documentTypes.value,
          rejectedObj.value[ind.value]
        );
        nextClickable.value = false;
      }
    };
    const previousRemark = () => {
      ind.value = ind.value - 1;
      modalFindDocumentType(documentTypes.value, rejectedObj.value[ind.value]);
      nextClickable.value = true;
    };
    const findDocumentType = (obj, ab) => {
      for (var prop in obj) {
        if (obj[prop].code == ab?.documentTypeCode) {
          documentTypeName.value = obj[prop].name;
        }
      }
    };

    const modalFindDocumentType = (obj, ab) => {
      for (var prop in obj) {
        if (obj[prop].code == ab.documentTypeCode) {
          modalDocumentTypeName.value = obj[prop].name;
        }
      }
    };
    const transferToFederal = () => {
      isLoadingStart.value = true;
      store.dispatch("lostLicense/getExpertLevel").then((res) => {
        let federalData = res.data.data.filter((r) => r.code == "FED");
        let transferData = {
          licenseId: route.params.applicationId,
          expertLevelId: federalData[0].id,
          createdByAdminId: adminId,
        };
        isLoadingFinalAction.value = true;
        store
          .dispatch("reviewer/transferToFederal", transferData)
          .then((res) => {
            isLoadingStart.value = false;
            if (res.data?.status == "Success") {
              toast.success("Application  transfered Successfully", {
                timeout: 5000,
                position: "bottom-center",
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                icon: true,
              });
              isLoadingFinalAction.value = false;
            } else {
              toast.success("Error occured", {
                timeout: 5000,
                position: "bottom-center",
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                icon: true,
              });
            }
          });
      });
    };
    const accept = (doc) => {
      nextClickable.value = true;
      completedSteps.value += 1;
      if (accepted.value.length > 0) {
        if (
          doc &&
          !accepted.value.includes(
            doc && doc.documentTypeCode ? doc.documentTypeCode : ""
          )
        ) {
          accepted.value.push(
            doc && doc.documentTypeCode ? doc.documentTypeCode : ""
          );
          if (index.value == docs.value.length - 1) {
            showButtons.value = true;
          } else {
            index.value = index.value + 1;
            amount.value = ((index.value + 1) / docs.value.length) * 100;
            width.value = "width:" + amount.value + "%";
            findDocumentType(documentTypes.value, docs.value[index.value]);
          }
          if (
            rejected.value.includes(
              doc && doc.documentTypeCode ? doc.documentTypeCode : ""
            )
          ) {
            rejected.value.splice(
              rejected.value.indexOf(
                doc && doc.documentTypeCode ? doc.documentTypeCode : ""
              ),
              1
            );
            rejectedObj.value.splice(rejectedObj.value.indexOf(doc), 1);
          }
        } else {
          if (index.value == docs.value.length - 1) {
            showButtons.value = true;
          } else {
            index.value = index.value + 1;
            amount.value = ((index.value + 1) / docs.value.length) * 100;
            width.value = "width:" + amount.value + "%";
            findDocumentType(documentTypes.value, docs.value[index.value]);
          }
        }
      } else {
        accepted.value.push(
          doc ? (doc && doc.documentTypeCode ? doc.documentTypeCode : "") : ""
        );
        if (index.value == docs.value.length - 1) {
          showButtons.value = true;
        } else {
          index.value = index.value + 1;
          amount.value = ((index.value + 1) / docs.value.length) * 100;
          width.value = "width:" + amount.value + "%";
          findDocumentType(documentTypes.value, docs.value[index.value]);
        }
        if (
          rejected.value.includes(
            doc && doc && doc.documentTypeCode ? doc.documentTypeCode : ""
          )
        ) {
          rejected.value.splice(
            rejected.value.indexOf(
              doc && doc.documentTypeCode ? doc.documentTypeCode : ""
            ),
            1
          );
          rejectedObj.value.splice(rejectedObj.value.indexOf(doc), 1);
        }
      }
    };

    const reject = (doc) => {
      completedSteps.value += 1;
      nextClickable.value = true;
      if (rejected.value.length > 0) {
        if (
          !rejected.value.includes(
            doc && doc.documentTypeCode ? doc.documentTypeCode : ""
          )
        ) {
          rejected.value.push(
            doc && doc.documentTypeCode ? doc.documentTypeCode : ""
          );
          rejectedObj.value.push(doc);
          if (index.value == docs.value.length - 1) {
            showButtons.value = true;
          } else {
            index.value = index.value + 1;
            amount.value = ((index.value + 1) / docs.value.length) * 100;
            width.value = "width:" + amount.value + "%";
            findDocumentType(documentTypes.value, docs.value[index.value]);
          }
          if (
            accepted.value.includes(
              doc && doc.documentTypeCode ? doc.documentTypeCode : ""
            )
          ) {
            accepted.value.splice(
              accepted.value.indexOf(
                doc && doc.documentTypeCode ? doc.documentTypeCode : ""
              ),
              1
            );
          }
        } else {
          if (index.value == docs.value.length - 1) {
            showButtons.value = true;
          } else {
            index.value = index.value + 1;
            amount.value = ((index.value + 1) / docs.value.length) * 100;
            width.value = "width:" + amount.value + "%";
            findDocumentType(documentTypes.value, docs.value[index.value]);
          }
        }
      } else {
        rejected.value.push(
          doc && doc.documentTypeCode ? doc.documentTypeCode : ""
        );
        rejectedObj.value.push(doc);
        if (index.value == docs.value.length - 1) {
          showButtons.value = true;
        } else {
          index.value = index.value + 1;
          amount.value = ((index.value + 1) / docs.value.length) * 100;
          width.value = "width:" + amount.value + "%";
          findDocumentType(documentTypes.value, docs.value[index.value]);
        }
        if (
          accepted.value.includes(
            doc && doc.documentTypeCode ? doc.documentTypeCode : ""
          )
        ) {
          accepted.value.splice(
            accepted.value.indexOf(
              doc && doc.documentTypeCode ? doc.documentTypeCode : ""
            ),
            1
          );
        }
      }
    };

    const action = (actionValue) => {
      let smsMessage = "";

      if (actionValue === "ApproveEvent") {
        smsMessage = lostLicense.value
          ? "Dear applicant your applied letter of lostLicense with license number " +
            lostLicense.value.lost_license_code +
            " has been approved after careful examination of your uploaded documents by our reviewers. Thank you for using eHPL. visit https://hrl.moh.gov.et for more."
          : "";
        lostLicense.value.regionId = lostLicense.value.residenceWoreda
          ? lostLicense.value.residenceWoreda.zone.region.id
          : "";
        lostLicense.value.regionCode = lostLicense.value.residenceWoreda
          ? lostLicense.value.residenceWoreda.zone.region.code
          : "FED";
      } else if (
        actionValue == "DeclineEvent" &&
        (lostLicense.value.remark == "" || lostLicense.value.remark == null)
      ) {
        smsMessage = lostLicense.value
          ? "Dear applicant your applied letter of lostLicense with license number " +
            lostLicense.value.lost_license_code +
            " has been declined after careful examination of your uploaded documents by our reviewers. Thank you for using eHPL. visit https://hrl.moh.gov.et for more."
          : "";

        showRemark.value = true;
        sendDeclinedData.value = false;

        return;
      }

      isLoadingStart.value = true;
      lostLicense.value.declinedFields = [...new Set(rejected.value)];
      lostLicense.value.acceptedFields = [...new Set(accepted.value)];

      lostLicense.value.certified = true;
      lostLicense.value.certifiedDate = new Date();
      actionValue == "DeclineEventFinal" ? (actionValue = "DeclineEvent") : "";
      let req = {
        action: actionValue,
        data: lostLicense.value,
      };
      let smsData = {
        recipients: [
          lostLicense.value && lostLicense.value.applicant
            ? "251" + lostLicense.value.applicant.phoneNumber
            : "",
        ],
        message: smsMessage ? smsMessage : "",
      };
      isLoadingFinalAction.value = false;
      store
        .dispatch("reviewerLostLicense/editLostLicense", req)
        .then(() => {
          isLoadingStart.value = false;
          showActionLoading.value = false;

          store.dispatch("sms/sendSms", smsData).then(() => {
            toast.success("Application reviewed Successfully", {
              timeout: 5000,
              position: "bottom-center",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true,
            });
            isLoadingFinalAction.value = false;
            router.push({ name: "AdminLostLicenseApproved" });
          });
        })
        .catch(() => {
          toast.error("Error occured", {
            timeout: 5000,
            position: "bottom-center",
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            icon: true,
          });
        });
    };

    const submitRemark = () => {
      if (
        lostLicense.value &&
        lostLicense.value.remark &&
        lostLicense.value.remark.length > 10
      ) {
        showRemark.value = !showRemark.value;
        sendDeclinedData.value = true;
        fromModalSendDeclinedData.value = true;
        action("DeclineEventFinal");
      } else if (
        lostLicense.value &&
        lostLicense.value.remark &&
        lostLicense.value.remark.length < 10 &&
        lostLicense.value.remark.length > 0
      ) {
        toast.error("Reason must be greater than 10 letters", {
          timeout: 5000,
          position: "bottom-center",
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          icon: true,
        });
      } else {
        toast.error("Please provide a reason for declining the letter", {
          timeout: 5000,
          position: "bottom-center",
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          icon: true,
        });
      }
    };
    const allowChangeName = () => {
      canChangeName.value = true;
    };
    const disallowChangeName = () => {
      canChangeName.value = false;
    };
    const openPdfInNewTab = (pdfPath) => {
      pdfFilePath.value = pdfPath;
      window.open(googleApi + "" + pdfPath, "_blank");
    };
    const changeAmharicName = () => {
      const id = profileInfo.value.id;
      isLoadingName.value = true;
      let newProfile = {
        alternativeName: lostLicense.value.profile.alternativeName,
        alternativeFatherName: lostLicense.value.profile.alternativeFatherName,
        alternativeGrandFatherName:
          lostLicense.value.profile.alternativeGrandFatherName,
      };
      const profileData = [id, newProfile];
      store
        .dispatch("profile/changeUserProfile", profileData)
        .then(() => {
          isLoadingName.value = false;
          toast.success("Name change was Successfull", {
            timeout: 5000,
            position: "bottom-center",
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            icon: true,
          });
        })
        .catch(() => {
          isLoadingName.value = false;
          toast.error("Error occured", {
            timeout: 5000,
            position: "bottom-center",
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            icon: true,
          });
        });
    };
    const checkResult = ref(false);

    const viewImage = (url) => {
      v3ImgPreviewFn(url);
    };
    onMounted(() => {
      isLoadingStart.value = true;
      created("Lost License", route.params.id);
    });
    return {
      viewImage,
      isPdf,
      lostLicense,
      index,
      docs,
      next,
      previous,
      nextRemark,
      previousRemark,
      amount,
      width,
      isLoadingName,
      documentTypes,
      findDocumentType,
      documentTypeName,
      accepted,
      rejected,
      isLoadingStart,
      accept,
      transferToFederal,
      showTransferToAdminButton,
      reject,
      buttons,
      action,
      showButtons,
      profileInfo,
      disableNext,
      nextClickable,
      completedSteps,
      totalSteps,
      foundInRejected,
      foundInAcceptted,
      showRemark,
      activeClass,
      errorClass,
      submitRemark,
      applicationType,
      showDeclineFlash,
      sendDeclinedData,
      fromModalSendDeclinedData,
      rejectedObj,
      ind,
      modalDocumentTypeName,
      modalFindDocumentType,
      evaluateRoute,
      pdfFilePath,
      changeAmharicName,
      openPdfInNewTab,
      checkResult,
      showActionLoading,
      showLoadingButtons,
      googleApi,
      isLoadingFinalAction,
      editPersonalData,
      allowChangeName,
      disallowChangeName,
      canChangeName,
    };
  },
};
</script>
<style>
#v3-img-preview-container-id > div > div.v3-img-preview-toolbar > section {
  background: black !important;
}
</style>
