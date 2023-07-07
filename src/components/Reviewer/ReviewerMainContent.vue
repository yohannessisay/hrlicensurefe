<template>
  <div class="container mt-4 mx-auto">
    <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
    

      <div
        class="
        card
          m-2
          bg-primary-700
          border border-grey-400
          rounded-2xl
          hover:shadow-2xl  
          transform
          shadow-md
          hover:-translate-y-4
          transition-all
          duration-200
        "
      >
        <div class="m-3 text-center">
          <h2 class="text-xl mb-2 text-white dashboard_card_title">
            Total Approved New Licenses
          </h2>
          <i class="fa fa-check fa-2x text-white"></i>
          <h2
            class="
              font-light font-mono
              transition-all
              duration-200
              text-white text-3xl
            "
            id="totalNew"
          >
            <span style="font-size:38px !important">{{
              stat.newLicenseCount
            }}</span>
          </h2>
        </div>
      </div>

      <div
        class="
        card
          m-2
          bg-primary-700
          border border-grey-400
          rounded-2xl
          hover:shadow-2xl  
          transform
          shadow-md
          hover:-translate-y-4
          transition-all
          duration-200
        "
      >
        <div class="m-3 text-center">
          <h2 class="text-xl mb-2 text-white dashboard_card_title">
            Total Approved Renewals
          </h2>
          <i class="fa fa-refresh fa-2x text-white"></i>
          <h2
            class="
              font-light 
              font-mono
              transition-all
              duration-200
              text-white 
              text-3xl
            "
            id="totalRen"
          >
            <span style="font-size:38px !important">
              {{ stat.renewalCount }}</span
            >
          </h2>
        </div>
      </div>

      <div
        class="
        card
          m-2
          bg-primary-700
          border border-grey-400
          rounded-2xl
          hover:shadow-2xl  
          transform
          shadow-md
          hover:-translate-y-4
          transition-all
          duration-200
        "
      >
        <div class="m-3 text-center">
          <h2 class="text-xl mb-2 text-white dashboard_card_title">
            Total Approved Good-Standings
          </h2>
          <i class="fa fa-thumbs-up fa-2x text-white"></i>
          <h2
            class="
              font-light font-mono
              transition-all
              duration-200
              text-white text-3xl
            "
            id="totalGoo"
          >
            <span style="font-size:38px !important">{{
              stat.goodStandingCount
            }}</span>
          </h2>
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
              hover:shadow-2xl
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
              <h1 class="text-2xl text-primary-500 dashboard_card_title">
                New License
              </h1>
            </div>
          </div>
        </router-link>
      </div>

      <div class="mr-12 mb-8 overview-boxes">
        <router-link to="/admin/renewal/">
          <div
            class="
              bg-white
              shadow-xl
              box
              rounded-2xl
              hover:shadow-2xl
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
              <h1 class="text-2xl text-primary-500 dashboard_card_title">
                Renewal
              </h1>
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
              <h1 class="text-2xl text-primary-500 dashboard_card_title">
                Verification
              </h1>
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
              hover:shadow-3xl
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
              <h1 class="text-2xl text-primary-500 dashboard_card_title ">
                Good Standing
              </h1>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const stat = ref({});
    let objApp = document.getElementById("totalApp");
    let objRen = document.getElementById("totalNew");
    let objNew = document.getElementById("totalRen");
    let objGoo = document.getElementById("totalGoo");
    const getStats = () => {
      store.dispatch("stats/getStats").then((res) => {
        stat.value = res.data;

        const animateValue = (obj, start, end, duration) => {
          let startTimestamp = null;
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min(
              (timestamp - startTimestamp) / duration,
              1
            );
            obj.innerHTML = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        };

        animateValue(objApp, 0, stat.value.applicantCount, 4000);
        animateValue(objRen, 0, stat.value.newLicenseCount, 3000);
        animateValue(objNew, 0, stat.value.renewalCount, 2000);
        animateValue(objGoo, 0, stat.value.goodStandingCount, 1000);
      });
    };

    onMounted(() => {
      objApp = document.getElementById("totalApp");
      objRen = document.getElementById("totalNew");
      objNew = document.getElementById("totalRen");
      objGoo = document.getElementById("totalGoo");

      getStats();
    });

    return {
      stat,
    };
  },
};
</script>
