<template>
  <div>
    <Navigation />
    <div class="bg-lightBlueB-200 h-screen">
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
            <div class="flex justify-center items-center w-64 h-40">
              <div class="p-1">
                <div class="flex content-center justify-center">
                  <router-link to="/newlicense">
                    <RenderIllustration illustration="SimpleCertificate" />
                  </router-link>
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
            <div class="flex justify-center items-center w-64 h-40">
              <div class="p-1">
                <div class="my-auto flex justify-center">
                  <router-link to="/renewal">
                    <RenderIllustration illustration="Renewal" />
                  </router-link>
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
            <div class="flex justify-center items-center w-64 h-40">
              <div class="p-1">
                <div class="flex">
                  <router-link to="/verification">
                    <RenderIllustration illustration="Verification" />
                  </router-link>
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
            <div class="flex justify-center items-center w-64 h-40">
              <div class="p-1">
                <div class="my-auto flex justify-center">
                  <router-link to="/goodstanding">
                    <RenderIllustration illustration="GoodStanding" />
                  </router-link>
                </div>
                <h4 class="text-lightBlueB-500 mt-tiny">Good Standing</h4>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "@/views/Navigation";
import RenderIllustration from "@/sharedComponents/RenderIllustration";
import Modal from "@/sharedComponents/Modal";
import TermsOfAgreement from "@/components/NewLicense/TermsOfAgreement";
import { ref } from "vue";

export default {
  components: { RenderIllustration, Navigation, Modal, TermsOfAgreement },
  setup() {
    const showTermsOfAgreement = ref(false);
    const openModal = () => {
      showTermsOfAgreement.value = true;
    };
    return {
      showTermsOfAgreement,
      openModal,
    };
  },
};
</script>
<style></style>
