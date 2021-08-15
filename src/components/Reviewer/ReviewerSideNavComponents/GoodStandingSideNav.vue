<template>
  <div class="mb-2">
    <li class=" justify-start static">
      <transition name="slide-fade-to-left">
        <div class="">
          <div
            @click="goodStandingDDHandler('GoodStanding')"
            class=" justify-center items-center "
          >
            <div class="p-1 ">
              <h3 class="text-lightBlueB-500 mt-tiny">
                <span style="color: white;">
                  <i class="mr-2 far fa-thumbs-up fa-x fa-light"></i>
                  <i
                    v-if="goodStandingDDIcon.isGoodStandingUp"
                    class="fas fa-chevron-circle-up float-right mt-2"
                  ></i>
                  <i
                    v-else
                    class="fas fa-chevron-circle-down float-right mt-2"
                  ></i>
                </span>
                <span class="text-lg" style="color: white; "
                  >Good Standing</span
                >
              </h3>
            </div>
          </div>

          <div
            v-if="dropdownValue.goodStanding"
            class="dropdown-menu   mb-12 ml-4 "
            style="color: #648ea3; width: 200px;"
          >
            <ul class="block w-full shadow float-right" style="color: #648ea3;">
              <li
                @click="goodStandingMenuHandler('goodStandingUnassigned')"
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
                  @click="goodStandingDDHandler('GoodStandingAssigned')"
                  class=" justify-start "
                >
                  <transition name="slide-fade-to-left">
                    <div class="">
                      <div class=" justify-center items-center ">
                        <div class="p-1 ">
                          <h3 class="text-lightBlueB-500 mt-tiny">
                            <span style="color: white;">
                              <i
                                v-if="goodStandingDDIcon.isAssignedUp"
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
                        v-if="dropdownValue.goodStandingAssigned"
                        class="dropdown-menu relative  shadow-md mb-12 ml-4"
                        style="color: #648ea3; width: 200px;"
                      >
                        <ul class="block w-full  shadow float-right ">
                          <li
                            @click="
                              goodStandingMenuHandler('goodStandingAssigned')
                            "
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
                              goodStandingMenuHandler(
                                'goodStandingAssignedToOthers'
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
                  @click="goodStandingDDHandler('GoodStandingUnfinished')"
                  class=" justify-start "
                >
                  <transition name="slide-fade-to-left">
                    <div class="">
                      <div class=" justify-center items-center ">
                        <div class="p-1 ">
                          <h3 class="text-lightBlueB-500 mt-tiny">
                            <span style="color: white;">
                              <i
                                v-if="goodStandingDDIcon.isUnfinishedUp"
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
                        v-if="dropdownValue.goodStandingUnfinished"
                        class="dropdown-menu relative  shadow-md mb-12 ml-4"
                        style="color: #648ea3; width: 200px;"
                      >
                        <ul class="block w-full  shadow float-right ">
                          <li
                            @click="
                              goodStandingMenuHandler('goodStandingUnfinished')
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
                              goodStandingMenuHandler(
                                'goodStandingOthersUnfinished'
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

              <!-- Approved start here -->
              <div>
                <li
                  @click="goodStandingDDHandler('GoodStandingApproved')"
                  class=" justify-start "
                >
                  <transition name="slide-fade-to-left">
                    <div class="">
                      <div class=" justify-center items-center ">
                        <div class="p-1 ">
                          <h3 class="text-lightBlueB-500 mt-tiny">
                            <span style="color: white;">
                              <i
                                v-if="goodStandingDDIcon.isApprovedUp"
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
                              >Approved</span
                            >
                          </h3>
                        </div>
                      </div>
                      <div
                        v-if="dropdownValue.goodStandingApproved"
                        class="dropdown-menu relative  shadow-md mb-12 ml-4"
                        style="color: #648ea3; width: 200px;"
                      >
                        <ul class="block w-full  shadow float-right ">
                          <li
                            @click="
                              goodStandingMenuHandler('goodStandingUnconfirmed')
                            "
                            class="mb-2"
                          >
                            <!-- <span style="color: #648ea3;"> -->
                            <p class=" text-sm" style="color: white; ">
                              <i
                                class="mr-2 far fa-address-book fa-x fa-light"
                              ></i>
                              My Approved
                            </p>
                          </li>
                          <li
                            @click="
                              goodStandingMenuHandler(
                                'allGoodStandingUnconfirmed'
                              )
                            "
                          >
                            <!-- <span style="color: #648ea3;"> -->
                            <p class=" text-sm" style="color: white; ">
                              <i class="mr-2 far fa-id-card fa-x"></i>
                              Others Approved
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </transition>
                </li>
              </div>
              <!-- Approved ends here -->

              <!-- Declined start here -->
              <div>
                <li
                  @click="goodStandingDDHandler('GoodStandingDeclined')"
                  class=" justify-start "
                >
                  <transition name="slide-fade-to-left">
                    <div class="">
                      <div class=" justify-center items-center ">
                        <div class="p-1 ">
                          <h3 class="text-lightBlueB-500 mt-tiny">
                            <span style="color: white;">
                              <i
                                v-if="goodStandingDDIcon.isDeclinedUp"
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
                        v-if="dropdownValue.goodStandingDeclined"
                        class="dropdown-menu relative  shadow-md mb-12 ml-4"
                        style="color: #648ea3; width: 200px;"
                      >
                        <ul class="block w-full  shadow float-right ">
                          <li
                            @click="
                              goodStandingMenuHandler('goodStandingDeclined')
                            "
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
                              goodStandingMenuHandler('allGoodStandingDeclined')
                            "
                          >
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
              <!-- Declined ends here -->
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
  name: "GoodStandingSideNav",
  props: ["dropdownValue"],
  setup(props, { emit }) {
    let goodStandingDDIcon = ref({
      isGoodStandingUp: false,
      isAssignedUp: false,
      isUnfinishedUp: false,
      isApprovedUp: false,
      isDeclinedUp: false,
    });
    const goodStandingMenuHandler = (menu) => {
      emit("selectGoodStandingMenu", menu);
    };

    const goodStandingDDHandler = (applicationValue) => {
      if (applicationValue == "GoodStanding") {
        goodStandingDDIcon.value.isGoodStandingUp = !goodStandingDDIcon.value
          .isGoodStandingUp;
      } else if (applicationValue == "GoodStandingAssigned") {
        goodStandingDDIcon.value.isAssignedUp = !goodStandingDDIcon.value
          .isAssignedUp;
      } else if (applicationValue == "GoodStandingUnfinished") {
        goodStandingDDIcon.value.isUnfinishedUp = !goodStandingDDIcon.value
          .isUnfinishedUp;
      } else if (applicationValue == "GoodStandingApproved") {
        goodStandingDDIcon.value.isApprovedUp = !goodStandingDDIcon.value
          .isApprovedUp;
      } else if (applicationValue == "GoodStandingDeclined") {
        goodStandingDDIcon.value.isDeclinedUp = !goodStandingDDIcon.value
          .isDeclinedUp;
      }
      emit("applicationTypeSelected", applicationValue);
    };
    return {
      goodStandingDDIcon,
      goodStandingDDHandler,
      goodStandingMenuHandler,
    };
  },
};
</script>
