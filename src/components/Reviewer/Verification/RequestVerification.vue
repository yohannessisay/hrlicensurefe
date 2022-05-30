<template>
  <div
    class="card-wrapper  sm:rounded-lg w-full p-large flex flex-col justify-center items-center  mt-5"
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

    <div class="bg-white blue-box-shadow-light rounded w-1/3 p-5">
      <Title message="Request verification" />

      <form
        class="mx-auto  w-full mt-10"
        v-if="showForm"
        @submit.prevent="submit"
      >
        <div class="flex">
          <div class="flex flex-col mb-medium w-1/2 ">
            <label>Users</label>
            <div class="rounded shadow-md my-2 relative pin-t pin-l h-xl overflow-y-auto">
              <ul class="list-reset ">
                <li class="p-2">
                  <input class="border-2 rounded h-8 w-full" v-model="searchInput" @input="searchedUserInput" /><br />
                </li>
                <li v-for="user in users">
                  <p
                    class="block text-black hover:bg-grey-light cursor-pointer text-xs"
                  >
                    {{ user.name + " " + user.fatherName + " "+  user.grandFatherName}}
                  </p>
                </li>
              </ul>
            </div>
            <select class=" mr-2" v-model="selectedUser">
              <option
                v-for="item in filteredUsers"
                v-bind:key="item.id"
                v-bind:value="item.emailAddress"
              >
                {{ item.emailAddress }}
              </option>
            </select>
          </div>
        </div>

        <!-- <select class="max-w-3xl mr-2" v-model="allInfo.app_type">
          <option
            v-for="item in applicationTypes"
            v-bind:key="item.id"
            v-bind:value="item.name"
          >
            {{ item.name }}
          </option>
        </select>
          <select class="max-w-3xl mr-2" v-model="allInfo.app_type">
          <option
            v-for="item in applicationTypes"
            v-bind:key="item.id"
            v-bind:value="item.name"
          >
            {{ item.name }}
          </option>
        </select> -->
      </form>
    </div>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {ref, onMounted} from "vue";
import store from "../../../store";
import Title from "@/sharedComponents/TitleWithIllustration";
import ErrorFlashMessage from "@/sharedComponents/ErrorFlashMessage";
import Spinner from "@/sharedComponents/Spinner";

export default {
  components: {
    Title,
    Spinner,
    ErrorFlashMessage,
  },

  setup() {
    let users = ref([]);
    let filteredUsers = ref([]);
    let selectedUser = ref();
    let showForm = ref(false);
    let searchInput = ref("");

    onMounted(async () => {
     await getAllUsers();
      showForm.value = true;
    });
    const getAllUsers = () => {
      store.dispatch("applicationVerification/getAllUsers").then((res) => {
        console.log(res);
        users.value = res.data.data;
        filteredUsers.value = res.data.data;

      });
    };
    const searchedUserInput =() =>
    {
      console.log(searchInput);
      filteredUsers.value = users.filter( x =>
      {
        return x.name.includes(searchedInput) || x.fatherName.includes(searchedInput) || x.grandFatherName.includes(searchedInput)
      })
    }
    const submit = () => {};
    return{
      users, selectedUser, submit, showForm, getAllUsers, searchedUserInput, searchInput
    }
  },
};
</script>

<style></style>
