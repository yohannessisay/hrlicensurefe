<template>
  <div
    class="overflow-y-scroll lg:overflow-y-auto shadow-2xl bg-lightBlueB-300 fixed lg:sticky h-screen lg:h-auto z-40 top-0 bg-gray-900 pt-4 max-w-lg lg:w-96"
  >
    <div class="px-8">
      <ul class="py-8 flex flex-wrap h-screen">
        <div>
          <li @click="selectMenu(1)" class="w-1/2 flex justify-start mb-6">
            <transition name="slide-fade-to-left">
              <div
                class="container mr-12 box-shadow-pop rounded-lg bg-lightGrey-100 "
              >
                <div class="flex justify-center items-center w-48 h-20">
                  <div class="p-1 mr-8">
                    <h3 class="text-lightBlueB-500 mt-tiny">
                      <span style="color: #648ea3;">
                        <i
                          class="fas fa-file-signature fa-3x fa-light"
                        ></i> </span
                      >Draft
                    </h3>
                  </div>
                </div>
              </div>
            </transition>
          </li>
        </div>
        <div>
          <li @click="selectMenu(2)" class="w-1/2 flex justify-start mb-6">
            <transition name="slide-fade-to-left">
              <div
                class="container mr-12 box-shadow-pop rounded-lg bg-lightGrey-100 "
              >
                <div class="flex justify-center items-center w-48 h-20">
                  <div class="p-1">
                    <div class="flex content-center justify-center"></div>

                    <h3 class="text-lightBlueB-500 mt-tiny">
                      <span style="color: #648ea3;">
                        <i
                          class="mr-2 fas fa-exchange-alt fa-3x fa-light"
                        ></i> </span
                      >Withdrawn
                    </h3>
                  </div>
                </div>
              </div>
            </transition>
          </li>
        </div>
        <div>
          <li @click="selectMenu(3)" class="w-1/2 flex justify-start mb-6">
            <transition name="slide-fade-to-left">
              <div
                class="container mr-12 box-shadow-pop rounded-lg bg-lightGrey-100 "
              >
                <div class="flex justify-center items-center w-48 h-20">
                  <div class="p-1">
                    <div class="flex content-center justify-center"></div>

                    <h3 class="text-lightBlueB-500 mt-tiny">
                      <span style="color: #648ea3;">
                        <i
                          class="mr-2 far fa-address-book fa-3x fa-light"
                        ></i> </span
                      >Submitted
                    </h3>
                  </div>
                </div>
              </div>
            </transition>
          </li>
        </div>
        <div>
          <li @click="selectMenu(4)" class="w-1/2 flex justify-start mb-6">
            <transition name="slide-fade-to-left">
              <div
                class="container mr-12 box-shadow-pop rounded-lg bg-lightGrey-100 "
              >
                <div class="flex justify-center items-center w-48 h-20">
                  <div class="p-1">
                    <div class="flex content-center justify-center"></div>

                    <h3 class="text-lightBlueB-500 mt-tiny">
                      <span style="color: #648ea3;">
                        <i
                          class="mr-2 far fa-id-card fa-3x fa-light"
                        ></i> </span
                      >In Review
                    </h3>
                  </div>
                </div>
              </div>
            </transition>
          </li>
        </div>
        <div>
          <li @click="selectMenu(5)" class="w-1/2 flex justify-start mb-6">
            <transition name="slide-fade-to-left">
              <div
                class="container mr-12 box-shadow-pop rounded-lg bg-lightGrey-100 "
              >
                <div class="flex justify-center items-center w-48 h-20">
                  <div class="p-1">
                    <div class="flex content-center justify-center"></div>

                    <h3 class="text-lightBlueB-500 mt-tiny">
                      <span style="color: #648ea3;">
                        <i
                          class="mr-2 far fa-thumbs-up fa-3x fa-light"
                        ></i> </span
                      >Approved
                    </h3>
                  </div>
                </div>
              </div>
            </transition>
          </li>
        </div>
        <div>
          <li @click="selectMenu(6)" class="w-1/2 flex justify-start mb-6">
            <transition name="slide-fade-to-left">
              <div
                class="container mr-12 box-shadow-pop rounded-lg bg-lightGrey-100 "
              >
                <div class="flex justify-center items-center w-48 h-20">
                  <div class="p-1">
                    <div class="flex content-center justify-center"></div>

                    <h3 class="text-lightBlueB-500 mt-tiny">
                      <span style="color: #648ea3;">
                        <i
                          class="mr-2 fa fa-money-bill fa-3x fa-light"
                        ></i> </span
                      >Approved Payment
                    </h3>
                  </div>
                </div>
              </div>
            </transition>
          </li>
        </div>
        <div>
          <li @click="selectMenu(7)" class="w-1/2 flex justify-start mb-6">
            <transition name="slide-fade-to-left">
              <div
                class="container mr-12 box-shadow-pop rounded-lg bg-lightGrey-100 "
              >
                <div class="flex justify-center items-center w-48 h-20">
                  <div class="p-1">
                    <div class="flex content-center justify-center"></div>

                    <h3 class="text-lightBlueB-500 mt-tiny">
                      <span style="color: #648ea3;">
                        <i
                          class="mr-2 far fa-thumbs-down fa-3x fa-light"
                        ></i> </span
                      >Declined
                    </h3>
                  </div>
                </div>
              </div>
            </transition>
          </li>
        </div>
        <div>
          <li @click="selectMenu(8)" class="w-1/2 flex justify-start mb-6">
            <transition name="slide-fade-to-left">
              <div
                class="container mr-12 box-shadow-pop rounded-lg bg-lightGrey-100 "
              >
                <div class="flex justify-center items-center w-48 h-20">
                  <div class="p-1">
                    <div class="flex content-center justify-center"></div>

                    <h3 class="text-lightBlueB-500 mt-tiny">
                      <span style="color: #648ea3;">
                        <i
                          class="mr-2 fa fa-credit-card-alt fa-3x fa-light"
                        ></i> </span
                      >Declined Payment
                    </h3>
                  </div>
                </div>
              </div>
            </transition>
          </li>
        </div>
        <div>
          <li @click="selectMenu(9)" class="w-1/2 flex justify-start mb-6">
            <transition name="slide-fade-to-left">
              <div
                class="container mr-12 box-shadow-pop rounded-lg bg-lightGrey-100 "
              >
                <div class="flex justify-center items-center w-48 h-20">
                  <div class="p-1">
                    <div class="flex content-center justify-center"></div>

                    <h3 class="text-lightBlueB-500 mt-tiny">
                      <span style="color: #648ea3;">
                        <i
                          class="mr-2 far fa-id-badge fa-3x fa-light"
                        ></i> </span
                      >Under Supervision
                    </h3>
                  </div>
                </div>
              </div>
            </transition>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>
<script>
import Navigation from "@/views/Navigation";

export default {
  props: ["display"],
  components: {
    Navigation,
  },
  data() {
    return {};
  },
  methods: {
    selectMenu(menu) {
      this.$emit("changeDisplay", menu);
    },
  },
};
</script>
