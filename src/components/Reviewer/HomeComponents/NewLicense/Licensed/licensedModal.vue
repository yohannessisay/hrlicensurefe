<template>
  <div class="modal-body relative p-4">
    <div class="container px-6 mx-auto">
      <section class="text-gray-800">
        <div class="flex justify-center">
          <div class="text-center lg:max-w-3xl md:max-w-xl">
            <h2 class="text-2xl font-bold mb-12 px-6">
              Showing
              <span class="text-2xl font-bold mb-12 px-6">
                {{ modalData.name }}
              </span>
              's License Data
            </h2>
          </div>
        </div>

        <div class="flex flex-wrap">
          <div class="grow-0 shrink-0 basis-auto w-full lg:w-11/12">
            <div class="flex flex-wrap">
              <div
                class="
                  mb-12
                  grow-0
                  shrink-0
                  basis-auto
                  w-full
                  lg:w-6/12
                  px-3
                  lg:px-6
                "
              >
                <div class="flex items-start">
                  <div class="shrink-0">
                    <div
                      class="
                        p-4
                        bg-blue-600
                        rounded-md
                        shadow-lg
                        w-48
                        h-48
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <img
                        src="../../../../../assets/showLicense/profile.png"
                        alt=""
                        style="height: 152px; width: 150px"
                      />
                    </div>
                  </div>
                  <div class="grow ml-6">
                    <h2 class="font-extrabold text-2xl mb-1">Personal Info</h2>
                    <p class="text-gray-500">
                      <span class="font-semibold text-lg text-primary-700 mb-1"
                        >Full Name:</span
                      >
                      {{ modalData.name }}
                    </p>
                    <p class="text-gray-500">
                      <span class="font-semibold text-primary-700 mb-1"
                        >Gender:</span
                      >
                      {{ modalData.gender }}
                    </p>
                    <p class="text-gray-500">
                      <span class="font-semibold text-primary-700 mb-1"
                        >Nationality:</span
                      >
                      {{ modalData.nationality }}
                    </p>
                    <p class="text-gray-500">
                      <span class="font-semibold text-primary-700 mb-1"
                        >Date Of Birth:</span
                      >
                      {{ modalData.dateOfBirth.slice(0, 10) }}
                    </p>
                    <p class="text-gray-500">
                      <span class="font-semibold text-primary-700 mb-1"
                        >Martial Status:</span
                      >
                      {{ modalData.martialStatus }}
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="
                  mb-12
                  grow-0
                  shrink-0
                  basis-auto
                  w-full
                  lg:w-6/12
                  px-3
                  lg:px-6
                "
              >
                <div class="flex items-start">
                  <div class="shrink-0">
                    <div
                      class="
                        p-4
                        bg-blue-600
                        rounded-md
                        shadow-lg
                        w-48
                        h-48
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <i class="fa fa-phone fa-4x"></i>
                    </div>
                  </div>
                  <div class="grow ml-6">
                    <h2 class="font-bold mb-1">Contact Info</h2>
                    <p class="text-gray-500">
                      <span class="font-medium text-primary-700 mb-1"
                        >Mobile Number:</span
                      >
                      {{ modalData.mobileNumber }}
                    </p>
                    <p class="text-gray-500">
                      <span class="font-medium text-primary-700 mb-1"
                        >Email:</span
                      >
                      {{ modalData.email }}
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="
                  grow-0
                  shrink-0
                  basis-auto
                  w-full
                  lg:w-11/12
                  px-3
                  lg:px-6
                "
              >
                <div class="flex align-center">
                  <div class="shrink-0">
                    <div
                      class="
                        p-4
                        bg-blue-600
                        rounded-md
                        shadow-lg
                        w-48
                        h-48
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <i class="fa fa-building fa-4x"></i>
                    </div>
                  </div>
                  <div class="grow ml-6">
                    <h2 class="font-bold mb-1">Institution Info</h2>
                    <p class="text-gray-500">
                      <span class="font-medium text-primary-700 mb-1"
                        >Institution Name:</span
                      >
                      {{ modalData.instName }}
                    </p>
                    <p class="text-gray-500">
                      <span class="font-medium text-primary-700 mb-1"
                        >Department:</span
                      >
                      {{ modalData.department }}
                    </p>
                    <p class="text-gray-500">
                      <span class="font-medium text-primary-700 mb-1"
                        >Institution Type:</span
                      >
                      {{ modalData.instType }}
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6"
              ></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: "Modal",
  props: ["modalData"],
  data() {
    return {
      show: true,
    };
  },

  methods: {
    showModal() {
      this.show = true;
    },
  },
};
</script>
<style scoped>
</style>