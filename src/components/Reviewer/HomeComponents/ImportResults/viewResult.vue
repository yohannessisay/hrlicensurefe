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
    id="viewResult"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="viewResultLabel"
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
            items-center
            justify-between
            p-2
            rounded-t-md
          "
        >
          <button
            type="button"
            class="btn-close border-none rounded-lg hover:text-primary-400"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <div class="modal-body relative p-4">
          <div class="container px-6 mx-auto">
            <div id="modalPrint">
              <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="showPrint">
                  <div id="printIndiv">
                    <div class="grid grid-cols-6 gap-4">
                      <div class="col-start-2 col-span-4 ...">
                        <h2 class="mt-4 text-center font-bold text-2xl">
                          Primary Information
                        </h2>
                        <div
                          class="
                            p-12
                            max-w-full
                            rounded-lg
                            border border-gray-200
                            shadow-md
                            bg-primary-600
                          "
                        >
                          <div class="grid grid-cols-2 gap-2">
                            <div class="col-auto h-4">
                              <i
                                class="fa fa-user"
                                style="color: white"
                                aria-hidden="true"
                              ></i
                              >&nbsp;
                              <label for="" class="text-white font-bold"
                                >First Name:</label
                              >&nbsp;<strong
                                style="color: #ff8d00; font-size: 16px"
                                >{{
                                  result ? result.FirstName : ""
                                }}</strong
                              >
                            </div>
                            <div class="col-auto h-4 bg-teal-400">
                              <i
                                class="fa fa-user"
                                style="color: white"
                                aria-hidden="true"
                              ></i
                              >&nbsp;
                              <label class="text-white font-bold"
                                >Middle Name:</label
                              >&nbsp;<strong
                                style="color: #ff8d00; font-size: 16px"
                                >{{
                                  result ? result.MiddleName : ""
                                }}</strong
                              >
                            </div>

                            <div class="col-auto h-4 bg-teal-400 mt-4">
                              <i
                                class="fa fa-user"
                                style="color: white"
                                aria-hidden="true"
                              ></i
                              >&nbsp;
                              <label for="" class="text-white font-bold"
                                >Last Name:</label
                              >&nbsp;<strong
                                style="color: #ff8d00; font-size: 16px"
                                >{{
                                  result ? result.LastName : ""
                                }}</strong
                              >
                            </div>

                            <div
                              class="
                                col-auto
                                h-4
                                bg-teal-400
                                mt-4
                                show-on-print
                              "
                            >
                              <i
                                class="fa fa-male"
                                style="color: white"
                                aria-hidden="true"
                              ></i>
                              <i
                                class="fa fa-female"
                                style="color: white"
                                aria-hidden="true"
                              ></i>
                              &nbsp;
                              <label for="" class="text-white font-bold"
                                >Sex:</label
                              >&nbsp;<strong
                                style="color: #ff8d00; font-size: 16px"
                                >{{ result ? result.Sex : "" }}</strong
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="grid grid-cols-6 gap-4 mb-4">
                      <div class="col-start-2 col-span-4 ...">
                        <h2 class="mt-4 text-center font-bold text-2xl">
                          Record Detail
                        </h2>
                        <div
                          class="
                            p-12
                            max-w-full
                            rounded-lg
                            border border-gray-200
                            shadow-md
                            dark:bg-gray-200 dark:border-gray-700
                            bg-primary-600
                          "
                        >
                          <div class="grid grid-cols-1 gap-2">
                            <div class="col-6 h-4 bg-teal-100 mt-4">
                              <i
                                class="fa fa-file-invoice"
                                style="color: white"
                                aria-hidden="true"
                              ></i>
                              <label class="text-white font-bold ml-2"
                                >Registration Number:</label
                              ><strong
                                style="color: #ff8d00; font-size: 16px"
                                >{{
                                  result ? result.RegistrationNumber : ""
                                }}</strong
                              >
                            </div>

                            <div class="col-6 h-4 bg-teal-100 mt-4">
                              <i
                                class="fa fa-check"
                                style="color: white"
                                aria-hidden="true"
                              ></i>
                              <label class="text-white font-bold ml-2"
                                >Result:</label
                              ><strong
                                style="color: #ff8d00; font-size: 16px"
                                >{{ result?result.Result:'' }}</strong
                              >
                            </div>

                            <div class="col-6 h-4 bg-teal-100 mt-4">
                              <i
                                class="fa fa-building"
                                style="color: white"
                                aria-hidden="true"
                              ></i>
                              <label for="" class="text-white font-bold ml-2"
                                >Institution:</label
                              ><strong
                                style="color: #ff8d00; font-size: 16px"
                                >{{
                                  result ? result.Institution : ""
                                }}</strong
                              >
                            </div>

                            <div class="col-6 h-4 bg-teal-100 mt-4">
                              <i
                                class="fa fa-briefcase"
                                style="color: white"
                                aria-hidden="true"
                              ></i>
                              <label for="" class="text-white font-bold ml-2"
                                >Profession:</label
                              ><strong style="color: #ff8d00; font-size: 16px">
                                {{
                                  result ? result.Profession : ""
                                }}</strong
                              >
                            </div>

                            <div class="col-6 h-4 bg-teal-100 mt-4">
                              <i
                                class="fa fa-clock"
                                style="color: white"
                                aria-hidden="true"
                              ></i>
                              <label for="" class="text-white font-bold ml-2"
                                >Date Of Examination:</label
                              ><strong style="color: #ff8d00; font-size: 16px">
                                {{
                                  result ? result.DateOfExamination : ""
                                }}</strong
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
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
              hover:bg-purple-700 hover:shadow-lg
              focus:bg-purple-700
              focus:shadow-lg
              focus:outline-none
              focus:ring-0
              active:bg-purple-800 active:shadow-lg
              transition
              duration-150
              ease-in-out
            "
            @click="printIndividualResult()"
          >
            Print
          </button>
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
              hover:bg-purple-700 hover:shadow-lg
              focus:bg-purple-700
              focus:shadow-lg
              focus:outline-none
              focus:ring-0
              active:bg-purple-800 active:shadow-lg
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
import { useStore } from "vuex";
import { ref, onMounted, computed } from "vue";

export default {
  components: {},
  props: ["result"],
  setup(props) {
    const store = useStore();
    const modalData = computed(() => props.result);
    const printIndividualResult = () => {
      let divElements = document.getElementById("printIndiv").innerHTML;
      document.body.innerHTML =
        "<html><head><title></title></head><body>" + divElements + "</body>";

      window.print();
      window.location.reload();
    };
    onMounted(() => {});

    return {
      modalData,
      printIndividualResult,
    };
  },
};
</script>
<style scoped>
.shadow-md {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 34%), 0 2px 4px -1px rgb(0 0 0 / 6%);
}
</style>
