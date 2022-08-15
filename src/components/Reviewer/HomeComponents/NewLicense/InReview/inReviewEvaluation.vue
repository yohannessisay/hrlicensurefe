<template>
  <!-- Sidebar -->
  <reviewer-side-nav />
  <!-- Sidebar -->

  <section class="home-section">
    <!-- Header -->
    <reviewer-nav-bar>
      <h2 class="dashboard">Evaluate</h2>
    </reviewer-nav-bar>
    <!-- Header -->

    <!-- Main Content -->
    <div class="home-content">
      <div class="container mx-auto px-4 sm:px-4 mb-12">
        <div class="rounded-lg bg-primary-800 w-full shadow-md">
          <h2 class="text-white ml-4">
            Evaluating
            {{
              newLicense && newLicense.profile && newLicense.profile.name
                ? newLicense.profile.name
                : ""
            }}
            's License
          </h2>
          <div class="w-full">
            <div class="box-shadow-pop bg-lightGrey-100">
              <div class="flex justify-content-evenly">
                <div
                  class="
                    p-4
                    w-64
                    h-40
                    mt-8
                    ml-8
                    shadow-lg
                    container
                    box-shadow-pop
                    rounded-lg
                  "
                >
                  <div class="mt-8">
                    <div class="my-auto flex justify-center items-center">
                      <h2 class="text-3xl">
                        {{ accepted.length }}
                      </h2>
                    </div>
                    <div class="flex justify-center items-center">
                      <h2 class="text-3xl">Accepted</h2>
                    </div>
                  </div>
                </div>
                <div class="flex justify-start mt-4 flex-wrap p-4">
                  <div class="box-shadow-pop bg-lightGrey-100 mb-8 p-4">
                    <picture
                      class="flex justify-center items-center mb-small"
                      v-if="docs.length > 0"
                    >
                      <span
                        v-if="
                          newLicense &&
                            newLicense.profile &&
                            newLicense.profile.profilePicture != '' &&
                            newLicense.profile.profilePicture != null
                        "
                      >
                        <img
                          :src="
                            newLicense && newLicense.profile
                              ? newLicense.profile.profilePicture
                              : ''
                          "
                          alt="profile"
                          class="w-20 h-12"
                        />
                      </span>
                      <span v-else>
                        <img
                          class="box-shadow-pop"
                          src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp"
                        />
                      </span>
                    </picture>
                    <div class="flex justify-center items-center">
                      <div class="mt-2 mr-small w-1/2">
                        <h4 class="text-left text-primary-600">
                          Applicant Name:
                        </h4>
                        <h4 class="text-left ml-3">
                          {{
                            newLicense.profile
                              ? newLicense.profile.name
                                ? newLicense.profile.name +
                                  " " +
                                  (newLicense.profile.fatherName
                                    ? newLicense.profile.fatherName
                                    : "-")
                                : "-"
                              : "-"
                          }}
                        </h4>
                      </div>
                      <div class="mt-2 ml-small w-1/2">
                        <h4 class="text-left text-primary-600">Department:</h4>
                        <h4 class="text-left ml-3">
                          {{
                            newLicense.department
                              ? newLicense.department.name
                              : newLicense.education
                              ? newLicense.education.department
                                ? newLicense.education.department.name
                                : "-"
                              : "-"
                          }}
                        </h4>
                      </div>
                    </div>
                    <div class="flex justify-center items-center">
                      <div class="mt-2 mr-small w-1/2" v-if="!isGoodStanding">
                        <h4 class="text-left text-primary-600">Institution:</h4>
                        <h4 class="text-left ml-3">
                          {{
                            newLicense.education
                              ? newLicense.otherEducationalInstitution
                                ? newLicense.otherEducationalInstitution
                                : newLicense.education.institution.name
                              : "-"
                          }}
                        </h4>
                      </div>

                      <div class="mt-2 ml-small w-1/2" v-if="!isGoodStanding">
                        <h4 class="text-left text-primary-600">
                          Institution Type:
                        </h4>
                        <h4 class="text-left ml-3">
                          {{
                            newLicense.education
                              ? newLicense.education.institution
                                ? newLicense.education.institution
                                    .institutionType
                                  ? newLicense.education.institution
                                      .institutionType.name
                                  : "-"
                                : "-"
                              : "-"
                          }}
                        </h4>
                      </div>
                    </div>
                    <div class="">
                      <svg
                        width="40"
                        height="60"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        @click="previous()"
                        v-if="index != 0"
                      >
                        <polyline
                          points="30 10 10 30 30 50"
                          stroke="rgba(103,128,159,1)"
                          stroke-width="3"
                          stroke-linecap="butt"
                          fill="none"
                          stroke-linejoin="round"
                        >
                          &gt;
                        </polyline>
                      </svg>
                    </div>

                    <div class="flex flex-col justify-center items-center">
                      <div class="mt-8">
                        <label
                          v-if="!showButtons"
                          class="
                            justify-center
                            items-center
                            text-grey-200 text-2xl
                          "
                        >
                          {{ documentTypeName }}
                        </label>

                        <div
                          class="container my-2 mx-auto px-4 md:px-4"
                          v-if="showButtons"
                        >
                          <div class="flex flex-wrap md:-mx-4 lg:-mx-8">
                            <!-- Personal Info card -->
                            <div class="my-1 mx-4 w-full mb-4">
                              <!-- Article -->
                              <article
                                class="overflow-hidden rounded-lg shadow-lg"
                              >
                                <header
                                  class="
                                    flex
                                    items-center
                                    justify-between
                                    leading-tight
                                    p-2
                                    md:p-4
                                  "
                                >
                                  <h2 class="font-bold">
                                    Personal Information
                                    <span
                                      @click="
                                        editPersonalData = !editPersonalData
                                      "
                                      ><i
                                        class="
                                          fa fa-pencil
                                          cursor-pointer
                                          ml-4
                                          text-yellow-300
                                        "
                                      ></i
                                      >Edit Amharic Name</span
                                    >
                                  </h2>
                                  <i
                                    class="fa fa-user fa-2x text-primary-600"
                                  ></i>
                                </header>
                                <hr class="text-grey-100" />
                                <div
                                  class="
                                    container
                                    flex
                                    items-center
                                    justify-between
                                    leading-tight
                                    p-2
                                    md:p-4
                                  "
                                >
                                  <div class="font-bold">Full Name</div>

                                  <div>
                                    {{
                                      (profileInfo.name
                                        ? profileInfo.name
                                        : "-") +
                                        " " +
                                        (profileInfo.fatherName
                                          ? profileInfo.fatherName
                                          : "-") +
                                        " " +
                                        (profileInfo.grandFatherName
                                          ? profileInfo.grandFatherName
                                          : "-")
                                    }}
                                  </div>
                                </div>
                                <div
                                  class="
                                    container
                                    flex
                                    items-center
                                    justify-between
                                    leading-tight
                                    p-2
                                    md:p-4
                                  "
                                >
                                  <div class="font-bold">
                                    Full Name In Amharic
                                  </div>
                                  <div v-if="editPersonalData">
                                    <input
                                      v-model="
                                        newLicense.profile.alternativeName
                                      "
                                      class="w-48 mr-1"
                                      type="text"
                                    />
                                  </div>
                                  <div v-if="editPersonalData">
                                    <input
                                      v-model="
                                        newLicense.profile.alternativeFatherName
                                      "
                                      class="w-48 mr-1"
                                      type="text"
                                    />
                                  </div>
                                  <div v-if="editPersonalData">
                                    <input
                                      v-model="
                                        newLicense.profile
                                          .alternativeGrandFatherName
                                      "
                                      class="w-48"
                                      type="text"
                                    />
                                  </div>
                                  <div class="vld-parent">
                                    <loading
                                      :active="isLoadingName"
                                      :is-full-page="false"
                                      :color="'#2F639D'"
                                      :opacity="1"
                                    ></loading>
                                    <button
                                      v-if="editPersonalData"
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
                                      @click="changeAmharicName"
                                    >
                                      Save
                                    </button>
                                  </div>

                                  <div v-if="!editPersonalData">
                                    {{
                                      (profileInfo.alternativeName
                                        ? profileInfo.alternativeName
                                        : "-") +
                                        " " +
                                        (profileInfo.alternativeFatherName
                                          ? profileInfo.alternativeFatherName
                                          : "-") +
                                        " " +
                                        (profileInfo.alternativeGrandFatherName
                                          ? profileInfo.alternativeGrandFatherName
                                          : "-")
                                    }}
                                  </div>
                                </div>
                                <div
                                  class="
                                    container
                                    flex
                                    items-center
                                    justify-between
                                    leading-tight
                                    p-2
                                    md:p-4
                                  "
                                >
                                  <div class="font-bold">Nationality</div>
                                  <div>
                                    {{
                                      profileInfo.nationality
                                        ? profileInfo.nationality.name
                                        : "-"
                                    }}
                                  </div>
                                </div>

                                <div
                                  class="
                                    container
                                    flex
                                    items-center
                                    justify-between
                                    leading-tight
                                    p-2
                                    md:p-4
                                  "
                                >
                                  <div class="font-bold">gender</div>
                                  <div>
                                    {{
                                      profileInfo.gender
                                        ? profileInfo["gender"]
                                        : "-"
                                    }}
                                  </div>
                                </div>

                                <div
                                  class="
                                    container
                                    flex
                                    items-center
                                    justify-between
                                    leading-tight
                                    p-2
                                    md:p-4
                                  "
                                >
                                  <div class="font-bold">Martial Status</div>
                                  <div>
                                    {{
                                      profileInfo.maritalStatus
                                        ? profileInfo.maritalStatus.name
                                        : "-"
                                    }}
                                  </div>
                                </div>
                                <hr class="text-grey-100" />
                                <footer
                                  class="
                                    flex
                                    items-center
                                    justify-center
                                    leading-none
                                    p-2
                                    md:p-4
                                  "
                                >
                                  {{ new Date().toISOString().slice(0, 10) }}
                                </footer>
                              </article>
                              <!-- END Article -->
                            </div>
                            <!-- Personal Info card -->
                            <!-- Contact card -->
                            <div
                              class="
                                my-1
                                mb-4
                                px-1
                                w-full
                                md:w-1/2
                                lg:my-4 lg:px-4 lg:w-1/2
                              "
                            >
                              <!-- Article -->
                              <article
                                class="overflow-hidden rounded-lg shadow-lg"
                              >
                                <header
                                  class="
                                    flex
                                    items-center
                                    justify-between
                                    leading-tight
                                    p-2
                                    md:p-4
                                  "
                                >
                                  <h2 class="font-bold">Contact Information</h2>
                                  <i
                                    class="fa fa-phone text-primary-600 fa-2xl"
                                  ></i>
                                </header>
                                <hr class="text-grey-100" />
                                <div
                                  class="
                                    container
                                    flex
                                    items-center
                                    justify-between
                                    leading-tight
                                    p-2
                                    md:p-4
                                  "
                                >
                                  <div class="font-bold">Mobile Number</div>
                                  <div>
                                    {{
                                      newLicense && newLicense.applicant
                                        ? newLicense.applicant.phoneNumber
                                        : "---"
                                    }}
                                  </div>
                                </div>

                                <div
                                  class="
                                    container
                                    flex
                                    items-center
                                    justify-between
                                    leading-tight
                                    p-2
                                    md:p-4
                                    mb-12
                                  "
                                >
                                  <div class="font-bold mb-1">Email</div>
                                  <div>
                                    {{
                                      newLicense && newLicense.applicant
                                        ? newLicense.applicant.emailAddress
                                        : "---"
                                    }}
                                  </div>
                                </div>
                              </article>
                              <!-- END Article -->
                            </div>
                            <!-- Contact card -->

                            <!-- Institution Card -->
                            <div
                              class="
                                my-1
                                px-1
                                w-full
                                md:w-1/2
                                lg:my-4 lg:px-4 lg:w-1/2
                              "
                            >
                              <!-- Article -->
                              <article
                                class="overflow-hidden rounded-lg shadow-lg"
                              >
                                <header
                                  class="
                                    flex
                                    items-center
                                    justify-between
                                    leading-tight
                                    p-2
                                    md:p-4
                                  "
                                >
                                  <h2 class="font-bold">
                                    Institution Informatiom
                                  </h2>
                                  <i
                                    class="
                                      fa fa-building
                                      text-primary-600
                                      fa-2xl
                                    "
                                  ></i>
                                </header>
                                <hr class="text-grey-100" />
                                <div
                                  class="
                                    container
                                    flex
                                    items-center
                                    justify-between
                                    leading-tight
                                    p-2
                                    md:p-4
                                  "
                                >
                                  <div class="font-bold">Department</div>
                                  <div>
                                    {{
                                      newLicense.department
                                        ? newLicense.department.name
                                        : newLicense.education
                                        ? newLicense.education.department
                                          ? newLicense.education.department.name
                                          : "-"
                                        : "-"
                                    }}
                                  </div>
                                </div>

                                <div
                                  class="
                                    container
                                    flex
                                    items-center
                                    justify-between
                                    leading-tight
                                    p-2
                                    md:p-4
                                  "
                                >
                                  <div class="font-bold">Institution Name</div>
                                  <div>
                                    {{
                                      newLicense.otherEducationalInstitution
                                        ? newLicense.otherEducationalInstitution
                                        : newLicense.education
                                        ? newLicense.education.institution
                                          ? newLicense.education.institution
                                              .name
                                          : "-"
                                        : "-"
                                    }}
                                  </div>
                                </div>

                                <div
                                  class="
                                    container
                                    flex
                                    items-center
                                    justify-between
                                    leading-tight
                                    p-2
                                    md:p-4
                                  "
                                >
                                  <div class="font-bold">Institution Type</div>
                                  <div>
                                    {{
                                      newLicense &&
                                      newLicense.education &&
                                      newLicense.education.institution &&
                                      newLicense.education.institution
                                        .institutionType
                                        ? newLicense.education.institution
                                            .institutionType.name
                                        : "--------------"
                                    }}
                                  </div>
                                </div>
                              </article>
                              <!-- END Article -->
                            </div>
                            <!-- Institution Card -->
                            <!-- Profession Card -->
                            <div class="my-1 mx-4 w-full mb-4">
                              <!-- Article -->
                              <article
                                class="overflow-hidden rounded-lg shadow-lg"
                              >
                                <header
                                  class="
                                    flex
                                    items-center
                                    justify-between
                                    leading-tight
                                    p-2
                                    md:p-4
                                  "
                                >
                                  <h2 class="font-bold">
                                    Professional Information
                                  </h2>
                                  <i
                                    class="
                                      fa fa-briefcase
                                      text-primary-600
                                      fa-2xl
                                    "
                                  ></i>
                                </header>
                                <hr class="text-grey-100 mb-2" />
                                <div class="flex flex-row">
                                  <div
                                    v-if="
                                      newLicense?.licenseProfessions?.length > 0
                                    "
                                  >
                                    <div
                                      class="flex flex-col mb-medium mr-12 ml-8"
                                    >
                                      <div
                                        style="
                                          background: lightgray;
                                          padding: 8px;
                                        "
                                      >
                                        <p style="color: blue">
                                          Previous Professional Types
                                        </p>
                                      </div>

                                      <ul
                                        v-for="(professionName,
                                        index) in newLicense.licenseProfessions"
                                        v-bind:key="
                                          professionName.professionalTypeId
                                        "
                                        v-bind:value="
                                          professionName.professionalTypeId
                                        "
                                      >
                                        <div class="grid grid-cols-1">
                                          <li>
                                            <input
                                              v-on:click="
                                                checkBoxClicked(
                                                  professionName,
                                                  true,
                                                  index,
                                                  $event
                                                )
                                              "
                                              type="checkbox"
                                              class="form-checkbox"
                                              name="ckb"
                                              :checked="
                                                professionName.showPrefixLink
                                              "
                                            />
                                            {{
                                              professionName.professionalTypes
                                                .name
                                            }}
                                            |
                                            {{
                                              professionName.professionalTypes
                                                .amharicProfessionalType
                                            }}
                                          </li>
                                          <a
                                            class="ml-5"
                                            style="
                                              text-decoration: underline;
                                              font-style: italic;
                                            "
                                            @click="
                                              professionName.showPrefix = !professionName.showPrefix
                                            "
                                            v-show="
                                              professionName.showPrefixLink
                                            "
                                            >{{
                                              professionName.showPrefix
                                                ? "Hide Prefix?"
                                                : "Show Prefix?"
                                            }}</a
                                          >
                                        </div>
                                        <div
                                          class="
                                            grid grid-cols-2
                                            gap-4
                                            mb-4
                                            ml-8
                                            mt-2
                                          "
                                        >
                                          <div
                                            style="
                                              float: left;
                                              border-right: 1px solid lightgray;
                                            "
                                            v-if="
                                              professionName.professionalTypes
                                                .name == 'Other'
                                            "
                                          >
                                            <label style="display: block"
                                              >Other professional Type
                                              Name:</label
                                            >
                                            <input
                                              style="display: block"
                                              type="text"
                                              v-model="
                                                newLicense.otherProfessionalType
                                              "
                                            />
                                          </div>
                                          <div
                                            style="float: left"
                                            v-show="
                                              professionName.showPrefixLink &&
                                                professionName.showPrefix
                                            "
                                          >
                                            <label style="display: block"
                                              >Prefix:</label
                                            >
                                            <select
                                              style="display: block"
                                              class="select"
                                              @change="
                                                addPrefix(
                                                  professionName.professionalTypeId,
                                                  $event
                                                )
                                              "
                                              :v-model="
                                                selectedOption + `${index}`
                                              "
                                            >
                                              <option
                                                v-for="prefix in prefixList"
                                                v-bind:key="prefix.id"
                                                v-bind:value="prefix.name"
                                              >
                                                {{ prefix.name }}
                                              </option>
                                            </select>
                                          </div>
                                        </div>
                                      </ul>
                                      <div
                                        style="
                                          background: lightgray;
                                          padding: 8px;
                                        "
                                      >
                                        <p style="color: blue">
                                          New Professional Types
                                        </p>
                                      </div>

                                      <ul
                                        v-for="(newProfessionName,
                                        index) in professionalTypes"
                                        v-bind:key="newProfessionName.id"
                                        v-bind:value="newProfessionName.id"
                                      >
                                        <div class="grid grid-cols-1">
                                          <li>
                                            <input
                                              v-on:click="
                                                checkBoxClicked(
                                                  newProfessionName,
                                                  false,
                                                  index,
                                                  $event
                                                )
                                              "
                                              type="checkbox"
                                              class="form-checkbox"
                                              name="nckb"
                                            />
                                            {{ newProfessionName.name }} |
                                            {{
                                              newProfessionName.amharicProfessionalType
                                            }}
                                          </li>
                                          <a
                                            class="ml-5"
                                            style="
                                              text-decoration: underline;
                                              font-style: italic;
                                            "
                                            @click="
                                              newProfessionName.showPrefix = !newProfessionName.showPrefix
                                            "
                                            v-show="
                                              newProfessionName.showPrefixLink
                                            "
                                            >{{
                                              newProfessionName.showPrefix
                                                ? "Hide Prefix?"
                                                : "Show Prefix?"
                                            }}</a
                                          >
                                        </div>
                                        <div
                                          class="
                                            grid grid-cols-2
                                            gap-4
                                            mb-4
                                            ml-8
                                            mt-2
                                          "
                                        >
                                          <div
                                            style="
                                              float: left;
                                              border-right: 1px solid lightgray;
                                            "
                                            v-if="
                                              newProfessionName.showPrefixLink &&
                                                newProfessionName.name ==
                                                  'Other'
                                            "
                                          >
                                            <label style="display: block"
                                              >other profession name</label
                                            >
                                            <input
                                              style="display: block"
                                              type="text"
                                              v-model="
                                                newLicense.otherProfessionalType
                                              "
                                            />
                                          </div>
                                          <div
                                            style="float: left"
                                            v-show="
                                              newProfessionName.showPrefixLink &&
                                                newProfessionName.showPrefix
                                            "
                                          >
                                            <label style="display: block"
                                              >Prefix:</label
                                            >
                                            <select
                                              style="display: block"
                                              @change="
                                                addPrefix(
                                                  newProfessionName.id,
                                                  $event
                                                )
                                              "
                                              :v-model="
                                                newSelectedOptions + `${index}`
                                              "
                                            >
                                              <option
                                                v-for="prefix in prefixList"
                                                v-bind:key="prefix.name"
                                                v-bind:value="prefix.name"
                                              >
                                                {{ prefix.name }}
                                              </option>
                                            </select>
                                          </div>
                                        </div>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </article>
                              <!-- END Article -->
                            </div>
                            <!-- Profession Card -->
                            <!-- licesne Exp Card -->
                            <div class="my-1 mx-4 w-full">
                              <!-- Article -->
                              <article
                                class="overflow-hidden rounded-lg shadow-lg"
                              >
                                <header
                                  class="
                                    flex
                                    items-center
                                    justify-between
                                    leading-tight
                                    p-2
                                    md:p-4
                                  "
                                >
                                  <h2 class="font-bold">
                                    License Expiration Date
                                  </h2>
                                  <i
                                    class="
                                      fa fa-calendar fa-2x
                                      text-primary-600
                                    "
                                  ></i>
                                </header>
                                <hr class="text-grey-100" />

                                <div
                                  class="
                                    container
                                    flex
                                    items-center
                                    justify-between
                                    leading-tight
                                    p-2
                                    md:p-4
                                  "
                                >
                                  <input
                                    class="max-w-3xl mr-5"
                                    type="date"
                                    v-model="newLicense.licenseExpirationDate"
                                  />
                                </div>
                                <hr class="text-grey-100" />
                                <footer
                                  class="
                                    flex
                                    items-center
                                    justify-center
                                    leading-none
                                    p-2
                                    md:p-4
                                  "
                                >
                                  License Expiration date minimum value should
                                  be set after today
                                </footer>
                              </article>
                              <!-- END Article -->
                            </div>
                            <!-- licesne Exp Card -->
                          </div>
                        </div>

                        <div v-else class="flex justify-start flex-wrap">
                          <div>
                            <picture v-if="docs.length > 0">
                              <div
                                v-if="
                                  docs[index].fileName.split('.')[1] == 'pdf'
                                "
                              >
                                <div>
                                  <iframe
                                    v-bind:src="
                                      googleApi + '' + docs[index].filePath
                                    "
                                  ></iframe>
                                </div>
                                <br />
                                <a
                                  @click="openPdfInNewTab(docs[index].filePath)"
                                  >see pdf in detail</a
                                >
                              </div>

                              <div v-else>
                                <img
                                  class="
                                    scale-50
                                    hover:scale-75
                                    ease-in
                                    duration-500
                                  "
                                  style="height: 600px; width: 800px"
                                  v-bind:src="
                                    googleApi + '' + docs[index].filePath
                                  "
                                />
                                <div style="width: 400px"></div>
                              </div>
                            </picture>
                          </div>
                          <div
                            class="flex content-center justify-center pb-large"
                            v-if="docs.length == 0"
                          >
                            <h2>No Documents To Show!!</h2>
                          </div>
                        </div>
                      </div>
                      <div class="mt-medium" v-if="!showButtons">
                        <button
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
                          @click="accept(docs[index])"
                        >
                          Accept
                        </button>
                        <button
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
                            active:bg-white active:shadow-lg
                            hover:bg-red-300 hover:text-white
                            transition
                            duration-150
                            ease-in-out
                          "
                          @click="reject(docs[index])"
                        >
                          Reject
                        </button>
                        <button
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
                            hover:bg-yellow-300 hover:text-white
                            ease-in-out
                          "
                          @click="action('ReviewerDraftEvent')"
                        >
                          Save as Draft
                        </button>
                        <button
                          v-if="showTransferToAdminButton"
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
                            hover:bg-primary-400 hover:text-white
                            ease-in-out
                          "
                          @click="transferToFederal()"
                        >
                          Transfer to Federal
                        </button>
                      </div>
                      <div class="relative pt-1 mt-medium">
                        <div class="flex items-center justify-between">
                          <radial-progress-bar
                            :diameter="200"
                            :completed-steps="completedSteps"
                            :total-steps="totalSteps"
                          >
                            {{ completedSteps }} Completed/{{ totalSteps }}
                          </radial-progress-bar>
                        </div>
                      </div>

                      <div>
                        <div
                          class="
                            ml-10
                            h-3
                            relative
                            max-w-xl
                            rounded-full
                            overflow-hidden
                          "
                        >
                          <div class="w-full h-full absolute"></div>
                          <div
                            id="bar"
                            class="
                              transition-all
                              ease-out
                              duration-1000
                              h-full
                              bg-green-500
                              relative
                              w-0
                            "
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="
                    w-64
                    h-40
                    mt-8
                    p-4
                    mr-8
                    shadow-lg
                    container
                    box-shadow-pop
                    rounded-lg
                  "
                >
                  <div class="mt-8">
                    <div class="my-auto flex justify-center items-center">
                      <h2 class="text-red-300 text-3xl">
                        {{ rejected.length }}
                      </h2>
                    </div>
                    <div class="flex justify-center items-center">
                      <h2 class="text-red-300 text-3xl">Rejected</h2>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="flex justify-center items-center mb-medium"
                v-if="showButtons && !showLoadingButtons"
              >
                <div
                  v-for="button in buttons"
                  v-bind:key="button.name"
                  v-bind:value="button.id"
                >
                  <div class="vld-parent">
                    <loading
                      :active="isLoadingFinalAction"
                      :is-full-page="false"
                      :color="'#2F639D'"
                      :opacity="1"
                    ></loading>
                    <button
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
                        hover:bg-primary-400 hover:text-white
                        ease-in-out
                      "
                      @click="action(button.action)"
                    >
                      {{ button.name }}
                    </button>
                  </div>
                </div>
              </div>

              <Modal v-if="showRemark">
                <div>
                  <div
                    class="
                      card-wrapper
                      bg-white
                      sm:rounded-lg
                      w-full
                      flex
                      justify-center
                      relative
                      mb-xl
                      mt-large
                    "
                  >
                    <div class="">
                      <!--content-->
                      <div class="w-full">
                        <!--header-->
                        <div
                          class="
                            flex
                            items-start
                            justify-between
                            border-b border-solid border-blueGray-200
                            mt-medium
                            rounded-t
                          "
                        >
                          <h3 class="text-3xl font-semibold">Remark</h3>
                          <div
                            class="
                              bg-transparent
                              border-0
                              text-black
                              opacity-5
                              float-right
                              text-3xl
                              leading-none
                              font-semibold
                              outline-none
                              focus:outline-none
                            "
                            v-on:click="toggleModal()"
                          >
                            <span
                              class="
                                bg-transparent
                                text-black
                                opacity-5
                                h-6
                                w-6
                                text-2xl
                                block
                                outline-none
                                focus:outline-none
                              "
                            >
                              ×
                            </span>
                          </div>
                        </div>
                        <!--body-->
                        <div class="modalBody pb-xl">
                          <div class="flex mt-medium justify-center"></div>
                          <div class="relative p-6 flex-auto w-full">
                            <div class="flex justify-center">
                              <div class="">
                                <svg
                                  width="40"
                                  height="60"
                                  xmlns="http://www.w3.org/2000/svg"
                                  version="1.1"
                                  @click="previousRemark()"
                                  v-if="ind != 0"
                                >
                                  <polyline
                                    points="30 10 10 30 30 50"
                                    stroke="rgba(103,128,159,1)"
                                    stroke-width="3"
                                    stroke-linecap="butt"
                                    fill="none"
                                    stroke-linejoin="round"
                                  >
                                    &gt;
                                  </polyline>
                                </svg>
                              </div>

                              <div
                                class="
                                  flex flex-col
                                  justify-center
                                  items-center
                                "
                              >
                                <div class="mt-8">
                                  <label
                                    class="
                                      justify-center
                                      items-center
                                      text-grey-200 text-2xl
                                    "
                                  >
                                    {{ modalDocumentTypeName }}
                                  </label>
                                  <div
                                    class="
                                      flex
                                      justify-center
                                      flex-wrap
                                      max-w-sm
                                      rounded
                                      overflow-hidden
                                    "
                                  >
                                    <picture
                                      class="imageViewer"
                                      v-if="rejectedObj.length > 0"
                                    >
                                      <img
                                        v-bind:src="
                                          googleApi +
                                            '' +
                                            rejectedObj[ind].filePath
                                        "
                                      />
                                    </picture>
                                  </div>
                                </div>
                              </div>

                              <div>
                                <svg
                                  width="40"
                                  height="60"
                                  xmlns="http://www.w3.org/2000/svg"
                                  version="1.1"
                                  @click="nextRemark()"
                                  v-if="ind != rejected.length - 1"
                                  class="hover:text-primary-60"
                                >
                                  <polyline
                                    points="10 10 30 30 10 50"
                                    stroke="rgba(103,128,159,1)"
                                    stroke-width="3"
                                    stroke-linecap="butt"
                                    fill="none"
                                    stroke-linejoin="round"
                                  >
                                    &gt;
                                  </polyline>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!--footer-->
                        <textarea
                          v-model="newLicense.remark"
                          class="
                            resize-none
                            tArea
                            border
                            rounded-md
                            flex
                            mb-small
                            w-full
                          "
                        ></textarea>
                        <div
                          class="
                            flex
                            items-center
                            justify-center
                            p-6
                            border-t border-solid border-blueGray-200
                            rounded-b
                          "
                        >
                          <button
                            class="md-danger"
                            type="button"
                            v-on:click="toggleModal()"
                          >
                            Close
                          </button>
                          <button type="button" v-on:click="submitRemark()">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div v-if="showDeclineFlash">
                    <FlashMessage message="Operation Successful!" />
                  </div>
                  <div v-if="showErrorFlash">
                    <ErrorFlashMessage message="Operation Failed!" />
                  </div>
                </div>
              </Modal>
              <div v-if="showFlash">
                <FlashMessage message="Operation Successful!" />
              </div>
              <div v-if="showErrorFlash">
                <ErrorFlashMessage message="Operation Failed!" />
              </div>
              <div v-if="showOtherProfessionError">
                <ErrorFlashMessage
                  message="Please type other profession type in the input field"
                />
              </div>
              <div v-if="showNameChangeFlash">
                <FlashMessage message="name change Successful!" />
              </div>
              <div v-if="showNameChangeErrorFlash">
                <ErrorFlashMessage message="name change Failed!" />
              </div>
              <div v-if="showLicenseDateRequirementError">
                <ErrorFlashMessage message="Please add Expiration date!" />
              </div>
              <div v-if="showProfessionChangeError">
                <ErrorFlashMessage
                  message="you can't change profession if you are not approving"
                />
              </div>
              <div v-if="expirationDateExceedTodayError">
                <ErrorFlashMessage
                  message="Error! license expiration date must exceed today"
                />
              </div>
              <div v-if="showTransferSuccessMessage">
                <FlashMessage message="Transfer Successful!" />
              </div>
              <div v-if="showTransferErrorMessage">
                <ErrorFlashMessage
                  message="Error! Couldn't transfer to federal"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Main Content -->
  </section>
