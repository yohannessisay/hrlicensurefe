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
    id="addModal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="addModalLabel"
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
                <div class="flex justify-center">
                  <div class="text-center max-w-full">
                    <h2 class="text-2xl font-bold">Add New Location</h2>
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
                                >Location Type</label
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
                                  @change="locationType($event.target.value)"
                                  aria-label="Default select example"
                                >
                                  <option selected disabled>
                                    Location Type
                                  </option>
                                  <option value="region">Region</option>
                                  <option value="zone">Zone</option>

                                  <option value="woreda">Woreda</option>
                                </select>

                            
                              </div>

                              <small
                                v-if="showLocationNameError"
                                class="text-red-300"
                                >{{ locationNameError }}</small
                              >
                            </div>

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
                                    focus:drop-shadow-lg
                                  "
                                  required
                                  placeholder="Enter name"
                                  v-model="locationName"
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
                                v-if="showLocationNameError"
                                class="text-red-300"
                                >{{ locationNameError }}</small
                              >
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
                        v-if="isZone"
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
                                      for="region"
                                      class="
                                        inline-block
                                        w-full
                                        text-md
                                        mb-1
                                        text-primary-600
                                        font-bold
                                        text-gray-500
                                        transition-all
                                        duration-200
                                        ease-in-out
                                      "
                                      >Region</label
                                    >
                                    <div class="relative flex items-center">
                                      <input
                                        id="region"
                                        @keyup="showOptions = true"
                                        v-model="regionDropDownSearch"
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
                                          focus:drop-shadow-lg
                                        "
                                        required
                                        placeholder="Start Typing region name"
                                      />

                                      <i
                                        class="
                                          fa fa-map
                                          ml-4
                                          absolute
                                          left-auto
                                          text-primary-600
                                        "
                                      ></i>
                                    </div>
                                  </div>

                                  <div
                                    v-show="resultQuery().length && showOptions"
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
                                          hover:bg-primary-700 hover:text-white
                                        "
                                      >
                                        {{ value.Name }}
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </label>
                          </div>
                        </div>

                        <div class="flex items-start mt-8" v-if="isWoreda">
                          <div class="grow ml-6">
                            <label class="block text-left">
                              <div>
                                <div class="w-full relative">
                                  <div
                                    class="group w-full md:full lg:w-full ml-4"
                                  >
                                    <label
                                      for="zone"
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
                                    <div class="relative flex items-center">
                                      <input
                                        id="zone"
                                        :disabled="!isRegionSelected"
                                        @keyup="showOptionsZone = true"
                                        v-model="zoneDropDownSearch"
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
                                          focus:drop-shadow-lg
                                        "
                                        required
                                        :placeholder="
                                          isRegionSelected
                                            ? 'Start Typing zone name'
                                            : 'Please select region first'
                                        "
                                      />

                                      <i
                                        class="
                                          fa fa-map
                                          ml-4
                                          absolute
                                          left-auto
                                          text-primary-600
                                        "
                                      ></i>
                                    </div>
                                  </div>

                                  <div
                                    v-show="
                                      resultQueryZone().length &&
                                      showOptionsZone
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
                                        v-for="value in resultQueryZone()"
                                        :key="value.id"
                                        @click="setInputZone(value)"
                                        class="
                                          dropdown-toggle
                                          px-4
                                          py-2
                                          cursor-pointer
                                          hover:bg-primary-700 hover:text-white
                                        "
                                      >
                                        {{ value.Name }}
                                      </li>
                                    </ul>
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
            :class="
              locationTypeSelected
                ? 'inline-block px-6 text-white bg-primary-700 font-medium text-xs leading-tight uppercase border rounded shadow-lg hover:bg-white hover:text-primary-600 hover:border-primary-600 transition duration-150 ease-in-out'
                : 'inline-block px-6 text-white bg-primary-700 font-medium text-xs leading-tight uppercase border rounded shadow-lg hover:bg-white hover:text-primary-600 hover:border-primary-600 transition duration-150 ease-in-out pointer-events-none opacity-75'
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
              border
              rounded
              shadow-lg
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
import { ref, watch } from "vue";
import Loading from "vue3-loading-overlay";
import { useStore } from "vuex";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import { useToast } from "vue-toastification";
export default {
  name: "Modal",
  components: { Loading },
  props: ["modalData"],
  setup(props) {
    const store = useStore();
    const toast = useToast();
    let isLoading = ref(false);
    let isRegion = ref(true);
    let isWoreda = ref(false);
    let isZone = ref(false);
    let showOptions = ref(false);
    let showOptionsZone = ref(false);
    let regionDropDownSearch = ref("");
    let zoneDropDownSearch = ref("");
    let selectedRegion = ref();
    let selectedZone = ref();
    let showLocationNameError = ref(false);
    let locationNameError = ref("");
    let saveData = ref({});
    let locationName = ref("");
    let locationTypeSelected = ref(false);
    let isRegionSelected = ref(false);
    let regionDropDown = ref();
    let zoneDropDown = ref();
    let newZoneDropDown = ref();
    const locationType = (type) => {
      if (type == "region") {
        isRegion.value = true;
        isWoreda.value = false;
        isZone.value = false;
        regionDropDownSearch.value = "";
        zoneDropDownSearch.value = "";
        locationTypeSelected.value = true;
      } else if (type == "woreda") {
        isWoreda.value = true;
        isRegion.value = false;
        isZone.value = true;
        regionDropDownSearch.value = "";
        zoneDropDownSearch.value = "";
        locationTypeSelected.value = true;
      } else if (type == "zone") {
        isRegion.value = false;
        isZone.value = true;
        isWoreda.value = false;
        regionDropDownSearch.value = "";
        zoneDropDownSearch.value = "";
        locationTypeSelected.value = true;
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
      let finalUrl = "";

      //Validation of input
      if (locationName.value.length == 0) {
        showLocationNameError.value = true;
        locationNameError = "Please type location name";
      } else if (
        locationName.value.length < 3 &&
        locationName.value.length > 0
      ) {
        showLocationNameError.value = true;
        locationNameError = "Location name must be more than 3 letters";
      } else {
        showLocationNameError.value = false;
        // if it is region
        if (isRegion.value) {
          finalUrl = "addRegion";
          saveData.value = {
            name: locationName.value ? locationName.value : "",
            code: locationName.value
              ? "RG_" +
                locationName.value.slice(0, 3).toUpperCase() +
                "_" +
                today
              : "",
          };
        }
        // if it is zone
        else if (isZone.value && !isWoreda.value) {
          finalUrl = "addZone";
          saveData.value = {
            name: locationName.value ? locationName.value : "",
            code: locationName.value
              ? "ZN_" +
                selectedRegion.value.code +
                "_" +
                locationName.value.slice(0, 3).toUpperCase() +
                "_" +
                today
              : "",
            regionId: selectedRegion.value ? selectedRegion.value.id : "",
          };
        }
        // if it is woreda
        else if (isZone.value && isWoreda.value) {
          finalUrl = "addWoreda";
          saveData.value = {
            name: locationName.value ? locationName.value : "",
            code: locationName.value
              ? "WO_" +
                selectedZone.value.code +
                "_" +
                locationName.value.slice(0, 3).toUpperCase() +
                "_" +
                today
              : "",
            zoneId: selectedZone.value ? selectedZone.value.id : "",
          };
        }
        // finally save

        store.dispatch("lookups/" + finalUrl, saveData.value).then((res) => {
          if (res.data.status == "Success") {
            toast.success("Created Successfully", {
              timeout: 5000,
              position: "bottom-center",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true,
            });
            setTimeout(() => {
              window.location.reload();
            }, 3000);
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
      }
    };
    watch(props.modalData, () => {
      regionDropDown.value = props.modalData.region;
      zoneDropDown.value = props.modalData.zone;
    });
    return {
      isLoading,
      saveLocation,
      locationType,
      setInput,
      setInputZone,
      selectedZone,
      showOptionsZone,
      isWoreda,
      locationName,
      isZone,
      regionDropDown,
      locationTypeSelected,
      showLocationNameError,
      locationNameError,
      regionDropDownSearch,
      newZoneDropDown,
      resultQuery,
      selectedRegion,
      resultQueryZone,
      isRegionSelected,
      zoneDropDownSearch,
      showOptions,
      isRegion,
    };
  },
};
</script>
<style scoped>
.shadow-lg {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 34%), 0 2px 4px -1px rgb(0 0 0 / 6%);
}
</style>
