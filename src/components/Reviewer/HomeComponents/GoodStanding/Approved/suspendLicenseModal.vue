<template>
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
    id="suspendLicense"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="suspendLicense"
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
          justify-center
        "
      >
        <div
          class="
            modal-header
            flex flex-shrink-0
            items-center
            justify-center
            p-2
            rounded-t-md
            border-b border-grey-100
          "
        >
          <label class="mb-4 text-lg text-yellow-300 font-bold">Suspend License</label>
        </div>

        <div class="modal-body relative p-4">
          <div class="container px-6 mx-auto">
            <section class="text-gray-800">
              <div class="flex justify-center">
                <div class="text-center lg:max-w-3xl md:max-w-xl"></div>
              </div>
              <div class="vld-parent">
                <loading
                  :active="isLoading"
                  :can-cancel="true" 
                  :is-full-page="false"
                  :color="'#2F639D'"
                  :opacity="0.7"
                ></loading>
                <div class="flex flex-wrap justify-center">
                  <label class="text-lg text-primary-600 font-bold">Suspension Period</label>
                  <div class="grid grid-cols-2 gap-4">
                    <div class="form-group mb-6 mt-4">
                      <label for="" class="ml-2">Start Date</label>
                      <input
                        v-model="startDate"
                        type="date"
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
                      />
                    </div>
                    <div class="form-group mb-6 mt-4">
                      <label for="" class="ml-2">End Date</label>
                      <input
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
                        v-model="endDate"
                        type="date"
                      />
                    </div>
                  </div>
                  <label class="text-lg mt-4 mb-4 text-primary-600 font-bold">Suspension Remark</label>
                </div>
                <div class="flex flex-wrap justify-center">
                  <textarea
                    class="w-full shadow-inner p-4 border-grey-100"
                    placeholder="Write a remark note of why the license is being suspended."
                    rows="6"
                    v-model="remark"
                  ></textarea>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div
          class="
            modal-footer
            flex flex-shrink-0 flex-wrap
            items-center
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
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
               
              bg-yellow-300
              hover:bg-white hover:text-yellow-300s hover: 
              focus:bg-purple-700
              focus: 
              focus:outline-none
              focus:ring-0
              active:bg-purple-800 active: 
              transition
              duration-150
              ease-in-out
            "
            @click="suspend()"
          >
            <i class="fa fa-times-circle"></i>
            Suspend
          </button>
          <button
            type="button"
            class="
         inline-block
              px-6
              text-white
              font-medium
              text-xs
              bg-primary-700
              leading-tight
              uppercase
              rounded
              hover:border-primary-600
               
              hover:bg-white 
              hover:text-primary-700
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
import { useStore } from "vuex";

import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import { useToast } from "vue-toastification";

export default {
  props: ["modalData"],
  computed: {},
  components: { Loading },
  setup(props) {
    let showFlash = ref(false);
    let showErrorFlash = ref(false);
    let remark = ref("");
    let startDate = ref("");
    let endDate = ref("");
    let isLoading = ref(false);
    const store = useStore();
    const toast = useToast();
    const suspend = () => {
      let suspendedData = {
        data: {
          ...props.modalData.data,
          remark: remark.value,
          suspStartDate: startDate.value,
          suspEndDate: endDate.value,
        },
        action: "SuspendEvent",
      };
      isLoading.value = true;
      store
        .dispatch("reviewer/editGoodStanding", suspendedData)
        .then((res) => {
          isLoading.value = false;
          if (res.statusText == "Created") {
            toast.success("Done", {
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
            setTimeout(() => {
              window.location.reload();
            }, 3000);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    return {
      showFlash,
      showErrorFlash,
      remark,
      startDate,
      endDate,
      isLoading,
      suspend,
    };
  },
};
</script>
