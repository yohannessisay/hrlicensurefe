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
                                    <span
                                      v-if="
                                        isGoodStanding &&
                                          license &&
                                          license.applicationStatus &&
                                          (license.applicationStatus.code ===
                                            'AP' ||
                                            license.applicationStatus.code ===
                                              'APP') &&
                                          myRegion
                                      "
                                    >
                                      <button @click="GenerateLetter">
                                        Generate Letter
                                      </button>
                                    </span>
                                    <div class="flex justify-center">
                                      <Title message="Summary" />
                                    </div>
                                    <div class="flex justify-start">
                                      <Title message="Personal Info" />
                                    </div>
                                    <div class="flex flex-row">
                                      <div
                                        :class="[
                                          profileInfo &&
                                          profileInfo.name == null
                                            ? errorClass
                                            : activeClass
                                        ]"
                                      >
                                        <label class="ml-8"> Full Name</label>
                                        <h5 class="ml-8">
                                          {{
                                            (profileInfo
                                              ? profileInfo.name
                                              : "") +
                                              " " +
                                              (profileInfo
                                                ? profileInfo.fatherName
                                                : "") +
                                              " " +
                                              (profileInfo
                                                ? profileInfo.grandFatherName
                                                : "")
                                          }}
                                        </h5>
                                      </div>
                                      <div
                                        :class="[
                                          profileInfo &&
                                          profileInfo.gender === null
                                            ? errorClass
                                            : activeClass
                                        ]"
                                      >
                                        <label class="ml-8"> Gender</label>
                                        <h5 class="ml-8">
                                          {{
                                            profileInfo && profileInfo.gender
                                              ? profileInfo["gender"]
                                              : "-"
                                          }}
                                        </h5>
                                      </div>
                                      <div
                                        :class="[
                                          profileInfo &&
                                          profileInfo.nationality === null
                                            ? errorClass
                                            : activeClass
                                        ]"
                                      >
                                        <label class="ml-8"> Nationality</label>
                                        <h5 class="ml-8">
                                          {{
                                            profileInfo
                                              ? profileInfo.nationality.name
                                              : "-"
                                          }}
                                        </h5>
                                      </div>
                                      <div
                                        :class="[
                                          profileInfo &&
                                          profileInfo.dateOfBirth === null
                                            ? errorClass
                                            : activeClass
                                        ]"
                                      >
                                        <label class="ml-8">
                                          Date of Birth</label
                                        >
                                        <h5 class="ml-8">
                                          {{
                                            profileInfo
                                              ? moment(
                                                  profileInfo.dateOfBirth
                                                ).format("MMM D, YYYY")
                                              : "-"
                                          }}
                                        </h5>
                                      </div>
                                      <div
                                        :class="[
                                          profileInfo &&
                                          profileInfo.maritalStatus.name ===
                                            null
                                            ? errorClass
                                            : activeClass
                                        ]"
                                      >
                                        <label class="ml-8">
                                          Marital Status</label
                                        >
                                        <h5 class="ml-8">
                                          {{
                                            profileInfo
                                              ? profileInfo.maritalStatus.name
                                              : "-"
                                          }}
                                        </h5>
                                      </div>
                                    </div>

                                    <div
                                      class="flex justify-start"
                                      v-if="expertLevelId != 3"
                                    >
                                      <Title message="Address" />
                                    </div>
                                    <div
                                      class="flex flex-row"
                                      v-if="expertLevelId != 3"
                                    >
                                      <div
                                        :class="[
                                          license.woreda &&
                                          license.woreda === null
                                            ? errorClass
                                            : license.woreda &&
                                              license.woreda.zone === null
                                            ? errorClass
                                            : license.woreda &&
                                              license.woreda.zone.region ===
                                                null
                                            ? errorClass
                                            : activeClass
                                        ]"
                                      >
                                        <label class="ml-8"> Region</label>
                                        <h5 class="ml-8">
                                          {{
                                            license.woreda &&
                                            license.woreda === null
                                              ? "-"
                                              : license.woreda &&
                                                license.woreda.zone === null
                                              ? "-"
                                              : license.woreda.zone &&
                                                license.woreda.zone.region
                                              ? license.woreda.zone.region.name
                                              : "-"
                                          }}
                                        </h5>
                                      </div>
                                      <div
                                        :class="[
                                          license.woreda &&
                                          license.woreda === null
                                            ? errorClass
                                            : license.woreda.zone &&
                                              license.woreda.zone === null
                                            ? errorClass
                                            : activeClass
                                        ]"
                                      >
                                        <label class="ml-8"> Zone</label>
                                        <h5 class="ml-8">
                                          {{
                                            license.woreda &&
                                            license.woreda === null
                                              ? "-"
                                              : license.woreda
                                              ? license.woreda.zone.name
                                              : "-"
                                          }}
                                        </h5>
                                      </div>
                                      <div
                                        :class="[
                                          license.woreda &&
                                          license.woreda === null
                                            ? errorClass
                                            : activeClass
                                        ]"
                                      >
                                        <label class="ml-8"> Wereda</label>
                                        <h5 class="ml-8">
                                          {{
                                            license.woreda
                                              ? license.woreda.name
                                              : "-"
                                          }}
                                        </h5>
                                      </div>
                                    </div>
                                    <div class="flex justify-start">
                                      <Title message="Contact" />
                                    </div>
                                    <div class="flex flex-row">
                                      <div
                                        :class="[
                                          profileInfo &&
                                          profileInfo.phoneNumber === null
                                            ? errorClass
                                            : activeClass
                                        ]"
                                      >
                                        <label class="ml-8">
                                          Mobile Number</label
                                        >
                                        <h5 class="ml-8">
                                          {{
                                            profileInfo
                                              ? profileInfo.phoneNumber
                                              : "-"
                                          }}
                                        </h5>
                                      </div>

                                      <div
                                        :class="[
                                          profileInfo &&
                                          profileInfo.emailAddress === null
                                            ? errorClass
                                            : activeClass
                                        ]"
                                      >
                                        <label class="ml-8"> Email</label>
                                        <h5 class="ml-8">
                                          {{
                                            profileInfo
                                              ? profileInfo.emailAddress
                                              : "-"
                                          }}
                                        </h5>
                                      </div>
                                    </div>
                                    <div
                                      class="flex justify-start flex-wrap"
                                    ></div>
                                  </div>
                                </div>
                              </div>
                              <span
                                v-if="showLoading"
                                class="
                                  flex
                                  justify-center justify-items-center
                                  mt-24
                                "
                              >
                                <Spinner />
                              </span>
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
            @click="generate()"
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

