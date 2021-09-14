<template>
  <div class="mb-2">
    <li class=" justify-start static">
      <transition name="slide-fade-to-left">
        <div class="">
          <div
            @click="newlicenseDDHandler('NewLicense')"
            class=" justify-center items-center "
          >
            <div class="p-1 ">
              <h3 class="text-lightBlueB-500 mt-tiny">
                <span style="color: white;">
                  <i class="mr-2 far fa-thumbs-up fa-x fa-light"></i>
                  <i
                    v-if="newLicenseDDIcon.isNewLicenseUp"
                    class="fas fa-chevron-circle-up float-right mt-2"
                  ></i>
                  <i
                    v-else
                    class="fas fa-chevron-circle-down float-right mt-2"
                  ></i>
                </span>
                <span class="text-lg" style="color: white; ">New License</span>
              </h3>
            </div>
          </div>

          <div
            v-if="dropdownValue.newLicense"
            class="dropdown-menu   mb-12 ml-4 "
            style="color: #648ea3; width: 200px;"
          >
            <ul class="block w-full shadow float-right" style="color: #648ea3;">
              <li
                @click="newLicenseMenuHandler('newLicenseUnassigned')"
                class="mb-2"
              >
                <p class=" text-base" style="color: white; ">
                  <i class="far fa-thumbs-up fa-x fa-light "></i>
                  Unassigned
                </p>
              </li>

              <!-- under review started here -->
              <div v-if="expertLevelId == 4">
                <li class=" justify-start ">
                  <transition name="slide-fade-to-left">
                    <div class="">
                      <div class=" justify-center items-center ">
                        <div class="p-1 ">
                          <h3
                            class="text-lightBlueB-500 mt-tiny"
                            @click="
                              newlicenseDDHandler('NewLicenseUnderReview')
                            "
                          >
                            <span style="color: white;">
                              <i
                                v-if="newLicenseDDIcon.isUnderReviewUp"
                                class="fas fa-chevron-circle-up float-right mt-2"
                              ></i>
                              <i
                                v-else
                                class="fas fa-chevron-circle-down float-right mt-2"
                              ></i>

                              <i
                                class="mr-2 far fa-address-book fa-x fa-light"
                              ></i>
                            </span>
                            <span class="text-base" style="color: white; "
                              >Under Review</span
                            >
                          </h3>
                        </div>
                      </div>
                      <div class="ml-4">
                        <drop-down-lists
                          :dropdownValue="[
                            dropdownValue.newLicenseUnderReview,
                            dropdownValue.newLicenseAssigned,
                          ]"
                          name="Assigned"
                          dropDownHandlerValue="NewLicenseAssigned"
                          :dropDownMenus="[
                            'newLicenseAssigned',
                            'newLicenseAssignedToOthers',
                          ]"
                          :isDropDownIconUp="newLicenseDDIcon.isAssignedUp"
                          :adminRole="adminRole"
                          :yoursAndOthersApplication="[
                            'Assigned To You',
                            'Assigned To Others',
                          ]"
                          @dropDownHandler="dropDownHandler"
                          @dropDownListHandler="dropDownListHandler"
                        />
                      </div>
                      <div class="ml-4">
                        <drop-down-lists
                          :dropdownValue="[
                            dropdownValue.newLicenseUnderReview,
                            dropdownValue.newLicenseUnfinished,
                          ]"
                          name="Draft"
                          dropDownHandlerValue="NewLicenseUnfinished"
                          :dropDownMenus="[
                            'newLicenseUnfinished',
                            'newLicenseOthersUnfinished',
                          ]"
                          :isDropDownIconUp="newLicenseDDIcon.isUnfinishedUp"
                          :adminRole="adminRole"
                          :yoursAndOthersApplication="[
                            'My Draft',
                            'Others Draft',
                          ]"
                          @dropDownHandler="dropDownHandler"
                          @dropDownListHandler="dropDownListHandler"
                        />
                      </div>
                      <div
                        v-if="dropdownValue.newLicenseUnderReview"
                        class="dropdown-menu relative  shadow-md mb-12 ml-4"
                        style="color: #648ea3; width: 200px;"
                      >
                        <ul
                          class="block w-full shadow float-right"
                          style="color: #648ea3;"
                        >
                          <li class=" justify-start ">
                            <div class=" justify-center items-center ">
                              <div class="p-1 ">
                                <h3
                                  class="text-lightBlueB-500 mt-tiny"
                                  @click="
                                    newlicenseDDHandler('NewLicenseEvaluation')
                                  "
                                >
                                  <span style="color: white;">
                                    <i
                                      v-if="newLicenseDDIcon.isEvaluationUp"
                                      class="fas fa-chevron-circle-up float-right mt-2"
                                    ></i>
                                    <i
                                      v-else
                                      class="fas fa-chevron-circle-down float-right mt-2"
                                    ></i>

                                    <i
                                      class="mr-2 far fa-address-book fa-x fa-light"
                                    ></i>
                                  </span>
                                  <span class="text-base" style="color: white; "
                                    >Evaluation</span
                                  >
                                </h3>
                                <div
                                  v-if="dropdownValue.newLicenseEvaluation"
                                  class="dropdown-menu relative  shadow-md mb-12 ml-4"
                                  style="color: #648ea3; width: 200px;"
                                >
                                  <drop-down-lists
                                    :dropdownValue="[
                                      dropdownValue.newLicenseEvaluation,
                                      dropdownValue.newLicenseUnassignedEvaluation,
                                    ]"
                                    name="Unassigned Evaluation"
                                    dropDownHandlerValue="NewLicenseUnassignedEvaluation"
                                    :dropDownMenus="[
                                      'newLicenseUnassignedEvaluation',
                                      'newLicenseOthersUnassignedEvaluation',
                                    ]"
                                    :isDropDownIconUp="
                                      newLicenseDDIcon.isUnassignedEvaluationUp
                                    "
                                    :adminRole="adminRole"
                                    :yoursAndOthersApplication="[
                                      'My Unassigned Evaluation',
                                      'Others Unassigned Evaluation',
                                    ]"
                                    @dropDownHandler="dropDownHandler"
                                    @dropDownListHandler="dropDownListHandler"
                                  />
                                  <drop-down-lists
                                    :dropdownValue="[
                                      dropdownValue.newLicenseEvaluation,
                                      dropdownValue.newLicenseUnderEvaluation,
                                    ]"
                                    name="Under Evaluation"
                                    dropDownHandlerValue="NewLicenseUnderEvaluation"
                                    :dropDownMenus="[
                                      'newLicenseUnderEvaluation',
                                      'newLicenseOthersUnderEvaluation',
                                    ]"
                                    :isDropDownIconUp="
                                      newLicenseDDIcon.isUnderEvaluationUp
                                    "
                                    :adminRole="adminRole"
                                    :yoursAndOthersApplication="[
                                      'My Under Evaluation',
                                      'Others Under Evaluation',
                                    ]"
                                    @dropDownHandler="dropDownHandler"
                                    @dropDownListHandler="dropDownListHandler"
                                  />
                                  <drop-down-lists
                                    :dropdownValue="[
                                      dropdownValue.newLicenseEvaluation,
                                      dropdownValue.newLicenseEvaluationAssessment,
                                    ]"
                                    name="Assessments"
                                    dropDownHandlerValue="NewLicenseEvaluationAssessment"
                                    :dropDownMenus="[
                                      'newLicenseEvaluationAssessment',
                                      'newLicenseOthersEvaluationAssessment',
                                    ]"
                                    :isDropDownIconUp="
                                      newLicenseDDIcon.isUnderEvaluationUp
                                    "
                                    :adminRole="adminRole"
                                    :yoursAndOthersApplication="[
                                      'My Assessments',
                                      'Others Assessments',
                                    ]"
                                    @dropDownHandler="dropDownHandler"
                                    @dropDownListHandler="dropDownListHandler"
                                  />
                                  <drop-down-lists
                                    :dropdownValue="[
                                      dropdownValue.newLicenseEvaluation,
                                      dropdownValue.newLicenseReturnedEvaluation,
                                    ]"
                                    name="Returned Evaluation"
                                    dropDownHandlerValue="NewLicenseReturnedEvaluation"
                                    :dropDownMenus="[
                                      'newLicenseReturnedEvaluation',
                                      'newLicenseOthersReturnedEvaluation',
                                    ]"
                                    :isDropDownIconUp="
                                      newLicenseDDIcon.isReturnedEvaluationUp
                                    "
                                    :adminRole="adminRole"
                                    :yoursAndOthersApplication="[
                                      'My Returned Evaluation',
                                      'Others Returned Evaluation',
                                    ]"
                                    @dropDownHandler="dropDownHandler"
                                    @dropDownListHandler="dropDownListHandler"
                                  />
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div
                        v-if="dropdownValue.newLicenseUnderReview"
                        class="dropdown-menu relative  shadow-md mb-12 ml-4"
                        style="color: #648ea3; width: 200px;"
                      >
                        <ul
                          class="block w-full shadow float-right"
                          style="color: #648ea3;"
                        >
                          <li class=" justify-start ">
                            <div class=" justify-center items-center ">
                              <div class="p-1 ">
                                <h3
                                  class="text-lightBlueB-500 mt-tiny"
                                  @click="
                                    newlicenseDDHandler(
                                      'NewLicenseConfirmedEvaluation'
                                    )
                                  "
                                >
                                  <span style="color: white;">
                                    <i
                                      v-if="
                                        newLicenseDDIcon.isConfirmedEvaluationUp
                                      "
                                      class="fas fa-chevron-circle-up float-right mt-2"
                                    ></i>
                                    <i
                                      v-else
                                      class="fas fa-chevron-circle-down float-right mt-2"
                                    ></i>

                                    <i
                                      class="mr-2 far fa-address-book fa-x fa-light"
                                    ></i>
                                  </span>
                                  <span class="text-base" style="color: white; "
                                    >Confirmed</span
                                  >
                                </h3>
                                <div
                                  v-if="
                                    dropdownValue.newLicenseConfirmedEvaluation
                                  "
                                  class="dropdown-menu relative  shadow-md mb-12 ml-4"
                                  style="color: #648ea3; width: 200px;"
                                >
                                  <drop-down-lists
                                    :dropdownValue="[
                                      dropdownValue.newLicenseConfirmedEvaluation,
                                      dropdownValue.newLicenseConfirmed,
                                    ]"
                                    name="Approved"
                                    dropDownHandlerValue="NewLicenseConfirmed"
                                    :dropDownMenus="[
                                      'newLicenseConfirmed',
                                      'othersNewLicenseConfirmed',
                                    ]"
                                    :isDropDownIconUp="
                                      newLicenseDDIcon.isConfirmedUp
                                    "
                                    :adminRole="adminRole"
                                    :yoursAndOthersApplication="[
                                      'My Approved',
                                      'Others Approved',
                                    ]"
                                    @dropDownHandler="dropDownHandler"
                                    @dropDownListHandler="dropDownListHandler"
                                  />
                                  <drop-down-lists
                                    :dropdownValue="[
                                      dropdownValue.newLicenseConfirmedEvaluation,
                                      dropdownValue.newLicenseDeclineConfirmed,
                                    ]"
                                    name="Declined"
                                    dropDownHandlerValue="NewLicenseDeclineConfirmed"
                                    :dropDownMenus="[
                                      'newLicenseDeclineConfirmed',
                                      'othersNewLicenseDeclineConfirmed',
                                    ]"
                                    :isDropDownIconUp="
                                      newLicenseDDIcon.isDeclineConfirmedUp
                                    "
                                    :adminRole="adminRole"
                                    :yoursAndOthersApplication="[
                                      'My Declined',
                                      'Others Declined',
                                    ]"
                                    @dropDownHandler="dropDownHandler"
                                    @dropDownListHandler="dropDownListHandler"
                                  />
                                  <drop-down-lists
                                    :dropdownValue="[
                                      dropdownValue.newLicenseConfirmedEvaluation,
                                      dropdownValue.newLicenseUnderSuperVisionConfirmed,
                                    ]"
                                    name="Under Super Vision"
                                    dropDownHandlerValue="NewLicenseUnderSuperVisionConfirmed"
                                    :dropDownMenus="[
                                      'newLicenseUnderSuperVision',
                                      'newLicenseOthersUnderSuperVision',
                                    ]"
                                    :isDropDownIconUp="
                                      newLicenseDDIcon.isUnderSuperVisionConfirmedUp
                                    "
                                    :adminRole="adminRole"
                                    :yoursAndOthersApplication="[
                                      'My Under Super Vision',
                                      'Others Under Super Vision',
                                    ]"
                                    @dropDownHandler="dropDownHandler"
                                    @dropDownListHandler="dropDownListHandler"
                                  />
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div
                        v-if="dropdownValue.newLicenseUnderReview"
                        class="dropdown-menu relative  shadow-md mb-12 ml-4"
                        style="color: #648ea3; width: 200px;"
                      >
                        <ul
                          class="block w-full shadow float-right"
                          style="color: #648ea3;"
                        >
                          <li class=" justify-start ">
                            <div class=" justify-center items-center ">
                              <div class="p-1 ">
                                <h3
                                  class="text-lightBlueB-500 mt-tiny"
                                  @click="
                                    newlicenseDDHandler(
                                      'NewLicensePaymentReview'
                                    )
                                  "
                                >
                                  <span style="color: white;">
                                    <i
                                      v-if="newLicenseDDIcon.isPaymentReviewnUp"
                                      class="fas fa-chevron-circle-up float-right mt-2"
                                    ></i>
                                    <i
                                      v-else
                                      class="fas fa-chevron-circle-down float-right mt-2"
                                    ></i>

                                    <i
                                      class="mr-2 far fa-address-book fa-x fa-light"
                                    ></i>
                                  </span>
                                  <span class="text-base" style="color: white; "
                                    >Payment Review</span
                                  >
                                </h3>
                                <div
                                  v-if="dropdownValue.newLicensePaymentReview"
                                  class="dropdown-menu relative  shadow-md mb-12 ml-4"
                                  style="color: #648ea3; width: 200px;"
                                >
                                  <drop-down-lists
                                    :dropdownValue="[
                                      dropdownValue.newLicensePaymentReview,
                                      dropdownValue.newLicenseInReviewPayment,
                                    ]"
                                    name="In Review"
                                    dropDownHandlerValue="NewLicenseInReviewPayment"
                                    :dropDownMenus="[
                                      'newLicenseInReviewPayment',
                                      'othersNewLicenseInReviewPayment',
                                    ]"
                                    :isDropDownIconUp="
                                      newLicenseDDIcon.isInReviewPaymentUp
                                    "
                                    :adminRole="adminRole"
                                    :yoursAndOthersApplication="[
                                      'My In Review Payment',
                                      'Others In Review Payment',
                                    ]"
                                    @dropDownHandler="dropDownHandler"
                                    @dropDownListHandler="dropDownListHandler"
                                  />
                                  <drop-down-lists
                                    :dropdownValue="[
                                      dropdownValue.newLicensePaymentReview,
                                      dropdownValue.newLicenseDeclinedPayment,
                                    ]"
                                    name="Declined Payment"
                                    dropDownHandlerValue="NewLicenseDeclinedPayment"
                                    :dropDownMenus="[
                                      'newLicenseDeclinedPayment',
                                      'othersNewLicenseDeclinedPayment',
                                    ]"
                                    :isDropDownIconUp="
                                      newLicenseDDIcon.isDeclinedPaymentUp
                                    "
                                    :adminRole="adminRole"
                                    :yoursAndOthersApplication="[
                                      'My Declined Payment',
                                      'Others Declined Payment',
                                    ]"
                                    @dropDownHandler="dropDownHandler"
                                    @dropDownListHandler="dropDownListHandler"
                                  />
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </transition>
                </li>
              </div>
              <!-- Expert sidenav starts here -->
              
              <div v-if="expertLevelId == 3">
                <drop-down-lists
                  :dropdownValue="[
                    dropdownValue.newLicense,
                    dropdownValue.newLicenseAssigned,
                  ]"
                  name="In Review"
                  dropDownHandlerValue="NewLicenseAssigned"
                  :dropDownMenus="[
                    'newLicenseAssigned',
                    'newLicenseAssignedToOthers',
                  ]"
                  :isDropDownIconUp="newLicenseDDIcon.isAssignedUp"
                  :adminRole="adminRole"
                  :yoursAndOthersApplication="[
                    'Assigned To You',
                    'Assigned To Others',
                  ]"
                  @dropDownHandler="dropDownHandler"
                  @dropDownListHandler="dropDownListHandler"
                />
              </div>
              <div v-if="expertLevelId == 3">
                <drop-down-lists
                  :dropdownValue="[
                    dropdownValue.newLicense,
                    dropdownValue.newLicenseUnfinished,
                  ]"
                  name="Draft"
                  dropDownHandlerValue="NewLicenseUnfinished"
                  :dropDownMenus="[
                    'newLicenseUnfinished',
                    'newLicenseOthersUnfinished',
                  ]"
                  :isDropDownIconUp="newLicenseDDIcon.isUnfinishedUp"
                  :adminRole="adminRole"
                  :yoursAndOthersApplication="[
                    'Unfinished',
                    'Others Unfinished',
                  ]"
                  @dropDownHandler="dropDownHandler"
                  @dropDownListHandler="dropDownListHandler"
                />
              </div>
              <div v-if="expertLevelId == 3">
                <drop-down-lists
                  :dropdownValue="[
                    dropdownValue.newLicense,
                    dropdownValue.newLicenseUnassignedEvaluation,
                  ]"
                  name="Approved"
                  dropDownHandlerValue="NewLicenseUnassignedEvaluation"
                  :dropDownMenus="[
                    'newLicenseUnassignedEvaluation',
                    'newLicenseOthersUnassignedEvaluation',
                  ]"
                  :isDropDownIconUp="newLicenseDDIcon.isUnconfirmedUp"
                  :adminRole="adminRole"
                  :yoursAndOthersApplication="[
                    'My Approved',
                    'Others Approved',
                  ]"
                  @dropDownHandler="dropDownHandler"
                  @dropDownListHandler="dropDownListHandler"
                />
              </div>
              <div v-if="expertLevelId == 3">
                <drop-down-lists
                  :dropdownValue="[
                    dropdownValue.newLicense,
                    dropdownValue.newLicenseDeclined,
                  ]"
                  name="Declined"
                  dropDownHandlerValue="NewLicenseDeclined"
                  :dropDownMenus="[
                    'newLicenseDeclined',
                    'allNewLicenseDeclined',
                  ]"
                  :isDropDownIconUp="newLicenseDDIcon.isDeclinedUp"
                  :adminRole="adminRole"
                  :yoursAndOthersApplication="[
                    'My Declined',
                    'Others Declined',
                  ]"
                  @dropDownHandler="dropDownHandler"
                  @dropDownListHandler="dropDownListHandler"
                />
              </div>
              <div v-if="expertLevelId == 3">
                <drop-down-lists
                  :dropdownValue="[
                    dropdownValue.newLicense,
                    dropdownValue.newLicenseUnderSuperVision,
                  ]"
                  name="Under Super Vision"
                  dropDownHandlerValue="NewLicenseUnderSuperVision"
                  :dropDownMenus="[
                    'newLicenseUnderSuperVision',
                    'newLicenseOthersUnderSuperVision',
                  ]"
                  :isDropDownIconUp="newLicenseDDIcon.isUnderSuperVisionUp"
                  :adminRole="adminRole"
                  :yoursAndOthersApplication="[
                    'My Under Super Vision',
                    'Others Under Super Vision',
                  ]"
                  @dropDownHandler="dropDownHandler"
                  @dropDownListHandler="dropDownListHandler"
                />
              </div>
              <div
                v-if="dropdownValue.newLicense && expertLevelId == 3"
                class="dropdown-menu relative  shadow-md mb-12"
                style="color: #648ea3; width: 200px;"
              >
                <ul
                  class="block w-full shadow float-right"
                  style="color: #648ea3;"
                >
                  <li class=" justify-start ">
                    <div class=" justify-center items-center ">
                      <div class="p-1 ">
                        <h3
                          class="text-lightBlueB-500 mt-tiny"
                          @click="
                            newlicenseDDHandler('NewLicensePaymentReview')
                          "
                        >
                          <span style="color: white;">
                            <i
                              v-if="newLicenseDDIcon.isPaymentReviewnUp"
                              class="fas fa-chevron-circle-up float-right mt-2"
                            ></i>
                            <i
                              v-else
                              class="fas fa-chevron-circle-down float-right mt-2"
                            ></i>

                            <i
                              class="mr-2 far fa-address-book fa-x fa-light"
                            ></i>
                          </span>
                          <span class="text-base" style="color: white; "
                            >Payment Review</span
                          >
                        </h3>
                        <div
                          v-if="dropdownValue.newLicensePaymentReview"
                          class="dropdown-menu relative  shadow-md mb-12 ml-4"
                          style="color: #648ea3; width: 200px;"
                        >
                          <drop-down-lists
                            :dropdownValue="[
                              dropdownValue.newLicensePaymentReview,
                              dropdownValue.newLicenseInReviewPayment,
                            ]"
                            name="In Review"
                            dropDownHandlerValue="NewLicenseInReviewPayment"
                            :dropDownMenus="[
                              'newLicenseInReviewPayment',
                              'othersNewLicenseInReviewPayment',
                            ]"
                            :isDropDownIconUp="
                              newLicenseDDIcon.isInReviewPaymentUp
                            "
                            :adminRole="adminRole"
                            :yoursAndOthersApplication="[
                              'My In Review Payment',
                              'Others In Review Payment',
                            ]"
                            @dropDownHandler="dropDownHandler"
                            @dropDownListHandler="dropDownListHandler"
                          />
                          <drop-down-lists
                            :dropdownValue="[
                              dropdownValue.newLicensePaymentReview,
                              dropdownValue.newLicenseDeclinedPayment,
                            ]"
                            name="Declined Payment"
                            dropDownHandlerValue="NewLicenseDeclinedPayment"
                            :dropDownMenus="[
                              'newLicenseDeclinedPayment',
                              'othersNewLicenseDeclinedPayment',
                            ]"
                            :isDropDownIconUp="
                              newLicenseDDIcon.isDeclinedPaymentUp
                            "
                            :adminRole="adminRole"
                            :yoursAndOthersApplication="[
                              'My Declined Payment',
                              'Others Declined Payment',
                            ]"
                            @dropDownHandler="dropDownHandler"
                            @dropDownListHandler="dropDownListHandler"
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <!-- Expert Sidenav ends here -->
              <!-- under review end here -->
              <drop-down-lists
                :dropdownValue="[
                  dropdownValue.newLicense,
                  dropdownValue.newLicenseLicensed,
                ]"
                name="Licensed"
                dropDownHandlerValue="NewLicenseLicensed"
                :dropDownMenus="[
                  'newLicenseLicensed',
                  'newLicenseOthersLicensed',
                ]"
                :isDropDownIconUp="newLicenseDDIcon.isLicensedUp"
                :adminRole="adminRole"
                :yoursAndOthersApplication="['Licensed', 'Others Licensed']"
                @dropDownHandler="dropDownHandler"
                @dropDownListHandler="dropDownListHandler"
              />

              <!-- All Licensed Applications starts here -->

              <li
                @click="newLicenseMenuHandler('newLicenseAllLicensed')"
                class="mb-2"
              >
                <div class=" text-base" style="color: white; ">
                  <i class="mr-2 far fa-address-book fa-x fa-light"></i>
                  All Licensed
                </div>
              </li>

              <!-- All Licensed Appilcations ends here -->

              <!-- unfinished started here -->
              <!-- <div>
                <li
                  @click="newlicenseDDHandler('NewLicenseUnfinished')"
                  class=" justify-start "
                  v-if="adminRole == 'ADM'"
                >
                  <transition name="slide-fade-to-left">
                    <div class="">
                      <div class=" justify-center items-center ">
                        <div class="p-1 ">
                          <h3 class="text-lightBlueB-500 mt-tiny">
                            <span style="color: white;">
                              <i
                                v-if="newLicenseDDIcon.isUnfinishedUp"
                                class="fas fa-chevron-circle-up float-right mt-2"
                              ></i>
                              <i
                                v-else
                                class="fas fa-chevron-circle-down float-right mt-2"
                              ></i>

                              <i
                                class="mr-2 far fa-address-book fa-x fa-light"
                              ></i>
                            </span>
                            <span class="text-base" style="color: white; "
                              >Unfinished</span
                            >
                          </h3>
                        </div>
                      </div>
                      <div
                        v-if="dropdownValue.newLicenseUnfinished"
                        class="dropdown-menu relative  shadow-md mb-12 ml-4"
                        style="color: #648ea3; width: 200px;"
                      >
                        <ul class="block w-full  shadow float-right ">
                          <li
                            @click="
                              newLicenseMenuHandler('newLicenseUnfinished')
                            "
                            class="mb-2"
                          >
                            
                            <p class=" text-sm" style="color: white; ">
                              <i
                                class="mr-2 far fa-address-book fa-x fa-light"
                              ></i>
                              My Unfinished
                            </p>
                          </li>
                          <li
                            @click="
                              newLicenseMenuHandler(
                                'newLicenseOthersUnfinished'
                              )
                            "
                          >
                            
                            <p class=" text-sm" style="color: white; ">
                              <i class="mr-2 far fa-id-card fa-x"></i>
                              Others Unfinished
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </transition>
                </li>
                <li
                  @click="newLicenseMenuHandler('newLicenseUnfinished')"
                  class="mb-2"
                  v-else
                >
                  
                  <p class=" text-sm" style="color: white; ">
                    <i class="mr-2 far fa-address-book fa-x fa-light"></i>
                    Unfinished
                  </p>
                </li>
              </div> -->
              <!-- unfinished ends here -->

              <!-- unconfirmed start here -->
              <!-- <div>
                <li
                  @click="newlicenseDDHandler('NewLicenseUnconfirmed')"
                  class=" justify-start "
                  v-if="adminRole == 'ADM'"
                >
                  <transition name="slide-fade-to-left">
                    <div class="">
                      <div class=" justify-center items-center ">
                        <div class="p-1 ">
                          <h3 class="text-lightBlueB-500 mt-tiny">
                            <span style="color: white;">
                              <i
                                v-if="newLicenseDDIcon.isUnconfirmedUp"
                                class="fas fa-chevron-circle-up float-right mt-2"
                              ></i>
                              <i
                                v-else
                                class="fas fa-chevron-circle-down float-right mt-2"
                              ></i>

                              <i
                                class="mr-2 far fa-address-book fa-x fa-light"
                              ></i>
                            </span>
                            <span class="text-base" style="color: white; ">{{
                              expertLevelId == 4 ? "Unconfirmed" : "Approved"
                            }}</span>
                          </h3>
                        </div>
                      </div>
                      <div
                        v-if="dropdownValue.newLicenseUnconfirmed"
                        class="dropdown-menu relative  shadow-md mb-12 ml-4"
                        style="color: #648ea3; width: 200px;"
                      >
                        <ul class="block w-full  shadow float-right ">
                          <li
                            @click="
                              newLicenseMenuHandler('newLicenseUnconfirmed')
                            "
                            class="mb-2"
                          >
                            <p class=" text-sm" style="color: white; ">
                              <i
                                class="mr-2 far fa-address-book fa-x fa-light"
                              ></i>
                              {{
                                expertLevelId == 4
                                  ? "My Unconfirmed"
                                  : "My Approved"
                              }}
                            </p>
                          </li>
                          <li
                            @click="
                              newLicenseMenuHandler('allNewLicenseUnconfirmed')
                            "
                          >
                            <p class=" text-sm" style="color: white; ">
                              <i class="mr-2 far fa-id-card fa-x"></i>
                              {{
                                expertLevelId == 4
                                  ? "Others Unconfirmed"
                                  : "Others Approved"
                              }}
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </transition>
                </li>
                <li
                  @click="newLicenseMenuHandler('newLicenseUnconfirmed')"
                  class="mb-2"
                  v-else
                >
                  <p class=" text-sm" style="color: white; ">
                    <i class="mr-2 far fa-address-book fa-x fa-light"></i>
                    {{ expertLevelId == 4 ? "Unconfirmed" : "Approved" }}
                  </p>
                </li>
              </div> -->
              <!-- unconfirmed ends here -->

              <!-- on review start here -->
              <!-- <div v-if="expertLevelId == 4">
                <li
                  @click="newlicenseDDHandler('NewLicenseOnReview')"
                  class=" justify-start "
                  v-if="adminRole == 'ADM'"
                >
                  <transition name="slide-fade-to-left">
                    <div class="">
                      <div class=" justify-center items-center ">
                        <div class="p-1 ">
                          <h3 class="text-lightBlueB-500 mt-tiny">
                            <span style="color: white;">
                              <i
                                v-if="newLicenseDDIcon.isOnReivewUp"
                                class="fas fa-chevron-circle-up float-right mt-2"
                              ></i>
                              <i
                                v-else
                                class="fas fa-chevron-circle-down float-right mt-2"
                              ></i>

                              <i
                                class="mr-2 far fa-address-book fa-x fa-light"
                              ></i>
                            </span>
                            <span class="text-base" style="color: white; "
                              >On Review</span
                            >
                          </h3>
                        </div>
                      </div>
                      <div
                        v-if="dropdownValue.newLicenseOnReview"
                        class="dropdown-menu relative  shadow-md mb-12 ml-4"
                        style="color: #648ea3; width: 200px;"
                      >
                        <ul class="block w-full  shadow float-right ">
                          <li
                            @click="newLicenseMenuHandler('newLicenseOnReview')"
                            class="mb-2"
                          >
                            
                            <p class=" text-sm" style="color: white; ">
                              <i
                                class="mr-2 far fa-address-book fa-x fa-light"
                              ></i>
                              My On Review
                            </p>
                          </li>
                          <li
                            @click="
                              newLicenseMenuHandler('othersNewLicenseOnReview')
                            "
                          >
                            
                            <p class=" text-sm" style="color: white; ">
                              <i class="mr-2 far fa-id-card fa-x"></i>
                              Others On Review
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </transition>
                </li>
                <li
                  @click="newLicenseMenuHandler('newLicenseOnReview')"
                  class="mb-2"
                  v-else
                >
                  
                  <p class=" text-sm" style="color: white; ">
                    <i class="mr-2 far fa-address-book fa-x fa-light"></i>
                    On Review
                  </p>
                </li>
              </div> -->
              <!-- on review ends here -->

              <!-- re evaluate starts here -->
              <!-- <div v-if="expertLevelId == 4">
                <li
                  @click="newlicenseDDHandler('NewLicenseReEvaluate')"
                  class=" justify-start "
                  v-if="adminRole == 'ADM'"
                >
                  <transition name="slide-fade-to-left">
                    <div class="">
                      <div class=" justify-center items-center ">
                        <div class="p-1 ">
                          <h3 class="text-lightBlueB-500 mt-tiny">
                            <span style="color: white;">
                              <i
                                v-if="newLicenseDDIcon.isReEvaluateUp"
                                class="fas fa-chevron-circle-up float-right mt-2"
                              ></i>
                              <i
                                v-else
                                class="fas fa-chevron-circle-down float-right mt-2"
                              ></i>

                              <i
                                class="mr-2 far fa-address-book fa-x fa-light"
                              ></i>
                            </span>
                            <span class="text-base" style="color: white; "
                              >Re Evaluate</span
                            >
                          </h3>
                        </div>
                      </div>
                      <div
                        v-if="dropdownValue.newLicenseReEvaluate"
                        class="dropdown-menu relative  shadow-md mb-12 ml-4"
                        style="color: #648ea3; width: 200px;"
                      >
                        <ul class="block w-full  shadow float-right ">
                          <li
                            @click="
                              newLicenseMenuHandler('newLicenseReEvaluate')
                            "
                            class="mb-2"
                          >
                            
                            <p class=" text-sm" style="color: white; ">
                              <i
                                class="mr-2 far fa-address-book fa-x fa-light"
                              ></i>
                              My Re Evaluate
                            </p>
                          </li>
                          <li
                            @click="
                              newLicenseMenuHandler(
                                'othersNewLicenseReEvaluate'
                              )
                            "
                          >
                            
                            <p class=" text-sm" style="color: white; ">
                              <i class="mr-2 far fa-id-card fa-x"></i>
                              Others Re Evaluate
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </transition>
                </li>
                <li
                  @click="newLicenseMenuHandler('newLicenseReEvaluate')"
                  class="mb-2"
                  v-else
                >
                  
                  <p class=" text-sm" style="color: white; ">
                    <i class="mr-2 far fa-address-book fa-x fa-light"></i>
                    Re Evaluate
                  </p>
                </li>
              </div> -->
              <!-- re evaluate ends here -->

              <!-- under super vision starts here -->
              <!-- <div>
                <li
                  @click="newlicenseDDHandler('NewLicenseUnderSuperVision')"
                  class=" justify-start "
                  v-if="adminRole == 'ADM'"
                >
                  <transition name="slide-fade-to-left">
                    <div class="">
                      <div class=" justify-center items-center ">
                        <div class="p-1 ">
                          <h3 class="text-lightBlueB-500 mt-tiny">
                            <span style="color: white;">
                              <i
                                v-if="newLicenseDDIcon.isUnderSuperVisionUp"
                                class="fas fa-chevron-circle-up float-right mt-2"
                              ></i>
                              <i
                                v-else
                                class="fas fa-chevron-circle-down float-right mt-2"
                              ></i>

                              <i
                                class="mr-2 far fa-address-book fa-x fa-light"
                              ></i>
                            </span>
                            <span class="text-base" style="color: white; "
                              >Under Super Vision</span
                            >
                          </h3>
                        </div>
                      </div>
                      <div
                        v-if="dropdownValue.newLicenseUnderSuperVision"
                        class="dropdown-menu relative  shadow-md mb-12 ml-4"
                        style="color: #648ea3; width: 200px;"
                      >
                        <ul class="block w-full  shadow float-right ">
                          <li
                            @click="
                              newLicenseMenuHandler(
                                'newLicenseUnderSuperVision'
                              )
                            "
                            class="mb-2"
                          >
                            
                            <p class=" text-sm" style="color: white; ">
                              <i
                                class="mr-2 far fa-address-book fa-x fa-light"
                              ></i>
                              My Under Super Vision
                            </p>
                          </li>
                          <li
                            @click="
                              newLicenseMenuHandler(
                                'newLicenseOthersUnderSuperVision'
                              )
                            "
                          >
                            
                            <p class=" text-sm" style="color: white; ">
                              <i class="mr-2 far fa-id-card fa-x"></i>
                              Others Under Super Vision
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </transition>
                </li>
                <li
                  @click="newLicenseMenuHandler('newLicenseUnderSuperVision')"
                  class="mb-2"
                  v-else
                >
                  
                  <p class=" text-sm" style="color: white; ">
                    <i class="mr-2 far fa-address-book fa-x fa-light"></i>
                    Under Super Vision
                  </p>
                </li>
              </div> -->
              <!-- under super vision ends here -->

              <!-- decline starts here -->
              <!-- <div>
                <li
                  @click="newlicenseDDHandler('NewLicenseDeclined')"
                  class=" justify-start "
                >
                  <transition name="slide-fade-to-left">
                    <div class="">
                      <div class=" justify-center items-center ">
                        <div class="p-1 ">
                          <h3 class="text-lightBlueB-500 mt-tiny">
                            <span style="color: white;">
                              <i
                                v-if="newLicenseDDIcon.isDeclinedUp"
                                class="fas fa-chevron-circle-up float-right mt-2"
                              ></i>
                              <i
                                v-else
                                class="fas fa-chevron-circle-down float-right mt-2"
                              ></i>

                              <i
                                class="mr-2 far fa-address-book fa-x fa-light"
                              ></i>
                            </span>
                            <span class="text-base" style="color: white; "
                              >Declined</span
                            >
                          </h3>
                        </div>
                      </div>
                      <div
                        v-if="dropdownValue.newLicenseDeclined"
                        class="dropdown-menu relative  shadow-md mb-12 ml-4"
                        style="color: #648ea3; width: 200px;"
                      >
                        <ul class="block w-full  shadow float-right ">
                          <li
                            @click="newLicenseMenuHandler('newLicenseDeclined')"
                            class="mb-2"
                          >
                            
                            <p class=" text-sm" style="color: white; ">
                              <i
                                class="mr-2 far fa-address-book fa-x fa-light"
                              ></i>
                              {{
                                adminRole == "ADM" ? "My Declined" : "Declined"
                              }}
                            </p>
                          </li>
                          <li
                            @click="
                              newLicenseMenuHandler('allNewLicenseDeclined')
                            "
                            v-if="adminRole == 'ADM'"
                          >
                            
                            <p class=" text-sm" style="color: white; ">
                              <i class="mr-2 far fa-id-card fa-x"></i>
                              Others Declined
                            </p>
                          </li>
                          <li
                            @click="
                              newLicenseMenuHandler('newLicenseDeclinedPayment')
                            "
                            class="mb-2"
                          >
                            
                            <p class=" text-sm" style="color: white; ">
                              <i
                                class="mr-2 far fa-address-book fa-x fa-light"
                              ></i>
                              {{
                                adminRole == "ADM"
                                  ? "My Declined Payment"
                                  : "Declined Payment"
                              }}
                            </p>
                          </li>
                          <li
                            @click="
                              newLicenseMenuHandler(
                                'othersNewLicenseDeclinedPayment'
                              )
                            "
                            v-if="adminRole == 'ADM'"
                          >
                            
                            <p class=" text-sm" style="color: white; ">
                              <i class="mr-2 far fa-id-card fa-x"></i>
                              Others Declined Payment
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </transition>
                </li>
              </div> -->
              <!-- others decline ends here -->

              <!-- confirmed starts here -->
              <!-- <div v-if="expertLevelId == 4">
                <li
                  @click="newlicenseDDHandler('NewLicenseConfirmed')"
                  class=" justify-start "
                >
                  <transition name="slide-fade-to-left">
                    <div class="">
                      <div class=" justify-center items-center ">
                        <div class="p-1 ">
                          <h3 class="text-lightBlueB-500 mt-tiny">
                            <span style="color: white;">
                              <i
                                v-if="newLicenseDDIcon.isConfirmedUp"
                                class="fas fa-chevron-circle-up float-right mt-2"
                              ></i>
                              <i
                                v-else
                                class="fas fa-chevron-circle-down float-right mt-2"
                              ></i>

                              <i
                                class="mr-2 far fa-address-book fa-x fa-light"
                              ></i>
                            </span>
                            <span class="text-base" style="color: white; "
                              >Confirmed</span
                            >
                          </h3>
                        </div>
                      </div>
                      <div
                        v-if="dropdownValue.newLicenseConfirmed"
                        class="dropdown-menu relative  shadow-md mb-12 ml-4"
                        style="color: #648ea3; width: 200px;"
                      >
                        <ul class="block w-full  shadow float-right ">
                          <li
                            @click="
                              newLicenseMenuHandler('newLicenseConfirmed')
                            "
                            class="mb-2"
                          >
                            
                            <p class=" text-sm" style="color: white; ">
                              <i
                                class="mr-2 far fa-address-book fa-x fa-light"
                              ></i>
                              {{
                                adminRole == "ADM"
                                  ? "My Confirmed"
                                  : "Confirmed"
                              }}
                            </p>
                          </li>
                          <li
                            @click="
                              newLicenseMenuHandler('othersNewLicenseConfirmed')
                            "
                            v-if="adminRole == 'ADM'"
                          >
                            
                            <p class=" text-sm" style="color: white; ">
                              <i class="mr-2 far fa-id-card fa-x"></i>
                              Others Confirmed
                            </p>
                          </li>
                          <li
                            @click="
                              newLicenseMenuHandler('newLicenseApprovedPayment')
                            "
                            class="mb-2"
                          >
                            
                            <p class=" text-sm" style="color: white; ">
                              <i
                                class="mr-2 far fa-address-book fa-x fa-light"
                              ></i>
                              {{
                                adminRole == "ADM"
                                  ? "My Approved Payment"
                                  : "Approved Payment"
                              }}
                            </p>
                          </li>
                          <li
                            @click="
                              newLicenseMenuHandler(
                                'othersNewLicenseApprovedPayment'
                              )
                            "
                            v-if="adminRole == 'ADM'"
                          >
                            
                            <p class=" text-sm" style="color: white; ">
                              <i class="mr-2 far fa-id-card fa-x"></i>
                              Others Approved Payment
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </transition>
                </li>
              </div> -->
              <!-- confirmed ends here -->

              <!-- evaluation returned starts here-->
              <!-- <div v-if="expertLevelId == 4">
                <li
                  @click="newlicenseDDHandler('NewLicenseReturned')"
                  class=" justify-start "
                >
                  <transition name="slide-fade-to-left">
                    <div class="">
                      <div class=" justify-center items-center ">
                        <div class="p-1 ">
                          <h3 class="text-lightBlueB-500 mt-tiny">
                            <span style="color: white;">
                              <i
                                v-if="newLicenseDDIcon.isReturnedUp"
                                class="fas fa-chevron-circle-up float-right mt-2"
                              ></i>
                              <i
                                v-else
                                class="fas fa-chevron-circle-down float-right mt-2"
                              ></i>

                              <i
                                class="mr-2 far fa-address-book fa-x fa-light"
                              ></i>
                            </span>
                            <span class="text-base" style="color: white; "
                              >Returned Applications</span
                            >
                          </h3>
                        </div>
                      </div>
                      <div
                        v-if="dropdownValue.newLicenseReturned"
                        class="dropdown-menu relative  shadow-md mb-12 ml-4"
                        style="color: #648ea3; width: 200px;"
                      >
                        <ul class="block w-full  shadow float-right ">
                          <li
                            @click="
                              newLicenseMenuHandler('newLicenseReturnedToMe')
                            "
                            class="mb-2"
                          >
                            
                            <p class=" text-sm" style="color: white; ">
                              <i
                                class="mr-2 far fa-address-book fa-x fa-light"
                              ></i>
                              {{
                                adminRole == "ADM"
                                  ? "Returned To Me"
                                  : "Returned Applications"
                              }}
                            </p>
                          </li>
                          <li
                            @click="
                              newLicenseMenuHandler(
                                'newLicenseReturnedToOthers'
                              )
                            "
                            v-if="adminRole == 'ADM'"
                          >
                            
                            <p class=" text-sm" style="color: white; ">
                              <i class="mr-2 far fa-id-card fa-x"></i>
                              Returned To Others
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </transition>
                </li>
              </div> -->
              <!-- evaluation returned ends here-->
            </ul>
          </div>
        </div>
      </transition>
    </li>
  </div>
