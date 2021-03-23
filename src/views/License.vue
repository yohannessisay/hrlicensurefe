<template>
  <Navigation/>
  <div class="mt-8 ml-20">
    <h4>Select License Type</h4>
  </div>
  <div class="flex justify-center mt-8">
    <div
      style="box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);"
      variant="borderRadius"
      class="container mr-12"
    >
      <div class="flex justify-center w-64 h-40">
        <div class="p-1">
          <div class="mt-4">
            <router-link to="/newlicense">
              <RenderIllustration illustration="GoodStanding" />
            </router-link>
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
</template>

<script>
import Navigation from "@/views/Navigation";
import RenderIllustration from "@/sharedComponents/RenderIllustration";

export default {
  components: { RenderIllustration, Navigation }
};
</script>
<style></style>
