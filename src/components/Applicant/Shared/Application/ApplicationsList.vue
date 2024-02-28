<template>
  <main-content :url="finalUrl">
    <PageHeader :path="path" :isDarkMode="isDarkMode"></PageHeader>

    <h2
      :class="isDarkMode ? 'ml-8 mt-8 text-white' : 'ml-8 mt-8'"
      v-if="isLoading"
    >
      {{ $t("Loading...") }}
    </h2>
    <div class="container my-12 mx-auto px-4 sm:px-12" v-if="noData == false">
      <div class="flex flex-wrap sm:-mx-1 lg:-mx-4">
        <!-- Column -->

        <div
          v-for="license in applications"
          :key="license.id"
          :class="
            isDarkMode
              ? 'bg-secondaryDark text-primary-200 my-1 px-1 sm:w-1/4  w-full mb-4  sm:mr-4 rounded-lg transform transition duration-300 ease-in-out hover:-translate-y-2'
              : 'bg-white my-1 px-1  sm:w-1/4  w-full mb-4 sm:mr-4 rounded-lg transform transition duration-300 text-main-400 ease-in-out hover:-translate-y-2'
          "
        >
          <!-- Article -->
          <div>
            <div
              class="flex items-center border-b-2 justify-between leading-tight p-2 md:p-2"
            >
              <h2 class="text-lg">{{ $t("License Number") }}</h2>

              <h2
                :class="
                  isDarkMode
                    ? 'text-green-200 text-lg   mb-2'
                    : 'text-grey-800 text-lg  mb-2'
                "
              >
                {{
                  license.newLicenseCode
                    ? license.newLicenseCode
                    : license.renewalCode
                    ? license.renewalCode
                    : license.goodStandingCode
                    ? license.goodStandingCode
                    : license.lost_license_code
                    ? license.lost_license_code
                    : ""
                }}
              </h2>
            </div>

            <div
              class="border-b-2"
              v-if="!license.goodStandingCode && !license.lost_license_code"
            >
              <div
                class="flex items-center border-b-2 justify-between leading-tight p-2 md:p-2"
              >
                <h1 class="text-lg">{{ $t("Department") }}</h1>

                <ul class="text-black text-sm">
                  <li
                    v-for="(education, index) in license.educations"
                    :key="education.id"
                    style="display: inline"
                  >
                    <h2
                      :class="
                        isDarkMode
                          ? 'text-green-200 text-lg'
                          : 'text-grey-800 text-lg'
                      "
                    >
                      {{
                        education.department
                          ? "*" + education.department.name
                          : "-"
                      }}
                      <span v-if="index != license.educations.length - 1">
                        ,
                      </span>
                    </h2>
                  </li>
                </ul>
              </div>

              <div
                class="flex items-center justify-between border-b-2 leading-tight p-2 md:p-2"
              >
                <h1 class="text-lg">{{ $t("Certified Date") }}</h1>
                <h2
                  :class="
                    isDarkMode
                      ? 'text-green-200 text-lg'
                      : 'text-grey-800 text-lg'
                  "
                >
                  {{
                    license.certifiedDate
                      ? license.certifiedDate.slice(0, 10)
                      : "Waiting for review"
                  }}
                </h2>
              </div>
              <div
                class="flex items-center justify-between leading-tight border-b-2 p-2 md:p-2"
              >
                <h1 class="text-lg">{{ $t("Expiry Date") }}</h1>
                <h2
                  :class="
                    isDarkMode
                      ? 'text-green-200 text-lg'
                      : 'text-grey-800 text-lg'
                  "
                >
                  {{
                    license.certifiedDate
                      ? license.certifiedDate.slice(0, 10)
                      : "Waiting for review"
                  }}
                </h2>
              </div>

              <div
                class="flex items-center justify-between leading-tight p-2 md:p-2"
              >
                <h1 class="text-lg">{{ $t("Retrieval Date") }}</h1>
                <h2
                  :class="
                    isDarkMode
                      ? 'text-green-200 text-lg'
                      : 'text-grey-800 text-lg'
                  "
                >
                  {{
                    license.retrivalDate
                      ? license.retrivalDate
                      : "Print pending"
                  }}
                </h2>
              </div>
            </div>
            <div class="border-b-2" v-if="license.goodStandingCode">
              <div class="grid grid-cols-2 mb-2 sm:p-2 mt-4 ml-2">
                <h1 class="text-lg">{{ $t("Who issued the letter") }}</h1>

                <h2
                  :class="
                    isDarkMode
                      ? 'text-green-200 text-lg'
                      : 'text-grey-800 text-lg'
                  "
                >
                  {{
                    license && license.whoIssued ? license.whoIssued.name : ""
                  }}
                </h2>
              </div>

              <div class="grid grid-cols-2 mb-2 sm:p-2 ml-2">
                <h1 class="text-lg">{{ $t("License Registration Number") }}</h1>
                <h2
                  :class="
                    isDarkMode
                      ? 'text-green-200 text-lg'
                      : 'text-grey-800 text-lg'
                  "
                >
                  {{
                    license.licenseRegistrationNumber
                      ? license.licenseRegistrationNumber
                      : ""
                  }}
                </h2>
              </div>
            </div>
            <div class="border-b-2" v-if="license.lost_license_code">
              <div class="grid grid-cols-2 mb-2 sm:p-2 mt-4 ml-2">
                <h1 class="text-lg">{{ $t("License Loss Date") }}</h1>

                <h2
                  :class="
                    isDarkMode
                      ? 'text-green-200 text-lg'
                      : 'text-grey-800 text-lg'
                  "
                >
                  {{
                    license && license.loss_date
                      ? license.loss_date.slice(0, 10)
                      : ""
                  }}
                </h2>
              </div>

              <div class="grid grid-cols-2 mb-2 sm:p-2 ml-2">
                <h1 class="text-lg">{{ $t("License Type") }}</h1>
                <h2
                  :class="
                    isDarkMode
                      ? 'text-green-200 text-lg'
                      : 'text-grey-800 text-lg'
                  "
                >
                  {{
                    license.new_license_id
                      ? "New License"
                      : license.renewal_id
                      ? "Renewal"
                      : "Lost License Outside The System"
                  }}
                </h2>
              </div>
            </div>

            <footer
              class="flex items-center justify-between leading-none p-2 md:p-4"
            >
              <h2 class="text-lg">{{ $t("Applied Date") }}</h2>

              <h2
                :class="
                  isDarkMode
                    ? 'text-green-200 text-lg'
                    : 'text-grey-800 text-lg'
                "
              >
                {{
                  license.createdAt
                    ? license.createdAt.slice(0, 10)
                    : license.created_at
                    ? license.created_at.slice(0, 10)
                    : ""
                }}
              </h2>
            </footer>
            <div class="flex justify-center">
              <button
                class="inline-block px-6 text-white bg-main-400 hover:text-green-200 hover:border text-sm font-bold uppercase rounded mb-4 transition duration-150 ease-in-out"
                @click="openApplicationDetail(license.id)"
                data-bs-toggle="modal"
                data-bs-target="#applicationDetail"
              >
                {{ $t("View Detail") }}
              </button>
              <router-link
                v-if="editSubmittedLink"
                :to="`${editSubmittedLink}${license.id}`"
              >
                <button
                  class="inline-block px-6 ml-4 text-white bg-main-400 hover:text-green-200 hover:border text-sm font-bold uppercase rounded mb-4 transition duration-150 ease-in-out"
                >
                  {{ $t("Edit") }}
                </button>
              </router-link>
            </div>
          </div>

          <!-- END Article -->
        </div>

        <!-- END Article -->
      </div>
      <!-- END Column -->
    </div>
    <div
      v-else
      :class="
        isDarkMode
          ? 'bg-secondaryDark text-white my-1 px-1 md:w-1/4 lg:w-1/4   sm:w-full sm:mr-4 rounded-lg transform transition duration-300 ease-in-out hover:-translate-y-2'
          : 'bg-white my-1 text-grey-800 px-1 md:w-1/4 lg:w-1/4  sm:w-full sm:mr-4 rounded-lg transform transition duration-300 ease-in-out hover:-translate-y-2'
      "
    >
      <!-- Article -->

      <h2 class="border-b-2 text-xl p-2">
        {{ $t("There are no applications in this status currently.") }}
      </h2>
    </div>
    <ApplicationDetail
      :status="status"
      :modalDataId="modalDataId"
      :isDarkMode="isDarkMode"
      :applicationDetailLink="applicationDetailLink"
      :detailPageName="detailPageName"
      :finalUrl="finalUrl"
    ></ApplicationDetail>
  </main-content>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import MainContent from "../Menu.vue";
