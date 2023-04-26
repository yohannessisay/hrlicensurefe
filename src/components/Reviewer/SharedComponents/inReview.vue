<template>
  <div class="tabs-wrapper">
    <input
      type="radio"
      name="tab"
      id="tab1"
      checked="checked"
      class="tab-head"
    />
    <label for="tab1" class="tabs_wrapper_label">Assigned To You</label>
    <input
      type="radio"
      name="tab"
      id="tab2"
      class="tab-head"
      v-if="adminRole && adminRole != 'REV'"
    />
    <label
      for="tab2"
      class="tabs_wrapper_label"
      v-if="adminRole && adminRole != 'REV'"
      >Assigned To Others</label
    >

    <div class="tab-body-wrapper">
      <div id="tab-body-1" class="tab-body">
        <slot name="toyou"></slot>
      </div>
      <div
        id="tab-body-2"
        class="tab-body"
        v-if="adminRole && adminRole != 'REV'"
      >
        <slot name="to_others"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  setup() {
    let adminRole = localStorage.getItem("role");
    return { adminRole };
  },
};
</script>
