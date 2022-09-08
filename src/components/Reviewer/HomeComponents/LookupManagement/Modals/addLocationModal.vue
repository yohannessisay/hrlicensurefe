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
                          <div class="shrink-0">
                            <div
                              class="
                                p-4
                                bg-blue-600
                                rounded-md
                                shadow-md
                                w-14
                                h-14
                                flex
                                items-center
                                justify-center
                              "
                            >
                              <i class="fa fa-location"></i>
                            </div>
                          </div>
                          <div class="grow ml-6">
                            <div class="mb-3 w-full">
                              <select
                                class="
                                  form-select
                                  appearance-none
                                  block
                                  w-full
                                  px-6
                                  ml-4
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
                                <option selected disabled>Location Type</option>
                                <option value="region">Region</option>
                                <option value="zone">Zone</option>

                                <option value="woreda">Woreda</option>
                              </select>
                            </div>

                            <div class="form-group ml-4 mb-2">
                              <label
                                for="exampleInputEmail2"
                                class="
                                  form-label
                                  inline-block
                                  mb-2
                                  text-gray-700
                                "
                                >Location Name</label
                              >
                              <input
                                type="email"
                                class="
                                  form-control
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
                                placeholder="Enter name"
                                v-model="locationName"
                              />
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
                          <div class="shrink-0">
                            <div
                              class="
                                p-4
                                bg-blue-600
                                rounded-md
                                shadow-md
                                w-14
                                h-14
                                flex
                                items-center
                                justify-center
                              "
                            >
                              <i class="fa fa-map"></i>
                            </div>
                          </div>
                          <div class="grow ml-6">
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
                                      v-model="regionDropDownSearch"
                                      class="w-full px-3 py-3"
                                      style="border: none"
                                      autocomplete="off"
                                      placeholder="Start Typing region name"
                                    />
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
                          <div class="shrink-0">
                            <div
                              class="
                                p-4
                                bg-blue-600
                                rounded-md
                                shadow-md
                                w-14
                                h-18
                                flex
                                items-center
                                justify-center
                              "
                            >
                              <i class="fa fa-map"></i>
                            </div>
                          </div>
                          <div class="grow ml-6">
                            <label class="block text-left">
                              <div>
                                <div class="w-full relative">
                                  <div>
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
                                        @keyup="showOptionsZone = true"
                                        v-model="zoneDropDownSearch"
                                        class="w-full px-3 py-3"
                                        style="border: none"
                                        autocomplete="off"
                                        placeholder="Start Typing zone name"
                                      />
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
                                            hover:bg-primary-700
                                            hover:text-white
                                          "
                                        >
                                          {{ value.Name }}
                                        </li>
                                      </ul>
                                    </div>
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
              hover:bg-white hover:text-primary-600
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
              border 
              rounded
              shadow-lg
              hover:bg-white hover:text-primary-600
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
    let saveData = ref({});
    let locationName = ref("");
    let regionDropDown = ref();
    let zoneDropDown = ref();
    const locationType = (type) => {
      if (type == "region") {
        isRegion.value = true;
        isWoreda.value = false;
        isZone.value = false;
        regionDropDownSearch.value = "";
        zoneDropDownSearch.value = "";
      } else if (type == "woreda") {
        isWoreda.value = true;
        isRegion.value = false;
        isZone.value = true;
        regionDropDownSearch.value = "";
        zoneDropDownSearch.value = "";
      } else if (type == "zone") {
        isRegion.value = false;
        isZone.value = true;
        isWoreda.value = false;
        regionDropDownSearch.value = "";
        zoneDropDownSearch.value = "";
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
        let data = zoneDropDown.value
          ? zoneDropDown.value.filter((item) => {
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
        code: value.Code,
      };

      zoneDropDown.value = zoneDropDown.value.filter((zone) =>
        zone.data && zone.data.region ? zone.data.region.id == value.id : ""
      );
      regionDropDownSearch.value = value.Name;
      showOptions.value = false;
    };

    const setInputZone = (value) => {
      selectedZone.value = {
        id: value.id,
        name: value.Name,
        code: value.Code,
      };
      zoneDropDownSearch.value = value.Name;
      showOptionsZone.value = false;
    };

    const saveLocation = () => {
      let finalUrl = "";
      // if it is region
      if (isRegion.value) {
        finalUrl = "addRegion";
        saveData.value = {
          name: locationName.value ? locationName.value : "",
          code: locationName.value
            ? locationName.value.slice(0, 3).toUpperCase()
            : "",
        };
      }
      // if it is zone
      else if (isZone.value && !isWoreda.value) {
        finalUrl = "addZone";
        saveData.value = {
          name: locationName.value ? locationName.value : "",
          code: locationName.value
            ? locationName.value.slice(0, 3).toUpperCase()
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
            ? locationName.value.slice(0, 3).toUpperCase()
            : "",
          zoneId: selectedZone.value ? selectedZone.value.id : "",
        };
      }
      // check for existing data

      store.dispatch("lookups/" + finalUrl, saveData.value).then((res) => {
        if (res.data.message == "Created Successfully!") {
          toast.success("Created Successfully", {
            timeout: 5000,
            position: "bottom-center",
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            icon: true,
          });
          // setTimeout(() => {
          //   window.location.reload();
          // }, 3000);
        } else {
          toast.error(res.data.message, {
            timeout: 5000,
            position: "bottom-center",
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            icon: true,
          });
          // setTimeout(() => {
          //   window.location.reload();
          // }, 3000);
        }
      });
      // Finally save the data
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
      regionDropDownSearch,
      zoneDropDown,
      resultQuery,
      selectedRegion,
      resultQueryZone,
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
