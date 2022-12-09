<template>
  <div class="main " id="main">
    <side-nav></side-nav>
    <div class="content" id="mainContent">
      <top-nav :userInfo="userInfo"></top-nav>
      <div class="mt-8 ml-8 mr-8">
        <nav class="bg-grey-100 p-4 rounded-sm w-full shadow-lg">
          <ol class="list-reset flex">
            <li>
              <a href="#" class="text-main-400 hover:text-main-100">Home</a>
            </li>
            <li><span class="text-gray-500 mx-2"></span></li>
          </ol>
        </nav>

        <div id="home" class="flex flex-row justify-center ml-4 mt-12">
          <!-- <div class="float-container" @click="modeToggle()">
            <a href="#" class="icon one"> </a>
          </div> -->
          <div class="flex flex-col md:flex-row justify-center flex-wrap gap-2">
            <div class="mr-12 mb-8 overview-boxes rounded-xl">
              <div
                class="
                  bg-main-400
                  hover:bg-white
                  shadow-lg
                  box
                  w-full
                  rounded-lg
                  transition
                  duration-500
                  transform
                  hover:scale-110
                  cursor-pointer
                  cart
                "
                data-bs-toggle="modal"
                data-bs-target="#newLicenseDetail"
                style="height: 200px; width: 300px"
              >
                <p
                  class="
                    py-6
                    px-6
                    text-lg
                    tracking-wide
                    text-center
                    flex flex-row
                    justify-center
                  "
                >
                  <img
                    src="../../../assets/applicant/newLicense.png"
                    alt=""
                    style="height: 100px; width: 100px"
                  />
                </p>

                <div class="flex justify-center px-5 mb-2 text-sm mt-4">
                  <h1 class="text-2xl text-main-400">New License</h1>
                </div>
              </div>
            </div>

            <div class="mr-12 mb-8 overview-boxes">
              <div
                class="
                  bg-main-400
                  shadow-lg
                  box
                  rounded-2xl
                  hover:shadow-4xl
                  transition
                  duration-500
                  transform
                  hover:scale-110
                  cursor-pointer
                "
                data-bs-toggle="modal"
                data-bs-target="#renewalDetail"
                style="height: 200px; width: 300px"
              >
                <p
                  class="
                    py-6
                    px-6
                    text-lg
                    tracking-wide
                    text-center
                    flex flex-row
                    justify-center
                  "
                >
                  <img
                    src="../../../assets/applicant/renewal.png"
                    alt=""
                    style="height: 100px; width: 100px"
                  />
                </p>

                <div class="flex justify-center px-5 mb-2 text-sm mt-4">
                  <h1 class="text-2xl text-main-400">Renewal</h1>
                </div>
              </div>
            </div>

            <div class="mr-12 mb-8 overview-boxes">
              <div
                class="
                  bg-white
                  shadow-lg
                  box
                  rounded-2xl
                  hover:shadow-4xl
                  transition
                  duration-500
                  transform
                  hover:scale-110
                  cursor-pointer
                "
                data-bs-toggle="modal"
                data-bs-target="#goodStandingDetail"
                style="height: 200px; width: 300px"
              >
                <p
                  class="
                    py-6
                    px-6
                    text-lg
                    tracking-wide
                    text-center
                    flex flex-row
                    justify-center
                  "
                >
                  <img
                    src="../../../assets/applicant/goodStanding.png"
                    alt=""
                    style="height: 100px; width: 100px"
                  />
                </p>

                <div class="flex justify-center px-5 mb-2 text-sm mt-4">
                  <h1 class="text-2xl text-main-400">Goodstanding</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Section -->
  <!-- New License -->
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
    id="newLicenseDetail"
    tabindex="-1"
    aria-labelledby="newLicenseLabel"
    aria-modal="true"
    role="dialog"
  >
    <div class="modal-dialog modal-xl relative w-auto pointer-events-none">
      <div
        :class="
          isDarkMode
            ? 'modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-secondaryDark bg-clip-padding rounded-md outline-none text-current'
            : 'modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current'
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
          <h2
            :class="
              isDarkMode ? 'text-white xl:mx-12' : 'text-main-400 xl:mx-12'
            "
          >
            Document specification for new License
          </h2>
          <button
            type="button"
            class="
              inline-block
              px-6
              py-2.5
              bg-main-400
              text-white
              font-medium
              text-lg
              leading-tight
              uppercase
              rounded
              shadow-lg
              hover:bg-white hover:text-main-400
              transition
              duration-150
              ease-in-out
            "
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            X
          </button>
        </div>
        <div class="modal-body relative p-4">
          <div
            :class="
              isDarkMode
                ? 'bg-primaryDark rounded-lg p-4 md:py-12'
                : 'bg-white rounded-lg p-4 md:py-12'
            "
          >
            <div class="container mx-auto px-4">
              <div class="max-w-3xl mx-auto text-center">
                <h1
                  class="
                    text-3xl
                    md:text-4xl
                    font-medium
                    text-main-400
                    mb-4
                    border-b-4
                    md:mb-6
                  "
                >
                  Required Documents for New License
                </h1>
              </div>

              <div class="lg:flex lg:-mx-4 mt-6 md:mt-12">
                <div class="pricing-plan-wrap lg:w-1/3 my-4 md:my-6 mr-4">
                  <div
                    :class="
                      isDarkMode
                        ? 'pricing-plan border-t-4 border-solid  bg-secondaryDark rounded-lg shadow-2xl text-center max-w-full mx-auto hover:border-indigo-600 transition-colors duration-300'
                        : 'pricing-plan border-t-4 border-solid border-white bg-white rounded-lg shadow-2xl text-center max-w-full mx-auto hover:border-indigo-600 transition-colors duration-300'
                    "
                  >
                    <div class="p-2 md:py-4">
                      <h4
                        :class="
                          isDarkMode
                            ? 'font-medium text-white leading-tight text-2xl border-b-4'
                            : 'font-medium text-main-400 leading-tight text-2xl border-b-4'
                        "
                      >
                        Ethiopian
                      </h4>
                    </div>
                    <div class="pricing-amount transition-colors duration-300">
                      <div>
                        <span
                          :class="
                            isDarkMode
                              ? 'text-xl text-white font-semibold'
                              : 'text-xl text-main-4oo font-semibold'
                          "
                          >Attached Documents must be clear and visible.</span
                        >
                      </div>
                      <small
                        :class="
                          isDarkMode ? 'text-white ml-2' : 'text-main-400 ml-2'
                        "
                        >(hover over lists to see details)</small
                      >
                    </div>
                    <div class="p-6 mb-2" v-if="NLdocumentSpecs">
                      <ul
                        :class="isDarkMode ? 'bg-secondaryDark' : 'bg-white'"
                      >
                        <li
                          :class="
                            isDarkMode
                              ? 'text-main-400 text-lg rounded-lg bg-secondaryDark cursor-pointer'
                              : 'text-main-400 text-lg rounded-lg bg-white cursor-pointer'
                          "
                          data-bs-toggle="tooltip"
                        >
                          <i
                            :class="
                              isDarkMode
                                ? 'text-white  fa fa-arrow-right-long'
                                : 'fa fa-arrow-right-long'
                            "
                          ></i>
                          Residence Id
                        </li>
                        <li
                          :class="
                            isDarkMode
                              ? 'text-main-400 text-lg rounded-lg bg-secondaryDark cursor-pointer'
                              : 'text-main-400 text-lg rounded-lg bg-white cursor-pointer'
                          "
                          data-bs-toggle="tooltip"
                          title="not lasting three months"
                        >
                          <i
                            :class="
                              isDarkMode
                                ? 'text-white  fa fa-arrow-right-long'
                                : 'fa fa-arrow-right-long'
                            "
                          ></i>
                          Medical Certificate
                        </li>
                        <li
                          :class="
                            isDarkMode
                              ? 'text-main-400 text-lg rounded-lg bg-secondaryDark cursor-pointer'
                              : 'text-main-400 text-lg rounded-lg bg-white cursor-pointer'
                          "
                          data-bs-toggle="tooltip"
                          title="Only for diploma graduates"
                        >
                          <i
                            :class="
                              isDarkMode
                                ? 'text-white  fa fa-arrow-right-long'
                                : 'fa fa-arrow-right-long'
                            "
                          ></i>
                          COC Certificate
                        </li>

                        <li
                          :class="
                            isDarkMode
                              ? 'text-main-400 text-lg rounded-lg bg-secondaryDark cursor-pointer'
                              : 'text-main-400 text-lg rounded-lg bg-white cursor-pointer'
                          "
                          data-bs-toggle="tooltip"
                          title=""
                        >
                          <i
                            :class="
                              isDarkMode
                                ? 'text-white  fa fa-arrow-right-long'
                                : 'fa fa-arrow-right-long'
                            "
                          ></i>
                          8th, 10th, 12th Grade Certificate
                        </li>

                        <li
                          :class="
                            isDarkMode
                              ? 'text-main-400 text-lg rounded-lg bg-secondaryDark cursor-pointer'
                              : 'text-main-400 text-lg rounded-lg bg-white cursor-pointer'
                          "
                          data-bs-toggle="tooltip"
                          title="Diploma,transcript for both undergraduates and postgraduates"
                        >
                          <i
                            :class="
                              isDarkMode
                                ? 'text-white  fa fa-arrow-right-long'
                                : 'fa fa-arrow-right-long'
                            "
                          ></i>
                          Academic Document
                        </li>

                        <li
                          :class="
                            isDarkMode
                              ? 'text-main-400 text-lg rounded-lg bg-secondaryDark cursor-pointer'
                              : 'text-main-400 text-lg rounded-lg bg-white cursor-pointer'
                          "
                          data-bs-toggle="tooltip"
                        >
                          <i
                            :class="
                              isDarkMode
                                ? 'text-white  fa fa-arrow-right-long'
                                : 'fa fa-arrow-right-long'
                            "
                          ></i>
                          Authenticated Professional License
                        </li>

                        <li
                          :class="
                            isDarkMode
                              ? 'text-main-400 text-lg rounded-lg bg-secondaryDark cursor-pointer'
                              : 'text-main-400 text-lg rounded-lg bg-white cursor-pointer'
                          "
                          data-bs-toggle="tooltip"
                          title=" "
                        >
                          <i
                            :class="
                              isDarkMode
                                ? 'text-white  fa fa-arrow-right-long'
                                : 'fa fa-arrow-right-long'
                            "
                          ></i>
                          9th - 10th Grade Transcript
                        </li>

                        <li
                          :class="
                            isDarkMode
                              ? 'text-main-400 text-lg rounded-lg bg-secondaryDark cursor-pointer'
                              : 'text-main-400 text-lg rounded-lg bg-white cursor-pointer'
                          "
                          data-bs-toggle="tooltip"
                          title=""
                        >
                          <i
                            :class="
                              isDarkMode
                                ? 'text-white  fa fa-arrow-right-long'
                                : 'fa fa-arrow-right-long'
                            "
                          ></i>
                          11th - 12th Grade Transcript
                        </li>

                        <li
                          :class="
                            isDarkMode
                              ? 'text-main-400 text-lg rounded-lg bg-secondaryDark cursor-pointer'
                              : 'text-main-400 text-lg rounded-lg bg-white cursor-pointer'
                          "
                          data-bs-toggle="tooltip"
                          title="Non-government Institutions"
                        >
                          <i
                            :class="
                              isDarkMode
                                ? 'text-white  fa fa-arrow-right-long'
                                : 'fa fa-arrow-right-long'
                            "
                          ></i>
                          Payroll Document
                        </li>

                        <li
                          :class="
                            isDarkMode
                              ? 'text-main-400 text-lg rounded-lg bg-secondaryDark cursor-pointer'
                              : 'text-main-400 text-lg rounded-lg bg-white cursor-pointer'
                          "
                          data-bs-toggle="tooltip"
                          title="For those upgraded by the sponsorship of an Institution"
                        >
                          <i
                            :class="
                              isDarkMode
                                ? 'text-white  fa fa-arrow-right-long'
                                : 'fa fa-arrow-right-long'
                            "
                          ></i>
                          Support Letter from Sponsored Institution
                        </li>

                        <li
                          :class="
                            isDarkMode
                              ? 'text-main-400 text-lg rounded-lg bg-secondaryDark cursor-pointer'
                              : 'text-main-400 text-lg rounded-lg bg-white cursor-pointer'
                          "
                          data-bs-toggle="tooltip"
                          title="Non-government Institutions"
                        >
                          <i
                            :class="
                              isDarkMode
                                ? 'text-white  fa fa-arrow-right-long'
                                : 'fa fa-arrow-right-long'
                            "
                          ></i>
                          Work Experience
                        </li>

                        <li
                          :class="
                            isDarkMode
                              ? 'text-main-400 text-lg rounded-lg bg-secondaryDark cursor-pointer'
                              : 'text-main-400 text-lg rounded-lg bg-white cursor-pointer'
                          "
                          data-bs-toggle="tooltip"
                          title="Non-government Institutions"
                        >
                          <i
                            :class="
                              isDarkMode
                                ? 'text-white  fa fa-arrow-right-long'
                                : 'fa fa-arrow-right-long'
                            "
                          ></i>
                          Academic Transcript
                        </li>
                      </ul>
                      <div class="mt-6 py-4">
                        <a href="/Applicant/NewLicense">
                          <button
                            class="
                              text-xl text-white
                              py-2
                              bg-main-400
                              hover:text-main-400 hover:border hover:bg-white
                              px-6
                              rounded-sm
                            "
                          >
                            Get Started
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pricing-plan-wrap lg:w-1/3 my-4 md:my-6 mr-4">
                  <div
                    :class="
                      isDarkMode
                        ? 'pricing-plan border-t-4 border-solid  bg-secondaryDark rounded-lg shadow-2xl text-center max-w-full mx-auto hover:border-indigo-600 transition-colors duration-300'
                        : 'pricing-plan border-t-4 border-solid border-white bg-white rounded-lg shadow-2xl text-center max-w-full mx-auto hover:border-indigo-600 transition-colors duration-300'
                    "
                  >
                    <div class="p-2 md:py-4">
                      <h4
                        :class="
                          isDarkMode
                            ? 'font-medium text-white leading-tight text-2xl border-b-4'
                            : 'font-medium text-main-400 leading-tight text-2xl border-b-4'
                        "
                      >
                        Foreign Applicants
                      </h4>
                    </div>
                    <div class="pricing-amount transition-colors duration-300">
                      <div>
                        <span
                          :class="
                            isDarkMode
                              ? 'text-xl text-white font-semibold'
                              : 'text-xl text-main-4oo font-semibold'
                          "
                          >Attached Documents must be clear and visible.</span
                        >
                      </div>
                      <small
                        :class="
                          isDarkMode ? 'text-white ml-2' : 'text-main-400 ml-2'
                        "
                        >(hover over lists to see details)</small
                      >
                    </div>

                    <div class="p-6 mb-2" v-if="NLdocumentSpecs">
                      <ul
                        :class="isDarkMode ? 'bg-secondaryDark' : 'bg-white'"
                      >
                        <li
                          :class="
                            isDarkMode
                              ? 'text-main-400 text-lg rounded-lg bg-secondaryDark cursor-pointer'
                              : 'text-main-400 text-lg rounded-lg bg-white cursor-pointer'
                          "
                          data-bs-toggle="tooltip"
                        >
                          <i
                            :class="
                              isDarkMode
                                ? 'text-white  fa fa-arrow-right-long'
                                : 'fa fa-arrow-right-long'
                            "
                          ></i>
                          Passport
                        </li>
                        <li
                          :class="
                            isDarkMode
                              ? 'text-main-400 text-lg rounded-lg bg-secondaryDark cursor-pointer'
                              : 'text-main-400 text-lg rounded-lg bg-white cursor-pointer'
                          "
                          data-bs-toggle="tooltip"
                          title="not lasting three months"
                        >
                          <i
                            :class="
                              isDarkMode
                                ? 'text-white  fa fa-arrow-right-long'
                                : 'fa fa-arrow-right-long'
                            "
                          ></i>
                          Medical Certificate
                        </li>
                        <li
                          :class="
                            isDarkMode
                              ? 'text-main-400 text-lg rounded-lg bg-secondaryDark cursor-pointer'
                              : 'text-main-400 text-lg rounded-lg bg-white cursor-pointer'
                          "
                          data-bs-toggle="tooltip"
                          title="For non english speaking countries only"
                        >
                          <i
                            :class="
                              isDarkMode
                                ? 'text-white  fa fa-arrow-right-long'
                                : 'fa fa-arrow-right-long'
                            "
                          ></i>
                          English Language Proficiency Certificate
                        </li>

                        <li
                          :class="
                            isDarkMode
                              ? 'text-main-400 text-lg rounded-lg bg-secondaryDark cursor-pointer'
                              : 'text-main-400 text-lg rounded-lg bg-white cursor-pointer'
                          "
                          data-bs-toggle="tooltip"
                          title="Equivalence letter"
                        >
                          <i
                            :class="
                              isDarkMode
                                ? 'text-white  fa fa-arrow-right-long'
                                : 'fa fa-arrow-right-long'
                            "
                          ></i>
                          Higher Education Relevance and Quality Agency
                        </li>

                        <li
                          :class="
                            isDarkMode
                              ? 'text-main-400 text-lg rounded-lg bg-secondaryDark cursor-pointer'
                              : 'text-main-400 text-lg rounded-lg bg-white cursor-pointer'
                          "
                          data-bs-toggle="tooltip"
                          title="Diploma,transcript for both undergraduates and postgraduates"
                        >
                          <i
                            :class="
                              isDarkMode
                                ? 'text-white  fa fa-arrow-right-long'
                                : 'fa fa-arrow-right-long'
                            "
                          ></i>
                          Authenticated Academic Document
                        </li>

                        <li
                          :class="
                            isDarkMode
                              ? 'text-main-400 text-lg rounded-lg bg-secondaryDark cursor-pointer'
                              : 'text-main-400 text-lg rounded-lg bg-white cursor-pointer'
                          "
                          data-bs-toggle="tooltip"
                        >
                          <i
                            :class="
                              isDarkMode
                                ? 'text-white  fa fa-arrow-right-long'
                                : 'fa fa-arrow-right-long'
                            "
                          ></i>
                          Authenticated Professional License from Country of
                          Origin
                        </li>

                        <li
                          :class="
                            isDarkMode
                              ? 'text-main-400 text-lg rounded-lg bg-secondaryDark cursor-pointer'
                              : 'text-main-400 text-lg rounded-lg bg-white cursor-pointer'
                          "
                          data-bs-toggle="tooltip"
                          title="More than two years"
                        >
                          <i
                            :class="
                              isDarkMode
                                ? 'text-white  fa fa-arrow-right-long'
                                : 'fa fa-arrow-right-long'
                            "
                          ></i>
                          Current Work Experience / Goodstanding Letter
                        </li>

                        <li
                          :class="
                            isDarkMode
                              ? 'text-main-400 text-lg rounded-lg bg-secondaryDark cursor-pointer'
                              : 'text-main-400 text-lg rounded-lg bg-white cursor-pointer'
                          "
                          data-bs-toggle="tooltip"
                          title="Foun in ethiopia"
                        >
                          <i
                            :class="
                              isDarkMode
                                ? 'text-white  fa fa-arrow-right-long'
                                : 'fa fa-arrow-right-long'
                            "
                          ></i>
                          Renewed License of Health FacilityFound in Ethiopia
                        </li>

                        <li
                          :class="
                            isDarkMode
                              ? 'text-main-400 text-lg rounded-lg bg-secondaryDark cursor-pointer'
                              : 'text-main-400 text-lg rounded-lg bg-white cursor-pointer'
                          "
                          data-bs-toggle="tooltip"
                          title="Foun in ethiopia"
                        >
                          <i
                            :class="
                              isDarkMode
                                ? 'text-white  fa fa-arrow-right-long'
                                : 'fa fa-arrow-right-long'
                            "
                          ></i>
                          Request Letter from Hiring Health Facility
                        </li>
                      </ul>
                      <div class="mt-6 py-4">
                        <a href="/Applicant/NewLicense">
                          <button
                            class="
                              text-xl text-white
                              py-2
                              bg-main-400
                              hover:text-main-400 hover:border hover:bg-white
                              px-6
                              rounded-sm
                            "
                          >
                            Get Started
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="pricing-plan-wrap lg:w-1/3 my-4 md:my-6 mr-4">
                  <div
                    :class="
                      isDarkMode
                        ? 'pricing-plan border-t-4 border-solid  bg-secondaryDark rounded-lg shadow-2xl text-center max-w-full mx-auto hover:border-indigo-600 transition-colors duration-300'
                        : 'pricing-plan border-t-4 border-solid border-white bg-white rounded-lg shadow-2xl text-center max-w-full mx-auto hover:border-indigo-600 transition-colors duration-300'
                    "
                  >
                    <div class="p-2 md:py-4">
                      <h4
                        :class="
                          isDarkMode
                            ? 'font-medium text-white leading-tight text-2xl border-b-4'
                            : 'font-medium text-main-400 leading-tight text-2xl border-b-4'
                        "
                      >
                        Ethiopian From Abroad
                      </h4>
                    </div>
                    <div class="pricing-amount transition-colors duration-300">
                      <div>
                        <span
                          :class="
                            isDarkMode
                              ? 'text-xl text-white font-semibold'
                              : 'text-xl text-main-4oo font-semibold'
                          "
                          >Attached Documents must be clear and visible.</span
                        >
                      </div>
                      <small
                        :class="
                          isDarkMode ? 'text-white ml-2' : 'text-main-400 ml-2'
                        "
                        >(hover over lists to see details)</small
                      >
                    </div>
                    <div class="p-6 mb-2" v-if="NLdocumentSpecs">
                      <ul
                        :class="isDarkMode ? 'bg-secondaryDark' : 'bg-white'"
                      >
                        <li
                          :class="
                            isDarkMode
                              ? 'text-main-400 text-lg rounded-lg bg-secondaryDark cursor-pointer'
                              : 'text-main-400 text-lg rounded-lg bg-white cursor-pointer'
                          "
                          data-bs-toggle="tooltip"
                          title="Equivalence letter"
                        >
                          <i
                            :class="
                              isDarkMode
                                ? 'text-white  fa fa-arrow-right-long'
                                : 'fa fa-arrow-right-long'
                            "
                          ></i>
                          Higher Education Relevance and Quality Agency
                        </li>

                        <li
                          :class="
                            isDarkMode
                              ? 'text-main-400 text-lg rounded-lg bg-secondaryDark cursor-pointer'
                              : 'text-main-400 text-lg rounded-lg bg-white cursor-pointer'
                          "
                          data-bs-toggle="tooltip"
                          title="Diploma,transcript for both undergraduates and postgraduates"
                        >
                          <i
                            :class="
                              isDarkMode
                                ? 'text-white  fa fa-arrow-right-long'
                                : 'fa fa-arrow-right-long'
                            "
                          ></i>
                          Authenticated Academic Document
                        </li>

                        <li
                          :class="
                            isDarkMode
                              ? 'text-main-400 text-lg rounded-lg bg-secondaryDark cursor-pointer'
                              : 'text-main-400 text-lg rounded-lg bg-white cursor-pointer'
                          "
                          data-bs-toggle="tooltip"
                          title="Proof of Ethiopian decent"
                        >
                          <i
                            :class="
                              isDarkMode
                                ? 'text-white  fa fa-arrow-right-long'
                                : 'fa fa-arrow-right-long'
                            "
                          ></i>
                          Residence ID or Passport or Yellow Card
                        </li>

                        <li
                          :class="
                            isDarkMode
                              ? 'text-main-400 text-lg rounded-lg bg-secondaryDark cursor-pointer'
                              : 'text-main-400 text-lg rounded-lg bg-white cursor-pointer'
                          "
                          data-bs-toggle="tooltip"
                          title=" "
                        >
                          <i
                            :class="
                              isDarkMode
                                ? 'text-white  fa fa-arrow-right-long'
                                : 'fa fa-arrow-right-long'
                            "
                          ></i>
                          Authenticated Professional License from Country of
                          Origin
                        </li>

                        <li
                          :class="
                            isDarkMode
                              ? 'text-main-400 text-lg rounded-lg bg-secondaryDark cursor-pointer'
                              : 'text-main-400 text-lg rounded-lg bg-white cursor-pointer'
                          "
                          data-bs-toggle="tooltip"
                          title="More than two years"
                        >
                          <i
                            :class="
                              isDarkMode
                                ? 'text-white  fa fa-arrow-right-long'
                                : 'fa fa-arrow-right-long'
                            "
                          ></i>
                          Current Work Experience/ Goodstanding Letter
                        </li>

                        <li
                          :class="
                            isDarkMode
                              ? 'text-main-400 text-lg rounded-lg bg-secondaryDark cursor-pointer'
                              : 'text-main-400 text-lg rounded-lg bg-white cursor-pointer'
                          "
                          data-bs-toggle="tooltip"
                          title=" "
                        >
                          <i
                            :class="
                              isDarkMode
                                ? 'text-white  fa fa-arrow-right-long'
                                : 'fa fa-arrow-right-long'
                            "
                          ></i>
                          Support Letter from Sponsored Institution
                        </li>
                        <li
                          :class="
                            isDarkMode
                              ? 'text-main-400 text-lg rounded-lg bg-secondaryDark cursor-pointer'
                              : 'text-main-400 text-lg rounded-lg bg-white cursor-pointer'
                          "
                          data-bs-toggle="tooltip"
                          title="not lasting three months"
                        >
                          <i
                            :class="
                              isDarkMode
                                ? 'text-white  fa fa-arrow-right-long'
                                : 'fa fa-arrow-right-long'
                            "
                          ></i>
                          Medical Certificate
                        </li>
                      </ul>
                      <div class="mt-6 py-4">
                        <a href="/Applicant/NewLicense">
                          <button
                            class="
                              text-xl text-white
                              py-2
                              bg-main-400
                              hover:text-main-400 hover:border hover:bg-white
                              px-6
                              rounded-sm
                            "
                          >
                            Get Started
                          </button>
                        </a>
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
  <!-- Renewal -->
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
    id="renewalDetail"
    tabindex="-1"
    aria-labelledby="renewalLabel"
    aria-modal="true"
    role="dialog"
  >
    <div class="modal-dialog modal-xl relative w-auto pointer-events-none">
      <div
        :class="
          isDarkMode
            ? 'modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-secondaryDark bg-clip-padding rounded-md outline-none text-current'
            : 'modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current'
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
          <h2 class="text-xl font-bold leading-normal text-main-400">
            Document specification for license renewal
          </h2>
          <button
            type="button"
            class="
              inline-block
              px-6
              py-2.5
              bg-main-400
              text-white
              font-medium
              text-lg
              leading-tight
              uppercase
              rounded
              shadow-lg
              hover:bg-white hover:text-main-400
              transition
              duration-150
              ease-in-out
            "
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            X
          </button>
        </div>
        <div class="modal-body relative p-4 overflow-y-scroll">
          <div
            :class="
              isDarkMode
                ? 'bg-primaryDark  rounded-lg p-4 md:py-12'
                : 'bg-white rounded-lg p-4 md:py-12'
            "
          >
            <div class="container mx-auto px-4">
              <div class="max-w-3xl mx-auto text-center">
                <h1
                  class="
                    text-3xl
                    md:text-4xl
                    font-medium
                    text-main-400
                    mb-4
                    border-b-4
                    md:mb-6
                  "
                >
                  Required Documents for License Renewal
                </h1>
              </div>

              <div class="lg:flex lg:-mx-4 mt-6 md:mt-12">
                <div class="pricing-plan-wrap lg:w-1/3 my-4 md:my-6 mr-4">
                  <div
                    :class="
                      isDarkMode
                        ? 'pricing-plan border-t-4 border-solid  bg-secondaryDark rounded-lg shadow-2xl text-center max-w-full mx-auto hover:border-indigo-600 transition-colors duration-300'
                        : 'pricing-plan border-t-4 border-solid border-white bg-white rounded-lg shadow-2xl text-center max-w-full mx-auto hover:border-indigo-600 transition-colors duration-300'
                    "
                  >
                    <div class="p-2 md:py-4">
                      <h4
                        :class="
                          isDarkMode
                            ? 'font-medium text-white leading-tight text-2xl border-b-4'
                            : 'font-medium text-main-400 leading-tight text-2xl border-b-4'
                        "
                      >
                        Ethiopian Applicants
                      </h4>
                    </div>
                    <div class="pricing-amount transition-colors duration-300">
                      <div>
                        <span
                          :class="
                            isDarkMode
                              ? 'text-xl text-white font-semibold'
                              : 'text-xl text-main-4oo font-semibold'
                          "
                          >Attached Documents must be clear and visible.</span
                        >
                      </div>
                      <small
                        :class="
                          isDarkMode ? 'text-white ml-2' : 'text-main-400 ml-2'
                        "
                        >(hover over lists to see details)</small
                      >
                    </div>
                    <div class="p-6 mb-2" v-if="RNdocumentSpecs">
                      <ul
                        :class="isDarkMode ? 'bg-secondaryDark' : 'bg-white'"
                      >
                        <li
                          :class="
                            isDarkMode
                              ? 'text-main-400 text-lg rounded-lg bg-secondaryDark cursor-pointer'
                              : 'text-main-400 text-lg rounded-lg bg-white cursor-pointer'
                          "
                          data-bs-toggle="tooltip"
                          title=""
                        >
                          <i
                            :class="
                              isDarkMode
                                ? 'text-white  fa fa-arrow-right-long'
                                : 'fa fa-arrow-right-long'
                            "
                          ></i>
                          Health Exam Certificate
                        </li>

                        <li
                          :class="
                            isDarkMode
                              ? 'text-main-400 text-lg rounded-lg bg-secondaryDark cursor-pointer'
                              : 'text-main-400 text-lg rounded-lg bg-white cursor-pointer'
                          "
                          data-bs-toggle="tooltip"
                          title="Found in Ethiopia"
                        >
                          <i
                            :class="
                              isDarkMode
                                ? 'text-white  fa fa-arrow-right-long'
                                : 'fa fa-arrow-right-long'
                            "
                          ></i>
                          Letter from Hiring Organization
                        </li>

                        <li
                          :class="
                            isDarkMode
                              ? 'text-main-400 text-lg rounded-lg bg-secondaryDark cursor-pointer'
                              : 'text-main-400 text-lg rounded-lg bg-white cursor-pointer'
                          "
                          data-bs-toggle="tooltip"
                          title=" "
                        >
                          <i
                            :class="
                              isDarkMode
                                ? 'text-white  fa fa-arrow-right-long'
                                : 'fa fa-arrow-right-long'
                            "
                          ></i>
                          Previous License
                        </li>

                        <li
                          :class="
                            isDarkMode
                              ? 'text-main-400 text-lg rounded-lg bg-secondaryDark cursor-pointer'
                              : 'text-main-400 text-lg rounded-lg bg-white cursor-pointer'
                          "
                          data-bs-toggle="tooltip"
                          title=" "
                        >
                          <i
                            :class="
                              isDarkMode
                                ? 'text-white  fa fa-arrow-right-long'
                                : 'fa fa-arrow-right-long'
                            "
                          ></i>
                          CPD Certificate
                        </li>

                        <li
                          :class="
                            isDarkMode
                              ? 'text-main-400 text-lg rounded-lg bg-secondaryDark cursor-pointer'
                              : 'text-main-400 text-lg rounded-lg bg-white cursor-pointer'
                          "
                          data-bs-toggle="tooltip"
                          title="More than two years"
                        >
                          <i
                            :class="
                              isDarkMode
                                ? 'text-white  fa fa-arrow-right-long'
                                : 'fa fa-arrow-right-long'
                            "
                          ></i>
                          Work Experience
                        </li>

                        <li
                          :class="
                            isDarkMode
                              ? 'text-main-400 text-lg rounded-lg bg-secondaryDark cursor-pointer'
                              : 'text-main-400 text-lg rounded-lg bg-white cursor-pointer'
                          "
                          data-bs-toggle="tooltip"
                          title=" "
                        >
                          <i
                            :class="
                              isDarkMode
                                ? 'text-white  fa fa-arrow-right-long'
                                : 'fa fa-arrow-right-long'
                            "
                          ></i>
                          Renewed License of Health Facility
                        </li>
                      </ul>
                      <div class="mt-6 py-4">
                        <a href="/Applicant/Renewal">
                          <button
                            class="
                              text-xl text-white
                              py-2
                              bg-main-400
                              hover:text-main-400 hover:border hover:bg-white
                              px-6
                              rounded-sm
                            "
                          >
                            Get Started
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="pricing-plan-wrap lg:w-1/3 my-4 md:my-6 mr-4">
                  <div
                    :class="
                      isDarkMode
                        ? 'pricing-plan border-t-4 border-solid  bg-secondaryDark rounded-lg shadow-2xl text-center max-w-full mx-auto hover:border-indigo-600 transition-colors duration-300'
                        : 'pricing-plan border-t-4 border-solid border-white bg-white rounded-lg shadow-2xl text-center max-w-full mx-auto hover:border-indigo-600 transition-colors duration-300'
                    "
                  >
                    <div class="p-2 md:py-4">
                      <h4
                        :class="
                          isDarkMode
                            ? 'font-medium text-white leading-tight text-2xl border-b-4'
                            : 'font-medium text-main-400 leading-tight text-2xl border-b-4'
                        "
                      >
                        Ethiopian From Abroad
                      </h4>
                    </div>
                    <div class="pricing-amount transition-colors duration-300">
                      <div>
                        <span
                          :class="
                            isDarkMode
                              ? 'text-xl text-white font-semibold'
                              : 'text-xl text-main-4oo font-semibold'
                          "
                          >Attached Documents must be clear and visible.</span
                        >
                      </div>
                      <small
                        :class="
                          isDarkMode ? 'text-white ml-2' : 'text-main-400 ml-2'
                        "
                        >(hover over lists to see details)</small
                      >
                    </div>
                    <div class="p-6 mb-2" v-if="RNdocumentSpecs">
                      <ul
                        :class="isDarkMode ? 'bg-secondaryDark' : 'bg-white'"
                      >
                        <li
                          :class="
                            isDarkMode
                              ? 'text-main-400 text-lg rounded-lg bg-secondaryDark cursor-pointer'
                              : 'text-main-400 text-lg rounded-lg bg-white cursor-pointer'
                          "
                          data-bs-toggle="tooltip"
                          title=""
                        >
                          <i
                            :class="
                              isDarkMode
                                ? 'text-white  fa fa-arrow-right-long'
                                : 'fa fa-arrow-right-long'
                            "
                          ></i>
                          Health Exam Certificate
                        </li>

                        <li
                          :class="
                            isDarkMode
                              ? 'text-main-400 text-lg rounded-lg bg-secondaryDark cursor-pointer'
                              : 'text-main-400 text-lg rounded-lg bg-white cursor-pointer'
                          "
                          data-bs-toggle="tooltip"
                          title=" "
                        >
                          <i
                            :class="
                              isDarkMode
                                ? 'text-white  fa fa-arrow-right-long'
                                : 'fa fa-arrow-right-long'
                            "
                          ></i>
                          CPD Certificate
                        </li>

                        <li
                          :class="
                            isDarkMode
                              ? 'text-main-400 text-lg rounded-lg bg-secondaryDark cursor-pointer'
                              : 'text-main-400 text-lg rounded-lg bg-white cursor-pointer'
                          "
                          data-bs-toggle="tooltip"
                          title=" "
                        >
                          <i
                            :class="
                              isDarkMode
                                ? 'text-white  fa fa-arrow-right-long'
                                : 'fa fa-arrow-right-long'
                            "
                          ></i>
                          Previous License
                        </li>

                        <li
                          :class="
                            isDarkMode
                              ? 'text-main-400 text-lg rounded-lg bg-secondaryDark cursor-pointer'
                              : 'text-main-400 text-lg rounded-lg bg-white cursor-pointer'
                          "
                          data-bs-toggle="tooltip"
                          title=" "
                        >
                          <i
                            :class="
                              isDarkMode
                                ? 'text-white  fa fa-arrow-right-long'
                                : 'fa fa-arrow-right-long'
                            "
                          ></i>
                          Work Experience
                        </li>
                      </ul>
                      <div class="mt-6 py-4">
                        <a href="/Applicant/Renewal">
                          <button
                            class="
                              text-xl text-white
                              py-2
                              bg-main-400
                              hover:text-main-400 hover:border hover:bg-white
                              px-6
                              rounded-sm
                            "
                          >
                            Get Started
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="pricing-plan-wrap lg:w-1/3 my-4 md:my-6 mr-4">
                  <div
                    :class="
                      isDarkMode
                        ? 'pricing-plan border-t-4 border-solid  bg-secondaryDark rounded-lg shadow-2xl text-center max-w-full mx-auto hover:border-indigo-600 transition-colors duration-300'
                        : 'pricing-plan border-t-4 border-solid border-white bg-white rounded-lg shadow-2xl text-center max-w-full mx-auto hover:border-indigo-600 transition-colors duration-300'
                    "
                  >
                    <div class="p-2 md:py-4">
                      <h4
                        :class="
                          isDarkMode
                            ? 'font-medium text-white leading-tight text-2xl border-b-4'
                            : 'font-medium text-main-400 leading-tight text-2xl border-b-4'
                        "
                      >
                        Foreign Applicants
                      </h4>
                    </div>
                    <div class="pricing-amount transition-colors duration-300">
                      <div>
                        <span
                          :class="
                            isDarkMode
                              ? 'text-xl text-white font-semibold'
                              : 'text-xl text-main-4oo font-semibold'
                          "
                          >Attached Documents must be clear and visible.</span
                        >
                      </div>
                      <small
                        :class="
                          isDarkMode ? 'text-white ml-2' : 'text-main-400 ml-2'
                        "
                        >(hover over lists to see details)</small
                      >
                    </div>
                    <div class="p-6 mb-2" v-if="RNdocumentSpecs">
                      <ul
                        :class="isDarkMode ? 'bg-secondaryDark' : 'bg-white'"
                      >
                        <li
                          :class="
                            isDarkMode
                              ? 'text-main-400 text-lg rounded-lg bg-secondaryDark cursor-pointer'
                              : 'text-main-400 text-lg rounded-lg bg-white cursor-pointer'
                          "
                          data-bs-toggle="tooltip"
                          title=""
                        >
                          <i
                            :class="
                              isDarkMode
                                ? 'text-white  fa fa-arrow-right-long'
                                : 'fa fa-arrow-right-long'
                            "
                          ></i>
                          Health Exam Certificate
                        </li>

                        <li
                          :class="
                            isDarkMode
                              ? 'text-main-400 text-lg rounded-lg bg-secondaryDark cursor-pointer'
                              : 'text-main-400 text-lg rounded-lg bg-white cursor-pointer'
                          "
                          data-bs-toggle="tooltip"
                          title=" "
                        >
                          <i
                            :class="
                              isDarkMode
                                ? 'text-white  fa fa-arrow-right-long'
                                : 'fa fa-arrow-right-long'
                            "
                          ></i>
                          CPD Certificate
                        </li>

                        <li
                          :class="
                            isDarkMode
                              ? 'text-main-400 text-lg rounded-lg bg-secondaryDark cursor-pointer'
                              : 'text-main-400 text-lg rounded-lg bg-white cursor-pointer'
                          "
                          data-bs-toggle="tooltip"
                          title=" "
                        >
                          <i
                            :class="
                              isDarkMode
                                ? 'text-white  fa fa-arrow-right-long'
                                : 'fa fa-arrow-right-long'
                            "
                          ></i>
                          Previous License
                        </li>

                        <li
                          :class="
                            isDarkMode
                              ? 'text-main-400 text-lg rounded-lg bg-secondaryDark cursor-pointer'
                              : 'text-main-400 text-lg rounded-lg bg-white cursor-pointer'
                          "
                          data-bs-toggle="tooltip"
                          title=" "
                        >
                          <i
                            :class="
                              isDarkMode
                                ? 'text-white  fa fa-arrow-right-long'
                                : 'fa fa-arrow-right-long'
                            "
                          ></i>
                          Work Experience
                        </li>
                      </ul>
                      <div class="mt-6 py-4">
                        <a href="/Applicant/Renewal">
                          <button
                            class="
                              text-xl text-white
                              py-2
                              bg-main-400
                              hover:text-main-400 hover:border hover:bg-white
                              px-6
                              rounded-sm
                            "
                          >
                            Get Started
                          </button>
                        </a>
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

  <!-- Good Standing -->
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
    id="goodStandingDetail"
    tabindex="-1"
    aria-labelledby="goodStandingDetailLabel"
    aria-modal="true"
    role="dialog"
  >
    <div class="modal-dialog modal-xl relative w-auto pointer-events-none">
      <div
        :class="
          isDarkMode
            ? 'modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-secondaryDark bg-clip-padding rounded-md outline-none text-current'
            : 'modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current'
        "
      >
        <div
          class="
            modal-header
            flex flex-shrink-0
            items-center
            justify-between
            p-4
            border-b border-grey-200
            rounded-t-md
          "
        >
          <h2 class="text-xl font-bold leading-normal text-main-400">
            Document specification for Goodstanding Letter
          </h2>
          <button
            type="button"
            class="
              inline-block
              px-6
              py-2.5
              bg-main-400
              text-white
              font-medium
              text-lg
              leading-tight
              uppercase
              rounded
              shadow-lg
              hover:bg-white hover:text-main-400
              transition
              duration-150
              ease-in-out
            "
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            X
          </button>
        </div>
        <div class="modal-body relative p-4">
          <div
            :class="
              isDarkMode
                ? 'bg-primaryDark  rounded-lg p-4 md:py-12'
                : 'bg-white rounded-lg p-4 md:py-12'
            "
          >
            <div class="container mx-auto px-4">
              <div class="max-w-3xl mx-auto text-center">
                <h1
                  class="
                    text-3xl
                    md:text-4xl
                    font-medium
                    text-main-400
                    mb-4
                    md:mb-6
                  "
                >
                  Required Documents for Goodstanding letter
                </h1>
              </div>

              <div class="lg:flex lg:-mx-4 mt-6 md:mt-12 justify-center">
                <div class="pricing-plan-wrap lg:w-1/2 my-4 md:my-6">
                  <div
                    :class="
                      isDarkMode
                        ? 'pricing-plan border-t-4 border-solid  bg-secondaryDark rounded-lg shadow-2xl text-center max-w-full mx-auto hover:border-indigo-600 transition-colors duration-300'
                        : 'pricing-plan border-t-4 border-solid border-white bg-white rounded-lg shadow-2xl text-center max-w-full mx-auto hover:border-indigo-600 transition-colors duration-300'
                    "
                  >
                    <div class="p-6 md:py-8">
                      <h4
                        :class="
                          isDarkMode
                            ? '  font-medium text-white leading-tight text-2xl border-b-4 mb-2'
                            : '  font-medium text-main-400 leading-tight text-2xl border-b-4 mb-2'
                        "
                      >
                        For all applicants
                      </h4>
                    </div>
                    <div
                      class="
                        pricing-amount
                        bg-indigo-100
                        p-6
                        transition-colors
                        duration-300
                      "
                    >
                      <div>
                        <span
                          :class="
                            isDarkMode
                              ? 'text-2xl text-white font-semibold'
                              : 'text-2xl text-black font-semibold'
                          "
                          >Attached Documents must be clear and visible.</span
                        >
                      </div>
                      <small
                        :class="
                          isDarkMode ? 'text-white ml-2' : 'text-main-400 ml-2'
                        "
                        >(hover over lists to see details)</small
                      >
                    </div>
                    <div class="p-6" v-if="GSdocumentSpecs">
                      <ul
                        v-for="doc in GSdocumentSpecs"
                        :key="doc.id"
                        class="leading-loose"
                      >
                        <li
                          :class="
                            isDarkMode
                              ? '   text-main-400 text-lg mb-2 bg-secondaryDark p-2 cursor-pointer'
                              : 'text-main-400 text-lg mb-2 bg-white p-2 cursor-pointer'
                          "
                          data-bs-toggle="tooltip"
                          :title="
                            doc && doc.documentType
                              ? doc.documentType.description
                              : ''
                          "
                        >
                          <i
                            :class="
                              isDarkMode
                                ? 'text-white  fa fa-arrow-right-long'
                                : 'fa fa-arrow-right-long'
                            "
                          ></i>
                          {{
                            doc && doc.documentType ? doc.documentType.name : ""
                          }}
                        </li>
                      </ul>
                      <div class="mt-6 py-4">
                        <a href="/Applicant/GoodStanding">
                          <button
                            class="
                              text-xl text-white
                              py-2
                              bg-main-400
                              hover:text-main-400 hover:border hover:bg-white
                              px-6
                              rounded-sm
                            "
                          >
                            Get Started
                          </button>
                        </a>
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
</template>

