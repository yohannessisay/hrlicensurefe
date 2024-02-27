<template>
  <h2
    :class="
      isDarkMode
        ? 'text-primary-200 bg-primaryDark   p-small text-base sm:text-lg'
        : 'text-primary-200 bg-main-400 p-small text-base sm:text-lg'
    "
  >
    electronical Health Professional Licensing (eHPL) © Ministry of Health -
    Ethiopia {{ new Date().getFullYear() }}
  </h2>
</template>
<script>
export default {
  props: ["isDarkMode"],
};
</script> 
