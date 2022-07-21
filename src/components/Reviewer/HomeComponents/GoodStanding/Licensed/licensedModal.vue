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
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div
      class="
        modal-dialog modal-dialog-centered modal-xl
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
        >
          <button
            type="button"
            class="btn-close border-none rounded-lg hover:text-primary-400"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="vld-parent">
          <loading
            :active="isLoading"
            :is-full-page="false"
            :color="'#2F639D'"
            :opacity="1"
          ></loading>
          <div class="modal-body relative p-4">
            <div class="container px-6 mx-auto">
              <section class="text-gray-800">
                <div class="flex justify-center">
                  <div class="text-center lg:max-w-3xl md:max-w-xl">
                    <h2 class="text-2xl font-bold mb-8 px-6">
                      Showing
                      <span class="text-2xl font-bold px-6">
                        {{ modalData.name ? modalData.name : "" }}
                      </span>
                      's License Data
                    </h2>
                  </div>
                </div>

                <div class="flex flex-wrap">
                  <div class="grow-0 shrink-0 basis-auto w-full lg:w-11/12">
                    <div class="flex flex-wrap">
                      <div
                        class="
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
                                shadow-lg
                                w-48
                                h-48
                                flex
                                mb-12
                                items-center
                                justify-center
                              "
                            >
                              <img
                                src="../../../../../assets/showLicense/profile.png"
                                alt=""
                                style="height: 152px; width: 150px"
                              />
                            </div>
                          </div>
                          <div class="grow ml-6">
                            <h2 class="font-extrabold text-2xl mb-1">
                              Personal Info
                            </h2>
                            <p class="text-gray-500">
                              <span
                                class="
                                  font-semibold
                                  text-lg text-primary-700
                                  mb-1
                                "
                                >Full Name:</span
                              >
                              {{ modalData.name ? modalData.name : "" }}
                            </p>
                            <p class="text-gray-500">
                              <span class="font-semibold text-primary-700 mb-1"
                                >Gender:</span
                              >
                              {{ modalData.gender ? modalData.gender : "" }}
                            </p>
                            <p class="text-gray-500">
                              <span class="font-semibold text-primary-700 mb-1"
                                >Nationality:</span
                              >
                              {{
                                modalData.nationality
                                  ? modalData.nationality
                                  : ""
                              }}
                            </p>
                            <p class="text-gray-500">
                              <span class="font-semibold text-primary-700 mb-1"
                                >Date Of Birth:</span
                              >
                              {{
                                modalData.dateOfBirth
                                  ? modalData.dateOfBirth.slice(0, 10)
                                  : ""
                              }}
                            </p>
                            <p class="text-gray-500">
                              <span class="font-semibold text-primary-700 mb-1"
                                >Martial Status:</span
                              >
                              {{
                                modalData.martialStatus
                                  ? modalData.martialStatus
                                  : ""
                              }}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div
                        class="
                          grow-0
                          shrink-0
                          basis-auto
                          w-full
                          lg:w-6/12
                          px-3
                          lg:px-6
                        "
                      >
                        <div>
                          <label class="font-bold text-lg text-primary-600 mb-1"
                            >Actions</label
                          >
                          <br />
                          <button
                            class="
                              inline-block
                              px-6
                              py-2.5
                              custom-warning
                              text-white
                              font-medium
                              text-xs
                              leading-tight
                              uppercase
                              rounded
                              shadow-lg
                              focus:shadow-lg focus:outline-none focus:ring-0
                              active:bg-blue-800 active:shadow-lg
                              transition
                              duration-150
                              ease-in-out
                            "
                            type="button"
                          >
                            <i class="fa fa-ban"></i>
                            Suspend
                          </button>
                          <button
                            class="
                              inline-block
                              px-6
                              py-2.5
                              bg-
                              text-white
                              font-medium
                              text-xs
                              leading-tight
                              uppercase
                              rounded
                              shadow-lg
                              hover:bg-blue-700 hover:shadow-lg
                              focus:bg-blue-700
                              focus:shadow-lg
                              focus:outline-none
                              focus:ring-0
                              active:bg-blue-800 active:shadow-lg
                              transition
                              duration-150
                              ease-in-out
                            "
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#generatePdf"
                          >
                            <i class="fa fa-file-text"></i>
                            Generate PDF
                          </button>

                          <button
                            class="
                              inline-block
                              px-6
                              py-2.5
                              bg-primary-400
                              text-white
                              font-medium
                              text-xs
                              leading-tight
                              uppercase
                              rounded
                              shadow-lg
                              hover:bg-blue-700 hover:shadow-lg
                              focus:bg-blue-700
                              focus:shadow-lg
                              focus:outline-none
                              focus:ring-0
                              active:bg-blue-800 active:shadow-lg
                              transition
                              duration-150
                              ease-in-out
                            "
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseExample"
                            aria-expanded="false"
                            aria-controls="collapseExample"
                          >
                            <i class="fa fa-eye"></i>
                            Show Attached Documents
                          </button>
                        </div>
                      </div>

                      <div
                        class="
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
                                shadow-lg
                                w-48
                                h-48
                                flex
                                items-center
                                justify-center
                              "
                            >
                              <i class="fa fa-phone fa-4x"></i>
                            </div>
                          </div>
                          <div class="grow ml-6">
                            <h2 class="font-bold mb-1">Contact Info</h2>
                            <p class="text-gray-500">
                              <span class="font-medium text-primary-700 mb-1"
                                >Mobile Number:</span
                              >
                              {{
                                modalData.mobileNumber
                                  ? modalData.mobileNumber
                                  : ""
                              }}
                            </p>
                            <p class="text-gray-500">
                              <span class="font-medium text-primary-700 mb-1"
                                >Email:</span
                              >
                              {{ modalData.email ? modalData.email : "" }}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div
                        class="
                          grow-0
                          shrink-0
                          basis-auto
                          w-full
                          lg:w-6/12
                          px-3
                          lg:px-6
                        "
                      >
                        <div class="flex align-center"></div>
                      </div>
                    </div>

                    <div class="collapse mt-12" id="collapseExample">
                      <div class="block p-6 rounded-lg shadow-lg bg-white">
                        <div class="flex justify-content-evenly align-center">
                          <h1>Attached Documents</h1>
                        </div>
                        <div class="grid grid-cols-4 gap-4">
                          <div
                            class="mt-4 mb-8 bg-white"
                            style="border-radius: 15px; padding: 10px"
                            v-for="document in modalData.documents"
                            :key="document.id"
                          >
                            <div class="flex justify-center">
                              <div class="mt-large bg-white">
                                <a
                                  :href="googleApi + document.filePath"
                                  :data-title="document.documentType.name"
                                  data-lightbox="example-2"
                                >
                                  <img
                                    :src="googleApi + document.filePath"
                                    class="w-full h-48 object-cover"
                                  />
                                </a>

                                <h4 style="font-weight: bold">
                                  Document Type:-
                                </h4>
                                <h6>{{ document.documentType.name }}</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
            border-t border-grey-200
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
  <generate-pdf
    v-if="showGenerateModal"
    :modalDataGenerate="modalDataGenerate"
  ></generate-pdf>
