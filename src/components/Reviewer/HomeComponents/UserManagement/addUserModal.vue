<template>
  <!-- Modal -->
  <div
    class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
    id="addUser"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="addUserLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg relative w-auto pointer-events-none">
      <div
        class="modal-content border-none relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"
      >
        <div
          class="modal-header shadow-md flex flex-shrink-0 justify-end p-2 rounded-t-md"
        >
          <button
            type="button"
            class="px-6 text-white bg-primary-600 hover:text-primary-600 font-medium text-xs leading-tight uppercase rounded hover:border-primary-600 transition duration-150 ease-in-out"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fa fa-close fa-2x"></i>
          </button>
        </div>

        <div class="modal-body relative p-4">
          <div class="container px-6">
            <section class="text-gray-800">
              <div class="flex justify-center">
                <h2 class="text-3xl font-bold px-6">Create User</h2>
              </div>

              <div class="flex justify-center">
                <div class="block rounded-lg bg-white max-w-full">
                  <div class="vld-parent">
                    <loading
                      :active="isLoading"
                      :is-full-page="false"
                      :color="'#2F639D'"
                      :opacity="0.7"
                    ></loading>

                    <form
                      class="w-full mt-10 p-4"
                      @submit.prevent="registerAdmin"
                    >
                      <div class="flex w-full">
                        <div class="flex flex-col w-1/2 mr-12">
                          <label class="ml-4 text-primary-700 font-bold"
                            >First Name</label
                          >
                          <input
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-4 mt-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            type="text"
                            v-model="admin.firstName"
                          />
                          <span
                            class="text-red-300 ml-4 text-xs"
                            v-if="state.showErrorMessages"
                            >{{ state.validationErrors.firstName }}</span
                          >
                        </div>
                        <div class="flex flex-col mb-medium w-1/2 mr-12">
                          <label class="ml-4 text-primary-700 font-bold"
                            >Father's Name</label
                          >
                          <input
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-4 mt-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            type="text"
                            v-model="admin.fatherName"
                          />
                          <span
                            class="text-red-300 ml-4 text-xs"
                            v-if="state.showErrorMessages"
                            >{{ state.validationErrors.fatherName }}</span
                          >
                        </div>
                      </div>
                      <div class="flex">
                        <div class="flex flex-col mb-medium w-1/2 mr-12">
                          <label class="ml-4 text-primary-700 font-bold"
                            >Grandfather's Name</label
                          >
                          <input
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-4 mt-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            type="text"
                            v-model="admin.grandfatherName"
                          />
                          <span
                            class="text-red-300 ml-4 text-xs"
                            v-if="state.showErrorMessages"
                            >{{ state.validationErrors.grandfatherName }}</span
                          >
                        </div>
                        <div class="flex flex-col mb-medium w-1/2 mr-12">
                          <label class="ml-4 text-primary-700 font-bold"
                            >Email</label
                          >
                          <input
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-4 mt-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            type="text"
                            v-model="admin.email"
                          />
                          <span
                            class="text-red-300 ml-4 text-xs"
                            v-if="state.showErrorMessages"
                            >{{ state.validationErrors.email }}</span
                          >
                        </div>
                      </div>
                      <div class="flex">
                        <div class="flex flex-col mb-medium w-1/2 mr-12">
                          <label class="ml-4 text-primary-700 font-bold"
                            >Phone Number</label
                          >
                          <input
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-4 mt-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            type="text"
                            v-model="admin.phoneNumber"
                          />
                          <span
                            class="text-red-300 ml-4 text-xs"
                            v-if="state.showErrorMessages"
                            >{{ state.validationErrors.phoneNumber }}</span
                          >
                        </div>
                        <div class="flex flex-col mb-medium w-1/2 mr-12">
                          <label class="ml-4 text-primary-700 font-bold"
                            >Role</label
                          >
                          <select
                            class="form-control block w-full px-3 py-1 h-full text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-4 mt-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            v-model="admin.roleId"
                          >
                            <option
                              v-for="role in state.roles"
                              :key="role.name"
                              :value="role.id"
                            >
                              {{ role.name }}
                            </option>
                          </select>
                          <span
                            class="text-red-300 ml-4 text-xs"
                            v-if="state.showErrorMessages"
                            >{{ state.validationErrors.role }}</span
                          >
                        </div>
                      </div>
                      <div class="flex">
                        <div
                          class="flex flex-col mb-medium w-1/2 mr-12"
                          v-if="adminExpertId == 3"
                        >
                          <label class="ml-4 text-primary-700 font-bold"
                            >Expert Type</label
                          >
                          <select
                            class="form-control block w-full px-3 py-1 h-12 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-4 mt-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            v-model="expertLevel"
                            @change="selectedExpertLevel"
                          >
                            <option
                              v-for="expertLevel in expertLevels"
                              :key="expertLevel.name"
                              :value="expertLevel"
                            >
                              {{ expertLevel.name }}
                            </option>
                          </select>
                          <span
                            class="text-red-300 ml-4 text-xs"
                            v-if="state.showErrorMessages"
                            >{{ state.validationErrors.expertLevel }}</span
                          >
                        </div>
                        <span v-show="expertLevel.id == 4">
                          <label class="">Region</label>
                          <div>
                            <select
                              class="form-control block w-full px-3 py-1 h-12 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mt-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              v-model="region"
                              @change="selectedRegion"
                            >
                              <option
                                v-for="region in regions"
                                :key="region.name"
                                :value="region"
                              >
                                {{ region.name }}
                              </option>
                            </select>
                          </div>
                          <span
                            class="text-red-300 ml-4 text-xs"
                            v-if="state.showErrorMessages"
                            >{{ state.validationErrors.region }}</span
                          >
                        </span>

                        <span
                          v-show="
                            expertLevel.id == 4 &&
                            region &&
                            region.code == 'AMH'
                          "
                          class="mr-2 ml-2"
                        >
                          <label class="ml-2">Zone</label>
                          <div>
                            <select
                              class="form-control block w-full h-12 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out ml-4 mt-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              v-model="admin.zoneId"
                            >
                              <option
                                v-for="zone in zones"
                                :key="zone.id"
                                :value="zone.id"
                              >
                                {{ zone.name }}
                              </option>
                            </select>
                            <span
                              class="text-red-300 ml-4 text-xs"
                              v-if="state.showErrorMessages"
                              >{{ state.validationErrors.zone }}</span
                            >
                          </div>
                        </span>
                      </div>

                      <div class="flex justify-center ml-4">
                        <button
                          type="button"
                          class="inline-block px-6 text-white bg-yellow-300 font-medium text-xs leading-tight uppercase border rounded hover:bg-white hover:text-primary-600 transition duration-150 ease-in-out"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          class="inline-block px-6 text-white bg-primary-700 font-medium text-xs leading-tight uppercase border rounded hover:bg-white hover:text-primary-600 transition duration-150 ease-in-out"
                        >
                          Create User
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { ref, onMounted } from "vue";
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import { useToast } from "vue-toastification";

