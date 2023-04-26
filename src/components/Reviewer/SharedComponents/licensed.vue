<template>
  <div class="tabs-wrapper">
    <input
      type="radio"
      name="tab"
      id="tab1"
      checked="checked"
      class="tab-head"
    />
    <label for="tab1" class="tabs_wrapper_label">
      <slot name="tab_header"></slot>
    </label>

    <div class="tab-body-wrapper">
      <div id="tab-body-1" class="tab-body">
        <slot name="toyou"></slot>
      </div>
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
