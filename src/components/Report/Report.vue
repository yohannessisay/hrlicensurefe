<template
  ><div>
    <!-- <ReviewerNavBar tab="Report" /> -->
    <div class="flex flex-row">
      <!-- <div>
        <ReviewerSideBar style="width: 30vh" />
      </div> -->
      <div v-if="loader" style="margin-left: 45%; margin-top: 5%">
        <Spinner />
      </div>
      <div v-else>
        <div class="px-4 sm:px-4">
          <div class="py-8">
            <div class="flex flex-row titile-container">
              <div class="ml-2 flex flex-row">
                <div
                  @click="fetchReport(0, paginationSize, 'new_license')"
                  :class="
                    selectBackgroundColor == 'newLicense' && 'applicationType'
                  "
                >
                  <a class="text-2xl font-semibold leading-tight">
                    New License Report
                  </a>
                </div>
                <div
                  @click="fetchReport(0, paginationSize, 'renewal')"
                  class="ml-8"
                  :class="
                    selectBackgroundColor == 'renewal' && 'applicationType'
                  "
                >
                  <a class="text-2xl font-semibold leading-tight">
                    Renewal Report
                  </a>
                </div>
                <div
                  @click="fetchReport(0, paginationSize, 'verification')()"
                  class="ml-8"
                  :class="
                    selectBackgroundColor == 'verification' && 'applicationType'
                  "
                >
                  <a class="text-2xl font-semibold leading-tight">
                    Verification Report
                  </a>
                </div>
                <div
                  @click="fetchReport(0, paginationSize, 'good_standing')"
                  class="ml-8"
                  :class="
                    selectBackgroundColor == 'goodStanding' && 'applicationType'
                  "
                >
                  <a class="text-2xl font-semibold leading-tight">
                    Goodstanding Report
                  </a>
                </div>
              </div>
              <div id="export" @click="exportTable()" class="mt-4">
                <a class="text-2xl font-semibold leading-tight">
                  <i class="fa fa-file-text" aria-hidden="true"></i>
                  Export
                </a>
              </div>
            </div>
            <div class="mt-8">
              <label>Filter By:</label>
            </div>
            <div class="flex filter-container">
              <div class="flex flex-col mb-medium w-72 mr-4">
                <label class="text-primary-700">Professional Type</label>
                <select
                  class="max-w-3xl"
                  v-model="filter.profType"
                  @change="filterProfession(filter.profType)"
                >
                  <option v-bind:key="filter.all" v-bind:value="filter.all"
                    >All</option
                  >
                  <option
                    v-for="profession in professions"
                    v-bind:key="profession.name"
                    v-bind:value="profession.name"
                  >
                    {{ profession.name }}
                  </option>
                </select>
              </div>
              <div class="flex flex-col mb-small w-72 mr-4">
                <label class="text-primary-700">Region</label>
                <select
                  class="max-w-3xl"
                  v-model="filter.region"
                  @change="filterRegion(filter.region)"
                >
                  <option v-bind:key="filter.all" v-bind:value="filter.all"
                    >All</option
                  >
                  <option
                    v-for="region in regions"
                    v-bind:key="region.name"
                    v-bind:value="region"
                  >
                    {{ region.name }}
                  </option>
                </select>
              </div>
              <div class="flex flex-col mb-small w-72 mr-4">
                <label class="text-primary-700">Zone</label>
                <select
                  class="max-w-3xl"
                  v-model="filter.zone"
                  @change="filterZone(filter.zone)"
                >
                  <option v-bind:key="filter.all" v-bind:value="filter.all"
                    >All</option
                  >
                  <option
                    v-for="zone in zones"
                    v-bind:key="zone.name"
                    v-bind:value="zone"
                  >
                    {{ zone.name }}
                  </option>
                </select>
              </div>
              <div class="flex flex-col mb-small w-72 mr-4">
                <label class="text-primary-700">Woreda</label>
                <select
                  class="max-w-3xl"
                  v-model="filter.woreda"
                  @change="filterWoreda(filter.woreda)"
                >
                  <option v-bind:key="filter.all" v-bind:value="filter.all"
                    >All</option
                  >
                  <option
                    v-for="woreda in woredas"
                    v-bind:key="woreda.name"
                    v-bind:value="woreda"
                  >
                    {{ woreda.name }}
                  </option>
                </select>
              </div>
              <div class="flex flex-col mb-small w-72 mr-4">
                <label class="text-primary-700">Gender</label>
                <div class="flex w-full">
                  <div class="flex w-1/3">
                    <div class="flex flex-col w-60 mr-4">
                      <div class="flex py-2">
                        <input
                          type="radio"
                          id="both"
                          value="both"
                          v-model="filter.gender"
                          @change="filterGender(filter.gender)"
                        />
                        <label class="ml-tiny text-primary-700" for="female">
                          Both
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col mb-small w-60 mr-4">
                    <div class="flex py-2">
                      <input
                        class="flex flex-col"
                        type="radio"
                        id="male"
                        value="male"
                        v-model="filter.gender"
                        @change="filterGender(filter.gender)"
                      />
                      <label
                        class="ml-tiny flex flex-col text-primary-700"
                        for="male"
                      >
                        Male
                      </label>
                    </div>
                  </div>
                  <div class="flex w-1/3">
                    <div class="flex flex-col w-60">
                      <div class="flex py-2">
                        <input
                          type="radio"
                          id="female"
                          value="female"
                          v-model="filter.gender"
                          @change="filterGender(filter.gender)"
                        />
                        <label class="ml-tiny text-primary-700" for="female">
                          Female
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col mb-small w-80 mr-4">
                <label class="text-primary-700">Application Statuses</label>
                <select
                  class="max-w-3xl"
                  clearable="{true}"
                  v-model="filter.status"
                  @change="filterAppStatus(filter.status)"
                >
                  <option v-bind:key="filter.all" v-bind:value="filter.all"
                    >All</option
                  >
                  <option
                    v-for="status in applicationStatuses"
                    v-bind:key="status.name"
                    v-bind:value="status.name"
                  >
                    {{ status.name }}
                  </option>
                </select>
              </div>
              <div class="flex flex-row mb-small w-80 mr-4">
                <label class="text-primary-700 mr-2">From</label>
                <input
                  v-model="filter.startDate"
                  class="max-w-3xl mr-5"
                  type="date"
                />
                <label class="text-primary-700 mr-2">To</label>
                <input
                  v-model="filter.endDate"
                  @change="filterDate(filter.startDate, filter.endDate)"
                  class="max-w-3xl mr-5"
                  type="date"
                />
              </div>
            </div>
            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 max-w-4xl">
              <label class="text-primary-700">Show</label>
                <select
                  class="max-w-3xl"
                  v-model="paginationSize"
                  @change="handlePagSize($)"
                >
                  <option
                    v-for="size in paginationSizeList"
                    v-bind:key="size"
                    v-bind:value="size"
                  >
                    {{ size }}
                  </option>
                </select>
              <div id="printable" class="shadow-md rounded-lg" v-if="!showLoading">
                <!-- <table class="leading-normal">
                  <thead>
                    <tr class="">
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        First Name
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        Last Name
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        Grand Father Name
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        Date of Birth
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        Nationality
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        Gender
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        Phone No.
                      </th>

                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        Professional Type
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        Region
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        Zone
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        Woreda
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        Start Date
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        End Date
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        Remark
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        License Code
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        Reviewer
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        Expert Level
                      </th>

                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        Department
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        Institution
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in report" :key="item">
                      <td class="px-5 py-5 border-gray-200 bg-white text-sm">
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.name }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-5 py-5  border-gray-200 bg-white text-sm">
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.fatherName }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-5 py-5  border-gray-200 bg-white text-sm">
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.grandFatherName }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-5 py-5  border-gray-200 bg-white text-sm">
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{
                                item.dateOfBirth
                                  ? moment(item.dateOfBirth).fromNow()
                                  : "-"
                              }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        v-if="item.nationality"
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.nationality.name }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        v-else
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              ---
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.gender }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.applicant.phoneNumber }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                        v-if="item.professionalTypes"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.professionalTypes.name }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                        v-if="item.region"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.region.name }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                        v-if="item.region"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.region.name }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                        v-if="item.region"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.region.name }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                        v-else
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              ---
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{
                                item.createdAt
                                  ? moment(item.createdAt).fromNow()
                                  : "-"
                              }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{
                                item.certifiedDate
                                  ? moment(item.certifiedDate).fromNow()
                                  : "-"
                              }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.applicationStatus.name }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        v-if="item.remark"
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.remark }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        v-else
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              ---
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        v-if="item.newLicenseCode"
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.newLicenseCode }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        v-if="item.renewalCode"
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.renewalCode }}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td
                        v-if="item.verificationCode"
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.verificationCode }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        v-if="item.goodStandingCode"
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.goodStandingCode }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        v-if="item.reviewer"
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.reviewer.name }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        v-else
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              ---
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        v-if="item.expertLevels"
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.expertLevels.name }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        v-if="item.education"
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.education.department.name }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        v-if="item.education"
                        class="px-5 py-5 border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.education.institution.name }}
                            </p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table> -->
                <table class="leading-normal" id="myTable">
                  <thead>
                    <tr class="">
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        First Name
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        Middle Name
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        Last Name
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        Alternative Full Name
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        Employee Prefix
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        Employee Id
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        Expire Date
                      </th>

                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        License Type
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        License Status
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        License Number
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        Remark
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        License Prefix
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        Issued Date
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        emp_mobile
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        emp_work_email
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        emp_gender
                      </th>

                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        Birth Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in report" :key="item">
                      <td class="px-5 py-5 border-gray-200 bg-white text-sm">
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.emp_first_name }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-5 py-5  border-gray-200 bg-white text-sm">
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.emp_middle_name }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-5 py-5  border-gray-200 bg-white text-sm">
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.emp_last_name }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-5 py-5  border-gray-200 bg-white text-sm">
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.alternative_first_name }}
                              {{ item.alternative_middle_name }}
                              {{ item.alternative_last_name }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        v-if="item.prefix_id"
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.prefix_id }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        v-else
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              ---
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        v-if="item.employee_id"
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.employee_id }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        v-else
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              ---
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.expiry_date }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                        v-if="item.license_type_id"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.license_type_id }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        v-else
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              ---
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                        v-if="item.license_status_id"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.license_status_id }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        v-else
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              ---
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                        v-if="item.license_no"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.license_no }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        v-else
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              ---
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                        v-if="item.remark"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.remark }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        v-else
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              ---
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                        v-if="item.prefix_id"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.prefix_id }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                        v-else
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              ---
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.issued_date }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        v-if="item.emp_mobile"
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.emp_mobile }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        v-else
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              ---
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        v-if="item.emp_work_email"
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.emp_work_email }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        v-else
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              ---
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        v-if="item.emp_gender"
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.emp_gender }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        v-else
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              ---
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        v-if="item.emp_birthday"
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{
                                moment(item.emp_birthday).format("MMM DD, YYYY")
                              }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        v-else
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              ---
                            </p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <VueTailwindPagination
                    :current="currentPage"
                    :total="totalCount"
                    :per-page="paginationSize"
                    @page-changed="pageChanged($event)"
                    text-before-input="Go to page"
                    text-after-input="Go"
                  />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
