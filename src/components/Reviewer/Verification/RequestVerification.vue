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
              <ul class="list-reset ">
                <li class="mr-3">
                  <input class="border-2 rounded h-8 w-full" v-model="searchInput" @input="searchedUserInput" /><br />
                </li>
                            <div class="relative pin-t pin-l custom-lookup overflow-y-auto" v-if="showCustomLookup">

                <li class="p-1" v-for="user in filteredUsers" >
                  <p
                    class="border-grey-500 block text-black hover:bg-grey-light cursor-pointer text-xs" @click="setUserValue(user)"
                  >
                    {{ user.name + " " + user.fatherName + " "+  user.grandFatherName}}
                  </p>
                </li>
                 </div>
              </ul>
           
            </div>
         <div
            class="flex flex-col mb-medium w-1/2 "
          >
            <label class="text-primary-700">Region</label>
            <div>
              <select
                class="max-w-3xl"
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
         </div>
        

          </div>
           <div>
         <label class="text-primary-700">License Number</label>

           <input type="text" v-model="licenseNumber"/>
         </div>
         <button class="text-primary mt-5 float-right" type="submit" >Submit</button>
      </form>
    </div>
  </div>
  <ErrorFlashMessage :message="message.errorMessage" v-if="response.error"/>
  <FlashMessage message="Successfully requested verification" v-if="response.success"/>
</template>

<script>
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {ref, onMounted} from "vue";
import store from "../../../store";
import Title from "@/sharedComponents/TitleWithIllustration";
import ErrorFlashMessage from "@/sharedComponents/ErrorFlashMessage";
import Spinner from "@/sharedComponents/Spinner";
import FlashMessage from "@/sharedComponents/FlashMessage";

export default {
  components: {
    Title,
    Spinner,
    ErrorFlashMessage,
    FlashMessage,
  },

  setup({emit}) {
    let users = ref([]);
    let filteredUsers = ref([]);
    let selectedUser = ref();
    let showForm = ref(false);
    let searchInput = ref("");
    let regions = ref([]);
    let region = ref();
    let showCustomLookup= ref(false);
    let licenseNumber = ref("");
    let loggedInAdmin = JSON.parse(localStorage.getItem("allAdminData"));
    let message = ref({
      successMessage: "",
      errorMessage: ""
    });
    let response = ref({
      success: false,
      error: false,
    })
    
    onMounted(async () => {
     await getAllUsers();
     await getRegion();
     showForm.value = true;

    });
    const getAllUsers = () => {
      store.dispatch("applicationVerification/getAllUsers").then((res) => {
        console.log(res);
        users.value = res.data.data;
        filteredUsers.value = res.data.data;
      });
    };
     const getRegion = () => {
      store.dispatch("applicationVerification/getRegions").then((res) => {
        console.log(res);
        regions.value = res.data.data;
        // filteredUsers.value = res.data.data;

      });
    };
    const searchedUserInput =() =>
    {
      if(searchInput.value.length > 3)
      {
        showCustomLookup.value = true;
      }
      filteredUsers.value = users.value.filter( x =>
      {
        return x.name.toLowerCase().includes(searchInput.value) || x.fatherName.toLowerCase().includes(searchInput.value) || x.grandFatherName.toLowerCase().includes(searchInput.value)
      })
      
    }
    const setUserValue =(user)=>
    {
      searchInput.value = user.name + " " + user.fatherName + " " +user.grandFatherName
      showCustomLookup.value = false;
      selectedUser.value = user;
      console.log(user);
    }
    const submit = () => {
      let submittedData = {
        regionId: region.value,
        licenseNumber: licenseNumber.value,
        applicantId: selectedUser.value?.userId, 
        requesterId: loggedInAdmin.id

      };
      store.dispatch("applicationVerification/saveVerificationRequest",submittedData).then((res) => {
        if(res.data.status == "Success")
        {
          response.value.success = true;
          setTimeout(()=>
          {
            window.location.reload();
          },3000)
        }
      else
      {          
        response.value.error = true;
        message.value.errorMessage = res.data.message;
        setTimeout(()=>
          {
            window.location.reload();
          },3000)
      }
      },(res)=>{
        emit('closeModal', false);
        response.value.error = true;
        message.value.errorMessage = res.data.message;
      });
    };
    return{
      users, selectedUser, submit, showForm, getAllUsers, searchedUserInput, searchInput, filteredUsers, region, response, regions,showCustomLookup, setUserValue, licenseNumber,message
    }
  },
};
</script>

<style scoped>
.custom-lookup{
  max-height: 100px;
}
</style>
