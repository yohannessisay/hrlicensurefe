<template>
  <div class="flex flex-row justify-center ml-4">
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

            <div class="flex justify-center px-5 mb-2 text-sm">
              <h1>New License</h1>
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

            <div class="flex justify-center px-5 mb-2 text-sm">
              <h1>Renewal</h1>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>

  <div class="flex flex-row mt-8 justify-center">
    <div class="flex flex-col md:flex-row justify-center flex-wrap gap-6">
      <div class="mr-12 mb-8 overview-boxes">
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

          <div class="flex justify-center px-5 mb-2 text-sm">
            <h1>Verification</h1>
          </div>
        </div>
      </div>

      <div class="mr-12 mb-8 overview-boxes">
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

          <div class="flex justify-center px-1 mb-2 text-sm">
            <h1>Good Standing</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  emits: ["menuChange"],
  setup() {
    return {};
  },
};
</script>
