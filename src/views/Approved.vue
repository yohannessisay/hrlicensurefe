<template>
  <div>
    <div>
      <div v-if="!this.showLoading" class="bg-lightBlueB-200 h-full">
        <div class="flex pl-12 pt-medium">
          <Title message="New License Approved Applications" />
        </div>
        <div v-if="this.newlicense.length == 0" class="flex pl-12 ml-6">
          <h4>Nothing to Show.</h4>
        </div>
        <div
          v-if="this.newlicense.length != 0"
          class="mt-medium rounded ml-large"
        >
          <div class="flex" v-for="i in this.newlicense.length" v-bind:key="i">
            <div
              @click="openServiceFeeModal(item)"
              class="container mb-medium"
              v-for="item in this.newlicense.slice((i - 1) * 4, i * 4)"
              v-bind:key="item"
              v-bind:value="item"
            >
              <div
                class="
                  flex
                  justify-center
                  items-center
                  ml-4
                  mr-4
                  box-shadow-pop
                  rounded-lg
                  bg-lightGrey-100
                "
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
          <Title message="Renewal Approved Applications" />
        </div>
        <div v-if="this.renewal.length == 0" class="flex pl-12 ml-6">
          <h4>Nothing to Show.</h4>
        </div>
        <div v-if="this.renewal.length != 0" class="mt-medium rounded ml-large">
          <div class="flex" v-for="i in this.renewal.length" v-bind:key="i">
            <div
              @click="openServiceFeeModal(item)"
              class="container mb-medium"
              v-for="item in this.renewal.slice((i - 1) * 4, i * 4)"
              v-bind:key="item"
              v-bind:value="item"
            >
              <div
                class="
                  flex
                  justify-center
                  items-center
                  ml-4
                  mr-4
                  box-shadow-pop
                  rounded-lg
                  bg-lightGrey-100
                "
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
          <Title message="Verification Approved Applications" />
        </div>
        <div v-if="this.verification.length == 0" class="flex pl-12 ml-6">
          <h4>Nothing to Show.</h4>
        </div>
        <div
          v-if="this.verification.length != 0"
          class="mt-medium rounded ml-large"
        >
          <div
            class="flex"
            v-for="i in this.verification.length"
            v-bind:key="i"
          >
            <div
              class="container mb-medium"
              v-for="item in this.verification.slice((i - 1) * 4, i * 4)"
              v-bind:key="item"
              v-bind:value="item"
            >
              <div
                class="
                  flex
                  justify-center
                  items-center
                  ml-4
                  mr-4
                  box-shadow-pop
                  rounded-lg
                  bg-lightGrey-100
                "
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
          <Title message="Good Standing Approved Applications" />
        </div>
        <div
          v-if="this.goodstanding.length == 0"
          class="flex pl-12 ml-6 h-screen"
        >
          <h4>Nothing to Show.</h4>
        </div>
        <div
          v-if="this.goodstanding.length != 0"
          class="mt-medium rounded ml-large"
        >
          <div
            class="flex"
            v-for="i in this.goodstanding.length"
            v-bind:key="i"
          >
            <div
              @click="openServiceFeeModal(item)"
              class="container mb-medium"
              v-for="item in this.goodstanding.slice((i - 1) * 4, i * 4)"
              v-bind:key="item"
              v-bind:value="item"
            >
              <div
                class="
                  flex
                  justify-center
                  items-center
                  ml-4
                  mr-4
                  box-shadow-pop
                  rounded-lg
                  bg-lightGrey-100
                "
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
    <Modal v-if="this.serviceFeeModal">
      <ServiceFee @serviceFeeModal="this.serviceFeeModal = false" />
    </Modal>
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
import Modal from "@/sharedComponents/Modal";
import ServiceFee from "@/views/ServiceFee.vue";
import moment from "moment";

export default {
  components: {
    Navigation,
    Title,
    Spinner,
    RenderIllustration,
    Title,
    Modal,
    ServiceFee,
  },
  data: function() {
    return {
      license: [],
      newlicense: [],
      renewal: [],
      verification: [],
      goodstanding: [],
      showLoading: false,
      showDD: false,
      auth: false,
      token: "",
      serviceFeeModal: false,
      itemId: "",
      applicationType: "",
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
    openServiceFeeModal(item) {
      this.serviceFeeModal = true;
      this.itemId = item.id;
      if (item.newLicenseCode != undefined) {
        this.applicationType = "newlicense";
      }
      if (item.renewalCode != undefined) {
        this.applicationType = "renewal";
      }
      if (item.verificationCode != undefined) {
        this.applicationType = "verification";
      }
      if (item.goodStandingCode != undefined) {
        this.applicationType = "goodstanding";
      }
      window.localStorage.setItem("itemId", this.itemId);
      window.localStorage.setItem("applicationType", this.applicationType);
    },
    showDropDown() {
      this.showDD = !this.showDD;
    },
    fetchLicensebyId() {
      this.showLoading = !this.showLoading;
      this.$store
        .dispatch("newlicense/getNewLicense")
        .then((res) => {
          this.license = res.data.data;
          if (this.license) {
            this.newlicense = this.license.filter(function(e) {
              return e.applicationStatus.code.includes("APP");
            });
          }
        })
        .then(() => {
          this.$store.dispatch("renewal/getRenewalLicense").then((res) => {
            this.license = res.data.data;
            if (this.license) {
              this.renewal = this.license.filter(function(e) {
                return e.applicationStatus.code.includes("APP");
              });
            }
          });
        })
        .then(() => {
          this.$store
            .dispatch("verification/getVerificationLicense")
            .then((res) => {
              this.license = res.data.data;
              if (this.license) {
                this.verification = this.license.filter(function(e) {
                  return e.applicationStatus.code.includes("APP");
                });
              }
            });
        })
        .then(() => {
          this.$store
            .dispatch("goodstanding/getGoodStandingLicense")
            .then((res) => {
              this.license = res.data.data;
              this.showLoading = !this.showLoading;
              if (this.license) {
                this.goodstanding = this.license.filter(function(e) {
                  return e.applicationStatus.code.includes("APP");
                });
              }
            });
        });
    },
  },
};
</script>
<style></style>
