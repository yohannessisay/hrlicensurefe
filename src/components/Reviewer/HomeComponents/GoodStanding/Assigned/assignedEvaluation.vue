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
              goodStanding && goodStanding.profile && goodStanding.profile.name
                ? goodStanding.profile.name
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
                          goodStanding &&
                          goodStanding.profile &&
                          goodStanding.profile.profilePicture != '' &&
                          goodStanding.profile.profilePicture != null
                        "
                      >
                        <img
                          :src="
                            goodStanding && goodStanding.profile
                              ? goodStanding.profile.profilePicture
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
                            goodStanding.profile
                              ? goodStanding.profile.name
                                ? goodStanding.profile.name +
                                  " " +
                                  (goodStanding.profile.fatherName
                                    ? goodStanding.profile.fatherName
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
                            goodStanding.department
                              ? goodStanding.department.name
                              : goodStanding.education
                              ? goodStanding.education.department
                                ? goodStanding.education.department.name
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
                                        goodStanding.profile.alternativeName
                                      "
                                      class="w-48 mr-1"
                                      type="text"
                                    />
                                  </div>
                                  <div v-if="editPersonalData">
                                    <input
                                      v-model="
                                        goodStanding.profile
                                          .alternativeFatherName
                                      "
                                      class="w-48 mr-1"
                                      type="text"
                                    />
                                  </div>
                                  <div v-if="editPersonalData">
                                    <input
                                      v-model="
                                        goodStanding.profile
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
                                mb-3
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
                                      goodStanding && goodStanding.applicant
                                        ? goodStanding.applicant.phoneNumber
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
                                    mb-10
                                  "
                                >
                                  <div class="font-bold mb-1">Email</div>
                                  <div>
                                    {{
                                      goodStanding && goodStanding.applicant
                                        ? goodStanding.applicant.emailAddress
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
                                    mb-24
                                  "
                                >
                                  <div class="font-bold">Department</div>
                                  <div>
                                    {{
                                      goodStanding.department
                                        ? goodStanding.department.name
                                        : goodStanding.education
                                        ? goodStanding.education.department
                                          ? goodStanding.education.department
                                              .name
                                          : "-"
                                        : "-"
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
                                      goodStanding.GSProfessionals?.length > 0
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
                                        v-for="(
                                          professionName, index
                                        ) in goodStanding.GSProfessionals"
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
                                              professionName.showPrefix =
                                                !professionName.showPrefix
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
                                                goodStanding.otherProfessionalType
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
                                        v-for="(
                                          newProfessionName, index
                                        ) in professionalTypes"
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
                                              newProfessionName.showPrefix =
                                                !newProfessionName.showPrefix
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
                                              newProfessionName.name == 'Other'
                                            "
                                          >
                                            <label style="display: block"
                                              >Other profession name*</label
                                            >
                                            <input
                                              style="display: block"
                                              type="text"
                                              v-model="
                                                goodStanding.otherProfessionalType
                                              "
                                            />
                                            <label style="display: block"
                                              >Other profession name
                                              (Amharic)*</label
                                            >
                                            <input
                                              style="display: block"
                                              type="text"
                                              v-model="
                                                goodStanding.otherProfessionalTypeAmharic
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
                            py-2.5
                            bg-primary-700
                            hover:text-primary-600 hover:bg-white hover:border
                            text-white
                            font-medium
                            text-xs
                            leading-tight
                            uppercase
                            rounded
                            shadow-lg
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
                            py-2.5
                            bg-red-300
                            hover:text-red-300 hover:bg-white hover:border
                            text-white
                            font-medium
                            text-xs
                            leading-tight
                            uppercase
                            rounded
                            shadow-lg
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
                            py-2.5
                            bg-yellow-300
                            hover:text-yellow-300 hover:bg-white hover:border
                            text-white
                            font-medium
                            text-xs
                            leading-tight
                            uppercase
                            rounded
                            shadow-lg
                            transition
                            duration-150
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
                            py-2.5
                            bg-primary-700
                            hover:text-primary-600 hover:bg-white hover:border
                            text-white
                            font-medium
                            text-xs
                            leading-tight
                            uppercase
                            rounded
                            shadow-lg
                            transition
                            duration-150
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
                      v-if="button.code != 'US'"
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
                        bg-primary-700
                        hover:text-primary-600
                        hover:border
                        transition
                        duration-150
                      
                        ease-in-out
                      "
                      @click="action(button.action)"
                    >
                      {{ button.name }}
                    </button>
                    <button
                      v-else
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
                        bg-yellow-300 
                        hover:border hover:text-yellow-300
                     
                        transition
                        duration-150
                      
                        ease-in-out
                      "
                      data-bs-toggle="modal"
                      data-bs-target="#superviseModal"
                      @click="changeAction(button.action)"
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
                          v-model="goodStanding.remark"
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
    id="superviseModal"
    tabindex="-1"
    aria-labelledby="superviseModalTitle"
    aria-modal="true"
    role="dialog"
  >
    <div
      class="
        modal-dialog modal-dialog-centered
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
            Supervise Detail
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
        <div class="modal-body relative p-4">
          <label for="" class="ml-2">Institution </label>
          <label class="block text-left mb-4">
            <div>
              <div class="w-full relative">
                <div
                  class="
                    mt-1
                    ml-1
                    relative
                    border border-gray-300
                    overflow-hidden
                    rounded-md
                    shadow-sm
                  "
                >
                  <input
                    id="institution"
                    @keyup="showOptions = true"
                    v-model="instSearched.name"
                    class="w-full px-3 py-3"
                    style="border: none"
                    placeholder="Select institution by typing a name"
                  />
                </div>
                <div></div>
                <div
                  v-show="resultQuery().length && showOptions"
                  class="
                    w-full
                    bg-white
                    border border-gray-300
                    mt-2
                    ml-1
                    max-height-12
                    overflow-hidden overflow-y-scroll
                    rounded-lg
                    shadow-lg
                    text-left
                    dropdown-menu
                  "
                  style="height: 148px; border: none"
                >
                  <ul class="py-1">
                    <li
                      v-for="value in resultQuery()"
                      :key="value.id"
                      @click="setInput(value)"
                      class="
                        dropdown-toggle
                        px-4
                        py-2
                        cursor-pointer
                        hover:bg-primary-700 hover:text-white
                      "
                    >
                      {{ value.name }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </label>

          <label for="" class="ml-2">Supervisor Name</label>

          <div
            class="
              mt-1
              ml-1
              relative
              border border-gray-300
              overflow-hidden
              rounded-md
              shadow-sm
            "
          >
            <input
              id="supervisor"
              v-model="supervisor"
              class="w-full px-3 py-3"
              style="border: none"
              placeholder="Type supervisors name"
            />
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div class="form-group mb-6 mt-4">
              <label for="" class="ml-2">Start Date</label>
              <input
                v-model="startDate"
                type="date"
                class="
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700
                  focus:bg-white
                  focus:border-blue-600
                  focus:outline-none
                "
              />
            </div>
            <div class="form-group mb-6 mt-4">
              <label for="" class="ml-2">End Date</label>
              <input
                class="
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700
                  focus:bg-white
                  focus:border-blue-600
                  focus:outline-none
                "
                v-model="endDate"
                type="date"
              />
            </div>
          </div>
          <h6 v-show="showDateError.show" class="text-red-300">
            {{ showDateError.message }}
          </h6>
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
                                            hover:bg-white 
                                            hover:text-primary-600
                                            transition
                                            duration-150
                                            ease-in-out
            "
            @click="supervise()"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";

import { useRouter } from "vue-router";
import { googleApi } from "@/composables/baseURL";

import { useToast } from "vue-toastification";
import Modal from "@/sharedComponents/Modal";
import FlashMessage from "@/sharedComponents/FlashMessage";
import ErrorFlashMessage from "@/sharedComponents/ErrorFlashMessage";

import moment from "moment";
import ReviewerSideNav from "../SharedComponents/sideNav.vue";
import ReviewerNavBar from "../../../SharedComponents/navBar.vue";
import Loading from "vue3-loading-overlay";
// Import stylesheet
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import RadialProgressBar from "vue3-radial-progress";

export default {
  components: {
    Modal,
    FlashMessage,
    ErrorFlashMessage,
    ReviewerSideNav,
    ReviewerNavBar,
    RadialProgressBar,
    Loading,
  },
  computed: {
    moment: () => moment,
  },
  setup() {
    const route = useRoute();
    const store = useStore();
    const router = useRouter();

    let startDate = ref("");
    let endDate = ref("");
    let institutions = ref([]);
    let showDateError = ref({ show: false, message: "" });
    let instSearched = ref({ name: "" });
    let showOptions = ref("");
    let superviseAction = ref("");
    let supervisor = ref("");

    const toast = useToast();

    const options = ref([0, 1, 2]);
    const selectedOptions = ref([0]);
    const newSelectedOptions = ref([0]);

    let isPdf = ref(false);

    let pdfFilePath = ref("");

    let isGoodStanding = ref(false);

    let isProfessionalTypeChanged = ref(false);

    let otherProfessionalType = ref();
    let otherProfessionalTypeAmharic = ref();
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
      { name: "Chief expert", id: 7 },
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

    const completedSteps = ref(0);
    const totalSteps = ref(0);
    let goodStanding = ref({
      applicant: { profile: { name: "", fatherName: "" } },
      applicantType: { name: "" },
      education: {
        department: { name: "" },
        institution: { institutionType: {}, name: "" },
      },
      declinedFields: "",
      remark: "",
      documents: [{ filePath: "" }],
      applicationStatus: {
        buttons: [{ action: "", name: "" }],
      },
    });
    let buttons = ref([
      { action: "", name: "" },
      { action: "", name: "" },
      { action: "", name: "" },
      { action: "", name: "" },
    ]);

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
    let evaluateRoute = ref("/admin/evaluate/goodStanding" + route.params.id);

    const created = async (applicationTypeName, applicationId) => {
      applicationType.value = applicationTypeName;

      store
        .dispatch("reviewer/getGoodStandingApplication", applicationId)
        .then((res) => {
          goodStanding.value = res.data.data;
          departmentId.value = goodStanding.value.department.id;
          getProfessionalTypesByDepartmentId(departmentId.value);
          profileInfo.value = goodStanding.value.profile;
          buttons.value = res.data.data.applicationStatus.buttons;
          docs.value = res.data.data.documents;
          totalSteps.value = docs.value ? docs.value.length : 0;
          if (docs.value.length == 0) {
            showButtons.value = true;
          }
          fetchDocumentTypes();
          for (let i = 0; i < goodStanding.value.GSProfessionals.length; i++) {
            goodStanding.value.GSProfessionals[i].showPrefix = false;
            goodStanding.value.GSProfessionals[i].showPrefixLink = true;
            professionalTypeIdss.value.push(
              goodStanding.value.GSProfessionals[i].professionalTypeId
            );
          }
          if (goodStanding.value.applicationStatus.code == "REVDRA") {
            rejected.value = goodStanding.value.declinedFields;
            for (let i in goodStanding.value.documents) {
              for (let j in rejected.value) {
                if (
                  goodStanding.value.documents[i].documentTypeCode ==
                  rejected.value[j]
                ) {
                  rejectedObj.value.push(goodStanding.value.documents[i]);
                  break;
                }
              }
            }
            accepted.value = goodStanding.value.acceptedFields;
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
              if (goodStanding.value.documnets) {
                findDocumentType(documentTypes.value, docs.value[index.value]);
              }
            }
          } else if (goodStanding.value.applicationStatus.code == "IRV") {
            showTransferToAdminButton.value = true;
          }
        });

      applicationType.value = route.params.applicationType;
    };
    const fetchDocumentTypes = async () => {
      store.dispatch("reviewer/getDocumentTypes").then((res) => {
        documentTypes.value = res.data.data;
        findDocumentType(documentTypes.value, docs.value[0]);
      });
    };
    const next = (doc) => {
      if (nextClickable.value == true) {
        index.value = index.value + 1;
        amount.value = ((index.value + 1) / docs.value.length) * 100;
        width.value = "width:" + amount.value + "%";
        findDocumentType(documentTypes.value, docs.value[index.value]);
        nextClickable.value = false;
      }
      if (
        accepted.value.includes(
          doc && doc.documentTypeCode ? doc.documentTypeCode : ""
        ) ||
        rejected.value.includes(
          doc && doc.documentTypeCode ? doc.documentTypeCode : ""
        )
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
        if (obj[prop].code == ab?.documentTypeCode) {
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
      store.dispatch("goodStanding/getExpertLevel").then((res) => {
        let federalData = res.data.data.filter((r) => r.code == "FED");
        let transferData = {
          licenseId: route.params.applicationId,
          expertLevelId: federalData[0].id,
          createdByAdminId: adminId,
        };
        store
          .dispatch("reviewer/transferToFederal", transferData)
          .then((res) => {
            if (res.data?.status == "Success") {
              toast.success("Application  transfered Successfully", {
                timeout: 5000,
                position: "bottom-center",
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                icon: true,
              });
            } else {
              toast.success("Error occured", {
                timeout: 5000,
                position: "bottom-center",
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                icon: true,
              });
            }
          });
      });
    };
    const accept = (doc) => {
      nextClickable.value = true;
      completedSteps.value += 1;
      if (accepted.value.length > 0) {
        if (
          doc &&
          !accepted.value.includes(
            doc && doc.documentTypeCode ? doc.documentTypeCode : ""
          )
        ) {
          accepted.value.push(
            doc && doc.documentTypeCode ? doc.documentTypeCode : ""
          );
          if (index.value == docs.value.length - 1) {
            showButtons.value = true;
          } else {
            index.value = index.value + 1;
            amount.value = ((index.value + 1) / docs.value.length) * 100;
            width.value = "width:" + amount.value + "%";
            findDocumentType(documentTypes.value, docs.value[index.value]);
          }
          if (
            rejected.value.includes(
              doc && doc.documentTypeCode ? doc.documentTypeCode : ""
            )
          ) {
            rejected.value.splice(
              rejected.value.indexOf(
                doc && doc.documentTypeCode ? doc.documentTypeCode : ""
              ),
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
        accepted.value.push(
          doc ? (doc && doc.documentTypeCode ? doc.documentTypeCode : "") : ""
        );
        if (index.value == docs.value.length - 1) {
          showButtons.value = true;
        } else {
          index.value = index.value + 1;
          amount.value = ((index.value + 1) / docs.value.length) * 100;
          width.value = "width:" + amount.value + "%";
          findDocumentType(documentTypes.value, docs.value[index.value]);
        }
        if (
          rejected.value.includes(
            doc && doc && doc.documentTypeCode ? doc.documentTypeCode : ""
          )
        ) {
          rejected.value.splice(
            rejected.value.indexOf(
              doc && doc.documentTypeCode ? doc.documentTypeCode : ""
            ),
            1
          );
          rejectedObj.value.splice(rejectedObj.value.indexOf(doc), 1);
        }
      }
    };

    const reject = (doc) => {
      completedSteps.value += 1;
      nextClickable.value = true;
      if (rejected.value.length > 0) {
        if (
          !rejected.value.includes(
            doc && doc.documentTypeCode ? doc.documentTypeCode : ""
          )
        ) {
          rejected.value.push(
            doc && doc.documentTypeCode ? doc.documentTypeCode : ""
          );
          rejectedObj.value.push(doc);
          if (index.value == docs.value.length - 1) {
            showButtons.value = true;
          } else {
            index.value = index.value + 1;
            amount.value = ((index.value + 1) / docs.value.length) * 100;
            width.value = "width:" + amount.value + "%";
            findDocumentType(documentTypes.value, docs.value[index.value]);
          }
          if (
            accepted.value.includes(
              doc && doc.documentTypeCode ? doc.documentTypeCode : ""
            )
          ) {
            accepted.value.splice(
              accepted.value.indexOf(
                doc && doc.documentTypeCode ? doc.documentTypeCode : ""
              ),
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
        rejected.value.push(
          doc && doc.documentTypeCode ? doc.documentTypeCode : ""
        );
        rejectedObj.value.push(doc);
        if (index.value == docs.value.length - 1) {
          showButtons.value = true;
        } else {
          index.value = index.value + 1;
          amount.value = ((index.value + 1) / docs.value.length) * 100;
          width.value = "width:" + amount.value + "%";
          findDocumentType(documentTypes.value, docs.value[index.value]);
        }
        if (
          accepted.value.includes(
            doc && doc.documentTypeCode ? doc.documentTypeCode : ""
          )
        ) {
          accepted.value.splice(
            accepted.value.indexOf(
              doc && doc.documentTypeCode ? doc.documentTypeCode : ""
            ),
            1
          );
        }
      }
    };

    const action = (actionValue) => {
      let smsMessage = "";
      showActionLoading.value = true;
      showLoadingButtons.value = true;
      if (professionalTypeIdss.value.length > 0) {
        goodStanding.value.professionalTypeIds = professionalTypeIdss.value;
        goodStanding.value.professionalTypePrefixes =
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
          j < goodStanding.value.professionalTypePrefixes.length;
          j++
        ) {
          if (
            goodStanding.value.professionalTypePrefixes[j].professionalTypeId !=
            professionId
          ) {
            loopCounter++;
          }
        }
        if (loopCounter == goodStanding.value.professionalTypePrefixes.length) {
          goodStanding.value.professionalTypePrefixes.push({
            professionalTypeId: professionId,
            prefix: null,
          });
        }
        loopCounter = 0;
      }
      if (actionValue === "ApproveEvent") {
        smsMessage = goodStanding.value
          ? "Dear applicant your applied renewal of license number " +
            goodStanding.value.goodStandingCode +
            " has been approved after careful examination of your uploaded documents by our reviewers. Thank you for using eHPL. visit https://hrl.moh.gov.et for more."
          : "";
      }
      if (actionValue == "DeclineEvent") {
        smsMessage = goodStanding.value
          ? "Dear applicant your applied renewal of license number " +
            goodStanding.value.goodStandingCode +
            " has been declined after careful examination of your uploaded documents by our reviewers. Thank you for using eHPL. visit https://hrl.moh.gov.et for more."
          : "";
        showActionLoading.value = false;
        showLoadingButtons.value = false;
        let checkProfessionResult = false;
        goodStanding.value.isProfessionChanged == false
          ? (checkProfessionResult = checkProfessionChanged(
              goodStanding.value.GSProfessionals
            ))
          : (checkProfessionResult = true);

        if (checkProfessionResult) {
          showProfessionChangeError.value = true;
          toast.error("Error occured", {
            timeout: 5000,
            position: "bottom-center",
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            icon: true,
          });
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
        let checkProfessionResult = false;
        goodStanding.value.isProfessionChanged == false
          ? (checkProfessionResult = checkProfessionChanged(
              goodStanding.value.GSProfessionals
            ))
          : (checkProfessionResult = true);

        if (checkProfessionResult) {
          goodStanding.value.isProfessionChanged = true;
        }
      }

      if (prefix.value !== undefined) {
        goodStanding.value.prefix = prefix.value;
      }
      if (professionalTypeIdss.value.length > 0) {
        goodStanding.value.professionalTypeIds = professionalTypeIdss.value;
        goodStanding.value.professionalTypePrefixes =
          professionalTypePrefixes.value;
      }
      goodStanding.value.declinedFields = rejected.value;
      goodStanding.value.acceptedFields = accepted.value;
      goodStanding.value.certified = true;
      goodStanding.value.certifiedDate = new Date();
      let req = {
        action: actionValue,
        data: goodStanding.value,
      };
      let smsData = {
        recipients: [
          goodStanding.value && goodStanding.value.applicant
            ? "251" + goodStanding.value.applicant.phoneNumber
            : "",
        ],
        message: smsMessage ? smsMessage : "",
      };
      store
        .dispatch("reviewer/editGoodStanding", req)
        .then((res) => {
          showActionLoading.value = false;
          if (res.statusText == "Created") {
            store.dispatch("sms/sendSms", smsData).then(() => {
              toast.success("Application reviewed Successfully", {
                timeout: 5000,
                position: "bottom-center",
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                icon: true,
              });
            });
                  setTimeout(() => {
            window.location.reload();
          }, 3000);
          }
        })
        .catch(() => {
          toast.error("Error occured", {
            timeout: 5000,
            position: "bottom-center",
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            icon: true,
          });
        });
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

    const openPdfInNewTab = (pdfPath) => {
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

    const getProfessionalTypesByDepartmentId = (id) => {
      let professionSelected = ref(false);
      store
        .dispatch("reviewer/getProfessionalTypeByDepartmentId", id)
        .then((res) => {
          res.data.data
            .filter(function (e) {
              for (let i in goodStanding.value.GSProfessionals) {
                if (
                  e.code ===
                  goodStanding.value.GSProfessionals[i].professionalTypes.code
                ) {
                  professionSelected.value = true;
                }
              }
              if (!professionSelected.value) {
                professionalTypes.value.push(e);
              }
              professionSelected.value = false;
            })
            .map((mapData) => {
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
      const id = profileInfo.value.id;
      let newProfile = {
        alternativeName: goodStanding.value.profile.alternativeName,
        alternativeFatherName: goodStanding.value.profile.alternativeFatherName,
        alternativeGrandFatherName:
          goodStanding.value.profile.alternativeGrandFatherName,
      };
      const profileData = [id, newProfile];
      store
        .dispatch("profile/changeUserProfile", profileData)
        .then(() => {
          toast.success("Name change was Successfull", {
            timeout: 5000,
            position: "bottom-center",
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            icon: true,
          });
        })
        .catch(() => {
          toast.error("Error occured", {
            timeout: 5000,
            position: "bottom-center",
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            icon: true,
          });
        });
    };

    const checkResult = ref(false);
    const checkBoxClicked = (profession, previousProfession, index, event) => {
      checkResult.value = chkcontrol(index, previousProfession, event);
      if (checkResult.value) {
        if (event.target.checked) {
          previousProfession
            ? (goodStanding.value.GSProfessionals[index].showPrefixLink = true)
            : (professionalTypes.value[index].showPrefixLink = true);
          previousProfession
            ? professionalTypeIdss.value.push(profession.professionalTypes.id)
            : professionalTypeIdss.value.push(profession.id);
        } else {
          previousProfession
            ? (goodStanding.value.GSProfessionals[index].showPrefixLink = false)
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
            professionalTypePrefixes.value =
              professionalTypePrefixes.value.filter((data) => {
                return (
                  data.professionalTypeId != profession.professionalTypes.id
                );
              });
          } else {
            professionalTypePrefixes.value =
              professionalTypePrefixes.value.filter((data) => {
                return data.professionalTypeId != profession.id;
              });
          }

          if (
            previousProfession &&
            profession.professionalTypes.name == "Other"
          ) {
            goodStanding.value.otherProfessionalType = null;
            goodStanding.value.otherProfessionalTypeAmharic = null;
          } else if (!previousProfession && profession.name == "Other") {
            goodStanding.value.otherProfessionalType = null;
            goodStanding.value.otherProfessionalTypeAmharic = null;
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
          prefix: event.target.value,
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
              prefix: event.target.value,
            });
            countProLength.value = 0;
            return;
          }
        } else {
          professionalTypePrefixes.value.splice(
            professionalTypePrefixes.value.indexOf({
              professionalTypeId: professionId,
            }),
            1
          );
          if (event.target.value === "None") {
            return;
          }
          professionalTypePrefixes.value.push({
            professionalTypeId: professionId,
            prefix: event.target.value,
          });
          countProLength.value = 0;
          return;
        }
      }
    };

    const checkProfessionChanged = (previousProfessionType) => {
      let count = 0;
      if (
        previousProfessionType &&
        professionalTypeIdss &&
        previousProfessionType.length !== professionalTypeIdss.value.length
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

    const supervise = () => {
      goodStanding.value.superviseEndDate = endDate.value ? endDate.value : "";
      goodStanding.value.superviseStartDate = startDate.value
        ? startDate.value
        : "";
      goodStanding.value.supervisor = supervisor.value ? supervisor.value : "";
      goodStanding.value.superviseInstitutionId = instSearched.value
        ? instSearched.value.id
        : "";

      let req = {
        action: superviseAction.value ? superviseAction.value : "",
        data: goodStanding.value,
      };
      let minDate = moment(endDate.value).diff(moment(startDate.value), "days");
      let lessThanToday = moment(startDate.value).diff(
        moment(new Date()),
        "days"
      );

      if (minDate < 30) {
        showDateError.value.message =
          "Minimum supervised time is 3 month please change start and end date.";
        showDateError.value.show = true;
        return;
      } else if (lessThanToday < 0) {
        showDateError.value.message =
          "Start date can not be set to past,minimum start date is today.";
        showDateError.value.show = true;
        console.log(lessThanToday);
        return;
      } else {
        let smsData = {
          recipients: [
            goodStanding.value && goodStanding.value.applicant
              ? "251" + goodStanding.value.applicant.phoneNumber
              : "",
          ],
          message: goodStanding.value
            ? "Dear applicant your applied new license of number " +
              goodStanding.value.goodStandingCode +
              " has been set to be under supervison of MR/MRS:-" +
              goodStanding.value.supervisor +
              " at institution of " +
              instSearched.value.name +
              " for " +
              minDate +
              " days .Thank you for using eHPL. visit https://hrl.moh.gov.et for more."
            : "",
        };
        store
          .dispatch("reviewer/editGoodStanding", req)
          .then((res) => {
            console.log(res);
            showActionLoading.value = false;
            if (res.statusText == "Created") {
              store.dispatch("sms/sendSms", smsData).then(() => {
                toast.success("Application reviewed Successfully", {
                  timeout: 5000,
                  position: "bottom-center",
                  pauseOnFocusLoss: true,
                  pauseOnHover: true,
                  icon: true,
                });
                     setTimeout(() => {
            window.location.reload();
          }, 3000);
              });
            } else {
              toast.error("Please try again", {
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
          .catch(() => {
            toast.error("Please try again", {
              timeout: 5000,
              position: "bottom-center",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true,
            });
               setTimeout(() => {
            window.location.reload();
          }, 3000);
          });
      }
    };
    const changeAction = (action) => {
      superviseAction.value = action;
    };

    const setInput = (value) => {
      instSearched.value = value ? value : "";
      showOptions.value = false;
    };

    const resultQuery = () => {
      if (institutions.value) {
        let data = institutions.value.filter((item) => {
          return instSearched.value
            ? instSearched.value.name
                .toLowerCase()
                .split(" ")
                .every((v) => item.name.toLowerCase().includes(v))
            : "";
        });

        return data;
      } else {
        return [];
      }
    };

    onMounted(() => {
      created("Good Standing", route.params.id);
      store.dispatch("goodstanding/getInstitution").then((res) => {
        institutions.value = res.data.data.filter((elm) => elm.isLocal == true);
      });
    });
    return {
      instSearched,
      showDateError,
      endDate,
      startDate,
      supervisor,
      setInput,
      supervise,
      resultQuery,
      changeAction,
      isPdf,
      goodStanding,
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
      completedSteps,
      totalSteps,
      foundInRejected,
      foundInAcceptted,
      showRemark,
      toggleModal,
      activeClass,
      errorClass,
      submitRemark,
      applicationType,
      showFlash,
      showErrorFlash,
      showDeclineFlash,
      sendDeclinedData,
      fromModalSendDeclinedData,
      rejectedObj,
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
      prefixList,
      prefix,
      professionalTypeIdss,
      checkBoxClicked,
      addPrefix,
      options,
      selectedOptions,
      newSelectedOptions,
      otherProfessionalType,
      otherProfessionalTypeAmharic,
      showOtherProfessionError,
      chkcontrol,
      checkResult,
      isProfessionalTypeChanged,
      checkProfessionChanged,
      isGoodStanding,
      showActionLoading,
      showLoadingButtons,
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
