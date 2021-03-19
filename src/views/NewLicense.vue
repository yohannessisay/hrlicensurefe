<template>
  <Institution />
  <!-- <div v-if="activeState == 0">
    <Institution />
  </div>
  <div v-if="activeState == 1">
    <Photo />
  </div>
  <div v-if="activeState == 2">
    <Passport />
  </div>
  <div v-if="activeState == 3">
    <HealthExamCert />
  </div> -->
</template>
<script>
import Institution from "./Institution.vue";
import Photo from "./Photo.vue";
import Passport from "./Passport.vue";
import HealthExamCert from "./HealthExamCert.vue";
import { mapGetters, mapState } from "vuex";
export default {
  created() {
    // console.log(this.$store.state.activeState);
    // console.log(this.$store.state.activeState);
    // this.$store.dispatch("setContact", 3);
    // console.log(this.$store.state.auth);
    // this.$store.dispatch('modules/newlicense/setActiveState', 3);
  },
  // data: {
  //   activeState: '',
  // },
  components: {
    Institution,
    Photo,
    Passport,
    HealthExamCert,
  },

};
</script>
