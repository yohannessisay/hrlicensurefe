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
    aria-labelledby="editModalLabel"
    aria-hidden="true"
  >
    <div
      class="
        modal-dialog modal-dialog-centered modal-lg
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
                <div class="flex justify-center border-b-2 mb-8">
                  <div class="text-center max-w-full">
                    <h2 class="text-2xl font-bold"></h2>
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
                          lg:w-6/12
                          px-3
                          lg:px-6
                        "
                      >
                        <div class="flex items-start">
                          <div class="grow ml-6">
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
                                >Location Name</label
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
                                  v-model="editData.selectedLocation.name"
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
                                v-if="showDepartmentNameError"
                                class="text-red-300"
                                >{{ departmentNameError }}</small
                              >
                            </div>

                            <div class="form-group ml-4 mb-2 mt-8">
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
                                >Location Status</label
                              >

                              <div class="toggle slim colour">
                                <input
                                  v-model="editData.selectedLocation.status"
                                  id="isVerified"
                                  class="toggle-checkbox hidden cursor-pointer"
                                  type="checkbox"
                                  :checked="
                                    editData && editData.selectedLocation
                                      ? editData.selectedLocation.status == true
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
                                    editData &&
                                    editData.selectedLocation &&
                                    editData.selectedLocation.status == true
                                      ? 'text-green-200 font-bold'
                                      : 'text-yellow-300 font-bold'
                                  "
                                >
                                  {{
                                    editData &&
                                    editData.selectedLocation &&
                                    editData.selectedLocation.status == true
                                      ? "Active"
                                      : "Inactive"
                                  }}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        class="
                          mb-12
                          grow-0
                          shrink-0
                          basis-auto
                          w-full
                          lg:w-6/12
                          px-3
                          lg:px-6
                        "
                        v-if="
                          editData.isZone == true || editData.isWoreda == true
                        "
                      >
                        <div class="flex items-start">
                          <div class="grow ml-6">
                            <label class="block text-left">
                              <div>
                                <div class="w-full relative">
                                  <div
                                    class="group w-full md:full lg:w-full ml-4"
                                  >
                                    <label
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
                                      >Region</label
                                    >

                                    <select
                                      class="
                                        peer
                                        relative
                                        h-10
                                        w-full
                                        rounded-sm
                                        p-2
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
                                      aria-label="Default select example"
                                      v-model="editData.selectedRegion"
                                      required
                                    >
                                      <option
                                        v-for="region in editData.regions"
                                        :key="region.name"
                                        :value="region"
                                      >
                                        {{ region.name }}
                                      </option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </label>
                          </div>
                        </div>

                        <div
                          class="flex items-start mt-8"
                          v-if="editData.isWoreda == true"
                        >
                          <div class="grow ml-6">
                            <label class="block text-left">
                              <div>
                                <div class="w-full relative">
                                  <div
                                    class="group w-full md:full lg:w-full ml-4"
                                  >
                                    <label
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
                                      >Zone</label
                                    >
                                    <select
                                      class="
                                        peer
                                        relative
                                        h-10
                                        w-full
                                        rounded-sm
                                        p-2
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
                                      aria-label="Default select example"
                                      v-model="editData.selectedZone"
                                      required
                                    >
                                      <option
                                        v-for="zone in editData.zones.filter(
                                          (zn) =>
                                            zn.regionId ==
                                            editData.selectedRegion.id
                                        )"
                                        :key="zone.name"
                                        :value="zone"
                                      >
                                        {{ zone.name }}
                                      </option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </label>
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
            p-2
            justify-center
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
            @click="saveLocation()"
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
  props: ["editModalData"],
  setup(props) {
    const store = useStore();
    const toast = useToast();
    let isLoading = ref(false);
    let showDepartmentNameError = ref(false);
    let departmentNameError = ref("");
    let departmentNameFilled = ref(false);
    let saveData = ref({});
    let regionDropDownSearch = ref("");
    let regionDropDown = ref();
    let zoneDropDown = ref();
    let zoneDropDownSearch = ref("");
    let newZoneDropDown = ref();
    let selectedRegion = ref();
    let selectedZone = ref();
    let isRegionSelected = ref(false);
    let showOptions = ref(false);
    let showOptionsZone = ref(false);
    let regionSelected = ref("");
    let zoneSelected = ref("");
    let editData = computed(() =>
      props.editModalData ? props.editModalData : { Name: "" }
    );
    let isActive =
      editData.value && editData.value.Status
        ? editData.value.Status
        : ref(false);

    const changeIsActive = () => {
      isActive.value = !isActive.value;
    };
    const enableSaveButton = () => {
      if (editData.value.Name.length > 3) {
        departmentNameFilled.value = true;
      } else {
        departmentNameFilled.value = false;
      }
    };

    const resultQuery = () => {
      if (regionDropDownSearch.value) {
        let data = regionDropDown.value
          ? regionDropDown.value.filter((item) => {
              return regionDropDownSearch.value
                .toLowerCase()
                .split(" ")
                .every((v) => item.Name.toLowerCase().includes(v));
            })
          : "";

        return data;
      } else {
        return [];
      }
    };

    const resultQueryZone = () => {
      if (zoneDropDownSearch.value) {
        let data = newZoneDropDown.value
          ? newZoneDropDown.value.filter((item) => {
              return zoneDropDownSearch.value
                .toLowerCase()
                .split(" ")
                .every((v) => item.Name.toLowerCase().includes(v));
            })
          : "";
        return data;
      } else {
        return [];
      }
    };

    const setInput = (value) => {
      selectedRegion.value = {
        id: value.id,
        name: value.Name,
        code: value.data.code,
      };
      isRegionSelected.value = true;

      newZoneDropDown.value = zoneDropDown.value.filter(
        (zone) => zone.data.regionId == value.id
      );
      regionDropDownSearch.value = value.Name;
      showOptions.value = false;
    };

    const setInputZone = (value) => {
      selectedZone.value = {
        id: value.id,
        name: value.Name,
        code: value.data.code,
      };

      zoneDropDownSearch.value = value.Name;
      showOptionsZone.value = false;
    };

    const saveLocation = () => {
      let today = new Date().getMilliseconds();
      isLoading.value = true;

      //Validation of input

      showDepartmentNameError.value = false;
      let finalUrl = "";
      saveData.value = {
        id: editData.value.selectedLocation.id,
        name: editData.value.selectedLocation.name
          ? editData.value.selectedLocation.name
          : "",
        code:  editData.value
          ? editData.value.Code
          :editData.value.selectedLocation
          ? "LO_" +
            editData.value.selectedLocation.name.slice(0, 4).toUpperCase() +
            "_" +
            today
          : "",
        status: editData.value.selectedLocation.status,
      };
      if (editData.value.isZone == true) {
        saveData.value.regionId = editData.value.selectedRegion.id;
      } else if (editData.value.isWoreda == true) {
        saveData.value.zoneId = editData.value.selectedZone.id;
      }
      finalUrl =
        editData.value && editData.value.isRegion == true
          ? "updateRegion"
          : editData.value && editData.value.isWoreda == true
          ? "updateWoreda"
          : editData.value && editData.value.isZone == true
          ? "updateZone"
          : "";
    
      store.dispatch("lookups/" + finalUrl, saveData.value).then((res) => {
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
      editData,
      saveLocation,
      setInputZone,
      setInput,
      resultQueryZone,
      resultQuery,
      enableSaveButton,
      departmentNameFilled,
      showOptions,
      zoneSelected,
      regionSelected,
      showOptionsZone,
      regionDropDownSearch,
      zoneDropDownSearch,
      isRegionSelected,
      showDepartmentNameError,
      departmentNameError,
      isActive,
      changeIsActive,
    };
  },
};
</script>
 
