<template>
  <div
    class="container"
    v-for="item in evaluationsList"
    v-bind:key="item.id"
    v-bind:value="item.id"
  >
    <div
      class="flex justify-center items-center  ml-8 mt-8 mr-8 box-shadow-pop rounded-lg bg-lightGrey-100"
    >
      <div
        class="p-4 w-48 h-64"
        @Click="
          detail(
            `/admin/confirmReviewDetail`,
            item.applicantType,
            item.id,
            item.applicant.id
          )
        "
      >
        <div class="flex content-center justify-center">
          <!-- <img class="box-shadow-pop" v-bind:src="item.picture.large" /> -->
          <img
            class="box-shadow-pop"
            src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp"
          />
        </div>
        <h4
          class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
        >
          <!-- <b>{{
            item.applicant.profile.name
              ? item.applicant.profile.name +
                " " +
                item.applicant.profile.fatherName
              : "-"
          }}</b> -->
          <!-- <b>Endu Mathi</b> -->
        </h4>
        <br />
        <span
          class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
        >
          {{ item.applicantType ? item.applicantType : "-" }}
        </span>
        <span
          class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
        >
          {{ item.newLicenseCode ? item.newLicenseCode : "-" }}
        </span>
        <span
          class="text-lightBlueB-500 mt-tiny flex justify-end content-center"
        >
          {{ item.createdAt ? moment(item.createdAt).fromNow() : "-" }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import moment from "moment";
export default {
  computed: {
    moment: () => moment,
  },
  props: ["evaluateReview"],
  name: "EvaluateReview",

  setup(props) {
    let router = useRouter();

    console.log("props value", props.evaluateReview)
    let evaluationsList = props.evaluateReview;
    // console.log("evaluations list", evaluationsList)
    
    const getProfileInfo = () => {
      console.log("evaluations list,,", evaluationsList)
      for(let evaluation in evaluationsList) {
        console.log("evvvv", evaluationsList[evaluation].renewal === undefined)
        if(evaluationsList[evaluation].renewal !== undefined) {
          evaluationsList[evaluation].applicant = evaluationsList[evaluation].renewal;
          evaluationsList[evaluation].newLicenseCode = evaluationsList[evaluation].renewal.renewalCode;
          console.log("evaluation applicant", evaluationsList[evaluation].applicant)
        } else if(evaluationsList[evaluation].verification !== undefined) {
          evaluationsList[evaluation].applicant = evaluationsList[evaluation].verification;
          evaluationsList[evaluation].newLicenseCode = evaluationsList[evaluation].verification.verificationCode;
          console.log("evaluation verification", evaluationsList[evaluation].verification)
        } else if(evaluationsList[evaluation].newLicense !== undefined) {
          evaluationsList[evaluation].applicant = evaluationsList[evaluation].newLicense;
          evaluationsList[evaluation].newLicenseCode = evaluationsList[evaluation].newLicense.newLicenseCode;
          console.log("evaluation new license", evaluationsList[evaluation].newLicense)
        }
        else if(evaluationsList[evaluation].goodStanding !== undefined) {
          evaluationsList[evaluation].applicant = evaluationsList[evaluation].goodStanding;
          evaluationsList[evaluation].newLicenseCode = evaluationsList[evaluation].goodStanding.goodStandingCode;
          console.log("evaluation good standing", evaluationsList[evaluation].goodStanding)

        }
      }
    }
    const detail = (data, applicationType, applicationId, applicantId) => {
      const url =
        data + "/" + applicationType + "/" + applicationId + "/" + applicantId;
      router.push(url);
    };

    onMounted(() => {
      getProfileInfo();
    })
    return {
      evaluationsList,
      detail
    }
  },
};
</script>
<style scoped>
img {
  border-radius: 50%;
  margin-bottom: 1rem;
  width: 80px;
  height: 80px;
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
</style>
