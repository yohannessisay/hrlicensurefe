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
    id="addRequest"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="addRequestLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-md relative w-auto pointer-events-none">
      <div
        class="
          modal-content
          border-none
          shadow-lg
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
            items-center
            justify-between
            p-2
            rounded-t-md
          "
        >
          <button
            type="button"
            class="btn-close border-none rounded-lg hover:text-primary-400"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <div class="modal-body relative p-4">
          <div class="container px-6 mx-auto">
            <section class="text-gray-800">
              <div class="flex justify-center">
                <div class="text-center lg:max-w-3xl md:max-w-xl">
                  <h2 class="text-2xl font-bold mb-8 px-6">
                    Add A Verification Request
                  </h2>
                </div>
              </div>

              <div class="flex justify-center">
                <div class="block p-6 rounded-lg shadow-md bg-white max-w-md">
                  <div class="vld-parent">
                    <loading
                      :active="isLoading"
                      :is-full-page="false"
                      :color="'#2F639D'"
                      :opacity="0.7"
                    ></loading>

                    <div class="form-group mb-6">
                      <label for="users" class="ml-4">Select Users</label>
                      <input
                        type="text"
                        @keyup="showOptions = true"
                        v-model="assignedUser.name"
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
                          m-4
                          mt-0
                          focus:text-gray-700
                          focus:bg-white
                          focus:border-blue-600
                          focus:outline-none
                        "
                        id="users"
                        placeholder="Users"
                      />
                      <div
                        v-show="resultQuery().length && showOptions"
                        class="
                          w-full
                          bg-white
                          border border-gray-300
                          mt-2
                          ml-1
                          max-height-12
                          overflow-hidden overflow-y-scroll
                          rounded-lg
                          shadow-lg
                          text-left
                          dropdown-menu
                        "
                        style="height: 148px; border: none"
                      >
                        <ul class="py-1">
                          <li
                            v-for="value in resultQuery()"
                            :key="value.id"
                            @click="setInput(value)"
                            class="
                              dropdown-toggle
                              px-4
                              py-2
                              cursor-pointer
                              hover:bg-primary-700 hover:text-white
                            "
                          >
                            {{ value.name }}&nbsp;{{ value.fatherName }}&nbsp;{{
                              value.grandFatherName
                            }}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="form-group mb-6">
                      <label for="region" class="ml-4">Select Region</label>
                      <select
                        class="
                          m-4
                          mt-0
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
                          m-4
                          focus:text-gray-700
                          focus:bg-white
                          focus:border-blue-600
                          focus:outline-none
                        "
                        v-model="region"
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
                    <div class="form-group mb-6">
                      <label for="users" class="ml-4">License Number</label>
                      <input
                        type="text"
                        class="
                          shadow
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
                          m-4
                          mt-0
                          focus:text-gray-700
                          focus:bg-white
                          focus:border-blue-600
                          focus:outline-none
                        "
                        id="lNumber"
                        placeholder="License Number"
                        v-model="licenseNumber"
                      />
                    </div>
                    <div class="flex justify-center">
                      <button
                        type="submit"
                        class="
                          bg-blue-600
                          text-white
                          font-medium
                          text-xs
                          uppercase
                          rounded
                          shadow-md
                          hover:bg-blue-700 hover:shadow-lg
                          focus:bg-blue-700
                          focus:shadow-lg
                          focus:outline-none
                          focus:ring-0
                          active:bg-blue-800 active:shadow-lg
                          duration-150
                          ease-in-out
                        "
                        @click="submit()"
                      >
                        Add Request
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
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
              shadow-md
              hover:bg-purple-700 hover:shadow-lg
              focus:bg-purple-700
              focus:shadow-lg
              focus:outline-none
              focus:ring-0
              active:bg-purple-800 active:shadow-lg
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
    const toast = useToast();
    let users = ref([]);
    let filteredUsers = ref([]);
    let searchInput = ref("");
    let regions = ref([]);
    let region = ref();
    let licenseNumber = ref("");
    let loggedInAdmin = JSON.parse(localStorage.getItem("allAdminData"));

    let showRes = ref(false);
    let showOptions = ref(false);
    const assignedUser = ref({ id: "", name: "" });
    const isLoading = ref(false);

    onMounted(async () => {
      await getAllUsers();
      await getRegion();
    });
    const getAllUsers = () => {
      store.dispatch("applicationVerification/getAllUsers").then((res) => {
        users.value = res.data.data;
        filteredUsers.value = res.data.data;
      });
    };
    const getRegion = () => {
      store.dispatch("applicationVerification/getRegions").then((res) => {
        regions.value = res.data.data;
      });
    };

    const submit = () => {
      isLoading.value = true;
      let submittedData = {
        regionId: region.value,
        licenseNumber: licenseNumber.value,
        applicantId: assignedUser.value .id,
        requesterId: loggedInAdmin.id,
      };
      store
        .dispatch(
          "applicationVerification/saveVerificationRequest",
          submittedData
        )
        .then(
          (res) => {
            if (res.data.status == "Success") {
              isLoading.value = false;
              toast.success("Verification request added Successfully", {
                timeout: 5000,
                position: "bottom-center",
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                icon: true,
              });

                setTimeout(() => {
              window.location.reload();
            }, 3000);
            } else {
              isLoading.value = false;

              toast.error(res.data.message, {
                timeout: 5000,
                position: "bottom-center",
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                icon: true,
              });

                setTimeout(() => {
              window.location.reload();
            }, 3000);
            }
          },
          () => {
            toast.error(
              "Sorry there seems to be a problem, try again later and if problem persists contact system admins.",
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
          }
        );
    };

    const resultQuery = () => {
      if (assignedUser.value.name) {
        let data = users.value.filter((item) => {
          return assignedUser.value.name
            .toLowerCase()
            .split(" ")
            .every((v) => item.name.toLowerCase().includes(v));
        });

        return data;
      } else {
        return [];
      }
    };

    const setInput = (value) => {
      assignedUser.value = {
        id: value.userId,
        name: value.name + " " + value.fatherName + " " + value.grandFatherName,
      };
      console.log(assignedUser.value,value);
      showOptions.value = false;
    };

    return {
      users,
      submit,
      getAllUsers,
      searchInput,
      filteredUsers,
      region,
      regions,
      licenseNumber,
      showRes,
      showOptions,
      resultQuery,
      setInput,
      assignedUser,
      isLoading,
    };
  },
};
</script>
<style scoped>
.shadow-md {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 34%), 0 2px 4px -1px rgb(0 0 0 / 6%);
}
</style>