<template>
  <div class="flex mt-4">
    <div class="mt-5 ml-20">
      <h4>Your Previous Requests</h4>
    </div>
    <div class="lg:flex lg:items-stretch lg:justify-end ml-auto mr-24">
      <router-link to="/newlicense">
        <button>New License Request</button>
      </router-link>
    </div>
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
          <h4>Approved</h4>
        </div>
      </div>
    </div>

    <div
      style="box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);"
      variant="borderRadius"
      class="container mr-12"
    >
      <div class="flex justify-center w-64 h-40">
        <div class="p-1">
          <div class="mt-4">
            <router-link to="/renewal">
              <RenderIllustration illustration="Renewal" />
            </router-link>
          </div>
          <h4>Submitted</h4>
        </div>
      </div>
    </div>

    <div
      style="box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);"
      variant="borderRadius"
      class="container mr-12"
    >
      <div class="flex justify-center w-64 h-40">
        <div class="p-1">
          <div class="mt-4">
            <router-link to="/verification">
              <RenderIllustration illustration="Verification" />
            </router-link>
          </div>
          <h4>Draft</h4>
        </div>
      </div>
    </div>

    <div
      style="box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);"
      variant="borderRadius"
      class="container mr-12"
    >
      <div class="flex justify-center w-64 h-40">
        <div class="p-1">
          <div class="mt-4">
            <router-link to="/goodstanding">
              <RenderIllustration illustration="GoodStanding" />
            </router-link>
          </div>
          <h4>On Review</h4>
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
