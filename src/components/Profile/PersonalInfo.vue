<template>
  <div class="w-screen max-w-4xl mt-small h-full">
    <div
      class="
        flex flex-col
        mt-medium
        w-full
        bg-white
        blue-box-shadow-light
        rounded
        mb-large
      "
    >
      <div class="mt-large">
        <TitleWithIllustration
          illustration="PersonalInfo"
          message="Personal Infos"
        />
      </div>

      <div class="flex w-1/2 mb-small ml-64 mt-8">
        <div class="form-check">
          <input
            class="
              form-check-input
              appearance-none
              h-4
              w-4
              border border-gray-300
              rounded-sm
              bg-white
              checked:bg-blue-600 checked:border-blue-600
              focus:outline-none
              transition
              duration-200
              mt-1
              align-top
              bg-no-repeat bg-center bg-contain
              float-left
              mr-2
              cursor-pointer
            "
            type="checkbox"
            id="flexCheckDefault"
            v-model="hraUserStat"
            @click="hraUser()"
          />

          <label
            class="form-check-label inline-block text-gray-800"
            for="flexCheckDefault"
          >
            Check here if you are registered on HRA
          </label>
          <br />
          <div v-if="hraUserStat">
  
            <div class="flex justify-center">
              <div class="mb-3 xl:w-96">
                <div
                  class="
                    input-group
                    relative
                    flex flex-wrap
                    items-stretch
                    w-full
                    mb-4
                  "
                >
                  <input
                    type="search"
                    class="
                      form-control
                      relative
                      flex-auto
                      min-w-0
                      block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700
                      focus:bg-white
                      focus:border-blue-600
                      focus:outline-none
                    "
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon2"
                    v-model="employeeId"
                  />
                  <button
                    class="
                      btn
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
                      shadow-md
                      hover:bg-blue-700 hover:shadow-lg
                      focus:bg-blue-700
                      focus:shadow-lg
                      focus:outline-none
                      focus:ring-0
                      active:bg-blue-800 active:shadow-lg
                      transition
                      duration-150
                      ease-in-out
                      flex
                      items-center
                    "
                    type="button"
                    id="button-addon2"
                    @click="searchHRA()"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="search"
                      class="w-4"
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <form class="mx-auto max-w-3xl w-full mt-10" @submit.prevent="nextStep">
        <div class="flex justify-center">
          <span>
            <h2>{{ photoFile.name }}</h2>
            <h2>{{ fileSize }}</h2>
          </span>
        </div>
        <div class="flex mb-4 justify-center">
          <span v-if="showUpload">
            <span>
              <label class="text-primary-700 text-justify"
                >Maximum size for profile picture is 3 MB
              </label>
            </span>
            <br />
            <label class="text-primary-700 text-justify"
              >Upload Profile Picture: (*)
              <div class="dropbox ml-8">
                <input
                  type="file"
                  id="photoFile"
                  class="photoFile"
                  ref="photoFileP"
                  v-on:change="handleFileUpload()"
                  style="margin-bottom: 15px !important"
                />
                <!-- file format can be restricted by using accept=".jpeg,.jpg,.png,.pdf,...." -->
                <p>
                  Drag your Profile Picture here to begin<br />
                  or click to browse
                </p>
              </div>
              <div class="ml-8">
                <span style="color: red">{{ personalInfoErrors.photo }}</span>
              </div>
            </label>
          </span>
          <picture v-if="!showUpload && isImage">
            <p class="ml-4">
              <a href="javascript:void(0)" @click="reset()">Upload again</a>
            </p>
            <img v-bind:src="filePreview" v-show="showPreview" />
          </picture>
          <span v-if="photoSizeCheck" style="color: red"
            >Image size to big, Upload again. Image must be less than 3 MB</span
          >
          <span v-if="!showUpload && !isImage && !photoSizeCheck">
            <img :src="filePreview" alt="" class="preview" />
          </span>
        </div>
        <div class="flex">
          <div class="flex flex-col mb-medium w-1/2 mr-6">
            <label class="text-primary-700">First Name (*)</label>
            <input
              class="max-w-3xl"
              type="text"
              onkeypress="return /[a-zA-Z]/i.test(event.key)"
              v-model="personalInfo.name"
            />
            <span style="color: red">{{ personalInfoErrors.name }}</span>
          </div>
          <div class="flex flex-col mb-medium w-1/2 ml-12">
            <label class="text-primary-700">Father Name (*)</label>
            <input
              class="max-w-3xl"
              type="text"
              onkeypress="return /[a-zA-Z]/i.test(event.key)"
              v-model="personalInfo.fatherName"
            />
            <span style="color: red">{{ personalInfoErrors.fatherName }}</span>
          </div>
        </div>
        <div class="flex">
          <div class="flex flex-col mb-medium w-1/2 mr-6">
            <label class="text-primary-700">GrandFather Name (*)</label>
            <input
              class="max-w-3xl"
              type="text"
              onkeypress="return /[a-zA-Z]/i.test(event.key)"
              v-model="personalInfo.grandFatherName"
            />
            <span style="color: red">{{
              personalInfoErrors.grandFatherName
            }}</span>
          </div>
          <div class="flex flex-col mb-medium w-1/2 ml-12">
            <label class="text-primary-700">ስም በአማርኛ (Name in Amharic)</label>
            <input
              class="max-w-3xl"
              type="text"
              onkeypress="return /[a-zA-Z]/i.test(event.key)"
              v-model="personalInfo.alternativeName"
            />
            <span style="color: red">{{
              personalInfoErrors.alternativeName
            }}</span>
          </div>
        </div>
        <div class="flex">
          <div class="flex flex-col mb-medium w-1/2 mr-12">
            <label class="text-primary-700"
              >የአባት ስም በአማርኛ (Father's Name in Amharic)</label
            >
            <input
              class="max-w-3xl"
              type="text"
              onkeypress="return /[a-zA-Z]/i.test(event.key)"
              v-model="personalInfo.alternativeFatherName"
            />
            <span style="color: red">{{
              personalInfoErrors.alternativeFatherName
            }}</span>
          </div>
          <div class="flex flex-col mb-medium w-1/2 m1-12">
            <label class="text-primary-700"
              >የአያት ስም በአማርኛ (Grandfather's Name in Amharic)</label
            >
            <input
              class="max-w-3xl"
              type="text"
              onkeypress="return /[a-zA-Z]/i.test(event.key)"
              v-model="personalInfo.alternativeGrandFatherName"
            />
            <span style="color: red">{{
              personalInfoErrors.alternativeGrandFatherName
            }}</span>
          </div>
        </div>

        <div class="flex">
          <div class="flex flex-col mb-medium w-1/2 mr-6">
            <label class="text-primary-700">Nationality (*)</label>
            <select
              class="max-w-3xl"
              v-model="personalInfo.nationalityId"
              @change="fetchNationalities()"
            >
              <option
                v-for="types in state.nationalities"
                v-bind:key="types.name"
                v-bind:value="types.id"
              >
                {{ types.name }}
              </option>
            </select>
            <span style="color: red">{{
              personalInfoErrors.nationalityId
            }}</span>
          </div>
          <div class="flex flex-col mb-medium w-1/2 ml-12">
            <label class="text-primary-700">PO Box(Optional)</label>
            <input class="max-w-3xl" type="text" v-model="personalInfo.poBox" />
          </div>
        </div>
        <div class="flex">
          <div class="flex flex-col mb-medium w-1/2 mr-6">
            <label class="text-primary-700">Date of birth (*)</label>
            <input
              class="max-w-3xl"
              type="date"
              v-model="personalInfo.dateOfBirth"
              @change="validateDate(personalInfo.dateOfBirth)"
            />
            <span style="color: red">{{ personalInfoErrors.dateOfBirth }}</span>
            <span
              v-if="invalidBirthDate"
              style="color: red"
              class="mt-2 text-lg"
            >
              Applicant must be at least 18.
            </span>
          </div>
          <div class="flex flex-col mb-medium w-1/2 ml-12">
            <div class="flex flex-col w-full">
              <label class="text-primary-700">Gender</label>
              <div class="flex w-full">
                <div class="flex flex-col mb-small w-1/3">
                  <div class="flex py-2">
                    <input
                      class="flex flex-col"
                      type="radio"
                      id="male"
                      value="male"
                      v-model="personalInfo.gender"
                    />
                    <label
                      class="ml-tiny flex flex-col text-primary-700"
                      for="male"
                    >
                      Male
                    </label>
                  </div>
                </div>
                <div class="flex w-1/3">
                  <div class="flex flex-col w-1/3">
                    <div class="flex py-2">
                      <input
                        type="radio"
                        id="female"
                        value="female"
                        v-model="personalInfo.gender"
                      />
                      <label class="ml-tiny text-primary-700" for="female">
                        Female
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <span style="color: red" class="mt-0">
                {{ personalInfoErrors.gender }}</span
              >
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="flex w-1/2 mb-small m1-12">
            <div class="flex flex-col w-full">
              <label class="text-primary-700">Martial Status</label>
              <div class="flex w-full">
                <div class="flex flex-col w-1/3">
                  <div class="flex py-2">
                    <input
                      class="flex flex-col"
                      type="radio"
                      id="single"
                      value="1"
                      v-model="personalInfo.maritalStatusId"
                    />
                    <label
                      class="ml-tiny flex flex-col text-primary-700"
                      for="single"
                    >
                      Single
                    </label>
                  </div>
                </div>
                <div class="flex w-1/3">
                  <div class="flex flex-col w-1/3">
                    <div class="flex py-2">
                      <input
                        type="radio"
                        id="married"
                        value="2"
                        v-model="personalInfo.maritalStatusId"
                      />
                      <label class="ml-tiny text-primary-700" for="married">
                        Married
                      </label>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col w-1/3">
                  <div class="flex py-2">
                    <input
                      type="radio"
                      id="divorced"
                      value="3"
                      v-model="personalInfo.maritalStatusId"
                    />
                    <label class="ml-tiny text-primary-700" for="divorced">
                      Divorced
                    </label>
                  </div>
                </div>
              </div>
              <span style="color: red">{{
                personalInfoErrors.maritalStatusId
              }}</span>
            </div>
          </div>
        </div>

        <div class="flex mb-medium w-full mt-medium">
          <button
            class="
              block
              mx-auto
              w-1/4
              bg-lightBlue-500
              hover:bg-lightBlue-600 hover:shadow-lg
            "
          >
            Next
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useStore } from "vuex";
import TitleWithIllustration from "@/sharedComponents/TitleWithIllustration";
export default {
  components: { TitleWithIllustration },
  props: ["activeState"],
  setup(props, { emit }) {
    const store = useStore();
    let photoFile = ref("");
    let photoFileP = ref("");
    let showPreview = ref(false);
    let filePreview = ref("");
    let showUpload = ref(true);
    let isImage = ref(true);
    let photoSizeCheck = ref(false);
    let fileSize = ref("");
    let nationality = ref("");
    let maritalStatus = ref("");
    let invalidBirthDate = ref(false);
    const hraUserStat = ref(false);
    const employeeId = ref("");
    const hraUser = () => {
      hraUserStat.value = !hraUserStat.value;
    };
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
      alternativeName: "",
      alternativeFatherName: "",
      alternativeGrandFatherName: "",
      nationalityId: "",
      gender: "",
      maritalStatusId: "",
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
      photoFile.value = photoFileP.value.files[0];
      let reader = new FileReader();
      if (photoFile.value.size > 3145728) {
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
      personalInfo.value.employeeId = employeeId.value;
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
      if (empty == false) {
        return;
      }
      if (empty == true) {
        console.log(personalInfo);
        store.dispatch("profile/setProfileInfo", personalInfo);
        store.dispatch("profile/setPhoto", photoFile.value);
        emit("changeActiveState");
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
      } else {
        invalidBirthDate.value = false;
      }
    };
    const validateForm = (formData) => {
      const errors = {};
      if (!formData.photo) errors.photo = "Profile Picture Required";
      if (!formData.name) errors.name = "First Name Required";
      if (!formData.fatherName) errors.fatherName = "Father's Name Required";
      if (!formData.grandFatherName)
        errors.grandFatherName = "Grandfather's Name Required";
      if (!formData.nationalityId)
        errors.nationalityId = "Nationality Required";
      return errors;
    };
    const isEmpty = (obj) => {
      for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          return false;
        }
      }
      return true;
    };

const searchHRA = () => {
let url="https://ihris.sandboxaddis.com/events/getPerson/"+employeeId.value;

axios.get(url).then((res)=>{
console.log(res)

  
}).catch((err)=>console.log(err))
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
      nationality,
      maritalStatus,
      isEmpty,
      state,
      id,
      hraUserStat,
      employeeId,
      searchHRA,
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
  opacity: 0; /* invisible but it's there! */
  width: 150px;
  height: 150px;
  position: absolute;
  cursor: pointer;
}
.dropbox {
  outline: 2px dashed grey; /* the dash box */
  outline-offset: -10px;
  background: lightcyan;
  color: dimgray;
  padding: 10px 10px;
  height: 150px; /* minimum height */
  width: 200px;
  position: relative;
  cursor: pointer;
}
.dropbox:hover {
  background: lightblue; /* when mouse over to the drop zone, change color */
}
.dropbox p {
  font-size: 1.2em;
  text-align: center;
  padding: 50px 0;
}
</style>
