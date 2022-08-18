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
                              />
                            </div>

                            <div class="form-group ml-4">
                              <label
                                for=""
                                class="
                                  form-label
                                  inline-block
                                  mb-2
                                  text-gray-700
                                "
                                >Location Code</label
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
                                placeholder="Enter code"
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
                        v-if="!isRegion"
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
                                        placeholder="Select region"
                                      />
                                    </div>
     <div>
                                    </div>
                                    
                                    <div
                                      v-show="
                                        resultQuery().length && showOptions
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
                                          v-for="value in resultQuery()"
                                          :key="value.id"
                                          @click="setInput(value)"
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
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              shadow-lg
              hover:bg-purple-700 hover:shadow-lg
              focus:bg-purple-700
              focus:shadow-lg
              focus:outline-none
              focus:ring-0
              active:bg-purple-800 active:shadow-lg
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
import { ref,computed} from "vue";
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
export default {
  name: "Modal",
  components: { Loading },
  props:['modalData'],
  setup(props) {
    let isLoading = ref(false);
    let isRegion=ref(true);
     let showOptions=ref(false);
    let regionDropDownSearch=ref("");
    let selectedRegion=ref();
    let regionDropDown=computed(()=>props.modalData?props.modalData.region:{})
     let zoneDropDown=computed(()=>props.modalData?props.modalData.zone:{})
    const locationType = (type) => {
      if(type=='region'){
        isRegion.value=true
      }else{
         isRegion.value=false
      }
      console.log(type);
    };

        const resultQuery = () => {
      if (regionDropDownSearch.value) {
        
        let data = regionDropDown.value.filter((item) => {
          return regionDropDownSearch.value
            .toLowerCase()
            .split(" ")
            .every((v) => item.Name.toLowerCase().includes(v));
        });

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
      showOptions.value = false;
    };


    return {
      isLoading,
      locationType,
      setInput,
      regionDropDown,
      regionDropDownSearch,
      zoneDropDown,
      resultQuery,
      showOptions,
      isRegion
    };
  },
};
</script>
<style scoped>
.shadow-lg {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 34%), 0 2px 4px -1px rgb(0 0 0 / 6%);
}
</style>
