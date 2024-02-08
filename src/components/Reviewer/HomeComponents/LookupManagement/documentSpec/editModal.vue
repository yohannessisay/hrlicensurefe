<template>
  <!-- Modal -->
  <div
    class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
    id="editModal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="addModalLabel"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-dialog-centered modal-lg relative w-auto pointer-events-none"
    >
      <div
        class="modal-content border-none relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"
      >
        <div
          class="modal-header flex flex-shrink-0 items-center justify-between p-2 rounded-t-md"
        ></div>
        <div class="vld-parent">
          <loading
            :active="isLoading"
            :is-full-page="false"
            :color="'#2F639D'"
            :opacity="1"
          ></loading>
          <div class="modal-body relative">
            <div class="container">
              <section class="text-gray-800">
                <div class="flex justify-center shadow-md mb-4">
                  <div class="text-center max-w-full">
                    <h2 class="text-2xl font-bold">
                      Edit Document Spec
                    </h2>
                  </div>
                </div>

                <div class="grow-0 shrink-0 basis-auto w-full lg:w-full">
                  <form>
                    <div class="flex flex-wrap">
                      <div
                        class="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-full px-3 lg:px-6"
                      >
                        <div class="grid grid-cols-2">
                          <!-- Document Spec Application Category -->
                          <div class="group w-full md:full lg:w-full ml-4">
                            <label
                              for="depName"
                              class="inline-block w-full text-md mb-2 text-primary-600 font-bold text-gray-500 transition-all duration-200 ease-in-out"
                              >Application Category</label
                            >
                            <div class="group w-full md:full lg:w-full">
                              <div class="relative flex items-center">
                                <select
                                  class="form-select appearance-none block w-full px-6 mb-8 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                  aria-label="Default select example"
                                  v-model="editData.appCategoryId"
                                  @change="enableSaveButton"
                                >
                                  <option
                                    v-for="category in applicationCategory"
                                    :key="category.id"
                                    :value="category.id"
                                  >
                                    {{ category.name }}
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <!-- Document Spec Department -->
                          <!-- Document Spec Applicant Type -->
                          <div class="group w-full md:full lg:w-full ml-4">
                            <label
                              for="depName"
                              class="inline-block w-full text-md mb-2 text-primary-600 font-bold text-gray-500 transition-all duration-200 ease-in-out"
                              >Applicant Type</label
                            >
                            <div class="group w-full md:full lg:w-full">
                              <div class="relative flex items-center">
                                <select
                                  class="form-select appearance-none block w-full px-6 mb-8 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                  aria-label="Default select example"
                                  v-model="editData.applicantTypeId"
                                  @change="enableSaveButton"
                                >
                                  <option
                                    v-for="type in applicantType"
                                    :key="type.id"
                                    :value="type.id"
                                  >
                                    {{ type.name }}
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <!-- Document Spec Applicant Type -->
                          <!-- Document Spec Document Type -->
                          <div class="group w-full md:full lg:w-full ml-4">
                            <label
                              for="depName"
                              class="inline-block w-full text-md mb-2 text-primary-600 font-bold text-gray-500 transition-all duration-200 ease-in-out"
                              >Document Type</label
                            >
                            <div class="group w-full md:full lg:w-full">
                              <div class="relative flex items-center">
                                <select
                                  class="form-select appearance-none block w-full px-6 mb-8 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                  aria-label="Default select example"
                                  v-model="editData.documentTypeId"
                                  @change="enableSaveButton"
                                >
                                  <option
                                    v-for="type in documentType"
                                    :key="type.id"
                                    :value="type.id"
                                  >
                                    {{ type.name }}
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <!-- Document Spec Document Type -->
                          <!-- Document Spec Department -->
                          <div class="group w-full md:full lg:w-full ml-4">
                            <label
                              for="depName"
                              class="inline-block w-full text-md mb-2 text-primary-600 font-bold text-gray-500 transition-all duration-200 ease-in-out"
                              >Department</label
                            >
                            <div class="group w-full md:full lg:w-full">
                              <div class="relative flex items-center">
                                <select
                                  class="form-select appearance-none block w-full px-6 mb-8 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                  aria-label="Default select example"
                                  v-model="editData.departmentId"
                                  @change="enableSaveButton"
                                >
                                  <option
                                    v-for="type in departments"
                                    :key="type.id"
                                    :value="type.id"
                                  >
                                    {{ type.name }}
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <!-- Document Spec Department -->
                          <!-- Document Spec Education Level -->
                          <div class="group w-full md:full lg:w-full ml-4">
                            <label
                              for="depName"
                              class="inline-block w-full text-md mb-2 text-primary-600 font-bold text-gray-500 transition-all duration-200 ease-in-out"
                              >Document Spec Education Level</label
                            >
                            <div class="relative flex items-center">
                              <select
                                class="form-select appearance-none block w-full px-6 mb-8 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                aria-label="Default select example"
                                v-model="editData.educationalLevelId"
                                @change="enableSaveButton"
                              >
                                <option
                                  v-for="education in educationLevels"
                                  :key="education.id"
                                  :value="education.id"
                                >
                                  {{ education.name }}
                                </option>
                              </select>
                            </div>
                          </div>
                          <!-- Document Spec Education Level -->
                          <div
                            class="group w-full md:full lg:w-full ml-4"
                            v-if="editData && editData.parentDocument"
                          >
                            <label
                              for="depName"
                              class="inline-block w-full text-md mb-2 text-primary-600 font-bold text-gray-500 transition-all duration-200 ease-in-out"
                              >Parent Document</label
                            >
                            <div class="relative flex items-center">
                              <input
                                type="text"
                                class="peer relative h-18 w-full rounded-sm pl-10 pr-4 outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:text-primary-600 focus:font-bold focus:drop-"
                                required
                                placeholder="Enter name"
                                v-model="editData.parentDocument"
                              />

                              <i
                                class="fa fa-text-width ml-4 absolute left-auto text-primary-600"
                              ></i>
                            </div>
                          </div>
                          <!-- Document Spec Required -->
                          <div
                            class="group w-1/2 ml-4 mb-4   shadow-md p-2 rounded-md"
                          >
                            <label
                              for="depName"
                              class="inline-block w-full text-md mb-2 text-primary-600 font-bold text-gray-500 transition-all duration-200 ease-in-out"
                              >Is it a required field?</label
                            >

                            <input
                              class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                              type="checkbox"
                              value=""
                              id="checkboxDefault"
                              v-model="editData.isRequired"
                            />
                          </div>
                          <!-- Document Spec Required -->
                        </div>
                        <div class="grid grid-cols-3 gap-4">
                          <!-- Document Spec CPD -->
                          <div
                            class="group w-full md:full lg:w-full ml-2   shadow-md p-2 rounded-md"
                          >
                            <label
                              for="depName"
                              class="inline-block w-full text-md mb-2 text-primary-600 font-bold text-gray-500 transition-all duration-200 ease-in-out"
                              >Does it require CPD? (For renewal)
                            </label>

                            <input
                              class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                              type="checkbox"
                              value=""
                              id="checkboxDefault"
                              v-model="editData.isCpdCertificate"
                            />
                            <span class="ml-2">{{
                              editData.isCommonDocument ? "Yes" : "No"
                            }}</span>
                          </div>
                          <!-- Document Spec CPD -->
                          <!-- Document Spec CPD -->
                          <div
                            class="group w-full md:full lg:w-full ml-2   shadow-md p-2 rounded-md"
                          >
                            <label
                              for="depName"
                              class="inline-block w-full text-md mb-2 text-primary-600 font-bold text-gray-500 transition-all duration-200 ease-in-out"
                              >Is it a common document?</label
                            >

                            <input
                              class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                              type="checkbox"
                              value=""
                              id="checkboxDefault"
                              v-model="editData.isCommonDocument"
                            />
                            <span class="ml-2">{{
                              editData.isCommonDocument ? "Yes" : "No"
                            }}</span>
                          </div>
                          <!-- Document Spec CPD -->

                          <div
                            :class="
                              editData.status
                                ? 'group w-full md:full lg:w-full bg-green-200   shadow-md p-2 transition-all duration-300 ease-in-out rounded-md'
                                : 'group w-full md:full lg:w-full bg-red-300   shadow-md p-2 transition-all duration-300 ease-in-out rounded-md'
                            "
                          >
                            <label
                              for="depName"
                              class="inline-block w-full text-md mb-2 text-white font-bold text-gray-500 transition-all duration-200 ease-in-out"
                              >Status</label
                            >

                            <input
                              class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                              type="checkbox"
                              value=""
                              id="checkboxDefault"
                              v-model="editData.status"
                            />
                            <span
                              :class="
                                editData.status
                                  ? 'ml-2 text-white'
                                  : 'ml-2 text-white'
                              "
                              >{{
                                editData.status ? "Active" : "Inactive"
                              }}</span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div
          class="modal-footer p-2 flex justify-center p-2 border-t border-grey-100 rounded-b-md"
        >
          <button
            type="button"
            class="inline-block px-6 text-white bg-primary-700 font-medium text-xs leading-tight uppercase rounded hover:bg-white hover:text-primary-600 hover:border-primary-600 transition duration-150 ease-in-out"
            @click="updateDocumentSpec()"
          >
            <i class="fa fa-save"></i>
            Save
          </button>
          <button
            type="button"
            class="inline-block px-6 text-white bg-primary-700 font-medium text-xs leading-tight uppercase rounded hover:bg-white hover:text-primary-600 hover:border-primary-600 transition duration-150 ease-in-out"
            data-bs-dismiss="modal"
            @click="clearData()"
          >
            <i class="fa fa-times-circle"></i>
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, computed } from "vue";
import Loading from "vue3-loading-overlay";
import { useStore } from "vuex";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import { useToast } from "vue-toastification";
export default {
  components: { Loading },
  props: ["modalLookups", "editModalData"],
  setup(props) {
    const store = useStore();
    const toast = useToast();
    let isLoading = ref(false);

    let editData = computed(() =>
      props.editModalData
        ? props.editModalData.data
        : {
            appCategoryId: null,
            applicantTypeId: null,
            departmentId: null,
            documentTypeId: null,
            educationalLevelId: null,
            isCommonDocument: null,
            isCpdCertificate: null,
            isRequired: null,
            onlyFirstTimeUsers: null,
            parentDocument: "",
          }
    );
    let applicantType = ref([
      { name: "Ethiopian", id: 1 },
      { name: "Ethiopian From Abroad", id: 3 },
      { name: "Foreigner", id: 2 },
    ]);
    let applicationCategory = ref([
      { name: "New License", id: 1 },
      { name: "Renewal", id: 2 },
      { name: "Goodstanding", id: 3 },
    ]);
    let educationLevels = computed(() =>
      props.modalLookups ? props.modalLookups.educationLevels : {}
    );
    let departments = computed(() =>
      props.modalLookups ? props.modalLookups.departments : {}
    );

    let documentType = computed(() =>
      props.modalLookups ? props.modalLookups.documentType : {}
    );

    const updateDocumentSpec = () => {
      isLoading.value = true;
      store
        .dispatch("lookups/updateDocumentSpec", editData.value)
        .then((res) => {
          isLoading.value = false;
          if (res.data.status == "Success") {
            toast.success("Updated Successfully", {
              timeout: 5000,
              position: "bottom-center",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true,
            });
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          } else {
            toast.error(res.data.message, {
              timeout: 5000,
              position: "bottom-center",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true,
            });
          }
        });
    };
    return {
      isLoading,
      updateDocumentSpec,
      departments,
      editData,
      educationLevels,
      applicantType,
      applicationCategory,
      documentType,
    };
  },
};
</script>
 