import { googleApi } from "@/composables/baseURL";
import ApplicationDetail from "./ApplicationDetailModal.vue";
import PageHeader from "../PagesHeader.vue";
export default {
  components: { MainContent, ApplicationDetail, PageHeader },
  props: [
    "path",
    "link",
    "status",
    "detailModalLink",
    "editSubmittedLink",
    "finalUrl",
    "detailPageName",
  ],
  setup(props) {
    let store = useStore();
    let applications = ref([]);
    let isLoading = ref(true);
    let noData = ref(false);
    let modalDataId = ref({ change: 0, id: "" });
    let isDarkMode = ref(JSON.parse(localStorage.getItem("darkMode")));
    let applicationDetailLink = computed(() => props.detailModalLink);
    let userId = ref(JSON.parse(window.localStorage.getItem("userId")));
    onMounted(() => {
      window.addEventListener("darkModeChanged", (data) => {
        isDarkMode.value = data.detail ? data.detail.content : "";
      });
      isLoading.value = true;

      store.dispatch(props.link.toString(), userId.value).then((res) => {
        const results = res.data.data ? res.data.data : [];

        if (results.length > 0) {
          applications.value = results.filter((app) => {
            return props.status.includes(app.applicationStatus.code);
          });

          if (applications.value.length === 0) {
            noData.value = true;
          }

          isLoading.value = false;
        } else {
          noData.value = true;
          isLoading.value = false;
        }
      });
    });

    const openApplicationDetail = (id) => {
      modalDataId.value.id = id;
      modalDataId.value.change++;
    };

    return {
      applications,
      googleApi,
      isDarkMode,
      noData,
      isLoading,
      openApplicationDetail,
      modalDataId,
      applicationDetailLink,
    };
  },
};
</script>
