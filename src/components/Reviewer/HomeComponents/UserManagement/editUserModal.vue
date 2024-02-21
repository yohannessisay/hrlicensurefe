<template>
  <!-- Modal -->
  <div
    class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
    id="editUser"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="editUserLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg relative w-auto pointer-events-none">
      <div
        class="modal-content border-none relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"
      >
        <div
          class="modal-header flex flex-shrink-0 justify-end p-2 rounded-t-md"
        >
          <button
            type="button"
            class="px-6 text-white bg-primary-600 hover:text-primary-600 hover:border font-medium text-xs leading-tight uppercase rounded hover:border-primary-600 hover:bg-purple-700 hover: focus:bg-purple-700 focus: focus:outline-none focus:ring-0 active:bg-purple-800 active: transition duration-150 ease-in-out"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fa fa-close fa-2x"></i>
          </button>
        </div>

        <div class="modal-body relative p-4">
          <div class="container px-6 mx-auto">
            <section class="text-gray-800">
              <div class="flex justify-center">
                <div class="text-center lg:max-w-3xl md:max-w-full">
                  <h2 class="text-2xl font-bold mb-8 px-6">
                    {{
                      !isUserManager ? "View Admin Details" : "Edit Admin User"
                    }}
                  </h2>
                </div>
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
                          <label class="ml-4 text-primary-600 font-bold"
                            >First Name</label
                          >
                          <input
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-4 mt-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            type="text"
                            v-model="admin.firstName"
                            :disabled="!isUserManager"
                          />
                          <span
                            style="color: red"
                            v-if="state.showErrorMessages"
                            >{{ state.validationErrors.firstName }}</span
                          >
                        </div>
                        <div class="flex flex-col mb-medium w-1/2 mr-12">
                          <label class="ml-4 text-primary-600 font-bold"
                            >Father's Name</label
                          >
                          <input
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-4 mt-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            type="text"
                            v-model="admin.fatherName"
                            :disabled="!isUserManager"
                          />
                          <span
                            style="color: red"
                            v-if="state.showErrorMessages"
                            >{{ state.validationErrors.fatherName }}</span
                          >
                        </div>
                      </div>
                      <div class="flex">
                        <div class="flex flex-col mb-medium w-1/2 mr-12">
                          <label class="ml-4 text-primary-600 font-bold"
                            >Grandfather's Name</label
                          >
                          <input
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-4 mt-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            type="text"
                            v-model="admin.grandfatherName"
                            :disabled="!isUserManager"
                          />
                          <span
                            style="color: red"
                            v-if="state.showErrorMessages"
                            >{{ state.validationErrors.grandfatherName }}</span
                          >
                        </div>
                        <div class="flex flex-col mb-medium w-1/2 mr-12">
                          <label class="ml-4 text-primary-600 font-bold"
                            >Email</label
                          >
                          <input
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-4 mt-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            type="text"
                            v-model="admin.email"
                            :disabled="!isUserManager"
                          />
                          <span
                            style="color: red"
                            v-if="state.showErrorMessages"
                            >{{ state.validationErrors.email }}</span
                          >
                        </div>
                      </div>
                      <div class="flex">
                        <div class="flex flex-col mb-medium w-1/2 mr-12">
                          <label class="ml-4 text-primary-600 font-bold"
                            >Phone Number</label
                          >
                          <input
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-4 mt-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            type="text"
                            v-model="admin.phoneNumber"
                            :disabled="!isUserManager"
                          />
                          <span
                            style="color: red"
                            v-if="state.showErrorMessages"
                            >{{ state.validationErrors.phoneNumber }}</span
                          >
                        </div>
                        <div class="flex flex-col mb-medium w-1/2 mr-12">
                          <label class="ml-4 text-primary-600 font-bold"
                            >Role</label
                          >

                          <select
                            class="form-control block w-full px-3 py-1 h-full text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-4 mt-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            v-model="admin.roleId"
                            :disabled="!isUserManager"
                          >
                            <option
                              selected
                              :value="
                                state &&
                                state.roles &&
                                state.roles.find(
                                  (role) => role.id == admin.roleId
                                )
                                  ? state.roles.find(
                                      (role) => role.id == admin.roleId
                                    ).id
                                  : ''
                              "
                            >
                              {{
                                state &&
                                state.roles &&
                                state.roles.find(
                                  (role) => role.id == admin.roleId
                                )
                                  ? state.roles.find(
                                      (role) => role.id == admin.roleId
                                    ).name
                                  : ""
                              }}
                            </option>
                            <option
                              v-for="role in state.roles"
                              :key="role.name"
                              :value="role.id"
                            >
                              {{ role.name }}
                            </option>
                          </select>
                          <span
                            style="color: red"
                            v-if="state.showErrorMessages"
                            >{{ state.validationErrors.role }}</span
                          >
                        </div>
                      </div>
                      <div class="flex" v-if="adminRole.code == 'FED'">
                        <div class="flex flex-col mb-medium w-1/2 mr-12">
                          <label class="ml-4 text-primary-600 font-bold"
                            >Expert Type</label
                          >

                          <select
                            class="form-control block w-full px-3 ml-4 py-1 h-12 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mt-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            v-model="admin.expertLevel"
                            @change="selectedExpertLevel()"
                            :disabled="!isUserManager"
                          >
                            <option
                              v-for="expertLevel in expertLevels"
                              :key="expertLevel.id"
                              :value="expertLevel"
                            >
                              {{ expertLevel.name }}
                            </option>
                          </select>
                          <span
                            style="color: red"
                            v-if="state.showErrorMessages"
                            >{{ state.validationErrors.expertLevel }}</span
                          >
                        </div>
                        <span  >
                          <label class="text-primary-600 font-bold ml-4"
                            >Region</label
                          >
                          <div>
                            <select
                              class="form-control block w-full px-3 ml-4 py-1 h-12 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mt-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              v-model="admin.region"
                              @change="selectedRegion()"
                              :disabled="!isUserManager"
                            >
                              <option
                                v-for="region in regions"
                                :key="region.id"
                                :value="region"
                              >
                                {{ region.name }}
                              </option>
                            </select>
                          </div>
                          <span
                            style="color: red"
                            v-if="state.showErrorMessages"
                            >{{ state.validationErrors.region }}</span
                          >
                        </span>
                        <span
                          v-show="
                            showRegion == 4 &&
                            admin.region &&
                            admin.region.code == 'AMH'
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

                      <div
                        class="flex justify-center ml-4"
                        v-if="isUserManager"
                      >
                        <button
                          class="inline-block px-6 text-white bg-primary-700 font-medium text-xs leading-tight uppercase border rounded hover:bg-white hover:text-primary-600 transition duration-150 ease-in-out"
                          @click="saveAdmin()"
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div
          class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end border-t border-grey-100 rounded-b-md"
        >
          <button
            type="button"
            class="inline-block px-6 text-white bg-primary-700 font-medium text-xs leading-tight uppercase border rounded hover:bg-white hover:text-primary-600 transition duration-150 ease-in-out"
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
import { ref, onMounted, watch } from "vue";
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import { useToast } from "vue-toastification";

