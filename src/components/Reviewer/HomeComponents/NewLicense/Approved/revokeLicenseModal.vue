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
    id="revokeLicense"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="revokeLicense"
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
          <label class="mb-4 text-lg text-red-300 font-bold"
            >Revoke License</label
          >
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
                  :on-cancel="onCancel"
                  :is-full-page="fullPage"
                  :color="'#2F639D'"
                  :opacity="0.7"
                ></loading>
                <div class="flex flex-wrap justify-center">
                  <label for="" class="text-lg text-primary-600 font-bold"
                    >Remark</label
                  >
                </div>
                <div class="flex flex-wrap justify-center">
                  <textarea
                    class="w-full shadow-inner p-4 border-grey-100"
                    placeholder="Write a remark note of why the license is being revoked."
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
              shadow-lg
              hover:bg-red-300 hover:text-white hover:shadow-lg
              focus:bg-purple-700
              focus:shadow-lg
              focus:outline-none
              focus:ring-0
              active:bg-purple-800 active:shadow-lg
              transition
              duration-150
              ease-in-out
            "
            @click="revoke()"
          >
            <i class="fa fa-times-circle"></i>
            Revoke
          </button>
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
    let isLoading = ref(false);
    const store = useStore();
    const toast = useToast();
    const revoke = () => {
      let revokedData = {
        data: { ...props.modalData.data, remark: remark.value },
        action: "RevokeEvent",
      };
      isLoading.value = true;
      store
        .dispatch("reviewer/editNewLicense", revokedData)
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
      revoke,
    };
  },
};
</script>
