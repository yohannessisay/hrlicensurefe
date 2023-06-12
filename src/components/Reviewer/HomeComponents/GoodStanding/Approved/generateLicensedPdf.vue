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
    id="generatePdf"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="generatePdfLabel"
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
        ></div>

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

                <div class="flex flex-wrap">
                  <div class="grow-0 shrink-0 basis-auto w-full">
                    <div
                      class="
                          bg-lightBlueB-200
                          flex
                          items-center
                          justify-center
                        "
                      id="printedDiv"
                    >
                      <div class="w-screen">
                        <div
                          class="
                              flex flex-col
                              w-full
                              bg-white
                              blue-box-shadow-light
                              rounded
                              justify-center
                              items-center
                            "
                        >
                          <div class="bg-white h-full " contenteditable="true">
                            <div v-if="show" class="ml-8 mr-8 mb-12">
                              <div v-if="!modalData.withExperiance">
                                <h2 class="ml-4 mt-8" contenteditable="true">
                                  To:
                                  {{
                                    modalData
                                      ? modalData.whomGoodStandingFor
                                      : ""
                                  }}.
                                </h2>
                                <div class="flex justify-center">
                                  <h3 class="mb-8 mt-8" contenteditable="true">
                                    LETTER OF GOOD STANDING
                                  </h3>
                                </div>
                                <h5 class="" contenteditable="true">
                                  This letter of good standing and confirmation
                                  of registration is written upon request of
                                  <span
                                    contenteditable="false"
                                    class="text-yellow-300"
                                    >{{
                                      modalData && modalData.applicantTitle
                                        ? modalData.applicantTitle.name
                                        : ""
                                    }}</span
                                  >
                                  <span
                                    contenteditable="false"
                                    class="ml-1 text-yellow-300"
                                  >
                                    {{
                                      (modalData &&
                                      modalData.profile &&
                                      modalData.profile.name
                                        ? modalData.profile.name
                                        : "") +
                                        " " +
                                        (modalData &&
                                        modalData.profile &&
                                        modalData.profile.fatherName
                                          ? modalData.profile.fatherName
                                          : "") +
                                        " " +
                                        (modalData &&
                                        modalData.profile &&
                                        modalData.profile.grandFatherName
                                          ? modalData.profile.grandFatherName
                                          : "")
                                    }}
                                  </span>
                                  .
                                </h5>
                                <span contenteditable="true">
                                  {{
                                    modalData &&
                                    modalData.profile &&
                                    modalData.profile.gender == "male"
                                      ? "He"
                                      : "She"
                                  }}
                                </span>
                                had been registered and licensed as
                                <span
                                  contenteditable="false"
                                  class="text-yellow-300"
                                  >{{
                                    modalData &&
                                    modalData.GSProfessionals &&
                                    modalData.GSProfessionals.professionalTypes
                                      ? modalData.GSProfessionals
                                          .professionalTypes.name
                                      : ""
                                  }}</span
                                >
                                on
                                <span
                                  class="text-yellow-300"
                                  contenteditable="true"
                                  >{{
                                    modalData
                                      ? moment(
                                          modalData
                                            ? modalData.licenseIssuedDate
                                            : ""
                                        ).format("MMMM D, YYYY")
                                      : ""
                                  }}</span
                                >
                                by
                                <span
                                  contenteditable="false"
                                  class="text-yellow-300"
                                  >{{
                                    modalData && modalData.whoIssued
                                      ? modalData.whoIssued.name + ", "
                                      : ""
                                  }}</span
                                >.which is the responsible organ for the
                                registration and licensing of health
                                professionals and with registration number
                                <span contenteditable="false">
                                  {{
                                    modalData
                                      ? modalData.licenseRegistrationNumber
                                      : ""
                                  }} </span
                                >.
                                <p class="ml-2 mt-8">
                                  Hence we appreciate any assistance, which will
                                  be rendered to
                                  <span contenteditable="false">
                                    {{
                                      modalData &&
                                      modalData.profile &&
                                      modalData.profile.gender == "male"
                                        ? "Him"
                                        : "Her"
                                    }} </span
                                  >. With best regards
                                </p>
                              </div>
                              <!--end of letter without experiance -->
                              <!-- letter with experiance -->
                              <div
                                v-if="modalData.withExperiance"
                                class="mt-large bg-white"
                                id="pdf"
                              >
                                <h2 class="ml-4 mt-8" contenteditable="true">
                                  To:
                                  {{
                                    modalData
                                      ? modalData.whomGoodStandingFor
                                      : ""
                                  }}.
                                </h2>

                                <div class="flex justify-center">
                                  <h3 class="mb-8 mt-8" contenteditable="true">
                                    LETTER OF GOOD STANDING
                                  </h3>
                                </div>

                                <h5 contenteditable="true">
                                  This letter of good standing and confirmation
                                  of registration is written upon request of
                                  <span
                                    contenteditable="false"
                                    class="text-yellow-300"
                                    >{{
                                      modalData &&
                                      modalData.applicantTitle &&
                                      modalData.applicantTitle.name
                                        ? modalData.applicantTitle.name
                                        : ""
                                    }}</span
                                  >
                                  <span
                                    contenteditable="false"
                                    class="ml-1 text-yellow-300"
                                  >
                                    {{
                                      (modalData &&
                                      modalData.profile &&
                                      modalData.profile.name
                                        ? modalData.profile.name
                                        : "") +
                                        " " +
                                        (modalData &&
                                        modalData.profile &&
                                        modalData.profile.fatherName
                                          ? modalData.profile.fatherName
                                          : "") +
                                        " " +
                                        (modalData &&
                                        modalData.profile &&
                                        modalData.profile.grandFatherName
                                          ? modalData.profile.grandFatherName
                                          : "")
                                    }}
                                  </span>
                                  .
                                </h5>

                                <h4 class="">
                                  <span contenteditable="false">
                                    {{
                                      modalData &&
                                      modalData.profile &&
                                      modalData.profile.gender == "male"
                                        ? "He"
                                        : "She"
                                    }}
                                  </span>
                                  <span contenteditable="true">
                                    had been registered and licensed as
                                  </span>

                                  <span
                                    contenteditable="false"
                                    class="text-yellow-300"
                                    >{{
                                      modalData &&
                                      modalData.GSProfessionals &&
                                      modalData.GSProfessionals
                                        .professionalTypes
                                        ? modalData.GSProfessionals
                                            .professionalTypes.name
                                        : ""
                                    }}</span
                                  >
                                  <span contenteditable="true"> on </span>
                                  <span
                                    class="text-yellow-300"
                                    contenteditable="false"
                                    >{{
                                      modalData
                                        ? moment(
                                            modalData
                                              ? modalData.licenseIssuedDate
                                              : ""
                                          ).format("MMMM D, YYYY")
                                        : ""
                                    }}</span
                                  >

                                  <span contenteditable="true"> by </span>

                                  <span
                                    contenteditable="false"
                                    class="text-yellow-300"
                                    >{{
                                      modalData && modalData.whoIssued
                                        ? modalData.whoIssued.name + ", "
                                        : ""
                                    }}</span
                                  >

                                  <span contenteditable="true"
                                    >which is the responsible organ for the
                                    registration and licensing of health
                                    professionals and with registration number
                                  </span>
                                  <span contenteditable="false">
                                    {{
                                      modalData
                                        ? modalData.licenseRegistrationNumber
                                        : ""
                                    }}
                                  </span>

                                  .
                                </h4>
                                <h4 class=" mt-8">
                                  <span contenteditable="false">
                                    {{
                                      modalData && modalData.profile
                                        ? modalData.profile.gender == "male"
                                          ? "He"
                                          : "She"
                                        : ""
                                    }}
                                  </span>
                                  <span>
                                    has been working From
                                    <span contenteditable="true">
                                      __/__/__</span
                                    >
                                    to
                                    <span contenteditable="true">
                                      __/__/__</span
                                    >
                                    in Ethiopia.
                                  </span>

                                  <p contenteditable="true">
                                    Since __/__/__ registration, till __/__/__
                                    <span contenteditable="false">
                                      {{
                                        modalData && modalData.profile
                                          ? modalData.profile.gender == "male"
                                            ? "He"
                                            : "She"
                                          : ""
                                      }}
                                    </span>
                                    has no reported medico-legal records and
                                    malpractices while
                                    <span contenteditable="false">
                                      {{
                                        modalData && modalData.profile
                                          ? modalData.profile.gender == "male"
                                            ? "He"
                                            : "She"
                                          : ""
                                      }}
                                    </span>
                                    has practiced
                                    <span class="text-yellow-300">
                                      {{
                                        modalData &&
                                        modalData.GSProfessionals &&
                                        modalData.GSProfessionals
                                          .professionalTypes
                                          ? modalData.GSProfessionals
                                              .professionalTypes.name
                                          : ""
                                      }}</span
                                    >
                                    medical profession in Ethiopia.
                                  </p>
                                </h4>

                                <h5 class="ml-4 mt-8" contenteditable="true">
                                  Hence we appreciate any assistance, which will
                                  be rendered to
                                  <span>
                                    {{
                                      modalData && modalData.profile
                                        ? modalData.profile.gender == "male"
                                          ? "him"
                                          : "her"
                                        : ""
                                    }} </span
                                  >.
                                </h5>
                                <h5 class="ml-4 mb-8" contenteditable="true">
                                  With best regards
                                </h5>

                                <div
                                  class="flex justify-start"
                                  v-if="expertLevelId != 3"
                                >
                                  <h3 class="font-bold" contenteditable="true">
                                    Address
                                  </h3>
                                </div>
                              </div>
                              <!--end of letter with experiance -->
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
              bg-primary-700
              leading-tight
              uppercase
              rounded
              hover:border-primary-600
              shadow-lg
              hover:bg-white hover:text-primary-700
              transition
              duration-150
              ease-in-out
            "
            @click="printPdf"
          >
            <i class="fa fa-check"></i>
            Generate
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
              shadow-lg
              hover:bg-white hover:text-primary-700
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
import moment from "moment";
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import { jsPDF } from "jspdf";
import { useStore } from "vuex";
import { useToast } from "vue-toastification";
import html2pdf from "html2pdf.js";
export default {
  props: ["modalDataGenerate"],
  components: { Loading },
  computed: {
    moment: () => moment,
  },

  setup(props) {
    const store = useStore();
    const toast = useToast();
    let isLoading = ref(false);
    let myRegion = ref(true);
    const expertLevelId = JSON.parse(localStorage.getItem("allAdminData"))
      .expertLevelId;

    const adminRegionId = JSON.parse(localStorage.getItem("allAdminData"))
      .regionId;

    let show = ref(false);

    let showLoading = ref(false);
    let isUserApproved = ref(false);

    let isGoodStanding = ref(false);

    let goodStandingUser = ref({});
    let userProfile = ref({
      name: "",
      fatherName: "",
      grandFatherName: "",
      gender: "",
      phoneNumber: "",
      email: "",
      maritalStatus: "",
      nationality: "",
      dateOfBirth: "",
    });
    let applicantPosition = ref("-");

    let license = computed(() => props.modalDataGenerate);

    let applicantId = ref("");
    let applicantTypeId = ref("");
    let education = ref({
      departmentId: "",
      institutionId: "",
    });
    let licenseId = ref("");
    let activeClass = ref("active");
    let errorClass = ref("text-danger");
    let dataFetched = ref(false);
    let showFlash = ref(false);
    let showErrorFlash = ref(false);
    let profile = ref({});
    let applicationType = ref("");

    let getReviewId = ref(0);
    let modalData = computed(() => props.modalDataGenerate);

    const printPdf = () => {
      isLoading.value = true;

      var element = document.getElementById("printedDiv");
      var opt = {
        margin: 1,
        filename: "myfile.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      };

      html2pdf()
        .set(opt)
        .from(element)
        .save(
          license.value && license.value.profile && license.value.profile.name
            ? license.value.profile.name +
                " " +
                new Date().toISOString().slice(0, 10)
            : ""
        );

      license.value.isLicenseGenerated &&
      license.value.isLicenseGenerated == true
        ? (license.value.isReprint = true)
        : "";
      license.value.isLicenseGenerated = true;

      let req = {
        data: { ...license.value, isLicenseGenerated: true },
      };
      store
        .dispatch("reviewer/editGoodStanding", req)
        .then((res) => {
          if (res.statusText == "Created") {
            toast.success("Done", {
              timeout: 5000,
              position: "bottom-center",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true,
            });
            isLoading.value = false;
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          } else {
            toast.error(res, {
              timeout: 5000,
              position: "bottom-center",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true,
            });
            isLoading.value = false;
          }
        })
        .catch((err) => {
          console.log(err);
          isLoading.value = false;
        });
    };

    if (
      modalData.value &&
      modalData.value.applicationStatus &&
      modalData.value.applicationStatus.code == "APP"
    ) {
      isUserApproved.value = true;
    }
    licenseId.value = modalData.value ? modalData.value.id : "";
    applicationType.value =
      modalData.value && modalData.value.applicationType
        ? modalData.value.applicationType.name
        : "";
    showLoading.value = true;
    isGoodStanding.value = true;

    license.value = modalData.value ? modalData.value : {};
    goodStandingUser.value = modalData.value;
    if (
      goodStandingUser.value &&
      goodStandingUser.value.woreda != null &&
      goodStandingUser.value.woreda.zone != null &&
      goodStandingUser.value.woreda.zone.region != null
    ) {
      if (adminRegionId != goodStandingUser.value.woreda.zone.region.id) {
        myRegion.value = false;
      }
    } else {
      if (expertLevelId != goodStandingUser?.value?.expertLevelId) {
        myRegion.value = false;
      }
    }

    userProfile.value.name =
      modalData.value && modalData.value.profile
        ? modalData.value.profile.name
        : "";
    userProfile.value.fatherName =
      modalData.value && modalData.value.profile
        ? modalData.value.profile.fatherName
        : "";
    userProfile.value.grandFatherName =
      modalData.value && modalData.value.profile
        ? modalData.value.profilegrandFatherName
        : "";
    userProfile.value.gender =
      modalData.value && modalData.value.profile
        ? modalData.value.profile.gender
        : "";

    const apPosition = ref(
      modalData.value ? modalData.value.applicantPosition : {}
    );
    if (apPosition.value) {
      applicantPosition.value = apPosition.value.name
        ? apPosition.value.name
        : "-";
    }
    getReviewId.value = modalData.value ? modalData.value.reviewerId : "";
    show.value = true;

    return {
      license,
      userProfile,
      activeClass,
      errorClass,
      dataFetched,
      getReviewId,
      showFlash,
      showErrorFlash,
      profile,
      applicantId,
      applicantTypeId,
      education,
      show,
      showLoading,
      applicationType,

      licenseId,
      isUserApproved,
      isGoodStanding,
      isLoading,
      printPdf,
      myRegion,
      modalData,
      expertLevelId,
    };
  },
};
</script>
<style>
.text-danger > label,
.text-danger > h5 {
  color: red;
}
</style>
