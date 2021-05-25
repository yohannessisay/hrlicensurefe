<template>
  <div>
    <Navigation />
    <div class="bg-lightBlueB-200 h-max pb-24">
      <div class="flex pl-24 pt-8">
        <div class="mt-5">
          <h2 class="text-lightBlueB-400">New Requests</h2>
        </div>
      </div>
      <div class="flex justify-center mt-8 rounded ">
        <transition name="slide-fade-to-left">
          <div
            class="container mr-12 box-shadow-pop rounded-lg bg-lightGrey-100 "
          >
            <div
              @click="openModalNL()"
              class="flex justify-center items-center w-64 h-40"
            >
              <div class="p-1">
                <div class="flex content-center justify-center">
                  <RenderIllustration illustration="SimpleCertificate" />
                </div>
                <h4 class="text-lightBlueB-500 mt-tiny">New License</h4>
              </div>
            </div>
          </div>
        </transition>
        <transition name="slide-fade-to-left">
          <div
            class="container mr-12 box-shadow-pop rounded-lg bg-lightGrey-100 "
          >
            <div
              @click="openModalR()"
              class="flex justify-center items-center w-64 h-40"
            >
              <div class="p-1">
                <div class="my-auto flex justify-center">
                  <RenderIllustration illustration="Renewal" />
                </div>
                <h4 class="text-lightBlueB-500 mt-tiny">Renewal</h4>
              </div>
            </div>
          </div>
        </transition>
        <transition name="slide-fade-to-left">
          <div
            class="container mr-12 box-shadow-pop rounded-lg bg-lightGrey-100 "
          >
            <div
              @click="openModalV()"
              class=" flex justify-center items-center w-64 h-40"
            >
              <div class="p-1">
                <div class="my-auto flex justify-center">
                  <RenderIllustration illustration="Verification" />
                </div>
                <h4
                  class="text-lightBlueB-500 justify-center items-center ml-2 mt-tiny"
                >
                  Verification
                </h4>
              </div>
            </div>
          </div>
        </transition>
        <transition name="slide-fade-to-left">
          <div
            class="container mr-12 box-shadow-pop rounded-lg bg-lightGrey-100 "
          >
            <div
              @click="openModalGS()"
              class="flex justify-center items-center w-64 h-40"
            >
              <div class="p-1">
                <div class="my-auto flex justify-center">
                  <RenderIllustration illustration="GoodStanding" />
                </div>
                <h4 class="text-lightBlueB-500 mt-tiny">Good Standing</h4>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <div class="flex pl-24 pt-8">
        <div class="mt-5">
          <h2 class="text-lightBlueB-400">Your Previous Requests</h2>
        </div>
        <div
          class="lg:flex lg:items-stretch lg:justify-end ml-auto mr-24"
        ></div>
      </div>

      <div class="flex justify-center mt-8 rounded ">
        <transition name="slide-fade-to-left">
          <div
            class="container mr-12 box-shadow-pop rounded-lg bg-lightGrey-100 "
          >
            <div class="flex justify-center items-center w-64 h-40">
              <div class="p-1">
                <div class="flex content-center justify-center">
                  <router-link to="/approved">
                    <span style="color: #648ea3;">
                      <i class="far fa-thumbs-up fa-4x fa-light"></i>
                    </span>
                  </router-link>
                </div>
                <h4 class="text-lightBlueB-500 mt-tiny">Approved</h4>
              </div>
            </div>
          </div>
        </transition>
        <transition name="slide-fade-to-left">
          <div
            class="container mr-12 box-shadow-pop rounded-lg bg-lightGrey-100 "
          >
            <div class="flex justify-center items-center w-64 h-40">
              <div class="p-1">
                <div class="my-auto flex justify-center">
                  <router-link to="/submitted">
                    <RenderIllustration illustration="Certificate" />
                  </router-link>
                </div>
                <h4 class="text-lightBlueB-500 mt-tiny">Submitted</h4>
              </div>
            </div>
          </div>
        </transition>
        <transition name="slide-fade-to-left">
          <div
            class="container mr-12 box-shadow-pop rounded-lg bg-lightGrey-100 "
          >
            <div class="flex justify-center items-center w-64 h-40">
              <div class="p-1">
                <div class="flex">
                  <router-link to="/draft">
                    <span style="color: #648ea3;">
                      <i class="fas fa-file-signature fa-4x"></i>
                    </span>
                  </router-link>
                </div>
                <h4
                  class="text-lightBlueB-500 justify-center items-center ml-2 mt-tiny"
                >
                  Draft
                </h4>
              </div>
            </div>
          </div>
        </transition>
        <transition name="slide-fade-to-left">
          <div
            class="container mr-12 box-shadow-pop rounded-lg bg-lightGrey-100 "
          >
            <div class="flex justify-center items-center w-64 h-40">
              <div class="p-1">
                <div class="my-auto flex justify-center">
                  <router-link to="/inReview">
                    <span style="color: #648ea3;">
                      <i class="far fa-id-card fa-4x"></i>
                    </span>
                  </router-link>
                </div>
                <h4 class="text-lightBlueB-500 mt-tiny">In Review</h4>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <div class="flex justify-left mt-8 rounded ml-large">
        <transition name="slide-fade-to-left">
          <div
            class="container mr-12 box-shadow-pop rounded-lg bg-lightGrey-100 "
          >
            <div class="flex justify-center items-center w-64 h-40">
              <div class="p-1">
                <div class="flex content-center justify-center">
                  <router-link to="/undersupervision">
                    <span style="color: #648ea3;">
                      <i class="far fa-id-badge fa-4x"></i>
                    </span>
                  </router-link>
                </div>
                <h4 class="text-lightBlueB-500 mt-tiny">Under Supervision</h4>
              </div>
            </div>
          </div>
        </transition>
        <transition name="slide-fade-to-left">
          <div
            class="container mr-12 box-shadow-pop rounded-lg bg-lightGrey-100 "
          >
            <div class="flex justify-center items-center w-64 h-40">
              <div class="p-1">
                <div class="my-auto flex justify-center">
                  <router-link to="/withdrawn">
                    <span style="color: #648ea3;">
                      <i class="fas fa-exchange-alt fa-4x"></i>
                    </span>
                  </router-link>
                </div>
                <h4 class="text-lightBlueB-500 mt-tiny">Withdrawn</h4>
              </div>
            </div>
          </div>
        </transition>
        <transition name="slide-fade-to-left">
          <div
            class="container mr-12 box-shadow-pop rounded-lg bg-lightGrey-100 "
          >
            <div class="flex justify-center items-center w-64 h-40">
              <div class="p-1">
                <div class="my-auto flex justify-center">
                  <router-link to="/declined">
                    <span style="color: #648ea3;">
                      <i class="far fa-thumbs-down fa-4x"></i>
                    </span>
                  </router-link>
                </div>
                <h4 class="text-lightBlueB-500 mt-tiny">
                  Declined
                </h4>
              </div>
            </div>
          </div>
        </transition>
        <transition name="slide-fade-to-left">
          <div
            class="container mr-12 box-shadow-pop rounded-lg bg-lightGrey-100 "
          >
            <div class="flex justify-center items-center w-64 h-40">
              <div class="p-1">
                <div class="flex content-center justify-center">
                  <router-link to="/pendingPayment">
                    <span style="color: #648ea3;">
                      <i class="fas fa-comments-dollar fa-4x"></i>
                    </span>
                  </router-link>
                </div>
                <h4 class="text-lightBlueB-500 mt-tiny">Pending Payment</h4>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <div class="flex justify-left mt-8 rounded ml-large">
        <transition name="slide-fade-to-left">
          <div
            class="container mr-12 box-shadow-pop rounded-lg bg-lightGrey-100 "
          >
            <div class="flex justify-center items-center w-64 h-40">
              <div class="p-1">
                <div class="flex content-center justify-center">
                  <router-link to="/approvedPayment">
                    <span style="color: #648ea3;">
                      <i class="far fa-money-bill-alt fa-4x"></i>
                    </span>
                  </router-link>
                </div>
                <h4 class="text-lightBlueB-500 mt-tiny">Approved Payment</h4>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <Modal v-if="showTermsOfAgreementNL">
      <TermsOfAgreementNL
        @showTermsOfAgreementNL="showTermsOfAgreementNL = false"
      />
    </Modal>
    <Modal v-if="showTermsOfAgreementR">
      <TermsOfAgreementR
        @showTermsOfAgreementR="showTermsOfAgreementR = false"
      />
    </Modal>
    <Modal v-if="showTermsOfAgreementV">
      <TermsOfAgreementV
        @showTermsOfAgreementV="showTermsOfAgreementV = false"
      />
    </Modal>
    <Modal v-if="showTermsOfAgreementGS">
      <TermsOfAgreementGS
        @showTermsOfAgreementGS="showTermsOfAgreementGS = false"
      />
    </Modal>
  </div>