export default {
  components: {
    Loading,
  },

  setup() {
    const store = useStore();
    let isLoading = ref(false);
    const toast = useToast();
    const adminExpertId = JSON.parse(
      localStorage.getItem("allAdminData")
    ).expertLevelId;
    let errorMessage = ref("");
    const adminRole = JSON.parse(localStorage.getItem("allAdminData")).role;
    let admin = {
      firstName: null,
      fatherName: null,
      grandfatherName: null,
      email: null,
      phoneNumber: null,
      roleId: null,
      expertLevelId: adminExpertId,
      regionId: JSON.parse(localStorage.getItem("allAdminData")).regionId,
      zoneId: null,
      password: "password1",
      isActive: true,
    };

    let showLoading = ref(false);
    let showButtons = ref(false);
    let expertLevels = ref([]);
    let expertLevel = ref([]);
    let regions = ref([]);
    let region = ref([]);
    let zones = ref([]);
    let zone = ref([]);

    let state = ref({
      roles: [],
      showErrorMessages: false,
      validationErrors: {},
    });

    let message = ref({
      showFlash: false,
      showErrorFlash: false,
    });

    const fetchRole = () => {
      store.dispatch("admin/getRole").then((res) => {
        if (adminRole && adminRole.code == "SA") {
          state.value.roles = res.data.data.filter((data) => {
            return data.code !== "APP";
          });
        } else {
          state.value.roles = res.data.data.filter((data) => {
            return data.code !== "APP" && data.code !== "SA";
          });
        }
      });
    };

    const fetchRegions = () => {
      store.dispatch("admin/getRegions").then((res) => {
        regions.value = res.data.data;
      });
    };

    const fetchExpertLevels = () => {
      store.dispatch("admin/getExpertLevels").then((res) => {
        expertLevels.value = res.data.data;
      });
    };

    let showRegion = ref("");
    const selectedExpertLevel = () => {
      if (expertLevel.value.code == "FED") {
        admin.regionId = null;
        admin.expertLevelId = expertLevel.value.id;
      } else {
        showRegion.value = 4;
        admin.expertLevelId = expertLevel.value.id;
      }
    };
    const selectedRegion = () => {
      admin.zoneId = null;
      admin.regionId = region.value.id;
      if (region.value.code == "AMH") {
        store.dispatch("renewal/getZones", region.value.id).then((res) => {
          zones.value = res.data.data;
        });
      }
    };

    const registerAdmin = () => {
      let isValidated = validateForm(admin);

      showLoading.value = true;
      showButtons.value = true;
      isLoading.value = true;
      if (isValidated) {
        state.value.validationErrors = isValidated;
        state.value.showErrorMessages = true;
        showButtons.value = false;
      } else {
        state.value.showErrorMessages = false;
        admin.name =
          admin.firstName +
          " " +
          admin.fatherName +
          " " +
          admin.grandfatherName;

        admin.email = admin.email.toLowerCase();

        store
          .dispatch("admin/registerAdmin", admin)
          .then((res) => {
            showLoading.value = false;
            if (res.data.status == "Success") {
              toast.success("User added Successfully", {
                timeout: 5000,
                position: "bottom-center",
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                icon: true,
              });
              isLoading.value = false;

              setTimeout(() => {
                window.location.reload();
              }, 1000);
            } else if (res.data.status == "Error") {
              toast.error(res.data.message, {
                timeout: 5000,
                position: "bottom-center",
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                icon: true,
              });
              isLoading.value = false;

              // setTimeout(() => {
              //   window.location.reload();
              // }, 2000);
            }
          })
          .catch(() => {
            isLoading.value = false;
            toast.error(
              "Error regarding server, please try again after few minutes",
              {
                timeout: 5000,
                position: "bottom-center",
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                icon: true,
              }
            );

            setTimeout(() => {
              window.location.reload();
            }, 3000);
          });
      }
    };

    const validateForm = (formData) => {
      const errors = {};
      if (!formData.email) errors.email = "Email is Required";
      if (!formData.phoneNumber)
        errors.phoneNumber = "Phone Number is Required";
      if (formData.email && !isValidEmail(formData.email)) {
        errors.email = "Invalid Email";
      }
      if (!formData.expertLevelId)
        errors.expertLevel = "Expert Level is required";
      if (!formData.regionId && formData.expertLevelId == 4)
        errors.region = "Region is required";
      if (
        (!formData.regionId &&
          formData.expertLevelId == 4 &&
          region.value.code == "AMH" &&
          formData.zoneId == null) ||
        (formData.regionId &&
          formData.expertLevelId == 4 &&
          region.value.code == "AMH" &&
          formData.zoneId == null)
      )
        errors.zone = "Zone is required";
      if (!formData.firstName) errors.firstName = "First name is Required";
      if (!formData.fatherName) errors.fatherName = "Father name is Required";
      if (!formData.grandfatherName)
        errors.grandfatherName = "Grandfather name is Required";
      if (!formData.roleId) errors.role = "Role is Required";

      if (
        errors &&
        Object.keys(errors).length === 0 &&
        errors.constructor === Object
      ) {
        return null;
      } else {
        return errors;
      }
    };

    const isValidEmail = (email) => {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    };

    onMounted(() => {
      fetchRole();
      fetchExpertLevels();
      fetchRegions();
    });

    return {
      state,
      message,
      errorMessage,
      expertLevels,
      regions,
      showLoading,
      admin,
      adminExpertId,
      fetchRole,
      registerAdmin,
      validateForm,
      isValidEmail,
      selectedExpertLevel,
      selectedRegion,
      showButtons,
      isLoading,
      region,
      zones,
      zone,
      expertLevel,
    };
  },
};
</script>
