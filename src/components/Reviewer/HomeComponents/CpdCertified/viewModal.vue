<template>
  <!-- Modal -->
  <div
    class="
      modal
      fade
      fixed
      top-0
      left-0
      hidden
      w-full
      h-full
      outline-none
      overflow-x-hidden overflow-y-auto
    "
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl relative w-auto pointer-events-none">
      <div
        class="
          modal-content
          border-none
          shadow-lg
          relative
          flex flex-col
          w-full
          pointer-events-auto
          bg-white bg-clip-padding
          rounded-md
          outline-none
          text-current
        "
      >
   <div
          class="
            modal-header
            flex flex-shrink-0
           justify-end
           
            p-2
            rounded-t-md
          "
        >
          <button
            type="button"
            class="     
              px-6
              text-white
              bg-primary-600
              hover:text-primary-600 hover:border
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              shadow-lg
              hover:bg-purple-700 hover:shadow-lg
              focus:bg-purple-700
              focus:shadow-lg
              focus:outline-none
              focus:ring-0
              active:bg-purple-800 active:shadow-lg
              transition
              duration-150
              ease-in-out"
            data-bs-dismiss="modal"
            aria-label="Close"
          ><i class="fa fa-close fa-2x"></i></button>
        </div>

        <div class="modal-body relative p-4">
          <div class="container px-6 mx-auto">
            <section class="text-gray-800">
              <div class="flex justify-center">
                <div class="text-center lg:max-w-3xl md:max-w-xl">
                  <h2 class="text-2xl font-bold mb-8 px-6">
                    Showing
                    <span class="text-2xl font-bold px-6">
                      {{ modalData.fullName }}
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
                              shadow-md
                              w-48
                              h-48
                              flex
                              mb-12
                              items-center
                              justify-center
                            "
                          >
                         <i class="fa fa-user fa-10x"></i>
                          </div>
                        </div>
                        <div class="grow ml-6">
                          <h2 class="font-extrabold text-2xl mb-1">
                            Personal Info
                          </h2>
                          <p class="text-gray-500">
                            <span
                              class="
                                font-semibold
                                text-lg text-primary-700
                                mb-1
                              "
                              >Full Name:</span
                            >
                            {{ modalData.fullName }}
                          </p>
                          <p class="text-gray-500">
                            <span class="font-semibold text-primary-700 mb-1"
                              >Nationality:</span
                            >
                            {{ modalData.fullName }}
                          </p>
                          <p class="text-gray-500">
                            <span class="font-semibold text-primary-700 mb-1"
                              >Date Of Birth:</span
                            >
                            {{ modalData.birthDate }}
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
                        lg:w-6/12
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
                              shadow-md
                              w-48
                              flex
                              items-center
                              justify-center
                            "
                            style="height:300px"
                          >
                            <i class="fa fa-list fa-10x"></i>
                          </div>
                        </div>
                        <div class="grow ml-6">
                          <h2 class="font-bold mb-1">Certificate Detail</h2>
                          <p class="text-gray-500">
                            <span class="font-medium text-primary-700 mb-1"
                              >License Number:</span
                            >
                            {{ modalData.licenseNumber }}
                          </p>
                          <p class="text-gray-500">
                            <span class="font-medium text-primary-700 mb-1"
                              >Score:</span
                            >
                            {{ modalData.score }}
                          </p>
                          <p class="text-gray-500">
                            <span class="font-medium text-primary-700 mb-1"
                              >Cpd Activity:</span
                            >
                            {{ modalData.cpdActivity }}
                          </p>
                          <p class="text-gray-500">
                            <span class="font-medium text-primary-700 mb-1"
                              >Cpd Provider:</span
                            >
                            {{ modalData.cpdProvider }}
                          </p>
                          <p class="text-gray-500">
                            <span class="font-medium text-primary-700 mb-1"
                              >Course Name:</span
                            >
                            {{ modalData.courseName }}
                          </p>
                          <p class="text-gray-500">
                            <span class="font-medium text-primary-700 mb-1"
                              >Course Completion Date:</span
                            >
                            {{ modalData.courseCompletionDate }}
                          </p>
                                   <p class="text-gray-500">
                            <span class="font-medium text-primary-700 mb-1"
                              >Course Code:</span
                            >
                            {{ modalData.courseCode }}
                          </p>
                                   <p class="text-gray-500">
                            <span class="font-medium text-primary-700 mb-1"
                              >Course Accreditation Date:</span
                            >
                            {{ modalData.courseAccreditationDate }}
                          </p>
                                        <p class="text-gray-500">
                            <span class="font-medium text-primary-700 mb-1"
                              >Course Accreditor:</span
                            >
                            {{ modalData.courseAccrediator }}
                          </p>
                                             <p class="text-gray-500">
                            <span class="font-medium text-primary-700 mb-1"
                              >Course Educational Unit:</span
                            >
                            {{ modalData.ceu }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div
          class="
            modal-footer
            flex flex-shrink-0 flex-wrap
            items-center
            justify-end
            border-t border-grey-100
            rounded-b-md
          "
        >
          <button
            type="button"
            class="
            inline-block
              px-6
              text-white
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              shadow-md
              bg-primary-700
              hover:bg-whitehover:shadow-lg
              hover:text-primary-600
              hover:border
              transition
              duration-150
              ease-in-out
            "
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
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
.shadow-md {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 34%), 0 2px 4px -1px rgb(0 0 0 / 6%);
}
</style>