</template>
<script>
import { googleApi } from "@/composables/baseURL";
import generatePdf from "./generateLicensedPdf.vue";
import { ref, watch } from "vue";
import { useStore } from "vuex";
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
export default {
  name: "Modal",
  components: { generatePdf, Loading },
  props: ["modalDataId"],
  setup(props) {
    const store = useStore();
    const showModal = () => {
      this.show = true;
    };
    const show = ref(true);
    const showRes = ref(true);
    const showGenerateModal = ref(true);
    const showOptions = ref(true);
    const isLoading = ref(true);
    const modalData = ref({});
    const modalDataGenerate = ref({});
    let result = {};
    const check = () => {
      store
        .dispatch("reviewer/getGoodStandingApplication", props.modalDataId.id)
        .then((res) => {
          if (res.data.status == "Success") {
            result = res.data.data;
            modalData.value.name =
              (result.profile ? result.profile.name : "") +
              " " +
              (result.profile ? result.profile.fatherName : "") +
              "  " +
              (result.profile ? result.profile.grandFatherName : "");
            modalData.value.gender = result.profile
              ? result.profile.gender
              : "-----";
            modalData.value.nationality = result.profile.nationality
              ? result.profile.nationality.name
              : "-----";
            modalData.value.dateOfBirth = result.profile
              ? result.profile.dateOfBirth
              : "-----";
            modalData.value.martialStatus = result.martialStatus
              ? result.profile.martialStatus.name
              : "-----";
            modalData.value.mobileNumber = result.applicant
              ? result.applicant.phoneNumber
              : "-----";
            modalData.value.email = result.applicant
              ? result.applicant.emailAddress
              : "-----";
            modalData.value.instName = result.education?.name
              ? result.education.institution?.name
              : "-----";
            modalData.value.instType = result.education?.institutionType
              ? result.education.institution?.institutionType
              : "-----";
            modalData.value.department = result.education
              ? result.education?.department.name
              : "-----";
            modalData.value.profile = result.profile ? result.profile : "";
            modalData.value.professionalTypes = result.licenseProfessions
              ? result.licenseProfessions
              : "";
            modalData.value.certifiedDate = result.certifiedDate
              ? result.certifiedDate
              : "";
            modalData.value.licenseExpirationDate = result.licenseExpirationDate
              ? result.licenseExpirationDate
              : "";
            modalData.value.documents = result.documents
              ? result.documents
              : "";
            modalData.value.data = result;
            modalDataGenerate.value = result;
            isLoading.value = false;
          }
        });
    };

    watch(props.modalDataId, () => {
      isLoading.value = true;
      check();
    });
    return {
      showModal,
      show,
      check,
      isLoading,
      showRes,
      showGenerateModal,
      showOptions,
      googleApi,
      modalData,
      modalDataGenerate,
    };
  },
};
</script>
<style scoped>
.shadow-lg {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 34%), 0 2px 4px -1px rgb(0 0 0 / 6%);
}
</style>
