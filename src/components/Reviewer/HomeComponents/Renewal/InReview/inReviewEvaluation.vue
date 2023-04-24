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
      <div class="vld-parent mt-4">
        <loading
          :active="isLoadingStart"
          :is-full-page="false"
          :color="'#2F639D'"
          :opacity="1"
        ></loading>
        <div class="container mx-auto px-4 sm:px-4 mb-12">
          <div
            v-if="
              renewal &&
                renewal.applicationStatus &&
                (renewal.applicationStatus.code == 'IRV' ||
                  renewal.applicationStatus.code == 'REVDRA')
            "
            class="rounded-lg bg-primary-800 w-full shadow-md"
          >
            <h2 class="text-white ml-4 text-xl">
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
                          {{ accepted ? accepted.length : 0 }}
                        </h2>
                      </div>
                      <div class="flex justify-center items-center">
                        <h2 class="text-3xl">Accepted</h2>
                      </div>
                    </div>

                    <div
                      class="container mt-8   rounded-lg overflow-hidden shadow-lg my-2 bg-white"
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
                        class="relative flex justify-between items-center flex-row px-6 z-50 -mt-10"
                      >
                        <h2
                          class="text-primary-600 font-bold text-xl underline"
                        >
                          Applicant's Profile
                        </h2>
                      </div>
                      <div class="pt-6 pb-8 text-gray-600 p-2">
                        <div class="grid grid-cols-3">
                          <div class="col-span-1 text-primary-600 mt-4">
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
                          <div class="col-span-1 text-primary-600 mt-2">
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
                          <div class="col-span-1 text-primary-600 mt-2">
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
                          <div class="col-span-1 text-primary-600 mt-2">
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
                                    <h2 class="font-bold">
                                      Contact Information
                                    </h2>
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
                                        renewal && renewal.applicant
                                          ? renewal.applicant.phoneNumber
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
                                    <small class="font-bold text-red-300"
                                      >Uncheck departments if you want to remove
                                      them</small
                                    >
                                    <i
                                      class="
                                      fa fa-briefcase
                                      text-primary-600
                                      fa-2xl
                                    "
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
                                            class="
                                            form-check-input
                                            appearance-none
                                            h-8
                                            w-8
                                            border border-gray-300
                                            rounded-md
                                            bg-red-300
                                            transition
                                            duration-200
                                            my-1
                                            btn-check:bg-white
                                            focus:outline-none
                                            align-top
                                            bg-no-repeat bg-center bg-contain
                                            float-left
                                            cursor-pointer
                                          "
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
                                            class="
                                            cursor-pointer
                                            text-primary-500
                                          "
                                          >
                                            <i
                                              class="fa fa-pencil text-green-200"
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
                                          <!-- Other Profession  -->
                                        </div>
                                      </div>

                                      <div class="grid grid-cols-2 gap-4">
                                        <p
                                          class="
                                          text-primary-600 text-base
                                          font-bold
                                        "
                                        >
                                          Prefix
                                        </p>
                                        <div
                                          class="text-black text-base font-bold"
                                        >
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
                                            hover:text-primary-600
                                            hover:shadow-lg
                                            focus:bg-purple-700
                                            focus:shadow-lg
                                            focus:outline-none
                                            focus:ring-0
                                            active:bg-purple-800
                                            active:shadow-lg
                                            transition
                                            duration-150
                                            ease-in-out
                                          "
                                            @click="
                                              showPrefix(education.departmentId)
                                            "
                                          >
                                            Add Prefix
                                          </button>
                                          <div
                                            class="mb-3 w-full"
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
                                    <span
                                      class="
                                      font-bold
                                      text-xl
                                      ml-8
                                      bg-grey-300
                                      text-white
                                      p-2
                                      rounded-lg
                                    "
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

                          <div v-else class="flex justify-start flex-wrap">
                            <div>
                              <picture v-if="docs.length > 0">
                                <div
                                  v-if="
                                    docs[index] &&
                                      docs[index].fileName &&
                                      docs[index].fileName.split('.')[1] ==
                                        'pdf'
                                  "
                                >
                                  <div>
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
                                  >
                                    See pdf in detail
                                  </button>
                                </div>

                                <div v-else>
                                  <h5 class="text-grey-200 text-2xl">
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
                                        class="
                                    scale-50
                                    hover:scale-75
                                    ease-in
                                    duration-500
                                    cursor-pointer
                                  "
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
                            v-if="showTransferToFederal == true"
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
                          {{ rejected ? rejected.length : 0 }}
                        </h2>
                      </div>
                      <div class="flex justify-center items-center">
                        <h2 class="text-red-300 text-3xl">Rejected</h2>
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
                    class="flex justify-center items-center mb-medium"
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
                <Modal v-if="showRemark">
                  <div class="h-screen overflow-y-hidden">
                    <div
                      class="
                      card-wrapper
                      bg-white
                      sm:rounded-lg
                      w-full
                      flex
                      justify-center
                      relative
                      mt-20
                    "
                    >
                      <!--content-->
                      <div class="w-full p-2 m-4">
                        <!--header-->
                        <div
                          class="
                          flex
                          items-start
                          justify-between
                          border-b border-solid border-grey-100
                          m-4
                          p-2
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
                            cursor-pointer
                          "
                            v-on:click="showRemark = false"
                          >
                            <span class="text-3xl">
                              <i class="fa fa-close "></i
                            ></span>
                          </div>
                        </div>
                        <!--body-->
                        <div
                          class="modalBody pb-xl"
                          v-if="nothingDropped == true"
                        >
                          <div class="flex mt-medium justify-center">
                            <h2>Declined documents</h2>
                          </div>
                          <div class="relative p-6 flex-auto w-full">
                            <div class="flex justify-center">
                              <div class="mt-12">
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
                                class="flex flex-col justify-center items-center"
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

                              <div class="mt-12">
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
                        <label for="" class="m-4">{{
                          nothingDropped
                            ? "Remark on why you are declining the license"
                            : "Remark on why you have dropped the department/s"
                        }}</label>
                        <div class="mr-4">
                          <textarea
                            v-model="renewal.remark"
                            @keyup="isremarkFilled()"
                            class="
                          resize-none
                          tArea
                          border
                          rounded-sm
                          flex
                          m-4
                          w-full
                        "
                            rows="6"
                          ></textarea>
                        </div>
                        <small class="text-red-300 m-8" v-if="showRemarkError"
                          >Remark note must be more than 10 letters</small
                        >
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
                            type="button"
                            v-on:click="showRemark = false"
                          >
                            Close
                          </button>
                          <button
                            type="button"
                            :class="
                              remarkFilled == false
                                ? 'inline-block px-6 text-white bg-grey-300 font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 hover:bg-primary-400 hover:text-white ease-in-out pointer-events-none'
                                : 'inline-block px-6 text-white bg-primary-600 font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 hover:bg-primary-400 hover:text-white ease-in-out '
                            "
                            v-on:click="submitRemark()"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal>
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
import Modal from "@/sharedComponents/Modal";
import { useToast } from "vue-toastification";
import moment from "moment";
import ReviewerSideNav from "../SharedComponents/sideNav.vue";
import ReviewerNavBar from "../../../SharedComponents/navBar.vue";
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import RadialProgressBar from "vue3-radial-progress";
import PhotoViewer from "photoviewer";
import "photoviewer/dist/photoviewer.css";
export default {
  components: {
    Modal,
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
          rejected.value =
            renewal.value &&
            renewal.value.declinedFields &&
            renewal.value.declinedFields.length > 0
              ? renewal.value.declinedFields
              : (rejected.value = []);
          completedSteps.value = accepted.value.length + rejected.value.length;
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

      if (actionValue === "ApproveEvent" && nothingDropped.value == true) {
        smsMessage = renewal.value
          ? "Dear applicant your applied renewal of number " +
            renewal.value.renewalCode +
            " has been approved after careful examination of your uploaded documents by our reviewers. Thank you for using eHPL. visit https://hrl.moh.gov.et for more."
          : "";
      } else if (actionValue == "ReviewerDraftEvent") {
        showRemarkError.value = false;
        showRemark.value = false;
      } else if (
        (actionValue == "DeclineEvent" && renewal.value.remark == null) ||
        renewal.value.remark == ""
      ) {
        showRemarkError.value = true;
        nothingDropped.value == true;
        smsMessage = renewal.value
          ? "Dear applicant your applied renewal of number " +
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
      let tempRemarkValue = true;
      renewal.value.educations.forEach((element) => {
        if (element && element.isDropped == true) {
          tempRemarkValue = false;
        } else {
          tempRemarkValue = true;
        }
      });
      if (tempRemarkValue == true) {
        renewal.value.remark = "";
      }

      if (applicationType.value == "Renewal") {
        isLoadingAction.value = true;
        store
          .dispatch("reviewer/editRenewal", req)
          .then((res) => {
            showActionLoading.value = false;
            isLoadingAction.value = false;
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
      renewal.value.superviseEndDate = endDate.value ? endDate.value : "";
      renewal.value.superviseStartDate = startDate.value ? startDate.value : "";
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
            ? "Dear applicant your applied renewal of number " +
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
