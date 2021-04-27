<template>
  <div>
    <ReviewerNavBar tab="Unassigned" />
    <div class="flex pl-12 mt-medium">
      <Title message="Unassigned"/>
    </div>

    <div class="box">
      <div class="flex flex-wrap pb-medium rounded h-full">
        <div
          class="container flip-box"
          v-for="(item, index) in unassigned"
          v-bind:key="item.applicationStatus.name"
          v-bind:value="item.id"
        >
          <div
            class="flex justify-center items-center  ml-8 mt-8 mr-8 box-shadow-pop rounded-lg bg-lightGrey-100 flip-box-front"
          >
            <div
              class="p-4 w-48 h-64"
              @mouseover="hover = true"
              @mouseleave="hover = false"
            >
              <div class="flex content-center justify-center">
                <!-- <img
                    class="box-shadow-pop"
                    v-bind:src="item.picture.large"
                /> -->
                <img
                  class="box-shadow-pop"
                  src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp"
                />
              </div>
              <h4
                class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
              >
                {{
                  item.applicant.profile.name
                    ? item.applicant.profile.name +
                      " " +
                      item.applicant.profile.fatherName
                    : "-"
                }}
              </h4>
              <h6
                class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
              >
                {{ item.createdAt ? item.createdAt : "-" }}
              </h6>
              <span
                class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
              >
                Application Type:
                {{ item.applicationType ? item.applicationType : "-" }}
              </span>
              <span
                class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
              >
                Application ID:
                {{ item.newLicenseCode ? item.newLicenseCode : "-" }}
              </span>
            </div>
          </div>

          <div
            class="absolute inset-0 flex justify-center items-center z-10 ml-8 mt-8 mr-8 box-shadow-pop rounded-lg bg-lightGrey-100 flip-box-back"
          >
            <div
              class="p-4 w-48 h-64"
              @mouseover="hover = true"
              @mouseleave="hover = false"
              @Click="detail(`/admin/unassignedDetail`, item.applicationType, item.id, item.applicant.id)"
            >
              <h4
                class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
              >
                {{
                  item.applicant.profile.name
                    ? item.applicant.profile.name +
                      " " +
                      item.applicant.profile.fatherName
                    : "-"
                }}
              </h4>
              <h6
                class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
              >
                {{ item.createdAt ? item.createdAt : "-" }}
              </h6>
              <span
                class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
              >
                Application Type:
                {{ item.applicationType ? item.applicationType : "-" }}
              </span>
              <span
                class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
              >
                Application ID:
                {{ item.newLicenseCode ? item.newLicenseCode : "-" }}
              </span>
              <div
                class="flex ml-small w-32 pt-small justify-center content-center"
              >
                <button
                  class="block mx-auto  bg-lightBlue-300 hover:bg-lightBlue-600 hover:shadow-lg"
                >
                  Assign to
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "@/sharedComponents/TitleWithIllustration";
import ReviewerNavBar from "@/components/Reviewer/ReviewerNavBar";
import { useStore } from "vuex";

import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

export default {
  components: { ReviewerNavBar, Title },
  setup() {
    const store = useStore();
    const router = useRouter();

    let unassigned = ref({});

    const fetchUnassignedApplications = () => {
      store.dispatch("reviewer/getUnassigned").then(res => {
        unassigned.value = res.data.data;
      });
    };

    const detail = (data, applicationType, applicationId, applicantId) => {
      const url = data + "/" + applicationType + "/" + applicationId + "/" + applicantId;
      router.push(url);
    };

    onMounted(() => {
      fetchUnassignedApplications();
    });

    return {
      unassigned,
      detail
    };
  }
};
</script>
<style scoped>
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
</style>
