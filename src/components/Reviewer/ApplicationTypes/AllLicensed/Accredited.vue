<template
  ><div>
    <!-- <ReviewerNavBar tab="legacyData" /> -->
    <div class="flex flex-row">
      <!-- <div>
        <ReviewerSideBar style="width: 30vh" />
      </div> -->
      <div v-if="loader" style="margin-left: 45%; margin-top: 5%">
        <Spinner />
      </div>
      <div v-else>
        
        <div class="px-4 sm:px-4">
          
          <div class="py-8">
            
            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 max-w-4xl">
              <div id="printable" class="shadow-md rounded-lg">
                <!-- <div v-if="showLoading">
                  loading...
                </div>
                <div v-else> -->
                  <div>show</div>
                  <!-- <table id="myTable" class="display" width="100%"></table> -->
                  <!-- <data-table :rows="data"/> -->
                
                <table class="leading-normal" id="myTable">
                  <thead>
                    <tr class="">
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        First Name
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        Middle Name
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        Last Name
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        Alternative Full Name
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        Employee Prefix
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        Employee Id
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        Expire Date
                      </th>

                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        License Type
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        License Status
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        License Number
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        Remark
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        License Prefix
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        Issued Date
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        emp_mobile
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        emp_work_email
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        emp_gender
                      </th>

                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        Birth Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in legacyData" :key="item">
                      <td class="px-5 py-5 border-gray-200 bg-white text-sm">
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.emp_first_name }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-5 py-5  border-gray-200 bg-white text-sm">
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.emp_middle_name }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-5 py-5  border-gray-200 bg-white text-sm">
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.emp_last_name }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-5 py-5  border-gray-200 bg-white text-sm">
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.alternative_first_name }} {{item.alternative_middle_name}} {{ item.alternative_last_name }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        v-if="item.prefix_id"
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.prefix_id }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        v-else
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              ---
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        v-if="item.employee_id"
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.employee_id }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        v-else
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              ---
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.expiry_date }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                        v-if="item.license_type_id"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.license_type_id }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        v-else
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              ---
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                        v-if="item.license_status_id"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.license_status_id }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        v-else
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              ---
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                        v-if="item.license_no"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.license_no }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        v-else
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              ---
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                        v-if="item.remark"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.remark }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        v-else
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              ---
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                        v-if="item.prefix_id"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.prefix_id }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                        v-else
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              ---
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.issued_date }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        v-if="item.emp_mobile"
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.emp_mobile }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        v-else
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              ---
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        v-if="item.emp_work_email"
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.emp_work_email }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        v-else
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              ---
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        v-if="item.emp_gender"
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.emp_gender }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        v-else
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              ---
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        v-if="item.emp_birthday"
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{
                                moment(item.emp_birthday).format("MMM DD, YYYY")
                              }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        v-else
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              ---
                            </p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
import Spinner from "@/sharedComponents/Spinner";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import moment from "moment";
import { saveAs } from "file-saver";
import store from "../../../../store";

