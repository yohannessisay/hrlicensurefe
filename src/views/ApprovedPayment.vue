<template>
  <div>
    <div
      v-if="!this.showLoading"
      class="relative text-gray-600 focus-within:text-gray-400 pt-10 pl-16 bg-lightBlueB-200"
    >
      <input
        type="search"
        name="search"
        v-on:input="searchApplication()"
        class="
                  py-2
                  text-sm text-black
                  bg-gray-900
                  width-548
                  rounded-md
                  pl-4
                  focus:outline-none
                  focus:bg-white
                  focus:text-gray-900
                "
        placeholder="Search requests by Name or Order ID"
        autocomplete="off"
        v-model="search"
        hiddden
      />
    </div>
    <div v-if="this.searched">
      <div class="bg-lightBlueB-200 h-screen">
        <div class="flex pl-12 pt-medium">
          <Title message="Search Result" />
        </div>
        <div v-if="this.searchResult.length == 0" class="flex pl-12 ml-6">
          <h4 class="h-64">Nothing to Show.</h4>
        </div>
        <div
          v-if="this.searchResult.length != 0"
          class=" mt-medium rounded ml-large"
        >
          <div
            class="flex "
            v-for="i in this.searchResult.length"
            v-bind:key="i"
          >
            <div
              class="container mb-medium"
              v-for="item in this.searchResult.slice((i - 1) * 5, i * 5)"
              v-bind:key="item"
              v-bind:value="item"
            >
              <div
                class="flex justify-center items-center  ml-8 mr-8 box-shadow-pop rounded-lg bg-lightGrey-100"
              >
                <div class="p-4 w-48 h-64">
                  <span
                    v-if="item.applicantPosition"
                    class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
                  >
                    <b>Applicant Position: &nbsp;</b>
                    {{ item.applicantPosition.name }}
                  </span>

                  <span
                    v-if="item.applicantType"
                    class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
                  >
                    <b>Applicant Type: &nbsp;</b>
                    {{ item.applicantType.name }}
                  </span>
                  <span
                    v-if="item.applicationStatus"
                    class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
                  >
                    <b>Status: &nbsp;</b>{{ item.applicationStatus.name }}
                  </span>
                  <span
                    v-if="item.newLicenseCode"
                    class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
                  >
                    <b>Code: &nbsp;</b>{{ item.newLicenseCode }}
                  </span>
                  <span
                    v-if="item.renewalCode"
                    class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
                  >
                    <b>Code: &nbsp;</b>{{ item.renewalCode }}
                  </span>
                  <span
                    v-if="item.verificationCode"
                    class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
                  >
                    <b>Code: &nbsp;</b>{{ item.verificationCode }}
                  </span>
                  <span
                    v-if="item.goodStandingCode"
                    class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
                  >
                    <b>Code: &nbsp;</b>{{ item.goodStandingCode }}
                  </span>
                  <span
                    v-if="item.certified == true"
                    class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
                  >
                    <b>Certified: &nbsp;</b>Yes
                  </span>
                  <span
                    v-else
                    class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
                  >
                    <b>Certified: &nbsp;</b>No
                  </span>
                  <span
                    v-if="item.createdAt"
                    class="
                      mt-medium
                      text-lightBlueB-500
                      flex
                      justify-end
                      content-center
                    "
                  >
                    {{
                      item.createdAt ? moment(item.createdAt).fromNow() : "-"
                    }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!this.searched">
      <div v-if="!this.showLoading" class="bg-lightBlueB-200">
        <div class="flex pl-12 pt-medium">
          <Title message="New License Approved Payment Applications" />
        </div>
        <div v-if="this.newlicense.length == 0" class="flex pl-12 ml-6">
          <h4>Nothing to Show.</h4>
        </div>
        <div
          v-if="this.newlicense.length != 0"
          class=" mt-medium rounded ml-large"
        >
          <div class="flex " v-for="i in this.newlicense.length" v-bind:key="i">
            <div
              class="container mb-medium"
              v-for="item in this.newlicense.slice((i - 1) * 5, i * 5)"
              v-bind:key="item"
              v-bind:value="item"
            >
              <div
                class="flex justify-center items-center  ml-8 mr-8 box-shadow-pop rounded-lg bg-lightGrey-100"
              >
                <div class="p-4 w-48 h-64">
                  <span
                    class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
                  >
                    <b>Applicant Type: &nbsp;</b>
                    {{ item.applicantType.name }}
                  </span>
                  <span
                    class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
                  >
                    <b>Status: &nbsp;</b>{{ item.applicationStatus.name }}
                  </span>
                  <span
                    class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
                  >
                    <b>Code: &nbsp;</b>{{ item.newLicenseCode }}
                  </span>
                  <span
                    v-if="item.certified == true"
                    class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
                  >
                    <b>Certified: &nbsp;</b>Yes
                  </span>
                  <span
                    v-else
                    class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
                  >
                    <b>Certified: &nbsp;</b>No
                  </span>
                  <span
                    class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
                  >
                    <b>Reviewer: &nbsp;</b>{{ item.reviewer.name }}
                  </span>
                  <span
                    class="
                      mt-medium
                      text-lightBlueB-500
                      flex
                      justify-end
                      content-center
                    "
                  >
                    {{
                      item.createdAt ? moment(item.createdAt).fromNow() : "-"
                    }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="!this.showLoading" class="bg-lightBlueB-200 h-full">
        <div class="flex pl-12 pt-medium">
          <Title message="Renewal Approved Payment Applications" />
        </div>
        <div v-if="this.renewal.length == 0" class="flex pl-12 ml-6">
          <h4>Nothing to Show.</h4>
        </div>
        <div
          v-if="this.renewal.length != 0"
          class=" mt-medium rounded ml-large"
        >
          <div class="flex " v-for="i in this.renewal.length" v-bind:key="i">
            <div
              class="container mb-medium"
              v-for="item in this.renewal.slice((i - 1) * 5, i * 5)"
              v-bind:key="item"
              v-bind:value="item"
            >
              <div
                class="flex justify-center items-center  ml-8 mr-8 box-shadow-pop rounded-lg bg-lightGrey-100"
              >
                <div class="p-4 w-48 h-64">
                  <span
                    class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
                  >
                    <b>Applicant Type: &nbsp;</b>
                    {{ item.applicantType.name }}
                  </span>
                  <span
                    class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
                  >
                    <b>Status: &nbsp;</b>{{ item.applicationStatus.name }}
                  </span>
                  <span
                    class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
                  >
                    <b>Code: &nbsp;</b>{{ item.renewalCode }}
                  </span>
                  <span
                    v-if="item.certified == true"
                    class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
                  >
                    <b>Certified: &nbsp;</b>Yes
                  </span>
                  <span
                    v-else
                    class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
                  >
                    <b>Certified: &nbsp;</b>No
                  </span>
                  <span
                    class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
                  >
                    <b>Reviewer: &nbsp;</b>{{ item.reviewer.name }}
                  </span>
                  <span
                    class="
                      mt-medium
                      text-lightBlueB-500
                      flex
                      justify-end
                      content-center
                    "
                  >
                    {{
                      item.createdAt ? moment(item.createdAt).fromNow() : "-"
                    }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="!this.showLoading" class="bg-lightBlueB-200 h-full">
        <div class="flex pl-12 pt-medium">
          <Title message="Verification Approved Payment Applications" />
        </div>
        <div v-if="this.verification.length == 0" class="flex pl-12 ml-6">
          <h4>Nothing to Show.</h4>
        </div>
        <div
          v-if="this.verification.length != 0"
          class=" mt-medium rounded ml-large"
        >
          <div
            class="flex "
            v-for="i in this.verification.length"
            v-bind:key="i"
          >
            <div
              class="container mb-medium"
              v-for="item in this.verification.slice((i - 1) * 5, i * 5)"
              v-bind:key="item"
              v-bind:value="item"
            >
              <div
                class="flex justify-center items-center  ml-8 mr-8 box-shadow-pop rounded-lg bg-lightGrey-100"
              >
                <div class="p-4 w-48 h-64">
                  <span
                    class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
                  >
                    <b>Applicant Type: &nbsp;</b>
                    {{ item.applicantType.name }}
                  </span>
                  <span
                    class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
                  >
                    <b>Status: &nbsp;</b>{{ item.applicationStatus.name }}
                  </span>
                  <span
                    class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
                  >
                    <b>Code: &nbsp;</b>{{ item.verificationCode }}
                  </span>
                  <span
                    v-if="item.certified == true"
                    class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
                  >
                    <b>Certified: &nbsp;</b>Yes
                  </span>
                  <span
                    v-else
                    class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
                  >
                    <b>Certified: &nbsp;</b>No
                  </span>
                  <span
                    class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
                  >
                    <b>Reviewer: &nbsp;</b>{{ item.reviewer.name }}
                  </span>
                  <span
                    class="
                      mt-medium
                      text-lightBlueB-500
                      flex
                      justify-end
                      content-center
                    "
                  >
                    {{
                      item.createdAt ? moment(item.createdAt).fromNow() : "-"
                    }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="!this.showLoading" class="bg-lightBlueB-200 h-full">
        <div class="flex pl-12 pt-medium">
          <Title message="Good Standing Approved Payment Applications" />
        </div>
        <div
          v-if="this.goodstanding.length == 0"
          class="flex pl-12 ml-6 h-screen"
        >
          <h4>Nothing to Show.</h4>
        </div>
        <div
          v-if="this.goodstanding.length != 0"
          class=" mt-medium rounded ml-large"
        >
          <div
            class="flex "
            v-for="i in this.goodstanding.length"
            v-bind:key="i"
          >
            <div
              class="container mb-medium"
              v-for="item in this.goodstanding.slice((i - 1) * 5, i * 5)"
              v-bind:key="item"
              v-bind:value="item"
            >
              <div
                class="flex justify-center items-center  ml-8 mr-8 box-shadow-pop rounded-lg bg-lightGrey-100"
              >
                <div class="p-4 w-48 h-64">
                  <span
                    class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
                  >
                    <b>Applicant Type: &nbsp;</b>
                    {{ item.applicantPosition.name }}
                  </span>
                  <span
                    class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
                  >
                    <b>Status: &nbsp;</b>{{ item.applicationStatus.name }}
                  </span>
                  <span
                    class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
                  >
                    <b>Code: &nbsp;</b>{{ item.goodStandingCode }}
                  </span>
                  <span
                    v-if="item.certified == true"
                    class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
                  >
                    <b>Certified: &nbsp;</b>Yes
                  </span>
                  <span
                    v-else
                    class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
                  >
                    <b>Certified: &nbsp;</b>No
                  </span>

                  <span
                    class="
                      mt-medium
                      text-lightBlueB-500
                      flex
                      justify-end
                      content-center
                    "
                  >
                    {{
                      item.createdAt ? moment(item.createdAt).fromNow() : "-"
                    }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="showLoading"
      class="flex justify-center justify-items-center mt-24"
    >
      <Spinner />
    </div>
  </div>
</template>

<script>
import Title from "@/sharedComponents/TitleWithIllustration";
import RenderIllustration from "@/sharedComponents/RenderIllustration";
import Navigation from "@/views/Navigation";
import Spinner from "@/sharedComponents/Spinner";
import moment from "moment";

export default {
  components: { Navigation, Title, Spinner, RenderIllustration, Title },
  data: function() {
    return {
      license: [],
      newlicense: [],
      renewal: [],
      verification: [],
      goodstanding: [],
      showLoading: false,
      search: "",
      searchResult: [],
      searched: false,
      showDD: false,
      auth: false,
      token: "",
    };
  },
  async created() {
    this.fetchLicensebyId();
  },
  computed() {
    if (this.token != undefined) {
      this.auth = true;
    } else {
      this.auth = false;
    }
  },
  methods: {
    moment: function(date) {
      return moment(date);
    },
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      this.$router.push({ path: "/" });
    },
    showDropDown() {
      this.showDD = !this.showDD;
    },
    searchApplication() {
      let searchKey = this.search;
      if (this.search === "" || this.search == undefined) {
        this.searched = false;
      } else {
        this.searched = true;
        this.searchResult = this.newlicense.filter(function(e) {
          return e.newLicenseCode
            .toLowerCase()
            .includes(searchKey.toLowerCase());
        });
        if (this.searchResult.length == 0) {
          this.searchResult = this.renewal.filter(function(e) {
            return e.renewalCode
              .toLowerCase()
              .includes(searchKey.toLowerCase());
          });
        }
        if (this.searchResult.length == 0) {
          this.searchResult = this.verification.filter(function(e) {
            return e.verificationCode
              .toLowerCase()
              .includes(searchKey.toLowerCase());
          });
        }
        if (this.searchResult.length == 0) {
          this.searchResult = this.goodstanding.filter(function(e) {
            return e.goodStandingCode
              .toLowerCase()
              .includes(searchKey.toLowerCase());
          });
        }
      }
    },
    fetchLicensebyId() {
      this.showLoading = !this.showLoading;
      this.$store.dispatch("newlicense/getNewLicense").then((res) => {
        this.license = res.data.data;
        this.newlicense = this.license.filter(function(e) {
          return e.applicationStatus.code.includes("AP");
        });
      });
      this.$store.dispatch("renewal/getRenewalLicense").then((res) => {
        this.license = res.data.data;
        this.renewal = this.license.filter(function(e) {
          return e.applicationStatus.code.includes("AP");
        });
      });
      this.$store
        .dispatch("verification/getVerificationLicense")
        .then((res) => {
          this.license = res.data.data;
          this.verification = this.license.filter(function(e) {
            return e.applicationStatus.code.includes("AP");
          });
        });
      this.$store
        .dispatch("goodstanding/getGoodStandingLicense")
        .then((res) => {
          this.license = res.data.data;
          this.showLoading = !this.showLoading;
          this.goodstanding = this.license.filter(function(e) {
            return e.applicationStatus.code.includes("AP");
          });
        });
    },
  },
};
</script>
<style>
span {
  font-size: 15px;
}
img {
  border-radius: 50%;
  margin-bottom: 1rem;
  width: 80px;
  border-color: steelblue;
  background-color: steelblue;
}
.container {
  cursor: pointer;
}
.hoveredCard {
  background-color: white;
}
/* .b{
  cursor: pointer;
  position: absolute;
  transform: translate(-50%, -50%);
} */
.flip-box {
  transform-style: preserve-3d;
  perspective: 1000px;
  cursor: pointer;
}
.flip-box-front,
.flip-box-back {
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  backface-visibility: hidden;
}

.flip-box-front {
  transform: rotateY(0deg);
  transform-style: preserve-3d;
}

.flip-box:hover .flip-box-front {
  transform: rotateY(-180deg);
  transform-style: preserve-3d;
}

.flip-box-back {
  /* position: absolute; */
  transform: rotateY(180deg);
  transform-style: preserve-3d;
}

.flip-box:hover .flip-box-back {
  transform: rotateY(0deg);
  transform-style: preserve-3d;
}

.flip-box .inner {
  /* position:absolute;
  perspective: inherit;
  z-index: 2;
  transform: translateY(-50%)translateZ(60px) scale(.94); */
}
/* .box {
  position: relative;
} */

.b {
  /* position: absolute; */
}
#logout {
  cursor: pointer;
}
.width-548 {
  width: 548px;
}
.width-8 {
  width: 22px;
}
.width-small {
  width: 8px;
}
</style>