export default {
  components: {
    Loading,
  },
  props: ["modalData"],
  setup(props) {
    const store = useStore();
    let isLoading = ref(false);
    const toast = useToast();
    const adminExpertId = JSON.parse(
      localStorage.getItem("allAdminData")
    ).expertLevelId;
    const isUserManager =
      localStorage.getItem("role") == "UM" ||
      localStorage.getItem("role") == "SA";
    const adminRole = JSON.parse(localStorage.getItem("allAdminData")).role;
    let errorMessage = ref("");
    let admin = ref({
      firstName: "",
      fatherName: "",
      grandfatherName: "",
      email: "",
      phoneNumber: "",
      roleId: "",
      expertLevel: "",
      region: "",
      zoneId: null,
      isActive: true,
    });

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
      if (admin.value.expertLevel.code == "FED") {
        showRegion.value == 3;
        admin.value.regionId = null;
        admin.value.zoneId = null;
      } else {
        showRegion.value = 4;
      }
    };

    const selectedRegion = () => {
      admin.value.zoneId = null;
      if (admin.value.region.code == "AMH") {
        store
          .dispatch("renewal/getZones", admin.value.region.id)
          .then((res) => {
            zones.value = res.data.data;
          });
      }
    };

    const saveAdmin = () => {
      isLoading.value = true;
      let isValidated = validateForm(admin.value);
      showLoading.value = true;
      showButtons.value = true;
      if (isValidated) {
        state.value.validationErrors = isValidated;
        state.value.showErrorMessages = true;
        showButtons.value = false;
      } else {
        let editData = {};
        editData.id = admin.value.id;
        editData.name =
          admin.value.firstName +
          " " +
          admin.value.fatherName +
          " " +
          admin.value.grandfatherName;
        editData.phoneNumber = admin.value.phoneNumber;
        editData.email = admin.value.email;
        editData.roleId = admin.value.roleId;
        editData.expertLevelId = admin.value.expertLevel.id;
        editData.isActive = admin.value.isActive;
        admin.value.region
          ? (editData.regionId = admin.value.region.id)
          : (editData.regionId = null);

        store
          .dispatch("admin/updateAdmin", editData)
          .then((res) => {
            showLoading.value = false;
            if (res.data.status == "Success") {
              toast.success("Admin edited Successfully", {
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
            } else {
              toast.error(res.data.message.name, {
                timeout: 5000,
                position: "bottom-center",
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                icon: true,
              });
              isLoading.value = false;
            }
          })
          .catch(() => {
            isLoading.value = false;
            toast.error("Error , please try again after few minutes", {
              timeout: 5000,
              position: "bottom-center",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true,
            });
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

      if (!formData.expertLevel.id)
        errors.expertLevel = "Expert Level is required";
      if (
        formData.region &&
        !formData.region.id &&
        formData.expertLevel.id == 4
      )
        errors.region = "Region is required";
      if (
        (formData.region &&
          !formData.region.id &&
          formData.expertLevel.id == 4 &&
          region.value.code == "AMH" &&
          formData.zoneId == null) ||
        (formData.region &&
          formData.region.id &&
          formData.expertLevel.id == 4 &&
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
        isLoading.value = false;
        return errors;
      }
    };

    const isValidEmail = (email) => {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    };
    watch(props.modalData, () => {
      admin.value.id = props.modalData.data ? props.modalData.data.id : "";
      admin.value.firstName = props.modalData.data
        ? props.modalData.data.name.split(" ")[0]
        : "";
      admin.value.fatherName = props.modalData.data
        ? props.modalData.data.name.split(" ")[1]
        : "";
      admin.value.grandfatherName = props.modalData.data
        ? props.modalData.data.name.split(" ")[2]
        : "";
      admin.value.email = props.modalData.data
        ? props.modalData.data.email
        : "";
      admin.value.phoneNumber = props.modalData.data
        ? props.modalData.data.phoneNumber
        : "";
      admin.value.roleId = props.modalData.data
        ? props.modalData.data.roleId
        : "";
      admin.value.expertLevel = props.modalData.data
        ? props.modalData.data.expertLevel
        : "";
      admin.value.region = props.modalData.data
        ? props.modalData.data.region
        : "";
      admin.value.zoneId = props.modalData.data
        ? props.modalData.data.zoneId
        : "";
      showRegion.value = props.modalData.data
        ? props.modalData.data.expertLevelId
        : "";
    });
    onMounted(() => {
      fetchRole();
      fetchExpertLevels();
      fetchRegions();
    });

    return {
      state,
      showRegion,
      message,
      errorMessage,
      expertLevels,
      regions,
      showLoading,
      admin,
      adminExpertId,
      fetchRole,
      saveAdmin,
      validateForm,
      isValidEmail,
      selectedExpertLevel,
      selectedRegion,
      showButtons,
      isUserManager,
      isLoading,
      region,
      zones,
      zone,
      expertLevel,
      adminRole,
    };
  },
};
</script>
<style scoped></style>