<script>
import { ref, onMounted } from "vue";
import SideNav from "./Sidebar.vue";
import TopNav from "./Header.vue";
import { googleApi } from "@/composables/baseURL";
import "../../../styles/applicant.css";
import { useStore } from "vuex";
export default {
  components: { SideNav, TopNav },
  setup(props, { emit }) {
    const store = useStore();
    const id = +localStorage.getItem("userId");
    let isFirstTime = ref(false);
    let userInfo = ref({});
    let isDarkMode = ref(JSON.parse(localStorage.getItem("darkMode")));

    let NLdocumentSpecs = ref({
      ethiopian: {},
      foreigner: {},
      ethiopianAbroad: {},
    });
    let RNdocumentSpecs = ref({
      ethiopian: {},
      foreigner: {},
      ethiopianAbroad: {},
    });
    let GSdocumentSpecs = ref({
      ethiopian: {},
      foreigner: {},
      ethiopianAbroad: {},
    });
    const getProfile = () => {
      store.dispatch("profile/getProfileByUserId", id).then((res) => {
        getImage(res.data.data);
        getName(res.data.data);
      });
    };
    const getName = (profile) => {
      if (profile) {
        userInfo.value.fullName = profile.name + " " + profile.fatherName;
      }
    };
    const getImage = (profile) => {
      if (!profile) {
        isFirstTime.value = true;
      } else {
        userInfo.value.pic = profile.profilePicture
          ? googleApi + profile.profilePicture.filePath
          : "";
      }
    };
    onMounted(() => {
      getProfile();
      initiateDarkMode();
      if (JSON.parse(localStorage.getItem("darkMode")) == true) {
        document.getElementById("mainContent").classList.add("dark-mode");
        document.getElementById("activeMenu").classList.add("dark-mode");
        document.getElementById("mainSideBar").classList.add("dark-mode");
        document.getElementById("menu-icon").classList.add("dark-mode");
        document.getElementById("home").classList.add("dark-mode");
        document.querySelector("body").classList.add("dark-mode");
        document.getElementById("options-menu").classList.add("dark-mode");
      }
      store.dispatch("lookups/getAllDocumentSpecs").then((res) => {
        if (res.data.status == "Success") {
          // NewLicense Section
          NLdocumentSpecs.value.ethiopian = res.data.data.filter(
            (element) =>
              element.applicantType.code == "ETH" &&
              element.isRequired == true &&
              element.applicationCategory.code == "NA" &&
              element.parentDocument == null
          );
          NLdocumentSpecs.value.foreigner = res.data.data.filter(
            (element) =>
              element.applicantType.code == "FOR" &&
              element.isRequired == true &&
              element.applicationCategory.code == "NA" &&
              element.parentDocument == null
          );
          NLdocumentSpecs.value.ethiopianAbroad = res.data.data.filter(
            (element) =>
              element.applicantType.code == "ETHABRO" &&
              element.isRequired == true &&
              element.applicationCategory.code == "NA" &&
              element.parentDocument == null
          );

          // Renewal Section
          RNdocumentSpecs.value.ethiopian = res.data.data.filter(
            (element) =>
              element.applicantType.code == "ETH" &&
              element.isRequired == true &&
              element.applicationCategory.code == "RA" &&
              element.parentDocument == null &&
              element.educationalLevel &&
              element.educationalLevel.code == "BACH"
          );
          RNdocumentSpecs.value.foreigner = res.data.data.filter(
            (element) =>
              element.applicantType.code == "FOR" &&
              element.isRequired == true &&
              element.applicationCategory.code == "RA" &&
              element.parentDocument == null &&
              element.educationalLevel &&
              element.educationalLevel.code == "BACH"
          );
          RNdocumentSpecs.value.ethiopianAbroad = res.data.data.filter(
            (element) =>
              element.applicantType.code == "ETHABRO" &&
              element.isRequired == true &&
              element.applicationCategory.code == "RA" &&
              element.parentDocument == null &&
              element.educationalLevel &&
              element.educationalLevel.code == "BACH"
          );

          //Good Standing section
          GSdocumentSpecs.value = res.data.data.filter(
            (element) =>
              element.applicantType.code == "ETH" &&
              element.isRequired == true &&
              element.applicationCategory.code == "GSL" &&
              element.parentDocument == null &&
              element.educationalLevel &&
              element.educationalLevel.id == 2
          );
        }
      });
    });
    const dark = () => {
      document.getElementById("mainContent").classList.add("dark-mode");
      document.getElementById("activeMenu").classList.add("dark-mode");
      document.getElementById("mainSideBar").classList.add("dark-mode");
      document.getElementById("menu-icon").classList.add("dark-mode");
      document.getElementById("home").classList.add("dark-mode");
      document.querySelector("body").classList.add("dark-mode");
      document.getElementById("options-menu").classList.add("dark-mode");
      isDarkMode.value = true;
      localStorage.setItem("darkMode", JSON.stringify(isDarkMode.value));
    };

    const light = () => {
      document.getElementById("mainContent").classList.remove("dark-mode");
      document.getElementById("activeMenu").classList.remove("dark-mode");
      document.getElementById("mainSideBar").classList.remove("dark-mode");
      document.getElementById("menu-icon").classList.remove("dark-mode");
      document.getElementById("home").classList.remove("dark-mode");
      document.querySelector("body").classList.remove("dark-mode");
      document.getElementById("options-menu").classList.remove("dark-mode");
      isDarkMode.value = false;
      localStorage.setItem("darkMode", JSON.stringify(isDarkMode.value));
    };
    const initiateDarkMode = () => {
      if (JSON.parse(localStorage.getItem("darkMode")) == true) {
        dark();
      } else {
        light();
      }
    };
    const modeToggle = () => {
      if (
        localStorage.getItem("darkMode") == true ||
        isDarkMode.value ||
        document.getElementById("main")?.classList.contains("dark-mode")
      ) {
        light();
      } else {
        dark();
      }
    };
    return {
      userInfo,
      NLdocumentSpecs,
      RNdocumentSpecs,
      GSdocumentSpecs,
      modeToggle,
      isDarkMode,
    };
  },
};
</script>
<style scoped>
.overview-boxes .box:hover {
  align-items: center;
  justify-content: center;
  width: calc(100% / 4 - 15px);
  padding: 15px 14px;
  border-radius: 12px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.884);
}
</style>
