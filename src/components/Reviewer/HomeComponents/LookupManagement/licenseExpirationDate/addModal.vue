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
                <div class="flex justify-center border-b-2 mb-4">
                  <div class="text-center max-w-full">
                    <h2 class="text-2xl font-bold">
                      Add New License Expiration Date
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
                          lg:w-6/12
                          px-3
                          lg:px-6
                        "
                      >
                        <div class="flex items-start">
                          <div class="grow ml-6">
                            <div class="group w-full md:full lg:w-full ml-4">
                              <label
                                for="licenseExpDate"
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
                                >License Expiration Date Duration</label
                              >
                              <div class="relative flex items-center">
                                <input
                                  id="licenseExpDate"
                                  type="number"
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
                                  placeholder="Enter Value"
                                  v-model="licenseExpDateYear"
                                />

                                <i
                                  class="
                                    fa fa-hashtag
                                    ml-4
                                    absolute
                                    left-auto
                                    text-primary-600
                                  "
                                ></i>
                              </div>

                              <small
                                v-if="showlicenseExpDateYearError"
                                class="text-red-300"
                                >{{ licenseExpDateYearError }}</small
                              >
                            </div>
                          </div>
                        </div>

                        <div class="flex items-start mt-4">
                          <div class="grow ml-6">
                            <!-- Region -->
                            <div class="group w-full md:full lg:w-full ml-4">
                              <label
                                for="region"
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
                                    v-model="selectedRegion"
                                    @change="setCode()"
                                  >
                                    <option
                                      v-for="region in regions"
                                      :key="region.id"
                                      :value="region"
                                    >
                                      {{ region.name }}
                                    </option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <!-- Region -->
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
                                >License Expiration Date Code</label
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
                                  disabled
                                  required
                                  v-model="licenseExpDateCode"
                                />

                                <i
                                  class="
                                    fa fa-hashtag
                                    ml-4
                                    absolute
                                    left-auto
                                    text-primary-600
                                  "
                                ></i>
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
            modal-footer
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
              licenseExpDateYearFilled
                ? 'inline-block px-6 text-white bg-primary-700 font-medium text-xs leading-tight uppercase  rounded shadow-lg hover:bg-white hover:text-primary-600 hover:border-primary-600 transition duration-150 ease-in-out'
                : 'inline-block px-6 text-white bg-primary-700 font-medium text-xs leading-tight uppercase  rounded shadow-lg hover:bg-white hover:text-primary-600 hover:border-primary-600 transition duration-150 ease-in-out pointer-events-none opacity-75'
            "
            @click="saveLicenseExpDate()"
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
import { ref,computed } from "vue";
import Loading from "vue3-loading-overlay";
import { useStore } from "vuex";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import { useToast } from "vue-toastification";
export default {
  components: { Loading },
  props:['modalRegions'],
  setup(props) {
    const store = useStore();
    const toast = useToast();
    let isLoading = ref(false);
    let selectedRegion = ref("");
    let regions = computed(()=>props.modalRegions?props.modalRegions:[]);
    let licenseExpDateYear = ref("");
    let licenseExpDateCode = ref("");
    let showlicenseExpDateYearError = ref(false);
    let licenseExpDateYearError = ref("");
    let licenseExpDateYearFilled = ref(false);
    let saveData = ref({});
    let today = new Date().getMilliseconds();
    const setCode = () => {
      licenseExpDateCode.value =
        "LE_" +
        selectedRegion.value.name.slice(0, 4).toUpperCase() +
        "_" +
        today;
      if (licenseExpDateYear.value) {
        licenseExpDateYearFilled.value = true;
      } else {
        licenseExpDateYearFilled.value = false;
      }
    };
    const saveLicenseExpDate = () => {
      let today = new Date().getMilliseconds();
      isLoading.value = true;

      //Validation of input

      showlicenseExpDateYearError.value = false;

      saveData.value = {
        years: licenseExpDateYear.value ? licenseExpDateYear.value : "",
        code: licenseExpDateYear.value
          ? "LE_" +
            selectedRegion.value.name.slice(0, 4).toUpperCase() +
            "_" +
            today
          : "",
        status: true,
        regionId: selectedRegion.value ? selectedRegion.value.id : "",
      };

      store
        .dispatch("lookups/addLicenseExpirationDate", saveData.value)
        .then((res) => {
          isLoading.value = false;
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
    };

   
    return {
      isLoading,
      regions,
      selectedRegion,
      saveLicenseExpDate,
      setCode,
      licenseExpDateCode,
      licenseExpDateYearFilled,
      showlicenseExpDateYearError,
      licenseExpDateYear,
      licenseExpDateYearError,
    };
  },
};
</script>
<style scoped>
.shadow-lg {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 34%), 0 2px 4px -1px rgb(0 0 0 / 6%);
}
</style>
