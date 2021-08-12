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
                <!-- <span > -->
                <span style="color: white;">
                  <!-- <i
                          class="fas fa-chevron-circle-down float-right mb-2"

                        ></i> -->

                  <i class="mr-2 far fa-thumbs-up fa-x fa-light"></i>
                  <i class="fas fa-chevron-circle-down float-right mt-2"></i>
                </span>
                <span class="text-lg" style="color: white; ">Renewal</span>
                <!-- </span> -->
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
                >
                  <transition name="slide-fade-to-left">
                    <div class="">
                      <div class=" justify-center items-center ">
                        <div class="p-1 ">
                          <h3 class="text-lightBlueB-500 mt-tiny">
                            <span style="color: white;">
                              <i
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
              </div>
              <!-- assigned to you and assigned to others ends here -->

              <!-- unfinished started here -->
              <div>
                <li
                  @click="renewalDDHandler('RenewalUnfinished')"
                  class=" justify-start "
                >
                  <transition name="slide-fade-to-left">
                    <div class="">
                      <div class=" justify-center items-center ">
                        <div class="p-1 ">
                          <h3 class="text-lightBlueB-500 mt-tiny">
                            <span style="color: white;">
                              <i
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
              </div>
              <!-- unfinished ends here -->

              <!-- unconfirmed start here -->
              <div>
                <li
                  @click="renewalDDHandler('RenewalUnconfirmed')"
                  class=" justify-start "
                >
                  <transition name="slide-fade-to-left">
                    <div class="">
                      <div class=" justify-center items-center ">
                        <div class="p-1 ">
                          <h3 class="text-lightBlueB-500 mt-tiny">
                            <span style="color: white;">
                              <i
                                class="fas fa-chevron-circle-down float-right mt-2"
                              ></i>

                              <i
                                class="mr-2 far fa-address-book fa-x fa-light"
                              ></i>
                            </span>
                            <span class="text-base" style="color: white; "
                              >Unconfirmed</span
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
                              My Unconfirmed
                            </p>
                          </li>
                          <li
                            @click="renewalMenuHandler('allRenewalUnconfirmed')"
                          >
                            <!-- <span style="color: #648ea3;"> -->
                            <p class=" text-sm" style="color: white; ">
                              <i class="mr-2 far fa-id-card fa-x"></i>
                              Others Unconfirmed
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
              <div>
                <li
                  @click="renewalDDHandler('RenewalOnReview')"
                  class=" justify-start "
                >
                  <transition name="slide-fade-to-left">
                    <div class="">
                      <div class=" justify-center items-center ">
                        <div class="p-1 ">
                          <h3 class="text-lightBlueB-500 mt-tiny">
                            <span style="color: white;">
                              <i
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
              </div>
              <!-- on review ends here -->

              <!-- re evaluate starts here -->
              <div>
                <li
                  @click="renewalDDHandler('RenewalReEvaluate')"
                  class=" justify-start "
                >
                  <transition name="slide-fade-to-left">
                    <div class="">
                      <div class=" justify-center items-center ">
                        <div class="p-1 ">
                          <h3 class="text-lightBlueB-500 mt-tiny">
                            <span style="color: white;">
                              <i
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
                              My Declined
                            </p>
                          </li>
                          <li @click="renewalMenuHandler('allRenewalDeclined')">
                            <!-- <span style="color: #648ea3;"> -->
                            <p class=" text-sm" style="color: white; ">
                              <i class="mr-2 far fa-id-card fa-x"></i>
                              Others Declined
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
                >
                  <transition name="slide-fade-to-left">
                    <div class="">
                      <div class=" justify-center items-center ">
                        <div class="p-1 ">
                          <h3 class="text-lightBlueB-500 mt-tiny">
                            <span style="color: white;">
                              <i
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
              <div>
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
                              My Confirmed
                            </p>
                          </li>
                          <li
                            @click="
                              renewalMenuHandler('renewalOthersConfirmed')
                            "
                          >
                            <!-- <span style="color: #648ea3;"> -->
                            <p class=" text-sm" style="color: white; ">
                              <i class="mr-2 far fa-id-card fa-x"></i>
                              Others Confirmed
                            </p>
                          </li>
                          <li
                            @click="renewalMenuHandler('renewalApprovedPayment')"
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
                              renewalMenuHandler('othersRenewalApprovedPayment')
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
export default {
  name: "RenewalSideNav",
  props: ["dropdownValue"],
  setup(props, { emit }) {
    const renewalMenuHandler = (menu) => {
      emit("selectRenewalMenu", menu);
    };

    const renewalDDHandler = (applicationValue) => {
      emit("applicationTypeSelected", applicationValue);
    };
    return {
      renewalDDHandler,
      renewalMenuHandler,
    };
  },
};
</script>
