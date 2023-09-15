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
              hover:border-primary-600
               
              hover:bg-purple-700 hover: 
              focus:bg-purple-700
              focus: 
              focus:outline-none
              focus:ring-0
              active:bg-purple-800 active: 
              transition
              duration-150
              ease-in-out"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fa fa-close fa-2x"></i>
          </button>
        </div>

        <div class="modal-body relative p-4">
          <div class="container px-6 mx-auto">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div id="printedDiv">
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
                             
                            bg-primary-600
                          "
                    >
                      <div class="grid grid-cols-2">
                        <div class="cols-6 p-2">
                          <i
                            class="fa fa-user mt-1"
                            style="color: white"
                            aria-hidden="true"
                          ></i>
                          <label for="" class="text-white font-bold ml-1"
                            >First Name:</label
                          >
                          <span class="text-yellow-300 text-xl ml-2">{{
                            result ? result.FirstName : ""
                          }}</span>
                        </div>
                        <div class="cols-6 p-2">
                          <i
                            class="fa fa-user"
                            style="color: white"
                            aria-hidden="true"
                          ></i>
                          <label for="" class="text-white font-bold ml-1"
                            >Middle Name:</label
                          >
                          <span class="text-yellow-300 text-xl ml-2">{{
                            result ? result.MiddleName : ""
                          }}</span>
                        </div>
                      </div>

                      <div class="grid grid-cols-2">
                        <div class="cols-6 p-2">
                          <i
                            class="fa fa-user"
                            style="color: white"
                            aria-hidden="true"
                          ></i>
                          <label for="" class="text-white font-bold ml-1"
                            >First Name:</label
                          >
                          <span class="text-yellow-300 text-xl ml-2">{{
                            result ? result.FirstName : ""
                          }}</span>
                        </div>
                        <div class="cols-6 p-2">
                          <i
                            class="fa fa-user"
                            style="color: white"
                            aria-hidden="true"
                          ></i>
                          <label for="" class="text-white font-bold ml-1"
                            >Last Name:</label
                          >
                          <span class="text-yellow-300 text-xl ml-2">{{
                            result ? result.LastName : ""
                          }}</span>
                        </div>
                      </div>

                      <div class="grid grid-cols-2">
                        <div class="cols-6 p-2">
                          <i
                            class="fa fa-user"
                            style="color: white"
                            aria-hidden="true"
                          ></i>
                          <label for="" class="text-white font-bold ml-1"
                            >Gender:</label
                          >
                          <span class="text-yellow-300 text-xl ml-2">{{
                            result ? result.Sex : ""
                          }}</span>
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
                          ><strong style="color: #ff8d00; font-size: 16px">{{
                            result ? result.RegistrationNumber : ""
                          }}</strong>
                        </div>

                        <div class="col-6 h-4 bg-teal-100 mt-4">
                          <i
                            class="fa fa-check"
                            style="color: white"
                            aria-hidden="true"
                          ></i>
                          <label class="text-white font-bold ml-2"
                            >Result:</label
                          ><strong style="color: #ff8d00; font-size: 16px">{{
                            result ? result.Result : ""
                          }}</strong>
                        </div>

                        <div class="col-6 h-4 bg-teal-100 mt-4">
                          <i
                            class="fa fa-building"
                            style="color: white"
                            aria-hidden="true"
                          ></i>
                          <label for="" class="text-white font-bold ml-2"
                            >Institution:</label
                          ><strong style="color: #ff8d00; font-size: 16px">{{
                            result ? result.Institution : ""
                          }}</strong>
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
                            {{ result ? result.Profession : "" }}</strong
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
                            {{ result ? result.DateOfExamination : "" }}</strong
                          >
                        </div>
                      </div>
                    </div>
                  </div>
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
               
           bg-primary-600
           hover:text-primary-600
           hover:border-primary-600
              active:bg-purple-800 active: 
              transition
              duration-150
              ease-in-out
            "
            @click="printIndividualResult()"
          >
            <i class="fa fa-print"></i>
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
               
           bg-primary-600
           hover:text-primary-600
           hover:border-primary-600
              active:bg-purple-800 active: 
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
import { onMounted, computed } from "vue";
import html2pdf from "html2pdf.js";
export default {
  components: {},
  props: ["result"],
  setup(props) {
    const modalData = computed(() => props.result);
    const printIndividualResult = () => {
      var element = document.getElementById("printedDiv");
      var opt = {
        margin: 1,
        filename: "myfile.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "landscape" },
      };

      html2pdf()
        .set(opt)
        .from(element)
        .save(
          props.result.FirstName + " " + new Date().toISOString().slice(0, 10)
        );
    };
    onMounted(() => {});

    return {
      modalData,
      printIndividualResult,
    };
  },
};
</script>
 
