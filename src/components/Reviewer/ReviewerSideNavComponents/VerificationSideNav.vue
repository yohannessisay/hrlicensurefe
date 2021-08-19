<template>
  <div class="mb-2">
    <li class=" justify-start static">
      <transition name="slide-fade-to-left">
        <div class="">
          <div
            @click="verificationDDHandler('Verification')"
            class=" justify-center items-center "
          >
            <div class="p-1 ">
              <h3 class="text-lightBlueB-500 mt-tiny">
                <span style="color: white;">
                  <i class="mr-2 far fa-thumbs-up fa-x fa-light"></i>
                  <i
                    v-if="verificationDDIcon.isVerificationUp"
                    class="fas fa-chevron-circle-up float-right mt-2"
                  ></i>
                  <i
                    v-else
                    class="fas fa-chevron-circle-down float-right mt-2"
                  ></i>
                </span>
                <span class="text-lg" style="color: white; ">Verification</span>
                <!-- </span> -->
              </h3>
            </div>
          </div>

          <div
            v-if="dropdownValue.verification"
            class="dropdown-menu   mb-12 ml-4 "
            style="color: #648ea3; width: 200px;"
          >
            <ul class="block w-full shadow float-right" style="color: #648ea3;">
              <li
                @click="verificationMenuHandler('verificationUnassigned')"
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
                  @click="verificationDDHandler('VerificationAssigned')"
                  class=" justify-start "
                  v-if="adminRole == 'SA'"
                >
                  <transition name="slide-fade-to-left">
                    <div class="">
                      <div class=" justify-center items-center ">
                        <div class="p-1 ">
                          <h3 class="text-lightBlueB-500 mt-tiny">
                            <span style="color: white;">
                              <i
                                v-if="verificationDDIcon.isAssignedUp"
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
                        v-if="dropdownValue.verificationAssigned"
                        class="dropdown-menu relative  shadow-md mb-12 ml-4"
                        style="color: #648ea3; width: 200px;"
                      >
                        <ul class="block w-full  shadow float-right ">
                          <li
                            @click="
                              verificationMenuHandler('verificationAssigned')
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
                              verificationMenuHandler(
                                'verificationAssignedToOthers'
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
                <li
                  @click="verificationMenuHandler('verificationAssigned')"
                  class="mb-2"
                  v-else
                >
                  <!-- <span style="color: #648ea3;"> -->
                  <p class=" text-sm" style="color: white; ">
                    <i class="mr-2 far fa-address-book fa-x fa-light"></i>
                    Assigned To You
                  </p>
                </li>
              </div>
              <!-- assigned to you and assigned to others ends here -->

              <!-- unfinished started here -->
              <div>
                <li
                  @click="verificationDDHandler('VerificationUnfinished')"
                  class=" justify-start "
                  v-if="adminRole == 'SA'"
                >
                  <transition name="slide-fade-to-left">
                    <div class="">
                      <div class=" justify-center items-center ">
                        <div class="p-1 ">
                          <h3 class="text-lightBlueB-500 mt-tiny">
                            <span style="color: white;">
                              <i
                                v-if="verificationDDIcon.isUnfinishedUp"
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
                        v-if="dropdownValue.verificationUnfinished"
                        class="dropdown-menu relative  shadow-md mb-12 ml-4"
                        style="color: #648ea3; width: 200px;"
                      >
                        <ul class="block w-full  shadow float-right ">
                          <li
                            @click="
                              verificationMenuHandler('verificationUnfinished')
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
                              verificationMenuHandler(
                                'verificationOthersUnfinished'
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
                <li
                  @click="verificationMenuHandler('verificationUnfinished')"
                  class="mb-2"
                  v-else
                >
                  <!-- <span style="color: #648ea3;"> -->
                  <p class=" text-sm" style="color: white; ">
                    <i class="mr-2 far fa-address-book fa-x fa-light"></i>
                    Unfinished
                  </p>
                </li>
              </div>
              <!-- unfinished ends here -->

              <!-- Approved start here -->
              <div>
                <li
                  @click="verificationDDHandler('VerificationApproved')"
                  class=" justify-start "
                  v-if="adminRole == 'SA'"
                >
                  <transition name="slide-fade-to-left">
                    <div class="">
                      <div class=" justify-center items-center ">
                        <div class="p-1 ">
                          <h3 class="text-lightBlueB-500 mt-tiny">
                            <span style="color: white;">
                              <i
                                v-if="verificationDDIcon.isApprovedUp"
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
                        v-if="dropdownValue.verificationApproved"
                        class="dropdown-menu relative  shadow-md mb-12 ml-4"
                        style="color: #648ea3; width: 200px;"
                      >
                        <ul class="block w-full  shadow float-right ">
                          <li
                            @click="
                              verificationMenuHandler('verificationUnconfirmed')
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
                              verificationMenuHandler(
                                'allVerificationUnconfirmed'
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
                <li
                  @click="verificationMenuHandler('verificationUnconfirmed')"
                  class="mb-2"
                  v-else
                >
                  <!-- <span style="color: #648ea3;"> -->
                  <p class=" text-sm" style="color: white; ">
                    <i class="mr-2 far fa-address-book fa-x fa-light"></i>
                    Approved
                  </p>
                </li>
              </div>
              <!-- Approved ends here -->

              <!-- Declined start here -->
              <div>
                <li
                  @click="verificationDDHandler('VerificationDeclined')"
                  class=" justify-start "
                  v-if="adminRole == 'SA'"
                >
                  <transition name="slide-fade-to-left">
                    <div class="">
                      <div class=" justify-center items-center ">
                        <div class="p-1 ">
                          <h3 class="text-lightBlueB-500 mt-tiny">
                            <span style="color: white;">
                              <i
                                v-if="verificationDDIcon.isDeclinedUp"
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
                        v-if="dropdownValue.verificationDeclined"
                        class="dropdown-menu relative  shadow-md mb-12 ml-4"
                        style="color: #648ea3; width: 200px;"
                      >
                        <ul class="block w-full  shadow float-right ">
                          <li
                            @click="
                              verificationMenuHandler('verificationDeclined')
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
                              verificationMenuHandler('allVerificationDeclined')
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
  name: "VerificationSideNav",
  props: ["dropdownValue", "adminRole"],
  setup(props, { emit }) {
    let verificationDDIcon = ref({
      isVerificationUp: false,
      isAssignedUp: false,
      isUnfinishedUp: false,
      isApprovedUp: false,
      isDeclinedUp: false,
    });
    const verificationMenuHandler = (menu) => {
      emit("selectVerificationMenu", menu);
    };

    const verificationDDHandler = (applicationValue) => {
      if (applicationValue == "Verification") {
        verificationDDIcon.value.isVerificationUp = !verificationDDIcon.value
          .isVerificationUp;
      } else if (applicationValue == "VerificationAssigned") {
        verificationDDIcon.value.isAssignedUp = !verificationDDIcon.value
          .isAssignedUp;
      } else if (applicationValue == "VerificationUnfinished") {
        verificationDDIcon.value.isUnfinishedUp = !verificationDDIcon.value
          .isUnfinishedUp;
      } else if (applicationValue == "VerificationApproved") {
        verificationDDIcon.value.isApprovedUp = !verificationDDIcon.value
          .isApprovedUp;
      } else if (applicationValue == "VerificationDeclined") {
        verificationDDIcon.value.isDeclinedUp = !verificationDDIcon.value
          .isDeclinedUp;
      }
      emit("applicationTypeSelected", applicationValue);
    };
    return {
      verificationDDIcon,
      verificationDDHandler,
      verificationMenuHandler,
    };
  },
};
</script>
