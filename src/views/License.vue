<template>
  <div class="mt-5 ml-6">
    <h3>Select License Type</h3>
  </div>
  <div class="flex justify-center mt-8">
    <div
      style="box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); border-radius: 30px"
      class="container mr-12"
    >
      <div class="flex justify-center w-64 h-40">
        <div class="p-1">
          <div class="mt-4">
            <router-link to="/newlicense">
              <RenderIllustration illustration="GoodStanding" />
            </router-link>
          </div>
          <h4>New License</h4>
        </div>
      </div>
    </div>

    <div
      style="box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); border-radius: 30px"
      class="container mr-12"
    >
      <div class="flex justify-center w-64 h-40">
        <div class="p-1">
          <div class="mt-4">
            <router-link to="/renewal">
              <RenderIllustration illustration="Renewal" />
            </router-link>
          </div>
          <h4>License Renewal</h4>
        </div>
      </div>
    </div>

    <div
      style="box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); border-radius: 30px"
      class="container mr-12"
    >
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

    <div
      style="box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); border-radius: 30px"
      class="container mr-12"
    >
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
</template>

<script>
import RenderIllustration from "@/sharedComponents/RenderIllustration";

export default {
  components: { RenderIllustration },
};
</script>
<style></style>
