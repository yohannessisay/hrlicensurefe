<template>
  <div v-if="importPart"
    class="
      card-wrapper
      max-w-4xl
      bg-white
      sm:rounded-lg
      p-large
      flex flex-row
      justify-center
      items-center
      relative
      pt-8
      pb-8
      shadow-2xl
    "
  >
    <div class="relative p-4 w-full max-w-7xl h-full md:h-auto">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div
          class="
            flex
            justify-between
            items-center
            p-5
            rounded-t
            border-b
            dark:border-gray-600
          "
        ></div>
        <!-- Modal body -->
        <div
          style="overflow-x: auto; overflow-y: scroll"
          class="shadow-md rounded-lg min-w-full"
        >
          <slot></slot>
        </div>
        <!-- Modal footer -->
        <div
          class="
            flex
            items-center
            p-6
            space-x-2
            rounded-b
            border-t border-gray-200
            dark:border-gray-600
          "
        >
          <button
            data-modal-toggle="extralarge-modal"
            type="button"
            class="
              text-white
              bg-blue-700
              hover:bg-blue-800
              focus:ring-4 focus:outline-none focus:ring-blue-300
              font-medium
              rounded-lg
              text-sm
              px-5
              py-2.5
              text-center
              dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
            "
            @click="addImported()"
          >
            Save
          </button>
          <button
            id="myCheck"
            @click="$emit('importModal', false)"
            class="
              text-gray-500
              bg-white
              hover:bg-gray-100
              focus:ring-4 focus:outline-none focus:ring-gray-200
              rounded-lg
              border border-gray-200
              text-sm
              font-medium
              px-5
              py-2.5
              hover:text-gray-900
              focus:z-10
              dark:bg-gray-700
              dark:text-gray-300
              dark:border-gray-500
              dark:hover:text-white
              dark:hover:bg-gray-600
              dark:focus:ring-gray-600
            "
          >
            Cancel
          </button>
          <Spinner v-if="saveStatus" />
        </div>
      </div>
    </div>
  </div>


  <transition name="slide-fade-up">
    <Modal v-if="this.showErrorModal">
      <ErrorModal @showErrorModal="this.showErrorModal = false">
        <h1>
          This are the errors in the file you imported, please correct them
          accordingly
        </h1>
        <table
          class="w-full"
          style="display: block; height: 500px; overflow-y: scroll"
        >
          <thead>
            <tr>
              <th
                class="
                  px-5
                  py-3
                  border-b-2 border-gray-200
                  bg-gray-100
                  text-left text-xs
                  font-semibold
                  text-gray-700
                  uppercase
                  tracking-wider
                "
              >
                Row Number
              </th>
              <th
                class="
                  px-5
                  py-3
                  border-b-2 border-gray-200
                  bg-gray-100
                  text-left text-xs
                  font-semibold
                  text-gray-700
                  uppercase
                  tracking-wider
                "
              >
                Column Number
              </th>

              <th
                class="
                  px-5
                  py-3
                  border-b-2 border-gray-200
                  bg-gray-100
                  text-left text-xs
                  font-semibold
                  text-gray-700
                  uppercase
                  tracking-wider
                "
              >
                Error Column Data
              </th>
              <th
                class="
                  px-5
                  py-3
                  border-b-2 border-gray-200
                  bg-gray-100
                  text-left text-xs
                  font-semibold
                  text-gray-700
                  uppercase
                  tracking-wider
                "
              >
                Error Message
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in errors" :key="row.id">
              <td
                class="px-5 py-5 border-gray-200 bg-green-100 text-sm"
                v-for="item in row"
                :key="item.id"
              >
                <div class="flex">
                  <div class="ml-3">
                    <p style="color: red">
                      {{ item }}
                    </p>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </ErrorModal>
    </Modal>
  </transition>
 
</template>

<script>
import { useStore } from "vuex";
import store from "../store/modules/reviewer/actions";
import Spinner from "@/sharedComponents/Spinner";
import ErrorModal from "./ImportErrorModal";
export default {
  components: { Spinner, ErrorModal },
  props: ["finalData"],
  data: function () {
    return {
      content: "",
      err: "",
      saveStatus: false,
      showErrorModal: false,
      importPart: true
    };
  },
  methods: {
    addImported() {
      let add = JSON.parse(JSON.stringify(this.finalData));
      let finalArray = [];
      var today = new Date();
      var createdAt =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      var updatedAt =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      add.shift();
      add.forEach((element) => {
        let tempObj = {
          registrationNo: element[1],
          institution: element[2],
          firstName: element[3],
          middleName: element[4],
          lastName: element[5],
          sex: element[6],
          profession: element[7],
          result: element[8],
          createdAt: createdAt,
          updatedAt: updatedAt,
        };
        finalArray.push(tempObj);
      });
        this.saveStatus = true;
      this.$store.dispatch("reviewer/getImported").then((res) => {
      
        let checkforExisting = res.data.data;
        let errorForExisting = [];
        let i=0;
        if (checkforExisting.length > 0) {
          checkforExisting.forEach((element)=> {
            finalArray.forEach((element2) => {
          
              if (element.registrationNo === element2.registrationNo) {
                    i++;
                errorForExisting.push({
                  row: i,
                  column: 1,
                  columnData: element2.registrationNo,
                  errorMessage:
                    "There is an already existing record with that id",
                });
              }
            });
          });

        }
    
        if(errorForExisting.length>0){
          
          this.importPart=false
            this.errors=errorForExisting
            this.showErrorModal=true
        }
      });
  this.saveStatus=false
      // store.addImported(finalArray);
      // store.dispatch("reviewer/addImported", add).then((res) => {
      //   console.log(res);
      // });
    },
  },
};
</script>
<style>
.card-wrapper {
  width: 1200px;
  height: auto;
}
#holder {
  width: 1200px;
  height: auto;
}
.max-w-4xl {
  max-width: 112rem;
}
</style>
