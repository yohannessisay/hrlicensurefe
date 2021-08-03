<template>
  <div class="w-screen max-w-4xl mt-small h-full">
    <div
      class="flex flex-col mt-medium w-full bg-white blue-box-shadow-light rounded mb-large"
    >
      <div class="mt-large">
        <TitleWithIllustration
          illustration="PersonalInfo"
          message="Personal Info"
        />
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
            <label class="text-primary-700 ml-4"
              >Upload Profile Picture:
              <div class="dropbox">
                <input
                  type="file"
                  id="photoFile"
                  class="photoFile"
                  ref="photoFileP"
                  v-on:change="handleFileUpload()"
                  style="margin-bottom: 15px !important;"
                  
                />
                <!-- we can restirct what type of file format it can use using accept=".jpeg,.jpg,.png,.pdf,...." -->
                <p>
                  Drag your Profile Picture here to begin<br />
                  or click to browse
                </p>
              </div>
            </label>
          </span>

          <picture v-if="!showUpload && isImage">
            <p class="ml-4">
              <a href="javascript:void(0)" @click="reset()">Upload again</a>
            </p>
            <img v-bind:src="filePreview" v-show="showPreview" />
          </picture>
            <span v-if="photoSizeCheck" style="color: red">Image size to big, Upload again. Image must be less than 100 kB</span>
          <span v-if="!showUpload && !isImage && !photoSizeCheck">
            <img :src="filePreview" alt="" class="preview" />
          </span>
        </div>
        <div class="flex">
          <div class="flex flex-col mb-medium w-1/2 mr-6">
            <label class="text-primary-700">First Name</label>
            <input class="max-w-3xl" type="text" v-model="personalInfo.name" />
            <span style="color: red">{{ personalInfoErrors.name }}</span>
          </div>
          <div class="flex flex-col mb-medium w-1/2 ml-12">
            <label class="text-primary-700">Father Name</label>
            <input
              class="max-w-3xl"
              type="text"
              v-model="personalInfo.fatherName"
            />
            <span style="color: red">{{ personalInfoErrors.fatherName }}</span>
          </div>
        </div>
        <div class="flex">
          <div class="flex flex-col mb-medium w-1/2 mr-6">
            <label class="text-primary-700">Grand Father Name</label>
            <input
              class="max-w-3xl"
              type="text"
              v-model="personalInfo.grandFatherName"
            />
            <span style="color: red">{{
              personalInfoErrors.grandFatherName
            }}</span>
          </div>
          <div class="flex flex-col mb-medium w-1/2 ml-12">
            <label class="text-primary-700">Name in Amharic</label>
            <input
              class="max-w-3xl"
              type="text"
              v-model="personalInfo.alternativeName"
            />
            <span style="color: red">{{
              personalInfoErrors.alternativeName
            }}</span>
          </div>
        </div>
        <div class="flex">
          <div class="flex flex-col mb-medium w-1/2 mr-12">
            <label class="text-primary-700">Father's Name in Amharic</label>
            <input
              class="max-w-3xl"
              type="text"
              v-model="personalInfo.alternativeFatherName"
            />
            <span style="color: red">{{
              personalInfoErrors.alternativeFatherName
            }}</span>
          </div>
          <div class="flex flex-col mb-medium w-1/2 m1-12">
            <label class="text-primary-700"
              >Grandfather's Name in Amharic</label
            >
            <input
              class="max-w-3xl"
              type="text"
              v-model="personalInfo.alternativeGrandFatherName"
            />
            <span style="color: red">{{
              personalInfoErrors.alternativeGrandFatherName
            }}</span>
          </div>
        </div>

        <div class="flex">
          <div class="flex flex-col mb-medium w-1/2 mr-6">
            <label class="text-primary-700">Nationality</label>
            <input
              class="max-w-3xl"
              type="text"
              v-model="personalInfo.nationality"
            />
            <span style="color: red">{{ personalInfoErrors.nationality }}</span>
          </div>

          <div class="flex flex-col mb-medium w-1/2 ml-12">
            <label class="text-primary-700">Place of birth(Optional)</label>
            <input
              class="max-w-3xl"
              type="text"
              v-model="personalInfo.placeOfBirth"
            />
          </div>
        </div>
        <div class="flex flex-col mb-medium w-1/2 m1-12">
          <label class="text-primary-700">Date of birth </label>
          <input
            class="max-w-3xl"
            type="date"
            v-model="personalInfo.dateOfBirth"
          />
          <span style="color: red">{{ personalInfoErrors.dateOfBirth }}</span>
        </div>
        <div class="flex">
          <div class="flex w-1/2 mb-small  mr-12">
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
                      @change="genderChanged()"
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
                        @change="genderChanged()"
                      />
                      <label class="ml-tiny text-primary-700" for="married">
                        Married
                      </label>
                    </div>
                  </div>
                </div>
                <div class="flex  flex-col w-1/3">
                  <div class="flex py-2">
                    <input
                      type="radio"
                      id="divorced"
                      value="3"
                      v-model="personalInfo.maritalStatusId"
                      @change="genderChanged()"
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
        <div class="flex">
          <div class="flex flex-col mb-medium w-1/2 mr-12">
            <label class="text-primary-700">User Type</label>
            <select class="max-w-3xl" v-model="personalInfo.userTypeId">
              <option
                v-for="types in state.userTypes"
                v-bind:key="types.name"
                v-bind:value="types.id"
              >
                {{ types.name }}
              </option>
            </select>
            <span style="color: red">{{ personalInfoErrors.userTypeId }}</span>
          </div>
        </div>

        <div class="flex mb-medium w-full mt-medium">
          <button
            class="block mx-auto w-1/4  bg-lightBlue-500 hover:bg-lightBlue-600 hover:shadow-lg"
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
import { useStore } from "vuex";
import TitleWithIllustration from "@/sharedComponents/TitleWithIllustration";
import { base64StringToBlob } from 'blob-util';

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
    let photoSizeCheck= ref(false);
    let fileSize = ref("");

    let personalInfo = ref({
      name: "",
      fatherName: "",
      grandFatherName: "",
      alternativeName: "",
      alternativeFatherName: "",
      alternativeGrandFatherName: "",
      gender: "",
      dateOfBirth: "",
      placeOfBirth: "",
      nationality: "",
      userTypeId: "",
      maritalStatusId: "",
      photo: "",
    });
    let personalInfoErrors = ref({
      name: "",
      fatherName: "",
      grandFatherName: "",
      alternativeName: "",
      alternativeFatherName: "",
      alternativeGrandFatherName: "",
      nationality: "",
      gender: "",
      maritalStatusId: "",
      userTypeId: "",
    });

    let state = ref({
      userTypes: {},
      expertLevel: {},
      healthOffices: {},
      maritalStatuses: {},
    });
    const reset = () => {
      showUpload.value = true;
      showPreview.value = false;
      photoFile.value = "";
      filePreview.value = "";
      isImage.value = true;
      photoSizeCheck.value=false;
    };
    const handleFileUpload = async () => {
      showUpload.value = false;
      photoFile.value = photoFileP.value.files[0];
  
      let reader = new FileReader();
 if(photoFile.value.size>100000)
 {
photoSizeCheck.value=true;
 }
 else
 {
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
       async function() {
          showPreview.value = true;
          filePreview.value = reader.result;
          
          console.log(photoFile.value);
          var base64 = reader.result;
         
          // var blob= reader.readAsArrayBuffer( );;
          // console.log("blob file");
          // console.log(blob)
     
   personalInfo.value.photo =base64 ;

          
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

    const fetchExpertLevel = () => {
      store.dispatch("profile/getExpertLevels").then((res) => {
        const elResults = res.data;
        state.value.expertLevel = elResults.data;
      });
    };

    const fetchHealthOffices = () => {
      if (personalInfo.value.expertLevelId == 4) {
        store.dispatch("profile/getHealthOffice").then((res) => {
          const hoResults = res.data;
          state.value.healthOffices = hoResults.data;
        });
      }
    };

    const nextStep = () => {
      personalInfoErrors.value = validateForm(personalInfo.value);
      let empty = isEmpty(personalInfoErrors.value);
      if (empty == false) {
        return;
      }
      if (empty == true) {
        store.dispatch("profile/setProfileInfo", personalInfo);
        emit("changeActiveState");
       
      }
    };

    const genderChanged = () => {
      if (personalInfo.value.maritalStatusId == 3) {
        personalInfo.value.maritalStatus = "Divorced";
      }
      if (personalInfo.value.maritalStatusId == 2) {
        personalInfo.value.maritalStatus = "Married";
      }
      if (personalInfo.value.maritalStatusId == 1) {
        personalInfo.value.maritalStatus = "Single";
      }
    };

    const validateForm = (formData) => {
      const errors = {};

      if (!formData.name) errors.name = "First Name Required";
      if (!formData.fatherName) errors.fatherName = "Father's Name Required";
      if (!formData.grandFatherName)
        errors.grandFatherName = "Grandfather's Name Required";
      if (!formData.alternativeName)
        errors.alternativeName = "Alternative Name Required";
      if (!formData.alternativeFatherName)
        errors.alternativeFatherName = "Alternative Father's Name Required";
      if (!formData.alternativeGrandFatherName)
        errors.alternativeGrandFatherName =
          "Alternative Grandfather's Name Required";
      if (!formData.nationality) errors.nationality = "Nationality Required";
      if (!formData.gender) errors.gender = "Gender Required";
      if (!formData.maritalStatusId)
        errors.maritalStatusId = "Marital Status Required";
      if (!formData.userTypeId) errors.userTypeId = "User Type Required";
      if (!formData.dateOfBirth) errors.dateOfBirth = "Date of Birth Required";

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

    onMounted(() => {
      if (store.getters["profile/getPersonalInfo"]) {
        personalInfo.value = store.getters["profile/getPersonalInfo"];
      }
      fetchUserTypes();
      fetchExpertLevel();
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
      isEmpty,
      state,
      fetchUserTypes,
      fetchExpertLevel,
      fetchHealthOffices,
      nextStep,
      genderChanged,
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
