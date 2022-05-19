<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div class="m-2 grid grid-row-2 grid-flow-col">
      <div class="bg-green-200 rounded-lg">
        <h1 class="mt-4 ml-2">
          Import the required documnet and view the reults before finalizing it
          and saving
        </h1>
        <label
          class="
            flex flex-col
            items-center
            mt-3
            py-4
            bg-grey-100
            rounded-lg
            shadow-md
            uppercase
            hover:bg-purple-600 hover:text-lightBlue-1000
            ease-linear
            transition-all
            duration-150
          "
        >
          <i class="fas fa-cloud-upload-alt fa-1x">Select a file</i>

          <input
            type="file"
            onclick="this.value=null;"
            @change="importExcel"
            id="upload"
            class="hidden"
          />
        </label>
      </div>
    </div>
    <hr />
    <h1 class="ml-4 mt-4">These are the previously added records</h1>
    <div>
      <label for="table-search" class="sr-only">Search</label>
      <div class="relative mb-2 mt-4 ml-4">
        <div
          class="
            absolute
            inset-y-0
            left-0
            flex
            items-center
            pl-3
            pointer-events-none
          "
        >
          <svg
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="table-search"
          class="
            bg-gray-50
            border border-gray-300
            text-gray-900 text-sm
            rounded-lg
            focus:ring-blue-500 focus:border-blue-500
            block
            w-80
            pl-10
            p-2.5
            dark:bg-gray-700
            dark:border-gray-600
            dark:placeholder-gray-400
            dark:text-white
            dark:focus:ring-blue-500
            dark:focus:border-blue-500
          "
          placeholder="Search name"
        />
      </div>
    </div>
    <Spinner v-if="previousTableLoading" />
    <table
      class="w-full ml-4"
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
            Number
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
            Registration Number
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
            Institution
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
            First Name
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
            Middle Name
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
            Last Name
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
            Sex
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
            Profession
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
            Result
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
            Added Time
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
            Updated Time
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
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in previousData" :key="row.id">
          <td
            :class="
              item === 'Fail' || item === 'fail' ? 'cell-red' : 'cell-green'
            "
            v-for="item in row"
            :key="item.id"
          >
            <div class="flex">
              <div class="ml-3">
                <p
                  :class="
                    item === 'Fail' || item === 'fail'
                      ? 'px-5 py-5 border-gray-200 bg-green-100 text-sm cell-red'
                      : ' px-5 py-5 border-gray-200 bg-green-100 text-sm'
                  "
                >
                  {{ item }}
                </p>
              </div>
            </div>
          </td>
          <td>
            <button @click="editSelected(row)">
              <i class="fa fa-pencil" aria-hidden="true"> Edit</i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <transition name="slide-fade-up">
    <Modal v-if="this.importModal">
      <ImportModal
        @importModal="this.importModal = false"
        :finalData="finalData"
      >
        <h1>IMPORTED RESULTS</h1>

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
                Number
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
                Registration Number
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
                Institution
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
                First Name
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
                Middle Name
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
                Last Name
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
                Sex
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
                Profession
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
                Result
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in content.slice(1)" :key="row.id">
              <td
                :class="
                  item === 'Fail' || item === 'fail' ? 'cell-red' : 'cell-green'
                "
                v-for="item in row"
                :key="item.id"
              >
                <div class="flex">
                  <div class="ml-3">
                    <p
                      :class="
                        item === 'Fail' || item === 'fail'
                          ? 'px-5 py-5 border-gray-200 bg-green-100 text-sm cell-red'
                          : ' px-5 py-5 border-gray-200 bg-green-100 text-sm'
                      "
                    >
                      {{ item }}
                    </p>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </ImportModal>
    </Modal>
  </transition>

  <transition name="slide-fade-up">
    <Modal v-if="this.errorModal">
      <ErrorModal @errorModal="this.errorModal = false">
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

  <transition name="slide-fade-up">
    <Modal v-if="this.editModal">
      <EditModal @editModal="this.editModal = false">
        <form class="ml-2 mt-2" @submit.prevent="saveEdited()">
          <div class="grid grid-cols-3 gap-4">
            <div class="form-group mb-4">
              <label for="firstName">First Name</label>
              <input
                v-model="firstName"
                type="text"
                class="
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700
                  focus:bg-white
                  focus:border-blue-600
                  focus:outline-none
                "
                id="firstName"
                placeholder="First name"
              />
            </div>
            <div class="form-group mb-4">
              <label for="firstName">Middle Name</label>
              <input
                v-model="middleName"
                type="text"
                class="
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700
                  focus:bg-white
                  focus:border-blue-600
                  focus:outline-none
                "
                id="middleName"
                placeholder="Middle name"
              />
            </div>
            <div class="form-group mb-4">
              <label for="firstName">Last Name</label>
              <input
                v-model="lastName"
                type="text"
                class="
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700
                  focus:bg-white
                  focus:border-blue-600
                  focus:outline-none
                "
                id="lastName"
                placeholder="Last name"
              />
            </div>
          </div>
          <div class="grid grid-cols-3 gap-4">
            <div class="form-group mb-4">
              <label for="firstName">Sex</label>
              <select
                v-model="sex"
                class="
                  form-select form-select-lg
                  mb-3
                  appearance-none
                  block
                  w-full
                  px-4
                  py-1
                  text-lg
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding bg-no-repeat
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700
                  focus:bg-white
                  focus:border-blue-600
                  focus:outline-none
                "
                aria-label=".form-select-lg example"
              >
                <option selected :value="sex">{{ sex }}</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div class="form-group mb-4">
              <label for="firstName">Profession</label>
              <select
                v-model="profession"
                class="
                  form-select form-select-lg
                  mb-3
                  appearance-none
                  block
                  w-full
                  px-4
                  py-1
                  text-lg
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding bg-no-repeat
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700
                  focus:bg-white
                  focus:border-blue-600
                  focus:outline-none
                "
                aria-label=".form-select-lg example"
              >
                <option selected :value="profession">{{ profession }}</option>
                <option
                  v-for="profession in professions"
                  :value="profession.name"
                  :key="profession.id"
                >
                  {{ profession.name }}
                </option>
              </select>
            </div>
            <div class="form-group mb-4">
              <label for="firstName">Result</label>
              <select
                v-model="result"
                class="
                  form-select form-select-lg
                  mb-3
                  appearance-none
                  block
                  w-full
                  px-4
                  py-1
                  text-lg
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding bg-no-repeat
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700
                  focus:bg-white
                  focus:border-blue-600
                  focus:outline-none
                "
                aria-label=".form-select-lg example"
              >
                <option selected :value="result">{{ result }}</option>
                <option value="pass">Pass</option>
                <option value="fail">Fail</option>
              </select>
            </div>
          </div>

          <div class="grid grid-cols-3 gap-4">
            <div class="form-group mb-4">
              <label for="firstName">Institution</label>
              <select
                v-model="institution"
                class="
                  form-select form-select-lg
                  mb-3
                  appearance-none
                  block
                  w-full
                  px-4
                  py-1
                  text-lg
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding bg-no-repeat
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700
                  focus:bg-white
                  focus:border-blue-600
                  focus:outline-none
                "
                aria-label=".form-select-lg example"
              >
                <option selected :value="institution">{{ institution }}</option>
                <option
                  v-for="instituite in institutions"
                  :value="instituite.name"
                  :key="instituite.name"
                >
                  {{ instituite.name }}
                </option>
              </select>
            </div>
          </div>
          <button
            type="submit"
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
            Save
          </button>
          <button
            id="myCheck"
            type="submit"
            @click="editModal = false"
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
        </form>
      </EditModal>
    </Modal>
  </transition>
