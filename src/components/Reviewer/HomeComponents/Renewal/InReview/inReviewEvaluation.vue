<template>
  <!-- Sidebar -->
  <reviewer-side-nav :finalUrl="'renewal'"></reviewer-side-nav>
  <!-- Sidebar -->

  <section class="home-section">
    <!-- Header -->
    <reviewer-nav-bar>
      <h2 class="dashboard">Evaluate</h2>
    </reviewer-nav-bar>
    <!-- Header -->

    <!-- Main Content -->
    <div class="home-content">
      <div class="mt-4 vld-parent">
        <loading
          :active="isLoadingStart"
          :is-full-page="false"
          :color="'#2F639D'"
          :opacity="1"
        ></loading>
        <div class="container px-4 mx-auto mb-12 sm:px-4">
          <div
            v-if="
              renewal &&
                renewal.applicationStatus &&
                (renewal.applicationStatus.code == 'IRV' ||
                  renewal.applicationStatus.code == 'REVDRA')
            "
            class="w-full rounded-lg shadow-md bg-primary-800"
          >
            <h2 class="ml-4 text-xl text-white">
              Evaluating
              {{
                renewal && renewal.profile && renewal.profile.name
                  ? renewal.profile.name
                  : ""
              }}
              's License
            </h2>

            <div class="w-full">
              <div class="box-shadow-pop bg-lightGrey-100">
                <div class="flex justify-content-evenly">
                  <div
                    class="container w-64 h-40 p-4 mt-8 ml-8 rounded-lg shadow-lg box-shadow-pop"
                  >
                    <div class="mt-8">
                      <div class="flex items-center justify-center my-auto">
                        <h2 class="text-3xl">
                          {{ accepted ? accepted.length : 0 }}
                        </h2>
                      </div>
                      <div class="flex items-center justify-center">
                        <h2 class="text-3xl">Accepted</h2>
                      </div>
                    </div>

                    <div
                      class="container my-2 mt-8 overflow-hidden bg-white rounded-lg shadow-lg"
                    >
                      <div
                        class="relative z-10 h-auto"
                        style="clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));"
                      >
                        <img
                          class="w-full"
                          :src="
                            renewal &&
                            renewal.profile &&
                            renewal.profile.profilePicture
                              ? googleApi +
                                renewal.profile.profilePicture.filePath
                              : ''
                          "
                          alt="Profile image"
                        />
                      </div>
                      <div
                        class="relative z-50 flex flex-row items-center justify-between px-6 -mt-10"
                      >
                        <h2
                          class="text-xl font-bold underline text-primary-600"
                        >
                          Applicant's Profile
                        </h2>
                      </div>
                      <div class="p-2 pt-6 pb-8 text-gray-600">
                        <div class="grid grid-cols-3">
                          <div class="col-span-1 mt-4 text-primary-600">
                            Name
                          </div>
                          <div class="col-span-2 mt-4 break-all ">
                            {{
                              renewal && renewal.profile && renewal.profile.name
                                ? renewal.profile.name +
                                  " " +
                                  renewal.profile.fatherName +
                                  " " +
                                  renewal.profile.grandFatherName
                                : ""
                            }}
                          </div>
                          <div class="col-span-1 mt-2 text-primary-600">
                            Email
                          </div>
                          <div class="col-span-2 mt-2 break-all ">
                            {{
                              renewal &&
                              renewal.applicant &&
                              renewal.applicant.emailAddress
                                ? renewal.applicant.emailAddress
                                : ""
                            }}
                          </div>
                          <div class="col-span-1 mt-2 text-primary-600">
                            Phone
                          </div>
                          <div class="col-span-2 mt-2 break-all ">
                            {{
                              renewal &&
                              renewal.applicant &&
                              renewal.applicant.phoneNumber
                                ? renewal.applicant.phoneNumber
                                : ""
                            }}
                          </div>
                          <div class="col-span-1 mt-2 text-primary-600">
                            Gender
                          </div>
                          <div class="col-span-2 mt-2 break-all ">
                            {{
                              renewal &&
                              renewal.profile &&
                              renewal.profile.gender
                                ? renewal.profile.gender
                                : ""
                            }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-wrap justify-start p-4 mt-4">
                    <div
                      class="p-4 mb-8 shadow-lg box-shadow-pop bg-lightGrey-100"
                    >
                      <div class="flex justify-center">
                        <h1 class="text-primary-600">Evaluation</h1>
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

                      <div class="flex flex-col items-center justify-center">
                        <div class="mt-8">
                          <label
                            v-if="!showButtons"
                            class="items-center justify-center text-2xl text-grey-800"
                          >
                            {{ documentTypeName }}
                          </label>

                          <div
                            class="container px-4 mx-auto my-2 md:px-4"
                            v-if="showButtons"
                          >
                            <div class="flex flex-wrap md:-mx-4 lg:-mx-8">
                              <!-- Personal Info card -->
                              <div class="w-full mx-4 my-1 mb-4 shadow-xl">
                                <!-- Article -->
                                <article
                                  class="overflow-hidden rounded-lg shadow-lg"
                                >
                                  <header
                                    class="flex items-center justify-between p-2 leading-tight md:p-4"
                                  >
                                    <h2 class="font-bold">
                                      Personal Information
                                      <span
                                        @click="
                                          editPersonalData = !editPersonalData
                                        "
                                        ><i
                                          class="ml-4 text-yellow-300 cursor-pointer fa fa-pencil"
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
                                    class="container flex items-center justify-between p-2 leading-tight md:p-4"
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
                                    class="container flex items-center justify-between p-2 leading-tight md:p-4"
                                  >
                                    <div class="font-bold">
                                      Full Name In Amharic
                                    </div>
                                    <div v-if="editPersonalData">
                                      <input
                                        v-model="
                                          renewal.profile.alternativeName
                                        "
                                        class="w-48 mr-1"
                                        type="text"
                                        placeholder="First Name"
                                      />
                                    </div>
                                    <div v-if="editPersonalData">
                                      <input
                                        v-model="
                                          renewal.profile.alternativeFatherName
                                        "
                                        class="w-48 mr-1"
                                        type="text"
                                        placeholder="Father Name"
                                      />
                                    </div>
                                    <div v-if="editPersonalData">
                                      <input
                                        v-model="
                                          renewal.profile
                                            .alternativeGrandFatherName
                                        "
                                        class="w-48"
                                        type="text"
                                        placeholder="Grandfather Name"
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
                                        class="inline-block px-6 text-xs font-medium leading-tight text-white uppercase transition duration-150 ease-in-out rounded shadow-lg bg-primary-600 hover:text-primary-600 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg"
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
                                    class="container flex items-center justify-between p-2 leading-tight md:p-4"
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
                                    class="container flex items-center justify-between p-2 leading-tight md:p-4"
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
                                    class="container flex items-center justify-between p-2 leading-tight md:p-4"
                                  >
                                    <div class="font-bold">marital Status</div>
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
                                    class="flex items-center justify-center p-2 leading-none md:p-4"
                                  >
                                    {{ new Date().toISOString().slice(0, 10) }}
                                  </footer>
                                </article>
                                <!-- END Article -->
                              </div>
                              <!-- Personal Info card -->
                              <!-- Contact card -->
                              <div
                                class="w-full px-1 my-1 mb-4 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2"
                              >
                                <!-- Article -->
                                <article
                                  class="overflow-hidden rounded-lg shadow-lg"
                                >
                                  <header
                                    class="flex items-center justify-between p-2 leading-tight md:p-4"
                                  >
                                    <h2 class="font-bold">
                                      Contact Information
                                    </h2>
                                    <i
                                      class="fa fa-phone text-primary-600 fa-2xl"
                                    ></i>
                                  </header>
                                  <hr class="text-grey-100" />
                                  <div
                                    class="container flex items-center justify-between p-2 leading-tight md:p-4"
                                  >
                                    <div class="font-bold">Mobile Number</div>
                                    <div>
                                      {{
                                        renewal && renewal.applicant
                                          ? renewal.applicant.phoneNumber
                                          : "---"
                                      }}
                                    </div>
                                  </div>

                                  <div
                                    class="container flex items-center justify-between p-2 mb-12 leading-tight md:p-4"
                                  >
                                    <div class="mb-1 font-bold">Email</div>
                                    <div>
                                      {{
                                        renewal && renewal.applicant
                                          ? renewal.applicant.emailAddress
                                          : "---"
                                      }}
                                    </div>
                                  </div>
                                </article>
                                <!-- END Article -->
                              </div>
                              <!-- Contact card -->
                              <!-- Profession Card -->
                              <div class="w-full mx-4 my-1 mb-4">
                                <!-- Article -->
                                <article
                                  class="overflow-hidden rounded-lg shadow-lg"
                                >
                                  <header
                                    class="flex items-center justify-between p-2 leading-tight border-b-2 text-grey-300 md:p-4"
                                  >
                                    <h2 class="font-bold">
                                      Department Information
                                    </h2>
                                    <small class="font-bold text-red-300"
                                      >Uncheck departments if you want to remove
                                      them</small
                                    >
                                    <i
                                      class=" fa fa-briefcase text-primary-600 fa-2xl"
                                    ></i>
                                  </header>

                                  <div
                                    :class="
                                      education && education.isDropped == false
                                        ? 'flex flex-row border-b-2 text-grey-400 m-2'
                                        : 'flex flex-row border text-red-300 m-2 p-2 rounded-md'
                                    "
                                    v-for="education in renewal.educations"
                                    :key="education.id"
                                  >
                                    <div class="flex justify-center">
                                      <div>
                                        <label
                                          for=""
                                          class="font-bold text-red-300"
                                          >{{
                                            education &&
                                            education.isDropped == false
                                              ? ""
                                              : "Removed"
                                          }}</label
                                        >
                                        <div class="form-check">
                                          <input
                                            class="float-left w-8 h-8 my-1 align-top transition duration-200 bg-red-300 bg-center bg-no-repeat bg-contain border border-gray-300 rounded-md appearance-none cursor-pointer form-check-input btn-check:bg-white focus:outline-none"
                                            checked
                                            type="checkbox"
                                            @change="
                                              education &&
                                              education.isDropped == false
                                                ? (education.isDropped = true)
                                                : (education.isDropped = false),
                                                droppedDepartment()
                                            "
                                            v-model="
                                              education.department.isDropped
                                            "
                                            :id="education.id"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      class="flex flex-col ml-8 mr-12 mb-medium"
                                    >
                                      <div class="grid grid-cols-2 gap-4">
                                        <p
                                          class="text-base font-bold text-primary-600"
                                        >
                                          Department Name
                                        </p>
                                        <p
                                          class="text-base font-bold text-black"
                                        >
                                          {{
                                            education.department
                                              ? education.department.name
                                              : ""
                                          }}
                                        </p>
                                      </div>
                                      <div class="grid grid-cols-2 gap-4">
                                        <p
                                          class="text-base font-bold text-primary-600"
                                        >
                                          Education Level
                                        </p>
                                        <p
                                          class="text-base font-bold text-black"
                                        >
                                          {{
                                            education.educationLevel
                                              ? education.educationLevel.name
                                              : ""
                                          }}
                                        </p>
                                      </div>
                                      <div class="grid grid-cols-2 gap-4">
                                        <p
                                          class="text-base font-bold text-primary-600"
                                        >
                                          Institution
                                        </p>
                                        <p
                                          class="text-base font-bold text-black"
                                        >
                                          {{
                                            education.institution
                                              ? education.institution.name
                                              : ""
                                          }}
                                        </p>
                                      </div>
                                      <div class="grid grid-cols-2 gap-4">
                                        <p
                                          class="text-base font-bold text-primary-600"
                                        >
                                          Profession
                                        </p>
                                        <div
                                          class="text-base font-bold text-black"
                                        >
                                          {{
                                            education.professionType
                                              ? education.professionType.name !=
                                                "Other"
                                                ? education.professionType.name
                                                : education.otherProfessionType +
                                                  "/" +
                                                  education.otherProfessionAmharic
                                              : ""
                                          }}
                                          <span
                                            @click="
                                              allowProfessionChange(education)
                                            "
                                            class="cursor-pointer text-primary-500"
                                          >
                                            <i
                                              class="text-green-200 fa fa-pencil"
                                            ></i
                                            >Edit
                                          </span>
                                          <div
                                            :id="education.department.id"
                                            class="flex justify-center"
                                            v-if="
                                              education.professionType &&
                                                allowProfChange[
                                                  education.department.id
                                                ]
                                            "
                                          >
                                            <div class="w-full mb-3">
                                              <select
                                                class="
                                                form-select
                                                appearance-none
                                                block
                                                w-full
                                                px-3
                                                py-1.5
                                                text-base
                                                font-normal
                                                text-gray-700
                                                bg-white
                                                bg-clip-padding
                                                bg-no-repeat
                                                border
                                                border-solid
                                                border-gray-300
                                                rounded
                                                transition
                                                ease-in-out
                                                m-0
                                                focus:text-gray-700
                                                focus:bg-white
                                                focus:border-blue-600
                                                focus:oProfessionutline-none
                                              "
                                                @click="
                                                  checkForOther(education)
                                                "
                                                v-model="
                                                  tempProf[
                                                    education.department.id
                                                  ]
                                                "
                                                aria-label="Default select example"
                                              >
                                                <option selected disabled>
                                                  Choose new profession
                                                </option>
                                                <option
                                                  v-for="prof in newProf[
                                                    education.department.id
                                                  ]"
                                                  :key="prof.id"
                                                  :value="prof"
                                                >
                                                  {{ prof.name }}
                                                </option>
                                              </select>
                                            </div>
                                          </div>
                                          <!-- Other Profession  -->
                                          <div
                                            class="flex justify-center"
                                            v-if="
                                              allowOtherProfChange[
                                                education.department.id
                                              ] && education.professionType
                                            "
                                          >
                                            <div class="mb-3 xl:w-96">
                                              <label
                                                for="exampleFormControlInput1"
                                                class="inline-block mb-2 text-gray-700 form-label"
                                                >Other Profession</label
                                              >
                                              <input
                                                type="text"
                                                @input="
                                                  setOtherProfession(
                                                    education,
                                                    education.department.id,
                                                    $event,
                                                    'english'
                                                  )
                                                "
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
                                                border
                                                border-solid
                                                border-gray-300
                                                rounded
                                                transition
                                                ease-in-out
                                                m-0
                                                focus:text-gray-700
                                                focus:bg-white
                                                focus:border-blue-600
                                                focus:outline-none
                                              "
                                                id="exampleFormControlInput1"
                                                placeholder="Type name"
                                              />
                                            </div>
                                            <div class="mb-3 xl:w-96">
                                              <label
                                                for="exampleFormControlInput1"
                                                class="inline-block mb-2 text-gray-700 form-label"
                                                >Other Profession Amharic
                                                Name</label
                                              >
                                              <input
                                                type="text"
                                                @input="
                                                  setOtherProfession(
                                                    education,
                                                    education.department.id,
                                                    $event,
                                                    'amharic'
                                                  )
                                                "
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
                                                border
                                                border-solid
                                                border-gray-300
                                                rounded
                                                transition
                                                ease-in-out
                                                m-0
                                                focus:text-gray-700
                                                focus:bg-white
                                                focus:border-blue-600
                                                focus:outline-none
                                              "
                                                id="exampleFormControlInput1"
                                                placeholder="Type amharic name"
                                              />
                                            </div>
                                          </div>
                                          <!-- Other Profession  -->
                                        </div>
                                      </div>

                                      <div class="grid grid-cols-2 gap-4">
                                        <p
                                          class="text-base font-bold text-primary-600"
                                        >
                                          Prefix
                                        </p>
                                        <div
                                          class="text-base font-bold text-black"
                                        >
                                          <button
                                            class="inline-block px-6 text-xs font-medium leading-tight text-white uppercase transition duration-150 ease-in-out rounded shadow-lg bg-primary-600 hover:text-primary-600 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg"
                                            @click="
                                              showPrefix(education.departmentId)
                                            "
                                          >
                                            Add Prefix
                                          </button>
                                          <div
                                            class="w-full mb-3"
                                            v-if="
                                              showPrefixFor[
                                                education.departmentId
                                              ]
                                            "
                                          >
                                            <select
                                              class="
                                              form-select
                                              appearance-none
                                              block
                                              w-full
                                              px-3
                                              py-1.5
                                              text-base
                                              font-normal
                                              text-gray-700
                                              bg-white
                                              bg-clip-padding
                                              bg-no-repeat
                                              border
                                              border-solid
                                              border-gray-300
                                              rounded
                                              transition
                                              ease-in-out
                                              m-0
                                              focus:text-gray-700
                                              focus:bg-white
                                              focus:border-blue-600
                                              focus:oProfessionutline-none
                                            "
                                              @click="changePrefix(education)"
                                              v-model="education.prefixId"
                                              aria-label="Default select example"
                                            >
                                              <option selected disabled>
                                                Choose prefix
                                              </option>
                                              <option
                                                v-for="prefix in prefixes"
                                                :key="prefix.id"
                                                :value="prefix.id"
                                              >
                                                {{ prefix.name }}
                                              </option>
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </article>
                                <!-- END Article -->
                              </div>
                              <!-- Profession Card -->

                              <!-- licesne Exp Card -->
                              <div class="w-full mx-4 my-1">
                                <!-- Article -->
                                <article
                                  class="overflow-hidden rounded-lg shadow-lg"
                                >
                                  <header
                                    class="flex items-center justify-between p-2 leading-tight md:p-4"
                                  >
                                    <h2 class="font-bold">
                                      License Expiration Date
                                    </h2>
                                    <i
                                      class=" fa fa-calendar fa-2x text-primary-600"
                                    ></i>
                                  </header>
                                  <hr class="text-grey-100" />

                                  <div
                                    class="container flex items-center justify-between p-2 leading-tight md:p-4"
                                  >
                                    <span
                                      class="p-2 ml-8 text-xl font-bold text-white rounded-lg bg-grey-300"
                                    >
                                      <i class="fa fa-calendar"></i>
                                      {{
                                        licenseExpirationDate +
                                          " (After " +
                                          expirationDateYear +
                                          " years)"
                                      }}</span
                                    >
                                  </div>
                                  <hr class="text-grey-100" />
                                </article>
                                <!-- END Article -->
                              </div>
                              <!-- licesne Exp Card -->
                            </div>
                          </div>

                          <div v-else class="flex flex-wrap justify-start">
                            <div>
                              <picture v-if="docs.length > 0">
                                <div
                                  v-if="
                                    docs[index] &&
                                      docs[index].fileType &&
                                      docs[index].fileType.split('/')[1] ==
                                        'pdf'
                                  "
                                >
                                  <div>
                                    <h5 class="text-2xl text-grey-800">
                                      {{
                                        docs[index] && docs[index].documentType
                                          ? docs[index].documentType.name
                                          : ""
                                      }}
                                    </h5>
                                    <iframe
                                      v-bind:src="
                                        docs[index]
                                          ? googleApi + docs[index].filePath
                                          : ''
                                      "
                                    ></iframe>
                                  </div>
                                  <br />
                                  <button
                                    @click="
                                      openPdfInNewTab(
                                        docs[index] ? docs[index].filePath : ''
                                      )
                                    "
                                    class="inline-block px-6 text-xs font-medium leading-tight text-white uppercase transition duration-150 ease-in-out rounded shadow-lg bg-primary-400 hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg hover:bg-white hover:text-primary-600"
                                  >
                                    See pdf in detail
                                  </button>
                                </div>

                                <div v-else>
                                  <h5 class="text-2xl text-grey-800">
                                    {{
                                      docs[index] && docs[index].documentType
                                        ? docs[index].documentType.name
                                        : ""
                                    }}
                                  </h5>

                                  <div class="flex items-center">
                                    <a
                                      :data-src="
                                        docs[index]
                                          ? googleApi + docs[index].filePath
                                          : ''
                                      "
                                      :data-caption="
                                        docs[index] && docs[index].documentType
                                          ? docs[index].documentType.name
                                          : ''
                                      "
                                    >
                                      <img
                                        @click="
                                          viewImage([
                                            {
                                              src: docs[index]
                                                ? googleApi +
                                                  docs[index].filePath
                                                : '',
                                              title: 'Image Caption 1',
                                            },
                                          ])
                                        "
                                        class="duration-500 ease-in scale-50 cursor-pointer hover:scale-75"
                                        :src="
                                          docs[index]
                                            ? googleApi + docs[index].filePath
                                            : ''
                                        "
                                      />
                                    </a>
                                  </div>
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
                            class="inline-block px-6 text-xs font-medium leading-tight text-white uppercase transition duration-150 ease-in-out rounded shadow-lg bg-primary-600 hover:text-primary-600 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg"
                            @click="accept(docs[index])"
                          >
                            Accept
                          </button>
                          <button
                            class="inline-block px-6 text-xs font-medium leading-tight text-white uppercase transition duration-150 ease-in-out bg-red-300 rounded shadow-lg hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-white active:shadow-lg hover:bg-white hover:text-primary-600"
                            @click="reject(docs[index])"
                          >
                            Reject
                          </button>
                          <button
                            class="inline-block px-6 text-xs font-medium leading-tight text-white uppercase transition duration-150 ease-in-out bg-yellow-300 rounded shadow-lg hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg hover:bg-white hover:text-primary-600"
                            @click="action('ReviewerDraftEvent')"
                          >
                            Save as Draft
                          </button>

                          <button
                            v-if="showTransferToFederal == true"
                            class="inline-block px-6 text-xs font-medium leading-tight text-white uppercase transition duration-150 ease-in-out rounded shadow-lg bg-primary-600 hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg hover:bg-primary-400 hover:text-white"
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
                      </div>
                    </div>
                  </div>
                  <div
                    class="container w-64 h-40 p-4 mt-8 mr-8 rounded-lg shadow-lg box-shadow-pop"
                  >
                    <div class="mt-8">
                      <div class="flex items-center justify-center my-auto">
                        <h2 class="text-3xl text-red-300">
                          {{ rejected ? rejected.length : 0 }}
                        </h2>
                      </div>
                      <div class="flex items-center justify-center">
                        <h2 class="text-3xl text-red-300">Rejected</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="vld-parent">
                  <loading
                    :active="isLoadingAction"
                    :is-full-page="false"
                    :color="'#2F639D'"
                    :opacity="1"
                  ></loading>
                  <div
                    class="flex items-center justify-center mb-medium"
                    v-if="showButtons && !showLoadingButtons"
                  >
                    <div
                      v-for="button in buttons"
                      v-bind:key="button.name"
                      v-bind:value="button.id"
                    >
                      <button
                        v-if="button.code == 'DEC'"
                        :class="
                          declineButtonStatus
                            ? 'inline-block px-6 text-white bg-primary-600 font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 hover:bg-primary-400 hover:text-white ease-in-out'
                            : 'inline-block px-6 text-white bg-grey-300 font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 hover:bg-primary-400 hover:text-white ease-in-out pointer-events-none'
                        "
                        @click="action(button.action)"
                      >
                        {{ button.name }}
                      </button>
                      <button
                        v-else
                        class="inline-block px-6 text-xs font-medium leading-tight text-white uppercase transition duration-150 ease-in-out rounded shadow-lg bg-primary-600 hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg hover:bg-primary-400 hover:text-white"
                        :data-bs-toggle="button.code == 'US' ? 'modal' : ''"
                        :data-bs-target="
                          button.code == 'US' ? '#superviseModal' : ''
                        "
                        @click="
                          button.code == 'US' ? '()' : action(button.action)
                        "
                      >
                        {{ button.name }}
                      </button>
                    </div>
                  </div>
                </div>
                <modal v-if="showRemark">
                  <template v-slot:modalHeader>
                    Decline Documents Reason
                  </template>
                  <template v-slot:modalBody>
                    <div class="w-full p-2 m-4">
                      <div
                        class="modalBody pb-xl"
                        v-if="nothingDropped == true"
                      >
                        <div class="flex justify-center">
                          <div
                            class="mt-2 cursor-pointer bg-grey-200 rounded mr-4"
                          >
                            <svg
                              width="40"
                              height="60"
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              class="text-black mt-2"
                              @click="previousRemark()"
                              v-if="ind != 0"
                            >
                              <polyline
                                points="30 10 10 30 30 50"
                                stroke="rgba(103,128,159,1)"
                                stroke-width="3"
                                stroke-linecap="butt"
                                fill="#ffffff"
                                stroke-linejoin="round"
                              >
                                &gt;
                              </polyline>
                            </svg>
                          </div>

                          <div
                            class="flex flex-col items-center justify-center"
                          >
                            <div class="mt-2">
                              <div class="flex justify-center  rounded">
                                <div v-if="rejectedObj.length > 0">
                                  <div
                                    v-if="
                                      rejectedObj[ind] &&
                                        rejectedObj[ind].fileType &&
                                        rejectedObj[ind].fileType.split(
                                          '/'
                                        )[1] == 'pdf'
                                    "
                                  >
                                    <h5 class="text-2xl text-grey-800">
                                      {{
                                        rejectedObj[ind] &&
                                        rejectedObj[ind].documentType
                                          ? rejectedObj[ind].documentType.name
                                          : ""
                                      }}
                                    </h5>

                                    <button
                                      class="inline-block px-6 text-xs font-medium leading-tight text-white uppercase transition duration-150 ease-in-out rounded shadow-lg bg-primary-400 hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg hover:bg-white hover:text-primary-600"
                                      @click="
                                        openPdfInNewTab(
                                          rejectedObj[ind]
                                            ? rejectedObj[ind].filePath
                                            : ''
                                        )
                                      "
                                    >
                                      See pdf in detail
                                    </button>
                                  </div>

                                  <picture class="imageViewer" v-else>
                                    <img
                                      v-bind:src="
                                        rejectedObj[ind]
                                          ? googleApi +
                                            rejectedObj[ind].filePath
                                          : ''
                                      "
                                    />
                                  </picture>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            class="mt-2 cursor-pointer bg-grey-200 rounded ml-4"
                          >
                            <svg
                              width="40"
                              height="60"
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              class="text-black mt-2"
                              @click="nextRemark()"
                              v-if="ind != rejected.length - 1"
                            >
                              <polyline
                                points="10 10 30 30 10 50"
                                stroke="rgba(103,128,159,1)"
                                stroke-width="3"
                                stroke-linecap="butt"
                                fill="#ffffff"
                                stroke-linejoin="round"
                              >
                                &gt;
                              </polyline>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <!--footer-->
                      <div class="flex justify-center">
                        <div class="grid grid-cols-1">
                          <label for="" class="mb-4 text-xl">{{
                            nothingDropped
                              ? "Remark on why you are declining the license"
                              : "Remark on why you have dropped the department/s"
                          }}</label>
                          <div class="w-full">
                            <textarea
                              v-model="renewal.remark"
                              @keyup="isremarkFilled()"
                              class="w-full border rounded-sm"
                              rows="6"
                            ></textarea>
                          </div>
                          <small
                            class="mt-4 mb-2 text-red-300"
                            v-if="showRemarkError"
                            >Remark note must be more than 10 letters</small
                          >
                        </div>
                      </div>
                      <div
                        class="flex items-center justify-center border-t border-solid rounded-b border-blueGray-200"
                      >
                        <button
                          class="inline-block px-6 text-xs mt-4 font-medium leading-tight text-white uppercase transition duration-150 ease-in-out rounded shadow-lg bg-primary-600 hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg hover:bg-primary-400 hover:text-white"
                          type="button"
                          v-on:click="showRemark = false"
                        >
                          Close
                        </button>
                        <button
                          type="button"
                          :class="
                            remarkFilled == false
                              ? 'inline-block px-6 text-white mt-4 bg-grey-300 font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 hover:bg-primary-400 hover:text-white ease-in-out pointer-events-none'
                              : 'inline-block px-6 text-white mt-4 bg-primary-600 font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 hover:bg-primary-400 hover:text-white ease-in-out '
                          "
                          v-on:click="submitRemark()"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </template>
                </modal>
              </div>
            </div>
          </div>

          <div v-else>
            <h1 class="text-2xl text-red-300">License is already reviewed</h1>
          </div>
        </div>
      </div>
    </div>
    <!-- Main Content -->
  </section>
  <!-- Supervise part -->
  <div
    class="fixed top-0 left-0 hidden w-full h-full overflow-x-hidden overflow-y-auto outline-none modal fade"
    id="superviseModal"
    tabindex="-1"
    aria-labelledby="superviseModalTitle"
    aria-modal="true"
    role="dialog"
  >
    <div
      class="relative w-auto pointer-events-none modal-dialog modal-dialog-centered"
    >
      <div
        class="relative flex flex-col w-full text-current bg-white border-none rounded-md shadow-lg outline-none pointer-events-auto modal-content bg-clip-padding"
      >
        <div
          class="flex items-center justify-between flex-shrink-0 p-4 border-b modal-header border-grey-100 rounded-t-md"
        >
          <h5
            class="text-xl font-medium leading-normal text-gray-800"
            id="superviseModalLabel"
          >
            Supervise Detail
          </h5>
          <button
            type="button"
            class="box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 btn-close focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
            data-bs-dismiss="modal"
            aria-label="Close"
            style="min-height: 28px; min-width: 28px"
          ></button>
        </div>
        <div class="relative p-4 modal-body">
          <label for="" class="ml-2">Institution </label>
          <label class="block mb-4 text-left">
            <div>
              <div class="relative w-full">
                <div
                  class="relative mt-1 ml-1 overflow-hidden border border-gray-300 rounded-md shadow-sm "
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
                  class="w-full mt-2 ml-1 overflow-hidden overflow-y-scroll text-left bg-white border border-gray-300 rounded-lg shadow-lg max-height-12 dropdown-menu"
                  style="height: 148px; border: none"
                >
                  <ul class="py-1">
                    <li
                      v-for="value in resultQuery()"
                      :key="value.id"
                      @click="setInput(value)"
                      class="px-4 py-2 cursor-pointer dropdown-toggle hover:bg-primary-700 hover:text-white"
                    >
                      {{ value.name }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </label>

          <div class="grid grid-cols-2 gap-4">
            <div class="mt-4 mb-6 form-group">
              <label for="" class="ml-2">Start Date</label>
              <input
                v-model="startDate"
                required
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
            <div class="mt-4 mb-6 form-group">
              <label for="" class="ml-2">End Date</label>
              <input
                required
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
          class="flex flex-wrap items-center justify-end flex-shrink-0 p-1 border-t modal-footer border-grey-100 rounded-b-md"
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
            @click="supervise()"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Supervise part -->
</template>
<script>
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import { googleApi } from "@/composables/baseURL";
import { useToast } from "vue-toastification";
import moment from "moment";
import ReviewerSideNav from "../../../SharedComponents/sideNav.vue";
import ReviewerNavBar from "../../../SharedComponents/navBar.vue";
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import RadialProgressBar from "vue3-radial-progress";
import PhotoViewer from "photoviewer";
import "photoviewer/dist/photoviewer.css";
import modal from "../../../../../sharedComponents/modal.vue";
export default {
  components: {
    modal,
    Loading,
    ReviewerSideNav,
    ReviewerNavBar,
    RadialProgressBar,
  },
  computed: {
    moment: () => moment,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    let remarkFilled = ref(false);
    const store = useStore();
    const toast = useToast();
    let showModal = ref(true);
    let declineAction = ref("DeclineEvent");
    let nothingDropped = ref(true);
    const options = ref([0, 1, 2]);
    const selectedOptions = ref([0]);
    const newSelectedOptions = ref([0]);
    let isPdf = ref(false);
    let isLoadingAction = ref(false);
    let isLoadingStart = ref(true);
    let pdfFilePath = ref("");
    const completedSteps = ref(0);
    const totalSteps = ref(0);
    let showPrefixFor = ref([]);
    let dropedDepartment = ref({});
    let isGoodStanding = ref(false);
    let institutions = ref([]);
    let expirationDateExceedTodayError = ref(false);
    let isProfessionalTypeChanged = ref(false);
    let startDate = ref("");
    let endDate = ref("");
    let showOtherProfessionError = ref(false);
    let regionId = JSON.parse(window.localStorage.getItem("allAdminData"))
      .regionId;
    let professionalTypeIds = ref([]);
    let professionalTypeIdss = ref([]);
    let licenseExpirationDate = ref(new Date());
    let prefix = ref();
    let canChangeName = ref(false);
    let showProfessionChangeError = ref(false);

    let showNameChangeFlash = ref(false);
    let showNameChangeErrorFlash = ref(false);
    let showTransferErrorMessage = ref(false);
    let showTransferSuccessMessage = ref(false);
    let showLicenseDateRequirementError = ref(false);
    let showDepRemark = ref(false);
    let adminId = localStorage.getItem("adminId");

    let renewal = ref({ licenseExpirationDate: new Date() });
    let buttons = ref([]);
    let isLoadingName = ref(false);
    let professionalTypePrefixes = ref([]);
    let superviseAction = ref("");
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
    let prefixes = ref({});
    let showTransferToFederal = ref(false);
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
    let showRemarkError = ref(false);
    let showDateError = ref({ show: false, message: "" });
    let supervisor = ref("");
    let showFlash = ref(false);
    let declineButtonStatus = ref(true);
    let showErrorFlash = ref(false);
    let showDeclineFlash = ref(false);
    let sendDeclinedData = ref(true);
    let fromModalSendDeclinedData = ref(false);
    let showOptions = ref(false);
    let showActionLoading = ref(false);
    let showLoadingButtons = ref(false);
    let allowProfChange = ref({});
    let instSearched = ref({ name: "" });
    let newProf = ref([]);
    let expirationDateYear = ref(0);
    let tempProf = ref({});
    let tempPref = ref({});
    let modifiedProfession = [];
    let allowOtherProfChange = ref({});
    let professionalTypes = ref([]);
    let evaluateRoute = ref("/admin/evaluate/renewal" + route.params.id);
    const editPersonalData = ref(false);
    let others = ref({});
    const editPersonalInfo = () => {
      editPersonalData.value = !editPersonalData.value;
    };
    const allowProfessionChange = (profType) => {
      getProfessionalTypesByDepartmentId(profType);
      allowProfChange.value[profType.department.id]
        ? allowProfChange.value[profType.department.id]
        : false;
      allowProfChange.value[profType.department.id] = !allowProfChange.value[
        profType.department.id
      ];
      allowOtherProfChange.value[profType.department.id] = false;
    };

    const created = async (applicationId) => {
      applicationType.value = "Renewal";

      store
        .dispatch("reviewer/getRenewalApplication", applicationId)
        .then((res) => {
          renewal.value = res.data.data ? res.data.data : {};
          profileInfo.value =
            renewal.value && renewal.value.profile ? renewal.value.profile : {};
          buttons.value =
            renewal.value &&
            renewal.value.applicationStatus &&
            renewal.value.applicationStatus.buttons
              ? renewal.value.applicationStatus.buttons
              : {};
          docs.value =
            renewal.value && renewal.value.documents
              ? renewal.value.documents
              : {};
          totalSteps.value = docs.value ? docs.value.length : 0;

          renewal.value &&
          renewal.value.licenseReviewer &&
          renewal.value.licenseReviewer.reviewer.regionId != null
            ? (showTransferToFederal.value = true)
            : (showTransferToFederal.value = false);

          accepted.value =
            renewal.value &&
            renewal.value.acceptedFields &&
            renewal.value.acceptedFields.length > 0
              ? renewal.value.acceptedFields
              : (accepted.value = []);
         
          completedSteps.value = accepted.value.length;
          index.value = completedSteps.value;
          if (completedSteps.value == docs.value.length) {
            showButtons.value = true;
          }
          fetchDocumentTypes();
        });
    };
    const viewImage = (image) => {
      var options = {
        index: 0, // this option means you will start at first image
      };
      new PhotoViewer(image, options);
    };
    const fetchDocumentTypes = async () => {
      store.dispatch("reviewer/getDocumentTypes").then((res) => {
        documentTypes.value = res.data.data;
        isLoadingStart.value = false;
        findDocumentType(documentTypes.value, docs.value[0]);
      });
    };
    const next = (doc) => {
      if (nextClickable.value == true) {
        index.value = index.value + 1;
        completedSteps.value += 1;
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
      completedSteps.value -= 1;
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
      store.dispatch("renewal/getExpertLevel").then((res) => {
        let federalData = res.data.data.filter((r) => r.code == "FED");
        let transferData = {
          licenseId: route.params.id,
          expertLevelId: federalData[0].id,
          createdByAdminId: adminId,
        };
        store
          .dispatch("reviewer/transferToFederal", transferData)
          .then((res) => {
            if (res.data?.status == "Success") {
              toast.success("Application transfered Successfully", {
                timeout: 5000,
                position: "bottom-center",
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                icon: true,
              });
              router.push({ path: "/admin/renewal" });
            } else {
              toast.error("Failed to transfer application", {
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
        if (!accepted.value.includes(doc.documentTypeCode)) {
          accepted.value.push(doc.fileName);
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
        accepted.value.push(doc.fileName);
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

    const reject = (doc) => {
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
          rejected.value.push(doc.fileName);
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
        rejected.value.push(doc.fileName);
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
    const setOtherProfession = (education, id, event, type) => {
      if (type == "english") {
        if (others.value[id]) {
          others.value[id]["otherProfessionType"] = event.target.value;
        } else {
          others.value[id] = {};
          others.value[id]["otherProfessionType"] = "";
          others.value[id]["otherProfessionType"] = event.target.value;
        }
        education.otherProfessionType = others.value[id]["otherProfessionType"];
        modifiedProfession.forEach((element) => {
          if (element.department.id == education.department.id) {
            element.otherProfessionType =
              others.value[id]["otherProfessionType"];
          }
        });
      }
      if (type == "amharic") {
        if (others.value[id]) {
          others.value[id]["otherProfessionAmharic"] = event.target.value;
        } else {
          others.value[id] = {};
          others.value[id]["otherProfessionAmharic"] = "";
          others.value[id]["otherProfessionAmharic"] = event.target.value;
        }
        education.otherProfessionAmharic =
          others.value[id]["otherProfessionAmharic"];
        modifiedProfession.forEach((element) => {
          if (element.department.id == education.department.id) {
            element.otherProfessionAmharic =
              others.value[id]["otherProfessionAmharic"];
          }
        });
      }
    };
    const action = (actionValue) => {
      let smsMessage = "";
      let proffesionsWithoutPrefix = "";
      renewal.value.educations.forEach((element) => {
        if (
          (element.prefixId && element.prefixId.length == 0) ||
          element.prefixId == null
        ) {
          proffesionsWithoutPrefix += element.professionType.name + " ,";
        }
      });
      if (
        (renewal.value.profile.alternativeName.length == 0 ||
          renewal.value.profile.alternativeFatherName.length == 0 ||
          renewal.value.profile.alternativeGrandFatherName.length == 0) &&
        actionValue == "ApproveEvent" &&
        renewal.value.applicantType.code != "FOR"
      ) {
        toast.error(
          "Applicant's amharic name | father name | grandfather name| can not be empty",
          {
            timeout: 5000,
            position: "bottom-center",
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            icon: true,
          }
        );
        return;
      }
      if (
        proffesionsWithoutPrefix.length > 0 &&
        actionValue == "ApproveEvent" &&
        renewal.value.applicantType.code != "FOR"
      ) {
        toast.error(`Prefix for ${proffesionsWithoutPrefix} can not be empty`, {
          timeout: 5000,
          position: "bottom-center",
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          icon: true,
        });
        return;
      }
      if (actionValue === "ApproveEvent" && nothingDropped.value == true) {
        renewal.value.remark = "";
        if (renewal.value.newLicenseId && renewal.value.newLicenseId != null) {
          store
            .dispatch(
              "reviewer/getNewLicenseApplication",
              renewal.value.newLicenseId
            )
            .then((res) => {
              res.data.data.isReturned = true;
              res.data.data.isreturned = true;
              let tempReq = {
                action: "ReturnEvent",
                data: res.data.data,
              };
              store.dispatch("reviewer/editNewLicense", tempReq);
            });
        }
        smsMessage = renewal.value
          ? "Dear applicant your applied renewal of code " +
            renewal.value.renewalCode +
            " has been approved after careful examination of your uploaded documents by our reviewers. Thank you for using eHPL. visit https://hrl.moh.gov.et for more."
          : "";
      } else if (actionValue == "ReviewerDraftEvent") {
        showRemarkError.value = false;
        showRemark.value = false;
      } else if (
        actionValue == "DeclineEvent" &&
        (renewal.value.remark == null || renewal.value.remark == "")
      ) {
        showRemarkError.value = true;
        nothingDropped.value == true;
        smsMessage = renewal.value
          ? "Dear applicant your applied renewal of code " +
            renewal.value.renewalCode +
            " has been declined after careful examination of your uploaded documents by our reviewers. Thank you for using eHPL. visit https://hrl.moh.gov.et for more."
          : "";
        showRemark.value = true;
        sendDeclinedData.value = false;
        return;
      } else if (nothingDropped.value == false) {
        showRemarkError.value = true;
        showRemark.value = true;
        sendDeclinedData.value = false;
        return;
      } else showRemarkError.value = false;
      let checkProfessionResult = false;
      renewal.value.isProfessionChanged == false;

      checkProfessionResult = checkProfessionChanged(
        renewal.value.educations,
        modifiedProfession
      );

      if (checkProfessionResult) {
        renewal.value.isProfessionChanged == true;
      } else {
        renewal.value.isProfessionChanged == false;
        if (fromModalSendDeclinedData.value == true) {
          sendDeclinedData.value = true;
        }
      }

      renewal.value.declinedFields = rejected.value;
      renewal.value.acceptedFields = accepted.value;
      renewal.value.certified = true;
      renewal.value.certifiedDate = new Date();
      let req = {
        action: actionValue,
        data: renewal.value,
      };
      let smsData = {
        recipients: [
          renewal.value && renewal.value.applicant
            ? "251" + renewal.value.applicant.phoneNumber
            : "",
        ],
        message: smsMessage ? smsMessage : "",
      };
      renewal.value.licenseExpirationDate = licenseExpirationDate.value;
      // let tempRemarkValue = true;
      // renewal.value.educations.forEach((element) => {
      //   if (element && element.isDropped == true) {
      //     tempRemarkValue = false;
      //   } else {
      //     tempRemarkValue = true;
      //   }
      // });
      // if (tempRemarkValue == true) {
      //   renewal.value.remark = "";
      // }

      if (applicationType.value == "Renewal") {
        isLoadingAction.value = true;
        store
          .dispatch("reviewer/editRenewal", req)
          .then(() => {
            showActionLoading.value = false;
            isLoadingAction.value = false;

            store.dispatch("sms/sendSms", smsData).then(() => {
              toast.success("Application reviewed Successfully", {
                timeout: 5000,
                position: "bottom-center",
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                icon: true,
              });
              router.push({ path: "/admin/renewal" });
              let userNotification = {
                user_id:
                  renewal.value && renewal.value.applicant
                    ? renewal.value.data.applicant.id
                    : null,
                reviewer_id: renewal.value.licenseReviewer
                  ? renewal.value.licenseReviewer.reviewerId
                  : null,
                renewal_id: renewal.value ? renewal.value.id : null,
                message: renewal.value
                  ? // eslint-disable-next-line prettier/prettier
                    `Dear applicant your submitted new license application of code ${
                      renewal.value.renewalCode
                    } has been ${
                      actionValue == "ApproveEvent"
                        ? "approved"
                        : actionValue == "DeclineEvent"
                        ? "declined"
                        : ""
                    }by a reviewer.`
                  : "",
                type: "applicant_new_license",
                status: "new",
              };
              store.dispatch("notification/notifyApplicant", userNotification);
            });
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
    const changePrefix = (education) => {
      renewal.value.educations.forEach((element) => {
        if (element.departmentId == education.departmentId) {
          element = education;
        }
      });
    };
    const submitRemark = () => {
      renewal.value.educations.forEach((element) => {
        if (element && element.isDropped == true) {
          nothingDropped.value = false;
        }
      });

      showRemarkError.value = false;
      showRemark.value = false;
      sendDeclinedData.value = true;

      action(nothingDropped.value == false ? "ApproveEvent" : "DeclineEvent");
    };
    const droppedDepartment = () => {
      JSON.parse(JSON.stringify(renewal.value.educations)).forEach(
        (element) => {
          if (element && element.isDropped == true) {
            declineAction.value = "ApproveEvent";
            if (rejected.value && rejected.value.length == 0) {
              nothingDropped.value = false;
            }
          }
          if (element && element.isDropped == false) {
            declineAction.value = "DeclineEvent";
            if (rejected.value && rejected.value.length == 0) {
              nothingDropped.value = true;
            }
          }
        }
      );
    };
    const openPdfInNewTab = (pdfPath) => {
      pdfFilePath.value = pdfPath;
      window.open(googleApi + "" + pdfPath, "_blank");
    };

    const getProfessionalTypesByDepartmentId = async (profType) => {
      let profId = {
        departmentId: profType.department.id,
        educationalLevelId: profType.educationLevel.id,
      };
      await store
        .dispatch("reviewer/getProfessionalTypeByDepartmentId", profId)
        .then((res) => {
          newProf.value[profType.department.id] = res.data.data;
        });
    };
    const isremarkFilled = () => {
      renewal.value.remark && renewal.value.remark.length > 10
        ? (remarkFilled.value = true)
        : (remarkFilled.value = false);
    };
    const changeAmharicName = () => {
      isLoadingName.value = true;
      const id = profileInfo.value.id;
      let newProfile = {
        alternativeName: renewal.value.profile.alternativeName,
        alternativeFatherName: renewal.value.profile.alternativeFatherName,
        alternativeGrandFatherName:
          renewal.value.profile.alternativeGrandFatherName,
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
            icon: true,
          });
          isLoadingName.value = false;
          editPersonalData.value = false;
          created(route.params.id);
        })
        .catch(() => {
          toast.error("Error Occured", {
            timeout: 5000,
            position: "bottom-center",
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            icon: true,
          });
          isLoadingName.value = false;
        });
    };

    const checkResult = ref(false);

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

    const checkProfessionChanged = (previousProfession, modifiedProfesion) => {
      let count = 0;

      for (let i = 0; i < previousProfession.length; i++) {
        for (let j = 0; j < modifiedProfesion.length; j++) {
          if (
            previousProfession[i].professionalTypeId !=
            modifiedProfesion[j].professionalTypeId
          ) {
            count++;
          }
        }
      }
      if (count != 0) {
        return true;
      } else {
        return false;
      }
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
    const showPrefix = (id) => {
      if (showPrefixFor.value[id] == undefined) {
        showPrefixFor.value[id] = true;
      } else if (showPrefixFor.value[id] && showPrefixFor.value[id] == true) {
        showPrefixFor.value[id] = false;
      } else {
        showPrefixFor.value[id] = true;
      }
    };
    const supervise = () => {
      renewal.value.suspEndDate = endDate.value ? endDate.value : "";
      renewal.value.suspStartDate = startDate.value ? startDate.value : "";
      renewal.value.supervisor = supervisor.value ? supervisor.value : "";
      renewal.value.supervisingInstitutionId = instSearched.value
        ? instSearched.value.id
        : "";

      let req = {
        action: superviseAction.value ? superviseAction.value : "",
        data: renewal.value,
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
        return;
      } else {
        let smsData = {
          recipients: [
            renewal.value && renewal.value.applicant
              ? "251" + renewal.value.applicant.phoneNumber
              : "",
          ],
          message: renewal.value
            ? "Dear applicant your applied renewal of code " +
              renewal.value.renewalCode +
              " has been set to be under supervison of MR/MRS:-" +
              renewal.value.supervisor +
              " at institution of " +
              instSearched.value.name +
              " for " +
              minDate +
              " days  .Thank you for using eHPL. visit https://hrl.moh.gov.et for more."
            : "",
        };

        store
          .dispatch("reviewer/editRenewal", req)
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
                router.push({ path: "/admin/renewal" });
                let userNotification = {
                  user_id:
                    renewal.value && renewal.value.applicant
                      ? renewal.value.data.applicant.id
                      : null,
                  reviewer_id: renewal.value.licenseReviewer
                    ? renewal.value.licenseReviewer.reviewerId
                    : null,
                  renewal_id: renewal.value ? renewal.value.id : null,
                  message: renewal.value
                    ? // eslint-disable-next-line prettier/prettier
                      "Dear applicant your applied renewal application of code " +
                      renewal.value.renewalCode +
                      " has been set to be under supervison of MR/MRS:-" +
                      renewal.value.supervisor +
                      " at institution of " +
                      instSearched.value.name +
                      " for " +
                      minDate +
                      " days "
                    : "",
                  type: "applicant_new_license",
                  status: "new",
                };
                store.dispatch(
                  "notification/notifyApplicant",
                  userNotification
                );
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
              }, 2000);
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
            }, 2000);
          });
      }
    };
    const changeAction = (action) => {
      superviseAction.value = action;
    };

    const checkForOther = (education) => {
      modifiedProfession.forEach((element, index) => {
        if (element.department.id == education.department.id) {
          modifiedProfession.splice(index, 1);
        }
      });

      if (
        tempProf.value[education.department.id] &&
        tempProf.value[education.department.id].id ==
          education.professionTypeId &&
        tempProf.value[education.department.id].departmentId ==
          education.departmentId
      ) {
        modifiedProfession = renewal.value.educations.filter(
          (element) => element.oldProfessionTypeId != education.professionTypeId
        );
      } else if (
        tempProf.value[education.department.id] &&
        tempProf.value[education.department.id].name == "Other"
      ) {
        allowOtherProfChange.value[education.department.id] = true;

        education.oldProfessionTypeId = education.professionTypeId;
        education.professionTypeId = null;
        modifiedProfession.push({
          ...education,
        });
      } else {
        education.oldProfessionTypeId = education.professionTypeId;
        education.professionTypeId = tempProf.value[education.department.id].id;
        modifiedProfession.push({
          ...education,
        });
        allowOtherProfChange.value[education.department.id] = false;
      }
    };

    onMounted(() => {
      created(route.params.id);
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth();
      let day = date.getDate();
      if (regionId) {
        store
          .dispatch("lookups/getLicenseExpirationDateByRegionId", regionId)
          .then((res) => {
            licenseExpirationDate.value = new Date(
              year + res.data.data[0].years,
              month,
              day
            )
              .toISOString()
              .slice(0, 10);
            expirationDateYear.value = res.data.data[0].years;
          });
      } else {
        let year = new Date().getFullYear();
        licenseExpirationDate.value = new Date(year + 3, month, day)
          .toISOString()
          .slice(0, 10);
        expirationDateYear.value = 3;
      }
      store.dispatch("goodstanding/getInstitution").then((res) => {
        institutions.value = res.data.data.filter((elm) => elm.isLocal == true);
      });
      store.dispatch("lookups/getProfessionalPrefix").then((res) => {
        prefixes.value = res.data.data;
      });
    });
    return {
      isPdf,
      licenseExpirationDate,
      renewal,
      showDepRemark,
      index,
      docs,
      prefixes,
      declineButtonStatus,
      dropedDepartment,
      resultQuery,
      next,
      setInput,
      previous,
      nextRemark,
      previousRemark,
      droppedDepartment,
      amount,
      supervise,
      showOptions,
      remarkFilled,
      isremarkFilled,
      width,
      instSearched,
      institutions,
      documentTypes,
      findDocumentType,
      documentTypeName,
      accepted,
      rejected,
      startDate,
      expirationDateYear,
      supervisor,
      showDateError,
      endDate,
      isLoadingAction,
      nothingDropped,
      isLoadingStart,
      accept,
      transferToFederal,
      showTransferToFederal,
      showTransferSuccessMessage,
      showTransferErrorMessage,
      reject,
      buttons,
      tempPref,
      changePrefix,
      action,
      allowProfessionChange,
      viewImage,
      allowProfChange,
      showButtons,
      showRemarkError,
      isToChangeProfession,
      profileInfo,
      disableNext,
      showPrefixFor,
      changeAction,
      newProf,
      showModal,
      checkForOther,
      allowOtherProfChange,
      nextClickable,
      foundInRejected,
      foundInAcceptted,
      showRemark,
      tempProf,
      activeClass,
      declineAction,
      errorClass,
      showPrefix,
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
      professionalTypes,
      canChangeName,
      changeAmharicName,
      showNameChangeFlash,
      showNameChangeErrorFlash,
      showLicenseDateRequirementError,
      professionalTypeIds,
      showProfessionChangeError,
      expirationDateExceedTodayError,
      prefix,
      professionalTypeIdss,
      addPrefix,
      options,
      editPersonalData,
      editPersonalInfo,
      selectedOptions,
      newSelectedOptions,
      modifiedProfession,
      showOtherProfessionError,
      checkResult,
      isProfessionalTypeChanged,
      checkProfessionChanged,
      isGoodStanding,
      showActionLoading,
      showLoadingButtons,
      googleApi,
      setOtherProfession,
    };
  },
};
</script>
<style scoped>
.shadow-lg {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 34%), 0 2px 4px -1px rgb(0 0 0 / 6%);
}
</style>
