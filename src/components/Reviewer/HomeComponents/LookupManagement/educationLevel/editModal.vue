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
                <div class="flex justify-center border-b-2 mb-8">
                  <div class="text-center max-w-full">
                    <h2 class="text-2xl font-bold">Edit Education Level </h2>
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
                                >Education Level  Name</label
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
                                v-if="showEdLevelNameError"
                                class="text-red-300"
                                >{{ edLevelNameError }}</small
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
                                >Education Level Status</label
                              >
                              <div class="toggle slim colour">
                                <input
                                  v-model="editData.finalStatus"
                                  id="isVerified"
                                  class="toggle-checkbox hidden cursor-pointer"
                                  type="checkbox"
                                  :checked="
                                    editData &&editData.finalStatus == true 
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
                                  editData&&editData.finalStatus==true
                                      ? 'text-green-200 font-bold'
                                      : 'text-yellow-300 font-bold'
                                  "
                                  > 
                                  {{ editData.finalStatus?'Active':'Inactive'  }}
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
            @click="saveEducationLevel()"
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

    let showEdLevelNameError = ref(false);
    let edLevelNameError = ref("");
    let edLevelNameFilled = ref(false);
    let saveData = ref({});
    let editData = computed(() =>
      props.editModalData ? props.editModalData : { Name: "" }
    );
    let isActive = editData.value&&editData.value.Status ? editData.value.Status : ref(false);

    const changeverified = () => {
      isActive.value = !isActive.value;
    };
    const enableSaveButton = () => {
      if (editData.value.Name.length > 3) {
        edLevelNameFilled.value = true;
      } else {
        edLevelNameFilled.value = false;
      }
    };
    const saveEducationLevel = () => {
      let today = new Date().getMilliseconds();
      isLoading.value = true;

      //Validation of input

      showEdLevelNameError.value = false;

      saveData.value = {
        id: editData.value.id,
        name: editData.value.Name ? editData.value.Name : "",
        code: editData.value.Name
          ? "DP_" + editData.value.Name.slice(0, 4).toUpperCase() + "_" + today
          : "",
        status: editData.value.finalStatus,
      };

      store.dispatch("lookups/updateEducationLevel", saveData.value).then((res) => {
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
      saveEducationLevel,
      enableSaveButton,
      edLevelNameFilled,
      showEdLevelNameError,
      edLevelNameError,
      isActive,
      changeverified,
    };
  },
};
</script>
 
