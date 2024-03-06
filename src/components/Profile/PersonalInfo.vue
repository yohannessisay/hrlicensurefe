<template>
  <!-- If user clicks HRA -->
  <div class="w-screen max-w-4xl" v-if="approveStatus == 1">
    <div
      :class="
        isDarkMode
          ? 'flex flex-col mt-medium p-2 w-full bg-secondaryDark text-white blue-box-shadow-light rounded mb-large'
          : 'flex flex-col mt-medium p-2 w-full bg-white blue-box-shadow-light rounded mb-large'
      "
    >
      <div class="flex justify-center p-4">
        <h2 class="font-bold mb-4 mt-4 text-xl break-all">
          Search here using File Number and Employee ID obtained from HRA
          (Contact your Human Resource department or concerned department for
          Employee Id and File Number), both are required
        </h2>
      </div>
      <form  @submit.prevent="searchUser" class="flex justify-center">
        <div class="grid grid-cols-1 gap-4">
          <input
            type="search"
            class="form-control relative flex-auto min-w-0 block w-full text-main-400 px-3 py-1.5 text-base font-normal text-gray-700 border border-solid border-gray-300 rounded transition ease-in-out hover:text-primary-600 hover:border focus:outline-none"
            placeholder="Employee ID *"
            aria-label="Search"
            aria-describedby="button-addon2"
            v-model="searchEmployee"
            required
          />
          <input
            type="search"
            class="form-control relative flex-auto min-w-0 block text-main-400 w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out space-x-7 > * + * focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="File Number *"
            aria-label="Search"
            aria-describedby="button-addon2"
            v-model="searchByFileNumber"
            required
          />
          <button
            class="inline-block px-6 py-2.5 bg-white hover:bg-primary-600 hover:text-white text-primary-600 border font-medium text-xs leading-tight uppercase rounded transition duration-150 ease-in-out"
            @click="$emit('back', 0)"
            type="button"
          >
            {{ $t("Back") }}
          </button>
        </div>

        <div class="flex items-center justify-center">
          <button
            class="btn inline-block px-6 py-4 bg-primary-600 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-blue-700 hover: focus:bg-blue-700 focus: focus:outline-none focus:ring-0 active:bg-blue-800 active: transition duration-150 ease-in-out hover:text-primary-600 hover:border items-center"
            type="submit"
            id="button-addon2" 
            required
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="search"
              class="w-4 ml-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
              ></path>
            </svg>
          </button>
        </div>
      </form>
    </div>
  </div>
  <!-- If user clicks HRA -->
  <!-- If user clicks New profile -->
  <div class="w-screen max-w-4xl mb-20 p-4" v-if="approveStatus == 2">
    <div
      :class="
        isDarkMode
          ? 'flex flex-col w-full form_wrapper bg-secondaryDark text-white  border rounded-md mb-large'
          : 'flex flex-col w-full form_wrapper  text-main-400 border rounded-md mb-large'
      "
    >
      <div class="flex justify-center">
        <h1 class="text-3xl">
          {{ $t(`Complete profile info`) }}
        </h1>
      </div>

      <form
        class="mx-auto max-w-3xl w-full mt-4 p-2"
        @submit.prevent="nextStep"
      >
        <h2
          class="text-xl text-justify border text-yellow-300 rounded-md p-2 m-2"
        >
          Kindly submit your photo in a passport-size format measuring 3 X 4.
          This photo will be the one that will be printed in your final license.
        </h2>
        <h2
          class="text-xl text-justify border text-yellow-300 rounded-md p-2 m-2"
        >
          እባክዎን ፎቶዎን በፓስፖርት መጠን 3 x 4 በሚለካ መልኩ ያቅርቡ። ይህ ፎቶ በመጨረሻ ፍቃድዎ ላይ የሚታተም
          ይሆናል።
        </h2>
        <div class="flex mb-4 justify-center">
          <div class="flex mb-2 justify-center" v-if="showUpload">
            <label class="text-primary-700 text-justify">
              <div class="dropbox sm:ml-8">
                <input
                  type="file"
                  id="photoFile"
                  class="photoFile"
                  ref="photoFileP"
                  accept=".jpeg,.jpg,.png,.heic,.heif"
                  v-on:change="handleFileUpload()"
                  style="margin-bottom: 15px !important"
                />
                <p>
                  {{ $t(`Drag your Profile Picture here to begin`) }}<br />
                  {{ $t(`or click to browse`) }}
                </p>
              </div>

              <div class="sm:ml-8 mt-4">
                <span
                  v-if="personalInfoErrors.photo"
                  class="mt-2 border p-2 text-sm text-red-300 sm:ml-4"
                  >{{ personalInfoErrors.photo }}</span
                >
              </div>
            </label>
          </div>

          <picture v-if="!showUpload && isImage">
            <div class="flex justify-center">
              <span
                @click="reset()"
                class=" mb-4 cursor-pointer border text-white hover:text-main-400 rounded-lg p-2 hover:bg-white bg-main-400"
              >
                <i
                  class="fa fa-upload cursor-pointer hover:text-main-400 text-white"
                ></i
                >Upload again
              </span>
            </div>
            <img class="rounded-md" :src="filePreview" v-show="showPreview" />
          </picture>

          <span v-if="!showUpload && !isImage">
            <img :src="filePreview" alt="" class="preview" />
          </span>
        </div>
        <div class="flex justify-center">
          <span class=" border rounded-md p-1 mb-4 w-1/2">
            <h5 class="text-base border-b-2  ">
              {{ photoFile.name ? photoFile.name : "------" }}
            </h5>
            <h6 class="text-xs">
              {{ fileSize ? fileSize : "------" }}
            </h6>
          </span>
        </div>

        <!-- English Name Part -->
        <h2 class="  text-xl">{{ $t("Name") }} (English)</h2>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-3 border-t-2 mb-8">
          <div class="flex">
            <div class="form-floating w-full">
              <input
                type="text"
                class="capitalize form-control block w-full px-3 text-main-400 p-2 h-14 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mb-4 mt-2"
                onkeypress="return /[a-zA-Z]/i.test(event.key)"
                v-model="personalInfo.name"
                :disabled="
                  isRegisterdHRAuser == true && searchResultData.firstname
                "
                autocapitalize="word"
                id="floatingInput"
                placeholder="First name"
              />
              <label for="floatingInput" class="text-grey-800 text-lg"
                >{{ $t("Name") }}
                <span class="text-red-300">*</span>
              </label>
              <span
                v-if="personalInfoErrors.name"
                class="border p-2 text-sm text-red-300 ml-4 rounded-md"
                >{{ personalInfoErrors.name }}</span
              >
            </div>
          </div>
          <div class="flex">
            <div class="form-floating w-full">
              <input
                type="text"
                class="capitalize form-control block text-main-400 w-full px-3 p-2 h-14 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mb-4 mt-2"
                onkeypress="return /[a-zA-Z]/i.test(event.key)"
                v-model="personalInfo.fatherName"
                :disabled="
                  isRegisterdHRAuser == true && searchResultData.middlename
                "
                id="floatingInput"
                placeholder="First name"
              />
              <label for="floatingInput" class="text-grey-800 text-lg"
                >{{ $t("Father Name") }}
                <span class="text-red-300">*</span></label
              >
              <span
                v-if="personalInfoErrors.fatherName"
                class="mt-2 border p-2 text-sm text-red-300 ml-4 rounded-md"
                >{{ personalInfoErrors.fatherName }}</span
              >
            </div>
          </div>
          <div class="flex">
            <div class="form-floating w-full">
              <input
                type="text"
                class="capitalize form-control block text-main-400 w-full px-3 p-2 h-14 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mt-2 mb-4"
                onkeypress="return /[a-zA-Z]/i.test(event.key)"
                v-model="personalInfo.grandFatherName"
                :disabled="
                  isRegisterdHRAuser == true && searchResultData.lastname
                "
                id="floatingInput"
                placeholder="First name"
              />
              <label for="floatingInput" class="text-grey-800 text-lg"
                >{{ $t("Grandfather Name") }}
                <span class="text-red-300">*</span></label
              >
              <span
                v-if="personalInfoErrors.grandFatherName"
                class="mt-2 border p-2 text-sm text-red-300 ml-4 break-all rounded-md"
                >{{ personalInfoErrors.grandFatherName }}</span
              >
            </div>
          </div>
        </div>

        <!-- End Of English Name Part -->

        <!-- Amharic Name Part -->
        <h2 class="  text-xl">{{ $t("Name") }} (Amharic)</h2>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-3 border-t-2 mb-8">
          <div class="flex mt-2">
            <div class="form-floating mb-3 w-full">
              <input
                type="text"
                class="form-control block text-main-400 w-full px-3 p-2 h-14 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mt-2 mb-4"
                onkeypress="return /[a-zA-Z]/i.test(event.key)"
                v-model="personalInfo.alternativeName"
                id="amhName"
                placeholder="Amharic First name"
              />
              <label for="amhName" class="text-grey-800 text-lg">ስም</label>
            </div>
          </div>
          <div class="flex">
            <div class="form-floating mb-3 w-full">
              <input
                type="text"
                class="form-control block text-main-400 w-full px-3 p-2 h-14 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mt-2 mb-4"
                onkeypress="return /[a-zA-Z]/i.test(event.key)"
                v-model="personalInfo.alternativeFatherName"
                id="amhFName"
                placeholder="Amharic Fathers name"
              />
              <label for="amhFName" class="text-grey-800 text-lg"
                >የአባት ስም</label
              >
            </div>
          </div>
          <div class="flex">
            <div class="form-floating mb-3 w-full">
              <input
                type="text"
                class="form-control block text-main-400 w-full px-3 p-2 h-14 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mt-2 mb-4"
                onkeypress="return /[a-zA-Z]/i.test(event.key)"
                v-model="personalInfo.alternativeGrandFatherName"
                id="amhGName"
                placeholder="Amharic Grand Father name"
              />
              <label for="amhGName" class="text-grey-800 text-lg"
                >የ ኣያት ስም</label
              >
            </div>
          </div>
        </div>

        <!-- End Of English Name Part -->

        <!-- General personal info Part -->
        <h2 class="text-xl">{{ $t("General Information") }}</h2>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-3 border-t-2">
          <div class="flex mt-2">
            <div class="form-floating mb-3 w-full mt-2">
              <input
                type="date"
                class="form-control block w-full px-3 text-main-400 p-2 h-14 text-base font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out"
                :max="minimumBirthDate"
                min="1899-01-01"
                v-model="personalInfo.dateOfBirth"
                @change="validateDate(personalInfo.dateOfBirth)"
                :disabled="
                  isRegisterdHRAuser == true && searchResultData.birthdate
                "
                id="birthDate"
              />
              <label for="birthDate" class="text-grey-800 text-lg"
                >{{ $t("Date of Birth") }}
                <span class="text-red-300">*</span></label
              >
              <div
                v-if="
                  personalInfoErrors.dateOfBirth ||
                  personalInfoErrors.invalidBirthDate
                "
                class="border p-2 text-sm text-red-300 mr-4 rounded-md w-3/4 ml-4"
              >
                <span class="mt-2 text-sm text-red-300">{{
                  personalInfoErrors.dateOfBirth
                }}</span>
              </div>
            </div>
          </div>

          <div class="flex">
            <div class="flex flex-col mb-medium w-1/2 ml-2 mt-2">
              <div class="flex flex-col w-full">
                <label class="text-lg"
                  >{{ $t("Gender") }} <span class="text-red-300">*</span></label
                >
                <div class="flex w-full">
                  <div class="flex flex-col mb-small w-full">
                    <div class="flex py-2">
                      <input
                        class="flex flex-col"
                        type="radio"
                        id="male"
                        value="male"
                        v-model="personalInfo.gender"
                        :disabled="
                          isRegisterdHRAuser == true && searchResultData.gender
                        "
                      />
                      <label class="ml-tiny flex flex-col" for="male">
                        {{ $t("Male") }}
                      </label>
                    </div>
                  </div>

                  <div class="flex py-2 ml-4">
                    <input
                      type="radio"
                      id="female"
                      value="female"
                      v-model="personalInfo.gender"
                      :disabled="
                        isRegisterdHRAuser == true && searchResultData.gender
                      "
                    />
                    <label class="ml-tiny" for="female">
                      {{ $t("Female") }}
                    </label>
                  </div>
                </div>
                <span
                  v-if="personalInfoErrors.gender"
                  class="border p-2 text-sm text-red-300 ml-4 rounded-md"
                >
                  {{ personalInfoErrors.gender }}</span
                >
              </div>
            </div>
          </div>
          <div class="flex ">
            <div class="form-floating w-full">
              <input
                type="number"
                class="form-control block w-full  text-base font-normal text-main-400 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out"
                v-model="personalInfo.poBox"
                :disabled="isRegisterdHRAuser == true && searchResultData.pobox"
                id="pobox"
                placeholder="Po-box"
              />
              <label for="pobox" class="text-grey-700">{{
                $t("Po-box")
              }}</label>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div class="flex mt-4">
            <div class="flex justify-center">
              <div class="sm:mb-3 w-full">
                <label class="text-lg"
                  >{{ $t("Nationality") }}
                  <span class="text-red-300">*</span></label
                >
                <select
                  class="form-select text-main-400 appearance-none block w-full px-3 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 mb-4"
                  aria-label="Default select example"
                  v-model="personalInfo.nationalityId"
                  @change="fetchNationalities()"
                  :disabled="
                    isRegisterdHRAuser == true && searchResultData.nationality
                  "
                >
                  <option
                    v-for="types in state.nationalities"
                    :key="types.name"
                    :value="types.id"
                  >
                    {{ types.name }}
                  </option>
                </select>
                <span
                  v-if="personalInfoErrors.nationalityId"
                  class="mt-2 border p-2 text-sm text-red-300 ml-4 rounded-md"
                  >{{ personalInfoErrors.nationalityId }}</span
                >
              </div>
            </div>
          </div>
          <div class="flex sm:mt-4">
            <div class="mb-3 w-full">
              <label class="text-lg"
                >{{ $t("Marital Status") }}
                <span class="text-red-300">*</span></label
              >
              <select
                class="form-select text-main-400 appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 mb-4"
                aria-label="Default select example"
                v-model="personalInfo.maritalStatusId"
                :disabled="
                  isRegisterdHRAuser == true && searchResultData.maritalStatus
                "
              >
                >
                <option value="1">{{ $t("Single") }}</option>
                <option value="2">{{ $t("Married") }}</option>
                <option value="3">{{ $t("Divorced") }}</option>
                <option value="4">{{ $t("Widowed") }}</option>
                <option value="5">{{ $t("Separated") }}</option>
              </select>
              <span
                v-if="personalInfoErrors.maritalStatus"
                class="mt-2 border p-2 text-sm text-red-300 ml-4 rounded-md"
                >{{ personalInfoErrors.maritalStatus }}</span
              >
            </div>
          </div>
        </div>

        <!-- General personal info Part -->

        <div class="flex justify-center border-t-2 mt-8 mb-2">
          <button
            @click="$emit('back', 0)"
            class="transition duration-200 w-64 mt-8 bg-white text-main-400 hover:text-white hover:bg-main-400 border rounded-lg text-md shadow-sm font-semibold text-center"
          >
            {{ $t("Back") }}
          </button>
          <button
            class="transition duration-200 w-64 mt-8 bg-main-400 text-white hover:text-main-400 hover:bg-white rounded-lg text-md shadow-sm font-semibold text-center"
          >
            {{ $t("Next") }}
          </button>
        </div>
      </form>
    </div>
  </div>
  <!-- If user clicks New profile -->
