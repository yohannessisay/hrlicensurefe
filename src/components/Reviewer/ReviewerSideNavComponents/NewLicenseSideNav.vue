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
                <!-- <span style="color: #648ea3;"> -->
                <p class=" text-base" style="color: white; ">
                  <i class="far fa-thumbs-up fa-x fa-light"></i>
                  Unassigned
                </p>
              </li>

              <!-- assigned to you and assigned to others started here -->
              <div>
                <li
                  @click="newlicenseDDHandler('NewLicenseAssigned')"
                  class=" justify-start "
                >
                  <transition name="slide-fade-to-left">
                    <div class="">
                      <div class=" justify-center items-center ">
                        <div class="p-1 ">
                          <h3 class="text-lightBlueB-500 mt-tiny">
                            <span style="color: white;">
                              <i
                                v-if="newLicenseDDIcon.isAssignedUp"
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
                        v-if="dropdownValue.newLicenseAssigned"
                        class="dropdown-menu relative  shadow-md mb-12 ml-4"
                        style="color: #648ea3; width: 200px;"
                      >
                        <ul class="block w-full  shadow float-right ">
                          <li
                            @click="newLicenseMenuHandler('newLicenseAssigned')"
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
                              newLicenseMenuHandler(
                                'newLicenseAssignedToOthers'
                              )
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
              </div>
              <!-- assigned to you and assigned to others ends here -->

              <!-- unfinished started here -->
              <div>
                <li
                  @click="newlicenseDDHandler('NewLicenseUnfinished')"
                  class=" justify-start "
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
                              newLicenseMenuHandler(
                                'newLicenseOthersUnfinished'
                              )
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
              </div>
              <!-- unfinished ends here -->

              <!-- unconfirmed start here -->
              <div>
                <li
                  @click="newlicenseDDHandler('NewLicenseUnconfirmed')"
                  class=" justify-start "
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
                            <span class="text-base" style="color: white; "
                              >{{expertLevelId == 4 ?  'Unconfirmed' : 'Approved' }}</span
                            >
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
                            <!-- <span style="color: #648ea3;"> -->
                            <p class=" text-sm" style="color: white; ">
                              <i
                                class="mr-2 far fa-address-book fa-x fa-light"
                              ></i>
                              {{expertLevelId == 4 ?  'My Unconfirmed' : 'My Approved' }}
                            </p>
                          </li>
                          <li
                            @click="
                              newLicenseMenuHandler('allNewLicenseUnconfirmed')
                            "
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
              </div>
              <!-- unconfirmed ends here -->

              <!-- on review start here -->
              <div v-if="expertLevelId == 4">
                <li
                  @click="newlicenseDDHandler('NewLicenseOnReview')"
                  class=" justify-start "
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
                            <!-- <span style="color: #648ea3;"> -->
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
              </div>
              <!-- on review ends here -->

              <!-- re evaluate starts here -->
              <div v-if="expertLevelId == 4">
                <li
                  @click="newlicenseDDHandler('NewLicenseReEvaluate')"
                  class=" justify-start "
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
                              newLicenseMenuHandler(
                                'othersNewLicenseReEvaluate'
                              )
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
              </div>
              <!-- re evaluate ends here -->

              <!-- decline starts here -->
              <div>
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
                            <!-- <span style="color: #648ea3;"> -->
                            <p class=" text-sm" style="color: white; ">
                              <i
                                class="mr-2 far fa-address-book fa-x fa-light"
                              ></i>
                              My Declined
                            </p>
                          </li>
                          <li
                            @click="
                              newLicenseMenuHandler('allNewLicenseDeclined')
                            "
                          >
                            <!-- <span style="color: #648ea3;"> -->
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
                            <!-- <span style="color: #648ea3;"> -->
                            <p class=" text-sm" style="color: white; ">
                              <i
                                class="mr-2 far fa-address-book fa-x fa-light"
                              ></i>
                              My Declined Payment
                            </p>
                          </li>
                          <li
                            @click="
                              newLicenseMenuHandler(
                                'othersNewLicenseDeclinedPayment'
                              )
                            "
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
                  @click="newlicenseDDHandler('NewLicenseUnderSuperVision')"
                  class=" justify-start "
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
                              newLicenseMenuHandler(
                                'newLicenseOthersUnderSuperVision'
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
                            <!-- <span style="color: #648ea3;"> -->
                            <p class=" text-sm" style="color: white; ">
                              <i
                                class="mr-2 far fa-address-book fa-x fa-light"
                              ></i>
                              My Confirmed
                            </p>
                          </li>
                          <li
                            @click="
                              newLicenseMenuHandler('othersNewLicenseConfirmed')
                            "
                          >
                            <!-- <span style="color: #648ea3;"> -->
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
                            <!-- <span style="color: #648ea3;"> -->
                            <p class=" text-sm" style="color: white; ">
                              <i
                                class="mr-2 far fa-address-book fa-x fa-light"
                              ></i>
                              My Approved Payment
                            </p>
                          </li>
                          <li
                            @click="
                              newLicenseMenuHandler(
                                'othersNewLicenseApprovedPayment'
                              )
                            "
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
import { ref } from "vue";
export default {
  name: "NewLicenseSideNav",
  props: ["dropdownValue", "expertLevelId"],
  setup(props, { emit }) {
    let newLicenseDDIcon = ref({
      isNewLicenseUp: false,
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
    const newLicenseMenuHandler = (menu) => {
      emit("selectNewLicenseMenu", menu);
    };

    const newlicenseDDHandler = (applicationValue) => {
      if (applicationValue == "NewLicense") {
        newLicenseDDIcon.value.isNewLicenseUp = !newLicenseDDIcon.value
          .isNewLicenseUp;
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
      } else if (applicationValue == "NewLicenseDeclined") {
        newLicenseDDIcon.value.isDeclinedUp = !newLicenseDDIcon.value
          .isDeclinedUp;
      } else if (applicationValue == "NewLicenseUnderSuperVision") {
        newLicenseDDIcon.value.isUnderSuperVisionUp = !newLicenseDDIcon.value
          .isUnderSuperVisionUp;
      } else if (applicationValue == "NewLicenseConfirmed") {
        newLicenseDDIcon.value.isConfirmedUp = !newLicenseDDIcon.value
          .isConfirmedUp;
      } else if (applicationValue == "NewLicenseFederalApproved") {
        newLicenseDDIcon.value.isFederalApprovedUp = !newLicenseDDIcon.value
          .isFederalApprovedUp;
      }
      emit("applicationTypeSelected", applicationValue);
    };
    return {
      newLicenseDDIcon,
      newlicenseDDHandler,
      newLicenseMenuHandler,
    };
  },
};
</script>
