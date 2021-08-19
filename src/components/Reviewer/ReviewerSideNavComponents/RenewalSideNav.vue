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
              <li @click="renewalMenuHandler('RenewalUnassigned')" class="mb-2">
                <!-- <span style="color: #648ea3;"> -->
                <p class=" text-base" style="color: white; ">
                  <i class="far fa-thumbs-up fa-x fa-light"></i>
                  Unassigned
                </p>
              </li>

              <!-- assigned to you and assigned to others started here -->
              <div>
                <li
                  @click="renewalDDHandler('RenewalAssigned')"
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
                                v-if="renewalDDIcon.isAssignedUp"
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
                              >Assigned</span
                            >
                          </h3>
                        </div>
                      </div>
                      <div
                        v-if="dropdownValue.renewalAssigned"
                        class="dropdown-menu relative  shadow-md mb-12 ml-4"
                        style="color: #648ea3; width: 200px;"
                      >
                        <ul class="block w-full  shadow float-right ">
                          <li
                            @click="renewalMenuHandler('renewalAssigned')"
                            class="mb-2"
                          >
                            <!-- <span style="color: #648ea3;"> -->
                            <p class=" text-sm" style="color: white; ">
                              <i
                                class="mr-2 far fa-address-book fa-x fa-light"
                              ></i>
                              Assigned To You
                            </p>
                          </li>
                          <li
                            @click="
                              renewalMenuHandler('renewalAssignedToOthers')
                            "
                          >
                            <!-- <span style="color: #648ea3;"> -->
                            <p class=" text-sm" style="color: white; ">
                              <i class="mr-2 far fa-id-card fa-x"></i>
                              Assigned To Others
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </transition>
                </li>
                <li
                            @click="renewalMenuHandler('renewalAssigned')"
                            class="mb-2"
                            v-else
                          >
                            <!-- <span style="color: #648ea3;"> -->
                            <p class=" text-sm" style="color: white; ">
                              <i
                                class="mr-2 far fa-address-book fa-x fa-light"
                              ></i>
                              Assigned To You
                            </p>
                          </li>
              </div>
              <!-- assigned to you and assigned to others ends here -->

              <!-- unfinished started here -->
              <div>
                <li
                  @click="renewalDDHandler('RenewalUnfinished')"
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
                                v-if="renewalDDIcon.isUnfinishedUp"
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
                        v-if="dropdownValue.renewalUnfinished"
                        class="dropdown-menu relative  shadow-md mb-12 ml-4"
                        style="color: #648ea3; width: 200px;"
                      >
                        <ul class="block w-full  shadow float-right ">
                          <li
                            @click="renewalMenuHandler('renewalUnfinished')"
                            class="mb-2"
                          >
                            <!-- <span style="color: #648ea3;"> -->
                            <p class=" text-sm" style="color: white; ">
                              <i
                                class="mr-2 far fa-address-book fa-x fa-light"
                              ></i>
                              My Unfinished
                            </p>
                          </li>
                          <li
                            @click="
                              renewalMenuHandler('renewalOthersUnfinished')
                            "
                          >
                            <!-- <span style="color: #648ea3;"> -->
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
                            @click="renewalMenuHandler('renewalUnfinished')"
                            class="mb-2"
                            v-else
                          >
                            <!-- <span style="color: #648ea3;"> -->
                            <p class=" text-sm" style="color: white; ">
                              <i
                                class="mr-2 far fa-address-book fa-x fa-light"
                              ></i>
                              Unfinished
                            </p>
                          </li>
              </div>
              <!-- unfinished ends here -->

              <!-- unconfirmed start here -->
              <div>
                <li
                  @click="renewalDDHandler('RenewalUnconfirmed')"
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
                                v-if="renewalDDIcon.isUnconfirmedUp"
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
                              >{{expertLevelId == 4 ?  'Unconfirmed' : 'Approved' }}</span
                            >
                          </h3>
                        </div>
                      </div>
                      <div
                        v-if="dropdownValue.renewalUnconfirmed"
                        class="dropdown-menu relative  shadow-md mb-12 ml-4"
                        style="color: #648ea3; width: 200px;"
                      >
                        <ul class="block w-full  shadow float-right ">
                          <li
                            @click="renewalMenuHandler('renewalUnconfirmed')"
                            class="mb-2"
                          >
                            <!-- <span style="color: #648ea3;"> -->
                            <p class=" text-sm" style="color: white; ">
                              <i
                                class="mr-2 far fa-address-book fa-x fa-light"
                              ></i>
                              {{expertLevelId == 4 ?  'My Unconfirmed' : 'My Approved' }}
                            </p>
                          </li>
                          <li
                            @click="renewalMenuHandler('allRenewalUnconfirmed')"
                          >
                            <!-- <span style="color: #648ea3;"> -->
                            <p class=" text-sm" style="color: white; ">
                              <i class="mr-2 far fa-id-card fa-x"></i>
                              {{expertLevelId == 4 ?  'Others Unconfirmed' : 'Others Approved' }}
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </transition>
                </li>
                <li
                            @click="renewalMenuHandler('renewalUnconfirmed')"
                            class="mb-2"
                            v-else
                          >
                            <!-- <span style="color: #648ea3;"> -->
                            <p class=" text-sm" style="color: white; ">
                              <i
                                class="mr-2 far fa-address-book fa-x fa-light"
                              ></i>
                              {{expertLevelId == 4 ?  'Unconfirmed' : 'Approved' }}
                            </p>
                          </li>
              </div>
              <!-- unconfirmed ends here -->

              <!-- on review start here -->
              <div v-if="expertLevelId == 4">
                <li
                  @click="renewalDDHandler('RenewalOnReview')"
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
                                v-if="renewalDDIcon.isOnReivewUp"
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
                        v-if="dropdownValue.renewalOnReview"
                        class="dropdown-menu relative  shadow-md mb-12 ml-4"
                        style="color: #648ea3; width: 200px;"
                      >
                        <ul class="block w-full  shadow float-right ">
                          <li
                            @click="renewalMenuHandler('renewalOnReview')"
                            class="mb-2"
                          >
                            <!-- <span style="color: #648ea3;"> -->
                            <p class=" text-sm" style="color: white; ">
                              <i
                                class="mr-2 far fa-address-book fa-x fa-light"
                              ></i>
                              My On Review
                            </p>
                          </li>
                          <li
                            @click="renewalMenuHandler('othersRenewalOnReview')"
                          >
                            <!-- <span style="color: #648ea3;"> -->
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
                            @click="renewalMenuHandler('renewalOnReview')"
                            class="mb-2"
                            v-else
                          >
                            <!-- <span style="color: #648ea3;"> -->
                            <p class=" text-sm" style="color: white; ">
                              <i
                                class="mr-2 far fa-address-book fa-x fa-light"
                              ></i>
                              On Review
                            </p>
                          </li>
              </div>
              <!-- on review ends here -->

              <!-- re evaluate starts here -->
              <div v-if="expertLevelId == 4">
                <li
                  @click="renewalDDHandler('RenewalReEvaluate')"
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
                                v-if="renewalDDIcon.isReEvaluateUp"
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
                        v-if="dropdownValue.renewalReEvaluate"
                        class="dropdown-menu relative  shadow-md mb-12 ml-4"
                        style="color: #648ea3; width: 200px;"
                      >
                        <ul class="block w-full  shadow float-right ">
                          <li
                            @click="renewalMenuHandler('renewalReEvaluate')"
                            class="mb-2"
                          >
                            <!-- <span style="color: #648ea3;"> -->
                            <p class=" text-sm" style="color: white; ">
                              <i
                                class="mr-2 far fa-address-book fa-x fa-light"
                              ></i>
                              My Re Evaluate
                            </p>
                          </li>
                          <li
                            @click="
                              renewalMenuHandler('othersRenewalReEvaluate')
                            "
                          >
                            <!-- <span style="color: #648ea3;"> -->
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
                            @click="renewalMenuHandler('renewalReEvaluate')"
                            class="mb-2"
                            v-else
                          >
                            <!-- <span style="color: #648ea3;"> -->
                            <p class=" text-sm" style="color: white; ">
                              <i
                                class="mr-2 far fa-address-book fa-x fa-light"
                              ></i>
                              Re Evaluate
                            </p>
                          </li>
              </div>
              <!-- re evaluate ends here -->

              <!-- decline starts here -->
              <div>
                <li
                  @click="renewalDDHandler('RenewalDeclined')"
                  class=" justify-start "
                >
                  <transition name="slide-fade-to-left">
                    <div class="">
                      <div class=" justify-center items-center ">
                        <div class="p-1 ">
                          <h3 class="text-lightBlueB-500 mt-tiny">
                            <span style="color: white;">
                              <i
                                v-if="renewalDDIcon.isDeclinedUp"
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
                        v-if="dropdownValue.renewalDeclined"
                        class="dropdown-menu relative  shadow-md mb-12 ml-4"
                        style="color: #648ea3; width: 200px;"
                      >
                        <ul class="block w-full  shadow float-right ">
                          <li
                            @click="renewalMenuHandler('renewalDeclined')"
                            class="mb-2"
                          >
                            <!-- <span style="color: #648ea3;"> -->
                            <p class=" text-sm" style="color: white; ">
                              <i
                                class="mr-2 far fa-address-book fa-x fa-light"
                              ></i>
                              {{adminRole=='ADM' ?  'My Declined' : 'Declined'}}
                            </p>
                          </li>
                          <li @click="renewalMenuHandler('allRenewalDeclined')" v-if="adminRole == 'ADM'">
                            <!-- <span style="color: #648ea3;"> -->
                            <p class=" text-sm" style="color: white; ">
                              <i class="mr-2 far fa-id-card fa-x"></i>
                              Others Declined
                            </p>
                          </li>
                          <li
                            @click="
                              renewalMenuHandler('renewalDeclinedPayment')
                            "
                            class="mb-2"
                          >
                            <!-- <span style="color: #648ea3;"> -->
                            <p class=" text-sm" style="color: white; ">
                              <i
                                class="mr-2 far fa-address-book fa-x fa-light"
                              ></i>
                              {{adminRole=='ADM' ?  'My Declined Payment' : 'Declined Payment'}}
                            </p>
                          </li>
                          <li
                            @click="
                              renewalMenuHandler(
                                'othersRenewalDeclinedPayment'
                              )
                            "
                            v-if="adminRole == 'ADM'"
                          >
                            <!-- <span style="color: #648ea3;"> -->
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
              </div>
              <!-- others decline ends here -->

              <!-- under super vision starts here -->
              <div>
                <li
                  @click="renewalDDHandler('RenewalUnderSuperVision')"
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
                                v-if="renewalDDIcon.isUnderSuperVisionUp"
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
                        v-if="dropdownValue.renewalUnderSuperViesion"
                        class="dropdown-menu relative  shadow-md mb-12 ml-4"
                        style="color: #648ea3; width: 200px;"
                      >
                        <ul class="block w-full  shadow float-right ">
                          <li
                            @click="
                              renewalMenuHandler('renewalUnderSuperVision')
                            "
                            class="mb-2"
                          >
                            <!-- <span style="color: #648ea3;"> -->
                            <p class=" text-sm" style="color: white; ">
                              <i
                                class="mr-2 far fa-address-book fa-x fa-light"
                              ></i>
                              My Under Super Vision
                            </p>
                          </li>
                          <li
                            @click="
                              renewalMenuHandler(
                                'renewalOthersUnderSuperVision'
                              )
                            "
                          >
                            <!-- <span style="color: #648ea3;"> -->
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
              </div>
              <!-- under super vision ends here -->

              <!-- confirmed starts here -->
              <div v-if="expertLevelId == 4">
                <li
                  @click="renewalDDHandler('RenewalConfirmed')"
                  class=" justify-start "
                >
                  <transition name="slide-fade-to-left">
                    <div class="">
                      <div class=" justify-center items-center ">
                        <div class="p-1 ">
                          <h3 class="text-lightBlueB-500 mt-tiny">
                            <span style="color: white;">
                              <i
                                v-if="renewalDDIcon.isConfirmedUp"
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
                        v-if="dropdownValue.renewalConfirmed"
                        class="dropdown-menu relative  shadow-md mb-12 ml-4"
                        style="color: #648ea3; width: 200px;"
                      >
                        <ul class="block w-full  shadow float-right ">
                          <li
                            @click="renewalMenuHandler('renewalConfirmed')"
                            class="mb-2"
                          >
                            <!-- <span style="color: #648ea3;"> -->
                            <p class=" text-sm" style="color: white; ">
                              <i
                                class="mr-2 far fa-address-book fa-x fa-light"
                              ></i>
                              
                              {{adminRole=='ADM' ?  'My Confirmed' : 'Confirmed'}}
                            </p>
                          </li>
                          <li
                            @click="
                              renewalMenuHandler('renewalOthersConfirmed')
                            "
                            v-if="adminRole == 'ADM'"
                          >
                            <!-- <span style="color: #648ea3;"> -->
                            <p class=" text-sm" style="color: white; ">
                              <i class="mr-2 far fa-id-card fa-x"></i>
                              Others Confirmed
                            </p>
                          </li>
                          <li
                            @click="
                              renewalMenuHandler('renewalApprovedPayment')
                            "
                            class="mb-2"
                          >
                            <!-- <span style="color: #648ea3;"> -->
                            <p class=" text-sm" style="color: white; ">
                              <i
                                class="mr-2 far fa-address-book fa-x fa-light"
                              ></i>
                              {{adminRole=='ADM' ?  'My Approved Payment' : 'Approved Payment'}}
                              
                            </p>
                          </li>
                          <li
                            @click="
                              renewalMenuHandler('othersRenewalApprovedPayment')
                            "
                            v-if="adminRole == 'ADM'"
                          >
                            <!-- <span style="color: #648ea3;"> -->
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
              </div>
              <!-- confirmed ends here -->
            </ul>
          </div>
        </div>
      </transition>
    </li>
  </div>
</template>
<script>
import { ref } from 'vue';
export default {
  name: "RenewalSideNav",
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
      isUnderSuperVisionUp: false,
      isConfirmedUp: false,
      isFederalApprovedUp: false,
    });

    const renewalMenuHandler = (menu) => {
      emit("selectRenewalMenu", menu);
    };

    const renewalDDHandler = (applicationValue) => {
      if (applicationValue == "Renewal") {
        renewalDDIcon.value.isRenewalUp = !renewalDDIcon.value
          .isRenewalUp;
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
      } else if (applicationValue == "RenewalFederalApproved") {
        renewalDDIcon.value.isFederalApprovedUp = !renewalDDIcon.value
          .isFederalApprovedUp;
      }
      emit("applicationTypeSelected", applicationValue);
    };
    return {
      renewalDDIcon,
      renewalDDHandler,
      renewalMenuHandler,
    };
  },
};
</script>
