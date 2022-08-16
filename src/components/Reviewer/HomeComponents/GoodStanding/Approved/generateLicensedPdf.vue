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
                  :on-cancel="onCancel"
                  :is-full-page="fullPage"
                  :color="'#2F639D'"
                  :opacity="0.7"
                ></loading>
                <div class="flex flex-wrap">
                  <div class="grow-0 shrink-0 basis-auto w-full">
                    <div>
                      <div
                        class="
                          bg-lightBlueB-200
                          flex
                          items-center
                          justify-center
                        "
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
                            <div class="bg-lightBlueB-200">
                              <div class="bg-lightBlueB-200 h-full">
                                <div
                                  v-if="show"
                                  style="
                                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                                  "
                                  class="ml-8 mr-8 mb-12"
                                >
                                  <div class="mt-large bg-white">
                            

                                    <h2 class="ml-4 mt-8">To: {{  modalData
                                          ? modalData.whomGoodStandingFor
                                          : "" }}.</h2>
                                    <h3 class="ml-64 mb-8">
                                      LETTER OF GOOD STANDING
                                    </h3>
                                    <h4 class="ml-8">
                                      This letter of good standing and
                                      confirmation of registration is written
                                      upon request of
                                      <span class="text-yellow-300">{{
                                        modalData
                                          ? modalData.applicantTitle
                                          : ""
                                      }}</span>
                                      <span class="ml-1 text-yellow-300">
                                        {{
                                          (modalData && modalData.profile
                                            ? modalData.profile.name
                                            : "") +
                                          " " +
                                          (modalData && modalData.profile
                                            ? modalData.profile.fatherName
                                            : "") +
                                          " " +
                                          (modalData && modalData.profile
                                            ? modalData.profile.grandFatherName
                                            : "")
                                        }}
                                      </span>
                                      .
                                    </h4>

                                    <h4 class="ml-4">
                                      <span>
                                        {{
                                          modalData && modalData.profile
                                            ? modalData.profile.gender == "male"
                                              ? "He"
                                              : "She"
                                            : ""
                                        }}
                                      </span>
                                      was registered as
                                      <span class="text-yellow-300">{{
                                        modalData && modalData.applicantPosition
                                          ? modalData.applicantPosition.name
                                          : ""
                                      }}</span>
                                      on
                                      <span class="text-yellow-300">{{
                                        modalData
                                          ? moment(
                                              modalData
                                                ? modalData.licenseIssuedDate
                                                : ""
                                            ).format("MMMM D, YYYY")
                                          : ""
                                      }}</span>
                                      by
                                      <span class="text-yellow-300">{{
                                        modalData && modalData.whoIssued
                                          ? modalData.whoIssued
                                          : ""
                                      }}</span
                                      >, which is the responsible organ for
                                      registration and licensing of health
                                      professionals and
                                      <span>
                                        {{
                                          modalData && modalData.profile
                                            ? modalData.profile.gender == "male"
                                              ? "His"
                                              : "Her"
                                            : ""
                                        }}
                                      </span>
                                      registration number is
                                      <span class="text-yellow-300">
                                        {{
                                          modalData
                                            ? modalData.licenseRegistrationNumber
                                            : ""
                                        }}
                                      </span>
                                      .
                                    </h4>
                                    <h4 class="ml-8 mt-8">
                                      <span>
                                        {{
                                          modalData && modalData.profile
                                            ? modalData.profile.gender == "male"
                                              ? "He"
                                              : "She"
                                            : ""
                                        }}
                                      </span>
                                      has no any reported medico legal records
                                      and malpractices while he has practiced
                                      his medical profession in Ethiopia
                                    </h4>
                                    <h4 class="ml-4">
                                      untill
                                      <span class="text-yellow-300">{{
                                        moment(new Date()).format(
                                          "MMMM DD, YYYY"
                                        )
                                      }}</span>
                                      .
                                    </h4>

                                    <h4 class="ml-8 mt-8">
                                      Hence we appreciate any assistance, which
                                      will be rendered to
                                      <span>
                                        {{
                                          modalData && modalData.profile
                                            ? modalData.profile.gender == "male"
                                              ? "him"
                                              : "her"
                                            : ""
                                        }} </span
                                      >.
                                    </h4>
                                    <h4 class="ml-8 mb-8">With best regards</h4>

                                    <div
                                      class="flex justify-start"
                                      v-if="expertLevelId != 3"
                                    >
                                     <h3 class="font-bold">Address</h3>
                                    </div>
                               

                                    <div
                                      class="flex justify-start flex-wrap"
                                    ></div>
                                  </div>
                                </div>
                              </div>
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
            @click="GenerateLetter()"
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
import { ref, computed } from "vue";
import moment from "moment";
import jsPDF from "jspdf";
import { useStore } from "vuex";
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import { useToast } from "vue-toastification";
export default {
  props: ["modalDataGenerate"],
  components: { Loading },
  computed: {
    moment: () => moment,
  },
  setup(props) {
    const store = useStore();
    const toast = useToast();
    let myRegion = ref(true);
    const expertLevelId = JSON.parse(
      localStorage.getItem("allAdminData")
    ).expertLevelId;

    const adminRegionId = JSON.parse(
      localStorage.getItem("allAdminData")
    ).regionId;

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
      martialStatus: "",
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

    const GenerateLetter = () => {
      if (
        license.value.applicationStatus.code !== "AP" &&
        license.value.applicationStatus.code !== "APP"
      ) {
        console.log(license.value)
        // if user is not approved don't generate a good standing letter
        return;
      }

      const doc = new jsPDF({ orientation: "landscape" });
      const pageWidth =
        doc.internal.pageSize.width || doc.internal.pageSize.getWidth;
      doc.setFontSize(20);
      doc.setFont("times", "bold");
      doc.text(40, 58, "To: " + license.value.whomGoodStandingFor + ".");
      doc.setFontSize(14);

      const letter = "LETTER OF GOOD STANDING";
      doc.text(letter, pageWidth / 2, 75, { align: "center" });
      const letterPosition = pageWidth / 2 - doc.getTextWidth(letter) / 2;
      doc.line(
        letterPosition,
        77,
        letterPosition + doc.getTextWidth(letter),
        77
      );
      doc.setFontSize(15);

      doc.setFont("times", "normal");
      doc.text(
        40,
        90,
        "This letter of good standing and confirmation of registration is written upon request of "
      );
      doc.text(
        40,
        100,
        (modalData.value && modalData.value.profile
          ? modalData.value.profile.name
          : "") +
          " " +
          (modalData.value && modalData.value.profile
            ? modalData.value.profile.fatherName
            : "") +
          " " +
          (modalData.value && modalData.value.profile
            ? modalData.value.profile.grandFatherName
            : "") +
          ` .${
            modalData.value && modalData.value.profile
              ? modalData.value.profile.gender == "male"
                ? "He "
                : "She "
              : ""
          }` +
          "was registered as " +
          (modalData.value && modalData.value.applicantPosition
            ? modalData.value.applicantPosition.name
            : "") +
          ` on ` +
          moment(
            modalData.value ? modalData.value.licenseIssuedDate : ""
          ).format("MMMM D, YYYY") +
          " by " +
          (modalData.value ? modalData.value.whoIssued : "") +
          ","
      );
      doc.text(
        40,
        110,
        `which is the responsible organ for registration and licensing of health professionals and ${
          modalData.value && modalData.value.profile
            ? modalData.value.profile.gender == "male"
              ? "his"
              : "her"
            : ""
        } registration`
      );
      doc.text(
        40,
        120,
        `number is ${
          modalData.value ? modalData.value.licenseRegistrationNumber : ""
        }.`
      );
      doc.text(
        40,
        130,
        `${
          modalData.value && modalData.value.profile
            ? modalData.value.profile.gender == "male"
              ? "He"
              : "S  he"
            : ""
        } has no any reported medico legal records and malpractices while ${
          modalData.value && modalData.value.profile
            ? modalData.value.profile.gender == "male"
              ? "he"
              : "she"
            : ""
        } has practiced ${
          modalData.value && modalData.value.profile
            ? modalData.value.profile.gender == "male"
              ? "his"
              : "her"
            : ""
        } medical profession`
      );
      doc.text(
        40,
        140,
        `in Ethiopia till ${moment(new Date()).format("MMMM DD, YYYY")}.`
      );
      doc.text(
        40,
        165,
        `Hence we appreciate any assistance, which will be rendered to ${
          modalData.value && modalData.value.profile
            ? modalData.value.profile.gender == "male"
              ? "him"
              : "her"
            : ""
        }.`
      );
      doc.text(40, 185, "With best regards");

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
                setTimeout(() => {
              window.location.reload();
            }, 3000);
          } else {
            toast.error(res, {
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
              setTimeout(() => {
              window.location.reload();
            }, 3000);
        });

      window.open(doc.output("bloburl"));
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
      GenerateLetter,
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
