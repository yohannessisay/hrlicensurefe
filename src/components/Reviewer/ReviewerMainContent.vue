<template>
  <div class="container mt-4 mx-auto">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div
        class="
          card
          m-2
          bg-primary-700
          border border-gray-400
          rounded-2xl
          hover:shadow-md hover:border-opacity-0
          transform
          hover:-translate-y-2
          transition-all
          duration-200
        "
      >
        <div class="m-3 text-center">
          <h2 class="text-xl mb-2 text-white">Total Applicants</h2>
          <i class="fa fa-user fa-2x text-white"></i>
          <p
            class="
              font-light font-mono
              transition-all
              duration-200
              text-white 
              text-3xl
            "
          >
            9
          </p>
        </div>
      </div>

      <div
        class="
          card
          m-2
          bg-primary-700
          border border-gray-400
          rounded-2xl
          hover:shadow-md hover:border-opacity-0
          transform
          hover:-translate-y-2
          transition-all
          duration-200
        "
      >
        <div class="m-3 text-center">
          <h2 class="text-xl mb-2 text-white">Total Licensed</h2>
          <i class="fa fa-check fa-2x text-white"></i>
          <p
            class="
              font-light font-mono
              transition-all
              duration-200
              text-white 
              text-3xl
            "
          >
            999
          </p>
        </div>
      </div>

      <div
        class="
          card
          m-2
          bg-primary-700
          border border-gray-400
          rounded-2xl
          hover:shadow-md hover:border-opacity-0
          transform
          hover:-translate-y-2
          transition-all
          duration-200
        "
      >
        <div class="m-3 text-center">
          <h2 class="text-xl mb-2 text-white">Total Renewals</h2>
          <i class="fa fa-refresh fa-2x text-white"></i>
          <p
            class="
              font-light font-mono
              transition-all
              duration-200
              text-white
              text-3xl
            "
          >
            999,999
          </p>
        </div>
      </div>

      <div
        class="
          card
          m-2
          bg-primary-700
          border border-gray-400
          rounded-2xl
          hover:shadow-md hover:border-opacity-0
          transform
          hover:-translate-y-2
          transition-all
          duration-200
        "
      >
        <div class="m-3 text-center">
          <h2 class="text-xl mb-2 text-white">Total Good Standings</h2>
          <i class="fa fa-thumbs-up fa-2x text-white"></i>
          <p
            class="
              font-light font-mono
              transition-all
              duration-200
              text-white 
              text-3xl
            "
          >
            999,999,999
          </p>
        </div>
      </div>
    </div>
  </div>

  <div id="home" class="flex flex-row justify-center ml-4 mt-12">
    <div class="flex flex-col md:flex-row justify-center flex-wrap gap-2">
      <div class="mr-12 mb-8 overview-boxes">
        <router-link to="/admin/newLicense/">
          <div
            class="
              bg-white
              shadow-lg
              box
              rounded-2xl
              hover:shadow-4xl
              transition
              duration-500
              transform
              hover:scale-110
              cursor-pointer
              cart
            "
            style="height: 200px; width: 300px"
          >
            <p
              class="
                py-6
                px-6
                text-lg
                tracking-wide
                text-center
                flex flex-row
                justify-center
              "
            >
              <img
                src="../../assets/certificate.png"
                alt=""
                style="height: 100px; width: 100px"
              />
            </p>

            <div class="flex justify-center px-5 mb-2 text-sm mt-4">
              <h1 class="text-2xl text-primary-500">New License</h1>
            </div>
          </div>
        </router-link>
      </div>

      <div class="mr-12 mb-8 overview-boxes">
        <router-link to="/admin/renewal/">
          <div
            class="
              bg-white
              shadow-lg
              box
              rounded-2xl
              hover:shadow-4xl
              transition
              duration-500
              transform
              hover:scale-110
              cursor-pointer
            "
            style="height: 200px; width: 300px"
          >
            <p
              class="
                py-6
                px-6
                text-lg
                tracking-wide
                text-center
                flex flex-row
                justify-center
              "
            >
              <img
                src="../../assets/renew.png"
                alt=""
                style="height: 100px; width: 100px"
              />
            </p>

            <div class="flex justify-center px-5 mb-2 text-sm mt-4">
              <h1 class="text-2xl text-primary-500">Renewal</h1>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>

  <div class="flex flex-row mt-8 justify-center">
    <div class="flex flex-col md:flex-row justify-center flex-wrap gap-6">
      <div class="mr-12 mb-8 overview-boxes">
        <router-link to="/admin/verification/">
          <div
            class="
              bg-white
              shadow-lg
              box
              rounded-2xl
              hover:shadow-4xl
              transition
              duration-500
              transform
              hover:scale-110
              cursor-pointer
            "
            style="height: 200px; width: 300px"
          >
            <p
              class="
                py-6
                px-6
                text-lg
                tracking-wide
                text-center
                flex flex-row
                justify-center
              "
            >
              <img
                src="../../assets/verify.png"
                alt=""
                style="height: 100px; width: 100px"
              />
            </p>

            <div class="flex justify-center px-5 mb-2 text-sm mt-4">
              <h1 class="text-2xl text-primary-500">Verification</h1>
            </div>
          </div>
        </router-link>
      </div>

      <div class="mr-12 mb-8 overview-boxes">
        <router-link to="/admin/goodStanding/">
          <div
            class="
              bg-white
              shadow-lg
              box
              rounded-2xl
              hover:shadow-4xl
              transition
              duration-500
              transform
              hover:scale-110
              cursor-pointer
            "
            style="height: 200px; width: 300px"
          >
            <p
              class="
                py-6
                px-6
                text-lg
                tracking-wide
                text-center
                flex flex-row
                justify-center
              "
            >
              <img
                src="../../assets/good.png"
                alt=""
                style="height: 100px; width: 100px"
              />
            </p>

            <div class="flex justify-center px-1 mb-2 text-sm mt-4">
              <h1 class="text-2xl text-primary-500">Good Standing</h1>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import {onMounted} from "vue";
import { useStore } from "vuex";
export default {

  setup() {
const store = useStore();

const getStats=()=>{

store.dispatch("stats/getStats").then((res) => {
console.log(res)

});
};
   onMounted(() => {
      getStats();
    });
    return {};
  },
};
</script>
