<template>
  <div
    class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
    id="generatePdf"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="generatePdfLabel"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-dialog-centered modal-xl relative w-auto pointer-events-none"
    >
      <div
        class="modal-content border-none relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"
      >
        <div
          class="modal-header flex flex-shrink-0 items-center justify-between p-2 rounded-t-md"
        ></div>

        <div class="modal-body relative p-4">
          <div class="vld-parent">
            <loading
              :active="isLoading"
              :can-cancel="true"
              :is-full-page="false"
              :color="'#2F639D'"
              :opacity="0.7"
            ></loading>

            <div id="printedDiv" class="grow-0 shrink-0 basis-auto w-full px-8">
              <div class="grid grid-cols-2 mt-32">
                <div class="flex justify-start mt-4" contenteditable="false">
                  <img :src="qrSrc" alt="" style="height: 120px; width: 120px" />
                </div>
              </div>
              <div class="mt-2 px-8" contenteditable="true">
                <h5 class="text-xl mt-8 mainText">
                  To: {{ modalData ? modalData.whomGoodStandingFor : "" }}
                </h5>
                <div class="flex justify-center">
                  <h5 class="text-xl mt-4 mb-8 mainText">LETTER OF GOOD STANDING</h5>
                </div>
                <div>
                  <h5 class="text-xl mainText">
                    This letter of good standing and confirmation of registration is
                    written upon the request of
                    {{
                      modalData && modalData.applicantTitle
                        ? modalData.applicantTitle.name
                        : ""
                    }}.
                    {{
                      (modalData && modalData.profile && modalData.profile.name
                        ? modalData.profile.name
                        : "") +
                      " " +
                      (modalData && modalData.profile && modalData.profile.fatherName
                        ? modalData.profile.fatherName
                        : "") +
                      " " +
                      (modalData && modalData.profile && modalData.profile.grandFatherName
                        ? modalData.profile.grandFatherName
                        : "")
                    }}
                  </h5>

                  <h5 class="mt-3 text-xl mainText">
                    {{
                      modalData && modalData.applicantTitle
                        ? modalData.applicantTitle.name
                        : ""
                    }}.
                    {{
                      (modalData && modalData.profile && modalData.profile.name
                        ? modalData.profile.name
                        : "") +
                      " " +
                      (modalData && modalData.profile && modalData.profile.fatherName
                        ? modalData.profile.fatherName
                        : "") +
                      " " +
                      (modalData && modalData.profile && modalData.profile.grandFatherName
                        ? modalData.profile.grandFatherName
                        : "")
                    }}
                    has been registered as
                    {{
                      modalData &&
                      modalData.GSProfessionals &&
                      modalData.GSProfessionals.professionalTypes &&
                      modalData.GSProfessionals.professionalTypes.name == "other"
                        ? modalData.GSProfessionals.otherProfessionType
                        : modalData.GSProfessionals &&
                          modalData.GSProfessionals.professionalTypes
                        ? modalData.GSProfessionals.professionalTypes.name
                        : ""
                    }},on
                    {{
                      modalData
                        ? moment(modalData ? modalData.licenseIssuedDate : "").format(
                            "MMMM D, YYYY"
                          )
                        : ""
                    }}
                    by
                    {{
                      modalData && modalData.whoIssued
                        ? modalData.whoIssued.name + ", "
                        : ""
                    }}, which is the responsible organ for registration and licensing of
                    health professionals, and the registration number is
                    {{ modalData ? modalData.licenseRegistrationNumber : "" }}. From
                    __/__/__ to __/__/__ has been working here in Ethiopia.
                  </h5>

                  <h5 class="mt-4 text-xl mainText">
                    Since his registration, till
                    {{ new Date().toISOString().slice(0, 10) }}, he has no any reported
                    medico legal records and malpractices while he has practiced his
                    medical profession in Ethiopia.
                  </h5>

                  <h5 class="text-xl mt-4 mainText">
                    Hence we appreciate any assistance, which will be rendered to ………...
                  </h5>
                </div>
                <h5 class="text-xl mt-12 mb-48 mainText">With best regards</h5>
              </div>
            </div>
          </div>
        </div>

        <div
          class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end border-t border-grey-100 rounded-b-md"
        >
          <button
            type="button"
            class="inline-block px-6 text-white font-medium text-xs bg-primary-700 leading-tight uppercase rounded hover:border-primary-600 hover:bg-white hover:text-primary-700 transition duration-150 ease-in-out"
            @click="printPdf"
          >
            <i class="fa fa-check"></i>
            Generate
          </button>
          <button
            type="button"
            class="inline-block px-6 text-white font-medium text-xs bg-primary-700 leading-tight uppercase rounded hover:border-primary-600 hover:bg-white hover:text-primary-700 transition duration-150 ease-in-out"
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
import STATIC_CERTIFICATE_URL from "../../../../../sharedComponents/constants/message.js";
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
    const expertLevelId = JSON.parse(localStorage.getItem("allAdminData")).expertLevelId;

    const adminRegionId = JSON.parse(localStorage.getItem("allAdminData")).regionId;

    let show = ref(false);
    let qrSrc = ref("");
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
      var element = document.getElementById("printedDiv");
      var opt = {
        margin: 1,
        filename: "myfile.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { orientation: "p", unit: "mm", format: "a4" },
      };

      let staticUrl = STATIC_CERTIFICATE_URL;
      let userId = modalData.value.profile.id;
      let applicationId = modalData.value.id;
      let applicationType = "GoodStanding";

      const qrParam = { url: null };

      qrParam.url =
        staticUrl + "/" + applicationType + "/" + userId + "/" + applicationId;
      store
        .dispatch("reviewer/getQrCode", qrParam)
        .then((res) => {
          qrSrc.value = res.data.data;
        })
        .finally(() => {
          html2pdf()
            .set(opt)
            .from(element)
            .save(
              license.value && license.value.profile && license.value.profile.name
                ? license.value.profile.name + " " + new Date().toISOString().slice(0, 10)
                : ""
            );

          license.value.isReprint = true;
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
                  location.reload();
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
        })
        .catch((err) => {
          console.log(err);
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
      modalData.value && modalData.value.profile ? modalData.value.profile.name : "";
    userProfile.value.fatherName =
      modalData.value && modalData.value.profile
        ? modalData.value.profile.fatherName
        : "";
    userProfile.value.grandFatherName =
      modalData.value && modalData.value.profile
        ? modalData.value.profilegrandFatherName
        : "";
    userProfile.value.gender =
      modalData.value && modalData.value.profile ? modalData.value.profile.gender : "";

    const apPosition = ref(modalData.value ? modalData.value.applicantPosition : {});
    if (apPosition.value) {
      applicantPosition.value = apPosition.value.name ? apPosition.value.name : "-";
    }
    getReviewId.value = modalData.value ? modalData.value.reviewerId : "";
    show.value = true;

    return {
      license,
      qrSrc,
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
@import url("https://fonts.cdnfonts.com/css/times-new-roman");
.mainText {
  font-family: "Times New Roman", sans-serif !important;
}
.text-danger > label,
.text-danger > h5 {
  color: red;
}
.normalFont {
  font-family: serif !important;
  letter-spacing: 2px;
}
</style>
