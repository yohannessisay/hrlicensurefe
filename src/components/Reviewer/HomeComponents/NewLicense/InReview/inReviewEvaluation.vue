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
                  <div
                    class="box-shadow-pop bg-lightGrey-100 mb-8 p-4 shadow-lg"
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
                            <div class="my-1 mx-4 w-full mb-4 shadow-xl">
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
                                        bg-primary-600
                                        font-medium
                                        text-xs
                                        leading-tight
                                        uppercase
                                        rounded
                                        shadow-lg
                                        hover:text-primary-600 hover:shadow-lg
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
                            <!-- Profession Card -->
                            <div class="my-1 mx-4 w-full mb-4">
                              <!-- Article -->
                              <article
                                class="overflow-hidden rounded-lg shadow-lg"
                              >
                                <header
                                  class="
                                    flex
                                    border-b-2
                                    text-grey-300
                                    items-center
                                    justify-between
                                    leading-tight
                                    p-2
                                    md:p-4
                                  "
                                >
                                  <h2 class="font-bold">
                                    Department Information
                                  </h2>
                                  <i
                                    class="
                                      fa fa-briefcase
                                      text-primary-600
                                      fa-2xl
                                    "
                                  ></i>
                                </header>

                                <div
                                  class="
                                    flex flex-row
                                    border-b-2
                                    text-grey-400
                                    m-2
                                  "
                                  v-for="education in newLicense.educations"
                                  :key="education.id"
                                >
                                  <div>
                                    <div class="form-check">
                                      <input
                                        class="
                                          form-check-input
                                          appearance-none
                                          h-5
                                          w-5
                                          border border-gray-300
                                          rounded-sm
                                          bg-white
                                          checked:bg-blue-600
                                          checked:border-blue-600
                                          focus:outline-none
                                          transition
                                          duration-200
                                          mt-1
                                          align-top
                                          bg-no-repeat bg-center bg-contain
                                          float-left
                                          mr-2
                                          cursor-pointer
                                        "
                                        @change="removeDepartment(education)"
                                        checked
                                        type="checkbox"
                                        :id="education.id"
                                      />
                                    </div>
                                    <div
                                      class="flex flex-col mb-medium mr-12 ml-8"
                                    >
                                      <div class="grid grid-cols-2 gap-4">
                                        <p
                                          class="
                                            text-primary-600 text-base
                                            font-bold
                                          "
                                        >
                                          Department Name
                                        </p>
                                        <p
                                          class="text-black text-base font-bold"
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
                                          class="
                                            text-primary-600 text-base
                                            font-bold
                                          "
                                        >
                                          Education Level
                                        </p>
                                        <p
                                          class="text-black text-base font-bold"
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
                                          class="
                                            text-primary-600 text-base
                                            font-bold
                                          "
                                        >
                                          Institution
                                        </p>
                                        <p
                                          class="text-black text-base font-bold"
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
                                          class="
                                            text-primary-600 text-base
                                            font-bold
                                          "
                                        >
                                          Profession
                                        </p>
                                        <div
                                          class="text-black text-base font-bold"
                                        >
                                          {{
                                            education.professionType
                                              ? education.professionType.name
                                              : ""
                                          }}
                                          <span
                                            @click="
                                              allowProfessionChange(
                                                education.department.id
                                              )
                                            "
                                            class="
                                              cursor-pointer
                                              text-primary-500
                                            "
                                          >
                                            <i
                                              class="
                                                fa fa-pencil
                                                text-green-200
                                              "
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
                                            <div class="mb-3 w-full">
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
                                                class="
                                                  form-label
                                                  inline-block
                                                  mb-2
                                                  text-gray-700
                                                "
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
                                                class="
                                                  form-label
                                                  inline-block
                                                  mb-2
                                                  text-gray-700
                                                "
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
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    class="flex justify-center"
                                    v-if="showDepRemark"
                                  >
                                    <div class="mb-3 xl:w-96">
                                      <label
                                        for="exampleFormControlTextarea1"
                                        class="
                                          form-label
                                          inline-block
                                          mb-2
                                          text-gray-700
                                        "
                                        >Remark on why you removed the
                                        department</label
                                      >
                                      <textarea
                                        v-model="newLicense.remark"
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
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                        placeholder="Remark note"
                                      ></textarea>
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
                                <button
                                  @click="openPdfInNewTab(docs[index].filePath)"
                                >
                                  See pdf in detail
                                </button>
                              </div>

                              <div v-else>
                                <h5 class="text-grey-200 text-2xl">
                                  {{
                                    docs[index].documentType
                                      ? docs[index].documentType.name
                                      : ""
                                  }}
                                </h5>
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
                            bg-primary-600
                            font-medium
                            text-xs
                            leading-tight
                            uppercase
                            rounded
                            shadow-lg
                            hover:text-primary-600 hover:shadow-lg
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
                            font-medium
                            text-xs text-white
                            bg-red-300
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
                            hover:bg-white hover:text-primary-600
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
                            bg-yellow-300
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
                            hover:bg-white hover:text-primary-600
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
                            bg-primary-600
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
                  <button
                    v-if="button.code != 'US'"
                    class="
                      inline-block
                      px-6
                      text-white
                      bg-primary-600
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
                  <button
                    v-else
                    class="
                      inline-block
                      px-6
                      text-white
                      bg-primary-600
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
                    data-bs-toggle="modal"
                    data-bs-target="#superviseModal"
                    @click="changeAction(button.action)"
                  >
                    {{ button.name }}
                  </button>
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
                            border-b border-solid border-grey-100
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
                            <span class="text-3xl"> × </span>
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
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Main Content -->
  </section>
  <!-- Supervise part -->
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
              required
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
            <div class="form-group mb-6 mt-4">
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
              px-2
              py-1
              bg-purple-600
              text-white
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              shadow-md
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
            Close
          </button>
          <button
            class="
              inline-block
              px-6
              py-2.5
              bg-blue-600
              text-white
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              shadow-lg
              hover:bg-blue-700 hover:shadow-lg
              focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
              active:bg-blue-800 active:shadow-lg
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
    ErrorFlashMessage,
  },
  computed: {
    moment: () => moment,
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
    let pdfFilePath = ref("");
    const completedSteps = ref(0);
    const totalSteps = ref(0);
    let isGoodStanding = ref(false);
    let institutions = ref([]);
    let expirationDateExceedTodayError = ref(false);
    let isProfessionalTypeChanged = ref(false);
    let startDate = ref("");
    let endDate = ref("");
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
    let showDepRemark = ref(false);
    let adminId = localStorage.getItem("adminId");

    let newLicense = ref({
      applicant: { profile: { name: "", fatherName: "" } },
      applicantType: { name: "" },
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
    let showDateError = ref({ show: false, message: "" });
    let supervisor = ref("");
    let showFlash = ref(false);
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
    let tempProf = ref({});
    let tempEducation = [];
    let modifiedProfession = [];
    let allowOtherProfChange = ref({});
    let professionalTypes = ref([]);
    let evaluateRoute = ref("/admin/evaluate/NewLicense" + route.params.id);
    const editPersonalData = ref(false);
    let others = ref({});

    const editPersonalInfo = () => {
      editPersonalData.value = !editPersonalData.value;
    };
    const allowProfessionChange = (departmentId) => {
      getProfessionalTypesByDepartmentId(departmentId);
      allowProfChange.value[departmentId]
        ? allowProfChange.value[departmentId]
        : false;
      allowProfChange.value[departmentId] =
        !allowProfChange.value[departmentId];
      allowOtherProfChange.value[departmentId] = false;
    };

    const created = async (applicationId) => {
      applicationType.value = "New License";

      store
        .dispatch("reviewer/getNewLicenseApplication", applicationId)
        .then((res) => {
          newLicense.value = res.data.data ? res.data.data : {};
          tempEducation =
            res.data.data && res.data.data.educations
              ? res.data.data.educations
              : "";
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
      store.dispatch("newlicense/getExpertLevel").then((res) => {
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
          others.value[id]["otherProfessionTypeAmharic"] = event.target.value;
        } else {
          others.value[id] = {};
          others.value[id]["otherProfessionTypeAmharic"] = "";
          others.value[id]["otherProfessionTypeAmharic"] = event.target.value;
        }
        modifiedProfession.forEach((element) => {
          if (element.department.id == education.department.id) {
            element.otherProfessionAmharic =
              others.value[id]["otherProfessionTypeAmharic"];
          }
        });
      }
    };
    const action = (actionValue) => {
      let smsMessage = "";

      if (actionValue === "ApproveEvent") {
        smsMessage = newLicense.value
          ? "Dear applicant your applied new license of number " +
            newLicense.value.newLicenseCode +
            " has been approved after careful examination of your uploaded documents by our reviewers. Thank you for using eHPL. visit https://hrl.moh.gov.et for more."
          : "";
        if (newLicense.value.licenseExpirationDate === null) {
          toast.warning("Please fill in license expiration date", {
            timeout: 5000,
            position: "bottom-center",
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            icon: true,
          });
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
            icon: true,
          });
          return;
        }
      }

      if (actionValue == "DeclineEvent") {
        smsMessage = newLicense.value
          ? "Dear applicant your applied new license of number " +
            newLicense.value.newLicenseCode +
            " has been declined after careful examination of your uploaded documents by our reviewers. Thank you for using eHPL. visit https://hrl.moh.gov.et for more."
          : "";
      }

      let checkProfessionResult = false;
      newLicense.value.isProfessionChanged == false;

      checkProfessionResult = checkProfessionChanged(
        newLicense.value.educations,
        modifiedProfession
      );

      if (checkProfessionResult) {
        newLicense.value.isProfessionChanged == true;
      } else {
        showRemark.value = true;
        sendDeclinedData.value = false;
        newLicense.value.isProfessionChanged == false;
        if (fromModalSendDeclinedData.value == true) {
          sendDeclinedData.value = true;
        }
      }

      newLicense.value.declinedFields = rejected.value;
      newLicense.value.acceptedFields = accepted.value;
      newLicense.value.certified = true;
      newLicense.value.certifiedDate = new Date();
      let req = {
        action: actionValue,
        data: newLicense.value,
      };
      let smsData = {
        recipients: [
          newLicense.value && newLicense.value.applicant
            ? "251" + newLicense.value.applicant.phoneNumber
            : "",
        ],
        message: smsMessage ? smsMessage : "",
      };
      console.log(newLicense.value)
      if (applicationType.value == "New License") {
        store
          .dispatch("reviewer/editNewLicense", req)
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

    const getProfessionalTypesByDepartmentId = async (id) => {
      await store
        .dispatch("reviewer/getProfessionalTypeByDepartmentId", id)
        .then((res) => {
          newProf.value[id] = res.data.data;
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
          newLicense.value.profile.alternativeGrandFatherName,
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
            icon: true,
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
        }
      }
    };
    let newEducation = [];
    const removeDepartment = (education) => {
      if (
        newEducation.filter((ed) => ed.id == education.id).length == 0 &&
        newEducation.length != 0
      ) {
        showDepRemark.value = true;
        newEducation.push(education);
      } else {
        newEducation = tempEducation.filter((ed) => ed.id != education.id);
        showDepRemark.value = false;
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

    const supervise = () => {
      newLicense.value.superviseEndDate = endDate.value ? endDate.value : "";
      newLicense.value.superviseStartDate = startDate.value
        ? startDate.value
        : "";
      newLicense.value.supervisor = supervisor.value ? supervisor.value : "";
      newLicense.value.supervisingInstitutionId = instSearched.value
        ? instSearched.value.id
        : "";

      let req = {
        action: superviseAction.value ? superviseAction.value : "",
        data: newLicense.value,
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
            newLicense.value && newLicense.value.applicant
              ? "251" + newLicense.value.applicant.phoneNumber
              : "",
          ],
          message: newLicense.value
            ? "Dear applicant your applied new license of number " +
              newLicense.value.newLicenseCode +
              " has been set to be under supervison of MR/MRS:-" +
              newLicense.value.supervisor +
              " at institution of " +
              instSearched.value.name +
              " for " +
              minDate +
              " days  .Thank you for using eHPL. visit https://hrl.moh.gov.et for more."
            : "",
        };
        store
          .dispatch("reviewer/editNewLicense", req)
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
                setTimeout(() => {
                  window.location.reload();
                }, 2000);
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
        tempProf.value[education.department.id].id == education.professionTypeId
      ) {
        modifiedProfession = modifiedProfession.filter(
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
      newLicense.value.educations.forEach((newP) => {
        let tempP = false;
        modifiedProfession.forEach((oldP) => {
          if (oldP.department.id != newP.department.id) {
            tempP = true;
          }
        });
        if (tempP) {
          modifiedProfession.push(newP);
        }
      });
      newLicense.value.educations = modifiedProfession;
    };
    onMounted(() => {
      created(route.params.id);
      store.dispatch("goodstanding/getInstitution").then((res) => {
        institutions.value = res.data.data.filter((elm) => elm.isLocal == true);
      });
    });
    return {
      isPdf,
      newLicense,
      showDepRemark,
      index,
      docs,
      resultQuery,
      next,
      setInput,
      previous,
      nextRemark,
      previousRemark,
      amount,
      supervise,
      showOptions,
      width,
      instSearched,
      institutions,
      documentTypes,
      findDocumentType,
      documentTypeName,
      accepted,
      rejected,
      startDate,
      supervisor,
      showDateError,
      endDate,
      accept,
      transferToFederal,
      showTransferToAdminButton,
      showTransferSuccessMessage,
      showTransferErrorMessage,
      reject,
      buttons,
      action,
      allowProfessionChange,
      allowProfChange,
      showButtons,
      isToChangeProfession,
      profileInfo,
      disableNext,
      removeDepartment,
      changeAction,
      newProf,
      checkForOther,
      allowOtherProfChange,
      nextClickable,
      foundInRejected,
      foundInAcceptted,
      showRemark,
      toggleModal,
      tempProf,
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
      modifiedProfession,
      showOtherProfessionError,
      chkcontrol,
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
