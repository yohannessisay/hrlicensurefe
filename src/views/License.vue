<template>
  <div>
    <Navigation />
    <div class="bg-lightBlueB-200 h-screen">
      <div class="flex pl-24 pt-8 ">
        <h2 class="text-lightBlueB-400">Select License Type</h2>
      </div>
      <div class="flex justify-center mt-8 rounded ">
        <div class="container mr-12 box-shadow-pop rounded-lg bg-lightGrey-100 ">
          <div class="flex justify-center items-center w-64 h-40">
            <div class="p-1">
              <div class="flex content-center justify-center">
                <router-link to="/newlicense">
                  <RenderIllustration illustration="Certificate" />
                </router-link>
              </div>
              <h4 class="text-lightBlueB-500">New License</h4>
            </div>
          </div>
        </div>

        <div class="container mr-12 box-shadow-pop rounded-lg bg-lightGrey-100 ">
          <div class="flex justify-center items-center w-64 h-40">
            <div class="p-1">
              <div class="my-auto flex justify-center">
                <router-link to="/renewal">
                  <RenderIllustration illustration="Renewal" />
                </router-link>
              </div>
              <h4 class="text-lightBlueB-500">License Renewal</h4>
            </div>
          </div>
        </div>

        <div class="container mr-12 box-shadow-pop rounded-lg bg-lightGrey-100 ">
          <div class="flex justify-center items-center w-64 h-40">
            <div class="p-1">
              <div class="my-auto flex justify-center">
                <router-link to="/verification">
                  <RenderIllustration illustration="Verification" />
                </router-link>
              </div>
              <h4 class="text-lightBlueB-500">Verification</h4>
            </div>
          </div>
        </div>

        <div class="container mr-12 box-shadow-pop rounded-lg bg-lightGrey-100 ">
          <div class="flex justify-center items-center w-64 h-40">
            <div class="p-1">
              <div class="my-auto flex justify-center">
                <router-link to="/goodstanding">
                  <RenderIllustration illustration="GoodStanding" />
                </router-link>
              </div>
              <h4 class="text-lightBlueB-500">GoodStanding</h4>
            </div>
          </div>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
import Navigation from "@/views/Navigation";
import RenderIllustration from "@/sharedComponents/RenderIllustration";

export default {
  components: { RenderIllustration, Navigation }
};
</script>
<style></style>
