<template>
  <div class="bg-lightBlueB-200 h-screen">
    <div class="flex pl-24 pt-8 ">
      <h2 class="text-lightBlueB-400">Select License Type</h2>
    </div>
    <div class="flex justify-center mt-8 rounded ">
      <div class="container mr-12 box-shadow-pop rounded-lg bg-lightGrey-100 ">
        <div class="flex justify-center w-64 h-40">
          <div class="p-1">
            <div class="mt-4 justify-center">
              <router-link to="/newlicense">
                <RenderIllustration illustration="Certificate" />
              </router-link>
            </div>
            <h4>New License</h4>
          </div>
        </div>
      </div>

      <div class="container mr-12 box-shadow-pop rounded-lg bg-lightGrey-100 ">
        <div class="flex justify-center content-center w-64 h-40">
          <div class="p-1">
            <div class="mt-4 object-center mx-22">
              <router-link to="/renewal">
                <RenderIllustration illustration="Renewal" />
              </router-link>
            </div>
            <h4>License Renewal</h4>
          </div>
        </div>
      </div>

      <div class="container mr-12 box-shadow-pop rounded-lg bg-lightGrey-100 ">
        <div class="flex justify-center w-64 h-40">
          <div class="p-1">
            <div class="mt-4">
              <router-link to="/verification">
                <RenderIllustration illustration="Verification" />
              </router-link>
            </div>
            <h4>Verification</h4>
          </div>
        </div>
      </div>

      <div class="container mr-12 box-shadow-pop rounded-lg bg-lightGrey-100 ">
        <div class="flex justify-center w-64 h-40">
          <div class="p-1">
            <div class="mt-4">
              <router-link to="/goodstanding">
                <RenderIllustration illustration="GoodStanding" />
              </router-link>
            </div>
            <h4>GoodStanding</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RenderIllustration from "@/sharedComponents/RenderIllustration";

export default {
  components: { RenderIllustration },
};
</script>
<style></style>
