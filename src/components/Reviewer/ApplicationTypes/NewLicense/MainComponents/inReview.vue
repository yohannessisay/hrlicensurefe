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
          border-2
          px-6
          py-3
          rounded
          my-2
          active
        "
        id="tabs-home-tabFill"
        data-bs-toggle="pill"
        data-bs-target="#tabs-toyou"
        role="tab"
        aria-controls="tabs-toyou"
        aria-selected="true"
        >Assigned To You</a
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
          border-2
          px-6
          py-3
          rounded
          my-2
        "
        id="tabs-messages-tabFill"
        data-bs-toggle="pill"
        data-bs-target="#tabs-to_others"
        role="tab"
        aria-controls="tabs-to_others"
        aria-selected="false"
        >Assigned To Others</a
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

  <!-- <div class="tabs-wrapper">
    <input
      type="radio"
      name="tab"
      id="tab1"
      class="tab-head"
      checked="checked"
    />
    <label for="tab1">One</label>
    <input type="radio" name="tab" id="tab2" class="tab-head" />
    <label for="tab2">Two</label>
    <input type="radio" name="tab" id="tab3" class="tab-head" />
    <label for="tab3">Three</label>
    <input type="radio" name="tab" id="tab4" class="tab-head" />
    <label for="tab4">Four</label>
    <div class="tab-body-wrapper">
      <div id="tab-body-1" class="tab-body">
        <h1>Tab 1 heading</h1>
        <p>
          Bacon ipsum dolor sit amet pastrami dolor tri-tip, magna tongue
          ullamco occaecat velit shoulder sunt elit. Non cillum turkey short
          loin beef ribs. Anim qui shankle short ribs pancetta boudin. Occaecat
          mollit in laboris ham hock bresaola corned beef flank hamburger aute
          chicken id t-bone.
        </p>
      </div>
      <div id="tab-body-2" class="tab-body">
        <h1>Tab 2 heading</h1>
        <p>
          Bacon ipsum dolor sit amet pastrami dolor tri-tip, magna tongue
          ullamco occaecat velit shoulder sunt elit. Non cillum turkey short
          loin beef ribs. Anim qui shankle short ribs pancetta boudin. Occaecat
          mollit in laboris ham hock bresaola corned beef flank hamburger aute
          chicken id t-bone.
        </p>
      </div>
      <div id="tab-body-3" class="tab-body">
        <h1>Tab 3 heading</h1>
        <p>
          Bacon ipsum dolor sit amet pastrami dolor tri-tip, magna tongue
          ullamco occaecat velit shoulder sunt elit. Non cillum turkey short
          loin beef ribs. Anim qui shankle short ribs pancetta boudin. Occaecat
          mollit in laboris ham hock bresaola corned beef flank hamburger aute
          chicken id t-bone.
        </p>
      </div>
      <div id="tab-body-4" class="tab-body">
        <h1>Tab 4 heading</h1>
        <p>
          Bacon ipsum dolor sit amet pastrami dolor tri-tip, magna tongue
          ullamco occaecat velit shoulder sunt elit. Non cillum turkey short
          loin beef ribs. Anim qui shankle short ribs pancetta boudin. Occaecat
          mollit in laboris ham hock bresaola corned beef flank hamburger aute
          chicken id t-bone.
        </p>
      </div>
    </div>
  </div> -->
</template>
<script>
export default {
  components: {},
  setup() {
    return {};
  },
};
</script>
