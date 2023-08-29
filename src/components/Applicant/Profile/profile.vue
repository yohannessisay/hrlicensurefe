<template>
  <main-content>
    <!-- Main Content -->
    <div class="home-content">
      <div class="parent">
        <div class="bg-gray-100">
          <div class="container mx-auto my-5 ">
            <div class="md:flex no-wrap md:-mx-2">
              <!-- Left Side -->
              <div class="w-full md:w-3/12 md:mx-2 mt-5">
                <!-- Profile Card -->
                <div class="bg-white p-3 shadow-xl border-green-400">
                  <div class="vld-parent mt-4">
                    <loading
                      :active="isLoadingProfile"
                      :is-full-page="false"
                      :color="'#2F639D'"
                      :opacity="1"
                    ></loading>

                    <img
                      class="roundProfile"
                      :src="userInfo ? userInfo.pic : ''"
                    />
                  </div>
                  <div class="flex justify-center mt-4">
                    <input
                      type="file"
                      id="profilePicture"
                      ref="photoFileP"
                      v-on:change="handleFileUpload()"
                      accept="image/*"
                      hidden
                    />
                    <label
                      for="profilePicture"
                      class="
                        block
                        w-full
                        py-2
                        focus:
                        text-center
                        h-10
                        text-white
                        bg-main-400
                        font-semibold
                        rounded-lg
                        hover:bg-white hover:text-main-400 hover:shadow-lg
                      "
                    >
                      <i class="fa fa-camera"></i>
                      Change Photo
                    </label>
                  </div>
                  <div class="break-words">
                    <span id="fileChosen">No file chosen</span>
                  </div>
                  <h2
                    class="text-xl text-justify  bg-yellow-300 rounded-md p-2 m-2"
                  >
                    Note when changing your own personal picture, the prefered
                    size is in 3 X 4 format and make sure it is your own photo
                    as this photo will be used in your generated license
                  </h2>
                  <ul
                    class="
                      bg-gray-100
                      text-gray-600
                      hover:text-gray-700 hover:shadow
                      py-2
                      px-3
                      mt-3
                      divide-y
                      rounded
                      shadow-sm
                    "
                  >
                    <li class="flex items-center py-3 mt-1">
                      <span>Status</span>
                      <span class="ml-auto"
                        ><span
                          class="
                            bg-green-500
                            py-1
                            px-2
                            rounded
                            text-main-400 text-sm
                          "
                          >Active</span
                        ></span
                      >
                    </li>
                    <li class="flex items-center py-3">
                      <span>Member since</span>
                      <span class="ml-auto">{{
                        userInfo && userInfo.createdAt
                          ? userInfo.createdAt.slice(0, 10)
                          : ""
                      }}</span>
                    </li>
                  </ul>
                </div>
                <!-- End of profile card -->
                <div class="my-4"></div>
              </div>
              <!-- Right Side -->
              <div class="w-full md:w-9/12 mx-2 mt-1 ">
                <!-- About Section -->
                <div class="vld-parent mt-4">
                  <loading
                    :active="isLoadingUserInfo"
                    :is-full-page="false"
                    :color="'#2F639D'"
                    :opacity="1"
                  ></loading>
                  <form @submit.prevent="submit">
                    <div class="bg-white p-3 shadow-xl rounded-sm mb-4">
                      <div
                        class="
                          flex
                          items-center
                          space-x-2
                          mb-4
                          border-b-4
                          text-main-400
                          font-semibold
                          text-gray-900
                          leading-8
                        "
                      >
                        <span clas="text-green-500">
                          <i class="fa fa-user text-main-400"></i>
                        </span>
                        <span class="tracking-wide text-main-400"
                          >Personal Information</span
                        >
                      </div>
                      <div class="text-gray-700">
                        <div class="grid md:grid-cols-2 text-sm">
                          <div class="grid grid-cols-2">
                            <div
                              class="
                                px-4
                                py-2
                                text-base
                                font-bold
                                text-main-400
                              "
                            >
                              First Name
                            </div>
                            <div class="mb-3 xl:w-96">
                              <input
                                type="text"
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
                                  m-0
                                  focus:bg-white
                                  focus:border-primary-600
                                  focus:outline-none
                                "
                                id="firstName"
                                placeholder="First name"
                                v-model="userInfo.name"
                              />
                            </div>
                          </div>
                          <div class="grid grid-cols-2">
                            <div
                              class="
                                px-4
                                py-2
                                text-base
                                font-bold
                                text-main-400
                              "
                            >
                              Last Name
                            </div>
                            <div class="mb-3 xl:w-96">
                              <input
                                type="text"
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
                                  m-0
                                  focus:bg-white
                                  focus:border-primary-600
                                  focus:outline-none
                                "
                                id="fatherName"
                                placeholder="Father Name"
                                v-model="userInfo.fatherName"
                              />
                            </div>
                          </div>
                          <div class="grid grid-cols-2">
                            <div
                              class="
                                px-4
                                py-2
                                text-base
                                font-bold
                                text-main-400
                              "
                            >
                              Grandfather Name
                            </div>
                            <div class="mb-3 xl:w-96">
                              <input
                                type="text"
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
                                  m-0
                                  focus:bg-white
                                  focus:border-primary-600
                                  focus:outline-none
                                "
                                id="grandFatherName"
                                placeholder="Grand Father Name"
                                v-model="userInfo.grandFatherName"
                              />
                            </div>
                          </div>
                          <div class="grid grid-cols-2">
                            <div
                              class="
                                px-4
                                py-2
                                text-base
                                font-bold
                                text-main-400
                              "
                            >
                              Gender
                            </div>
                            <div class="mb-3 xl:w-96">
                              <select
                                class="
                                  form-select
                                  appearance-none
                                  block
                                  w-full
                                  px-3
                                  py-1.5
                                  text-base
                                  font-normal
                                  text-gray-700
                                  bg-white bg-clip-padding bg-no-repeat
                                  border border-solid border-gray-300
                                  rounded
                                  transition
                                  ease-in-out
                                  m-0
                                  focus:text-gray-700
                                  focus:bg-white
                                  focus:border-blue-600
                                  focus:outline-none
                                "
                                aria-label="Default select example"
                                v-model="userInfo.gender"
                              >
                                <option selected>{{ userInfo.gender }}</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                              </select>
                            </div>
                          </div>

                          <div class="grid grid-cols-2">
                            <div
                              class="
                                px-4
                                py-2
                                text-base
                                font-bold
                                text-main-400
                              "
                            >
                              Birthdate
                            </div>
                            <input
                              type="date"
                              v-model="userInfo.dateOfBirth"
                              name="birthDay"
                              id="birthDay"
                              class="form-control"
                            />
                          </div>
                          <div class="grid grid-cols-2">
                            <div
                              class="
                                px-4
                                py-2
                                text-base
                                font-bold
                                text-main-400
                              "
                            >
                              marital Status
                            </div>
                            <div class="mb-3 xl:w-96">
                              <select
                                class="
                                  form-select
                                  appearance-none
                                  block
                                  w-full
                                  px-3
                                  py-1.5
                                  text-base
                                  font-normal
                                  text-gray-700
                                  bg-white bg-clip-padding bg-no-repeat
                                  border border-solid border-gray-300
                                  rounded
                                  transition
                                  ease-in-out
                                  m-0
                                  focus:text-gray-700
                                  focus:bg-white
                                  focus:border-blue-600
                                  focus:outline-none
                                "
                                aria-label="Default select example"
                                v-model="userInfo.maritalStatusId"
                              >
                                <option selected>
                                  {{ userInfo.maritalStatus.name }}
                                </option>
                                <option value="1">Single</option>
                                <option value="2">Married</option>
                                <option value="3">Divorced</option>
                                <option value="4">Widowed</option>
                                <option value="5">Separated</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div
                          class="grid md:grid-cols-2 text-sm mt-4 border-t-2"
                        >
                          <div class="grid grid-cols-2 mt-4">
                            <div
                              class="
                                px-4
                                py-2
                                text-base
                                font-bold
                                text-main-400
                              "
                            >
                              Amharic First Name
                            </div>
                            <div class="mb-3 xl:w-96">
                              <input
                                type="text"
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
                                  m-0
                                  focus:bg-white
                                  focus:border-primary-600
                                  focus:outline-none
                                "
                                id="firstName"
                                placeholder="First name"
                                v-model="userInfo.alternativeName"
                              />
                            </div>
                          </div>
                          <div class="grid grid-cols-2 mt-4">
                            <div
                              class="
                                px-4
                                py-2
                                text-base
                                font-bold
                                text-main-400
                              "
                            >
                              Amharic Last Name
                            </div>
                            <div class="mb-3 xl:w-96">
                              <input
                                type="text"
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
                                  m-0
                                  focus:bg-white
                                  focus:border-primary-600
                                  focus:outline-none
                                "
                                id="fatherName"
                                placeholder="Father Name"
                                v-model="userInfo.alternativeFatherName"
                              />
                            </div>
                          </div>
                          <div class="grid grid-cols-2">
                            <div
                              class="
                                px-4
                                py-2
                                text-base
                                font-bold
                                text-main-400
                              "
                            >
                              Amharic Grandfather Name
                            </div>
                            <div class="mb-3 xl:w-96">
                              <input
                                type="text"
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
                                  m-0
                                  focus:bg-white
                                  focus:border-primary-600
                                  focus:outline-none
                                "
                                id="grandFatherName"
                                placeholder="Grand Father Name"
                                v-model="userInfo.alternativeGrandFatherName"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-white p-3 shadow-xl rounded-sm">
                      <div
                        class="
                          flex
                          items-center
                          space-x-2
                          mb-4
                          border-b-4
                          text-main-400
                          font-semibold
                          text-gray-900
                          leading-8
                        "
                      >
                        <span clas="text-green-500">
                          <i class="fa fa-phone text-main-400"></i>
                        </span>
                        <span class="tracking-wide text-main-400"
                          >Contact Information</span
                        >
                      </div>
                      <div class="text-gray-700">
                        <div class="grid md:grid-cols-2 text-sm">
                          <div class="grid grid-cols-2">
                            <div
                              class="
                                px-4
                                py-2
                                text-base
                                font-bold
                                text-main-400
                              "
                            >
                              Phone Number
                            </div>
                            <div class="mb-3 xl:w-96">
                              <input
                                type="text"
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
                                  m-0
                                  focus:bg-white
                                  focus:border-primary-600
                                  focus:outline-none
                                "
                                id="phoneNumber"
                                placeholder="Phone number"
                                v-model="userInfo.user.phoneNumber"
                              />
                            </div>
                          </div>
                          <div class="grid grid-cols-2">
                            <div
                              class="
                                px-4
                                py-2
                                text-base
                                font-bold
                                text-main-400
                              "
                            >
                              Address
                            </div>
                            <div class="mb-3 xl:w-96">
                              <input
                                type="text"
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
                                  m-0
                                  focus:bg-white
                                  focus:border-primary-600
                                  focus:outline-none
                                "
                                id="address"
                                placeholder="Address"
                              />
                            </div>
                          </div>
                          <div class="grid grid-cols-2">
                            <div
                              class="
                                px-4
                                py-2
                                text-base
                                font-bold
                                text-main-400
                              "
                            >
                              Email
                            </div>
                            <div class="mb-3 xl:w-96">
                              <input
                                type="text"
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
                                  m-0
                                  focus:bg-white
                                  focus:border-primary-600
                                  focus:outline-none
                                "
                                id="firstName"
                                placeholder="Email"
                                v-model="userInfo.user.emailAddress"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        type="submit"
                        class="
                          block
                          w-full
                          text-white
                          bg-main-400
                          text-base
                          font-bold
                          rounded-lg
                          hover:bg-white hover:text-main-400 hover:shadow-lg
                          p-3
                          my-4
                        "
                      >
                        <i class="fa fa-save"></i>
                        Update Profile
                      </button>
                    </div>
                    <!-- End of about section -->
                  </form>
                </div>
                <!-- When education feature is added to reviewer  -->
                <!-- Experience and education -->
                <!--   <div class="bg-white p-3 shadow-lg rounded-sm">
                 <div class="grid grid-cols-2">
                    <div>
                      <div
                        class="
                          flex
                          items-center
                          space-x-2
                          font-semibold
                          text-gray-900
                          leading-8
                          mb-3
                        "
                      >
                        <span clas="text-green-500">
                          <svg
                            class="h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </span>
                        <span class="tracking-wide">Experience</span>
                      </div>
                      <ul class="list-inside space-y-2">
                        <li>
                          <div class="text-teal-600">Owner at Company Inc.</div>
                          <div class="text-gray-500 text-xs">
                            March 2020 - Now
                          </div>
                        </li>
                        <li>
                          <div class="text-teal-600">Owner at Company Inc.</div>
                          <div class="text-gray-500 text-xs">
                            March 2020 - Now
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div
                        class="
                          flex
                          items-center
                          space-x-2
                          font-semibold
                          text-gray-900
                          leading-8
                          mb-3
                        "
                      >
                        <span clas="text-green-500">
                          <svg
                            class="h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path
                              fill="#fff"
                              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                            />
                          </svg>
                        </span>
                        <span class="tracking-wide">Education</span>
                      </div>
                      <ul class="list-inside space-y-2">
                        <li>
                          <div class="text-teal-600">Masters Degree At AAU</div>
                          <div class="text-gray-500 text-xs">
                            March 2024 - Now
                          </div>
                        </li>
                        <li>
                          <div class="text-teal-600">
                            Bachelors Degreen At AASTU
                          </div>
                          <div class="text-gray-500 text-xs">March 2016</div>
                        </li>
                      </ul>
                    </div>
                  </div> 
                </div>-->
                <!-- End of Experience and education grid -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Main Content -->
  </main-content>