</template>

<script>
import Navigation from "@/views/Navigation";
import RenderIllustration from "@/sharedComponents/RenderIllustration";
import Modal from "@/sharedComponents/Modal";
import TermsOfAgreementNL from "@/components/NewLicense/TermsOfAgreement";
import TermsOfAgreementR from "@/components/Renewal/TermsOfAgreement";
import TermsOfAgreementV from "@/components/Verification/TermsOfAgreement";
import TermsOfAgreementGS from "@/components/GoodStanding/TermsOfAgreement";

import { ref } from "vue";

export default {
  components: {
    RenderIllustration,
    Navigation,
    Modal,
    TermsOfAgreementNL,
    TermsOfAgreementR,
    TermsOfAgreementV,
    TermsOfAgreementGS,
  },
  setup() {
    const showTermsOfAgreementNL = ref(false);
    const showTermsOfAgreementR = ref(false);
    const showTermsOfAgreementV = ref(false);
    const showTermsOfAgreementGS = ref(false);
    const openModalNL = () => {
      showTermsOfAgreementNL.value = true;
    };
    const openModalR = () => {
      showTermsOfAgreementR.value = true;
    };
    const openModalV = () => {
      showTermsOfAgreementV.value = true;
    };
    const openModalGS = () => {
      showTermsOfAgreementGS.value = true;
    };
    return {
      showTermsOfAgreementNL,
      showTermsOfAgreementR,
      showTermsOfAgreementV,
      showTermsOfAgreementGS,
      openModalNL,
      openModalR,
      openModalV,
      openModalGS,
    };
  },
};
</script>
<style>
i {
  color: lightBlueB-400;
}
</style>
