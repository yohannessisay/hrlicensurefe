<template>
  <div class="mb-2">
    <li class=" justify-start static">
      <transition name="slide-fade-to-left">
        <div class="">
          <div
            @click="renewalDDHandler('Renewal')"
            class=" justify-center items-center "
          >
            <div class="p-1 ">
              <h3 class="text-lightBlueB-500 mt-tiny">
                <span style="color: white;">
                  <i class="mr-2 far fa-thumbs-up fa-x fa-light"></i>
                  <i
                    v-if="renewalDDIcon.isRenewalUp"
                    class="fas fa-chevron-circle-up float-right mt-2"
                  ></i>
                  <i
                    v-else
                    class="fas fa-chevron-circle-down float-right mt-2"
                  ></i>
                </span>
                <span class="text-lg" style="color: white; ">Renewal</span>
              </h3>
            </div>
          </div>

          <div
            v-if="dropdownValue.renewal"
            class="dropdown-menu   mb-12 ml-4 "
            style="color: #648ea3; width: 200px;"
          >
            <ul class="block w-full shadow float-right" style="color: #648ea3;">
              <drop-down-lists
                :dropdownValue="[
                  dropdownValue.renewal,
                  dropdownValue.renewalUnassigned,
                ]"
                name="Unassigned"
                dropDownHandlerValue="RenewalUnassigned"
                :dropDownMenus="[
                  'RenewalUnassigned',
                  'renewalReSubmitted',
                ]"
                :isDropDownIconUp="renewalDDIcon.isUnassignedUp"
                :adminRole="adminRole"
                :yoursAndOthersApplication="['Unassigned', 'Re Submitted']"
                @dropDownHandler="dropDownHandler"
                @dropDownListHandler="dropDownListHandler"
              />

              <!-- under review started here -->
              <div v-if="expertLevelId == 4">
                <li class=" justify-start ">
                  <transition name="slide-fade-to-left">
                    <div class="">
                      <div class=" justify-center items-center ">
                        <div class="p-1 ">
                          <h3
                            class="text-lightBlueB-500 mt-tiny"
                            @click="renewalDDHandler('RenewalUnderReview')"
                          >
                            <span style="color: white;">
                              <i
                                v-if="renewalDDIcon.isUnderReviewUp"
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
                            dropdownValue.renewalUnderReview,
                            dropdownValue.renewalAssigned,
                          ]"
                          name="Assigned"
                          dropDownHandlerValue="RenewalAssigned"
                          :dropDownMenus="[
                            'renewalAssigned',
                            'renewalAssignedToOthers',
                          ]"
                          :isDropDownIconUp="renewalDDIcon.isAssignedUp"
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
                            dropdownValue.renewalUnderReview,
                            dropdownValue.renewalUnfinished,
                          ]"
                          name="Draft"
                          dropDownHandlerValue="RenewalUnfinished"
                          :dropDownMenus="[
                            'renewalUnfinished',
                            'renewalOthersUnfinished',
                          ]"
                          :isDropDownIconUp="renewalDDIcon.isUnfinishedUp"
                          :adminRole="adminRole"
                          :yoursAndOthersApplication="[
                            'My Unfinished',
                            'Others Unfinished',
                          ]"
                          @dropDownHandler="dropDownHandler"
                          @dropDownListHandler="dropDownListHandler"
                        />
                      </div>
                      <div
                        v-if="dropdownValue.renewalUnderReview"
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
                                  @click="renewalDDHandler('RenewalEvaluation')"
                                >
                                  <span style="color: white;">
                                    <i
                                      v-if="renewalDDIcon.isEvaluationUp"
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
                                  v-if="dropdownValue.renewalEvaluation"
                                  class="dropdown-menu relative  shadow-md mb-12 ml-4"
                                  style="color: #648ea3; width: 200px;"
                                >
                                  <drop-down-lists
                                    :dropdownValue="[
                                      dropdownValue.renewalEvaluation,
                                      dropdownValue.renewalUnassignedEvaluation,
                                    ]"
                                    name="Unassigned Evaluation"
                                    dropDownHandlerValue="RenewalUnassignedEvaluation"
                                    :dropDownMenus="[
                                      'renewalUnassignedEvaluation',
                                      'renewalOthersUnassignedEvaluation',
                                    ]"
                                    :isDropDownIconUp="
                                      renewalDDIcon.isUnassignedEvaluationUp
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
                                      dropdownValue.renewalEvaluation,
                                      dropdownValue.renewalUnderEvaluation,
                                    ]"
                                    name="Under Evaluation"
                                    dropDownHandlerValue="RenewalUnderEvaluation"
                                    :dropDownMenus="[
                                      'renewalUnderEvaluation',
                                      'renewalOthersUnderEvaluation',
                                    ]"
                                    :isDropDownIconUp="
                                      renewalDDIcon.isUnderEvaluationUp
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
                                      dropdownValue.renewalEvaluation,
                                      dropdownValue.renewalEvaluationAssessment,
                                    ]"
                                    name="Assessments"
                                    dropDownHandlerValue="RenewalEvaluationAssessment"
                                    :dropDownMenus="[
                                      'renewalEvaluationAssessment',
                                      'renewalOthersEvaluationAssessment',
                                    ]"
                                    :isDropDownIconUp="
                                      renewalDDIcon.isUnderEvaluationUp
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
                                      dropdownValue.renewalEvaluation,
                                      dropdownValue.renewalReturnedEvaluation,
                                    ]"
                                    name="Returned Evaluation"
                                    dropDownHandlerValue="RenewalReturnedEvaluation"
                                    :dropDownMenus="[
                                      'renewalReturnedEvaluation',
                                      'renewalOthersReturnedEvaluation',
                                    ]"
                                    :isDropDownIconUp="
                                      renewalDDIcon.isReturnedEvaluationUp
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
                        v-if="dropdownValue.renewalUnderReview"
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
                                    renewalDDHandler(
                                      'RenewalConfirmedEvaluation'
                                    )
                                  "
                                >
                                  <span style="color: white;">
                                    <i
                                      v-if="
                                        renewalDDIcon.isConfirmedEvaluationUp
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
                                    dropdownValue.renewalConfirmedEvaluation
                                  "
                                  class="dropdown-menu relative  shadow-md mb-12 ml-4"
                                  style="color: #648ea3; width: 200px;"
                                >
                                  <drop-down-lists
                                    :dropdownValue="[
                                      dropdownValue.renewalConfirmedEvaluation,
                                      dropdownValue.renewalConfirmed,
                                    ]"
                                    name="Approved"
                                    dropDownHandlerValue="RenewalConfirmed"
                                    :dropDownMenus="[
                                      'renewalConfirmed',
                                      'othersRenewalConfirmed',
                                    ]"
                                    :isDropDownIconUp="
                                      renewalDDIcon.isConfirmedUp
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
                                      dropdownValue.renewalConfirmedEvaluation,
                                      dropdownValue.renewalDeclineConfirmed,
                                    ]"
                                    name="Declined"
                                    dropDownHandlerValue="RenewalDeclineConfirmed"
                                    :dropDownMenus="[
                                      'renewalDeclineConfirmed',
                                      'othersRenewalDeclineConfirmed',
                                    ]"
                                    :isDropDownIconUp="
                                      renewalDDIcon.isDeclineConfirmedUp
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
                                      dropdownValue.renewalConfirmedEvaluation,
                                      dropdownValue.renewalUnderSuperVisionConfirmed,
                                    ]"
                                    name="Under Super Vision"
                                    dropDownHandlerValue="RenewalUnderSuperVisionConfirmed"
                                    :dropDownMenus="[
                                      'renewalUnderSuperVisionConfirmed',
                                      'renewalOthersUnderSuperVisionConfirmed',
                                    ]"
                                    :isDropDownIconUp="
                                      renewalDDIcon.isUnderSuperVisionConfirmedUp
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
                        v-if="dropdownValue.renewalUnderReview"
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
                                    renewalDDHandler('RenewalPaymentReview')
                                  "
                                >
                                  <span style="color: white;">
                                    <i
                                      v-if="renewalDDIcon.isPaymentReviewnUp"
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
                                  v-if="dropdownValue.renewalPaymentReview"
                                  class="dropdown-menu relative  shadow-md mb-12 ml-4"
                                  style="color: #648ea3; width: 200px;"
                                >
                                  <drop-down-lists
                                    :dropdownValue="[
                                      dropdownValue.renewalPaymentReview,
                                      dropdownValue.renewalInReviewPayment,
                                    ]"
                                    name="In Review"
                                    dropDownHandlerValue="RenewalInReviewPayment"
                                    :dropDownMenus="[
                                      'renewalInReviewPayment',
                                      'othersRenewalInReviewPayment',
                                    ]"
                                    :isDropDownIconUp="
                                      renewalDDIcon.isInReviewPaymentUp
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
                                      dropdownValue.renewalPaymentReview,
                                      dropdownValue.renewalDeclinedPayment,
                                    ]"
                                    name="Declined Payment"
                                    dropDownHandlerValue="RenewalDeclinedPayment"
                                    :dropDownMenus="[
                                      'renewalDeclinedPayment',
                                      'othersRenewalDeclinedPayment',
                                    ]"
                                    :isDropDownIconUp="
                                      renewalDDIcon.isDeclinedPaymentUp
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
              <!-- under review end here -->

              <!-- Federal Expert side nav starts here -->
              <div v-if="expertLevelId == 3">
                <drop-down-lists
                  :dropdownValue="[
                    dropdownValue.renewal,
                    dropdownValue.renewalAssigned,
                  ]"
                  name="Assigned"
                  dropDownHandlerValue="RenewalAssigned"
                  :dropDownMenus="[
                    'renewalAssigned',
                    'renewalAssignedToOthers',
                  ]"
                  :isDropDownIconUp="renewalDDIcon.isAssignedUp"
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
                    dropdownValue.renewal,
                    dropdownValue.renewalUnfinished,
                  ]"
                  name="Draft"
                  dropDownHandlerValue="RenewalUnfinished"
                  :dropDownMenus="[
                    'renewalUnfinished',
                    'renewalOthersUnfinished',
                  ]"
                  :isDropDownIconUp="renewalDDIcon.isUnfinishedUp"
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
                    dropdownValue.renewal,
                    dropdownValue.renewalUnassignedEvaluation,
                  ]"
                  name="Approved"
                  dropDownHandlerValue="RenewalUnassignedEvaluation"
                  :dropDownMenus="[
                    'renewalUnassignedEvaluation',
                    'renewalOthersUnassignedEvaluation',
                  ]"
                  :isDropDownIconUp="renewalDDIcon.isUnconfirmedUp"
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
                    dropdownValue.renewal,
                    dropdownValue.renewalDeclined,
                  ]"
                  name="Declined"
                  dropDownHandlerValue="RenewalDeclined"
                  :dropDownMenus="['renewalDeclined', 'allRenewalDeclined']"
                  :isDropDownIconUp="renewalDDIcon.isDeclinedUp"
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
                    dropdownValue.renewal,
                    dropdownValue.renewalUnderSuperVision,
                  ]"
                  name="Under Super Vision"
                  dropDownHandlerValue="RenewalUnderSuperVision"
                  :dropDownMenus="[
                    'renewalUnderSuperVision',
                    'renewalOthersUnderSuperVision',
                  ]"
                  :isDropDownIconUp="renewalDDIcon.isUnderSuperVisionUp"
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
                v-if="dropdownValue.renewal && expertLevelId == 3"
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
                          @click="renewalDDHandler('RenewalPaymentReview')"
                        >
                          <span style="color: white;">
                            <i
                              v-if="renewalDDIcon.isPaymentReviewnUp"
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
                          v-if="dropdownValue.renewalPaymentReview"
                          class="dropdown-menu relative  shadow-md mb-12 ml-4"
                          style="color: #648ea3; width: 200px;"
                        >
                          <drop-down-lists
                            :dropdownValue="[
                              dropdownValue.renewalPaymentReview,
                              dropdownValue.renewalInReviewPayment,
                            ]"
                            name="In Review"
                            dropDownHandlerValue="RenewalInReviewPayment"
                            :dropDownMenus="[
                              'renewalInReviewPayment',
                              'othersRenewalInReviewPayment',
                            ]"
                            :isDropDownIconUp="
                              renewalDDIcon.isInReviewPaymentUp
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
                              dropdownValue.renewalPaymentReview,
                              dropdownValue.renewalDeclinedPayment,
                            ]"
                            name="Declined Payment"
                            dropDownHandlerValue="RenewalDeclinedPayment"
                            :dropDownMenus="[
                              'renewalDeclinedPayment',
                              'othersRenewalDeclinedPayment',
                            ]"
                            :isDropDownIconUp="
                              renewalDDIcon.isDeclinedPaymentUp
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
              <!-- Federal Expert side nav ends here -->
              <drop-down-lists
                :dropdownValue="[
                  dropdownValue.renewal,
                  dropdownValue.renewalLicensed,
                ]"
                name="Licensed"
                dropDownHandlerValue="RenewalLicensed"
                :dropDownMenus="['renewalLicensed', 'renewalOthersLicensed']"
                :isDropDownIconUp="renewalDDIcon.isLicensedUp"
                :adminRole="adminRole"
                :yoursAndOthersApplication="['Licensed', 'Others Licensed']"
                @dropDownHandler="dropDownHandler"
                @dropDownListHandler="dropDownListHandler"
              />

              <!-- All Licensed Applications starts here -->

              <li
                @click="renewalMenuHandler('renewalAllLicensed')"
                class="mb-2"
              >
                <div class=" text-base" style="color: white; ">
                  <!-- <i class="far fa-thumbs-up fa-x fa-light mt-4"></i> -->
                  All Licensed
                </div>
              </li>
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
  name: "RenewalSideNav",
  components: {
    DropDownLists,
  },
  props: ["dropdownValue", "expertLevelId", "adminRole"],
  setup(props, { emit }) {
    let renewalDDIcon = ref({
      isRenewalUp: false,
      isAssignedUp: false,
      isUnfinishedUp: false,
      isUnconfirmedUp: false,
      isOnReivewUp: false,
      isReEvaluateUp: false,
      isDeclinedUp: false,
      isDeclineConfirmedUp: false,
      isUnderSuperVisionConfirmedUp: false,
      isUnderSuperVisionUp: false,
      isConfirmedUp: false,
      isReturnedUp: false,
      isFederalApprovedUp: false,
      isEvaluationUp: false,
      isUnassignedEvaluationUp: false,
      isUnderEvaluationUp: false,
      isReturnedEvaluationUp: false,
      isConfirmedEvaluationUp: false,
      isPaymentReviewnUp: false,
      isDeclinedPaymentUp: false,
      isFinishedUp: false,
      isLicensedUp: false,
      isUnassignedUp: false,
    });

    const renewalMenuHandler = (menu) => {
      emit("selectRenewalMenu", menu);
    };

    const dropDownHandler = (applicationValue) => {
      if (applicationValue == "RenewalUnfinished") {
        renewalDDIcon.value.isUnfinishedUp = !renewalDDIcon.value
          .isUnfinishedUp;
      } else if (applicationValue == "RenewalUnassignedEvaluation") {
        renewalDDIcon.value.isUnassignedEvaluationUp = !renewalDDIcon.value
          .isUnassignedEvaluationUp;
      } else if (applicationValue == "RenewalUnderEvaluation") {
        renewalDDIcon.value.isUnderEvaluationUp = !renewalDDIcon.value
          .isUnderEvaluationUp;
      } else if (applicationValue == "RenewalReturnedEvaluation") {
        renewalDDIcon.value.isReturnedEvaluationUp = !renewalDDIcon.value
          .isReturnedEvaluationUp;
      } else if (applicationValue == "RenewalConfirmedEvaluation") {
        renewalDDIcon.value.isConfirmedEvaluationUp = !renewalDDIcon.value
          .isConfirmedEvaluationUp;
      } else if (applicationValue == "RenewalDeclineConfirmed") {
        renewalDDIcon.value.isDeclineConfirmedUp = !renewalDDIcon.value
          .isDeclineConfirmedUp;
      } else if (applicationValue == "RenewalUnderSuperVisionConfirmed") {
        renewalDDIcon.value.isUnderSuperVisionConfirmedUp = !renewalDDIcon.value
          .isUnderSuperVisionConfirmedUp;
      } else if (applicationValue == "RenewalPaymentReview") {
        renewalDDIcon.value.isPaymentReviewnUp = !renewalDDIcon.value
          .isPaymentReviewnUp;
      } else if (applicationValue == "RenewalInReviewPayment") {
        renewalDDIcon.value.isInReviewPaymentUp = !renewalDDIcon.value
          .isInReviewPaymentUp;
      } else if (applicationValue == "RenewalDeclinedPayment") {
        renewalDDIcon.value.isDeclinedPaymentUp = !renewalDDIcon.value
          .isDeclinedPaymentUp;
      } else if (applicationValue == "RenewalLicensed") {
        renewalDDIcon.value.isLicensedUp = !renewalDDIcon.value.isLicensedUp;
      } else if (applicationValue == "RenewalUnassigned") {
        renewalDDIcon.value.isUnassignedUp = !renewalDDIcon.value.isUnassignedUp;
      }
      emit("applicationTypeSelected", applicationValue);
    };
    const dropDownListHandler = (menu) => {
      emit("selectRenewalMenu", menu);
    };

    const renewalDDHandler = (applicationValue) => {
      if (applicationValue == "Renewal") {
        renewalDDIcon.value.isRenewalUp = !renewalDDIcon.value.isRenewalUp;
      } else if (applicationValue == "RenewalUnderReview") {
        renewalDDIcon.value.isUnderReviewUp = !renewalDDIcon.value
          .isUnderReviewUp;
      } else if (applicationValue == "RenewalAssigned") {
        renewalDDIcon.value.isAssignedUp = !renewalDDIcon.value.isAssignedUp;
      } else if (applicationValue == "RenewalUnfinished") {
        renewalDDIcon.value.isUnfinishedUp = !renewalDDIcon.value
          .isUnfinishedUp;
      } else if (applicationValue == "RenewalUnconfirmed") {
        renewalDDIcon.value.isUnconfirmedUp = !renewalDDIcon.value
          .isUnconfirmedUp;
      } else if (applicationValue == "RenewalOnReview") {
        renewalDDIcon.value.isOnReivewUp = !renewalDDIcon.value.isOnReivewUp;
      } else if (applicationValue == "RenewalReEvaluate") {
        renewalDDIcon.value.isReEvaluateUp = !renewalDDIcon.value
          .isReEvaluateUp;
      } else if (applicationValue == "RenewalDeclined") {
        renewalDDIcon.value.isDeclinedUp = !renewalDDIcon.value.isDeclinedUp;
      } else if (applicationValue == "RenewalUnderSuperVision") {
        renewalDDIcon.value.isUnderSuperVisionUp = !renewalDDIcon.value
          .isUnderSuperVisionUp;
      } else if (applicationValue == "RenewalConfirmed") {
        renewalDDIcon.value.isConfirmedUp = !renewalDDIcon.value.isConfirmedUp;
      } else if (applicationValue == "RenewalReturned") {
        renewalDDIcon.value.isReturnedUp = !renewalDDIcon.value.isReturnedUp;
      } else if (applicationValue == "RenewalFederalApproved") {
        renewalDDIcon.value.isFederalApprovedUp = !renewalDDIcon.value
          .isFederalApprovedUp;
      } else if (applicationValue == "RenewalEvaluation") {
        renewalDDIcon.value.isEvaluationUp = !renewalDDIcon.value
          .isEvaluationUp;
      }
      emit("applicationTypeSelected", applicationValue);
    };
    return {
      renewalDDIcon,
      renewalDDHandler,
      renewalMenuHandler,
      dropDownHandler,
      dropDownListHandler,
    };
  },
};
</script>
