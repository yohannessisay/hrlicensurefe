<template>
  <ul
    class="
      nav nav-tabs
      flex flex-col
      md:flex-row
      flex-wrap
      list-none
      border-b-0
      pl-0
      ml-24
      mr-24
    "
    id="tabs-tabFill"
    role="tablist"
  >
    <li class="nav-item flex-auto text-center" role="presentation">
      <a
        href="#tabs-homeFill"
        class="
          nav-link
          w-full
          block
          font-medium
          text-xs
          leading-tight
          uppercase
          border-x-0 border-t-0 border-b-2 border-transparent
          px-6
          py-3
          my-2
          focus:border-transparent
          active
        "
        id="tabs-home-tabFill"
        data-bs-toggle="pill"
        data-bs-target="#tabs-toyou"
        role="tab"
        aria-controls="tabs-toyou"
        aria-selected="true"
        >Declined By You</a
      >
    </li>

    <li class="nav-item flex-auto text-center" role="presentation">
      <a
        href="#tabs-messagesFill"
        class="
          nav-link
          w-full
          block
          font-medium
          text-xs
          leading-tight
          uppercase
          border-x-0 border-t-0 border-b-2 border-transparent
          px-6
          py-3
          my-2
          hover:border-r
        "
        id="tabs-messages-tabFill"
        data-bs-toggle="pill"
        data-bs-target="#tabs-to_others"
        role="tab"
        aria-controls="tabs-to_others"
        aria-selected="false"
        >Declined By Others</a
      >
    </li>
  </ul>

  <div class="tab-content ml-12" id="tabs-tabContentFill">
    <div
      class="tab-pane fade show active"
      id="tabs-toyou"
      role="tabpanel"
      aria-labelledby="tabs-home-tabFill"
    >
      <slot name="toyou"></slot>
    </div>
    <div
      class="tab-pane fade"
      id="tabs-to_others"
      role="tabpanel"
      aria-labelledby="tabs-profile-tabFill"
    >
      <slot name="to_others"></slot>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  setup() {
    return {};
  },
};
</script>
<style scoped>
.nav-tabs .nav-link.active {
  color: white;
  border-color: #4185d0;
  margin-top: -1px;
  background-color: #0d3552;
  border-radius: 5px;
}

.nav-tabs :hover.nav-link {
  color: #4185d0;
}
</style>