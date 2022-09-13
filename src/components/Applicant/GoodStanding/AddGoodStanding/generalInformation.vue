<template>
  <nav class="bg-gray-100 px-5 py-3 rounded-md w-full">
    <ol class="list-reset flex">
      <li>
        <router-link to="/menu">
        <a href="#" class="text-main-400 hover:text-blue-700">Home</a>
      </router-link>
        </li>
      <li><span class="text-gray-500 mx-2">/</span></li>
      <li>
        <router-link to="/Applicant/GoodStanding">
        <a href="#" class="text-main-400 hover:text-blue-700">Goodstanding</a>
      </router-link>
      </li>
      <li><span class="text-gray-500 mx-2">/</span></li>
      <li class="text-gray-500">Apply</li>
    </ol>
  </nav>
  <div
    class="
      block
      p-4
      rounded-lg
      shadow-lg
      bg-primary-200
      max-w-full
      mr-8
      mb-8
      sm:p-4
    "
  >
    <div class="mt-small flex justify-center">
      <h2 class="text-main-400 text-3xl font-bold">General Information</h2>
    </div>

    <form @submit.prevent="submit" class="mx-auto max-w-3xl w-full mt-10">
      <div
        class="
          mt-12
        
          rounded-sm
          bg-white
          shadow-2xl
          mb-8
        "
      >
        <div class="container mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div
              class="
                flex
                justify-center
                text-6xl
                min-w-full
                rounded-xl
                p-6
                bg-gray-100
              "
            >
              <div>
                <label class="text-main-400">Applicant Type</label>
                <select
                  class="
                    form-select
                    appearance-none
                    block
                    xl:w-64
                    md:w-64
                    sm:w-64
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    hover:text-main-500 hover:border-main-500
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700
                    focus:bg-white
                    focus:border-main-400
                    focus:outline-none
                  "
                  aria-label="Default select example"
                  @change="checkApplicantType(generalInfo.applicantTypeId)"
                  v-model="generalInfo.applicantTypeId"
                  required
                >
                  <option
                    v-for="applicant in applicantTypes"
                    :key="applicant.name"
                    :value="applicant"
                  >
                    {{ applicant.name }}
                  </option>
                </select>
                <button
                  v-show="Object.keys(localData).length != 0"
                  class="
                    mt-8
                    inline-block
                    px-6
                    py-2.5
                    bg-white
                    text-main-400
                    max-w-3xl
                    border
                    hover:bg-main-400
                    hover:text-white

                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    rounded
                    shadow-md
                     hover:border-main-500
                    focus:bg-blue-700
                    focus:shadow-lg
                    focus:outline-none
                    focus:ring-0
                    active:bg-blue-800 active:shadow-lg
                    transition
                    duration-150
                    ease-in-out
                  "
                  @click="clearLocalData()"
                >
                  <i class="fa fa-close"></i>
                  Clear Form
                </button>
              </div>
            </div>

            <div
              class="flex justify-center text-6xl rounded-none p-2 bg-gray-100"
            >
              <div>
                <div class="overflow-hidden shadow-sm">
                  <label for="" class="text-main-400 sm:ml-4"
                    >Applicant Title</label
                  >

                  <input
                    type="text"
                    id="applicantTitle"
                    v-model="generalInfo.applicantTitle"
                    class="w-full  rounded-none sm:w-10/12 sm:ml-4 border text-main-400"
                   
                    autocomplete="off"
                    placeholder="example-MR,MRS"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div
              class="flex justify-center text-6xl rounded-xl p-2 bg-gray-100"
            >
              <div>
                <label class="text-main-400">Department</label>
                <select
                  class="
                  form-select
                    appearance-none
                    block
                    sm:w-3/4
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    hover:text-main-500 hover:border-main-500
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
                  v-model="generalInfo.departmentId"
                  @change="setDepartment()"
                  required
                >
                  <option
                    v-for="department in departments"
                    v-bind:key="department.id"
                    v-bind:value="department"
                  >
                    {{ department.name }}
                  </option>
                </select>
              </div>
            </div>
            <div
              class="flex justify-center text-6xl rounded-xl p-2 bg-gray-100"
            >
              <div>
                <label class="text-main-400">Profession</label>
                <select
                  class="
                    form-select
                    appearance-none
                    block
                    sm:w-3/4
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    hover:text-main-500 hover:border-main-500
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
                  v-model="generalInfo.professionTypeIds"
                  required
                >
                  <option value="" disabled>
                    Please select department first
                  </option>
                  <option
                    v-for="profession in professionalTypes"
                    v-bind:key="profession.name"
                    v-bind:value="profession"
                  >
                    {{ profession.name }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- region -->
      <div
        v-if="showLocation"
        class="pt-8 mt-12 border  rounded bg-white shadow-2xl"
      >
        <div class="flex">
          <div class="flex flex-col mb-medium w-2/5 ml-medium mr-12">
            <label class="text-main-400">Region</label>
            <select
              class="
                form-select
                appearance-none
                block
                max-w-3xl
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding bg-no-repeat
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
              v-model="generalInfo.regionId"
              @change="fetchZone()"
              required
            >
              <option
                v-for="region in regions"
                v-bind:key="region.name"
                v-bind:value="region.id"
              >
                {{ region.name }}
              </option>
            </select>
          </div>
          <div class="flex flex-col mb-medium w-2/5 mr-12">
            <label class="text-main-400">Zone</label>
            <select
              class="
                form-select
                appearance-none
                block
                max-w-3xl
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding bg-no-repeat
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
              v-model="generalInfo.zoneId"
            >
              <option
                v-for="zone in zones"
                v-bind:key="zone.name"
                v-bind:value="zone"
              >
                {{ zone.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="flex">
          <div class="flex flex-col mb-medium w-2/5 ml-medium mr-12">
            <label class="text-white">Woreda</label>
            <select
              class="
                form-select
                appearance-none
                block
                max-w-3xl
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding bg-no-repeat
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
              v-model="generalInfo.woredaId"
              required
            >
              <option
                v-for="woreda in woredas"
                v-bind:key="woreda.name"
                v-bind:value="woreda"
              >
                {{ woreda.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <!-- end -->

      <!-- GS details -->
      <div
        class="
          mt-12 
          rounded-sm
          bg-white
          shadow-2xl
          mb-8
        "
      >
        <div class="container mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div
              class="
                flex
                justify-center
                text-6xl
                rounded-xl
                ml-4
                p-2
                bg-gray-100
              "
            >
              <div>
                <div class="overflow-hidden shadow-sm">
                  <label for="" class="text-main-400"
                    >Organization Letter written for</label
                  >

                  <input
                    type="text"
                    id="applicantTitle"
                    v-model="generalInfo.whomGoodStandingFor"
                    class="w-full px-3 py-2 rounded-none" 
                    autocomplete="off"
                    placeholder=""
                    required
                  />
                </div>
              </div>
            </div>

            <div
              class="
                flex
                justify-center
                text-6xl
                rounded-xl
                ml-4
                p-2
                bg-gray-100
              "
            >
              <div>
                <div class="overflow-hidden shadow-sm">
                  <label for="" class="text-main-400"
                    >Who Issued Previous License</label
                  >

                  <input
                    type="text"
                    id="applicantTitle"
                    v-model="generalInfo.whoIssued"
                    class="w-full px-3 py-2 rounded-none"
                   
                    autocomplete="off"
                    placeholder=""
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div
              class="
                flex
                justify-center
                text-6xl
                ml-4
                mb-4
                rounded-xl
                p-2
                bg-gray-100
              "
            >
              <div>
                <div class="overflow-hidden shadow-sm">
                  <label for="" class="text-main-400"
                    >License Registration Number</label
                  >

                  <input
                    type="text"
                    id="applicantTitle"
                    v-model="generalInfo.licenseRegistrationNumber"
                    class="w-full px-3 py-2 rounded-none" 
                    autocomplete="off"
                    placeholder=""
                    required
                  />
                </div>
              </div>
            </div>

            <div
              class="flex justify-center text-6xl rounded-xl p-2 bg-gray-100"
            >
              <div>
                <div class="overflow-hidden shadow-sm">
                  <label for="" class="text-main-400">License Issued Date</label>

                  <input
                    type="date"
                    id="applicantTitle"
                    v-model="generalInfo.licenseIssuedDate"
                    class="w-full px-3 py-2 rounded-none" 
                    autocomplete="off"
                    placeholder="example-MR,MRS"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- GS details -->
      <div class="flex justify-end mb-2 mr-1">
        <button
          class="
            float-right
            mt-8
            inline-block
            px-6
            py-2.5
            bg-blue-700
            text-main-400
            max-w-3xl
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            bg-white
            border
            hover:text-white hover:border-main-500
            hover:bg-main-400
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out
          "
          type="submit"
          @click="apply()"
        >
          Next
        </button>
      </div>
    </form>
  </div>
</template>
  <script>
import { useStore } from "vuex";
import { ref, onMounted } from "vue";
export default {
  props: ["activeState"],
  components: {},

  setup(props, { emit }) {
    const store = useStore();
    let generalInfo = ref({
      applicantId: +localStorage.getItem("userId"),
      applicantTypeId: "",
      residenceWoredaId: "",
      applicantTitle: "",
      whomGoodStandingFor: "",
      licenseIssuedDate: "",
      whoIssued: "",
      licenseRegistrationNumber: "",
      professionTypeIds: "",
      applicantPositionId: "",
      otherProfessionType: "",
      otherProfessionTypeAmharic: "",
      applicationStatusId: "",
      regionId: "",
      zoneId: "",
      woredaId: "",
      departmentId: "",
      expertLevelId: "",
      licenseFile: [],
    });
    let localData = ref([]);
    let regions = ref([]);
    let zones = ref([]);
    let woredas = ref([]);
    let departments = ref([]);
    let applicationPositions = ref([]);

    let applicantTypes = ref([]);
    let showLocation = ref(false);
    let professionalTypes = ref([]);
    let showOtherProfession = ref(false);

    const checkApplicantType = (applicantType) => {
      generalInfo.value.regionId = null;
      generalInfo.value.zoneId = null;
      generalInfo.value.woredaId = null;

      if (applicantType.code == "ETH") {
        generalInfo.value.expertLevelId = 4;
        showLocation.value = true;
      } else {
        generalInfo.value.expertLevelId = 3;
        showLocation.value = false;
      }
    };
    const checkOtherProfession = (profession, event) => {
      showOtherProfession.value = true;
    };

    const fetchApplicantType = () => {
      store.dispatch("goodstanding/getApplicantType").then((res) => {
        applicantTypes.value = res.data.data;
      });
    };

    const fetchDepartments = () => {
      store.dispatch("goodstanding/getDepartmentType").then((res) => {
        departments.value = res.data.data;
      });
    };
    const fetchApplicationPositions = () => {
      store.dispatch("goodstanding/getApplicantPosition").then((res) => {
        applicationPositions.value = res.data.data;
      });
    };
    const fetchRegions = () => {
      store.dispatch("goodstanding/getRegions").then((res) => {
        regions.value = res.data.data;
      });
    };
    const fetchZone = () => {
      store
        .dispatch("goodstanding/getZones", generalInfo.value.regionId)
        .then((res) => {
          console.log(res)
          zones.value = res.data.data;
        });
    };
    const fetchWoredas = () => {
      store
        .dispatch("goodstanding/getWoredas", generalInfo.value.zoneId)
        .then((res) => {
          woredas.value = res.data.data;
        });
    };
    const fetchProfessionalType = (id) => {
      professionalTypes.value = [];
      generalInfo.value.professionalTypeId = [];
      store.dispatch("goodstanding/getProfessionalTypes", id).then((res) => {
        professionalTypes.value = res.data.data;
      });
    };
    const setDepartment = () => {
      fetchProfessionalType(generalInfo.value.departmentId.id);
    };
    const apply = () => {
      let tempApplicationData = generalInfo.value;
      window.localStorage.setItem(
        "GSApplicationData",
        JSON.stringify(tempApplicationData)
      );
      store
        .dispatch("goodstanding/setGeneralInfo", generalInfo.value)
        .then(() => {
          emit("changeActiveState");
        });
    };
    const clearLocalData = () => {
      window.localStorage.setItem("GSApplicationData", "");
      window.localStorage.setItem("GSApplicationImageData", "");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    };
    onMounted(async () => {
      fetchApplicantType();
      fetchDepartments();
      fetchProfessionalType();
      fetchRegions();
      fetchZone();
      fetchWoredas();
      fetchApplicationPositions();
      localData.value = window.localStorage.getItem("GSApplicationData")
        ? JSON.parse(window.localStorage.getItem("GSApplicationData"))
        : {};
      if (Object.keys(localData.value).length != 0) {
        generalInfo.value = localData.value;
      }
    });
    return {
      checkApplicantType,
      checkOtherProfession,
      fetchProfessionalType,
      setDepartment,
      apply,
      fetchZone,
      showLocation,
      regions,
      woredas,
      zones,
      professionalTypes,
      generalInfo,
      applicantTypes,
      departments,
      clearLocalData,
      localData,
    };
  },
};
</script>
  <style>
#main {
  border: 1px solid #cccccc;
  border-radius: 5px;
}
.table-multiple {
  border: 1px solid #cccccc;
  border-radius: 5px;
}
</style>
  