import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";

export default {
  props: ["modalDataGenerate"],
  components: { Loading },
  computed: {
    moment: () => moment
  },
  setup(props) {
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
    let gender = ref("");
    let userProfile = ref({
      name: "",
      fatherName: "",
      grandFatherName: ""
    });
    let applicantPosition = ref("-");

    let license = ref({
      applicant: {},
      applicantType: {},
      education: {
        institution: {
          institutionType: {}
        },
        department: {}
      }
    });
    let profileInfo = ref({
      maritalStatus: {},
      woreda: {
        zone: {}
      },
      user: {},
      userType: {}
    });
    let applicantId = ref("");
    let applicantTypeId = ref("");
    let education = ref({
      departmentId: "",
      institutionId: ""
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
    let modalData=computed(()=>props.modalDataGenerate)
    const GenerateLetter = () => {
      if (
        license.value.applicationStatus.code !== "AP" &&
        license.value.applicationStatus.code !== "APP"
      ) {
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
        "This letter of good standing and " +
          "confirmation of registration is written" +
          " upon request of " +
          license.value.applicantTitle +
          " " +
          userProfile.value.name +
          " " +
          userProfile.value.fatherName +
          " " +
          userProfile.value.grandFatherName +
          "."
      );
      doc.text(
        40,
        100,
        userProfile.value.name +
          " " +
          userProfile.value.fatherName +
          " " +
          userProfile.value.grandFatherName +
          " " +
          "was registered as " +
          applicantPosition.value +
          " " +
          moment(license.value.licenseIssuedDate).format("MMMM D, YYYY") +
          " by " +
          license.value.whoIssued +
          ","
      );
      doc.text(
        40,
        110,
        `which is the responsible organ for registration and licensing of health professionals and ${
          gender.value == "male" ? "his" : "her"
        } registration`
      );
      doc.text(
        40,
        120,
        `number is ${license.value.licenseRegistrationNumber}.`
      );
      doc.text(
        40,
        130,
        `${
          gender.value == "male" ? "he" : "she"
        } has no any reported medico legal records and malpractices while ${
          gender.value == "male" ? "he" : "she"
        } has practiced ${
          gender.value == "male" ? "his" : "her"
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
          gender.value == "male" ? "him" : "her"
        }.`
      );
      doc.text(40, 185, "With best regards");
      window.open(doc.output("bloburl"));
    };

    if (modalData.value.applicationStatus&&modalData.value.applicationStatus.code === "APP"
    ) {
      isUserApproved.value = true;
    }
    licenseId.value = modalData.value.id?modalData.value.id:"";
    applicationType.value = modalData.value.applicationType?modalData.value.applicationType.name:"";
    showLoading.value = true;
    isGoodStanding.value = true;

    license.value = modalData.value?modalData.value:{};
    goodStandingUser.value =modalData.value;
    if (
      goodStandingUser.value.woreda != null &&
      goodStandingUser.value.woreda.zone != null &&
      goodStandingUser.value.woreda.zone.region != null
    ) {
      if (adminRegionId != goodStandingUser.value.woreda.zone.region.id) {
        myRegion.value = false;
      }
    } else {
      if (expertLevelId != goodStandingUser.value.expertLevelId) {
        myRegion.value = false;
      }
    }
    const prof = modalData.value ? modalData.value.profile : {};
    gender.value = modalData.value.profile ? modalData.value.profile.gender : "";
    if (prof.value) {
      userProfile.value.name = prof.value.name ? prof.value.name : "";
      userProfile.value.fatherName = prof.value.fatherName
        ? prof.value.fatherName
        : "";
      userProfile.value.grandFatherName = prof.value.grandFatherName
        ? prof.value.grandFatherName
        : "";
    }
    const apPosition =modalData.value ? modalData.value.applicantPosition : {};
    if (apPosition.value) {
      applicantPosition.value = apPosition.value.name
        ? apPosition.value.name
        : "-";
    }
    getReviewId.value = license.value.reviewerId;
    show.value = true;
    profileInfo.value = license.value.profile;

    return {
      license,
      profileInfo,
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
      expertLevelId
    };
  }
};
</script>
<style>
.text-danger > label,
.text-danger > h5 {
  color: red;
}
</style>
