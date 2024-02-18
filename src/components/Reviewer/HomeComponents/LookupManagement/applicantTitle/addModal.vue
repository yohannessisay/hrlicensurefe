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
                    <h2 class="text-2xl font-bold">Add New Applicant Title</h2>
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
                                >Applicant Title Name</label
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
                                  @keyup="enableSaveButton()"
                                  required
                                  placeholder="Enter name"
                                  v-model="applicantTitle"
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
                                v-if="showApplicantTitleNameError"
                                class="text-red-300"
                                >{{ applicantTitleNameError }}</small
                              >
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
            applicantTitleNameFilled
                ? 'inline-block px-6 text-white bg-primary-700 font-medium text-xs leading-tight uppercase  rounded   hover:bg-white hover:text-primary-600 hover:border-primary-600 transition duration-150 ease-in-out'
                : 'inline-block px-6 text-white bg-primary-700 font-medium text-xs leading-tight uppercase  rounded   hover:bg-white hover:text-primary-600 hover:border-primary-600 transition duration-150 ease-in-out pointer-events-none opacity-75'
            "
            @click="saveApplicantTitle()"
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
import { ref } from "vue";
import Loading from "vue3-loading-overlay";
import { useStore } from "vuex";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import { useToast } from "vue-toastification";
export default {
  components: { Loading },
  setup() {
    const store = useStore();
    const toast = useToast();
    let isLoading = ref(false);
    let applicantTitleName = ref("");
    let showApplicantTitleNameError = ref(false);
    let applicantTitleNameError = ref("");
    let applicantTitleNameFilled = ref(false);
    let saveData = ref({});
    const enableSaveButton = () => {
      if (applicantTitleName.value.length > 3) {
        applicantTitleNameFilled.value = true;
      } else {
        applicantTitleNameFilled.value = false;
      }
    };
    const saveApplicantTitle = () => {
      let today = new Date().getMilliseconds();
      isLoading.value = true;

      //Validation of input

      showApplicantTitleNameError.value = false;

      saveData.value = {
        name: applicantTitleName.value ? applicantTitleName.value : "",
        code: applicantTitleName.value
          ? "DP_" + applicantTitleName.value.slice(0, 4).toUpperCase() + "_" + today
          : "",
      };

      store.dispatch("lookups/addApplicantTitle", saveData.value).then((res) => {
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
      saveApplicantTitle,
      enableSaveButton,
      applicantTitleNameFilled,
      showApplicantTitleNameError,
      applicantTitleName,
      applicantTitleNameError,
    };
  },
};
</script>
 
