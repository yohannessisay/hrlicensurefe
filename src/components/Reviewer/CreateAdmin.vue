<template>
  <div>
    <ReviewerNavBar tab="createAdmin" />
    <div class="w-screen bg-lightBlueB-200 flex items-center justify-center">
      <div class="w-screen max-w-4xl mt-medium">
        <div
          class="flex flex-col mt-small w-full bg-white blue-box-shadow-light rounded"
        >
          <div class="mt-medium">
            <Title message="Create Admin User" />
          </div>
          <form
            class="mx-auto max-w-3xl w-full mt-10"
            @submit.prevent="registerAdmin"
          >
            <div class="flex">
              <div class="flex flex-col mb-medium w-1/2 mr-12">
                <label class="text-primary-700">First Name</label>
                <input
                  class="max-w-3xl"
                  type="text"
                  v-model="admin.firstName"
                />
                <span style="color: red" v-if="state.showErrorMessages">{{
                  state.validationErrors.firstName
                }}</span>
              </div>
              <div class="flex flex-col mb-medium w-1/2 mr-12">
                <label class="text-primary-700">Father's Name</label>
                <input
                  class="max-w-3xl"
                  type="text"
                  v-model="admin.fatherName"
                />
                <span style="color: red" v-if="state.showErrorMessages">{{
                  state.validationErrors.fatherName
                }}</span>
              </div>
            </div>
            <div class="flex">
              <div class="flex flex-col mb-medium w-1/2 mr-12">
                <label class="text-primary-700">Grandfather's Name</label>
                <input
                  class="max-w-3xl"
                  type="text"
                  v-model="admin.grandfatherName"
                />
                <span style="color: red" v-if="state.showErrorMessages">{{
                  state.validationErrors.grandfatherName
                }}</span>
              </div>
              <div class="flex flex-col mb-medium w-1/2 mr-12">
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
                <input
                  class="max-w-3xl"
                  type="text"
                  v-model="admin.phoneNumber"
                />
                <span style="color: red" v-if="state.showErrorMessages">{{
                  state.validationErrors.phoneNumber
                }}</span>
              </div>
              <div class="flex flex-col mb-medium w-1/2 mr-12">
                <label class="text-primary-700">Role</label>
                <select class="max-w-3xl" v-model="admin.roleId">
                  <option
                    v-for="role in state.roles"
                    v-bind:key="role.name"
                    v-bind:value="role.id"
                    :disabled="role.code == 'APP'"
                  >
                    {{ role.name }}
                  </option>
                </select>
                <span style="color: red" v-if="state.showErrorMessages">{{
                  state.validationErrors.role
                }}</span>
              </div>
            </div>
            <div class="flex mb-medium w-full mt-medium">
              <button
                class="mx-auto w-1/2 blue-with-light-blue-gradient"
                variant="block"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div v-if="message.showFlash">
    <FlashMessage message="Admin user registered Successful!" />
  </div>
  <div v-if="message.showErrorFlash">
    <ErrorFlashMessage message="Registering admin user Failed!" />
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import Title from "@/sharedComponents/TitleWithIllustration";
import ReviewerNavBar from "@/components/Reviewer/ReviewerNavBar";
import { useStore } from "vuex";
import FlashMessage from "@/sharedComponents/FlashMessage";
import ErrorFlashMessage from "@/sharedComponents/ErrorFlashMessage";
import { useRouter } from "vue-router";

export default {
  components: { ReviewerNavBar, Title, FlashMessage, ErrorFlashMessage },
  setup() {
    const store = useStore();
    const router = useRouter();

    let admin = {
      firstName: null,
      fatherName: null,
      grandfatherName: null,
      email: null,
      phoneNumber: null,
      roleId: null,
    };

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
        const rolesResponse = res.data.data;
        state.value.roles = rolesResponse;
      });
    };

    const registerAdmin = () => {
      const isValidated = validateForm(admin);

      if (isValidated) {
        state.value.validationErrors = isValidated;
        state.value.showErrorMessages = true;
      } else {
        state.value.showErrorMessages = false;
        admin.name =
          admin.firstName +
          " " +
          admin.fatherName +
          " " +
          admin.grandfatherName;

        store.dispatch("admin/registerAdmin", admin).then((res) => {
          if (res.data.status == "Success") {
            message.value.showFlash = !message.value.showFlash;

            setTimeout(() => {
              router.push({ path: "/review" });
            }, 3000);
          } else {
            message.value.showErrorFlash = !message.value.showErrorFlash;
            setTimeout(() => {}, 3000);
          }
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
      //   if (formData.phoneNumber && !isValidPhoneNumber(formData.phoneNumber)) {
      //     errors.phoneNumber = "Invalid Phone Number";
      //   };
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
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    };

    onMounted(() => {
      fetchRole();
    });

    return {
      state,
      fetchRole,
      registerAdmin,
      admin,
      validateForm,
      isValidEmail,
      message,
    };
  },
};
</script>
