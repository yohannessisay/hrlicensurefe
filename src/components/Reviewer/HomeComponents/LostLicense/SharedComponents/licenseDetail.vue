<template>
  <div
    class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
    id="licenseDetailModal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="licenseDetailModalLabel"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-dialog-centered modal-xl relative w-auto pointer-events-none"
    >
      <div
        class="modal-content border-none relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"
      >
        <div
          class="modal-header flex flex-shrink-0 justify-end p-2 rounded-t-md"
        >
          <button
            type="button"
            class="px-6 text-white bg-primary-600 hover:text-primary-600 hover:border font-medium text-xs leading-tight uppercase rounded hover:border-primary-600 hover:bg-purple-700 hover: focus:bg-purple-700 focus: focus:outline-none focus:ring-0 active:bg-purple-800 active: transition duration-150 ease-in-out"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fa fa-close fa-2x"></i>
          </button>
        </div>

        <div class="modal-body relative p-4">
          <div class="container px-6 mx-auto">
            <div class="grid grid-cols-2 gap-4">
              <div class="p-2 rounded-md shadow-md">
                <div class="grid grid-cols-2 gap-2">
                  <h2 class="text-grey-800 text-xl col-span-2 border-b">
                    License Detail
                  </h2>
                  <h2 class="text-grey-800 text-lg">License Code</h2>
                  <h2 class="text-primary-600 text-lg">
                    {{
                      license && license.newLicenseCode
                        ? license.newLicenseCode
                        : license && license.renewalCode
                        ? license.renewalCode
                        : ""
                    }}
                  </h2>
                  <h2 class="text-grey-800 text-lg">License Expiration</h2>
                  <h2 class="text-primary-600 text-lg">
                    {{
                      license && license.licenseExpirationDate
                        ? license.licenseExpirationDate.slice(0, 10)
                        : ""
                    }}
                  </h2>

                  <h2 class="text-grey-800 text-lg">License Type</h2>
                  <h2 class="text-primary-600 text-lg">
                    {{
                      license && license.newLicenseCode
                        ? "New License"
                        : "Renewal"
                    }}
                  </h2>
                </div>
              </div>
              <div class="p-2 rounded-md shadow-md">
                <div class="grid grid-cols-2 gap-2">
                  <h2 class="text-grey-800 text-xl col-span-2 border-b">
                    Applicant Detail
                  </h2>
                  <h2 class="text-grey-800 text-lg">Applicant Name</h2>
                  <h2 class="text-primary-600 text-lg">
                    {{
                      license && license.profile
                        ? `${license.profile.name} ${license.profile.fatherName} ${license.profile.grandFatherName}`
                        : ""
                    }}
                  </h2>
                  <h2 class="text-grey-800 text-lg">Date Of Birth</h2>
                  <h2 class="text-primary-600 text-lg">
                    {{
                      license && license.profile
                        ? license.profile.dateOfBirth.slice(0, 10)
                        : ""
                    }}
                  </h2>
                  <h2 class="text-grey-800 text-lg">Gender</h2>
                  <h2 class="text-primary-600 text-lg">
                    {{
                      license && license.profile ? license.profile.gender : ""
                    }}
                  </h2>

                  <h2 class="text-grey-800 text-lg">Nationality</h2>
                  <h2 class="text-primary-600 text-lg">
                    {{
                      license && license.profile && license.profile.nationality
                        ? license.profile.nationality.name
                        : ""
                    }}
                  </h2>
                </div>
              </div>
              <div class="p-2 rounded-md shadow-md">
                <div class="grid grid-cols-1">
                  <h2 class="text-grey-800 text-xl col-span-2 border-b">
                    Profession Detail
                  </h2>

                  <div
                    class=""
                    v-for="education in license.educations"
                    :key="education.id"
                  >
                    <div class="grid grid-cols-2 gap-2">
                      <h2 class="text-grey-800 text-lg">Profession Name</h2>
                      <h2 class="text-primary-600 text-lg">
                        {{
                          education.professionType
                            ? education.professionType.name
                            : ""
                        }}
                      </h2>
                      <h2 class="text-grey-800 text-lg">Department Name</h2>
                      <h2 class="text-primary-600 text-lg">
                        {{
                          education.department ? education.department.name : ""
                        }}
                      </h2>
                      <h2 class="text-grey-800 text-lg">Education Level</h2>
                      <h2 class="text-primary-600 text-lg">
                        {{
                          education.educationLevel
                            ? education.educationLevel.name
                            : ""
                        }}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-2 rounded-md shadow-md">
                <div class="grid grid-cols-2 gap-2">
                  <h2 class="text-grey-800 text-xl col-span-2 border-b">
                    Reviewer Detail
                  </h2>
                  <h2 class="text-grey-800 text-lg">Reviewer Name</h2>
                  <h2 class="text-primary-600 text-lg">
                    {{
                      license && license.newLicenseCode
                        ? license.licenseReviewer
                          ? license.licenseReviewer.reviewer.name
                          : ""
                        : license && license.renewalCode
                        ? license.renewalReviewer
                          ? license.renewalReviewer.reviewer.name
                          : ""
                        : ""
                    }}
                  </h2>
                  <h2 class="text-grey-800 text-lg">Reviewer Email</h2>
                  <h2 class="text-primary-600 text-lg">
                    {{
                      license && license.newLicenseCode
                        ? license.licenseReviewer
                          ? license.licenseReviewer.reviewer.email
                          : ""
                        : license && license.renewalCode
                        ? license.renewalReviewer
                          ? license.renewalReviewer.reviewer.email
                          : ""
                        : ""
                    }}
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div class="collapse mt-12" id="collapseExample">
            <div class="block p-6 rounded-lg bg-white">
              <div class="flex justify-content-evenly align-center">
                <h1>Attached Documents</h1>
              </div>
              <div class="grid grid-cols-4 gap-4">
                <div
                  class="mt-4 mb-8 bg-white"
                  style="border-radius: 15px; padding: 10px"
                  v-for="document in license.documents"
                  :key="document.id"
                >
                  <div
                    v-if="
                      document &&
                        document.fileType &&
                        document.fileType.split('/')[1] == 'pdf'
                    "
                  >
                    <button
                      class="inline-block px-6 text-xs font-medium leading-tight text-white uppercase transition duration-150 ease-in-out rounded bg-primary-400 hover:bg-purple-700 hover: focus:bg-purple-700 focus: focus:outline-none focus:ring-0 active:bg-purple-800 active: hover:bg-white hover:text-primary-600"
                      @click="openPdfInNewTab(document.filePath)"
                    >
                      See pdf in detail
                    </button>
                  </div>
                  <div class="flex justify-center" v-else>
                    <div class="mt-large bg-white">
                      <a
                        :href="
                          document.filePath ? googleApi + document.filePath : ''
                        "
                        :data-title="
                          document.documentType
                            ? document.documentType.name
                            : '-----'
                        "
                        data-lightbox="example-2"
                      >
                        <img
                          :src="
                            document.filePath
                              ? googleApi + document.filePath
                              : ''
                          "
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
        <div
          class="modal-footer p-2 flex flex-shrink-0 flex-wrap items-center justify-end border-t border-grey-100 rounded-b-md"
        >
          <button
            class="inline-block px-6 py-2.5 bg-primary-700 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-white hover:text-primary-600 transition duration-150 ease-in-out"
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
            class="inline-block px-6 text-white font-medium text-xs bg-primary-700 leading-tight uppercase rounded hover:border-primary-600 hover:bg-white hover:text-primary-700 transition duration-150 ease-in-out"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { googleApi } from "@/composables/baseURL";
export default {
  props: ["license"],
  setup() {
    return {
      googleApi
    };
  }
};
</script>
