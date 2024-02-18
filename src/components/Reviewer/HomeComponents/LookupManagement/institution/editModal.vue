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
      class="modal-dialog modal-dialog-centered modal-md relative w-auto pointer-events-none"
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
                    <h2 class="text-2xl font-bold">Edit Institution</h2>
                  </div>
                </div>

                <div class="grow-0 shrink-0 basis-auto w-full lg:w-full">
                  <form>
                    <div class="flex flex-wrap">
                      <div
                        class="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-full px-3 lg:px-6"
                      >
                        <div class="flex items-start">
                          <div class="grow ml-6">
                            <!-- Institution Department -->
                            <div class="group w-full md:full lg:w-full ml-4">
                              <label
                                for="depName"
                                class="inline-block w-full text-md mb-2 text-primary-600 font-bold text-gray-500 transition-all duration-200 ease-in-out"
                                >Institution Type
                              </label>

                              <div class="group w-full md:full lg:w-full">
                                <div class="relative flex items-center">
                                  <select
                                    class="form-select appearance-none block w-full px-6 mb-8 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    aria-label="Default select example"
                                    v-model="editData.TypeId"
                                  >
                                    <option
                                      v-for="type in modalLookups.types"
                                      :key="type.id"
                                      :value="type.id"
                                    >
                                      {{ type.name }}
                                    </option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div class="group w-full md:full lg:w-full ml-4">
                              <label
                                for="type"
                                class="inline-block w-full text-md mb-2 text-primary-600 font-bold text-gray-500 transition-all duration-200 ease-in-out"
                                >Institution Location</label
                              >
                              <div class="group w-full md:full lg:w-full">
                                <div class="relative flex items-center">
                                  <select
                                    class="form-select appearance-none block w-full px-6 mb-8 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    v-model="editData.isLocal"
                                  >
                                    <option
                                      v-for="type in [
                                        { name: 'Local', value: true },
                                        { name: 'Foreign', value: false },
                                      ]"
                                      :key="type"
                                      :value="type.value"
                                    >
                                      {{ type.name }}
                                    </option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <!-- Institution Department -->

                            <!-- Institution Name -->
                            <div class="group w-full md:full lg:w-full ml-4">
                              <label
                                for="depName"
                                class="inline-block w-full text-md mb-2 text-primary-600 font-bold text-gray-500 transition-all duration-200 ease-in-out"
                                >Institution Name</label
                              >
                              <div class="relative flex items-center">
                                <input
                                  id="depName"
                                  type="text"
                                  class="peer relative h-18 w-full rounded-sm pl-10 pr-4 outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:text-primary-600 focus:font-bold focus:drop-"
                                  required
                                  placeholder="Enter name"
                                  v-model="editData.Name"
                                />

                                <i
                                  class="fa fa-text-width ml-4 absolute left-auto text-primary-600"
                                ></i>
                              </div>

                              <small
                                v-if="showInstitutionNameError"
                                class="text-red-300"
                                >{{ institutionNameError }}</small
                              >
                            </div>
                            <!--Institution Name -->

                            <div class="form-group ml-5 mb-2 mt-8">
                              <label
                                for=""
                                class="inline-block w-full text-md text-primary-600 font-bold text-gray-500 transition-all duration-200 ease-in-out mb-2"
                                >Institution Status</label
                              >
                              <div class="toggle slim colour">
                                <input
                                  v-model="editData.finalStat"
                                  id="isVerified"
                                  class="toggle-checkbox hidden cursor-pointer"
                                  type="checkbox"
                                  :checked="editData?.finalStat"
                                />
                                <label
                                  for="isVerified"
                                  class="toggle-label block w-12 h-4 rounded-full transition-color duration-150 ease-out"
                                ></label>
                                <span
                                  :class="
                                    editData && editData.finalStat == true
                                      ? 'text-green-200 font-bold'
                                      : 'text-yellow-300 font-bold'
                                  "
                                >
                                  {{ editData.finalStat ? "Active" : "Inactive" }}
                                </span>
                              </div>
                            </div>
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
            :class="
              institutionNameFilled
                ? 'inline-block px-6 text-white bg-primary-700 font-medium text-xs leading-tight uppercase  rounded   hover:bg-white hover:text-primary-600 hover:border-primary-600 transition duration-150 ease-in-out'
                : 'inline-block px-6 text-white bg-primary-700 font-medium text-xs leading-tight uppercase  rounded   hover:bg-white hover:text-primary-600 hover:border-primary-600 transition duration-150 ease-in-out pointer-events-none opacity-75'
            "
            @click="saveInstitution()"
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
    let institutionName = ref("");
    let showInstitutionNameError = ref(false);
    let institutionNameError = ref("");
    let institutionNameFilled = ref(true);
    let saveData = ref({});
    let selectedType = ref("");
    let selectedLocation = ref("");
    let editData = computed(() =>
      props.editModalData ? props.editModalData : {}
    );
    const clearData = () => {
      selectedType.value = "";
    };
    const saveInstitution = () => {
      showInstitutionNameError.value = false;
      saveData.value = {
        id: editData?.value?.data.id,
        name: editData?.value?.Name,
        institutionTypeId: editData?.value?.TypeId,
        isLocal: editData?.value?.isLocal,
        status: editData?.value?.finalStat,
      };
      store.dispatch("lookups/updateInstitute", saveData.value).then((res) => {
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
      clearData,
      saveInstitution,
      institutionNameFilled,
      showInstitutionNameError,
      institutionName,
      institutionNameError,
      editData,
      selectedType,
      selectedLocation,
    };
  },
};
</script>
