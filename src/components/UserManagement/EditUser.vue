<template>
  <div
    class="card-wrapper w-full p-large flex flex-col justify-center items-center  mt-5"
  >
    <div class="float-right">
      <button
        class="text-right mr-2 mt-2 text-primary-600 "
        @click="$emit('closeModal', false)"
        variant="rounded"
      >
        <i class="fa fa-close "></i>
      </button>
    </div>
    <div class="bg-white blue-box-shadow-light rounded  p-5">
      <div class="mt-medium">
        <Title message="Edit Admin User" />
      </div>
      <form class="mx-auto  w-full mt-10" @submit.prevent="registerAdmin">
        <div class="flex">
          <div class="flex flex-col mb-medium w-1/2 mr-12">
            <label class="text-primary-700">Full Name</label>
            <input class="max-w-3xl" type="text" v-model="admin.name" />
          </div>

          <div class="flex flex-col mb-medium w-1/2 ">
            <label class="text-primary-700">Email</label>
            <input class="max-w-3xl" type="text" v-model="admin.email" />
            <span style="color: red" v-if="state.showErrorMessages">{{
              state.validationErrors.email
            }}</span>
          </div>
        </div>
        <div class="flex">
          <div class="flex flex-col mb-medium w-1/2 mr-12">
            <label class="text-primary-700">Phone Number</label>
            <input class="max-w-3xl" type="text" v-model="admin.phoneNumber" />
            <span style="color: red" v-if="state.showErrorMessages">{{
              state.validationErrors.phoneNumber
            }}</span>
          </div>
          <div class="flex flex-col mb-medium w-1/2 ">
            <label class="text-primary-700">Role</label>
            <select class="max-w-3xl" v-model="admin.roleId">
              <option
                v-for="role in state.roles"
                v-bind:key="role.name"
                v-bind:value="role.id"
              >
                {{ role.name }}
              </option>
            </select>
            <span style="color: red" v-if="state.showErrorMessages">{{
              state.validationErrors.role
            }}</span>
          </div>
        </div>
        <div class="flex">
          <div class="flex flex-col mb-medium w-1/2 mr-12">
            <label class="text-primary-700">Expert Type</label>
            <select
              class="max-w-3xl"
              v-model="admin.expertLevelId"
              @change="selectedExpertLevel"
            >
              <option
                v-for="expertLevel in expertLevels"
                v-bind:key="expertLevel.name"
                v-bind:value="expertLevel.id"
              >
                {{ expertLevel.name }}
              </option>
            </select>
            <span style="color: red" v-if="state.showErrorMessages">{{
              state.validationErrors.expertLevel
            }}</span>
          </div>
          <div
            class="flex flex-col mb-medium w-1/2 "
            v-show="admin.expertLevelId == 4"
          >
            <label class="text-primary-700">Region</label>
            <div>
              <select
                class="max-w-3xl"
                v-model="admin.regionId"
                @change="selectedRegion"
              >
                <option
                  v-for="region in regions"
                  v-bind:key="region.name"
                  v-bind:value="region.id"
                >
                  {{ region.name }}
                </option>
              </select>
            </div>
            <span style="color: red" v-if="state.showErrorMessages">{{
              state.validationErrors.region
            }}</span>
          </div>
              <div
            class="flex flex-col mb-medium w-1/2 "
           
          >
            <label class="text-primary-700">Is Active</label>
            <div>
             <input type="checkbox" id="checkbox" v-model="admin.isActive">

            </div>
          
          </div>
        </div>
        <div
          v-if="showLoading"
          class="flex justify-center justify-items-center mt-0"
        >
          <Spinner />
        </div>
        <div class="flex mb-medium w-full mt-medium" v-if="!showButtons">
          <button
            class="mx-auto w-1/2  text-xl hover:bg-grey-200"
            variant="block"
            @click="updateUser()"
          >
           update User
          </button>
        </div>
      </form>
    </div>
  </div>
  <div v-if="message.showFlash">
    <FlashMessage message="Admin user registered Successful!" />
  </div>
  <div v-if="message.showErrorFlash">
    <ErrorFlashMessage :message="errorMessage" />
  </div>
</template>

<script>
import {ref, onMounted} from "vue";
import Title from "@/sharedComponents/TitleWithIllustration";
import ReviewerNavBar from "@/components/Reviewer/ReviewerNavBar";
import {useStore} from "vuex";
import FlashMessage from "@/sharedComponents/FlashMessage";
import ErrorFlashMessage from "@/sharedComponents/ErrorFlashMessage";
import {useRouter} from "vue-router";

import Spinner from "@/sharedComponents/Spinner";

export default {
  components: {
    ReviewerNavBar,
    Title,
    FlashMessage,
    ErrorFlashMessage,
    Spinner,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    const store = useStore();
    const router = useRouter();

    const adminExpertId = JSON.parse(localStorage.getItem("allAdminData"))
      .expertLevelId;
    let errorMessage = ref("");

    let admin = {
      id: null,
      name: null,
      email: null,
      phoneNumber: null,
      roleId: null,
      expertLevelId: null,
      regionId: null,
      isActive: null,
    };

    let showLoading = ref(false);
    let showButtons = ref(false);

    let expertLevels = ref([
      {
        id: null,
        name: null,
        code: null,
      },
    ]);

    let regions = ref([
      {
        id: null,
        name: null,
        code: null,
      },
    ]);

    let state = ref({
      roles: [],
      showErrorMessages: false,
      validationErrors: {},
    });

    let message = ref({
      showFlash: false,
      showErrorFlash: false,
    });
    const setEditData = () => {
      let editData = props.data;
      admin.id = editData.id;
      admin.name = editData.name;
      admin.phoneNumber = editData.phoneNumber;
      admin.email = editData.email;
      admin.roleId = editData.roleId;
      admin.expertLevelId = editData.expertLevelId;
      admin.isActive = editData.isActive;
      if (editData.expertLevel?.code == "REG") {
        admin.regionId = editData.regionId;
      }
    };
    const updateUser = () => {
        store.dispatch("admin/updateAdmin",admin).then((res) => {
            if(res.data.status == "Success")
            {
                message.value.showFlash = true;
                window.location.reload();
            }
            else{
                message.value.showErrorFlash = true;
            }
            //window.location.reload();
        });

    };
    const fetchRole = () => {
      store.dispatch("admin/getRole").then((res) => {
        const rolesResponse = res.data.data.filter((data) => {
          return data.code !== "APP";
        });
        state.value.roles = rolesResponse;
      });
    };

    const fetchRegions = () => {
      store.dispatch("admin/getRegions", admin).then((res) => {
        regions.value = res.data.data;
      });
    };

    const fetchExpertLevels = () => {
      store.dispatch("admin/getExpertLevels").then((res) => {
        expertLevels.value = res.data.data;
      });
    };

    const selectedExpertLevel = () => {
      admin.expertLevelId = expertLevels.value.id;
    };

    const selectedRegion = () => {
      admin.regionId = regions.value.id;
    };



    const validateForm = (formData) => {
      const errors = {};
      if (formData.email && !isValidEmail(formData.email)) {
        errors.email = "Invalid Email";
      }

      if (!formData.expertLevelId && adminExpertId == 3)
        errors.expertLevel = "Expert Level is required";
      if (!formData.regionId && formData.expertLevelId == 4)
        errors.region = "Region is required";
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
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    };

    onMounted(() => {
      fetchRole();
      fetchExpertLevels();
      fetchRegions();
      setEditData();
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
      validateForm,
      isValidEmail,
      selectedExpertLevel,
      selectedRegion,
      showButtons,
      updateUser  
    };
  },
};
</script>
