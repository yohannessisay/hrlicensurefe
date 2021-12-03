<template>
  <ReviewerNavBar tab="Evaluation" />
  <div class="w-screen bg-white flex items-center justify-center">
    <div
      class="w-screen max-w-6xl mt-medium mb-large box-shadow-pop bg-lightGrey-100"
    >
      <div class="flex mb-large mt-medium justify-center">
        <div class="w-64 h-40 container box-shadow-pop rounded-lg">
          <div class="mt-8">
            <div class="my-auto flex justify-center items-center">
              <h2 class="text-lightBlueB-500 text-2xl">
                {{ accepted.length }}
              </h2>
            </div>
            <div class="flex justify-center items-center">
              <h2 class=" text-lightBlueB-500 text-2xl">Accepted</h2>
            </div>
          </div>
        </div>
        <div class="flex justify-start flex-wrap ml-12">
          <div>
            <picture
              class="flex justify-center items-center mb-small"
              v-if="docs.length > 0"
            >
              <span
                v-if="
                  newLicense.applicant.profile.photo !== '' &&
                    newLicense.applicant.profile.photo !== null
                "
              >
                <img
                  :src="newLicense.applicant.profile.photo"
                  alt="profile picture"
                  class="w-20 h-12"
                />
              </span>
              <span v-else>
                <img
                  class="box-shadow-pop"
                  src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp"
                />
              </span>
            </picture>
            <div class="flex justify-center items-center">
              <h4 class="mt-2 mr-small w-1/2">
                {{
                  "Name: " +
                    newLicense.applicant.profile.name +
                    " " +
                    newLicense.applicant.profile.fatherName
                }}
              </h4>

              <!-- <h4 class="mt-2 ml-small w-1/2" v-if="newLicense.applicantType !== null">
                {{ "Applicant Type:  " + newLicense.applicantType.name }}
              </h4> -->
            </div>
            <div
              class="flex justify-center items-cente"
              v-if="newLicense.education !== undefined"
            >
              <h4 class="mt-2 mr-tiny w-1/2">
                {{ "Department:  " + newLicense.education.department.name }}
              </h4>
              <h4 class="mt-2 ml-small w-1/2">
                Institution:
                {{
                  newLicense.otherEducationalInstitution
                    ? newLicense.otherEducationalInstitution
                    : newLicense.education.institution.name
                }}
              </h4>
            </div>
            <div
              class="flex justify-center items-center"
              v-if="newLicense.education !== undefined"
            >
              <div class="mt-2 ml-small w-1/2"></div>
              <h4 class="mt-2 ml-small w-1/2">
                {{
                  "Institution Type:  " + newLicense.education.institution
                    ? newLicense.education.institution.institutionType.name
                    : "-"
                }}
              </h4>
            </div>
          </div>
        </div>
        <div class="ml-12 w-64 h-40  container box-shadow-pop rounded-lg">
          <div class="mt-8">
            <div class="my-auto flex justify-center items-center">
              <h2 class="text-red-200 text-2xl">{{ rejected.length }}</h2>
            </div>
            <div class="flex justify-center items-center">
              <h2 class=" text-red-200 text-2xl">Rejected</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
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

        <div class="flex flex-col justify-center items-center ml-large ">
          <div class="ml-medium">
            <label
              v-if="!showButtons"
              class="justify-center items-center ml-large text-grey-200 text-2xl"
            >
              {{ documentTypeName }}
            </label>
            <!-- <h5 class="ml-8 text-black-100 text-3xl">
              Addis Ababa
            </h5> -->
            <div class="flex justify-start flex-wrap">
              <!-- <div v-for="file in docs" v-bind:key="file.name">
                <Title class="" :message="file.name" />
                <picture>
                  <img :src="basePath + file.filePath" />
                </picture>
              </div> -->
              <div v-if="showButtons">
                <div class="flex justify-center">
                  <Title message="Summary" />
                </div>
                <div class="flex justify-start">
                  <Title message="Personal Info" />
                </div>
                <div class="flex flex-row">
                  <div
                    :class="[
                      profileInfo.name === null ? errorClass : activeClassd,
                    ]"
                  >
                    <label class="ml-8 titleColors"> Full Name </label>
                    <h5 class="ml-8">
                      {{
                        profileInfo.name +
                          " " +
                          profileInfo.fatherName +
                          " " +
                          profileInfo.grandFatherName
                      }}
                    </h5>
                  </div>
                  <div v-if="!canChangeName" class="flex flex-row">
                    <div
                      :class="[
                        profileInfo.alternativeName === null
                          ? errorClass
                          : activeClass,
                      ]"
                    >
                      <!-- <div v-if="true"> -->
                      <label class="ml-8 titleColors">
                        Full Name In Amharic
                      </label>
                      <div>
                        <h5 class="ml-8">
                          {{
                            profileInfo.alternativeName +
                              " " +
                              profileInfo.alternativeFatherName +
                              " " +
                              profileInfo.alternativeGrandFatherName
                          }}
                        </h5>
                      </div>
                    </div>
                    <div>
                      <button @click="allowChangeName">change name?</button>
                      <i
                        class="fas fa-chevron-edit float-right mt-2"
                        @click="allowChangeName"
                      ></i>
                    </div>
                  </div>
                  <div v-if="canChangeName" class="flex flex-row">
                    <div>
                      <label class="ml-8 titleColors">
                        Amharic First Name</label
                      >
                      <div>
                        <input
                          class="max-w-3xl ml-8"
                          type="text"
                          v-model="newLicense.applicant.profile.alternativeName"
                        />
                      </div>
                    </div>
                    <div>
                      <label class="ml-8 titleColors">
                        Amharic Middle Name</label
                      >
                      <div>
                        <input
                          class="max-w-3xl ml-8"
                          type="text"
                          v-model="
                            newLicense.applicant.profile.alternativeFatherName
                          "
                        />
                      </div>
                    </div>
                    <div>
                      <label class="ml-8 titleColors"> Amharic Last Name</label>
                      <div>
                        <input
                          class="max-w-3xl ml-8"
                          type="text"
                          v-model="
                            newLicense.applicant.profile
                              .alternativeGrandFatherName
                          "
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex flex-row justify-center" v-if="canChangeName">
                  <div>
                    <button
                      style="backgroundColor: red"
                      @click="changeAmharicName"
                    >
                      Save
                    </button>
                  </div>
                  <div>
                    &#160;
                    <button @click="disallowChangeName">cancel</button>
                  </div>
                </div>
                <div
                  v-if="showSpinner"
                  class="flex justify-center justify-items-center mt-24"
                >
                  <Spinner />
                </div>
                <div class="flex flex-row">
                  <div
                    :class="[
                      profileInfo.gender === null ? errorClass : activeClass,
                    ]"
                  >
                    <label class="ml-8 titleColors"> Gender</label>
                    <h5 class="ml-8">
                      {{ profileInfo.gender ? profileInfo["gender"] : "-" }}
                    </h5>
                  </div>
                  <div
                    :class="[
                      profileInfo.nationality === null
                        ? errorClass
                        : activeClass,
                    ]"
                  >
                    <label class="ml-8 titleColors"> Nationality</label>
                    <h5 class="ml-8">
                      {{
                        profileInfo.nationality ? profileInfo.nationality : "-"
                      }}
                    </h5>
                  </div>
                  <div
                    :class="[
                      profileInfo.placeOfBirth === null
                        ? errorClass
                        : activeClass,
                    ]"
                  >
                    <label class="ml-8 titleColors"> Place of Birth</label>
                    <h5 class="ml-8">
                      {{
                        profileInfo.placeOfBirth
                          ? profileInfo.placeOfBirth
                          : "-"
                      }}
                    </h5>
                  </div>

                  <div
                    :class="[
                      profileInfo.dateOfBirth === null
                        ? errorClass
                        : activeClass,
                    ]"
                  >
                    <label class="ml-8 titleColors"> Date of Birth</label>
                    <h5 class="ml-8">
                      {{
                        profileInfo.dateOfBirth
                          ? moment(profileInfo.dateOfBirth).format(
                              "MMM D, YYYY"
                            )
                          : "-"
                      }}
                    </h5>
                  </div>
                  <div
                    :class="[
                      profileInfo.maritalStatus.name === null
                        ? errorClass
                        : activeClass,
                    ]"
                  >
                    <label class="ml-8 titleColors"> Marital Status</label>
                    <h5 class="ml-8">
                      {{
                        profileInfo.maritalStatus.name
                          ? profileInfo.maritalStatus.name
                          : "-"
                      }}
                    </h5>
                  </div>
                </div>
                <div class="flex justify-start">
                  <Title message="Contact" />
                </div>
                <div class="flex flex-row">
                  <div
                    :class="[
                      profileInfo.user.phoneNumber === null
                        ? errorClass
                        : activeClass,
                    ]"
                  >
                    <label class="ml-8 titleColors"> Mobile Number</label>
                    <h5 class="ml-8">
                      {{
                        profileInfo.user.phoneNumber
                          ? profileInfo.user.phoneNumber
                          : "-"
                      }}
                    </h5>
                  </div>

                  <div
                    :class="[
                      profileInfo.user.emailAddress === null
                        ? errorClass
                        : activeClass,
                    ]"
                  >
                    <label class="ml-8 titleColors"> Email</label>
                    <h5 class="ml-8">
                      {{
                        profileInfo.user.emailAddress
                          ? profileInfo.user.emailAddress
                          : "-"
                      }}
                    </h5>
                  </div>
                </div>
                <div class="flex justify-start">
                  <Title message="Institution" />
                </div>
                <div class="flex flex-row">
                  <div>
                    <label class="ml-8 titleColors"> Institution Name</label>
                    <h5
                      class="ml-8"
                      v-if="newLicense.otherEducationalInstitution"
                    >
                      {{ newLicense.otherEducationalInstitution }}
                    </h5>
                    <h5
                      class="ml-8"
                      v-else-if="newLicense.education.institution.name"
                    >
                      {{ newLicense.education.institution.name }}
                    </h5>
                  </div>
                  <div>
                    <label class="ml-8 titleColors"> Department</label>
                    <h5
                      class="ml-8"
                      v-if="newLicense.education.department.name"
                    >
                      {{ newLicense.education.department.name }}
                    </h5>
                  </div>
                  <div>
                    <label class="ml-8 titleColors"> Institution Type</label>
                    <h5
                      class="ml-8"
                      v-if="
                        newLicense.education.institution.institutionType.name
                      "
                    >
                      {{
                        newLicense.education.institution.institutionType.name
                      }}
                    </h5>
                  </div>
                </div>
                <div v-if="newLicense.professionalTypes.length > 0">
                  <div class="flex justify-start">
                    <Title message="Professional Type" />
                  </div>
                  <div class="flex flex-col mb-medium w-1/2 mr-12">
                    <!-- <div v-model="professionalTypeIds"> -->
                    <!-- <ul
                        v-for="professionName in newLicense.professionalTypes"
                        v-bind:key="professionName.professionalTypes.name"
                        v-bind:value="professionName.professionalTypes.id"
                      >
                        <li>
                          <input
                            @change="
                              professionTypeCheckBox(
                                professionName.professionalTypes.id
                              )
                            "
                            type="checkbox"
                            class="form-checkbox"
                            :checked="true"
                          />
                          {{ professionName.professionalTypes.name }} |
                          {{
                            professionName.professionalTypes
                              .amharicProfessionalType
                          }}
                        </li>
                      </ul> -->
                    <div>
                      <ul
                        v-for="professionName in professionalTypes"
                        v-bind:key="professionName.name"
                        v-bind:value="professionName.id"
                      >
                        <div class="flex flex-row">
                          <li>
                            <input
                              v-on:click="
                                checkBoxClicked(professionName.id, $event)
                              "
                              type="checkbox"
                              class="form-checkbox"
                              :checked="choosedProfession(professionName.id)"
                            />
                            {{ professionName.name }} |
                            {{ professionName.amharicProfessionalType }}
                          </li>
                          <a
                            class="ml-5"
                            @click="showPrefix(professionName.id, $event)"
                            v-if="choosedProfession(professionName.id)"
                            >prefix?</a
                          >
                        </div>
                        <div
                          class="ml-12"
                          v-if="show_prefix_list(professionName.id)"
                          :v-model="prefix"
                        >
                          <select
                            class="select ml-3"
                            @change="
                              addPrefix(professionName.id, prefix, $event)
                            "
                          >
                            <option
                              v-for="prefix in prefixList"
                              v-bind:key="prefix.name"
                              v-bind:value="prefix.name"
                            >
                              {{ prefix.name }}
                            </option>
                          </select>
                        </div>
                      </ul>
                    </div>
                  </div>
                  <div class="flex flex-row mb-medium w-1/2 mr-2">
                    <input
                      @change="checkBox()"
                      type="checkbox"
                      class="form-checkbox"
                    />
                    <label class="ml-2">change profession?</label>
                    <label class="ml-12 titleColors"> Prefix</label>
                    <select v-model="prefix" class="select ml-3">
                      <option
                        v-for="prefix in prefixList"
                        v-bind:key="prefix.name"
                        v-bind:value="prefix.name"
                      >
                        {{ prefix.name }}
                      </option>
                    </select>
                  </div>
                  <div
                    class="flex flex-col mb-medium w-1/2 mr-12"
                    v-if="isCheckboxActive"
                  >
                    <select
                      v-model="professionalTypeIds"
                      class="select"
                      multiple
                    >
                      <option
                        v-for="profession in professionalTypes"
                        v-bind:key="profession.name"
                        v-bind:value="profession.id"
                      >
                        {{ profession.name }} |
                        {{ profession.amharicProfessionalType }}
                      </option>
                    </select>
                  </div>
                </div>
                <div>
                  <div class="flex justify-start">
                    <Title message="License Expiration Date" />
                  </div>
                  <div class="flex flex-col mb-medium w-1/2 mr-12">
                    <input
                      class="max-w-3xl mr-5"
                      type="date"
                      v-model="newLicense.licenseExpirationDate"
                    />
                  </div>
                </div>
              </div>
              <div v-else>
                <picture v-if="docs.length > 0">
                  <div v-if="docs[index].fileName.split('.')[1] == 'pdf'">
                    <div>
                      <iframe
                        v-bind:src="
                          'https://storage.googleapis.com/hris-lisence-dev/' +
                            docs[index].filePath
                        "
                      ></iframe>
                    </div>
                    <br />
                    <a @click="openPdfInNewTab(docs[index].filePath)"
                      >see pdf in detail</a
                    >
                  </div>

                  <div v-else>
                    <img
                      v-bind:src="
                        'https://storage.googleapis.com/hris-lisence-dev/' +
                          docs[index].filePath
                      "
                    />
                  </div>
                </picture>
              </div>
              <div
                class="flex content-center justify-center pb-large"
                v-if="docs.length == 0"
              >
                <h2>No Documents To Show!!</h2>
              </div>
              <!-- {{docs[0].filePath}} -->
            </div>
          </div>
          <div class="mt-medium" v-if="!showButtons">
            <button class="mr-medium" @click="accept(docs[index])">
              Accept
            </button>
            <button class="decline" @click="reject(docs[index])">Reject</button>
            <button
              class=""
              variant="outline"
              @click="action('ReviewerDraftEvent')"
            >
              save as Draft
            </button>
          </div>
          <div class="relative pt-1 mt-medium">
            <div
              class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-grey-100 w-screen max-w-2xl"
            >
              <div
                :style="width"
                class="shadow-none flex flex-col text-center whitespace-nowrap  justify-center bg-primary-400"
              ></div>
            </div>
          </div>
          <div>
            <div
              class="ml-10 h-3 relative max-w-xl rounded-full overflow-hidden"
            >
              <div class="w-full h-full absolute"></div>
              <div
                id="bar"
                class="transition-all ease-out duration-1000 h-full bg-green-500 relative w-0"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="flex justify-center items-center mb-medium"
        v-if="showButtons"
      >
        <div
          v-for="button in buttons"
          v-bind:key="button.name"
          v-bind:value="button.id"
        >
          <button
            variant="outline"
            v-bind:class="button.class"
            @click="action(button.action)"
          >
            {{ button.name }}
          </button>
        </div>
      </div>
      <Modal v-if="showRemark">
        <div>
          <div
            class="card-wrapper bg-white sm:rounded-lg w-full flex justify-center relative mb-xl mt-large"
          >
            <div class="">
              <!--content-->
              <div class="w-full">
                <!--header-->
                <div
                  class="flex items-start justify-between border-b border-solid border-blueGray-200 mt-medium rounded-t"
                >
                  <h3 class="text-3xl font-semibold">
                    Remark
                  </h3>
                  <div
                    class=" bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    v-on:click="toggleModal()"
                  >
                    <span
                      class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"
                    >
                      ×
                    </span>
                  </div>
                </div>
                <!--body-->
                <div class="modalBody pb-xl">
                  <div class="flex mt-medium justify-center"></div>
                  <div class="relative p-6 flex-auto w-full">
                    <div class="flex justify-center">
                      <div class="">
                        <svg
                          width="40"
                          height="60"
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          @click="previousRemark()"
                          v-if="ind != 0"
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

                      <div
                        class="flex flex-col justify-center items-center ml-large"
                      >
                        <div class="ml-medium">
                          <label
                            class="justify-center items-center ml-large text-grey-200 text-2xl"
                          >
                            {{ modalDocumentTypeName }}
                          </label>
                          <!-- <h5 class="ml-8 text-black-100 text-3xl">
                            Addis Ababa
                          </h5> -->
                          <div
                            class="flex justify-center flex-wrap max-w-sm rounded overflow-hidden"
                          >
                            <!-- <div v-for="file in docs" v-bind:key="file.name">
                              <Title class="" :message="file.name" />
                              <picture>
                                <img :src="basePath + file.filePath" />
                              </picture>
                            </div> -->
                            <picture
                              class="imageViewer"
                              v-if="rejectedObj.length > 0"
                            >
                              <img
                                v-bind:src="
                                  'https://storage.googleapis.com/hris-lisence-dev/' +
                                    rejectedObj[ind].filePath
                                "
                              />
                            </picture>
                            <!-- {{docs[0].filePath}} -->
                          </div>
                        </div>
                      </div>

                      <div class="ml-large">
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
                            fill="none"
                            stroke-linejoin="round"
                          >
                            &gt;
                          </polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <!--footer-->
                <textarea
                  v-model="newLicense.remark"
                  class="resize-none tArea border rounded-md flex mb-small w-full"
                ></textarea>
                <div
                  class="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b"
                >
                  <button
                    class="md-danger"
                    type="button"
                    v-on:click="toggleModal()"
                  >
                    Close
                  </button>
                  <button type="button" v-on:click="submitRemark()">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- <div
            v-if="showModal"
            class="opacity-25 fixed inset-0 z-40 bg-black"
          ></div> -->
          <div v-if="showDeclineFlash">
            <FlashMessage message="Operation Successful!" />
          </div>
          <div v-if="showErrorFlash">
            <ErrorFlashMessage message="Operation Failed!" />
          </div>
        </div>
      </Modal>
      <div v-if="showFlash">
        <FlashMessage message="Operation Successful!" />
      </div>
      <div v-if="showErrorFlash">
        <ErrorFlashMessage message="Operation Failed!" />
      </div>
      <div v-if="showNameChangeFlash">
        <FlashMessage message="name change Successful!" />
      </div>
      <div v-if="showNameChangeErrorFlash">
        <ErrorFlashMessage message="name change Failed!" />
      </div>
      <div v-if="showLicenseDateRequirementError">
        <ErrorFlashMessage message="Please add Expiration date!" />
      </div>
      <div v-if="showProfessionChangeError">
        <ErrorFlashMessage
          message="you can't change profession if you are not approving"
        />
      </div>
      <div v-if="expirationDateExceedTodayError">
        <ErrorFlashMessage
          message="Error! license expiration date must exceed today"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";