</template>
<script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { useToast } from "vue-toastification";
import Compressor from "compressorjs";
export default {
  components: {},
  props: ["activeState", "approvalModal", "isDarkMode"],
  emits: ["nextStep", "changeActiveState", "back"],
  setup(props, { emit }) {
    const store = useStore();
    let approveStatus = ref(props.approvalModal);
    let photoFile = ref("");
    let photoFileP = ref("");
    let showPreview = ref(false);
    let filePreview = ref("");
    let showUpload = ref(true);
    const toast = useToast();
    let isRegisterdHRAuser = ref(false);
    let isImage = ref(true);
    let photoSizeCheck = ref(false);
    let fileSize = ref("");
    let nationality = ref("");
    let minimumBirthDate = new Date(`${new Date().getFullYear() - 18}`)
      .toISOString()
      .slice(0, 10);

    let maritalStatus = ref("");
    let invalidBirthDate = ref(false);
    const hraUserStat = ref(false);
    const employeeId = ref("");
    const hraUser = () => {
      hraUserStat.value = !hraUserStat.value;
    };
    let searchEmployee = ref("");
    let searchByFileNumber = ref("");
    let searchResultData = ref({});
    let personalInfo = ref({
      name: "",
      fatherName: "",
      grandFatherName: "",
      alternativeName: "",
      alternativeFatherName: "",
      alternativeGrandFatherName: "",
      gender: "",
      poBox: "",
      dateOfBirth: "",
      nationalityId: "",
      maritalStatusId: "",
      photo: "",
      employeeId: "",
    });
    let personalInfoErrors = ref({
      name: "",
      fatherName: "",
      grandFatherName: "",
      nationalityId: "",
      gender: "",
      maritalStatus: "",
      dateOfBirth: "",
      photo: "",
    });
    let state = ref({
      userTypes: {},
      expertLevel: {},
      healthOffices: {},
      maritalStatuses: {},
      regions: {},
      zones: {},
      woreda: {},
      nationalities: {},
    });
    let id = ref({
      regionID: {},
      zoneID: {},
    });
    const reset = () => {
      showUpload.value = true;
      showPreview.value = false;
      photoFile.value = "";
      filePreview.value = "";
      isImage.value = true;
      photoSizeCheck.value = false;
      fileSize.value = "";
    };
    const handleFileUpload = async () => {
      showUpload.value = false;
      photoFile.value = photoFileP?.value?.files[0];
      new Compressor(photoFile.value, {
        quality: 0.5,

        // The compression process is asynchronous,
        // which means you have to access the `result` in the `success` hook function.
        success(result) {
          const dataTransfer = new DataTransfer();
          dataTransfer.items.add(new File([result], result.name));
          photoFile.value = dataTransfer?.files[0];
          let reader = new FileReader();

          let fileS = photoFile.value.size;
          if (fileS > 0 && fileS < 1000) {
            fileSize.value += "B";
          } else if (fileS > 1000 && fileS < 1000000) {
            fileSize.value = fileS / 1000 + "kB";
          } else {
            fileSize.value = fileS / 1000000 + "MB";
          }
          reader.addEventListener(
            "load",
            async function () {
              showPreview.value = true;
              filePreview.value = reader.result;
              var base64 = reader.result;
              personalInfo.value.photo = base64;
            },
            false
          );
          if (photoFile.value) {
            if (/\.(jpe?g|png|gif)$/i.test(photoFile.value.name)) {
              isImage.value = true;
              reader.readAsDataURL(photoFile.value);
            }
          }
        },
        error(err) {
          console.log(err.message);
        },
      });
    };

    const searchUser = () => {
      let searchparamters = {
        employeeId: searchEmployee.value,
        fileNumber: searchByFileNumber.value,
      };
      store
        .dispatch("profile/checkHrlRegistration", searchparamters)
        .then((res) => {
          if (res.data.data) {
            let searchResult = res.data.data;
            let nationalityId = 0;
            searchResultData.value = searchResult;
            let nationality =
              state.value?.nationalities == null
                ? null
                : state.value.nationalities;
            let maritalStatusId = 0;
            if (searchResult.maritalStatus) {
              maritalStatusId =
                searchResult.maritalStatus == "Married"
                  ? 2
                  : searchResult.maritalStatus == "Single"
                  ? 1
                  : searchResult.maritalStatus == "Divorced"
                  ? 3
                  : 0;
            }
            if (searchResult.nationality) {
              nationalityId = nationality.find(
                (nat) => nat.name == searchResult?.nationality
              ).id;
            }
            // let maritalStatusId = maritalStatus.find(
            //   nat => nat.name == searchResult?.maritalStatus
            // ).id;

            let data = {
              name: searchResult.firstname,
              fatherName: searchResult?.middlename,
              grandFatherName: searchResult?.lastname,
              alternativeName: searchResult?.alternativeName,
              alternativeFatherName: searchResult?.alternativeFatherName,
              alternativeGrandFatherName:
                searchResult?.alternativeGrandFatherName,
              gender: searchResult?.gender,
              dateOfBirth: searchResult?.birthdate,
              nationalityId: nationalityId,
              maritalStatusId: maritalStatusId,
              poBox: searchResult?.pobox,
              employeeId: searchResult.employeeId
                ? searchResult.employeeId
                : null,
              fileNumber: searchResult.fileNumber,
            };

            store.dispatch("profile/setProfileInfo", data);
            personalInfo.value = data;
            approveStatus.value = 2;
            isRegisterdHRAuser.value = true;
            toast.success(res.data.message, {
              timeout: 5000,
              position: "bottom-center",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true,
            });
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

    const fetchUserTypes = () => {
      store.dispatch("profile/getUserTypes").then((res) => {
        const utResults = res.data;
        state.value.userTypes = utResults.data;
        state.value.userTypes.splice(
          state.value.userTypes.indexOf("Reviewer"),
          1
        );
      });
    };
    const fetchRegions = () => {
      store.dispatch("profile/getRegions").then((res) => {
        const regionsResult = res.data;
        state.value.regions = regionsResult.data;
      });
    };
    const fetchZones = (id) => {
      store.dispatch("profile/getZones", id).then((res) => {
        const zonesResult = res.data;
        state.value.zones = zonesResult.data;
      });
    };
    const fetchWoredas = (id) => {
      store.dispatch("profile/getWoredas", id).then((res) => {
        const woredasResult = res.data;
        state.value.woreda = woredasResult.data;
      });
    };
    const fetchNationalities = () => {
      store.dispatch("profile/getNationalities").then((res) => {
        const nationalities = res.data;
        state.value.nationalities = nationalities.data;
      });
    };
    const nextStep = () => {
      personalInfo.value.employeeId = searchResultData.value.employeeId;
      personalInfoErrors.value = validateForm(personalInfo.value);
      for (let i = 0; i < state.value.nationalities.length; i++) {
        if (
          state.value.nationalities[i].id == personalInfo.value.nationalityId
        ) {
          nationality.value = state.value.nationalities[i].name;
        }
      }
      if (personalInfo.value.maritalStatusId == 1)
        maritalStatus.value = "Single";
      if (personalInfo.value.maritalStatusId == 2)
        maritalStatus.value = "Married";
      if (personalInfo.value.maritalStatusId == 3)
        maritalStatus.value = "Divorced";
      store.dispatch("profile/setNationality", nationality.value);
      store.dispatch("profile/setMaritalStatus", maritalStatus.value);
      let empty = isEmpty(personalInfoErrors.value);

      if (empty == false || invalidBirthDate.value == true) {
        toast.error("Please fill out required fields", {
          timeout: 5000,
          position: "bottom-center",
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          icon: true,
        });
        return;
      } else if (empty == true) {
        store.dispatch("profile/setProfileInfo", personalInfo);
        store.dispatch("profile/setPhoto", photoFile.value);

        emit("changeActiveState");
        emit("nextStep", "add");
      }
    };
    const validateDate = (dateInput) => {
      let today = new Date();
      let birthYear = parseInt(dateInput.slice(0, 4));
      let birthMonth = parseInt(dateInput.slice(5, 7));
      let birthDay = parseInt(dateInput.slice(8, 10));
      let age = today.getFullYear() - birthYear;
      let month = today.getMonth() - birthMonth;
      if (month < 0 || (month === 0 && today.getDate() < birthDay)) {
        age--;
      }
      if (age < 18) {
        invalidBirthDate.value = true;
        personalInfoErrors.value.dateOfBirth = "Applicant must be 18 or above";
      } else {
        invalidBirthDate.value = false;
      }
    };
    const validateForm = (formData) => {
      const errors = {};
      if (!formData.photo) errors.photo = "Profile picture is required";
      if (!formData.name) errors.name = "First name is required";
      if (!formData.fatherName) errors.fatherName = "Father's name is required";
      if (!formData.dateOfBirth)
        errors.dateOfBirth = "Date of birth is required";
      if (!formData.maritalStatusId)
        errors.maritalStatus = "Marital status is required";
      if (!formData.gender) errors.gender = "Gender is required";
      if (!formData.grandFatherName)
        errors.grandFatherName = "Grandfather's name required";
      if (!formData.nationalityId)
        errors.nationalityId = "Nationality is required";

      let today = new Date().getFullYear();
      let age = today - new Date(formData.dateOfBirth).getFullYear();

      if (age < 18) {
        errors.dateOfBirth = "Applicant must be 18 or above";
      }
      return errors;
    };
    const isEmpty = (obj) => {
      for (var prop in obj) {
        // eslint-disable-next-line no-prototype-builtins
        if (obj.hasOwnProperty(prop)) {
          return false;
        }
      }
      return true;
    };
    onMounted(() => {
      if (store.getters["profile/getPersonalInfo"]) {
        personalInfo.value = store.getters["profile/getPersonalInfo"];
      }
      let photoFetched = store.getters["profile/getPhoto"];
      if (photoFetched || photoFetched != undefined || photoFetched != null) {
        showUpload.value = false;
        photoFile.value = photoFetched;
        let reader = new FileReader();
        if (photoFile.value.size > 100000) {
          photoSizeCheck.value = true;
        } else {
          let fileS = photoFile.value.size;
          if (fileS > 0 && fileS < 1000) {
            fileSize.value += "B";
          } else if (fileS > 1000 && fileS < 1000000) {
            fileSize.value = fileS / 1000 + "kB";
          } else {
            fileSize.value = fileS / 1000000 + "MB";
          }
          reader.addEventListener(
            "load",
            async function () {
              showPreview.value = true;
              filePreview.value = reader.result;
              var base64 = reader.result;
              personalInfo.value.photo = base64;
            },
            false
          );
          if (photoFile.value) {
            if (/\.(jpe?g|png|gif)$/i.test(photoFile.value.name)) {
              isImage.value = true;
              reader.readAsDataURL(photoFile.value);
            } else if (/\.(pdf)$/i.test(photoFile.value.name)) {
              isImage.value = false;
              reader.readAsText(photoFile.value);
            }
          }
        }
      }
      fetchUserTypes();
      fetchRegions();
      fetchNationalities();
    });

    return {
      photoFile,
      photoFileP,
      showPreview,
      filePreview,
      showUpload,
      isImage,
      fileSize,
      handleFileUpload,
      reset,
      personalInfo,
      personalInfoErrors,
      photoSizeCheck,
      validateForm,
      minimumBirthDate,
      nationality,
      searchResultData,
      maritalStatus,
      isRegisterdHRAuser,
      isEmpty,
      searchUser,
      state,
      searchEmployee,
      searchByFileNumber,
      id,
      approveStatus,
      hraUserStat,
      employeeId,
      hraUser,
      fetchUserTypes,
      nextStep,
      fetchRegions,
      fetchZones,
      fetchWoredas,
      fetchNationalities,
      validateDate,
      invalidBirthDate,
    };
  },
};
</script>
<style>
@import "../../styles/document-upload.css";

img {
  width: 150px;
  height: 150px;
}

.photoFile {
  opacity: 0;
  /* invisible but it's there! */
  width: 150px;
  height: 150px;
  position: absolute;
  cursor: pointer;
}

.dropbox {
  outline: 2px dashed grey;
  /* the dash box */
  outline-offset: -10px;
  background: lightcyan;
  color: dimgray;
  padding: 10px 10px;
  height: 150px;
  /* minimum height */
  width: 200px;
  position: relative;
  cursor: pointer;
}

.dropbox:hover {
  background: lightblue;
  /* when mouse over to the drop zone, change color */
}

.dropbox p {
  font-size: 1.2em;
  text-align: center;
}

.form_wrapper {
  width: 800px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 5px;
  margin: 4% auto 0;
  border-top: 2px solid #07677e;
  -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  -webkit-transform-origin: 50% 0%;
  transform-origin: 50% 0%;
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
  -webkit-transition: none;
  transition: none;
  -webkit-animation: expand 0.8s 0.6s ease-out forwards;
  animation: expand 0.8s 0.6s ease-out forwards;
  opacity: 0;
}

@-webkit-keyframes check {
  0% {
    height: 0;
    width: 0;
  }
  25% {
    height: 0;
    width: 7px;
  }
  50% {
    height: 20px;
    width: 7px;
  }
}
@keyframes check {
  0% {
    height: 0;
    width: 0;
  }
  25% {
    height: 0;
    width: 7px;
  }
  50% {
    height: 20px;
    width: 7px;
  }
}
@-webkit-keyframes expand {
  0% {
    -webkit-transform: scale3d(1, 0, 1);
    opacity: 0;
  }
  25% {
    -webkit-transform: scale3d(1, 1.2, 1);
  }
  50% {
    -webkit-transform: scale3d(1, 0.85, 1);
  }
  75% {
    -webkit-transform: scale3d(1, 1.05, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
    opacity: 1;
  }
}
@keyframes expand {
  0% {
    -webkit-transform: scale3d(1, 0, 1);
    transform: scale3d(1, 0, 1);
    opacity: 0;
  }
  25% {
    -webkit-transform: scale3d(1, 1.2, 1);
    transform: scale3d(1, 1.2, 1);
  }
  50% {
    -webkit-transform: scale3d(1, 0.85, 1);
    transform: scale3d(1, 0.85, 1);
  }
  75% {
    -webkit-transform: scale3d(1, 1.05, 1);
    transform: scale3d(1, 1.05, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
    opacity: 1;
  }
}
@-webkit-keyframes bounce {
  0% {
    -webkit-transform: translate3d(0, -25px, 0);
    opacity: 0;
  }
  25% {
    -webkit-transform: translate3d(0, 10px, 0);
  }
  50% {
    -webkit-transform: translate3d(0, -6px, 0);
  }
  75% {
    -webkit-transform: translate3d(0, 2px, 0);
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes bounce {
  0% {
    -webkit-transform: translate3d(0, -25px, 0);
    transform: translate3d(0, -25px, 0);
    opacity: 0;
  }
  25% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }
  50% {
    -webkit-transform: translate3d(0, -6px, 0);
    transform: translate3d(0, -6px, 0);
  }
  75% {
    -webkit-transform: translate3d(0, 2px, 0);
    transform: translate3d(0, 2px, 0);
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@media (max-width: 600px) {
  .form_wrapper .col_half {
    width: 100%;
    float: none;
  }

  .bottom_row .col_half {
    width: 50%;
    float: left;
  }

  .form_container .row .col_half.last {
    border-left: none;
  }

  .remember_me {
    padding-bottom: 20px;
  }
}
</style>
