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
    id="editModal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="addModalLabel"
    aria-hidden="true"
  >
    <div
      class="
        modal-dialog modal-dialog-centered modal-md
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
          class="
            modal-header
            flex flex-shrink-0
            items-center
            justify-between
            p-2
            rounded-t-md
          "
        ></div>
        <div class="vld-parent">
          <loading
            :active="isLoading"
            :is-full-page="false"
            :color="'#2F639D'"
            :opacity="1"
          ></loading>
          <div class="modal-body relative">
            <div class="container">
              <section class="text-gray-800">
               <div class="flex justify-center shadow-md mb-4">
                  <div class="text-center max-w-full">
                    <h2 class="text-2xl font-bold">
                    Edit Professional Type
                    </h2>
                  </div>
                </div>

                <div class="grow-0 shrink-0 basis-auto w-full lg:w-full">
                  <form>
                    <div class="flex flex-wrap">
                      <div
                        class="
                          mb-12
                          grow-0
                          shrink-0
                          basis-auto
                          w-full
                          lg:w-full
                          px-3
                          lg:px-6
                        "
                      >
                        <div class="flex items-start">
                          <div class="grow ml-6">
                            <!-- Professional Type Department -->
                            <div class="group w-full md:full lg:w-full ml-4">
                              <label
                                for="depName"
                                class="
                                  inline-block
                                  w-full
                                  text-md
                                  mb-2
                                  text-primary-600
                                  font-bold
                                  text-gray-500
                                  transition-all
                                  duration-200
                                  ease-in-out
                                "
                                >Professional Type Department</label
                              >

                              <div class="group w-full md:full lg:w-full">
                                <div class="relative flex items-center">
                                  <select
                                    class="
                                      form-select
                                      appearance-none
                                      block
                                      w-full
                                      px-6
                                      mb-8
                                      py-2
                                      text-base
                                      font-normal
                                      text-gray-700
                                      bg-white bg-clip-padding bg-no-repeat
                                      border border-solid border-gray-300
                                      rounded
                                      transition
                                      ease-in-out
                                      focus:text-gray-700
                                      focus:bg-white
                                      focus:border-blue-600
                                      focus:outline-none
                                    "
                                    aria-label="Default select example"
                                    v-model="editData.selectedDepartment"
                                  >
                                    <option
                                      v-for="department in departments"
                                      :key="department.id"
                                      :value="department.id"
                                    >
                                      {{ department.name }}
                                    </option>
                                  </select>
                                </div>
                              </div>
                            </div> 
                            <!-- Professional Type Department -->
                            <!-- Professional Type Education Level -->
                            <div class="group w-full md:full lg:w-full ml-4">
                              <label
                                for="depName"
                                class="
                                  inline-block
                                  w-full
                                  text-md
                                  mb-2
                                  text-primary-600
                                  font-bold
                                  text-gray-500
                                  transition-all
                                  duration-200
                                  ease-in-out
                                "
                                >Professional Type Education Level</label
                              >

                              <div class="relative flex items-center">
                                <select
                                  class="
                                    form-select
                                    appearance-none
                                    block
                                    w-full
                                    px-6
                                    mb-8
                                    py-2
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding bg-no-repeat
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    focus:text-gray-700
                                    focus:bg-white
                                    focus:border-blue-600
                                    focus:outline-none
                                  "
                                  v-model="editData.selectedEdLevel"
                                  aria-label="Default select example"
                                >
                                  <option
                                    v-for="education in educationLevels"
                                    :key="education.id"
                                    :value="education.id"
                                  >
                                    {{ education.name }}
                                  </option>
                                </select>
                              </div>
                            </div>
                            <!-- Professional Type Education Level -->

                            <!-- Professional Type Name -->
                            <div class="group w-full md:full lg:w-full ml-4">
                              <label
                                for="depName"
                                class="
                                  inline-block
                                  w-full
                                  text-md
                                  mb-2
                                  text-primary-600
                                  font-bold
                                  text-gray-500
                                  transition-all
                                  duration-200
                                  ease-in-out
                                "
                                >Professional Type Name</label
                              >
                              <div class="relative flex items-center">
                                <input
                                  id="depName"
                                  type="text"
                                  class="
                                    peer
                                    relative
                                    h-18
                                    w-full
                                    rounded-sm
                                    pl-10
                                    pr-4
                                    outline-none
                                    drop-shadow-sm
                                    transition-all
                                    duration-200
                                    ease-in-out
                                    focus:bg-white
                                    focus:text-primary-600
                                    focus:font-bold
                                    focus:drop- 
                                  "
                                  required
                                  placeholder="Enter name"
                                  v-model="editData.Name"
                                />

                                <i
                                  class="
                                    fa fa-text-width
                                    ml-4
                                    absolute
                                    left-auto
                                    text-primary-600
                                  "
                                ></i>
                              </div>

                              <small
                                v-if="showProfessionalTypeNameError"
                                class="text-red-300"
                                >{{ professionalTypeNameError }}</small
                              >
                            </div>
                            <!-- Professional Type Name -->
                            <!-- Professional Type Amharic Name -->
                            <div class="group w-full md:full lg:w-full ml-4">
                              <label
                                for="depName"
                                class="
                                  inline-block
                                  w-full
                                  text-md
                                  mb-2
                                  text-primary-600
                                  font-bold
                                  text-gray-500
                                  transition-all
                                  duration-200
                                  ease-in-out
                                "
                                >Professional Type Amharic Name</label
                              >
                              <div class="relative flex items-center">
                                <input
                                  id="depName"
                                  type="text"
                                  class="
                                    peer
                                    relative
                                    h-18
                                    w-full
                                    rounded-sm
                                    pl-10
                                    pr-4
                                    outline-none
                                    drop-shadow-sm
                                    transition-all
                                    duration-200
                                    ease-in-out
                                    focus:bg-white
                                    focus:text-primary-600
                                    focus:font-bold
                                    focus:drop- 
                                  "
                                  required
                                  placeholder="Enter name in amharic"
                                  v-model="editData.amharicProfessionalType"
                                />

                                <i
                                  class="
                                    fa fa-text-width
                                    ml-4
                                    absolute
                                    left-auto
                                    text-primary-600
                                  "
                                ></i>
                              </div>
                            </div>
                            <!-- Professional Type Amharic Name -->

                            <div class="form-group ml-5 mb-2 mt-8">
                              <label
                                for=""
                                class="
                                  inline-block
                                  w-full
                                  text-md text-primary-600
                                  font-bold
                                  text-gray-500
                                  transition-all
                                  duration-200
                                  ease-in-out
                                  mb-2
                                "
                                >Profession Type Status</label
                              >
                              <div class="toggle slim colour">
                                <input
                                  v-model="editData.finalStatus"
                                  id="isVerified"
                                  class="toggle-checkbox hidden cursor-pointer"
                                  type="checkbox"
                                  :checked="
                                    editData && editData.finalStatus == true
                                      ? true
                                      : false
                                  "
                                />
                                <label
                                  for="isVerified"
                                  class="
                                    toggle-label
                                    block
                                    w-12
                                    h-4
                                    rounded-full
                                    transition-color
                                    duration-150
                                    ease-out
                                  "
                                ></label>
                                <span
                                  :class="
                                    editData && editData.finalStatus == true
                                      ? 'text-green-200 font-bold'
                                      : 'text-yellow-300 font-bold'
                                  "
                                >
                                  {{
                                    editData.finalStatus ? "Active" : "Inactive"
                                  }}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div
          class="
            modal-footer p-2
            flex
            justify-center
            p-2
            border-t border-grey-100
            rounded-b-md
          "
        >
          <button
            type="button"
            :class="
              professionalTypeNameFilled
                ? 'inline-block px-6 text-white bg-primary-700 font-medium text-xs leading-tight uppercase  rounded   hover:bg-white hover:text-primary-600 hover:border-primary-600 transition duration-150 ease-in-out'
                : 'inline-block px-6 text-white bg-primary-700 font-medium text-xs leading-tight uppercase  rounded   hover:bg-white hover:text-primary-600 hover:border-primary-600 transition duration-150 ease-in-out pointer-events-none opacity-75'
            "
            @click="saveProfessionalType()"
          >
            <i class="fa fa-save"></i>
            Save
          </button>
          <button
            type="button"
            class="
              inline-block
              px-6
              text-white
              bg-primary-700
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
               
              hover:bg-white hover:text-primary-600 hover:border-primary-600
              transition
              duration-150
              ease-in-out
            "
            data-bs-dismiss="modal"
            @click="clearData()"
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
import { ref, computed } from "vue";
import Loading from "vue3-loading-overlay";
import { useStore } from "vuex";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import { useToast } from "vue-toastification";
export default {
  components: { Loading },
  props: ["modalLookups", "editModalData"],
  setup(props) {
    const store = useStore();
    const toast = useToast();
    let isLoading = ref(false);
    let professionalTypeName = ref("");
    let showProfessionalTypeNameError = ref(false);
    let professionalTypeNameError = ref("");
    let professionalTypeNameFilled = ref(true);
    let saveData = ref({});
    let professionalTypeAmharicName = ref("");
    let selectedEducationLevel = ref("");
    let selectedDepartment = ref("");
    let educationLevels = computed(() =>
      props.modalLookups ? props.modalLookups.educationLevels : {}
    );
    let editData = computed(() =>
      props.editModalData
        ? props.editModalData
        : { Name: "", amharicProfessionalType: "" }
    );
    let departments = computed(() =>
      props.modalLookups ? props.modalLookups.departments : {}
    );
    const clearData = () => {
      selectedDepartment.value = "";
      selectedEducationLevel.value = "";
    };
    const saveProfessionalType = () => {
      let today = new Date().getMilliseconds();
      isLoading.value = true;

      //Validation of input

      showProfessionalTypeNameError.value = false;
      saveData.value = {
        id: editData.value ? editData.value.id : "",
        name: editData.value ? editData.value.Name : "",
        departmentId:
          editData.value && editData.value.selectedDepartment
            ? editData.value.selectedDepartment
            : "",
            code: editData.value
          ? editData.value.Code
          : editData.value.Name
          ? "PT_" + editData.value.Name.slice(0, 4).toUpperCase() + "_" + today
          : "",
        educationalLevelId:
          editData.value && editData.value.selectedEdLevel
            ? editData.value.selectedEdLevel
            : "",
        amharicProfessionalType: editData.value.amharicProfessionalType
          ? editData.value.amharicProfessionalType
          : "",
        status: editData.value.finalStatus,
      };
      store
        .dispatch("lookups/updateProfessionalType", saveData.value)
        .then((res) => {
          isLoading.value = false;
          if (res.data.status == "Success") {
            toast.success("Updated Successfully", {
              timeout: 5000,
              position: "bottom-center",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true,
            });
            setTimeout(() => {
              window.location.reload();
            }, 1000);
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
    return {
      isLoading,
      clearData,
      saveProfessionalType,
      professionalTypeNameFilled,
      showProfessionalTypeNameError,
      professionalTypeName,
      professionalTypeNameError,
      departments,
      editData,
      selectedEducationLevel,
      selectedDepartment,
      professionalTypeAmharicName,
      educationLevels,
    };
  },
};
</script>
 
