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
      <div class="container px-4 mx-auto mb-12 sm:px-4">
        <div class="w-full rounded-lg shadow-md bg-primary-800">
          <h2 class="ml-4 text-white">
            Evaluating
            {{
              goodStanding && goodStanding.profile && goodStanding.profile.name
                ? goodStanding.profile.name
                : ""
            }}
            's License
          </h2>
          <div class="vld-parent">
            <loading
              :active="isLoadingStart"
              :is-full-page="false"
              :color="'#2F639D'"
              :opacity="1"
            ></loading>
            <div class="w-full">
              <div class="box-shadow-pop bg-lightGrey-100">
                <div class="flex justify-content-evenly">
                  <div
                    class="container w-64 h-40 mt-8 ml-8 rounded-lg shadow-lg  box-shadow-pop"
                  >
                    <div class="mt-8">
                      <div class="flex items-center justify-center my-auto">
                        <h2 class="text-3xl">
                          {{ accepted.length }}
                        </h2>
                      </div>
                      <div class="flex items-center justify-center">
                        <h2 class="text-3xl">Accepted</h2>
                      </div>
                    </div>
                    <div
                      class="container max-w-md mx-auto my-2 mt-8 overflow-hidden bg-white rounded-lg shadow-lg"
                    >
                      <div
                        class="relative z-10 h-auto"
                        style="clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));"
                      >
                        <img
                          class="w-full"
                          :src="
                            goodStanding &&
                            goodStanding.profile &&
                            goodStanding.profile.profilePicture
                              ? googleApi + goodStanding.profile.profilePicture.filePath
                              : ''
                          "
                          alt="Profile image"
                        />
                      </div>
                      <div
                        class="relative z-50 flex flex-row items-center justify-between px-6 -mt-10"
                      >
                        <h2 class="text-xl font-bold underline text-primary-600">
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
                              goodStanding && goodStanding.profile && goodStanding.profile.name
                                ? goodStanding.profile.name +
                                  " " +
                                  goodStanding.profile.fatherName +
                                  " " +
                                  goodStanding.profile.grandFatherName
                                : ""
                            }}
                          </div>
                          <div class="col-span-1 mt-2 text-primary-600">
                            Email
                          </div>
                          <div class="col-span-2 mt-2 break-all ">
                            {{
                              goodStanding &&
                              goodStanding.applicant &&
                              goodStanding.applicant.emailAddress
                                ? goodStanding.applicant.emailAddress
                                : ""
                            }}
                          </div>
                          <div class="col-span-1 mt-2 text-primary-600">
                            Phone
                          </div>
                          <div class="col-span-2 mt-2 break-all ">
                            {{
                              goodStanding &&
                              goodStanding.applicant &&
                              goodStanding.applicant.phoneNumber
                                ? goodStanding.applicant.phoneNumber
                                : ""
                            }}
                          </div>
                          <div class="col-span-1 mt-2 text-primary-600">
                            Gender
                          </div>
                          <div class="col-span-2 mt-2 break-all ">
                            {{
                              goodStanding && goodStanding.profile && goodStanding.profile.gender
                                ? goodStanding.profile.gender
                                : ""
                            }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-wrap justify-start p-4 mt-4">
                    <div class="p-4 mb-8 box-shadow-pop bg-lightGrey-100">
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
                            class="items-center justify-center text-2xl  text-grey-800"
                          >
                            {{ documentTypeName }}
                          </label>

                          <div class="container px-4 mx-auto my-2 md:px-4" v-if="showButtons">
                            <div class="flex flex-wrap md:-mx-4 lg:-mx-8">
                              <!-- Personal Info card -->
                              <div class="w-full mx-4 my-1 mb-4">
                                <!-- Article -->
                                <article class="overflow-hidden rounded-lg shadow-lg">
                                  <header
                                    class="flex items-center justify-between p-2 leading-tight  md:p-4"
                                  >
                                    <h2 class="font-bold">
                                      Personal Information
                                    </h2>
                                    <i class="fa fa-user fa-2x text-primary-600"></i>
                                  </header>
                                  <hr class="text-grey-100" />
                                  <div
                                    class="container flex items-center justify-between p-2 leading-tight  md:p-4"
                                  >
                                    <div class="font-bold">Full Name</div>

                                    <div>
                                      {{
                                        (profileInfo.name ? profileInfo.name : "-") +
                                          " " +
                                          (profileInfo.fatherName ? profileInfo.fatherName : "-") +
                                          " " +
                                          (profileInfo.grandFatherName
                                            ? profileInfo.grandFatherName
                                            : "-")
                                      }}
                                    </div>
                                  </div>
                                  <div
                                    class="container flex items-center justify-between p-2 leading-tight  md:p-4"
                                  >
                                    <div class="font-bold">
                                      Full Name In Amharic
                                    </div>
                                    <div v-if="editPersonalData">
                                      <input
                                        v-model="goodStanding.profile.alternativeName"
                                        class="w-48 mr-1"
                                        type="text"
                                      />
                                    </div>
                                    <div v-if="editPersonalData">
                                      <input
                                        v-model="goodStanding.profile.alternativeFatherName"
                                        class="w-48 mr-1"
                                        type="text"
                                      />
                                    </div>
                                    <div v-if="editPersonalData">
                                      <input
                                        v-model="goodStanding.profile.alternativeGrandFatherName"
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
                                        class="inline-block px-6 text-xs font-medium leading-tight text-white uppercase transition duration-150 ease-in-out rounded shadow-lg  hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg"
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
                                    class="container flex items-center justify-between p-2 leading-tight  md:p-4"
                                  >
                                    <div class="font-bold">Nationality</div>
                                    <div>
                                      {{
                                        profileInfo.nationality ? profileInfo.nationality.name : "-"
                                      }}
                                    </div>
                                  </div>

                                  <div
                                    class="container flex items-center justify-between p-2 leading-tight  md:p-4"
                                  >
                                    <div class="font-bold">gender</div>
                                    <div>
                                      {{ profileInfo.gender ? profileInfo["gender"] : "-" }}
                                    </div>
                                  </div>

                                  <div
                                    class="container flex items-center justify-between p-2 leading-tight  md:p-4"
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
                                    class="flex items-center justify-center p-2 leading-none  md:p-4"
                                  >
                                    {{ new Date().toISOString().slice(0, 10) }}
                                  </footer>
                                </article>
                                <!-- END Article -->
                              </div>
                              <!-- Personal Info card -->
                              <!-- Contact card -->
                              <div
                                class="w-full px-1 my-1 mb-3  md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2"
                              >
                                <!-- Article -->
                                <article class="overflow-hidden rounded-lg shadow-lg">
                                  <header
                                    class="flex items-center justify-between p-2 leading-tight  md:p-4"
                                  >
                                    <h2 class="font-bold">
                                      Contact Information
                                    </h2>
                                    <i class="fa fa-phone text-primary-600 fa-2xl"></i>
                                  </header>
                                  <hr class="text-grey-100" />
                                  <div
                                    class="container flex items-center justify-between p-2 leading-tight  md:p-4"
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
                                    class="container flex items-center justify-between p-2 mb-10 leading-tight  md:p-4"
                                  >
                                    <div class="mb-1 font-bold">Email</div>
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
                                class="w-full px-1 my-1  md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2"
                              >
                                <!-- Article -->
                                <article class="overflow-hidden rounded-lg shadow-lg">
                                  <header
                                    class="flex items-center justify-between p-2 leading-tight  md:p-4"
                                  >
                                    <h2 class="font-bold">
                                      Institution Informatiom
                                    </h2>
                                    <i
                                      class=" fa fa-building text-primary-600 fa-2xl"
                                    ></i>
                                  </header>
                                  <hr class="text-grey-100" />
                                  <div
                                    class="container flex items-center justify-between p-2 mb-24 leading-tight  md:p-4"
                                  >
                                    <div class="font-bold">Department</div>
                                    <div>
                                      {{
                                        goodStanding.department
                                          ? goodStanding.department.name
                                          : goodStanding.education
                                          ? goodStanding.education.department
                                            ? goodStanding.education.department.name
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
                              <div class="w-full mx-4 my-1 mb-4">
                                <!-- Article -->
                                <article class="overflow-hidden rounded-lg shadow-lg">
                                  <header
                                    class="flex items-center justify-between p-2 leading-tight  md:p-4"
                                  >
                                    <h2 class="font-bold">
                                      Profession Information
                                    </h2>
                                    <i
                                      class=" fa fa-briefcase text-primary-600 fa-2xl"
                                    ></i>
                                  </header>
                                  <hr class="mb-2 text-grey-100" />
                                  <div class="flex flex-row">
                                    <div>
                                      <div class="flex flex-col ml-8 mr-12 mb-medium">
                                        <div>
                                          <div
                                            class="flex flex-col ml-8 mr-12  mb-medium"
                                          >
                                            <div class="grid grid-cols-2 gap-4">
                                              <p
                                                class="text-base font-bold  text-primary-600"
                                              >
                                                Department Name
                                              </p>
                                              <p
                                                class="text-base font-bold text-black "
                                              >
                                                {{
                                                  goodStanding.department
                                                    ? goodStanding.department.name
                                                    : ""
                                                }}
                                              </p>
                                            </div>

                                            <div class="grid grid-cols-2 gap-4">
                                              <p
                                                class="text-base font-bold  text-primary-600"
                                              >
                                                Profession
                                              </p>
                                              <div
                                                class="text-base font-bold text-black "
                                              >
                                                {{
                                                  goodStanding.GSProfessionals.professionalTypes
                                                    ? goodStanding.GSProfessionals.professionalTypes
                                                        .name != "Other"
                                                      ? goodStanding.GSProfessionals
                                                          .professionalTypes.name
                                                      : goodStanding.GSProfessionals
                                                          .otherProfessionType +
                                                        "/" +
                                                        goodStanding.GSProfessionals
                                                          .otherProfessionTypeAmharic
                                                    : ""
                                                }}
                                                <span
                                                  class="cursor-pointer  text-primary-500"
                                                  @click="
                                                    allowProfessionChange(
                                                      goodStanding.departmentId,
                                                      goodStanding.GSProfessionals
                                                    )
                                                  "
                                                >
                                                  <i
                                                    class="text-green-200  fa fa-pencil"
                                                  ></i
                                                  >Edit
                                                </span>

                                                <div
                                                  :id="goodStanding.departmentId"
                                                  class="flex justify-center"
                                                  v-if="allowProfChange[goodStanding.departmentId]"
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
                                                        changeNewProfession(
                                                          goodStanding.GSProfessionals
                                                        )
                                                      "
                                                      v-model="
                                                        goodStanding.GSProfessionals
                                                          .professionalTypeId
                                                      "
                                                      aria-label="Default select example"
                                                    >
                                                      <option selected disabled>
                                                        Choose new profession
                                                      </option>
                                                      <option
                                                        v-for="prof in newProf[
                                                          goodStanding.departmentId
                                                        ]"
                                                        :key="prof.id"
                                                        :value="prof.id"
                                                      >
                                                        {{ prof.name }}
                                                      </option>
                                                    </select>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>

                                            <div class="grid grid-cols-2 gap-4">
                                              <p
                                                class="text-base font-bold  text-primary-600"
                                              >
                                                Prefix
                                              </p>
                                              <div
                                                class="text-base font-bold text-black "
                                              >
                                                <div
                                                  class="w-full mb-3"
                                                  v-if="showPrefixFor[goodStanding.departmentId]"
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
                                                    v-model="goodStanding.GSProfessionals.prefixId"
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
                                      </div>
                                    </div>
                                  </div>
                                </article>
                                <!-- END Article -->
                              </div>
                              <!-- Profession Card -->
                            </div>
                          </div>

                          <div v-else class="flex flex-wrap justify-start">
                            <div>
                              <picture v-if="docs.length > 0">
                                <div v-if="docs[index].fileType.split('/')[1] == 'pdf'">
                                  <div>
                                    <iframe
                                      v-bind:src="googleApi + '' + docs[index].filePath"
                                    ></iframe>
                                  </div>
                                  <br />
                                  <a @click="openPdfInNewTab(docs[index].filePath)"
                                    >see pdf in detail</a
                                  >
                                </div>

                                <div v-else>
                                  <img
                                    class="duration-500 ease-in scale-50 cursor-pointer  hover:scale-75"
                                    @click="
                                      viewImage([
                                        {
                                          src: docs[index] ? googleApi + docs[index].filePath : '',
                                          title: 'Image Caption 1',
                                        },
                                      ])
                                    "
                                    style="height: 600px; width: 800px"
                                    v-bind:src="googleApi + '' + docs[index].filePath"
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
                            class="relative h-3 max-w-xl ml-10 overflow-hidden rounded-full "
                          >
                            <div class="absolute w-full h-full"></div>
                            <div
                              id="bar"
                              class="relative w-0 h-full transition-all duration-1000 ease-out bg-green-500 "
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="container w-64 h-40 p-4 mt-8 mr-8 rounded-lg shadow-lg  box-shadow-pop"
                  >
                    <div class="mt-8">
                      <div class="flex items-center justify-center my-auto">
                        <h2 class="text-3xl text-red-300">
                          {{ rejected.length }}
                        </h2>
                      </div>
                      <div class="flex items-center justify-center">
                        <h2 class="text-3xl text-red-300">Rejected</h2>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="flex items-center justify-center mb-medium"
                  v-if="showButtons && !showLoadingButtons"
                >
                  <div v-for="button in buttons" v-bind:key="button.name" v-bind:value="button.id">
                    <div class="vld-parent">
                      <loading
                        :active="isLoadingFinalAction"
                        :is-full-page="false"
                        :color="'#2F639D'"
                        :opacity="1"
                      ></loading>
                      <button
                        v-if="button.code != 'US'"
                        class="inline-block px-6 text-xs font-medium leading-tight text-white uppercase transition duration-150 ease-in-out rounded shadow-lg  bg-primary-700 hover:text-primary-600 hover:border"
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
                      class="relative flex justify-center w-full bg-white  card-wrapper sm:rounded-lg mb-xl mt-large"
                    >
                      <div class="">
                        <!--content-->
                        <div class="w-full p-2">
                          <!--header-->
                          <div
                            class="flex items-start justify-between p-2 border-b border-solid rounded-t  border-blueGray-200 mt-medium"
                          >
                            <h3 class="text-3xl font-semibold">Remark</h3>
                            <div
                              class="float-right text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none  opacity-5 focus:outline-none"
                              v-on:click="toggleModal()"
                            >
                              <i class="fa fa-close"></i>
                            </div>
                          </div>
                          <!--body-->
                          <div class="modalBody pb-xl">
                            <div class="flex justify-center mt-medium"></div>
                            <div class="relative flex-auto w-full p-6">
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
                                  class="flex flex-col items-center justify-center "
                                >
                                  <div class="mt-8">
                                    <label
                                      class="items-center justify-center text-2xl  text-grey-800"
                                    >
                                      {{ modalDocumentTypeName }}
                                    </label>
                                    <div
                                      class="flex flex-wrap justify-center max-w-sm overflow-hidden rounded "
                                    >
                                      <picture class="imageViewer" v-if="rejectedObj.length > 0">
                                        <img
                                          v-bind:src="googleApi + '' + rejectedObj[ind].filePath"
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
                          <label for="">Reason for declining the letter request *</label>
                          <textarea
                            v-model="goodStanding.remark"
                            class="flex w-full border rounded-md resize-none  tArea mb-small"
                            required
                          ></textarea>
                          <div
                            class="flex items-center justify-center p-6 border-t border-solid rounded-b  border-blueGray-200"
                          >
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
                              type="button"
                              v-on:click="toggleModal()"
                            >
                              Close
                            </button>
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
                              v-on:click="submitRemark()"
                            >
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
    </div>
    <!-- Main Content -->
  </section>
</template>
<script>
  import { useStore } from "vuex";
  import { useRoute, useRouter } from "vue-router";
  import { ref, onMounted } from "vue";

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
  import PhotoViewer from "photoviewer";
  import "photoviewer/dist/photoviewer.css";
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
      const toast = useToast();
      const router = useRouter();

      let startDate = ref("");
      let isLoadingStart = ref(false);
      let endDate = ref("");
      let institutions = ref([]);
      let showDateError = ref({ show: false, message: "" });
      let instSearched = ref({ name: "" });
      let superviseAction = ref("");
      let supervisor = ref("");
      let showPrefixFor = ref([]);

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
      let prefixes = ref({});
      let professionalTypeIds = ref([]);
      let professionalTypeIdss = ref([]);

      let prefix = ref();
      let canChangeName = ref(false);
      let showProfessionChangeError = ref(false);

      let showNameChangeFlash = ref(false);
      let showNameChangeErrorFlash = ref(false);
      let showTransferErrorMessage = ref(false);
      let showTransferSuccessMessage = ref(false);
      let showLicenseDateRequirementError = ref(false);
      let departmentId = ref(0);
      let admin = localStorage.getItem("allAdminData");
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
      let newProf = ref([]);
      let showFlash = ref(false);
      let showErrorFlash = ref(false);
      let showDeclineFlash = ref(false);
      let sendDeclinedData = ref(true);
      let fromModalSendDeclinedData = ref(false);
      let allowProfChange = ref({});
      let allowOtherProfChange = ref({});
      let showActionLoading = ref(false);
      let showLoadingButtons = ref(false);
      let tempProf = ref([]);
      let isLoadingFinalAction = ref(false);
      let professionalTypes = ref([]);
      let evaluateRoute = ref("/admin/evaluate/goodStanding" + route.params.id);

      const created = async (applicationTypeName, applicationId) => {
        applicationType.value = applicationTypeName;

        store.dispatch("reviewer/getGoodStandingApplication", applicationId).then((res) => {
          goodStanding.value = res.data.data;
          departmentId.value =
            goodStanding.value && goodStanding.value.department
              ? goodStanding.value.department.id
              : "";
          profileInfo.value = goodStanding.value.profile;
          buttons.value = res.data.data.applicationStatus.buttons;
          docs.value = res.data.data.documents;
          totalSteps.value = docs.value ? docs.value.length : 0;
          accepted.value =
            goodStanding.value &&
            goodStanding.value.acceptedFields &&
            goodStanding.value.acceptedFields.length > 0
              ? goodStanding.value.acceptedFields
              : (accepted.value = []);
          rejected.value =
            goodStanding.value &&
            goodStanding.value.declinedFields &&
            goodStanding.value.declinedFields.length > 0
              ? goodStanding.value.declinedFields
              : (rejected.value = []);
          completedSteps.value = accepted.value.length + rejected.value.length;
          index.value = completedSteps.value;
          if (completedSteps.value == docs.value.length) {
            showButtons.value = true;
          }
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
                if (goodStanding.value.documents[i].documentTypeCode == rejected.value[j]) {
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
              accepted.value.includes(docs.value[index.value - 1].documentTypeCode) ||
              rejected.value.includes(docs.value[index.value - 1].documentTypeCode)
            ) {
              if (goodStanding.value.documnets) {
                findDocumentType(documentTypes.value, docs.value[index.value]);
              }
            }
          }

          if (admin && admin.expertLevelId == 3) {
            showTransferToAdminButton.value = false;
          }
          isLoadingStart.value = false;
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
          accepted.value.includes(doc && doc.documentTypeCode ? doc.documentTypeCode : "") ||
          rejected.value.includes(doc && doc.documentTypeCode ? doc.documentTypeCode : "")
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
          modalFindDocumentType(documentTypes.value, rejectedObj.value[ind.value]);
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
        isLoadingStart.value = true;
        store.dispatch("goodStanding/getExpertLevel").then((res) => {
          let federalData = res.data.data.filter((r) => r.code == "FED");
          let transferData = {
            licenseId: route.params.applicationId,
            expertLevelId: federalData[0].id,
            createdByAdminId: adminId,
          };
          isLoadingFinalAction.value = true;
          store.dispatch("reviewer/transferToFederal", transferData).then((res) => {
            isLoadingStart.value = false;
            if (res.data?.status == "Success") {
              toast.success("Application  transfered Successfully", {
                timeout: 5000,
                position: "bottom-center",
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                icon: true,
              });
              isLoadingFinalAction.value = false;
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
            !accepted.value.includes(doc && doc.documentTypeCode ? doc.documentTypeCode : "")
          ) {
            accepted.value.push(doc && doc.documentTypeCode ? doc.documentTypeCode : "");
            if (index.value == docs.value.length - 1) {
              showButtons.value = true;
            } else {
              index.value = index.value + 1;
              amount.value = ((index.value + 1) / docs.value.length) * 100;
              width.value = "width:" + amount.value + "%";
              findDocumentType(documentTypes.value, docs.value[index.value]);
            }
            if (rejected.value.includes(doc && doc.documentTypeCode ? doc.documentTypeCode : "")) {
              rejected.value.splice(
                rejected.value.indexOf(doc && doc.documentTypeCode ? doc.documentTypeCode : ""),
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
          accepted.value.push(doc ? (doc && doc.documentTypeCode ? doc.documentTypeCode : "") : "");
          if (index.value == docs.value.length - 1) {
            showButtons.value = true;
          } else {
            index.value = index.value + 1;
            amount.value = ((index.value + 1) / docs.value.length) * 100;
            width.value = "width:" + amount.value + "%";
            findDocumentType(documentTypes.value, docs.value[index.value]);
          }
          if (
            rejected.value.includes(doc && doc && doc.documentTypeCode ? doc.documentTypeCode : "")
          ) {
            rejected.value.splice(
              rejected.value.indexOf(doc && doc.documentTypeCode ? doc.documentTypeCode : ""),
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
          if (!rejected.value.includes(doc && doc.documentTypeCode ? doc.documentTypeCode : "")) {
            rejected.value.push(doc && doc.documentTypeCode ? doc.documentTypeCode : "");
            rejectedObj.value.push(doc);
            if (index.value == docs.value.length - 1) {
              showButtons.value = true;
            } else {
              index.value = index.value + 1;
              amount.value = ((index.value + 1) / docs.value.length) * 100;
              width.value = "width:" + amount.value + "%";
              findDocumentType(documentTypes.value, docs.value[index.value]);
            }
            if (accepted.value.includes(doc && doc.documentTypeCode ? doc.documentTypeCode : "")) {
              accepted.value.splice(
                accepted.value.indexOf(doc && doc.documentTypeCode ? doc.documentTypeCode : ""),
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
          rejected.value.push(doc && doc.documentTypeCode ? doc.documentTypeCode : "");
          rejectedObj.value.push(doc);
          if (index.value == docs.value.length - 1) {
            showButtons.value = true;
          } else {
            index.value = index.value + 1;
            amount.value = ((index.value + 1) / docs.value.length) * 100;
            width.value = "width:" + amount.value + "%";
            findDocumentType(documentTypes.value, docs.value[index.value]);
          }
          if (accepted.value.includes(doc && doc.documentTypeCode ? doc.documentTypeCode : "")) {
            accepted.value.splice(
              accepted.value.indexOf(doc && doc.documentTypeCode ? doc.documentTypeCode : ""),
              1
            );
          }
        }
      };

      const action = (actionValue) => {
        let smsMessage = "";

        if (actionValue === "ApproveEvent") {
          smsMessage = goodStanding.value
            ? "Dear applicant your applied letter of goodstanding with license number " +
              goodStanding.value.goodStandingCode +
              " has been approved after careful examination of your uploaded documents by our reviewers. Thank you for using eHPL. visit https://hrl.moh.gov.et for more."
            : "";
        } else if (
          actionValue == "DeclineEvent" &&
          (goodStanding.value.remark == "" || goodStanding.value.remark == null)
        ) {
          smsMessage = goodStanding.value
            ? "Dear applicant your applied letter of goodstanding with license number " +
              goodStanding.value.goodStandingCode +
              " has been declined after careful examination of your uploaded documents by our reviewers. Thank you for using eHPL. visit https://hrl.moh.gov.et for more."
            : "";

          showRemark.value = true;
          sendDeclinedData.value = false;

          return;
        } else if (actionValue == "ReviewerDraftEvent") {
          if (
            goodStanding.value.GSProfessionals.professionalTypes.id !=
            goodStanding.value.GSProfessionals.professionalTypeId
          ) {
            goodStanding.value.isProfessionChanged = true;
          }
        }

        isLoadingStart.value = true;
        goodStanding.value.declinedFields = rejected.value;
        goodStanding.value.acceptedFields = accepted.value;
        goodStanding.value.certified = true;
        goodStanding.value.certifiedDate = new Date();
        actionValue == "DeclineEventFinal" ? (actionValue = "DeclineEvent") : "";
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
        isLoadingFinalAction.value = true;
        store
          .dispatch("reviewer/editGoodStanding", req)
          .then((res) => {
            isLoadingStart.value = false;
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
              isLoadingFinalAction.value = false;
              router.push({ name: "GoodStandingApproved" });
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
        if (
          goodStanding.value &&
          goodStanding.value.remark &&
          goodStanding.value.remark.length > 10
        ) {
          showRemark.value = !showRemark.value;
          sendDeclinedData.value = true;
          fromModalSendDeclinedData.value = true;
          action("DeclineEventFinal");
        } else if (
          goodStanding.value &&
          goodStanding.value.remark &&
          goodStanding.value.remark.length < 10 &&
          goodStanding.value.remark.length > 0
        ) {
          toast.error("Reason must be greater than 10 letters", {
            timeout: 5000,
            position: "bottom-center",
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            icon: true,
          });
        } else {
          toast.error("Please provide a reason for declining the letter", {
            timeout: 5000,
            position: "bottom-center",
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            icon: true,
          });
        }
      };

      const toggleModal = () => {
        showRemark.value = !showRemark.value;
      };

      const openPdfInNewTab = (pdfPath) => {
        pdfFilePath.value = pdfPath;
        window.open(googleApi + "" + pdfPath, "_blank");
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
      const toChangeProfession = () => {
        isToChangeProfession.value = true;
      };
      const cancelProfessionChange = () => {
        isToChangeProfession.value = false;
      };
      const changeProfession = () => {};

      const getProfessionalTypesByDepartmentId = async (profType) => {
        let profId = {
          departmentId: profType.departmentId,
          educationalLevelId: profType.educationLevelId,
        };
        await store.dispatch("reviewer/getProfessionalTypeByDepartmentId", profId).then((res) => {
          newProf.value[profType.departmentId] = res.data.data;
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
          alternativeGrandFatherName: goodStanding.value.profile.alternativeGrandFatherName,
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
                  professionalTypeIdss.value.indexOf(profession.professionalTypes.id),
                  1
                )
              : professionalTypeIdss.value.splice(
                  professionalTypeIdss.value.indexOf(profession.id),
                  1
                );

            if (previousProfession) {
              professionalTypePrefixes.value = professionalTypePrefixes.value.filter((data) => {
                return data.professionalTypeId != profession.professionalTypes.id;
              });
            } else {
              professionalTypePrefixes.value = professionalTypePrefixes.value.filter((data) => {
                return data.professionalTypeId != profession.id;
              });
            }

            if (previousProfession && profession.professionalTypes.name == "Other") {
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
          if (professionId !== professionalTypePrefixes.value[i].professionalTypeId) {
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
              if (previousProfessionType[i].professionalTypeId != professionalTypeIdss.value[j]) {
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

      const changeAction = (action) => {
        superviseAction.value = action;
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

      const allowProfessionChange = (depId, GS) => {
        let profType = {
          departmentId: depId,
          educationLevelId: GS.professionalTypes.educationalLevelId,
        };
        getProfessionalTypesByDepartmentId(profType);

        allowProfChange.value[depId] ? allowProfChange.value[depId] : false;
        allowProfChange.value[depId] = !allowProfChange.value[depId];
        allowOtherProfChange.value[depId] = false;

        console.log(allowProfChange.value);
      };

      const changeNewProfession = (profession) => {
        console.log(profession);
      };
      const viewImage = (image) => {
        var options = {
          index: 0, // this option means you will start at first image
        };
        new PhotoViewer(image, options);
      };
      onMounted(() => {
        isLoadingStart.value = true;
        created("Good Standing", route.params.id);
        store.dispatch("goodstanding/getInstitution").then((res) => {
          institutions.value = res.data.data.filter((elm) => elm.isLocal == true);
        });
        store.dispatch("lookups/getProfessionalPrefix").then((res) => {
          prefixes.value = res.data.data;
        });
      });
      return {
        instSearched,
        showDateError,
        endDate,
        startDate,
        allowProfessionChange,
        viewImage,
        supervisor,
        resultQuery,
        changeAction,
        changeNewProfession,
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
        allowProfChange,
        allowOtherProfChange,
        findDocumentType,
        documentTypeName,
        accepted,
        tempProf,
        rejected,
        isLoadingStart,
        newProf,
        showPrefix,
        accept,
        transferToFederal,
        showTransferToAdminButton,
        showTransferSuccessMessage,
        showTransferErrorMessage,
        reject,
        prefixes,
        buttons,
        action,
        showButtons,
        isToChangeProfession,
        profileInfo,
        showPrefixFor,
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