</template>

<script>
import Modal from "@/sharedComponents/Modal";
import ImportModal from "@/views/ImportModal.vue";
import ErrorModal from "./ErrorModal.vue";
import EditModal from "./EditModal.vue";
import "@ocrv/vue-tailwind-pagination/dist/style.css";
import { xl, read } from "xlsx";
import transformSheets from "@/services/excelConverter";
import { useStore } from "vuex";
import moment from "moment";
import Spinner from "@/sharedComponents/Spinner";
import st from "../../../store/modules/reviewer/actions";
export default {
  components: {
    Modal,
    ImportModal,
    ErrorModal,
    EditModal,
    Spinner
  },
  name: "TaskList",
  data: function() {
    return {
      content: "",
      finalData: [],
      editData: [],
      firstName: "",
      lastName: "",
      createdAt: "",
      editedDataId: "",
      middleName: "",
      profession: "",
      professions: [],
      result: "",
      institution: "",
      institutions: [],
      sex: "",
      err: "",
      previousTableLoading: true,
      importModal: false,
      errorModal: false,
      editModal: false,
      previousData: [],
      color: "grey",
      errors: []
    };
  },
  computed: {
    moment: () => moment
  },
  created() {
    const store = useStore();
    store.dispatch("reviewer/getProfessionalType").then(res => {
      this.professions = res.data.data;
    });
    store.dispatch("goodstanding/getInstitution").then(res => {
      this.institutions = res.data.data;
    });
    store.dispatch("reviewer/getImported").then(res => {
      res.data.data.forEach(element => {
        element.createdAt = moment(element.createdAt).format("MMMM D, YYYY");
        element.updatedAt = moment(element.updatedAt).format("MMMM D, YYYY");
        this.previousData.push(element);
      });
      this.previousTableLoading = false;
    });
  },
  methods: {
    importExcel() {
      var file = [];
      var errors = [];
      var hasNumber = /\d/;
      file = document.getElementById("upload").files[0];

      var reader = new FileReader();
      reader.readAsBinaryString(file);
      reader.onload = event => {
        var data = event.target.result;
        var workbook = read(data, { type: "binary" });
        var sheets = workbook.Sheets;
        var transformed = transformSheets(sheets, workbook);
        for (let i = 1; i < transformed.length; i++) {
          if (hasNumber.test(transformed[i][3])) {
            errors.push({
              row: i,
              column: 3,
              columnData: transformed[i][3],
              errorMessage: "Number is not allowed in name"
            });
          }
          if (hasNumber.test(transformed[i][4])) {
            errors.push({
              row: i,
              column: 4,
              columnData: transformed[i][4],
              errorMessage: "Number is not allowed in name"
            });
          }

          if (hasNumber.test(transformed[i][5])) {
            errors.push({
              row: i,
              column: 5,
              columnData: transformed[i][5],
              errorMessage: "Number is not allowed in name"
            });
          }

          if (transformed[i][8] === "Pass" || transformed[i][8] === "pass") {
            transformed[i].result = "pass";
          } else transformed[i].result = "fail";
        }

        this.content = transformed;
        if (errors.length > 0) {
          this.errorModal = true;
          this.errors = errors;
        } else this.finalData = transformed;
        this.importModal = true;
      };
    },
    editSelected(item) {
      let data = JSON.parse(JSON.stringify(item));
      this.createdAt = data.createdAt;
      this.editedDataId = data.id;
      this.firstName = data.firstName;
      this.lastName = data.lastName;
      this.middleName = data.middleName;
      this.result = data.result;
      this.institution = data.institution;
      this.profession = data.profession;
      this.sex = data.sex;
      this.editModal = true;
    },
    saveEdited() {
      var updatedAt = new Date().toISOString();

      var crd = new Date(this.createdAt).toISOString();

      let editedData = {
        id: this.editedDataId,
        firstName: this.firstName,
        lastName: this.lastName,
        middleName: this.middleName,
        institution: this.institution,
        profession: this.profession,
        sex: this.sex,
        result: this.result,
        createdAt: crd,
        updatedAt: updatedAt
      };

      // st.editImported(editedData);
      this.$store
        .dispatch("reviewer/editImported", editedData, this.editedDataId)
        .then(res => {
          console.log(res);
        });
    }
  }
};
</script>
<style scoped>
th,
td {
  border-bottom: 0.5px solid black;
}
.py-5 {
  padding-top: 0;
  padding-bottom: 0;
}
.text-green {
  color: grey;
}
.text-red {
  color: white;
  background-color: red;
  font-weight: bold;
}
.error-text-red {
  color: white;
  background-color: red;
  font-weight: bold;
}
.cell-red {
  background-color: red;
}
</style>
