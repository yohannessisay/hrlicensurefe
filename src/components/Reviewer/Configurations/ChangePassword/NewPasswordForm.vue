<template>
    <form class="mx-auto max-w-3xl w-full mt-10 " @submit.prevent="submitForm">
        <div class="flex">
          <div class="flex flex-col block mx-auto w-1/2 ">
          <label class="text-primary-700">Old Password</label>
            <input class="max-w-3xl" type="password" v-model="passwordInfo.oldpassword" />
            <br />
            <!-- <span style="color: red">{{ personalInfoErrors.name }}</span> -->
            <label class="text-primary-700">New Password</label>
            <input class="max-w-3xl" type="password" v-model="passwordInfo.newPassword" />
            <br />
            <label class="text-primary-700">Confirm New Password</label>
            <input class="max-w-3xl" type="password" v-model="passwordInfo.confirmPassword" />
            <div class="flex mb-medium w-full mt-medium">
                <button
                    class="block mx-auto w-1/2  bg-lightBlue-500 hover:bg-lightBlue-600 hover:shadow-lg"
                >
                    Confirm
                </button>
            </div>
            <span v-if="showLoading">
                <Spinner />
            </span>
          </div>
        </div>
      </form>
</template>
<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import Spinner from "@/sharedComponents/Spinner";

export default {
    components: {
        Spinner
    },
    name: "NewPasswordForm",
    setup() {
        let showLoading = ref(false);

        let passwordInfo = ref({
            oldPassword: "password1",
            newPassword: "",
            confirmPassword: ""});


        const store = useStore();
        const router = useRouter();
        const adminId = localStorage.getItem("adminId")
        const submitForm = () => {
            showLoading.value = true;
            store.dispatch("admin/changePassword", adminId, passwordInfo)
            .then(res => {
                showLoading.value = false;
                setTimeout(() => {
                    router.push("/admin/")
                }, 3000)
            })
            .catch(err => {
                showLoading.value = false;
                console.log("something went wrong");
            })
            console.log("endu mathi")
        }
        return {
            submitForm,
            passwordInfo,
            showLoading,
        } 
    }
}
</script>