export default {
  components: {
    Spinner
  },
      props: {
            data: { type: Array, required: true },
        },

  computed: {
    moment: () => moment,
    getLegacyData() {
      return store.getters["reviewer/getLegacyData"];
    },
  },
  setup(props, { emit }) {
    
    const store = useStore();

    let showLoading = ref(false);
    // let legacyData = ref([]);
    let newLegacyData = ref([
      {
        emp_first_name: "Mesfin",
        emp_middle_name: "Girum",
        emp_last_name: "Biruk",
        alternative_first_name: "መስፊን",
        alternative_middle_name: "ግሩም",
        alternative_last_name: "ብሩክ",
        prefix_id: "Dr.",
        emp_birthday: "2002-01-25T09:55:23.494Z",
        employee_id: "R00212",
        expiry_date: "Jan 02, 2024",
        license_type_id: "Renewal",
        license_status_id: "Certified",
        license_no: "R00210",
        remark: "-",
        prefix_id: "Medical Doctor",
        issued_date: "Dec 22, 2021",
        emp_work_email: "mesfin@gmail.com",
        emp_gender: "Male",
        emp_mobile: "0998890989",
      },
      {
        emp_first_name: "Mesfin",
        emp_middle_name: "Girum",
        emp_last_name: "Biruk",
        alternative_first_name: "መስፊን",
        alternative_middle_name: "ግሩም",
        alternative_last_name: "ብሩክ",
        prefix_id: "Dr.",
        emp_birthday: "2002-01-25T09:55:23.494Z",
        employee_id: "R00212",
        expiry_date: "Jan 02, 2024",
        license_type_id: "Renewal",
        license_status_id: "Certified",
        license_no: "R00210",
        remark: "-",
        prefix_id: "Medical Doctor",
        issued_date: "Dec 22, 2021",
        emp_work_email: "mesfin@gmail.com",
        emp_gender: "Male",
        emp_mobile: "0998890989",
      },
      {
        emp_first_name: "Mesfin",
        emp_middle_name: "Girum",
        emp_last_name: "Biruk",
        alternative_first_name: "መስፊን",
        alternative_middle_name: "ግሩም",
        alternative_last_name: "ብሩክ",
        prefix_id: "Dr.",
        emp_birthday: "2002-01-25T09:55:23.494Z",
        employee_id: "R00212",
        expiry_date: "Jan 02, 2024",
        license_type_id: "Renewal",
        license_status_id: "Certified",
        license_no: "R00210",
        remark: "-",
        prefix_id: "Medical Doctor",
        issued_date: "Dec 22, 2021",
        emp_work_email: "mesfin@gmail.com",
        emp_gender: "Male",
        emp_mobile: "0998890989",
      },
      {
        emp_first_name: "Mesfin",
        emp_middle_name: "Girum",
        emp_last_name: "Biruk",
        alternative_first_name: "መስፊን",
        alternative_middle_name: "ግሩም",
        alternative_last_name: "ብሩክ",
        prefix_id: "Dr.",
        emp_birthday: "2002-01-25T09:55:23.494Z",
        employee_id: "R00212",
        expiry_date: "Jan 02, 2024",
        license_type_id: "Renewal",
        license_status_id: "Certified",
        license_no: "R00210",
        remark: "-",
        prefix_id: "Medical Doctor",
        issued_date: "Dec 22, 2021",
        emp_work_email: "mesfin@gmail.com",
        emp_gender: "Male",
        emp_mobile: "0998890989",
      },
      {
        emp_first_name: "Mesfin",
        emp_middle_name: "Girum",
        emp_last_name: "Biruk",
        alternative_first_name: "መስፊን",
        alternative_middle_name: "ግሩም",
        alternative_last_name: "ብሩክ",
        prefix_id: "Dr.",
        emp_birthday: "2002-01-25T09:55:23.494Z",
        employee_id: "R00212",
        expiry_date: "Jan 02, 2024",
        license_type_id: "Renewal",
        license_status_id: "Certified",
        license_no: "R00210",
        remark: "-",
        prefix_id: "Medical Doctor",
        issued_date: "Dec 22, 2021",
        emp_work_email: "mesfin@gmail.com",
        emp_gender: "Male",
        emp_mobile: "0998890989",
      },
      {
        emp_first_name: "Mesfin",
        emp_middle_name: "Girum",
        emp_last_name: "Biruk",
        alternative_first_name: "መስፊን",
        alternative_middle_name: "ግሩም",
        alternative_last_name: "ብሩክ",
        prefix_id: "Dr.",
        emp_birthday: "2002-01-25T09:55:23.494Z",
        employee_id: "R00212",
        expiry_date: "Jan 02, 2024",
        license_type_id: "Renewal",
        license_status_id: "Certified",
        license_no: "R00210",
        remark: "-",
        prefix_id: "Medical Doctor",
        issued_date: "Dec 22, 2021",
        emp_work_email: "mesfin@gmail.com",
        emp_gender: "Male",
        emp_mobile: "0998890989",
      },
      {
        emp_first_name: "Mesfin",
        emp_middle_name: "Girum",
        emp_last_name: "Biruk",
        alternative_first_name: "መስፊን",
        alternative_middle_name: "ግሩም",
        alternative_last_name: "ብሩክ",
        prefix_id: "Dr.",
        emp_birthday: "2002-01-25T09:55:23.494Z",
        employee_id: "R00212",
        expiry_date: "Jan 02, 2024",
        license_type_id: "Renewal",
        license_status_id: "Certified",
        license_no: "R00210",
        remark: "-",
        prefix_id: "Medical Doctor",
        issued_date: "Dec 22, 2021",
        emp_work_email: "mesfin@gmail.com",
        emp_gender: "Male",
        emp_mobile: "0998890989",
      },
      {
        emp_first_name: "Mesfin",
        emp_middle_name: "Girum",
        emp_last_name: "Biruk",
        alternative_first_name: "መስፊን",
        alternative_middle_name: "ግሩም",
        alternative_last_name: "ብሩክ",
        prefix_id: "Dr.",
        emp_birthday: "2002-01-25T09:55:23.494Z",
        employee_id: "R00212",
        expiry_date: "Jan 02, 2024",
        license_type_id: "Renewal",
        license_status_id: "Certified",
        license_no: "R00210",
        remark: "-",
        prefix_id: "Medical Doctor",
        issued_date: "Dec 22, 2021",
        emp_work_email: "mesfin@gmail.com",
        emp_gender: "Male",
        emp_mobile: "0998890989",
      },
      {
        emp_first_name: "Mesfin",
        emp_middle_name: "Girum",
        emp_last_name: "Biruk",
        alternative_first_name: "መስፊን",
        alternative_middle_name: "ግሩም",
        alternative_last_name: "ብሩክ",
        prefix_id: "Dr.",
        emp_birthday: "2002-01-25T09:55:23.494Z",
        employee_id: "R00212",
        expiry_date: "Jan 02, 2024",
        license_type_id: "Renewal",
        license_status_id: "Certified",
        license_no: "R00210",
        remark: "-",
        prefix_id: "Medical Doctor",
        issued_date: "Dec 22, 2021",
        emp_work_email: "mesfin@gmail.com",
        emp_gender: "Male",
        emp_mobile: "0998890989",
      },
      {
        emp_first_name: "Mesfin",
        emp_middle_name: "Girum",
        emp_last_name: "Biruk",
        alternative_first_name: "መስፊን",
        alternative_middle_name: "ግሩም",
        alternative_last_name: "ብሩክ",
        prefix_id: "Dr.",
        emp_birthday: "2002-01-25T09:55:23.494Z",
        employee_id: "R00212",
        expiry_date: "Jan 02, 2024",
        license_type_id: "Renewal",
        license_status_id: "Certified",
        license_no: "R00210",
        remark: "-",
        prefix_id: "Medical Doctor",
        issued_date: "Dec 22, 2021",
        emp_work_email: "mesfin@gmail.com",
        emp_gender: "Male",
        emp_mobile: "0998890989",
      },
      {
        emp_first_name: "Mesfin",
        emp_middle_name: "Girum",
        emp_last_name: "Biruk",
        alternative_first_name: "መስፊን",
        alternative_middle_name: "ግሩም",
        alternative_last_name: "ብሩክ",
        prefix_id: "Dr.",
        emp_birthday: "2002-01-25T09:55:23.494Z",
        employee_id: "R00212",
        expiry_date: "Jan 02, 2024",
        license_type_id: "Renewal",
        license_status_id: "Certified",
        license_no: "R00210",
        remark: "-",
        prefix_id: "Medical Doctor",
        issued_date: "Dec 22, 2021",
        emp_work_email: "mesfin@gmail.com",
        emp_gender: "Male",
        emp_mobile: "0998890989",
      },
      {
        emp_first_name: "Mesfin",
        emp_middle_name: "Girum",
        emp_last_name: "Biruk",
        alternative_first_name: "መስፊን",
        alternative_middle_name: "ግሩም",
        alternative_last_name: "ብሩክ",
        prefix_id: "Dr.",
        emp_birthday: "2002-01-25T09:55:23.494Z",
        employee_id: "R00212",
        expiry_date: "Jan 02, 2024",
        license_type_id: "Renewal",
        license_status_id: "Certified",
        license_no: "R00210",
        remark: "-",
        prefix_id: "Medical Doctor",
        issued_date: "Dec 22, 2021",
        emp_work_email: "mesfin@gmail.com",
        emp_gender: "Male",
        emp_mobile: "0998890989",
      },
      {
        emp_first_name: "Mesfin",
        emp_middle_name: "Girum",
        emp_last_name: "Biruk",
        alternative_first_name: "መስፊን",
        alternative_middle_name: "ግሩም",
        alternative_last_name: "ብሩክ",
        prefix_id: "Dr.",
        emp_birthday: "2002-01-25T09:55:23.494Z",
        employee_id: "R00212",
        expiry_date: "Jan 02, 2024",
        license_type_id: "Renewal",
        license_status_id: "Certified",
        license_no: "R00210",
        remark: "-",
        prefix_id: "Medical Doctor",
        issued_date: "Dec 22, 2021",
        emp_work_email: "mesfin@gmail.com",
        emp_gender: "Male",
        emp_mobile: "0998890989",
      },
      {
        emp_first_name: "Mesfin",
        emp_middle_name: "Girum",
        emp_last_name: "Biruk",
        alternative_first_name: "መስፊን",
        alternative_middle_name: "ግሩም",
        alternative_last_name: "ብሩክ",
        prefix_id: "Dr.",
        emp_birthday: "2002-01-25T09:55:23.494Z",
        employee_id: "R00212",
        expiry_date: "Jan 02, 2024",
        license_type_id: "Renewal",
        license_status_id: "Certified",
        license_no: "R00210",
        remark: "-",
        prefix_id: "Medical Doctor",
        issued_date: "Dec 22, 2021",
        emp_work_email: "mesfin@gmail.com",
        emp_gender: "Male",
        emp_mobile: "0998890989",
      },
      {
        emp_first_name: "Mesfin",
        emp_middle_name: "Girum",
        emp_last_name: "Biruk",
        alternative_first_name: "መስፊን",
        alternative_middle_name: "ግሩም",
        alternative_last_name: "ብሩክ",
        prefix_id: "Dr.",
        emp_birthday: "2002-01-25T09:55:23.494Z",
        employee_id: "R00212",
        expiry_date: "Jan 02, 2024",
        license_type_id: "Renewal",
        license_status_id: "Certified",
        license_no: "R00210",
        remark: "-",
        prefix_id: "Medical Doctor",
        issued_date: "Dec 22, 2021",
        emp_work_email: "mesfin@gmail.com",
        emp_gender: "Male",
        emp_mobile: "0998890989",
      },
      {
        emp_first_name: "Getu",
        emp_middle_name: "Aman",
        emp_last_name: "Temesgen",
        alternative_first_name: "ጌቱ",
        alternative_middle_name: "አማን",
        alternative_last_name: "ተከተል",
        prefix_id: "Mr.",
        emp_birthday: "2002-01-25T09:55:23.494Z",
        employee_id: "NL00212",
        expiry_date: "Jan 02, 2024",
        license_type_id: "New License",
        license_status_id: "Certified",
        license_no: "NL00210",
        remark: "-",
        prefix_id: "Medical Doctor",
        issued_date: "Dec 22, 2021",
        emp_work_email: "mesfin@gmail.com",
        emp_gender: "Male",
        emp_mobile: "0998890989",
      },
      {
        emp_first_name: "Mahlet",
        emp_middle_name: "Markos",
        emp_last_name: "Kefa",
        alternative_first_name: "ማህሌት",
        alternative_middle_name: "ማርኮስ",
        alternative_last_name: "ኬፋ",
        prefix_id: "Ms.",
        emp_birthday: "2002-01-25T09:55:23.494Z",
        employee_id: "GS00212",
        expiry_date: "Jan 02, 2024",
        license_type_id: "Good Standing",
        license_status_id: "Certified",
        license_no: "GS00210",
        remark: "-",
        prefix_id: "Medical Doctor",
        issued_date: "Dec 22, 2021",
        emp_work_email: "mesfin@gmail.com",
        emp_gender: "Male",
        emp_mobile: "0998890989",
      },
      {
        emp_first_name: "Meron",
        emp_middle_name: "lema",
        emp_last_name: "tomas",
        alternative_first_name: "ሜሮን",
        alternative_middle_name: "ለማ",
        alternative_last_name: "ቶማስ",
        prefix_id: "Dr.",
        emp_birthday: "2002-01-25T09:55:23.494Z",
        employee_id: "NL00109",
        expiry_date: "Jan 02, 2024",
        license_type_id: "New License",
        license_status_id: "Certified",
        license_no: "NL00109",
        remark: "-",
        prefix_id: "Medical Doctor",
        issued_date: "Dec 22, 2021",
        emp_work_email: "mesfin@gmail.com",
        emp_gender: "Male",
        emp_mobile: "0998890989",
      },
    ]);

    // let legacyData = ref([])

    let legacyData = ref([]);
    let totalCount = ref();
    const fetchLegacyData = (page, size, value) => {
      showLoading.value = true;
      console.log("legacy above");
      const apiParameters = [page, size, value];
      store.dispatch("reviewer/getLegacyData", apiParameters).then((res) => {
        // legacyData.value = store.getters["reviewer/getLegacyData"];
        legacyData.value = res.rows;
        totalCount.valu = res.count;
        console.log("legacy data is ", legacyData.value);
        showLoading.value = false;

        // $(document).ready(function() {
        //   $("#myTable").DataTable({
        //     data: res.rows,
        //     columns: [
        //       { title: "emp first name", data: "emp_first_name" },
        //       { title: "emp middl name", data: "emp_middle_name" },
        //       { title: "emp last name", data: "emp_last_name" },
        //       { title: "emp gender", data: "emp_gender" },
        //       { title: "license no", data: "license_no" },
        //       { title: "employee id", data: "employee_id" },
        //     ],
        //     paging: res.count,
        //     lengthMenu: [
        //       [5, 7, 12, -1],
        //       [5, 7, 12, "All"],
        //     ],
        //     // "data": legacyData
        //     // "ajax": "https://hrlicensurebe.dev.k8s.sandboxaddis.com/api/legacyData",
        //     processing: true,
        //     serverSide: true,
        //     deferLoading: res.count,
        //   });
        // });
      });
    };

    let loader = ref(false);
    const initDataTable = () => {};
    $("#myTable_paginate  > a > #myTable_next ").click(function() {
      // alert("Handler for .click() called.");
      // var activeText = $(".paginate_button current").text();
      console.log("active");
    });
    onMounted(() => {
      fetchLegacyData(0, 10, "");
      if (!showLoading.value) {
        initDataTable();
      }
    });
    return {
      loader,
      legacyData,
    };
  },
};
</script>

<style>
.titile-container {
  flex-wrap: wrap;
}
.filter-container {
  flex-wrap: wrap;
}
.applicationType {
  background-color: #300400;
}
th {
  color: #648ea3;
  background-color: #eff6ff;
}
.sidenav {
  width: 500px;
}
#export {
  cursor: pointer;
}
a:link {
  color: yellow;
}
a {
  cursor: pointer;
  color: #648ea3;
}
a:visited {
  color: red;
  cursor: pointer;
}
a:active {
  color: red;
}
a:hover {
  color: #0b5980;
}
#printable {
  /* display: block; */
  width: 170vh;
  overflow-x: scroll;
  overflow-y: hidden;
}
</style>
