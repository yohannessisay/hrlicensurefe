<template>
 <div class="tabs-wrapper">
    <input
      type="radio"
      name="tab"
      id="tab1"
      checked="checked"
      class="tab-head"
    />
    <label for="tab1" class="tabs_wrapper_label">Unassigned</label>
    <input type="radio" name="tab" id="tab2" class="tab-head" />
    <label for="tab2" class="tabs_wrapper_label">Resubmitted</label>

    <div class="tab-body-wrapper">
      <div id="tab-body-1" class="tab-body">
        <slot name="unassigned"></slot>
      </div>
      <div id="tab-body-2" class="tab-body">
        <slot name="resubmitted"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    return {};
  },
};
</script>