</template>

<script>
import { ref, onMounted } from "vue";
import MainContent from "./sharedComponents/Menu.vue";
import { useStore } from "vuex";
import { googleApi } from "@/composables/baseURL";
import { useToast } from "vue-toastification";
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
export default {
  components: {
    MainContent,
    Loading,
  },
  setup() {
    const store = useStore();
    const toast = useToast();
    const userId = +localStorage.getItem("userId");
    let display = ref("dashboard");
    let userInfo = ref({
      name: "",
      fatherName: "",
      grandFatherName: "",
      alternativeFatherName: "",
      alternativeGrandFatherName: "",
      alternativeName: "",
      user: { phoneNumber: "", emailAddress: "" },
      maritalStatus: { id: "", name: "" },
    });
    let photoFile = ref("");
    let photoFileP = ref("");
    let photoSizeCheck = ref(false);
    let fileSize = ref("");
    let isImage = ref(true);
    let isLoadingProfile = ref(false);
    let isLoadingUserInfo = ref(false);

    const submit = () => {
      isLoadingUserInfo.value = true;
      store.dispatch("profile/updateProfile", userInfo.value).then((res) => {
        if (res.data.status == "Success") {
          toast.success("Profile Updated successfuly", {
            timeout: 5000,
            position: "bottom-center",
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            icon: true,
          });
          getProfile();
          isLoadingUserInfo.value = false;
        } else {
          toast.error("Please try again", {
            timeout: 5000,
            position: "bottom-center",
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            icon: true,
          });
          isLoadingUserInfo.value = false;
        }
      });
    };

    const updateProfilePicture = () => {
      let formData = new FormData();
      formData.append("document", photoFile.value);

      let payload = { document: formData, id: userId };
      store
        .dispatch("profile/updateProfilePicture", payload)
        .then((res) => {
          if (res.status == 200) {
            toast.success("Profile Photo Updated successfuly", {
              timeout: 5000,
              position: "bottom-center",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true,
            });
            const fileChosen = document.getElementById("fileChosen");
            fileChosen.textContent = "";
            isLoadingProfile.value = false;
            getProfile();
          } else {
            toast.error("Please try again", {
              timeout: 5000,
              position: "bottom-center",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true,
            });
          }
        })
        .catch((err) => console.log(err));
    };

    const handleFileUpload = async () => {
      isLoadingProfile.value = true;
      photoFile.value = photoFileP.value.files[0];
      let reader = new FileReader();
      if (photoFile.value.size > 3145728) {
        photoSizeCheck.value = true;
      } else {
        let fileS = photoFile.value.size;
        if (fileS > 0 && fileS < 1000) {
          fileSize.value += "B";
        } else if (fileS > 1000 && fileS < 1000000) {
          fileSize.value = fileS / 1000 + "kB";
        } else {
          fileSize.value = fileS / 1000000 + "MB";
        }
        reader.addEventListener(
          "load",
          async function() {
            var base64 = reader.result;
            userInfo.value.photo = base64;
          },
          false
        );
        if (photoFile.value) {
          if (/\.(jpe?g|png|gif)$/i.test(photoFile.value.name)) {
            isImage.value = true;
            reader.readAsDataURL(photoFile.value);
          } else if (/\.(pdf)$/i.test(photoFile.value.name)) {
            isImage.value = false;
            reader.readAsText(photoFile.value);
          }
        }
        updateProfilePicture();
      }
    };
    const getProfile = () => {
      store.dispatch("profile/getProfileByUserId", userId).then((res) => {
        userInfo.value = res.data.data;
        if (userInfo.value) {
          userInfo.value.dateOfBirth = userInfo.value.dateOfBirth.slice(0, 10);
        } else {
          userInfo.value.dateOfBirth = "1900-01-01";
        }
        userInfo.value.pic = res.data.data.profilePicture
          ? googleApi + res.data.data.profilePicture.filePath
          : "";
      });

      const actualBtn = document.getElementById("profilePicture");

      const fileChosen = document.getElementById("fileChosen");

      actualBtn.addEventListener("change", function() {
        fileChosen.textContent = this.files[0].name;
      });
    };
    onMounted(() => {
      getProfile();
    });
    return {
      submit,
      updateProfilePicture,
      display,
      userInfo,
      photoFileP,
      isLoadingProfile,
      isLoadingUserInfo,
      handleFileUpload,
    };
  },
};
</script>
<style>
.roundProfile {
  border-radius: 0.5rem 0.5rem 0 0;
  width: 100%;
  object-fit: cover;
  aspect-ratio: 4/3;
}
</style>
