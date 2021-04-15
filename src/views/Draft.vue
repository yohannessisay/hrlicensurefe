<template>
  <div>
    <Navigation tab="Home" />
    <div v-if="message.render" class="bg-lightBlueB-200 h-full">
      <div class="flex pl-12 pt-medium">
        <Title message="New License Draft" />
      </div>
      <div class=" mt-medium rounded ml-large">
        <div class="flex " v-for="i in newlicense.length" v-bind:key="i">
          <div
            class="container mb-medium"
            v-for="item in newlicense.slice((i - 1) * 5, i * 5)"
            v-bind:key="item"
            v-bind:value="item"
          >
            <router-link
              :to="{
                name: 'NewLicense',
                params: { id: item.id },
              }"
            >
              <div
                class="flex justify-center items-center  ml-8 mr-8 box-shadow-pop rounded-lg bg-lightGrey-100"
              >
                <div class="p-4 w-48 h-64">
                  <!-- <div class="flex content-center justify-center">
                <img class="box-shadow-pop" />
              </div> -->
                  <h4
                    class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
                  >
                    {{ item.applicantType.name }}
                  </h4>
                  <h4
                    class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
                  >
                    {{ item.applicationStatus.name }}
                  </h4>
                  <h4
                    class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
                  >
                    Code: {{ item.newLicenseCode }}
                  </h4>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "@/sharedComponents/TitleWithIllustration";
import Navigation from "@/views/Navigation";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";

export default {
  components: { Navigation, Title },
  setup() {
    const store = useStore();
    const router = useRouter();

    let license = ref([]);
    let newlicense = ref([]);
    let renewal = ref([]);
    let verification = ref([]);
    let goodstanding = ref([]);
    let message = ref({
      render: false,
    });
    let hover = ref(false);

    const fetchLicensebyId = () => {
      store.dispatch("newlicense/getNewLicense").then((res) => {
        license.value = res.data.data;
        message.value.render = !message.value.render;
        newlicense.value = license.value.filter(function(e) {
          return e.applicationStatus.code == "DRA";
        });
        console.log(newlicense.value);
      });
    };


    onMounted(() => {
      fetchLicensebyId();
    });
    return {
      license,
      newlicense,
      renewal,
      verification,
      goodstanding,
      hover,
      message
    };
  },
};
</script>
<style>
img {
  border-radius: 50%;
  margin-bottom: 1rem;
  width: 80px;
  border-color: steelblue;
  background-color: steelblue;
}
.container {
  cursor: pointer;
}
.hoveredCard {
  background-color: white;
}
/* .b{
  cursor: pointer;
  position: absolute;
  transform: translate(-50%, -50%);
} */
.flip-box {
  transform-style: preserve-3d;
  perspective: 1000px;
  cursor: pointer;
}
.flip-box-front,
.flip-box-back {
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  backface-visibility: hidden;
}

.flip-box-front {
  transform: rotateY(0deg);
  transform-style: preserve-3d;
}

.flip-box:hover .flip-box-front {
  transform: rotateY(-180deg);
  transform-style: preserve-3d;
}

.flip-box-back {
  /* position: absolute; */
  transform: rotateY(180deg);
  transform-style: preserve-3d;
}

.flip-box:hover .flip-box-back {
  transform: rotateY(0deg);
  transform-style: preserve-3d;
}

.flip-box .inner {
  /* position:absolute;
  perspective: inherit;
  z-index: 2;
  transform: translateY(-50%)translateZ(60px) scale(.94); */
}
/* .box {
  position: relative;
} */

.b {
  /* position: absolute; */
}
</style>