</template>
<script>
import { ref } from "vue";
import DropDownLists from "./DropDownLists.vue";

export default {
  name: "NewLicenseSideNav",
  components: {
    DropDownLists,
  },
  props: ["dropdownValue", "expertLevelId", "adminRole"],
  setup(props, { emit }) {
    let newLicenseDDIcon = ref({
      isNewLicenseUp: false,
      isUnderReviewUp: false,
      isAssignedUp: false,
      isUnfinishedUp: false,
      isUnconfirmedUp: false,
      isOnReivewUp: false,
      isReEvaluateUp: false,
      isDeclinedUp: false,
      isDeclineConfirmedUp: false,
      isUnderSuperVisionUp: false,
      isUnderSuperVisionConfirmedUp: false,
      isConfirmedUp: false,
      isReturned: false,
      isFederalApprovedUp: false,
      isEvaluationUp: false,
      isUnassignedEvaluationUp: false,
      isUnderEvaluationUp: false,
      isReturnedEvaluationUp: false,
      isConfirmedEvaluationUp: false,
      isPaymentReviewnUp: false,
      isFinishedUp: false,
      isLicensedUp: false,
    });
    const newLicenseMenuHandler = (menu) => {
      emit("selectNewLicenseMenu", menu);
    };

    const dropDownHandler = (applicationValue) => {
      if (applicationValue == "NewLicenseUnfinished") {
        newLicenseDDIcon.value.isUnfinishedUp = !newLicenseDDIcon.value
          .isUnfinishedUp;
      } else if (applicationValue == "NewLicenseUnassignedEvaluation") {
        newLicenseDDIcon.value.isUnassignedEvaluationUp = !newLicenseDDIcon
          .value.isUnassignedEvaluationUp;
      } else if (applicationValue == "NewLicenseUnderEvaluation") {
        newLicenseDDIcon.value.isUnderEvaluationUp = !newLicenseDDIcon.value
          .isUnderEvaluationUp;
      } else if (applicationValue == "NewLicenseReturnedEvaluation") {
        newLicenseDDIcon.value.isReturnedEvaluationUp = !newLicenseDDIcon.value
          .isReturnedEvaluationUp;
      } else if (applicationValue == "NewLicenseConfirmedEvaluation") {
        newLicenseDDIcon.value.isConfirmedEvaluationUp = !newLicenseDDIcon.value
          .isConfirmedEvaluationUp;
      } else if (applicationValue == "NewLicenseDeclined") {
        newLicenseDDIcon.value.isDeclinedUp = !newLicenseDDIcon.value
          .isDeclinedUp;
      } else if (applicationValue == "NewLicenseDeclineConfirmed") {
        newLicenseDDIcon.value.isDeclineConfirmedUp = !newLicenseDDIcon.value
          .isDeclineConfirmedUp;
      } else if (applicationValue == "NewLicenseUnderSuperVisionConfirmed") {
        newLicenseDDIcon.value.isUnderSuperVisionConfirmedUp = !newLicenseDDIcon.value
          .isUnderSuperVisionConfirmedUp;
      } else if (applicationValue == "NewLicensePaymentReview") {
        newLicenseDDIcon.value.isPaymentReviewnUp = !newLicenseDDIcon.value
          .isPaymentReviewnUp;
      } else if (applicationValue == "NewLicenseInReviewPayment") {
        newLicenseDDIcon.value.isInReviewPaymentUp = !newLicenseDDIcon.value
          .isInReviewPaymentUp;
      } else if (applicationValue == "NewLicenseLicensed") {
        newLicenseDDIcon.value.isLicensedUp = !newLicenseDDIcon.value
          .isLicensedUp;
      }
      emit("applicationTypeSelected", applicationValue);
    };
    const dropDownListHandler = (menu) => {
      emit("selectNewLicenseMenu", menu);
    };

    const newlicenseDDHandler = (applicationValue) => {
      if (applicationValue == "NewLicense") {
        newLicenseDDIcon.value.isNewLicenseUp = !newLicenseDDIcon.value
          .isNewLicenseUp;
      } else if (applicationValue == "NewLicenseUnderReview") {
        newLicenseDDIcon.value.isUnderReviewUp = !newLicenseDDIcon.value
          .isUnderReviewUp;
      } else if (applicationValue == "NewLicenseFinished") {
        newLicenseDDIcon.value.isFinishedUp = !newLicenseDDIcon.value
          .isFinishedUp;
      } else if (applicationValue == "NewLicenseAssigned") {
        newLicenseDDIcon.value.isAssignedUp = !newLicenseDDIcon.value
          .isAssignedUp;
      } else if (applicationValue == "NewLicenseUnfinished") {
        newLicenseDDIcon.value.isUnfinishedUp = !newLicenseDDIcon.value
          .isUnfinishedUp;
      } else if (applicationValue == "NewLicenseUnconfirmed") {
        newLicenseDDIcon.value.isUnconfirmedUp = !newLicenseDDIcon.value
          .isUnconfirmedUp;
      } else if (applicationValue == "NewLicenseOnReview") {
        newLicenseDDIcon.value.isOnReivewUp = !newLicenseDDIcon.value
          .isOnReivewUp;
      } else if (applicationValue == "NewLicenseReEvaluate") {
        newLicenseDDIcon.value.isReEvaluateUp = !newLicenseDDIcon.value
          .isReEvaluateUp;
      }  else if (applicationValue == "NewLicenseUnderSuperVision") {
        newLicenseDDIcon.value.isUnderSuperVisionUp = !newLicenseDDIcon.value
          .isUnderSuperVisionUp;
      } else if (applicationValue == "NewLicenseConfirmed") {
        newLicenseDDIcon.value.isConfirmedUp = !newLicenseDDIcon.value
          .isConfirmedUp;
      } else if (applicationValue == "NewLicenseReturned") {
        newLicenseDDIcon.value.isReturnedUp = !newLicenseDDIcon.value
          .isReturnedUp;
      } else if (applicationValue == "NewLicenseFederalApproved") {
        newLicenseDDIcon.value.isFederalApprovedUp = !newLicenseDDIcon.value
          .isFederalApprovedUp;
      } else if (applicationValue == "NewLicenseEvaluation") {
        newLicenseDDIcon.value.isEvaluationUp = !newLicenseDDIcon.value
          .isEvaluationUp;
      }
      emit("applicationTypeSelected", applicationValue);
    };
    return {
      newLicenseDDIcon,
      dropDownHandler,
      dropDownListHandler,
      newlicenseDDHandler,
      newLicenseMenuHandler,
    };
  },
};
</script>