</template>
<script>
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import { googleApi } from "@/composables/baseURL";
import Modal from "@/sharedComponents/Modal";
import { useToast } from "vue-toastification";

import moment from "moment";
import ReviewerSideNav from "../SharedComponents/sideNav.vue";
import ReviewerNavBar from "../SharedComponents/navBar.vue";

import FlashMessage from "@/sharedComponents/FlashMessage";
import Loading from "vue3-loading-overlay";
// Import stylesheet
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import ErrorFlashMessage from "@/sharedComponents/ErrorFlashMessage";
import RadialProgressBar from "vue3-radial-progress";
export default {
  components: {
    Modal,
    Loading,
    ReviewerSideNav,
    ReviewerNavBar,
    FlashMessage,
    RadialProgressBar,
    ErrorFlashMessage
  },
  computed: {
    moment: () => moment
  },
  setup() {
    const route = useRoute();
    const store = useStore();
    const toast = useToast();
    const router = useRouter();
    const options = ref([0, 1, 2]);
    const selectedOptions = ref([0]);
    const newSelectedOptions = ref([0]);
    let isPdf = ref(false);
    let isLoadingFinalAction = ref(false);
    let pdfFilePath = ref("");
    const completedSteps = ref(0);
    const totalSteps = ref(0);
    let isGoodStanding = ref(false);

    let expirationDateExceedTodayError = ref(false);
    let isProfessionalTypeChanged = ref(false);

    let otherProfessionalType = ref();
    let showOtherProfessionError = ref(false);

    let professionalTypeIds = ref([]);
    let professionalTypeIdss = ref([]);
    let prefixList = ref([
      { name: "None", id: 0 },
      { name: "Consultant", id: 1 },
      { name: "Expert", id: 2 },
      { name: "Junior", id: 3 },
      { name: "Senior", id: 4 },
      { name: "Senior expert", id: 5 },
      { name: "Chief", id: 6 },
      { name: "Chief expert", id: 7 }
    ]);
    let prefix = ref();
    let canChangeName = ref(false);
    let showProfessionChangeError = ref(false);

    let showNameChangeFlash = ref(false);
    let showNameChangeErrorFlash = ref(false);
    let showTransferErrorMessage = ref(false);
    let showTransferSuccessMessage = ref(false);
    let showLicenseDateRequirementError = ref(false);
    let departmentId = ref(0);
    let adminId = localStorage.getItem("adminId");

    let newLicense = ref({
      applicant: { profile: { name: "", fatherName: "" } },
      applicantType: { name: "" },
      education: {
        department: { name: "" },
        institution: { institutionType: {}, name: "" }
      },
      declinedFields: "",
      remark: "",
      documents: [{ filePath: "" }],
      applicationStatus: {
        buttons: [{ action: "", name: "" }]
      }
    });
    let buttons = ref([
      { action: "", name: "" },
      { action: "", name: "" },
      { action: "", name: "" },
      { action: "", name: "" }
    ]);
    let isLoadingName = ref(false);
    let professionalTypePrefixes = ref([]);

    let documentTypes = ref([]);
    let documentTypeName = ref("");
    let modalDocumentTypeName = ref("");
    let docs = ref([]);
    let index = ref(0);
    let ind = ref(0);
    let amount = ref(1);
    let width = ref("width:11.11111%");
    let accepted = ref([]);
    let rejected = ref([]);
    let showTransferToAdminButton = ref(false);
    let rejectedObj = ref([]);
    let showButtons = ref(false);
    let disableNext = ref(true);
    let nextClickable = ref(false);
    let foundInRejected = ref(false);
    let foundInAcceptted = ref(false);
    let isToChangeProfession = ref(false);
    let profileInfo = ref({});
    let activeClass = ref("active");
    let errorClass = ref("text-danger");
    let showRemark = ref(false);
    let applicationType = ref("");
    let showFlash = ref(false);
    let showErrorFlash = ref(false);
    let showDeclineFlash = ref(false);
    let sendDeclinedData = ref(true);
    let fromModalSendDeclinedData = ref(false);

    let showActionLoading = ref(false);
    let showLoadingButtons = ref(false);

    let professionalTypes = ref([]);
    let evaluateRoute = ref("/admin/evaluate/NewLicense" + route.params.id);
    const editPersonalData = ref(false);
    const editPersonalInfo = () => {
      editPersonalData.value = !editPersonalData.value;
    };
    const created = async applicationId => {
      applicationType.value = "New License";

      store
        .dispatch("reviewer/getNewLicenseApplication", applicationId)
        .then(res => {
          newLicense.value = res.data.data ? res.data.data : {};
          departmentId.value =
            res.data.data &&
            res.data.data.education &&
            res.data.data.education.department
              ? res.data.data.education.department.id
              : "";
          getProfessionalTypesByDepartmentId(departmentId.value);
          profileInfo.value =
            newLicense.value && newLicense.value.profile
              ? newLicense.value.profile
              : {};
          buttons.value =
            newLicense.value &&
            newLicense.value.applicationStatus &&
            newLicense.value.applicationStatus.buttons
              ? newLicense.value.applicationStatus.buttons
              : {};
          docs.value =
            newLicense.value && newLicense.value.documents
              ? newLicense.value.documents
              : {};
          totalSteps.value = docs.value ? docs.value.length : 0;
          fetchDocumentTypes();
          if (newLicense.value && newLicense.value.licenseProfessions) {
            for (
              let i = 0;
              i < newLicense.value.licenseProfessions.length;
              i++
            ) {
              newLicense.value.licenseProfessions[i].showPrefix = false;
              newLicense.value.licenseProfessions[i].showPrefixLink = true;
              professionalTypeIdss.value.push(
                newLicense.value.licenseProfessions[i].professionalTypeId
              );
            }
          }

          if (
            newLicense.value &&
            newLicense.value.applicationStatus.code == "REVDRA"
          ) {
            rejected.value = newLicense.value.declinedFields;
            for (let i in newLicense.value.documents) {
              for (let j in rejected.value) {
                if (
                  newLicense.value.documents[i].documentTypeCode ==
                  rejected.value[j]
                ) {
                  rejectedObj.value.push(newLicense.value.documents[i]);
                  break;
                }
              }
            }
            if (rejected.value > 0) {
              for (let i = 0; i < buttons.value.length; i++) {
                if (buttons.value[i].code === "APP") {
                  buttons.value.splice(i, 1);
                  i--;
                }
              }
            }

            accepted.value = newLicense.value.acceptedFields;
            completedSteps.value = accepted.value.length;
            index.value = rejected.value.length + accepted.value.length;
            if (index.value == docs.value.length) {
              index.value -= 1;
            }
            amount.value = ((index.value + 1) / docs.value.length) * 100;
            width.value = "width:" + amount.value + "%";
            if (
              accepted.value.includes(
                docs.value[index.value - 1].documentTypeCode
              ) ||
              rejected.value.includes(
                docs.value[index.value - 1].documentTypeCode
              )
            ) {
              findDocumentType(documentTypes.value, docs.value[index.value]);
            }
          } else if (
            newLicense.value &&
            newLicense.value.applicationStatus.code == "IRV"
          ) {
            showTransferToAdminButton.value = true;
          }
        });

      applicationType.value = "New License";
    };
    const fetchDocumentTypes = async () => {
      store.dispatch("reviewer/getDocumentTypes").then(res => {
        documentTypes.value = res.data.data;
        findDocumentType(documentTypes.value, docs.value[0]);
      });
    };
    const next = doc => {
      if (nextClickable.value == true) {
        index.value = index.value + 1;
        amount.value = ((index.value + 1) / docs.value.length) * 100;
        width.value = "width:" + amount.value + "%";
        findDocumentType(documentTypes.value, docs.value[index.value]);
        nextClickable.value = false;
      }
      if (
        accepted.value.includes(doc.documentTypeCode) ||
        rejected.value.includes(doc.documentTypeCode)
      ) {
        nextClickable.value = true;
      }
    };
    const previous = () => {
      if (index.value == docs.value.length - 1) {
        showButtons.value = false;
      }
      index.value = index.value - 1;
      amount.value = ((index.value + 1) / docs.value.length) * 100;
      width.value = "width:" + amount.value + "%";
      findDocumentType(documentTypes.value, docs.value[index.value]);
      nextClickable.value = true;
    };
    const nextRemark = () => {
      if (ind.value != rejectedObj.value.length - 1) {
        ind.value = ind.value + 1;
        modalFindDocumentType(
          documentTypes.value,
          rejectedObj.value[ind.value]
        );
        nextClickable.value = false;
      }
    };
    const previousRemark = () => {
      ind.value = ind.value - 1;
      modalFindDocumentType(documentTypes.value, rejectedObj.value[ind.value]);
      nextClickable.value = true;
    };
    const findDocumentType = (obj, ab) => {
      for (var prop in obj) {
        if (
          obj[prop].code == ab && ab.documentTypeCode ? ab.documentTypeCode : ""
        ) {
          documentTypeName.value = obj[prop].name;
        }
      }
    };

    const modalFindDocumentType = (obj, ab) => {
      for (var prop in obj) {
        if (obj[prop].code == ab.documentTypeCode) {
          modalDocumentTypeName.value = obj[prop].name;
        }
      }
    };
    const transferToFederal = () => {
      store.dispatch("newlicense/getExpertLevel").then(res => {
        let federalData = res.data.data.filter(r => r.code == "FED");
        let transferData = {
          licenseId: route.params.id,
          expertLevelId: federalData[0].id,
          createdByAdminId: adminId
        };
        store.dispatch("reviewer/transferToFederal", transferData).then(res => {
          if (res.data?.status == "Success") {
            toast.success("Application transfered Successfully", {
              timeout: 5000,
              position: "bottom-center",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true
            });
          } else {
            toast.error("Failed to transfer application", {
              timeout: 5000,
              position: "bottom-center",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true
            });
          }
        });
      });
    };

    const accept = doc => {
      nextClickable.value = true;
      completedSteps.value += 1;
      if (accepted.value.length > 0) {
        if (!accepted.value.includes(doc.documentTypeCode)) {
          accepted.value.push(doc.documentTypeCode);
          if (index.value == docs.value.length - 1) {
            showButtons.value = true;
          } else {
            index.value = index.value + 1;
            amount.value = ((index.value + 1) / docs.value.length) * 100;
            width.value = "width:" + amount.value + "%";
            findDocumentType(documentTypes.value, docs.value[index.value]);
          }
          if (rejected.value.includes(doc.documentTypeCode)) {
            rejected.value.splice(
              rejected.value.indexOf(doc.documentTypeCode),
              1
            );
            rejectedObj.value.splice(rejectedObj.value.indexOf(doc), 1);
          }
        } else {
          if (index.value == docs.value.length - 1) {
            showButtons.value = true;
          } else {
            index.value = index.value + 1;
            amount.value = ((index.value + 1) / docs.value.length) * 100;
            width.value = "width:" + amount.value + "%";
            findDocumentType(documentTypes.value, docs.value[index.value]);
          }
        }
      } else {
        accepted.value.push(doc.documentTypeCode);
        if (index.value == docs.value.length - 1) {
          showButtons.value = true;
        } else {
          index.value = index.value + 1;
          amount.value = ((index.value + 1) / docs.value.length) * 100;
          width.value = "width:" + amount.value + "%";
          findDocumentType(documentTypes.value, docs.value[index.value]);
        }
        if (rejected.value.includes(doc.documentTypeCode)) {
          rejected.value.splice(
            rejected.value.indexOf(doc.documentTypeCode),
            1
          );
          rejectedObj.value.splice(rejectedObj.value.indexOf(doc), 1);
        }
      }
    };

    const reject = doc => {
      completedSteps.value += 1;
      nextClickable.value = true;
      for (let i = 0; i < buttons.value.length; i++) {
        if (buttons.value[i].code === "APP") {
          buttons.value.splice(i, 1);
          i--;
        }
      }

      if (rejected.value.length > 0) {
        if (!rejected.value.includes(doc.documentTypeCode)) {
          rejected.value.push(doc.documentTypeCode);
          rejectedObj.value.push(doc);
          if (index.value == docs.value.length - 1) {
            showButtons.value = true;
          } else {
            index.value = index.value + 1;
            amount.value = ((index.value + 1) / docs.value.length) * 100;
            width.value = "width:" + amount.value + "%";
            findDocumentType(documentTypes.value, docs.value[index.value]);
          }
          if (accepted.value.includes(doc.documentTypeCode)) {
            accepted.value.splice(
              accepted.value.indexOf(doc.documentTypeCode),
              1
            );
          }
        } else {
          if (index.value == docs.value.length - 1) {
            showButtons.value = true;
          } else {
            index.value = index.value + 1;
            amount.value = ((index.value + 1) / docs.value.length) * 100;
            width.value = "width:" + amount.value + "%";
            findDocumentType(documentTypes.value, docs.value[index.value]);
          }
        }
      } else {
        rejected.value.push(doc.documentTypeCode);
        rejectedObj.value.push(doc);
        if (index.value == docs.value.length - 1) {
          showButtons.value = true;
        } else {
          index.value = index.value + 1;
          amount.value = ((index.value + 1) / docs.value.length) * 100;
          width.value = "width:" + amount.value + "%";
          findDocumentType(documentTypes.value, docs.value[index.value]);
        }
        if (accepted.value.includes(doc.documentTypeCode)) {
          accepted.value.splice(
            accepted.value.indexOf(doc.documentTypeCode),
            1
          );
        }
      }
    };

    const action = actionValue => {
      let goTo = "admin/newLicense/underSupervision";
      showActionLoading.value = true;
      showLoadingButtons.value = true;
      if (professionalTypeIdss.value.length > 0) {
        newLicense.value.professionalTypeIds = professionalTypeIdss.value;
        newLicense.value.professionalTypePrefixes =
          professionalTypePrefixes.value;
      } else {
        showProfessionChangeError.value = true;
        setTimeout(() => {
          showProfessionChangeError.value = false;
        }, 4000);
        professionalTypeIdss.value = [];
        professionalTypePrefixes.value = [];
        showActionLoading.value = false;
        showLoadingButtons.value = false;
        return;
      }

      let loopCounter = 0;

      for (let i = 0; i < professionalTypeIdss.value.length; i++) {
        let professionId = professionalTypeIdss.value[i];
        for (
          let j = 0;
          j < newLicense.value.professionalTypePrefixes.length;
          j++
        ) {
          if (
            newLicense.value.professionalTypePrefixes[j].professionalTypeId !=
            professionId
          ) {
            loopCounter++;
          }
        }
        if (loopCounter == newLicense.value.professionalTypePrefixes.length) {
          newLicense.value.professionalTypePrefixes.push({
            professionalTypeId: professionId,
            prefix: null
          });
        }
        loopCounter = 0;
      }
      isLoadingFinalAction.value = true;
      if (actionValue === "ApproveEvent") {
        goTo = "/admin/newLicense/approved";
        if (
          newLicense.value.licenseExpirationDate === null &&
          !isGoodStanding.value
        ) {
          toast.warning("Please fill in license expiration date", {
            timeout: 5000,
            position: "bottom-center",
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            icon: true
          });
          showActionLoading.value = false;
          showLoadingButtons.value = false;
          isLoadingFinalAction.value = false;
          return;
        } else if (
          !moment(newLicense.value.licenseExpirationDate).isAfter(new Date()) &&
          !isGoodStanding.value
        ) {
          toast.warning("License expiration date must exceed today", {
            timeout: 5000,
            position: "bottom-center",
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            icon: true
          });
          showActionLoading.value = false;
          showLoadingButtons.value = false;
          isLoadingFinalAction.value = false;
          return;
        }
      }

      if (actionValue == "DeclineEvent") {
        goTo = "/admin/newLicense/declined";
        showActionLoading.value = false;
        showLoadingButtons.value = false;
        let checkProfessionResult = false;
        newLicense.value.isProfessionChanged == false
          ? (checkProfessionResult = checkProfessionChanged(
              newLicense.value.licenseProfessions
            ))
          : (checkProfessionResult = true);

        if (checkProfessionResult) {
          showProfessionChangeError.value = true;
          setTimeout(() => {
            showProfessionChangeError.value = false;
          }, 4000);
          showActionLoading.value = false;
          showLoadingButtons.value = false;
          isLoadingFinalAction.value = false;
          return;
        } else {
          showRemark.value = true;
          sendDeclinedData.value = false;
          if (fromModalSendDeclinedData.value == true) {
            sendDeclinedData.value = true;
          }
        }
      }

      if (actionValue == "ReviewerDraftEvent") {
        goTo = "/admin/newLicense/draft";
        let checkProfessionResult = false;
        newLicense.value.isProfessionChanged == false
          ? (checkProfessionResult = checkProfessionChanged(
              newLicense.value.licenseProfessions
            ))
          : (checkProfessionResult = true);

        if (checkProfessionResult) {
          newLicense.value.isProfessionChanged = true;
        }
      }

      if (prefix.value !== undefined) {
        newLicense.value.prefix = prefix.value;
      }
      if (professionalTypeIdss.value.length > 0) {
        newLicense.value.professionalTypeIds = professionalTypeIdss.value;
        newLicense.value.professionalTypePrefixes =
          professionalTypePrefixes.value;
      }
      newLicense.value.declinedFields = rejected.value;
      newLicense.value.acceptedFields = accepted.value;
      newLicense.value.certified = true;
      newLicense.value.certifiedDate = new Date();
      let req = {
        action: actionValue,
        data: newLicense.value
      };
      if (
        applicationType.value == "New License" &&
        sendDeclinedData.value == true
      ) {
        store
          .dispatch("reviewer/editNewLicense", req)
          .then(res => {
            showActionLoading.value = false;
            if (res.statusText == "Created") {
              toast.success("Application reviewed Successfully", {
                timeout: 5000,
                position: "bottom-center",
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                icon: true
              });
              isLoadingFinalAction.value = false;
              router.push({ path: goTo });
            } else {
              toast.error("Please try again", {
                timeout: 5000,
                position: "bottom-center",
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                icon: true
              });
              isLoadingFinalAction.value = false;
              router.push({ path: "admin/newLicense/inReview" });
            }
          })
          .catch(() => {
            isLoadingFinalAction.value = false;
            toast.error("Please try again", {
              timeout: 5000,
              position: "bottom-center",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true
            });
            setTimeout(() => {
              window.location.reload();
            }, 3000);
          });
      }
    };

    const submitRemark = () => {
      showRemark.value = !showRemark.value;
      sendDeclinedData.value = true;
      fromModalSendDeclinedData.value = true;
      action("DeclineEvent");
    };

    const toggleModal = () => {
      showRemark.value = !showRemark.value;
    };

    const openPdfInNewTab = pdfPath => {
      pdfFilePath.value = pdfPath;
      window.open(googleApi + "" + pdfPath, "_blank");
    };

    const toChangeProfession = () => {
      isToChangeProfession.value = true;
    };
    const cancelProfessionChange = () => {
      isToChangeProfession.value = false;
    };
    const changeProfession = () => {};

    const getProfessionalTypesByDepartmentId = id => {
      let professionSelected = ref(false);
      store
        .dispatch("reviewer/getProfessionalTypeByDepartmentId", id)
        .then(res => {
          res.data.data
            .filter(function(e) {
              for (let i in newLicense.value
                ? newLicense.value.licenseProfessions
                : {}) {
                if (
                  e.code ===
                  newLicense.value.licenseProfessions[i].professionalTypes.code
                ) {
                  professionSelected.value = true;
                }
              }
              if (!professionSelected.value) {
                professionalTypes.value.push(e);
              }
              professionSelected.value = false;
            })
            .map(mapData => {
              mapData.showPrefix = false;
              mapData.showPrefixLink = false;
              return mapData;
            });
        });
    };
    const allowChangeName = () => {
      canChangeName.value = true;
    };
    const disallowChangeName = () => {
      canChangeName.value = false;
    };
    const changeAmharicName = () => {
      isLoadingName.value = true;
      const id = profileInfo.value.id;
      let newProfile = {
        alternativeName: newLicense.value.profile.alternativeName,
        alternativeFatherName: newLicense.value.profile.alternativeFatherName,
        alternativeGrandFatherName:
          newLicense.value.profile.alternativeGrandFatherName
      };
      const profileData = [id, newProfile];
      store
        .dispatch("profile/changeUserProfile", profileData)
        .then(() => {
          canChangeName.value = false;
          toast.success("Name change was Successfull", {
            timeout: 5000,
            position: "bottom-center",
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            icon: true
          });
          isLoadingName.value = false;
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        })
        .catch(() => {
          toast.error("Error Occured", {
            timeout: 5000,
            position: "bottom-center",
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            icon: true
          });
          isLoadingName.value = false;
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        });
    };

    const checkResult = ref(false);
    const checkBoxClicked = (profession, previousProfession, index, event) => {
      checkResult.value = chkcontrol(index, previousProfession, event);
      if (checkResult.value) {
        if (event.target.checked) {
          previousProfession
            ? (newLicense.value.licenseProfessions[index].showPrefixLink = true)
            : (professionalTypes.value[index].showPrefixLink = true);
          previousProfession
            ? professionalTypeIdss.value.push(profession.professionalTypes.id)
            : professionalTypeIdss.value.push(profession.id);
        } else {
          previousProfession
            ? (newLicense.value.licenseProfessions[
                index
              ].showPrefixLink = false)
            : (professionalTypes.value[index].showPrefixLink = false);
          previousProfession
            ? professionalTypeIdss.value.splice(
                professionalTypeIdss.value.indexOf(
                  profession.professionalTypes.id
                ),
                1
              )
            : professionalTypeIdss.value.splice(
                professionalTypeIdss.value.indexOf(profession.id),
                1
              );

          if (previousProfession) {
            professionalTypePrefixes.value = professionalTypePrefixes.value.filter(
              data => {
                return (
                  data.professionalTypeId != profession.professionalTypes.id
                );
              }
            );
          } else {
            professionalTypePrefixes.value = professionalTypePrefixes.value.filter(
              data => {
                return data.professionalTypeId != profession.id;
              }
            );
          }

          if (
            previousProfession &&
            profession.professionalTypes.name == "Other"
          ) {
            newLicense.value.otherProfessionalType = null;
          } else if (!previousProfession && profession.name == "Other") {
            newLicense.value.otherProfessionalType = null;
          }
        }
      }
    };

    const chkcontrol = (j, previousProfession, event) => {
      if (event.target.checked) {
        if (professionalTypeIdss.value.length == 3) {
          alert("You can only select 3 professional types.");
          if (previousProfession) {
            document.getElementsByName("ckb")[j].checked = false;
            return false;
          } else {
            document.getElementsByName("nckb")[j].checked = false;
            return false;
          }
        }

        return true;
      }

      return true;
    };

    let countProLength = ref(0);
    const addPrefix = (professionId, event) => {
      if (professionalTypePrefixes.value.length === 0) {
        professionalTypePrefixes.value.push({
          professionalTypeId: professionId,
          prefix: event.target.value
        });
        return;
      }

      for (let i = 0; i < professionalTypePrefixes.value.length; i++) {
        if (
          professionId !== professionalTypePrefixes.value[i].professionalTypeId
        ) {
          countProLength.value++;
          if (countProLength.value === professionalTypePrefixes.value.length) {
            professionalTypePrefixes.value.push({
              professionalTypeId: professionId,
              prefix: event.target.value
            });
            countProLength.value = 0;
            return;
          }
        } else {
          professionalTypePrefixes.value.splice(
            professionalTypePrefixes.value.indexOf({
              professionalTypeId: professionId
            }),
            1
          );
          if (event.target.value === "None") {
            return;
          }
          professionalTypePrefixes.value.push({
            professionalTypeId: professionId,
            prefix: event.target.value
          });
          countProLength.value = 0;
          return;
        }
      }
    };

    const checkProfessionChanged = previousProfessionType => {
      let count = 0;
      if (
        previousProfessionType &&
        professionalTypeIdss &&
        previousProfessionType.length != professionalTypeIdss.value.length
      ) {
        return true;
      } else {
        for (let i = 0; i < previousProfessionType.length; i++) {
          for (let j = 0; j < previousProfessionType.length; j++) {
            if (
              previousProfessionType[i].professionalTypeId !=
              professionalTypeIdss.value[j]
            ) {
              count++;
            }
          }
          if (count == previousProfessionType.length) {
            return true;
          } else {
            count = 0;
          }
        }
      }
      return false;
    };

    onMounted(() => {
      created(route.params.id);
    });
    return {
      isPdf,
      newLicense,
      index,
      docs,
      next,
      previous,
      nextRemark,
      previousRemark,
      amount,
      width,
      documentTypes,
      findDocumentType,
      documentTypeName,
      accepted,
      rejected,
      accept,
      transferToFederal,
      showTransferToAdminButton,
      showTransferSuccessMessage,
      showTransferErrorMessage,
      reject,
      buttons,
      action,
      showButtons,
      isToChangeProfession,
      profileInfo,
      disableNext,
      nextClickable,
      foundInRejected,
      foundInAcceptted,
      showRemark,
      toggleModal,
      activeClass,
      errorClass,
      submitRemark,
      applicationType,
      showFlash,
      isLoadingName,
      showErrorFlash,
      showDeclineFlash,
      sendDeclinedData,
      fromModalSendDeclinedData,
      rejectedObj,
      completedSteps,
      totalSteps,
      ind,
      modalDocumentTypeName,
      modalFindDocumentType,
      evaluateRoute,
      pdfFilePath,
      openPdfInNewTab,
      toChangeProfession,
      cancelProfessionChange,
      changeProfession,
      professionalTypes,
      canChangeName,
      allowChangeName,
      disallowChangeName,
      changeAmharicName,
      showNameChangeFlash,
      showNameChangeErrorFlash,
      showLicenseDateRequirementError,
      professionalTypeIds,
      showProfessionChangeError,
      expirationDateExceedTodayError,
      prefixList,
      prefix,
      professionalTypeIdss,
      checkBoxClicked,
      addPrefix,
      options,
      editPersonalData,
      editPersonalInfo,
      selectedOptions,
      newSelectedOptions,
      otherProfessionalType,
      showOtherProfessionError,
      chkcontrol,
      checkResult,
      isProfessionalTypeChanged,
      checkProfessionChanged,
      isGoodStanding,
      showActionLoading,
      showLoadingButtons,
      googleApi
    };
  }
};
</script>
<style scoped>
.shadow-lg {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 34%), 0 2px 4px -1px rgb(0 0 0 / 6%);
}
</style>
