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
    <div class="modal-dialog modal-xl relative w-auto pointer-events-none">
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
          class="modal-header flex flex-shrink-0 justify-end p-2 rounded-t-md"
        >
          <button
            type="button"
            class="
              px-6
              text-white
              bg-primary-600
              hover:text-primary-600 hover:border
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              hover:border-primary-600
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
            aria-label="Close"
          >
            <i class="fa fa-close fa-2x"></i>
          </button>
        </div>
        <div class="vld-parent mt-4">
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
                        {{ modalData.name }}
                      </span>
                      's License Data
                    </h2>
                  </div>
                </div>

                <div class="flex flex-wrap">
                  <div class="grow-0 shrink-0 basis-auto w-full">
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
                              <picture>
                                <source
                                  :srcset="
                                    modalData.profile &&
                                    modalData.profile.profilePicture
                                      ? googleApi +
                                        modalData.profile.profilePicture
                                          .filePath
                                      : ''
                                  "
                                  type="image/jpg"
                                />

                                <img
                                  src="../../../../../assets/showLicense/profile.png"
                                />
                              </picture>
                            </div>
                          </div>
                          <div class="grow ml-6">
                            <h2 class="font-extrabold text-2xl mb-1">
                              Personal Info
                            </h2>
                            <div
                              class="
                              border-2
                                p-2
                                rounded-lg
                                m-1
                                shadow-md
                                text-primary-500
                              "
                            >
                              <p class="text-gray-500">
                                <span
                                  class="
                                  font-semibold
                                  text-lg text-primary-700
                                  mb-1
                                "
                                  >Full Name:</span
                                >
                                <span class="text-grey-800">{{
                                  modalData.name
                                }}</span>
                              </p>
                              <p class="text-gray-500">
                                <span
                                  class="font-semibold text-primary-700 mb-1"
                                  >Gender:</span
                                >
                                <span class="text-grey-800">{{
                                  modalData.gender
                                }}</span>
                              </p>
                              <p class="text-gray-500">
                                <span
                                  class="font-semibold text-primary-700 mb-1"
                                  >Nationality:</span
                                >
                                <span class="text-grey-800">{{
                                  modalData.nationality
                                }}</span>
                              </p>
                              <p class="text-gray-500">
                                <span
                                  class="font-semibold text-primary-700 mb-1"
                                  >Date Of Birth:</span
                                >
                                <span class="text-grey-800">{{
                                  modalData.dateOfBirth
                                    ? modalData.dateOfBirth.slice(0, 10)
                                    : ""
                                }}</span>
                              </p>
                              <p class="text-gray-500">
                                <span
                                  class="font-semibold text-primary-700 mb-1"
                                  >Martial Status:</span
                                >
                                <span class="text-grey-800">{{
                                  modalData.maritalStatus
                                }}</span>
                              </p>
                            </div>
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
                        <div class="flex items-start">
                          <div class="shrink-0">
                            <div
                              class="
                                p-4
                                bg-blue-600
                                rounded-md
                                shadow-lg
                                w-40
                                h-40
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
                            <div
                              class="
                              border-2
                                p-2
                                rounded-lg
                                m-1
                                shadow-md
                                text-primary-500
                              "
                            >
                              <p class="text-gray-500">
                                <span class="font-medium text-primary-700 mb-1"
                                  >Mobile Number:</span
                                >
                                <span class="text-grey-800">{{
                                  modalData.mobileNumber
                                }}</span>
                              </p>
                              <p class="text-gray-500">
                                <span class="font-medium text-primary-700 mb-1"
                                  >Email:</span
                                >
                                <span class="text-grey-800">{{
                                  modalData.email
                                }}</span>
                              </p>
                            </div>
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
                        <div class="flex items-start">
                          <div class="shrink-0">
                            <div
                              class="
                                p-4
                                bg-blue-600
                                rounded-md
                                shadow-lg
                                w-48
                                h-64
                                flex
                                items-center
                                justify-center
                              "
                            >
                              <i class="fa fa-building fa-4x"></i>
                            </div>
                          </div>
                          <div class="grow ml-6 mb-4">
                            <h2 class="font-bold mb-1">Education Detail</h2>

                            <div
                              class="
                                border-2
                                p-2
                                rounded-lg
                                m-1
                                shadow-md
                                text-primary-500
                              "
                              v-for="education in modalData.data
                                ? modalData.data.educations
                                : []"
                              :key="education.id"
                            >
                              <p class="text-gray-500">
                                <span
                                  class="font-semibold text-primary-700 mb-1"
                                  >Department:</span
                                >
                                <span class="text-grey-800">{{
                                  education.department
                                    ? education.department.name
                                    : ""
                                }}</span>
                              </p>
                              <p class="text-gray-500">
                                <span
                                  class="font-semibold text-primary-700 mb-1"
                                  >Education Level:</span
                                >
                                <span class="text-grey-800">{{
                                  education.educationLevel
                                    ? education.educationLevel.name
                                    : ""
                                }}</span>
                              </p>
                              <p class="text-gray-500">
                                <span
                                  class="font-semibold text-primary-700 mb-1"
                                  >Profession:</span
                                >
                                <span class="text-grey-800">{{
                                  education.professionType
                                    ? education.professionType.name
                                    : ""
                                }}</span>
                              </p>
                              <p class="text-gray-500">
                                <span
                                  class="font-semibold text-primary-700 mb-1"
                                  >Institution:</span
                                >
                                <span class="text-grey-800">{{
                                  education.institution
                                    ? education.institution.name
                                    : ""
                                }}</span>
                              </p>
                            </div>
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
                        <div class="flex items-start">
                          <div class="shrink-0">
                            <div
                              class="
                                p-4
                                bg-blue-600
                                rounded-md
                                shadow-lg
                                w-40
                                h-40
                                flex
                                items-center
                                justify-center
                              "
                            >
                              <i class="fa fa-phone fa-4x"></i>
                            </div>
                          </div>
                          <div class="grow ml-6">
                            <h2 class="font-bold mb-1">Supervision Detail</h2>
                            <div
                              class="
                              border-2
                                p-2
                                rounded-lg
                                m-1
                                shadow-md
                                text-primary-500
                              "
                            >
                              <p class="text-gray-500">
                                <span class="font-medium text-primary-700 mb-1"
                                  >Start Date:</span
                                >
                                <span class="text-grey-800">{{
                                  modalData.data
                                    ? modalData.data.superviseStartDate
                                    : ""
                                }}</span>
                              </p>
                              <p class="text-gray-500">
                                <span class="font-medium text-primary-700 mb-1"
                                  >End Date:</span
                                >
                                <span class="text-grey-800">{{
                                  modalData.data
                                    ? modalData.data.superviseEndDate
                                    : ""
                                }}</span>
                              </p>
                              <p class="text-gray-500">
                                <span class="font-medium text-primary-700 mb-1"
                                  >Institution:</span
                                >
                                <span class="text-grey-800">{{
                                  modalData.data
                                    ? modalData.data.supervisingInstitution.name
                                    : ""
                                }}</span>
                              </p>
                            </div>
                          </div>
                        </div>
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
                                  :data-title="
                                    document.documentType
                                      ? document.documentType.name
                                      : '-----'
                                  "
                                  data-lightbox="example-2"
                                >
                                  <img
                                    :src="googleApi + document.filePath"
                                    class="w-full h-48 object-cover"
                                  />
                                </a>

                                <h4 style="font-weight: bold">Document Type</h4>
                                <h5 class="text-primary-500">
                                  {{
                                    document.documentType
                                      ? document.documentType.name
                                      : "------"
                                  }}
                                </h5>
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
            border-t border-grey-100
            rounded-b-md
          "
        >
          <button
            class="
                         inline-block
                            px-6
                            py-2.5
                            bg-yellow-300
                            hover:text-primary-600
                            hover:border
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
            data-bs-target="#printSupervision"
            aria-expanded="false"
            aria-controls="printSupervision"
          >
            Print Letter
          </button>
          <button
            class="
                         inline-block
                            px-6
                            py-2.5
                            bg-blue-600
                            hover:text-primary-600
                            hover:border
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
            Show Attached Documents
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
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
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
    id="printSupervision"
    tabindex="-1"
    aria-labelledby="printSupervisionModalTitle"
    aria-modal="true"
    role="dialog"
  >
    <div
      class="
        modal-dialog modal-dialog-centered
        modal-xl
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
            p-4
            border-b border-grey-100
            rounded-t-md
          "
        >
          <h5
            class="text-xl font-medium leading-normal text-gray-800"
            id="superviseModalLabel"
          >
            Supervision Letter Detail
          </h5>
          <button
            type="button"
            class="
              btn-close
              box-content
              w-4
              h-4
              p-1
              text-black
              border-none
              rounded-none
              opacity-50
              focus:shadow-none focus:outline-none focus:opacity-100
              hover:text-black hover:opacity-75 hover:no-underline
            "
            data-bs-dismiss="modal"
            aria-label="Close"
            style="min-height: 28px; min-width: 28px"
          ></button>
        </div>

        <div class="container shadow-md rounded-lg">
          <div class="p-8 m-8 " id="printSupervisionModal">
            <h2 contenteditable="true">ለ፡_________________________</h2>
            <p>አዲስ አበባ</p>

            <p class="p-4 mt-8">
              <span class="ml-4">ከዚህ</span> በታች
              <span contenteditable="true">
                {{
                  modalData &&
                  modalData.data &&
                  modalData.data.profile &&
                  modalData.data.profile.gender == "male"
                    ? "ስሙ "
                    : "ስሟ"
                }}</span
              >
              በሰንጠረዥ የተመለከቱት ባለሙያ በ
              <span contenteditable="true" class="text-yellow-300 font-bold">
                __________________
              </span>
              ከሚገኘው
              <span class="text-yellow-300 font-bold">{{
                modalData.data && modalData.data.supervisingInstitution
                  ? modalData.data.supervisingInstitution.name
                  : ""
              }}</span>
              የህክምና ትምህርቷን
              <span>{{
                modalData &&
                modalData.data &&
                modalData.data.profile &&
                modalData.data.profile.gender == "male"
                  ? "ሲከታተል ቆይቶ"
                  : "ስትከታተል ቆይታ"
              }}</span>
              ኤክስተርንሺፕ ሀገር ውስጥ ለመስራት በቀን ባቀረቡት ማመልከቻ ጠይቀዋል፡፡ በዚህም መሠረት ጉዳያቸው በ
              <span contenteditable="true" class="text-yellow-300 font-bold"
                >_____________</span
              >
              ቀርቦ ከታየ ከተገመገመ በኃላ To Work externship as a
              <span contenteditable="true" class="text-yellow-300 font-bold"
                >_____________</span
              >በሚል ፀድቆቸው ተመዝገበዋል፡፡ ስለዚህም ልምምዱን ከ
              <span contenteditable="true" class="text-yellow-300 font-bold"
                >___/___/___</span
              >
              ጀምሮ ለ
              <span contenteditable="true" class="text-yellow-300 font-bold"
                >_____________</span
              >እንዲከታተሉ የተመደቡ መሆኑን እየገለጽን፤ ሆስፒታሉ በአንድ አመት መጨረሻ አስፈላጊውን ሁሉ በመፈጸም
              {{
                modalData &&
                modalData.data &&
                modalData.data.profile &&
                modalData.data.profile.gender == "male"
                  ? "የባለሙያዉን "
                  : "የባለሙያዋን"
              }}
              ውጤቱን እንድታሳውቁን እንጠይቃለን፡፡
            </p>

            <div class="grid justify-items-center mt-8">
              <table class=" border text-center text-sm font-light ">
                <thead class="border-b font-medium bg-primary-200 ">
                  <tr>
                    <th scope="col" class="border-r px-6 py-4 ">
                      #ተ.ቁ
                    </th>
                    <th
                      scope="col"
                      class="border-r px-6 py-4 dark:border-neutral-500"
                    >
                      የስም ዝርዝር
                    </th>
                    <th
                      scope="col"
                      class="border-r px-6 py-4 dark:border-neutral-500"
                    >
                      የሙያ ስያሜ
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="border-b dark:border-neutral-500"
                    v-for="(educations, index) in modalData &&
                    modalData.data &&
                    modalData.data.educations
                      ? modalData.data.educations
                      : []"
                    :key="educations.id"
                  >
                    <td
                      class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500"
                    >
                      {{ (index += 1) }}
                    </td>
                    <td
                      class="whitespace-nowrap border-r px-6 py-4 text-yellow-300"
                    >
                      {{
                        modalData && modalData.data && modalData.data.profile
                          ? modalData.data.profile.name +
                            " " +
                            modalData.data.profile.fatherName +
                            " " +
                            modalData.data.profile.grandFatherName
                          : []
                      }}
                    </td>
                    <td
                      class="whitespace-nowrap border-r px-6 py-4 text-yellow-300"
                    >
                      {{
                        educations && educations.professionType
                          ? educations.professionType.name
                          : ""
                      }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h5 class="mt-8 text-right">//ከሰላምታ ጋር//</h5>
          </div>
        </div>

        <div
          class="
            modal-footer
            flex flex-shrink-0 flex-wrap
            items-center
            justify-end
            p-1
            border-t border-grey-100
            rounded-b-md
          "
        >
          <button
            type="button"
            class="
              inline-block
              px-6
              py-2.5
              bg-primary-700
              text-white
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              shadow-lg
              hover:bg-white hover:text-primary-600
              transition
              duration-150
              ease-in-out
            "
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            class="
              inline-block
              px-6
              py-2.5
              bg-primary-700
              text-white
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              shadow-lg
              hover:bg-white hover:text-primary-600
              transition
              duration-150
              ease-in-out
            "
            @click="print()"
          >
            Print
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { ref, watch } from "vue";
import moment from "moment";
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import { googleApi } from "@/composables/baseURL";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
export default {
  props: ["modalDataId"],
  components: {
    Loading,
  },
  computed: {
    moment: () => moment,
  },
  setup(props) {
    const store = useStore();

    let show = ref(true);
    let adminId = +localStorage.getItem("adminId");

    let isLoading = ref(false);
    const licenseData = ref({});
    let reviewerAdminId = ref(0);

    const showModal = () => {
      show.value = true;
    };

    const onCancel = () => {
      isLoading.value = false;
    };
    const modalData = ref({});
    let result = {};

    const check = () => {
      store
        .dispatch("reviewer/getNewLicenseApplication", props.modalDataId.id)
        .then((res) => {
          if (
            res.data.status == "Success" &&
            res.data.message !=
              "New licenses total count retrieved successfully!"
          ) {
            result = res.data.data;

            modalData.value.name =
              result.profile.name +
              " " +
              result.profile.fatherName +
              "  " +
              result.profile.grandFatherName;
            modalData.value.gender = result.profile.gender
              ? result.profile.gender
              : "-----";
            modalData.value.nationality = result.profile.nationality?.name
              ? result.profile.nationality?.name
              : "-----";
            modalData.value.dateOfBirth = result.profile.dateOfBirth
              ? result.profile.dateOfBirth
              : "-----";
            modalData.value.maritalStatus = result.profile.maritalStatus?.name
              ? result.profile.maritalStatus.name
              : "-----";
            modalData.value.mobileNumber = result.applicant.phoneNumber
              ? result.applicant.phoneNumber
              : "-----";
            modalData.value.email = result.applicant.emailAddress
              ? result.applicant.emailAddress
              : "-----";

            modalData.value.profile = result.profile;
            modalData.value.professionalTypes = result.licenseProfessions;
            modalData.value.certifiedDate = result.certifiedDate;
            modalData.value.licenseExpirationDate =
              result.licenseExpirationDate;
            modalData.value.data = result;
            licenseData.value = result;
            modalData.value.documents = result.documents;
            isLoading.value = false;
          }
        });
    };
    const print = async () => {
      var data = document.getElementById("printSupervisionModal");

      await html2canvas(data, { scale: 2 }).then((canvas) => {
        const contentDataURL = canvas.toDataURL("image/png", 1.0);

        let pdf = new jsPDF("l", "mm", "a4");

        var width = pdf.internal.pageSize.getWidth();
        var height = pdf.internal.pageSize.getHeight();

        pdf.addImage(contentDataURL, "PNG", 0, 0, width, height);

        window.open(
          pdf.output("bloburl", { filename: "new-file.pdf" }),
          "_blank"
        );
      });
    };
    watch(props.modalDataId, () => {
      isLoading.value = true;
      check();
    });

    return {
      adminId,
      reviewerAdminId,
      showModal,
      check,
      print,
      isLoading,
      onCancel,
      modalData,
      googleApi,
    };
  },
};
</script>
<style scoped>
.shadow-lg {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 34%), 0 2px 4px -1px rgb(0 0 0 / 6%);
}
</style>