import { useRouter } from "vue-router";

import Title from "@/sharedComponents/Title";
import Modal from "@/sharedComponents/Modal";
import FlashMessage from "@/sharedComponents/FlashMessage";
import Spinner from "@/sharedComponents/Spinner";
import ErrorFlashMessage from "@/sharedComponents/ErrorFlashMessage";
import ReviewerNavBar from "@/components/Reviewer/ReviewerNavBar";
import moment from "moment";

export default {
  components: {
    Modal,
    FlashMessage,
    ErrorFlashMessage,
    ReviewerNavBar,
    Title,
    Spinner,
  },
  computed: {
    moment: () => moment,
  },
  setup() {
    const route = useRoute();
    const store = useStore();
    const router = useRouter();

    let isPdf = ref(false);

    let pdfFilePath = ref("");

    let expirationDateExceedTodayError = ref(false);

    // let show_prefix_list = ref(false);

    let professionalTypeIds = ref([]);
    let professionalTypeIdss = ref([]);
    let prefixList = ref([
      { name: "Consultant", id: 1 },
      { name: "Expert", id: 2 },
      { name: "Junior", id: 3 },
      { name: "Senior", id: 4 },
      { name: "Senior expert", id: 5 },
      { name: "Chief", id: 6 },
      { name: "Chief expert", id: 7 },
    ]);
    let prefix = ref();
    let canChangeName = ref(false);
    let showProfessionChangeError = ref(false);
    let showSpinner = ref(false);

    let showNameChangeFlash = ref(false);
    let showNameChangeErrorFlash = ref(false);

    let showLicenseDateRequirementError = ref(false);
    let departmentId = ref(0);

    const newLicense = ref({
      applicant: { profile: { name: "", fatherName: "" } },
      applicantType: { name: "" },
      education: {
        department: { name: "" },
        institution: { institutionType: {}, name: "" },
      },
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

    let professionalTypePrefixes = ref([]);

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
    let rejectedObj = ref([]);
    let showButtons = ref(false);
    let disableNext = ref(true);
    let nextClickable = ref(false);
    let foundInRejected = ref(false);
    let foundInAcceptted = ref(false);
    let isToChangeProfession = ref(false);
    let profileInfo = ref({});
    let activeClass = ref("active");
    let errorClass = ref("text-danger");
    let showRemark = ref(false);
    let applicationType = ref("");
    let applicantId = ref("");
    let showFlash = ref(false);
    let showErrorFlash = ref(false);
    let showDeclineFlash = ref(false);
    let sendDeclinedData = ref(true);
    let fromModalSendDeclinedData = ref(false);

    let isCheckboxActive = ref(false);

    let professionalTypes = ref([]);
    let evaluateRoute = ref(
      "/admin/evaluate/" +
        route.params.applicationType +
        "/" +
        route.params.applicationId
    );
    const created = async (applicationTypeName, applicationId) => {
      applicationType.value = applicationTypeName;

      if (applicationType.value == "New License") {
        store
          .dispatch("reviewer/getNewLicenseApplication", applicationId)
          .then((res) => {
            newLicense.value = res.data.data;
            departmentId.value = res.data.data.education.department.id;
            getProfessionalTypesByDepartmentId(departmentId.value);
            profileInfo.value = newLicense.value.applicant.profile;
            console.log("newLLLLLLLLLLLLLLLL", newLicense.value);
            buttons.value = res.data.data.applicationStatus.buttons;
            docs.value = res.data.data.documents;
            for (
              let i = 0;
              i < newLicense.value.professionalTypes.length;
              i++
            ) {
              professionalTypeIdss.value.push(
                newLicense.value.professionalTypes[i].id
              );
            }
            if (newLicense.value.applicationStatus.code == "REVDRA") {
              rejected.value = newLicense.value.declinedFields;
              for (let i in newLicense.value.documents) {
                for (let j in rejected.value) {
                  if (
                    newLicense.value.documents[i].documentTypeCode ==
                    rejected.value[j]
                  ) {
                    rejectedObj.value.push(newLicense.value.documents[i]);
                    break;
                  }
                }
              }
              accepted.value = newLicense.value.acceptedFields;
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
                findDocumentType(documentTypes.value, docs.value[index.value]);
              }
            }
          });
      }
      if (applicationType.value == "Good Standing") {
        store
          .dispatch("reviewer/getGoodStandingApplication", applicationId)
          .then((res) => {
            newLicense.value = res.data.data;
            departmentId.value = res.data.data.education.department.id;
            getProfessionalTypesByDepartmentId(departmentId.value);
            profileInfo.value = newLicense.value.applicant.profile;
            applicantId.value = res.data.data.applicantId;
            newLicense.value = {
              ...newLicense.value,
              ...res.data.data,
            };
            buttons.value = res.data.data.applicationStatus.buttons.filter(
              (allButtons) => {
                return allButtons.name != "Under supervision";
              }
            );
            buttons.value.forEach((button) => {
              button.name === "Approve"
                ? (button.name = "Verify")
                : (button.name = button.name);
            });
            docs.value = res.data.data.documents;
            for (
              let i = 0;
              i < newLicense.value.professionalTypes.length;
              i++
            ) {
              professionalTypeIdss.value.push(
                newLicense.value.professionalTypes[i].id
              );
            }
            if (newLicense.value.applicationStatus.code == "REVDRA") {
              rejected.value = newLicense.value.declinedFields;
              for (let i in newLicense.value.documents) {
                for (let j in rejected.value) {
                  if (
                    newLicense.value.documents[i].documentTypeCode ==
                    rejected.value[j]
                  ) {
                    rejectedObj.value.push(newLicense.value.documents[i]);
                    break;
                  }
                }
              }
              accepted.value = newLicense.value.acceptedFields;
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
                findDocumentType(documentTypes.value, docs.value[index.value]);
              }
            }
          });
      }
      if (applicationType.value == "Verification") {
        store
          .dispatch("reviewer/getVerificationApplication", applicationId)
          .then((res) => {
            newLicense.value = res.data.data;
            departmentId.value = res.data.data.education.department.id;
            getProfessionalTypesByDepartmentId(departmentId.value);
            profileInfo.value = newLicense.value.applicant.profile;
            // buttons.value = res.data.data.applicationStatus.buttons;
            buttons.value = res.data.data.applicationStatus.buttons.filter(
              (allButtons) => {
                return allButtons.name != "Under supervision";
              }
            );
            buttons.value.forEach((button) => {
              button.name === "Approve"
                ? (button.name = "Verify")
                : (button.name = button.name);
            });
            docs.value = res.data.data.documents;
            for (
              let i = 0;
              i < newLicense.value.professionalTypes.length;
              i++
            ) {
              professionalTypeIdss.value.push(
                newLicense.value.professionalTypes[i].id
              );
            }
            if (newLicense.value.applicationStatus.code == "REVDRA") {
              rejected.value = newLicense.value.declinedFields;
              for (let i in newLicense.value.documents) {
                for (let j in rejected.value) {
                  if (
                    newLicense.value.documents[i].documentTypeCode ==
                    rejected.value[j]
                  ) {
                    rejectedObj.value.push(newLicense.value.documents[i]);
                    break;
                  }
                }
              }
              accepted.value = newLicense.value.acceptedFields;
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
                findDocumentType(documentTypes.value, docs.value[index.value]);
              }
            }
          });
      }
      if (applicationType.value == "Renewal") {
        store
          .dispatch("reviewer/getRenewalApplication", applicationId)
          .then((res) => {
            newLicense.value = res.data.data;
            departmentId.value = res.data.data.education.department.id;
            getProfessionalTypesByDepartmentId(departmentId.value);
            console.log("rennnnnnnnnn", newLicense.value);
            profileInfo.value = newLicense.value.applicant.profile;
            buttons.value = res.data.data.applicationStatus.buttons;
            docs.value = res.data.data.documents;
            for (
              let i = 0;
              i < newLicense.value.professionalTypes.length;
              i++
            ) {
              professionalTypeIdss.value.push(
                newLicense.value.professionalTypes[i].id
              );
            }
            if (newLicense.value.applicationStatus.code == "REVDRA") {
              rejected.value = newLicense.value.declinedFields;
              for (let i in newLicense.value.documents) {
                for (let j in rejected.value) {
                  if (
                    newLicense.value.documents[i].documentTypeCode ==
                    rejected.value[j]
                  ) {
                    rejectedObj.value.push(newLicense.value.documents[i]);
                    break;
                  }
                }
              }
              accepted.value = newLicense.value.acceptedFields;
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
                findDocumentType(documentTypes.value, docs.value[index.value]);
              }
            }
          });
      }
      applicationType.value = route.params.applicationType;
    };
    const fetchDocumentTypes = async () => {
      store.dispatch("reviewer/getDocumentTypes").then((res) => {
        documentTypes.value = res.data.data;
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
        accepted.value.includes(doc.documentTypeCode) ||
        rejected.value.includes(doc.documentTypeCode)
      ) {
        nextClickable.value = true;
      }
    };
    const previous = () => {
      if (index.value == docs.value.length - 1) {
        showButtons.value = false;
      }
      index.value = index.value - 1;
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
        if (obj[prop].code == ab.documentTypeCode) {
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
    const accept = (doc) => {
      nextClickable.value = true;
      if (accepted.value.length > 0) {
        if (!accepted.value.includes(doc.documentTypeCode)) {
          accepted.value.push(doc.documentTypeCode);
          if (index.value == docs.value.length - 1) {
            showButtons.value = true;
          } else {
            index.value = index.value + 1;
            amount.value = ((index.value + 1) / docs.value.length) * 100;
            width.value = "width:" + amount.value + "%";
            findDocumentType(documentTypes.value, docs.value[index.value]);
          }
          if (rejected.value.includes(doc.documentTypeCode)) {
            rejected.value.splice(
              rejected.value.indexOf(doc.documentTypeCode),
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
        accepted.value.push(doc.documentTypeCode);
        if (index.value == docs.value.length - 1) {
          showButtons.value = true;
        } else {
          index.value = index.value + 1;
          amount.value = ((index.value + 1) / docs.value.length) * 100;
          width.value = "width:" + amount.value + "%";
          findDocumentType(documentTypes.value, docs.value[index.value]);
        }
        if (rejected.value.includes(doc.documentTypeCode)) {
          rejected.value.splice(
            rejected.value.indexOf(doc.documentTypeCode),
            1
          );
          rejectedObj.value.splice(rejectedObj.value.indexOf(doc), 1);
        }
      }
      // accepted.value.push(doc.documentTypeCode);
      // if (index.value == docs.value.length - 1) {
      //   showButtons.value = true;
      // }
    };

    const reject = (doc) => {
      nextClickable.value = true;
      if (rejected.value.length > 0) {
        if (!rejected.value.includes(doc.documentTypeCode)) {
          rejected.value.push(doc.documentTypeCode);
          rejectedObj.value.push(doc);
          if (index.value == docs.value.length - 1) {
            showButtons.value = true;
          } else {
            index.value = index.value + 1;
            amount.value = ((index.value + 1) / docs.value.length) * 100;
            width.value = "width:" + amount.value + "%";
            findDocumentType(documentTypes.value, docs.value[index.value]);
          }
          if (accepted.value.includes(doc.documentTypeCode)) {
            accepted.value.splice(
              accepted.value.indexOf(doc.documentTypeCode),
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
        rejected.value.push(doc.documentTypeCode);
        rejectedObj.value.push(doc);
        if (index.value == docs.value.length - 1) {
          showButtons.value = true;
        } else {
          index.value = index.value + 1;
          amount.value = ((index.value + 1) / docs.value.length) * 100;
          width.value = "width:" + amount.value + "%";
          findDocumentType(documentTypes.value, docs.value[index.value]);
        }
        if (accepted.value.includes(doc.documentTypeCode)) {
          accepted.value.splice(
            accepted.value.indexOf(doc.documentTypeCode),
            1
          );
        }
      }
      // nextClickable.value = true;
      // rejected.value.push(doc.documentTypeCode);
      // if (index.value == docs.value.length - 1) {
      //   showButtons.value = true;
      // }
    };

    const action = (actionValue) => {
      if (actionValue === "ApproveEvent") {
        if (newLicense.value.licenseExpirationDate === null) {
          showLicenseDateRequirementError.value = true;
          setTimeout(() => {
            showLicenseDateRequirementError.value = false;
          }, 4000);
          return;
        } else if (
          !moment(newLicense.value.licenseExpirationDate).isAfter(new Date())
        ) {
          expirationDateExceedTodayError.value = true;
          setTimeout(() => {
            expirationDateExceedTodayError.value = false;
          }, 4000);
          return;
        }
        if (professionalTypeIdss.value.length > 0) {
          newLicense.value.professionalTypeIds = professionalTypeIdss.value;
          newLicense.value.professionalTypePrefixes = professionalTypePrefixes.value
        }
      } else {
        if (professionalTypeIdss.value.length > 0) {
          showProfessionChangeError.value = true;
          setTimeout(() => {
            showProfessionChangeError.value = false;
          }, 4000);
          professionalTypeIdss.value = [];
          professionalTypePrefixes.value = [];
          return;
        }
      }
      if (actionValue == "DeclineEvent") {
        showRemark.value = true;
        sendDeclinedData.value = false;
        if (fromModalSendDeclinedData.value == true) {
          sendDeclinedData.value = true;
        }
      }
      if (prefix.value !== undefined) {
        newLicense.value.prefix = prefix.value;
      }
      newLicense.value.declinedFields = rejected.value;
      newLicense.value.acceptedFields = accepted.value;
      newLicense.value.certified = true;
      newLicense.value.certifiedDate = new Date();

      let appId = newLicense.value.id;
      let req = {
        action: actionValue,
        data: newLicense.value,
      };
      console.log("wow ferenj", req);
      if (
        applicationType.value == "New License" &&
        sendDeclinedData.value == true
      ) {
        store
          .dispatch("reviewer/editNewLicense", req)
          .then((res) => {
            if (res.statusText == "Created") {
              showFlash.value = true;
              showDeclineFlash.value = true;
              setTimeout(() => {
                router.push("/admin/review");
              }, 3000);
            } else {
              showErrorFlash.value = true;
              setTimeout(() => {
                router.go();
              }, 3000);
            }
          })
          .catch((err) => {
            console.log("error while evaluating", err);
          });
      }
      if (
        applicationType.value == "Verification" &&
        sendDeclinedData.value == true
      ) {
        store.dispatch("reviewer/editVerification", req).then((res) => {
          if (res.statusText == "Created") {
            showFlash.value = true;
            showDeclineFlash.value = true;
            setTimeout(() => {
              router.push("/admin/review");
            }, 3000);
          } else {
            showErrorFlash.value = true;
            setTimeout(() => {
              router.go();
            }, 3000);
          }
        });
      }
      if (
        applicationType.value == "Good Standing" &&
        sendDeclinedData.value == true
      ) {
        store.dispatch("reviewer/editGoodStanding", req).then((res) => {
          if (res.statusText == "Created") {
            showFlash.value = true;
            showDeclineFlash.value = true;
            let redirectUrl = "/admin/review";
            // if (req.action == "ApproveEvent") {
            //   redirectUrl =
            //     "/admin/finishedDetail/" +
            //     route.params.applicationType +
            //     "/" +
            //     route.params.applicationId +
            //     "/" +
            //     applicantId.value;
            // }
            setTimeout(() => {
              router.push("/admin/review");
            }, 3000);
          } else {
            showErrorFlash.value = true;
            setTimeout(() => {
              router.go();
            }, 3000);
          }
        });
      }
      if (
        applicationType.value == "Renewal" &&
        sendDeclinedData.value == true
      ) {
        store.dispatch("reviewer/editRenewal", req).then((res) => {
          if (res.statusText == "Created") {
            showFlash.value = true;
            showDeclineFlash.value = true;
            setTimeout(() => {
              router.push("/admin/review");
            }, 3000);
          } else {
            showErrorFlash.value = true;
            setTimeout(() => {
              router.go();
            }, 3000);
          }
        });
      }
    };

    const submitRemark = () => {
      showRemark.value = !showRemark.value;
      sendDeclinedData.value = true;
      fromModalSendDeclinedData.value = true;
      action("DeclineEvent");
    };

    const toggleModal = () => {
      showRemark.value = !showRemark.value;
    };

    const openPdfInNewTab = (pdfPath) => {
      pdfFilePath.value = pdfPath;
      window.open(
        "https://storage.googleapis.com/hris-lisence-dev/" + pdfPath,
        "_blank"
      );
    };

    const toChangeProfession = () => {
      isToChangeProfession.value = true;
    };
    const cancelProfessionChange = () => {
      isToChangeProfession.value = false;
    };
    const changeProfession = () => {};

    const getProfessionalTypes = () => {
      store.dispatch("reviewer/getProfessionalType").then((res) => {
        // professionalTypes.value = res.data.data;
      });
    };
    const getProfessionalTypesByDepartmentId = (id) => {
      store
        .dispatch("reviewer/getProfessionalTypeByDepartmentId", id)
        .then((res) => {
          professionalTypes.value = res.data.data;
        });
    };
    const allowChangeName = () => {
      canChangeName.value = true;
    };
    const disallowChangeName = () => {
      canChangeName.value = false;
    };
    const changeAmharicName = () => {
      showSpinner.value = true;
      const id = profileInfo.value.id;
      let newProfile = {
        alternativeName: newLicense.value.applicant.profile.alternativeName,
        alternativeFatherName:
          newLicense.value.applicant.profile.alternativeFatherName,
        alternativeGrandFatherName:
          newLicense.value.applicant.profile.alternativeGrandFatherName,
      };
      const profileData = [id, newProfile];
      store
        .dispatch("profile/changeUserProfile", profileData)
        .then((res) => {
          showSpinner.value = false;
          canChangeName.value = false;
          showNameChangeFlash.value = true;
          setTimeout(() => {
            showNameChangeFlash.value = false;
          }, 3000);
        })
        .catch((err) => {
          canChangeName.value = false;
          showNameChangeErrorFlash.value = true;
          setTimeout(() => {
            showNameChangeErrorFlash.value = false;
          }, 3000);
        });
    };

    const checkBox = () => {
      isCheckboxActive.value = !isCheckboxActive.value;
    };

    const checkBoxClicked = (id, event) => {
      choosedProfession(id);
      if (event.target.checked) {
        professionalTypeIdss.value.push(id);
        for (let i = 0; i < professionalTypeIdss.value.length; i++) {
        }
      } else {
        professionalTypeIdss.value.splice(
          professionalTypeIdss.value.indexOf(id),
          1
        );
        for (let i = 0; i < professionalTypeIdss.value.length; i++) {
          console.log("splice", professionalTypeIdss.value[i]);
        }
        console.log("don't selected", id);
      }
    };

    const choosedProfession = (id) => {
      for (let i = 0; i < professionalTypeIdss.value.length; i++) {
        if (id === professionalTypeIdss.value[i]) {
          return true;
        }
      }
    };

    let professionIdForPrefix = ref();
    const showPrefix = (id, event) => {
      professionIdForPrefix.value = id;
    };

    const show_prefix_list = (id) => {
      if (id === professionIdForPrefix.value) {
        return true;
      }
    };

    let countProLength = ref(0);
    const addPrefix = (professionId, prefixName, event) => {
      if(professionalTypePrefixes.value.length === 0) {
        professionalTypePrefixes.value.push({
            professionalTypeId: professionId,
            prefix: event.target.value,
          });
          console.log("waka", professionalTypePrefixes.value);
          return;
      }
      for (let i = 0; i < professionalTypePrefixes.value.length; i++) {
        if (
          professionId !== professionalTypePrefixes.value[i].professionalTypeId
        ) {
          countProLength.value++;
          if(countProLength.value === professionalTypePrefixes.value.length) {
          professionalTypePrefixes.value.push({
            professionalTypeId: professionId,
            prefix: event.target.value,
          });
          console.log("sagerewa", professionalTypePrefixes.value, countProLength.value);
          return;
          }
      
        } else {
          professionalTypePrefixes.value.splice(
            professionalTypePrefixes.value.indexOf(
              {professionalTypeId: professionId}
            ),
            1
          );
          professionalTypePrefixes.value.push({
            professionalTypeId: professionId,
            prefix: event.target.value,
          });
          console.log("ee", professionalTypePrefixes.value);
          return;
        }
      }


      
    };

    // const isProfessionSelected = (professionId) => {

    // }

    onMounted(() => {
      created(route.params.applicationType, route.params.applicationId);
      fetchDocumentTypes();
      findDocumentType(documentTypes.value, docs.value[0]);
      getProfessionalTypes();
    });
    return {
      isPdf,
      newLicense,
      index,
      docs,
      next,
      previous,
      nextRemark,
      previousRemark,
      amount,
      width,
      documentTypes,
      findDocumentType,
      documentTypeName,
      accepted,
      rejected,
      accept,
      reject,
      buttons,
      action,
      showButtons,
      isToChangeProfession,
      profileInfo,
      disableNext,
      nextClickable,
      foundInRejected,
      foundInAcceptted,
      showRemark,
      toggleModal,
      activeClass,
      errorClass,
      submitRemark,
      applicationType,
      showFlash,
      showErrorFlash,
      showDeclineFlash,
      sendDeclinedData,
      fromModalSendDeclinedData,
      rejectedObj,
      ind,
      modalDocumentTypeName,
      modalFindDocumentType,
      evaluateRoute,
      pdfFilePath,
      openPdfInNewTab,
      toChangeProfession,
      cancelProfessionChange,
      changeProfession,
      professionalTypes,
      canChangeName,
      allowChangeName,
      disallowChangeName,
      changeAmharicName,
      showSpinner,
      showNameChangeFlash,
      showNameChangeErrorFlash,
      showLicenseDateRequirementError,
      professionalTypeIds,
      showProfessionChangeError,
      expirationDateExceedTodayError,
      isCheckboxActive,
      checkBox,
      prefixList,
      prefix,
      professionalTypeIdss,
      checkBoxClicked,
      choosedProfession,
      show_prefix_list,
      showPrefix,
      addPrefix,
    };
  },
};
</script>
<style>
/* .pdfSize {
  width: 400px;
  height: 400px;
} */
.md-danger {
  background-image: linear-gradient(to right, #d63232, #e63636) !important;
  color: white;
}
a:hover {
  cursor: pointer;
}
.card-wrapper {
  width: 920px;
  height: 680px;
  box-shadow: 0px -8px 6px rgb(30 64 175 / 51%);
}
.modalBody {
  max-width: 620px !important;
  max-height: 420px !important;
}
.imageViewer {
  width: 320px;
  height: 320px !important;
}
.tArea {
  width: 620px;
}

.img {
  border-radius: 50%;
  margin-bottom: 1rem;
  width: 120px;
  height: 120px;
  border-color: steelblue;
  background-color: steelblue;
}

#accepte {
  border-color: tomato;
}
svg:hover {
  color: #000000;
  cursor: pointer;
}
.decline {
  background-image: linear-gradient(to right, #d63232, #e63636) !important;
}
@media only screen and (max-height: 1081px) {
  .card-wrapper {
    height: 640px;
  }
  .modalBody {
    max-width: 820px !important;
    max-height: 360px !important;
  }
  .imageViewer {
    width: 220px;
    height: 320px !important;
  }
  .tArea {
    width: 720px;
    height: 95px;
  }
  .titleColors {
    color: blue;
  }
  /* .tArea:focus {
    border-color: hsl(var(--input-focus-h), var(--input-focus-s), var(--input-focus-l));
    box-shadow: 0 0 0 3px hsla(var(--input-focus-h), var(--input-focus-s), calc(var(--input-focus-l) +
          40%), 0.8);
    outline: 3px solid transparent;
  } */
}
</style>
