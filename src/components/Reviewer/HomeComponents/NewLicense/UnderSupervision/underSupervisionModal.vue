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
                            class="mt-4 mb-8 bg-white shadow-lg"
                            style="border-radius: 15px; padding: 10px"
                            v-for="document in modalData.documents"
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
                                class="inline-block px-6 text-xs font-medium leading-tight text-white uppercase transition duration-150 ease-in-out rounded shadow-lg bg-primary-400 hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg hover:bg-white hover:text-primary-600"
                                @click="openPdfInNewTab(document.filePath)"
                              >
                                See pdf in detail
                              </button>
                            </div>
                            <div class="flex justify-center" v-else>
                              <div class="mt-large bg-white">
                                <a
                                  :href="
                                    document.filePath
                                      ? googleApi + document.filePath
                                      : ''
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

        <div class="container shadow-md rounded-lg" contenteditable="true">
          <div class="p-2 m-2 " id="printSupervisionModal">
            <div class="grid grid-cols-3 mb-12" id="applicantCopyHeader">
              <h2 class="text-primary-600 font-bold text-xl">
                ጤና ሚኒስቴር-ኢትዮጵያ <br />
                <span>የዜጎች ጤና ለሀገር ብልፅግና</span>
              </h2>
              <div class="ml-12 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 39.082 39.096"
                  class="w-20 h-20 "
                >
                  <defs>
                    <linearGradient
                      id="a"
                      x1="-.569"
                      y1="-.524"
                      x2="1"
                      y2="1"
                      gradientUnits="objectBoundingBox"
                    >
                      <stop offset="0" stop-color="#0d3073" />
                      <stop offset="1" stop-color="#0d3073" />
                    </linearGradient>
                  </defs>
                  <path
                    data-name="Intersection 26"
                    d="M-11300.909 40.548c-.412 0-.8 0-1.208-.028-.2-.028-.44-.028-.676-.06a4.53 4.53 0 01-.617-.057h-.06c-.06 0-.147-.031-.207-.031-.205-.028-.44-.088-.648-.117-.088-.028-.176-.028-.264-.06a20.761 20.761 0 01-2.327-.588c-.177-.06-.353-.119-.529-.176l-.707-.267c-.057-.028-.088-.028-.148-.057a19.553 19.553 0 01-11.039-11.719c-.058-.2-.146-.44-.205-.648a19.654 19.654 0 01-.824-4.592 4.1 4.1 0 01-.031-.619V21c0-.648.031-1.3.091-1.912.028-.236.057-.443.086-.679a20.78 20.78 0 01.679-3.12c.116-.384.233-.764.381-1.148.031-.088.091-.207.119-.3.088-.236.205-.44.293-.676a18.329 18.329 0 011.443-2.708c.236-.384.531-.767.8-1.148a21.036 21.036 0 011.824-2.12 19.439 19.439 0 0113.839-5.74 19.513 19.513 0 0113.837 5.74 19.642 19.642 0 012.236 2.68q.4.571.795 1.236a19.2 19.2 0 011.12 2.177 5.021 5.021 0 01.293.679c.147.44.295.853.443 1.3a10.421 10.421 0 01.352 1.293c.148.679.265 1.384.355 2.091.028.207.028.443.06.676a16.154 16.154 0 01.028 1.648c0 .415 0 .8-.028 1.179a19.334 19.334 0 01-.827 4.535 19.4 19.4 0 01-4.888 8.124 19.748 19.748 0 01-7.359 4.623 7.085 7.085 0 01-.705.236c-.238.057-.443.117-.65.176-.646.176-1.293.324-1.97.44-.235.031-.443.06-.679.088a2.114 2.114 0 01-.44.06.386.386 0 01-.177.028h-.031a5.352 5.352 0 01-.707.06 5.369 5.369 0 01-.677.028zm-7.508-8.156c.177.207.384.443.56.651a14.894 14.894 0 012.092 3.12c.265.088.528.148.881.236a33.85 33.85 0 00-.528-1.032c-.353-.588-.708-1.179-1.12-1.736a17.818 17.818 0 00-1.176-1.444c-.18-.207-.384-.412-.561-.588a16.664 16.664 0 00-4.211-3.063 7.207 7.207 0 00-.677-.324 16.411 16.411 0 00-2.268-.853c.089.264.236.5.353.764a16.472 16.472 0 002.68 3.8c.324.324.648.648 1 .972a16.8 16.8 0 01-1-3.592 16.2 16.2 0 013.975 3.09zm18.488-8.889a17.218 17.218 0 01.207 2.768 17.323 17.323 0 01-.119 2.205 18.07 18.07 0 01-1.44 5.243c.353-.264.705-.56 1.028-.855a15.582 15.582 0 004.095-5.712 16.34 16.34 0 00-3 1c.057-.617.088-1.236.088-1.881a19.765 19.765 0 00-.236-2.975 21 21 0 014.328-1 10.408 10.408 0 00.028-1.384 16.578 16.578 0 00-.176-2.444c-.028-.236-.088-.44-.119-.648-.47-.028-.91-.06-1.382-.06a16.172 16.172 0 00-4.18.531l-.619.176a16.962 16.962 0 00-3.947 1.736c-.174.119-.353.236-.529.352a19.222 19.222 0 00-2.088 1.62 22.406 22.406 0 00-2.8-3.208 20.706 20.706 0 012.709-2.06c.179-.119.354-.207.531-.324a21.392 21.392 0 013.8-1.8c.236-.06.443-.148.648-.207a20.5 20.5 0 016.331-1c-.116-.207-.235-.412-.353-.619-.088-.145-.176-.264-.267-.409-.205-.324-.412-.619-.617-.915a15.057 15.057 0 00-5.035-.853 15.262 15.262 0 00-3.5.412 20.527 20.527 0 00-3.8-2.268 18.664 18.664 0 016.036-1 17.914 17.914 0 012.824.207 10.657 10.657 0 00-1.147-.767 16.045 16.045 0 00-8.244-2.3 15.72 15.72 0 00-8.155 2.236c-.353.236-.736.472-1.089.736a15.87 15.87 0 012.061-.117 18.537 18.537 0 016.036 1c.295.088.56.207.855.324a19.019 19.019 0 013.855 2.151 5.1 5.1 0 01.648.469 19.717 19.717 0 012.531 2.415 21.465 21.465 0 00-3.8 1.824 15.172 15.172 0 00-2.8-2.532c-.177-.117-.353-.264-.561-.384a15.054 15.054 0 00-3.827-1.765c-.265-.06-.5-.148-.765-.207a15.507 15.507 0 00-3.711-.44 15.44 15.44 0 00-3.885.5 8.651 8.651 0 00-.589.824c-.207.3-.383.588-.56.884-.119.2-.235.412-.353.617a21.314 21.314 0 015.681 1.032 18.264 18.264 0 00-2.3 3.768 15.866 15.866 0 00-4.3-.56h-.588a5.717 5.717 0 00-.116.648 14 14 0 00-.208 2.5c0 .236.031.5.031.764.028.207.028.443.06.648a21.88 21.88 0 013.678.943c.207.088.412.148.619.236a21.316 21.316 0 014 2.06 6.649 6.649 0 01.617.412c.295.207.56.412.855.648.147.117.323.264.5.412.088-.207.176-.412.267-.619a22.91 22.91 0 011.824-3.356 16.6 16.6 0 012.8 3.592 14.34 14.34 0 00-1.268 2.916c-.028.06-.028.119-.057.176a.522.522 0 00-.06.207 1.131 1.131 0 00-.031.324 2.326 2.326 0 00.06.469 1.919 1.919 0 00.267.56 1.574 1.574 0 00.381.384 2.032 2.032 0 00.943.324h.088a1.793 1.793 0 001.029-.355 1.541 1.541 0 00.384-.381 1.486 1.486 0 00.267-.531 2.335 2.335 0 00.057-.469 1.5 1.5 0 00-.028-.355c-.028-.088-.06-.2-.088-.293v-.031a17.584 17.584 0 00-1.268-2.944c-.116-.2-.235-.412-.353-.617a16.972 16.972 0 00-2.8-3.5c-.147-.148-.324-.3-.472-.443a17.23 17.23 0 00-2.18-1.677 14.31 14.31 0 012.18-3.652 24.928 24.928 0 012.8 2.12c.177.148.324.3.472.443a20.68 20.68 0 012.8 3.208c.119.176.235.352.353.529a21.753 21.753 0 012.063 3.947c.146-.148.324-.267.5-.412a6.794 6.794 0 01.736-.56l.619-.443a15.675 15.675 0 00-.972-4.856 17.13 17.13 0 013.973-1.736 18.513 18.513 0 011.239 4.421zm-22.464-.111a16.8 16.8 0 011.148-3.8c.088-.207.176-.384.267-.588a17.659 17.659 0 012.3-3.711c.147-.176.264-.352.411-.529a19.183 19.183 0 012.5-2.415 14.4 14.4 0 013.885 1.679 15.61 15.61 0 00-2.768 2.472c-.148.148-.265.324-.412.5a16.308 16.308 0 00-2.208 3.652 5.1 5.1 0 00-.236.588 14.722 14.722 0 00-.94 4.123 21.536 21.536 0 00-3.947-1.97z"
                    transform="translate(11320.4 -1.452)"
                    fill="#0d3073"
                  />
                </svg>
              </div>
              <h2 class="text-primary-600 font-bold text-xl">
                Ministry of Health- Ethiopia
                <span>
                  Healthier Citizens for Prosperous Nation
                </span>
              </h2>
            </div>

            <div class="grid grid-cols-2 mb-8">
              <div class="flex justify-start" contenteditable="false">
                <img :src="qrSrc" alt="" style="height: 150px;width: 150px;" />
              </div>
              <div class="flex justify-end">
                <div class="grid grid-cols-1">
                  <h2 class="text-primary-600 font-bold text-xl">
                    ቀን
                    <span class="ml-4 ">{{
                      new Date().toISOString().slice(0, 10)
                    }}</span>
                  </h2>
                  <h2 class="text-primary-600 font-bold text-xl -mt-12">
                    ቁጥር _________________________
                  </h2>
                </div>
              </div>
            </div>
            <h2>ለ፡_________________________</h2>
            <p>አዲስ አበባ</p>

            <p class="p-2 mt-2">
              <span class="ml-4">ከዚህ</span> በታች
              <span contenteditable="false">
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
              <span class="text-yellow-300 font-bold">
                __________________
              </span>
              ከሚገኘው
              <span contenteditable="false" class="text-yellow-300 font-bold">{{
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
              <span class="text-yellow-300 font-bold">_____________</span>
              ቀርቦ ከታየ ከተገመገመ በኃላ To Work externship as a
              <span class="text-yellow-300 font-bold">_____________</span>በሚል
              ፀድቆቸው ተመዝገበዋል፡፡ ስለዚህም ልምምዱን ከ
              <span class="text-yellow-300 font-bold">___/___/___</span>
              ጀምሮ ለ
              <span class="text-yellow-300 font-bold">_____________</span
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
                      contenteditable="false"
                      class="whitespace-nowrap border-r px-6 py-4"
                    >
                      <span class="text-yellow-300">
                        {{
                          modalData && modalData.data && modalData.data.profile
                            ? modalData.data.profile.name +
                              " " +
                              modalData.data.profile.fatherName +
                              " " +
                              modalData.data.profile.grandFatherName
                            : []
                        }}
                      </span>
                    </td>
                    <td
                      contenteditable="false"
                      class="whitespace-nowrap border-r px-6 py-4 "
                    >
                      <span class="text-yellow-300">
                        {{
                          educations && educations.professionType
                            ? educations.professionType.name
                            : ""
                        }}</span
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h5 class="mt-8 text-right">//ከሰላምታ ጋር//</h5>
            <div
              class="text-primary-600 border-t-2 mt-10 mb-8"
              id="applicantCopyFooter"
            >
              <div class="grid grid-cols-4">
                <div class="grid grid-cols-4 col-span-1">
                  <div class="col-span-1">
                    <i class="fa fa-phone fa-2x mt-4"></i>
                  </div>
                  <div class="col-span-3">
                    <h2 class="text-primary-600">+251-115-517011</h2>
                    <h2 class="text-primary-600">+251-115-518031</h2>
                    <h2 class="text-primary-600">+251-115-159657</h2>
                    <h2 class="text-primary-600">+251-115-524549</h2>
                    <h2 class="text-primary-600">+251-115-516378</h2>
                    <h2 class="text-primary-600">+251-115-513301</h2>
                  </div>
                </div>
                <div class="grid grid-cols-2 col-span-2">
                  <div class="flex justify-center">
                    <h2 class="text-primary-600">
                      Fax +251-115-519366
                    </h2>
                  </div>
                  <h2 class="text-primary-600">
                    <i class="fa fa-envelope"></i> 1234 <br />
                    Addis Ababa, Ethiopia
                  </h2>
                  <h2 class="text-primary-600 col-span-2">
                    እባክዎን መልስ ሲሰጡ የእኛን ቁጥር ይጥቀሱ
                  </h2>
                  <h2 class="text-primary-600 col-span-2">
                    In reply please refer to our ref No.
                  </h2>
                </div>
                <div class="grid grid-cols-4 mt-2">
                  <i class="fa fa-globe mt-1"></i>
                  <div class="col-span-3">
                    moh@moh.gov.et
                  </div>
                  <i class="fa fa-envelope mt-1"></i>
                  <div class="col-span-3">
                    www.moh.gov.et
                  </div>
                  <i class="fa-brands fa-facebook-f mt-1"></i>
                  <div class="col-span-3 ">
                    Ministry of Health, Ethiopia
                  </div>
                  <i class="fa-brands fa-twitter mt-1"></i>
                  <div class="col-span-3">
                    @FMoHealth
                  </div>
                </div>
              </div>
            </div>
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
import html2pdf from "html2pdf.js";
import STATIC_CERTIFICATE_URL from "../../../../../sharedComponents/constants/message.js";
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
    let qrSrc = ref("");
    let isLoading = ref(false);
    const licenseData = ref({});
    let reviewerAdminId = ref(0);

    const showModal = () => {
      show.value = true;
    };
    let pdfFilePath = ref("");
    const onCancel = () => {
      isLoading.value = false;
    };
    const modalData = ref({});
    let result = {};
    const openPdfInNewTab = (pdfPath) => {
      pdfFilePath.value = pdfPath;
      window.open(googleApi + "" + pdfPath, "_blank");
    };
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
      const staticUrl = STATIC_CERTIFICATE_URL;
      const userId = modalData.value.data.profile.id;
      const applicationId = modalData.value.data.id;
      const applicationType = "NewLicense";

      const qrParam = { url: null };

      qrParam.url =
        staticUrl + "/" + applicationType + "/" + userId + "/" + applicationId;
      store
        .dispatch("reviewer/getQrCode", qrParam)
        .then((res) => {
          qrSrc.value = res.data.data;
        })
        .finally(async () => {
          var element = data;
          var opt = {
            margin: 1,
            filename: "myfile.pdf",
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { orientation: "p", unit: "mm", format: "a4" },
          };

          html2pdf()
            .set(opt)
            .from(element)
            .save(
              modalData.value.data &&
                modalData.value.data.profile &&
                modalData.value.data.profile.name
                ? modalData.value.data.profile.name +
                    " " +
                    new Date().toISOString().slice(0, 10)
                : ""
            )
            .then(() => {
              document.getElementById("applicantCopyHeader").style.display =
                "none";
              document.getElementById("applicantCopyFooter").style.display =
                "none";
              html2pdf()
                .set(opt)
                .from(document.getElementById("printSupervisionModal"))
                .save(
                  modalData.value.data &&
                    modalData.value.data.profile &&
                    modalData.value.data.profile.name
                    ? modalData.value.data.profile.name +
                        " " +
                        new Date().toISOString().slice(0, 10)
                    : ""
                );
            });
        })
        .catch((err) => {
          console.log(err);
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
      qrSrc,
      onCancel,
      pdfFilePath,
      openPdfInNewTab,
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