import ReviewerNavBar from "@/components/Reviewer/ReviewerNavBar";
import ReviewerSideBar from "../Reviewer/ReviewerSideNav.vue";
import Spinner from "@/sharedComponents/Spinner";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import moment from "moment";
import { saveAs } from "file-saver";
import "@ocrv/vue-tailwind-pagination/dist/style.css";
import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";

export default {
  components: {
    ReviewerNavBar,
    Spinner,
    ReviewerSideBar,
    VueTailwindPagination,
  },

  computed: {
    moment: () => moment,
    getAllassignedToOthers() {
      return store.getters["reviewer/getAssignedForEveryOneSearched"];
    },
  },
  setup(props, { emit }) {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    let selectedApplication = ref({
      newLicense: true,
      renewal: false,
      goodStanding: false,
      verification: false,
    });

    let currentPage = ref(1);
    let totalCount = ref();
    let lastIndex = ref(2);
    let report = ref([]);
    let showLoading = ref(false)
    let selectBackgroundColor = ref('newLicense');

    let indexValue = ref(0);
    let paginationSize = ref(10);
    const paginationSizeList = [10, 25, 50, 100];

    const pageChanged = (event) => {
      currentPage.value = event;
      indexValue.value = event - 1;
      fetchReport(indexValue.value, paginationSize.value, 'null');
    }
    const handlePagSize = () => {
      currentPage.value = 1;
      indexValue.value = 0;
      fetchReport(indexValue.value, paginationSize.value, 'null');
    };

    const fetchReport = (page, size, app_type, value) => {
      showLoading.value = true;
      
      if(app_type == 'newLicense') {
        changeBackgroundColor("newLicense");
      }
      else if(app_type == "renewal") {
        loader.value = true;
        changeBackgroundColor("renewal");
      } else if(app_type == 'goodStanding') {
        loader.value = true;
        changeBackgroundColor("goodStandinganding");
      } else if(app_type == 'verification') {
        loader.value = true;
        changeBackgroundColor("verification");
      }
      
      const apiParameters = [page, size, value];
      store.dispatch("reviewer/getLegacyData", apiParameters).then((res) => {
        report.value = res.rows;
        totalCount.value = res.count;
        showLoading.value = false;
        loader.value = false;
      });
    };
    

    let reportOld = ref([
      {
        name: "Eyosias",
        fatherName: "Desta",
        grandFatherName: "Langena",
        dateOfBirth: "2002-01-25T09:55:23.494Z",
        nationality: "Ethiopian",
        gender: "Male",
        applicant: { phoneNumber: "0990099909" },
        professionalTypes: { name: "Medical Doctor" },
        region: { name: "SNNPR" },
        createdAt: "2022-01-25T09:55:23.494Z",
        certifiedDate: null,
        applicationStatus: { name: "Submitted" },
        remark: null,
        newLicenseCode: "NL099090",
        renewalCode: null,
        verificationCode: null,
        goodStandingCode: null,
        reviewer: { name: "Robel Ephraim RE" },
        expertLevels: { name: "Regional" },
        education: {
          department: { name: "Psychology" },
          institution: { name: "AAU" },
        },
      },
      {
        name: "Ermias",
        fatherName: "Bitew",
        grandFatherName: "Meles",
        dateOfBirth: "2002-01-25T09:55:23.494Z",
        nationality: "Ethiopian",
        gender: "Male",
        applicant: { phoneNumber: "0990099909" },
        professionalTypes: { name: "Medical Doctor" },
        region: { name: "SNNPR" },
        createdAt: "2022-01-25T09:55:23.494Z",
        certifiedDate: null,
        applicationStatus: { name: "Submitted" },
        remark: null,
        newLicenseCode: "NL099090",
        renewalCode: null,
        verificationCode: null,
        goodStandingCode: null,
        reviewer: { name: "Robel Ephraim RE" },
        expertLevels: { name: "Regional" },
        education: {
          department: { name: "Psychology" },
          institution: { name: "AAU" },
        },
      },
      {
        name: "Robel",
        fatherName: "Ephraim",
        grandFatherName: "Abdisa",
        dateOfBirth: "2002-01-25T09:55:23.494Z",
        nationality: "Ethiopian",
        gender: "Male",
        applicant: { phoneNumber: "0990099909" },
        professionalTypes: { name: "Medical Doctor" },
        region: { name: "SNNPR" },
        createdAt: "2022-01-25T09:55:23.494Z",
        certifiedDate: null,
        applicationStatus: { name: "Submitted" },
        remark: null,
        newLicenseCode: "NL099090",
        renewalCode: null,
        verificationCode: null,
        goodStandingCode: null,
        reviewer: { name: "Robel Ephraim RE" },
        expertLevels: { name: "Regional" },
        education: {
          department: { name: "Psychology" },
          institution: { name: "AAU" },
        },
      },
      {
        name: "Mahlet",
        fatherName: "Samuel",
        grandFatherName: "Akalu",
        dateOfBirth: "2002-01-25T09:55:23.494Z",
        nationality: "Ethiopian",
        gender: "Female",
        applicant: { phoneNumber: "0990099909" },
        professionalTypes: { name: "Assistant nurse" },
        region: { name: "Oromia" },
        createdAt: "2022-01-25T09:55:23.494Z",
        certifiedDate: null,
        applicationStatus: { name: "Submitted" },
        remark: null,
        newLicenseCode: "NL099090",
        renewalCode: null,
        verificationCode: null,
        goodStandingCode: null,
        reviewer: { name: "Robel Ephraim RE" },
        expertLevels: { name: "Regional" },
        education: {
          department: { name: "Psychology" },
          institution: { name: "AAU" },
        },
      },
    ]);
    let professions = ref([]);
    let regions = ref([]);
    let zones = ref([]);
    let woredas = ref([]);
    let applicationStatuses = ref([]);

    let filter = ref({
      profType: "",
      gender: "",
      region: "",
      zone: "",
      woreda: "",
      status: "",
      startDate: "",
      endDate: "",
      all: null,
    });

    let loader = ref(false);

    const changeBackgroundColor = (title) => {
      selectBackgroundColor.value = title;
      // selectedApplication.value = {
      //   newLicense: title === "newLicense",
      //   renewal: title === "renewal",
      //   goodStanding: title === "goodStanding",
      //   verification: title === "verification",
      // };
    };

    const fetchNewLicenseReport = () => {
      loader.value = true;
      changeBackgroundColor("newLicense");
      store.dispatch("report/getNewLicenseReport").then((res) => {
        report.value = res.data.data;
        store.dispatch("report/setReport", report.value);
        loader.value = false;
      });
    };
    const fetchRenewalReport = () => {
      loader.value = true;
      changeBackgroundColor("renewal");
      store.dispatch("report/getRenewalReport").then((res) => {
        report.value = res.data.data;
        store.dispatch("report/setReport", report.value);
        loader.value = false;
      });
    };

    const fetchVerificationReport = () => {
      loader.value = true;
      changeBackgroundColor("verification");
      store.dispatch("report/getVerificationReport").then((res) => {
        report.value = res.data.data;
        store.dispatch("report/setReport", report.value);
        loader.value = false;
      });
    };
    const fetchGoodstandingReport = () => {
      loader.value = true;
      changeBackgroundColor("goodStanding");
      store.dispatch("report/getGoodstandingReport").then((res) => {
        report.value = res.data.data;
        store.dispatch("report/setReport", report.value);
        loader.value = false;
      });
    };

    const fetchProfessionType = () => {
      store.dispatch("report/getProfessionalTypes").then((res) => {
        professions.value = res.data.data;
      });
    };
    const fetchRegion = () => {
      store.dispatch("report/getRegions").then((res) => {
        regions.value = res.data.data;
      });
    };
    const fetchZones = (regionID) => {
      store.dispatch("report/getZones", regionID).then((res) => {
        zones.value = res.data.data;
      });
    };
    const fetchWoredas = (zoneID) => {
      store.dispatch("report/getWoredas", zoneID).then((res) => {
        woredas.value = res.data.data;
      });
    };
    const fetchApplicationStatuses = () => {
      store.dispatch("report/getapplicationStatuses").then((res) => {
        applicationStatuses.value = res.data.data;
      });
    };
    const exportTable = () => {
      var blob = new Blob([document.getElementById("printable").innerHTML], {
        type:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8",
      });
      saveAs(blob, "Report.xls");
    };
    const filterProfession = (profType) => {
      var tableFilter = [];
      tableFilter = report.value;
      var tableFilter2 = [];
      for (var i = 0; i < tableFilter.length; i++) {
        if (tableFilter[i].professionalTypes != null) {
          tableFilter2.push(tableFilter[i]);
        }
      }
      if (profType == null) {
      } else {
        report.value = tableFilter2.filter(function(e) {
          return e.professionalTypes.name == profType;
        });
      }
    };
    const filterRegion = (region) => {
      fetchZones(region.id);
      var tableFilter = [];
      tableFilter = report.value;
      var tableFilter2 = [];
      for (var i = 0; i < tableFilter.length; i++) {
        if (tableFilter[i].region.name != null) {
          tableFilter2.push(tableFilter[i]);
        }
      }
      if (region.name == null) {
        report.value = store.getter["report/getReport"];
      } else {
        report.value = tableFilter2.filter(function(e) {
          return e.region.name == region.name;
        });
      }
    };

    const filterZone = (zone) => {
      fetchWoredas(zone.id);
      var tableFilter = [];
      tableFilter = report.value;
      var tableFilter2 = [];
      for (var i = 0; i < tableFilter.length; i++) {
        if (tableFilter[i].zone.name != null) {
          tableFilter2.push(tableFilter[i]);
        }
      }
      if (zone.name == null) {
        report.value = store.getter["report/getReport"];
      } else {
        report.value = tableFilter2.filter(function(e) {
          return e.zone.name == zone.name;
        });
      }
    };
    const filterWoreda = (woreda) => {
      var tableFilter = [];
      tableFilter = report.value;
      var tableFilter2 = [];
      for (var i = 0; i < tableFilter.length; i++) {
        if (tableFilter[i].woreda.name != null) {
          tableFilter2.push(tableFilter[i]);
        }
      }
      if (woreda.name == null) {
        report.value = store.getter["report/getReport"];
      } else {
        report.value = tableFilter2.filter(function(e) {
          return e.woreda.name == woreda.name;
        });
      }
    };
    const filterDate = (startDate, endDate) => {
      report.value = store.getters["report/getReport"];
      var dateFilter = [];
      dateFilter = report.value;
      report.value = dateFilter.filter(function(date) {
        return (
          // !isNaN(Date.parse(date.applicant.createdAt)) &&
          Date.parse(date.applicant.createdAt) >= Date.parse(startDate) &&
          // !isNaN(Date.parse(date.createdAt)) &&
          Date.parse(date.createdAt) <= Date.parse(endDate)
        );
      });
    };
    const filterGender = (gender) => {
      report.value = store.getters["report/getReport"];
      var gendertable = [];
      gendertable = report.value;
      if (gender == "both") {
        report.value = gendertable.filter(function(e) {
          return e.gender == "male" || e.gender == "female";
        });
      } else {
        report.value = gendertable.filter(function(e) {
          return e.gender == gender;
        });
      }
    };
    const filterAppStatus = (status) => {
      report.value = store.getters["report/getReport"];
      var statusTable = [];
      statusTable = report.value;
      if (status == null) {
        report.value = store.getter["report/getReport"];
      } else {
        report.value = statusTable.filter(function(e) {
          return e.applicationStatus.name == status;
        });
      }
    };
    onMounted(() => {
      fetchReport(0, paginationSize.value, 'new_license');
      // fetchNewLicenseReport();
      fetchProfessionType();
      fetchRegion();
      fetchApplicationStatuses();
    });
    return {
      loader,
      report,
      exportTable,
      fetchNewLicenseReport,
      fetchRenewalReport,
      fetchVerificationReport,
      fetchGoodstandingReport,
      fetchProfessionType,
      fetchRegion,
      fetchZones,
      fetchWoredas,
      fetchApplicationStatuses,
      professions,
      regions,
      zones,
      woredas,
      applicationStatuses,
      filter,
      filterProfession,
      filterGender,
      filterAppStatus,
      filterDate,
      filterRegion,
      filterZone,
      selectedApplication,
      changeBackgroundColor,
      currentPage,
      totalCount,
      paginationSize,
      paginationSizeList,
      pageChanged,
      handlePagSize,
      fetchReport,
      selectBackgroundColor,
    };
  },
};
</script>

<style>
.titile-container {
  flex-wrap: wrap;
}
.filter-container {
  flex-wrap: wrap;
}
.applicationType {
  background-color: #300400;
}
th {
  color: #648ea3;
  background-color: #eff6ff;
}
.sidenav {
  width: 500px;
}
#export {
  cursor: pointer;
}
a:link {
  color: yellow;
}
a {
  cursor: pointer;
  color: #648ea3;
}
a:visited {
  color: red;
  cursor: pointer;
}
a:active {
  color: red;
}
a:hover {
  color: #0b5980;
}
#printable {
  /* display: block; */
  width: 170vh;
  overflow-x: scroll;
  overflow-y: hidden;
}
</style>
